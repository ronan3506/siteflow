import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArchitectHamburgerDrawer, type ArchMenuAction } from "./ArchitectHamburgerDrawer";
import { InvitePanel } from "./InvitePanel";
import { SettingsPanel } from "./SettingsPanel";
import { SiteflowToast } from "./SiteflowToast";
import { Screen5 } from "./screens/Screen5";
import InteractiveTimeline, { type TimelineTaskId } from "./InteractiveTimeline";
import TimelineTaskDetail from "./TimelineTaskDetail";
import TimelineDecisionDetail from "./TimelineDecisionDetail";
import TimelineSiteUpdateDetail from "./TimelineSiteUpdateDetail";
import { useLanguage } from "../i18n/LanguageContext";
import { useTranslations } from "../i18n/translations";
import { LangPickerModal } from "./screens/LangPickerModal";

// Client Figma screen imports
import Component2Descisons from "../../imports/2Descisons/2Descisons";
import Component3ReveiwDex from "../../imports/3ReveiwDex/3ReveiwDex";
import Component4DecSent from "../../imports/4DecSent/4DecSent";
import Component5Issues from "../../imports/5Issues/5Issues";
import Component7IssuesDetail from "../../imports/7IssuesDetailIssueView-1/7IssuesDetailIssueView";

// Header SVG (same as ArchitectApp)
import headerSvgPaths from "../../imports/1TodayBoardHomeScreen-1/svg-dgyex2e769";

// Nav icons (shared with Architect)
import navSvgPaths from "../../imports/6IssuesListUrgentIssues-1/svg-fjo5syj5my";
import homeNavSvgPaths from "../../imports/1HomeProjectOverviewFinalColor/svg-ibu8qrj20t";

// DecisionSent SVG (for animated checkmark)
import decSentSvg from "../../imports/4DecSent/svg-stlgi2ker8";

// Client Home screen images
import imgDecisionHero from "../../imports/Html→Body/110743daaaffd7c07b96febb985bc8100f12a10a.png";
import imgDecisionHeroOverlay from "../../imports/Html→Body/4731c8b8c5ada47ca0ace7db11fcf01e8003820a.png";
import imgIssueAvatar from "../../imports/Html→Body/d915b7770c88e6e2e7d134ed612fde2c0cdb3568.png";
import imgRecentActivity from "../../imports/Html→Body/e7298fdc013de7e259597f15a4ca0359437408c9.png";

// ─── Types ─────────────────────────────────────────────────────────────────────
type TabScreen = "home" | "decisions" | "issues" | "timeline";
type DetailScreen =
  | "reviewDecision"
  | "decisionSent"
  | "issueDetail"
  | "timelineTaskDetail"
  | "timelineDecisionDetail"
  | "timelineSiteUpdate"
  | "inviteScreen"
  | "settingsScreen";

const TAB_IDS: TabScreen[] = ["home", "decisions", "issues", "timeline"];
const NAV_TABS: { id: TabScreen; label: string }[] = [
  { id: "home", label: "HOME" },
  { id: "decisions", label: "DECISIONS" },
  { id: "issues", label: "ISSUES" },
  { id: "timeline", label: "TIMELINE" },
];

// ─── Layout constants ──────────────────────────────────────────────────────────
const FRAME_W = 390;
const NATIVE_W = 412; // for InteractiveTimeline (412px native)
const SCALE = FRAME_W / NATIVE_W;
const NAV_H = 64;
const HEADER_NATIVE_H = 64;
const HEADER_H = HEADER_NATIVE_H * SCALE;

// ─── Timeline height helpers (copied from ArchitectApp) ───────────────────────
type TFilter = "today" | "week" | "month";
type AFilter = "all" | "issues" | "decisions";

const TL_META = [
  { type: "completed" as const, day: "today" as const },
  { type: "issue" as const, day: "today" as const },
  { type: "resolved" as const, day: "today" as const },
  { type: "decision" as const, day: "today" as const },
  { type: "siteUpdate" as const, day: "today" as const },
  { type: "completed" as const, day: "oct23" as const },
  { type: "clearance" as const, day: "oct23" as const },
] as const;

const TL_ENTRY_H: Record<string, number> = {
  completed: 74, issue: 104, resolved: 74, decision: 93, siteUpdate: 225, clearance: 93,
};

function timelineNativeH(tf: TFilter, af: AFilter): number {
  const vis = TL_META.filter((e) => {
    if (tf === "today" && e.day !== "today") return false;
    if (af === "issues" && e.type !== "issue" && e.type !== "resolved") return false;
    if (af === "decisions" && e.type !== "decision") return false;
    return true;
  });
  const BASE = 242.83;
  const BOTTOM_PAD = 40;
  const GROUP_HEADER = 50;
  if (vis.length === 0) return Math.ceil(BASE + 240 + BOTTOM_PAD) + 32;
  const todayE = vis.filter((e) => e.day === "today");
  const oct23E = vis.filter((e) => e.day === "oct23");
  let h = BASE;
  if (todayE.length > 0) {
    const eH = todayE.reduce((s, e) => s + TL_ENTRY_H[e.type], 0) + Math.max(0, todayE.length - 1) * 16;
    h += GROUP_HEADER + eH;
  }
  if (oct23E.length > 0) {
    const eH = oct23E.reduce((s, e) => s + TL_ENTRY_H[e.type], 0) + Math.max(0, oct23E.length - 1) * 16;
    h += 24 + GROUP_HEADER + eH;
  }
  h += BOTTOM_PAD;
  return Math.ceil(h) + 32;
}

// ─── Motion variants ──────────────────────────────────────────────────────────
const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const EASE_DETAIL = [0.16, 1, 0.3, 1] as const;

const tabVariants = {
  initial: { opacity: 0, y: 8, scale: 0.995 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -6, scale: 0.997 },
};

const detailVariants = {
  initial: { opacity: 0, y: 22, scale: 0.978 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 14, scale: 0.988 },
};

// ─── PersistentHeader ─────────────────────────────────────────────────────────
function PersistentHeader({ onMenuOpen }: { onMenuOpen: () => void }) {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  const [langOpen, setLangOpen] = useState(false);
  return (
    <div className="absolute top-0 left-0 right-0 overflow-hidden bg-white z-40" style={{ height: HEADER_H }}>
      <div style={{
        width: NATIVE_W, height: HEADER_NATIVE_H,
        position: "absolute", top: 0, left: 0,
        transform: `scale(${SCALE})`, transformOrigin: "top left",
      }}>
        <div className="absolute bg-white h-[64px] left-0 top-0 w-[412px]">
          <button
            onClick={onMenuOpen}
            aria-label="Open menu"
            className="absolute cursor-pointer active:opacity-60 transition-opacity"
            style={{ left: 8, top: 8, width: 56, height: 48, background: "transparent", zIndex: 10 }}
          />
          {/* Language toggle */}
          <button onClick={() => setLangOpen(true)} className="absolute bg-[#7a3100] h-[31px] left-[300px] rounded-[28.615px] top-[17px] px-[12px] flex items-center gap-[6px] cursor-pointer active:opacity-80 transition-opacity" style={{ border: 'none', zIndex: 20 }}>
            <span className="capitalize font-['Outfit:Regular',sans-serif] text-[15.3px] text-white whitespace-nowrap leading-none">
              {t("langPillLabel")}
            </span>
            <div className="size-[20px] shrink-0 mt-[1px]">
              <svg className="block size-full" fill="none" viewBox="0 0 25.8 25.8">
                 <path d={headerSvgPaths.p2e913cc0} fill="white" />
              </svg>
            </div>
          </button>
          {/* Hamburger */}
          <div className="absolute h-[16px] left-[24px] top-[24px] w-[21px]">
            <div className="absolute inset-[-1.56%_-1.19%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 16.5">
                <path d={headerSvgPaths.p1c170d80} fill="#2E2A28" stroke="#2E2A28" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
          {/* SITEFLOW wordmark */}
          <div className="absolute h-[19.992px] left-[68px] top-[22px] w-[145.299px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 145.299 19.9916">
              <path d={headerSvgPaths.pf91ed00} fill="black" />
              <path d={headerSvgPaths.p20c7180} fill="black" />
              <path d={headerSvgPaths.p1cecf900} fill="black" />
              <path d={headerSvgPaths.p226d7bf0} fill="black" />
              <path d={headerSvgPaths.p352bf872} fill="black" />
              <path d={headerSvgPaths.p252d3700} fill="black" />
              <path d={headerSvgPaths.pf0fcc80} fill="black" />
              <path d={headerSvgPaths.p31bda800} fill="black" />
            </svg>
          </div>
        </div>
      </div>
      <LangPickerModal open={langOpen} onClose={() => setLangOpen(false)} />
    </div>
  );
}

// ─── BackHeader ───────────────────────────────────────────────────────────────
function BackHeader({ onBack, label }: { onBack: () => void; label: string }) {
  return (
    <div
      className="absolute top-0 left-0 right-0 bg-[#fbf9f8] z-40 flex items-center"
      style={{ height: HEADER_H, borderBottom: "1px solid #f0ebe5" }}
    >
      <button
        onClick={onBack}
        className="flex items-center gap-[8px] cursor-pointer active:opacity-60 transition-opacity px-[16px]"
        style={{ height: HEADER_H }}
      >
        <svg width="9" height="15" viewBox="0 0 9.09 15" fill="none" aria-hidden="true">
          <path d="M8.09 14L1 7.5L8.09 1" stroke="#7A3100" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-['Manrope:Bold',sans-serif] font-bold uppercase tracking-[0.8px]" style={{ fontSize: 14, color: "#7a3100" }}>
          {label}
        </span>
      </button>
    </div>
  );
}

// ─── ClientBottomNav ──────────────────────────────────────────────────────────
function ClientBottomNav({ active, onNav }: { active: TabScreen; onNav: (t: TabScreen) => void }) {
  const icons: Record<TabScreen, JSX.Element> = {
    home: (
      <svg viewBox="0 0 16 18" fill="none" className="w-[16px] h-[18px]">
        <path d={navSvgPaths.p12a32500} fill="currentColor" />
      </svg>
    ),
    decisions: (
      <svg viewBox="0 0 18 19" fill="none" className="w-[18px] h-[19px]">
        <path d={homeNavSvgPaths.p19ed9400} fill="currentColor" />
      </svg>
    ),
    issues: (
      <svg viewBox="0 0 22 19" fill="none" className="w-[22px] h-[19px]">
        <path d={navSvgPaths.p7555480} fill="currentColor" />
      </svg>
    ),
    timeline: (
      <svg viewBox="0 0 22 12" fill="none" className="w-[22px] h-[12px]">
        <path d={navSvgPaths.p3baffdc0} fill="currentColor" />
      </svg>
    ),
  };

  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-50 bg-[#fbf9f8] border-t border-[#8a7267] flex items-center"
      style={{ height: NAV_H }}
    >
      {NAV_TABS.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onNav(tab.id)}
            className="relative flex-1 h-full flex flex-col items-center justify-center gap-[4px] cursor-pointer"
            style={{ color: isActive ? "white" : "#564239" }}
          >
            {isActive && (
              <motion.div
                layoutId="client-nav-pill"
                className="absolute inset-0 bg-[#7a3100]"
                transition={{ type: "spring", stiffness: 380, damping: 34 }}
              />
            )}
            <motion.div
              className="relative z-10 flex flex-col items-center gap-[4px]"
              animate={{ scale: isActive ? 1.04 : 1 }}
              transition={{ type: "spring", stiffness: 360, damping: 26 }}
            >
              {icons[tab.id]}
              <span className="font-['Manrope:SemiBold',sans-serif] font-semibold text-[10px] tracking-[1px] uppercase leading-[15px]">
                {tab.label}
              </span>
            </motion.div>
          </button>
        );
      })}
    </div>
  );
}

// ─── Scroll Areas ─────────────────────────────────────────────────────────────
function ClientScrollArea({
  contentHeight,
  reserveNav = true,
  children,
}: {
  contentHeight: number;
  reserveNav?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className="no-scrollbar absolute inset-0 overflow-y-auto overflow-x-hidden"
      style={{ paddingBottom: reserveNav ? NAV_H : 0 }}
    >
      <div style={{ height: contentHeight, position: "relative" }}>
        {children}
      </div>
    </div>
  );
}

// StageScrollArea for InteractiveTimeline (412px → 390px scaling)
function StageScrollArea({
  contentHeight,
  reserveNav = true,
  clipTop = 0,
  children,
}: {
  contentHeight: number;
  reserveNav?: boolean;
  clipTop?: number;
  children: React.ReactNode;
}) {
  const visibleH = (contentHeight - clipTop) * SCALE;
  return (
    <div
      className="no-scrollbar absolute inset-0 overflow-y-auto overflow-x-hidden"
      style={{ paddingBottom: reserveNav ? NAV_H : 0 }}
    >
      <div style={{ width: FRAME_W, height: visibleH, position: "relative", overflow: "hidden" }}>
        <div
          style={{
            width: NATIVE_W,
            height: contentHeight,
            position: "absolute",
            top: -clipTop,
            left: 0,
            transform: `scale(${SCALE})`,
            transformOrigin: "top left",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

// ─── Overlay tap target ───────────────────────────────────────────────────────
function Overlay({
  top, left = 0, width, height, onClick, label, zIndex = 10,
}: {
  top: number; left?: number; width: number; height: number;
  onClick: () => void; label: string; zIndex?: number;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="absolute cursor-pointer active:opacity-0 transition-opacity"
      style={{ top, left, width, height, background: "transparent", zIndex, touchAction: "manipulation" }}
    />
  );
}

// ─── Animated Project Status Card ─────────────────────────────────────────────
function AnimatedProjectStatusCard({ visitKey }: { visitKey: number }) {
  const [count, setCount] = useState(0);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    setCount(0);
    setBarWidth(0);
    const startTime = Date.now();
    const DURATION = 1100;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(78 * eased));
      setBarWidth(Math.round(246.5 * eased));
      if (t < 1) requestAnimationFrame(tick);
      else { setCount(78); setBarWidth(246.5); }
    };

    const delay = setTimeout(() => requestAnimationFrame(tick), 300);
    return () => clearTimeout(delay);
  }, [visitKey]);

  const infoBoxes = [
    { count: "03", label1: "PENDING", label2: "DECISIONS", color: "#7a3100" },
    { count: "02", label1: "ACTIVE", label2: "ISSUES", color: "#ba1a1a" },
    { count: "42", label1: "DAYS", label2: "REMAINING", color: "#1b1c1c" },
  ];

  return (
    <div
      className="absolute"
      style={{ left: 0, top: 0, width: 358, height: 241, overflow: "hidden", borderRadius: 12 }}
    >
      {/* Blurred gray background */}
      <div className="absolute inset-0" style={{ background: "rgba(232,232,232,0.88)" }} />

      {/* "PROJECT STATUS" label */}
      <div
        className="absolute font-['Manrope:ExtraBold',sans-serif] font-extrabold uppercase"
        style={{
          left: 21, top: 26, fontSize: 30, letterSpacing: "-0.75px", lineHeight: "33px",
          color: "#7a3100",
        }}
      >
        PROJECT<br />STATUS
      </div>

      {/* 78% counter — positioned wrapper shares exact left/width with ON TRACK pill so centers align */}
      <div className="absolute flex justify-center" style={{ left: 231, top: 21, width: 84 }}>
        <motion.div
          key={`pct-${visitKey}`}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.25 }}
          className="font-['Manrope:ExtraBold',sans-serif] font-extrabold"
          style={{
            fontSize: 56, letterSpacing: "-2.8px", lineHeight: "56px",
            color: "#7a3100", textAlign: "center",
          }}
        >
          {count}%
        </motion.div>
      </div>

      {/* ON TRACK badge */}
      <motion.div
        key={`badge-${visitKey}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="absolute flex items-center justify-center rounded-[6px]"
        style={{
          left: 231, top: 80, width: 84, height: 24.5,
          background: "#e8f5e9",
        }}
      >
        <span className="font-['Manrope:ExtraBold',sans-serif] font-extrabold text-[11px] tracking-[0.55px] uppercase" style={{ color: "#2e7d32" }}>
          ON TRACK
        </span>
      </motion.div>

      {/* Progress bar */}
      <div
        className="absolute"
        style={{ left: 20, top: 120.5, width: 316, height: 8, borderRadius: 9999 }}
      >
        {/* Track */}
        <div className="absolute inset-0 rounded-full" style={{ background: "rgba(255,255,255,0.5)", border: "1px solid rgba(221,193,180,0.2)" }} />
        {/* Fill */}
        <div
          className="absolute h-[6px] rounded-full"
          style={{
            left: 0, top: 1,
            width: barWidth,
            background: "#7a3100",
            transition: "none",
          }}
        />
      </div>

      {/* 3 info boxes */}
      <div
        className="absolute grid gap-x-[8px]"
        style={{ left: 20, top: 144.5, width: 316, gridTemplateColumns: "repeat(3, 1fr)" }}
      >
        {infoBoxes.map((box, i) => (
          <motion.div
            key={`box-${visitKey}-${i}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE_OUT, delay: 0.35 + i * 0.1 }}
            className="relative rounded-[12px] flex flex-col justify-start"
            style={{
              height: 76,
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,0.8)",
              boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
            }}
          >
            <div
              className="font-['Manrope:ExtraBold',sans-serif] font-extrabold text-center"
              style={{ fontSize: 18, color: box.color, paddingTop: 11, lineHeight: "27px" }}
            >
              {box.count}
            </div>
            <div
              className="font-['Manrope:Bold',sans-serif] font-bold text-center uppercase"
              style={{ fontSize: 9, color: "#564239", letterSpacing: "1px", lineHeight: "13.5px", paddingTop: 4 }}
            >
              {box.label1}
              {box.label2 && <><br />{box.label2}</>}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── ClientHomeTab ────────────────────────────────────────────────────────────
function ClientHomeTab({
  visitKey,
  onOpenDecisions,
  onOpenIssues,
}: {
  visitKey: number;
  onOpenDecisions: () => void;
  onOpenIssues: () => void;
}) {
  return (
    <ClientScrollArea contentHeight={1120}>
      {/* Project Status card section */}
      <div className="absolute" style={{ left: 16, top: 16, width: 358, height: 242.5 }}>
        {/* Border frame */}
        <div
          className="absolute inset-0 rounded-[12px]"
          style={{ border: "1px solid #ddc1b4" }}
        />
        {/* Animated card content */}
        <AnimatedProjectStatusCard visitKey={visitKey} />
      </div>

      {/* ACTION REQUIRED – Decision Card */}
      <div className="absolute" style={{ left: 16, top: 282.5, width: 358 }}>
        {/* Section heading */}
        <div
          className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
          style={{ fontSize: 14, letterSpacing: "1.4px", color: "#564239", paddingLeft: 4, marginBottom: 16 }}
        >
          ACTION REQUIRED
        </div>
        {/* Decision card — entire card is one tap target for Review Decision */}
        <button
          onClick={onOpenDecisions}
          className="relative w-full rounded-[12px] overflow-hidden text-left cursor-pointer active:opacity-90 transition-opacity"
          style={{
            border: "1px solid #c6c6c6",
            background: "#fff",
            boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
            display: "block",
          }}
        >
          {/* Hero image */}
          <div className="relative overflow-hidden" style={{ height: 176 }}>
            <img alt="" className="absolute inset-0 max-w-none size-full object-cover pointer-events-none" src={imgDecisionHero} style={{ height: "202.27%", top: "-51.14%", left: 0, width: "100%" }} />
            <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ height: 204, left: -6, top: -19.5, width: 362, position: "absolute" }}>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDecisionHeroOverlay} />
            </div>
          </div>
          {/* Card content */}
          <div style={{ padding: "16px 16px 20px" }}>
            {/* APPROVAL NEEDED badge */}
            <div
              className="inline-flex items-center rounded-[5px] mb-[10px]"
              style={{ background: "#fff3e0", padding: "5px 8px" }}
            >
              <span className="font-['Manrope:Bold',sans-serif] font-bold uppercase" style={{ fontSize: 9, color: "#f5a623", letterSpacing: "0.37px" }}>
                APPROVAL NEEDED
              </span>
            </div>
            <div className="font-['Manrope:ExtraBold',sans-serif] font-extrabold" style={{ fontSize: 18, color: "#1b1c1c", marginBottom: 4 }}>
              AC Layout Revision
            </div>
            <div className="font-['Manrope:SemiBold',sans-serif] font-semibold" style={{ fontSize: 13, color: "#564239", marginBottom: 16 }}>
              +₹12,450 increase • +4 day delay
            </div>
            {/* CTA visual — not an interactive button; the card itself is the tap target */}
            <div
              className="w-full rounded-[8px] flex items-center justify-center"
              style={{ height: 45, background: "#7a3100", pointerEvents: "none" }}
            >
              <span className="font-['Manrope:Bold',sans-serif] font-bold" style={{ fontSize: 14, color: "#fff" }}>
                Review Decision
              </span>
            </div>
          </div>
        </button>
      </div>

      {/* SITE ISSUES section */}
      <div className="absolute" style={{ left: 16, top: 700, width: 358 }}>
        <div className="flex items-center justify-between mb-[16px]">
          <span className="font-['Manrope:Bold',sans-serif] font-bold uppercase" style={{ fontSize: 14, letterSpacing: "1.4px", color: "#564239", paddingLeft: 4 }}>
            SITE ISSUES
          </span>
          <span className="font-['Manrope:SemiBold',sans-serif] font-semibold" style={{ fontSize: 12, color: "#8a7267" }}>
            2 ACTIVE
          </span>
        </div>

        {/* Issue card 1: Column Misaligned */}
        <div
          className="relative rounded-[12px] mb-[8px]"
          style={{ border: "1px solid #c6c6c6", background: "rgba(245,243,243,0.5)", height: 92.5 }}
        >
          {/* Avatar */}
          <div className="absolute overflow-clip rounded-[8px]" style={{ left: 12, top: 13.25, width: 64, height: 64 }}>
            <div className="absolute" style={{ left: -1, top: -2, width: 65, height: 66 }}>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIssueAvatar} />
            </div>
          </div>
          {/* Text content */}
          <div className="absolute" style={{ left: 92, top: 12 }}>
            <div className="font-['Manrope:Bold',sans-serif] font-bold" style={{ fontSize: 15, color: "#1b1c1c", marginBottom: 4 }}>
              Column Misaligned
            </div>
            <div className="font-['Manrope:Medium',sans-serif] font-medium" style={{ fontSize: 12, color: "#564239", marginBottom: 8 }}>
              Ground floor • Corrective measures needed
            </div>
            <button
              onClick={onOpenIssues}
              className="font-['Manrope:Bold',sans-serif] font-bold cursor-pointer active:opacity-60 transition-opacity"
              style={{ fontSize: 12, color: "#7a3100", background: "none", border: "none", padding: 0 }}
            >
              View Details
            </button>
          </div>
        </div>

        {/* Issue card 2: Material Shortage */}
        <div
          className="relative rounded-[12px] opacity-80"
          style={{ border: "1px solid #c6c6c6", background: "rgba(245,243,243,0.5)", height: 92.5 }}
        >
          {/* Gray icon box */}
          <div className="absolute overflow-clip rounded-[8px] flex items-center justify-center" style={{ left: 12, top: 13.25, width: 64, height: 64, background: "#e4e2e2" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2V18M2 16H16V2H2V16M3 14H15L11.25 9L8.25 13L6 10L3 14V14M5.5 7C5.91667 7 6.27083 6.85417 6.5625 6.5625C6.85417 6.27083 7 5.91667 7 5.5C7 5.08333 6.85417 4.72917 6.5625 4.4375C6.27083 4.14583 5.91667 4 5.5 4C5.08333 4 4.72917 4.14583 4.4375 4.4375C4.14583 4.72917 4 5.08333 4 5.5C4 5.91667 4.14583 6.27083 4.4375 6.5625C4.72917 6.85417 5.08333 7 5.5 7V7" fill="#8A7267" />
            </svg>
          </div>
          <div className="absolute" style={{ left: 92, top: 12 }}>
            <div className="font-['Manrope:Bold',sans-serif] font-bold" style={{ fontSize: 15, color: "#1b1c1c", marginBottom: 4 }}>
              Material Shortage
            </div>
            <div className="font-['Manrope:Medium',sans-serif] font-medium" style={{ fontSize: 12, color: "#564239", marginBottom: 8 }}>
              Scaffolding • Re-ordering in progress
            </div>
            <button
              onClick={onOpenIssues}
              className="font-['Manrope:Bold',sans-serif] font-bold cursor-pointer active:opacity-60 transition-opacity"
              style={{ fontSize: 12, color: "#7a3100", background: "none", border: "none", padding: 0 }}
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="absolute" style={{ left: 16, top: 952, width: 358, height: 1, background: "rgba(221,193,180,0.3)" }} />

      {/* RECENT UPDATES section */}
      <div className="absolute" style={{ left: 16, top: 969, width: 358 }}>
        <div className="font-['Manrope:Bold',sans-serif] font-bold uppercase mb-[16px]" style={{ fontSize: 14, letterSpacing: "1.4px", color: "#564239", paddingLeft: 4 }}>
          RECENT UPDATES
        </div>
        {/* Activity card */}
        <div
          className="relative rounded-[12px]"
          style={{ border: "1px solid #c6c6c6", background: "#f8f6f5", height: 92.5 }}
        >
          {/* Thumbnail */}
          <div className="absolute overflow-clip rounded-[8px]" style={{ left: 12, top: 13.25, width: 64, height: 64 }}>
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRecentActivity} />
          </div>
          {/* Text */}
          <div className="absolute" style={{ left: 92, top: 12 }}>
            <div className="font-['Manrope:SemiBold',sans-serif] font-semibold" style={{ fontSize: 14, color: "#1b1c1c", lineHeight: "17.5px", marginBottom: 8 }}>
              Concrete pour completed<br />in 2nd floor
            </div>
            <div className="font-['Manrope:Regular',sans-serif]" style={{ fontSize: 12, color: "#564239" }}>
              2 hours ago
            </div>
          </div>
          {/* Chevron */}
          <div className="absolute flex items-center justify-center" style={{ right: 16, top: "50%", transform: "translateY(-50%)" }}>
            <svg width="7.4" height="12" viewBox="0 0 7.4 12" fill="none">
              <path d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6V6" fill="#8A7267" />
            </svg>
          </div>
        </div>
      </div>
    </ClientScrollArea>
  );
}

// ─── Decisions Tab ────────────────────────────────────────────────────────────
function DecisionsTab({ onReview }: { onReview: () => void }) {
  const FIGMA_HEADER = 64;
  const CARD_TOP = 154 - FIGMA_HEADER; // 90
  const CARD_H = 148;
  const CARD_GAP = 16;

  return (
    <ClientScrollArea contentHeight={760}>
      <div style={{ marginTop: -FIGMA_HEADER, pointerEvents: "none" }}>
        <Component2Descisons />
      </div>
      {[0, 1, 2].map((i) => (
        <Overlay
          key={i}
          top={CARD_TOP + i * (CARD_H + CARD_GAP)}
          left={16}
          width={358}
          height={CARD_H}
          onClick={onReview}
          label={`Open decision card ${i + 1}`}
          zIndex={20}
        />
      ))}
      <Overlay
        top={CARD_TOP + 3 * (CARD_H + CARD_GAP)}
        left={16}
        width={358}
        height={158}
        onClick={onReview}
        label="Open terrace planter decision"
        zIndex={20}
      />
    </ClientScrollArea>
  );
}

// ─── Issues Tab ───────────────────────────────────────────────────────────────
function IssuesTab({ onViewIssue }: { onViewIssue: () => void }) {
  const FIGMA_HEADER = 64;

  return (
    <ClientScrollArea contentHeight={1068}>
      <div style={{ marginTop: -FIGMA_HEADER, pointerEvents: "none" }}>
        <Component5Issues />
      </div>
      <Overlay top={164 - FIGMA_HEADER} left={16} width={358} height={225} onClick={onViewIssue} label="View Column Misaligned issue" zIndex={20} />
      <Overlay top={552 - FIGMA_HEADER} left={16} width={358} height={170} onClick={onViewIssue} label="View Electrical Conduit issue" zIndex={20} />
      <Overlay top={738 - FIGMA_HEADER} left={16} width={358} height={170} onClick={onViewIssue} label="View Safety Railing issue" zIndex={20} />
      <Overlay top={924 - FIGMA_HEADER} left={16} width={358} height={170} onClick={onViewIssue} label="View Glazing Imperfection issue" zIndex={20} />
    </ClientScrollArea>
  );
}

// ─── Timeline Tab ─────────────────────────────────────────────────────────────
function TimelineTab({
  onOpenTaskDetail,
  onOpenDecisionDetail,
  onOpenSiteUpdate,
  onOpenIssue,
}: {
  onOpenTaskDetail: (id: TimelineTaskId) => void;
  onOpenDecisionDetail: () => void;
  onOpenSiteUpdate: () => void;
  onOpenIssue: () => void;
}) {
  const [tf, setTf] = useState<TFilter>("today");
  const [af, setAf] = useState<AFilter>("all");

  return (
    <StageScrollArea contentHeight={timelineNativeH(tf, af)} clipTop={64}>
      <InteractiveTimeline
        onOpenTaskDetail={onOpenTaskDetail}
        onOpenDecisionDetail={onOpenDecisionDetail}
        onOpenSiteUpdate={onOpenSiteUpdate}
        onOpenIssue={onOpenIssue}
        onFiltersChange={(newTf, newAf) => { setTf(newTf); setAf(newAf); }}
      />
    </StageScrollArea>
  );
}

// ─── ScreenFrame ──────────────────────────────────────────────────────────────
function ScreenFrame({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="absolute inset-0"
      variants={detailVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.34, ease: EASE_DETAIL }}
    >
      {children}
    </motion.div>
  );
}

// ─── Ask For Change Bottom Sheet ──────────────────────────────────────────────
function AskForChangeSheet({
  open,
  onClose,
  onSubmit,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (text: string) => void;
}) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    onSubmit(text.trim());
    setText("");
  };

  const handleClose = () => {
    setText("");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Dim overlay */}
          <motion.div
            key="ask-change-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/40 z-[70]"
            onClick={handleClose}
          />

          {/* Bottom sheet */}
          <motion.div
            key="ask-change-sheet"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 340, damping: 36 }}
            className="absolute bottom-0 left-0 right-0 z-[80]"
          >
            <div
              className="bg-[#fdfcfb] flex flex-col items-start rounded-tl-[24px] rounded-tr-[24px] w-full"
              style={{ boxShadow: "0px -10px 28px rgba(61,43,31,0.18)" }}
            >
              {/* Drag handle */}
              <div className="flex items-center justify-center pb-[8px] pt-[16px] w-full">
                <div className="bg-[#d9cfc7] h-[5px] rounded-[9999px] w-[44px]" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-[20px] items-start pb-[36px] pt-[8px] px-[24px] w-full">

                {/* Header */}
                <div className="flex flex-col gap-[4px] w-full">
                  <div
                    className="font-['Manrope:Bold',sans-serif] font-bold text-[#1a1a1a]"
                    style={{ fontSize: 22, letterSpacing: "-0.5px", lineHeight: "30px" }}
                  >
                    Request Changes
                  </div>
                  <div
                    className="font-['Manrope:Regular',sans-serif] text-[#6b5c54]"
                    style={{ fontSize: 13, lineHeight: "18px" }}
                  >
                    Describe what you'd like updated.
                  </div>
                </div>

                {/* Text input area with mic icon */}
                <div className="relative w-full">
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="e.g. Please revise the material spec on the east wall..."
                    rows={4}
                    className="w-full resize-none outline-none font-['Manrope:Regular',sans-serif] text-[#1a1a1a] placeholder:text-[#b0a49c]"
                    style={{
                      background: "#f5f1ee",
                      border: "1px solid #e0d8d1",
                      borderRadius: 12,
                      padding: "14px 48px 14px 16px",
                      fontSize: 14,
                      lineHeight: "20px",
                    }}
                  />
                  {/* Microphone icon */}
                  <button
                    aria-label="Voice input"
                    className="absolute bottom-[12px] right-[14px] cursor-pointer active:opacity-60 transition-opacity"
                    style={{ color: "#7a3100" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <rect x="9" y="2" width="6" height="12" rx="3" fill="currentColor" opacity="0.9" />
                      <path d="M5 10a7 7 0 0 0 14 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="9" y1="22" x2="15" y2="22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                {/* Submit button */}
                <button
                  onClick={handleSubmit}
                  disabled={!text.trim()}
                  className="w-full rounded-[10px] cursor-pointer transition-opacity"
                  style={{
                    background: text.trim() ? "#7a3100" : "#c4b5ad",
                    height: 52,
                  }}
                >
                  <span
                    className="font-['Manrope:SemiBold',sans-serif] font-semibold uppercase tracking-[1.2px] text-white"
                    style={{ fontSize: 12 }}
                  >
                    SEND REQUEST
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Review Decision Detail ───────────────────────────────────────────────────
// Shows the 3ReveiwDex Figma screen (scrollable) with a sticky APPROVE / ASK FOR CHANGE bar
function ReviewDecisionDetail({
  onApprove,
  onAskForChangeDone,
}: {
  onApprove: () => void;
  onAskForChangeDone: () => void;
}) {
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleSubmitChange = (_text: string) => {
    setSheetOpen(false);
    onAskForChangeDone();
  };

  return (
    <ScreenFrame>
      <div className="absolute inset-0 bg-[#f9fafb] flex flex-col">
        {/* Scrollable content — shift up by 64px to remove Figma's baked-in pt-[64px] fake header */}
        <div className="no-scrollbar flex-1 overflow-y-auto overflow-x-hidden">
          <div style={{ width: 390, position: "relative", marginTop: -64 }}>
            <Component3ReveiwDex />
          </div>
        </div>
        {/* Sticky action bar — matching Figma Button1/Button2 design */}
        <div
          className="shrink-0 bg-white"
          style={{ borderTop: "1px solid #e5e7eb", height: 105, paddingTop: 17, paddingBottom: 16, paddingLeft: 16, paddingRight: 16 }}
        >
          <div className="flex gap-[12px] h-[56px]">
            <button
              onClick={onApprove}
              className="flex-1 rounded-[8px] cursor-pointer active:opacity-80 transition-opacity"
              style={{ background: "#7a3100" }}
            >
              <span className="font-['Manrope:Regular',sans-serif] font-normal tracking-[1.1px] uppercase" style={{ fontSize: 11, color: "#fff" }}>
                APPROVE
              </span>
            </button>
            <button
              onClick={() => setSheetOpen(true)}
              className="flex-1 rounded-[8px] cursor-pointer active:opacity-80 transition-opacity"
              style={{ background: "#e9e8e7" }}
            >
              <span className="font-['Manrope:Regular',sans-serif] font-normal tracking-[1.1px] uppercase" style={{ fontSize: 11, color: "#1b1c1c" }}>
                ASK FOR CHANGE
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Ask for Change bottom sheet — rendered inside ScreenFrame so it clips correctly */}
      <AskForChangeSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        onSubmit={handleSubmitChange}
      />
    </ScreenFrame>
  );
}

// ─── Decision Sent Detail ─────────────────────────────────────────────────────
// Shows the 4DecSent Figma screen with animated tick overlay
function DecisionSentDetail({
  animKey,
  onBackToHome,
}: {
  animKey: number;
  onBackToHome: () => void;
}) {
  // Figma frame is 390×885px with a 64px baked-in header we hide via marginTop.
  // Button positions in Figma coordinates (before the 64px header shift):
  //   BACK TO HOME: top=612, height=52
  //   VIEW LOGS:    top=676, height=54
  // After the 64px shift the visual tops become 548 and 612 within the screen.
  const FIGMA_HEADER = 64;
  const BTN_BACK_TOP  = 612 - FIGMA_HEADER; // 548
  const BTN_LOGS_TOP  = 676 - FIGMA_HEADER; // 612

  return (
    <ScreenFrame>
      {/* ── Visual layer (non-interactive, pointer-events disabled) ── */}
      <div className="absolute inset-0 bg-[#fbf9f8]" style={{ pointerEvents: "none" }}>
        <div className="no-scrollbar absolute inset-0 overflow-y-auto overflow-x-hidden">
          <div style={{ width: 390, position: "relative", height: 700 }}>
            <div style={{ marginTop: -FIGMA_HEADER }}>
              <Component4DecSent />
            </div>

            {/* Animated checkmark circle */}
            <motion.div
              key={`tick-${animKey}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute rounded-full flex items-center justify-center"
              style={{
                left: 147, top: 153 - FIGMA_HEADER, width: 96, height: 96,
                background: "rgba(16,185,129,0.1)",
              }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <path d={decSentSvg.pf059c0} fill="#2E7D32" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Interactive layer — sits above the scroll container, never scrolls ── */}
      {/* All pointer-events are disabled except on the explicit tap zones below.  */}
      <div className="absolute inset-0" style={{ pointerEvents: "none" }}>
        {/* BACK TO HOME → Client Home dashboard */}
        <button
          onClick={onBackToHome}
          aria-label="Back to home"
          style={{
            position: "absolute",
            top: BTN_BACK_TOP,
            left: 16,
            width: 358,
            height: 52,
            pointerEvents: "auto",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            touchAction: "manipulation",
          }}
        />
        {/* VIEW LOGS (stub) */}
        <button
          aria-label="View logs"
          style={{
            position: "absolute",
            top: BTN_LOGS_TOP,
            left: 16,
            width: 358,
            height: 54,
            pointerEvents: "auto",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            touchAction: "manipulation",
          }}
        />
      </div>
    </ScreenFrame>
  );
}

// ─── Request Info Bottom Sheet ────────────────────────────────────────────────
function RequestInfoSheet({
  open,
  onClose,
  onSubmit,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (text: string) => void;
}) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    onSubmit(text.trim());
    setText("");
  };

  const handleClose = () => {
    setText("");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="req-info-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/40 z-[70]"
            onClick={handleClose}
          />
          <motion.div
            key="req-info-sheet"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 340, damping: 36 }}
            className="absolute bottom-0 left-0 right-0 z-[80]"
          >
            <div
              className="bg-[#fdfcfb] flex flex-col items-start rounded-tl-[24px] rounded-tr-[24px] w-full"
              style={{ boxShadow: "0px -10px 28px rgba(61,43,31,0.18)" }}
            >
              <div className="flex items-center justify-center pb-[8px] pt-[16px] w-full">
                <div className="bg-[#d9cfc7] h-[5px] rounded-[9999px] w-[44px]" />
              </div>
              <div className="flex flex-col gap-[20px] items-start pb-[36px] pt-[8px] px-[24px] w-full">
                <div className="flex flex-col gap-[4px] w-full">
                  <div
                    className="font-['Manrope:Bold',sans-serif] font-bold text-[#1a1a1a]"
                    style={{ fontSize: 22, letterSpacing: "-0.5px", lineHeight: "30px" }}
                  >
                    Request Information
                  </div>
                  <div
                    className="font-['Manrope:Regular',sans-serif] text-[#6b5c54]"
                    style={{ fontSize: 13, lineHeight: "18px" }}
                  >
                    What would you like to know from the site team?
                  </div>
                </div>
                <div className="relative w-full">
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="e.g. Can you confirm the remediation timeline for the column?"
                    rows={4}
                    className="w-full resize-none outline-none font-['Manrope:Regular',sans-serif] text-[#1a1a1a] placeholder:text-[#b0a49c]"
                    style={{
                      background: "#f5f1ee",
                      border: "1px solid #e0d8d1",
                      borderRadius: 12,
                      padding: "14px 48px 14px 16px",
                      fontSize: 14,
                      lineHeight: "20px",
                    }}
                  />
                  <button
                    aria-label="Voice input"
                    className="absolute bottom-[12px] right-[14px] cursor-pointer active:opacity-60 transition-opacity"
                    style={{ color: "#7a3100" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <rect x="9" y="2" width="6" height="12" rx="3" fill="currentColor" opacity="0.9" />
                      <path d="M5 10a7 7 0 0 0 14 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="9" y1="22" x2="15" y2="22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={!text.trim()}
                  className="w-full rounded-[10px] cursor-pointer transition-opacity"
                  style={{
                    background: text.trim() ? "#7a3100" : "#c4b5ad",
                    height: 52,
                  }}
                >
                  <span
                    className="font-['Manrope:SemiBold',sans-serif] font-semibold uppercase tracking-[1.2px] text-white"
                    style={{ fontSize: 12 }}
                  >
                    SEND REQUEST
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Issue Detail Screen ──────────────────────────────────────────────────────
const C7_HEADER_NATIVE = 64;
const C7_CONTENT_NATIVE = 1050;

function IssueDetailScreen({ onRequestInfoDone }: { onRequestInfoDone: () => void }) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const visibleH = (C7_CONTENT_NATIVE - C7_HEADER_NATIVE) * SCALE;

  return (
    <ScreenFrame>
      <div className="no-scrollbar absolute inset-0 overflow-y-auto overflow-x-hidden">
        <div style={{ width: FRAME_W, height: visibleH, position: "relative", overflow: "hidden" }}>
          <div
            style={{
              width: NATIVE_W,
              height: C7_CONTENT_NATIVE,
              position: "absolute",
              top: -C7_HEADER_NATIVE,
              left: 0,
              transform: `scale(${SCALE})`,
              transformOrigin: "top left",
            }}
          >
            <Component7IssuesDetail onRequestInfo={() => setSheetOpen(true)} />
          </div>
        </div>
      </div>

      <RequestInfoSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        onSubmit={() => {
          setSheetOpen(false);
          onRequestInfoDone();
        }}
      />
    </ScreenFrame>
  );
}

// ─── Timeline Detail Screens ──────────────────────────────────────────────────
function TimelineTaskDetailScreen({ taskId, onBack }: { taskId: TimelineTaskId; onBack: () => void }) {
  return (
    <ScreenFrame>
      <div className="no-scrollbar absolute inset-0 overflow-y-auto overflow-x-hidden bg-[#fbf9f8]">
        <div className="flex justify-center">
          <TimelineTaskDetail taskId={taskId} onBack={onBack} />
        </div>
      </div>
    </ScreenFrame>
  );
}

function TimelineDecisionDetailScreen({ onBack }: { onBack: () => void }) {
  return (
    <ScreenFrame>
      <div className="no-scrollbar absolute inset-0 overflow-y-auto overflow-x-hidden bg-[#fbf9f8]">
        <div className="flex justify-center">
          <TimelineDecisionDetail onBack={onBack} />
        </div>
      </div>
    </ScreenFrame>
  );
}

function TimelineSiteUpdateScreen({ onBack }: { onBack: () => void }) {
  return (
    <ScreenFrame>
      <div className="no-scrollbar absolute inset-0 overflow-y-auto overflow-x-hidden bg-[#fbf9f8]">
        <div className="flex justify-center">
          <TimelineSiteUpdateDetail onBack={onBack} />
        </div>
      </div>
    </ScreenFrame>
  );
}

// ─── CSS: hide Figma-baked headers/navbars for non-home screens ───────────────
const FIGMA_HIDE_CSS = `
  .client-root [data-name="Header - TopAppBar"],
  .client-root [data-name="BottomNavBar"],
  .client-root [data-name="BottomNavBar Shell"] {
    display: none !important;
  }
  /* Remove duplicate action bar baked into the 3ReveiwDex Figma frame.
     Scoped with direct-child selector so it does NOT affect the Impact
     section's COST row, which shares the same data-name but lives inside
     [data-name="Border"] > [data-name="Section - 2. IMPACT"]. */
  .client-root [data-name="3. Review Change (Detail)"] > [data-name="Background"] > [data-name="Background+HorizontalBorder"] {
    display: none !important;
  }
  /* Remove bottom padding reserved for the duplicate bar (scoped to Review Decision only) */
  .client-root [data-name="3. Review Change (Detail)"] [data-name="Background"] {
    padding-bottom: 0 !important;
    min-height: unset !important;
  }
  /* Hide the static Figma icon in Decision Sent — animated overlay replaces it */
  .client-root [data-name="4. dec sent"] [data-name="Overlay"] {
    visibility: hidden !important;
  }
  /* Fix Review Decision overscroll — remove fixed 1496px height, let content determine scroll extent */
  .client-root [data-name="3. Review Change (Detail)"] {
    height: auto !important;
  }
`;

// ─── ClientApp Root ───────────────────────────────────────────────────────────
export function ClientApp({ onSwitchProfile }: { onSwitchProfile?: (role: string) => void } = {}) {
  const [activeTab, setActiveTab] = useState<TabScreen>("home");
  const [activeDetail, setActiveDetail] = useState<DetailScreen | null>(null);
  const [homeVisitKey, setHomeVisitKey] = useState(0);
  const [decSentKey, setDecSentKey] = useState(0);
  const [timelineTaskId, setTimelineTaskId] = useState<TimelineTaskId>("concrete");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showRolePicker, setShowRolePicker] = useState(false);
  const [role, setRole] = useState("client");
  const [prevDetail, setPrevDetail] = useState<DetailScreen | null>(null);
  const [toast, setToast] = useState<{ visible: boolean; message: string }>({ visible: false, message: "" });

  const showToast = useCallback((message: string) => {
    setToast({ visible: true, message });
  }, []);

  const dismissToast = useCallback(() => {
    setToast((t) => ({ ...t, visible: false }));
  }, []);

  const navToTab = (tab: TabScreen) => {
    setActiveDetail(null);
    setActiveTab(tab);
    if (tab === "home") setHomeVisitKey((k) => k + 1);
  };

  const openDetail = (d: DetailScreen) => setActiveDetail(d);

  const closeDetail = () => {
    if (prevDetail) {
      setActiveDetail(prevDetail);
      setPrevDetail(null);
    } else {
      setActiveDetail(null);
    }
  };

  const handleMenuAction = useCallback((action: ArchMenuAction) => {
    if (action === "switchProfile") {
      setShowRolePicker(true);
      return;
    }
    const map: Partial<Record<ArchMenuAction, DetailScreen>> = {
      invite: "inviteScreen",
      settings: "settingsScreen",
    };
    const target = map[action];
    if (target) openDetail(target);
  }, []);

  const handleApprove = () => {
    setDecSentKey((k) => k + 1);
    openDetail("decisionSent");
  };

  const handleAskForChangeDone = () => {
    closeDetail();
    showToast("Change request sent to the team");
  };

  const handleBackToHome = () => {
    setActiveDetail(null);
    setActiveTab("home");
    setHomeVisitKey((k) => k + 1);
  };

  const isDetailScreen = activeDetail !== null;

  const screensWithOwnHeader: DetailScreen[] = [
    "timelineTaskDetail",
    "timelineDecisionDetail",
    "timelineSiteUpdate",
    "inviteScreen",
    "settingsScreen",
  ];
  const hasOwnHeader = activeDetail && screensWithOwnHeader.includes(activeDetail);

  const backLabel: Record<DetailScreen, string> = {
    reviewDecision: "Review Decision",
    decisionSent: "Decisions",
    issueDetail: "Issues",
    timelineTaskDetail: "Timeline",
    timelineDecisionDetail: "Timeline",
    timelineSiteUpdate: "Timeline",
    inviteScreen: "Menu",
    settingsScreen: "Menu",
  };

  return (
    <div className="client-root absolute inset-0 overflow-hidden bg-[#fbf9f8]">
      <style>{FIGMA_HIDE_CSS}</style>

      {/* Header */}
      {isDetailScreen && !hasOwnHeader ? (
        <BackHeader onBack={closeDetail} label={backLabel[activeDetail!]} />
      ) : !isDetailScreen ? (
        <PersistentHeader onMenuOpen={() => setMenuOpen(true)} />
      ) : null}

      {/* Content area */}
      <div
        className="absolute left-0 right-0"
        style={{
          top: hasOwnHeader ? 0 : HEADER_H,
          bottom: isDetailScreen ? 0 : NAV_H,
          transition: "bottom 220ms cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Persistent tab layers */}
        {TAB_IDS.map((tabId) => {
          const active = activeTab === tabId && !isDetailScreen;
          return (
            <motion.div
              key={tabId}
              className="absolute inset-0 overflow-hidden"
              initial={false}
              animate={{ opacity: active ? 1 : 0 }}
              transition={{ duration: 0.26, ease: EASE_OUT }}
              style={{ pointerEvents: active ? "auto" : "none" }}
            >
              {tabId === "home" && (
                <ClientHomeTab
                  visitKey={homeVisitKey}
                  onOpenDecisions={() => {
                    setActiveTab("decisions");
                    openDetail("reviewDecision");
                  }}
                  onOpenIssues={() => {
                    setActiveTab("issues");
                    openDetail("issueDetail");
                  }}
                />
              )}
              {tabId === "decisions" && (
                <DecisionsTab onReview={() => openDetail("reviewDecision")} />
              )}
              {tabId === "issues" && (
                <IssuesTab onViewIssue={() => openDetail("issueDetail")} />
              )}
              {tabId === "timeline" && (
                <TimelineTab
                  onOpenTaskDetail={(id) => { setTimelineTaskId(id); openDetail("timelineTaskDetail"); }}
                  onOpenDecisionDetail={() => openDetail("timelineDecisionDetail")}
                  onOpenSiteUpdate={() => openDetail("timelineSiteUpdate")}
                  onOpenIssue={() => openDetail("issueDetail")}
                />
              )}
            </motion.div>
          );
        })}

        {/* Detail layer */}
        <AnimatePresence initial={false}>
          {activeDetail === "reviewDecision" && (
            <div key="reviewDecision" className="absolute inset-0 z-20">
              <ReviewDecisionDetail onApprove={handleApprove} onAskForChangeDone={handleAskForChangeDone} />
            </div>
          )}
          {activeDetail === "decisionSent" && (
            <motion.div
              key="decisionSent"
              className="absolute inset-0 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <DecisionSentDetail animKey={decSentKey} onBackToHome={handleBackToHome} />
            </motion.div>
          )}
          {activeDetail === "issueDetail" && (
            <div key="issueDetail" className="absolute inset-0 z-20">
              <IssueDetailScreen onRequestInfoDone={() => {
                closeDetail();
                showToast("Information request sent to the site team");
              }} />
            </div>
          )}
          {activeDetail === "timelineTaskDetail" && (
            <div key="timelineTaskDetail" className="absolute inset-0 z-20">
              <TimelineTaskDetailScreen taskId={timelineTaskId} onBack={closeDetail} />
            </div>
          )}
          {activeDetail === "timelineDecisionDetail" && (
            <div key="timelineDecisionDetail" className="absolute inset-0 z-20">
              <TimelineDecisionDetailScreen onBack={closeDetail} />
            </div>
          )}
          {activeDetail === "timelineSiteUpdate" && (
            <div key="timelineSiteUpdate" className="absolute inset-0 z-20">
              <TimelineSiteUpdateScreen onBack={closeDetail} />
            </div>
          )}
          {activeDetail === "inviteScreen" && (
            <div key="inviteScreen" className="absolute inset-0 z-20">
              <ScreenFrame>
                <div className="no-scrollbar absolute inset-0 overflow-y-auto overflow-x-hidden bg-[#fbf9f8]">
                  <InvitePanel onBack={closeDetail} onShowToast={showToast} />
                </div>
              </ScreenFrame>
            </div>
          )}
          {activeDetail === "settingsScreen" && (
            <div key="settingsScreen" className="absolute inset-0 z-20">
              <ScreenFrame>
                <div className="no-scrollbar absolute inset-0 overflow-y-auto overflow-x-hidden bg-[#fbf9f8]">
                  <SettingsPanel onBack={closeDetail} />
                </div>
              </ScreenFrame>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom nav */}
      {!isDetailScreen && <ClientBottomNav active={activeTab} onNav={navToTab} />}

      {/* Hamburger drawer */}
      <ArchitectHamburgerDrawer
        open={menuOpen}
        role={role}
        onClose={() => setMenuOpen(false)}
        onAction={handleMenuAction}
      />

      {/* Role picker */}
      <AnimatePresence>
        {showRolePicker && (
          <motion.div
            className="absolute inset-0 z-[90]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <Screen5
              returningUser
              onContinue={(newRole) => {
                setShowRolePicker(false);
                onSwitchProfile?.(newRole);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast */}
      <SiteflowToast
        visible={toast.visible}
        message={toast.message}
        onDismiss={dismissToast}
      />
    </div>
  );
}
