import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Screen5 } from "./screens/Screen5";
import { ArchitectHamburgerDrawer, type ArchMenuAction } from "./ArchitectHamburgerDrawer";
import { BlueprintsPanel } from "./BlueprintsPanel";
import { CompletedTasksPanel } from "./CompletedTasksPanel";
import { InvitePanel } from "./InvitePanel";
import { SettingsPanel } from "./SettingsPanel";
import HomeImport from "../../imports/1HomeProjectOverviewFinalColor/1HomeProjectOverviewFinalColor";
import DecisionsImport from "../../imports/2DecisionsPendingListFinalColor/2DecisionsPendingListFinalColor";
import Component7 from "../../imports/7IssuesDetailIssueView-1/7IssuesDetailIssueView";
import IssuesListRich from "./IssuesListRich";
import navSvgPaths from "../../imports/6IssuesListUrgentIssues-1/svg-fjo5syj5my";
import homeNavSvgPaths from "../../imports/1HomeProjectOverviewFinalColor/svg-ibu8qrj20t";
import headerSvgPaths from "../../imports/1TodayBoardHomeScreen-1/svg-dgyex2e769";
import detailSvgPaths from "../../imports/3ReviewDetailFinalColor/svg-bf1xvuy53m";
import rejectionSvgPaths from "../../imports/RejectionBottomSheet/svg-hw6vt2omev";
import imgAcLayoutHero from "../../imports/3ReviewDetailFinalColor/9e03cc0fe5d2dd05269808484174846a4ae64867.png";
import imgMarbleHero from "../../imports/2DecisionsPendingListFinalColor/6cf7638806a889cc3894be5dcb5b138419f36b1c.png";
import imgLightingHero from "../../imports/2DecisionsPendingListFinalColor/898a9bca30863942c1f358937f6a4ec7d6cd1af3.png";
import { SiteflowToast } from "./SiteflowToast";
import { ArchitectAssetWarmup } from "./ArchitectAssetWarmup";
import InteractiveTimeline, { type TimelineTaskId } from "./InteractiveTimeline";
import TimelineTaskDetail from "./TimelineTaskDetail";
import TimelineDecisionDetail from "./TimelineDecisionDetail";
import TimelineSiteUpdateDetail from "./TimelineSiteUpdateDetail";
import { LangBadge } from "./LangBadge";

// ─── Types ────────────────────────────────────────────────────────────────────

type TabScreen = "home" | "decisions" | "issues" | "timeline";
type DetailScreen =
  | "reviewDecision"
  | "issueDetail"
  | "timelineTaskDetail"
  | "timelineDecisionDetail"
  | "timelineSiteUpdate"
  | "blueprintsDocuments"
  | "completedTasksMenu"
  | "inviteScreen"
  | "settingsScreen";

type DecisionId = "acLayout" | "marble" | "lighting";

interface DecisionData {
  title: string;
  subtitle: string;
  hero: string;
  cost: { label: string; color: string };
  time: { label: string; color: string };
  risk: { label: string };
  affects: string;
  requestedBy: string;
  reason: string;
  reference: string;
  linkedTo: string;
}

const DECISIONS: Record<DecisionId, DecisionData> = {
  acLayout: {
    title: "AC Layout Change",
    subtitle: "AC layout moved to avoid beam clash.",
    hero: imgAcLayoutHero,
    cost: { label: "₹12,450 increase", color: "#99161a" },
    time: { label: "4 day delay", color: "#ea9f22" },
    risk: { label: "None" },
    affects: "HVAC Installation, Ceiling Works",
    requestedBy: "MEP Engineering Team",
    reason: "Avoid beam clash with duct routing",
    reference: "DRG-MEP-03-112 (Rev 2.4)",
    linkedTo: "RFI #245 - Clash Report #09",
  },
  marble: {
    title: "Marble Finish Selection",
    subtitle: "Premium marble variant selected for lobby.",
    hero: imgMarbleHero,
    cost: { label: "No cost change", color: "#6b5a4e" },
    time: { label: "No delay", color: "#0d5e44" },
    risk: { label: "Low" },
    affects: "Lobby Flooring, Entrance Works",
    requestedBy: "Interior Design Team",
    reason: "Client preference for premium finish",
    reference: "SPEC-INT-01-004 (Rev 1.1)",
    linkedTo: "Material Approval #12",
  },
  lighting: {
    title: "Lighting Upgrade",
    subtitle: "LED system upgrade for energy efficiency.",
    hero: imgLightingHero,
    cost: { label: "₹4,200 increase", color: "#99161a" },
    time: { label: "No delay", color: "#0d5e44" },
    risk: { label: "Low" },
    affects: "Electrical Works, Ceiling Fixtures",
    requestedBy: "MEP Engineering Team",
    reason: "Energy efficiency and code compliance",
    reference: "DRG-ELEC-02-087 (Rev 1.3)",
    linkedTo: "BOQ Item #E-112",
  },
};

const NAV_TABS: { id: TabScreen; label: string }[] = [
  { id: "home", label: "HOME" },
  { id: "decisions", label: "DECISIONS" },
  { id: "issues", label: "ISSUES" },
  { id: "timeline", label: "TIMELINE" },
];

const TAB_IDS: TabScreen[] = ["home", "decisions", "issues", "timeline"];

// ─── Layout constants ─────────────────────────────────────────────────────────

const FRAME_W = 390;
const NATIVE_W = 412;
const SCALE = FRAME_W / NATIVE_W;
const NAV_H = 64;
const HEADER_NATIVE_H = 64;
const HEADER_H = HEADER_NATIVE_H * SCALE;

// ─── Timeline height calculation ─────────────────────────────────────────────
// Mirrors InteractiveTimeline's filter + entry structure to compute the exact
// native (412px) content height, so StageScrollArea's scroll extent matches
// the actual rendered content for every filter combination.

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

  // 242.83 = outer div top-offset(40) + filter-bar area(202.83)
  const BASE = 242.83;
  const BOTTOM_PAD = 40;
  const GROUP_HEADER = 50; // 34px height + 16px margin-bottom

  if (vis.length === 0) {
    // Empty state renders a py-[60px] div (240px)
    return Math.ceil(BASE + 240 + BOTTOM_PAD) + 32;
  }

  const todayE = vis.filter((e) => e.day === "today");
  const oct23E = vis.filter((e) => e.day === "oct23");
  let h = BASE;

  if (todayE.length > 0) {
    const eH = todayE.reduce((s, e) => s + TL_ENTRY_H[e.type], 0) + Math.max(0, todayE.length - 1) * 16;
    h += GROUP_HEADER + eH;
  }
  if (oct23E.length > 0) {
    const eH = oct23E.reduce((s, e) => s + TL_ENTRY_H[e.type], 0) + Math.max(0, oct23E.length - 1) * 16;
    h += 24 + GROUP_HEADER + eH; // 24 = mt-[24px] on the oct23 motion wrapper
  }

  h += BOTTOM_PAD;
  return Math.ceil(h) + 32; // 32px safety buffer for animation breathing room
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

// ─── PersistentHeader — contractor-style (hamburger + SITEFLOW wordmark + lang)
// Rendered at native 412px then scaled down to 390px, identical to ContractorApp.
// ─────────────────────────────────────────────────────────────────────────────
function PersistentHeader({ onMenuOpen }: { onMenuOpen: () => void }) {
  return (
    <div
      className="absolute top-0 left-0 right-0 overflow-hidden bg-white z-40"
      style={{ height: HEADER_H }}
    >
      <div
        style={{
          width: NATIVE_W,
          height: HEADER_NATIVE_H,
          position: "absolute",
          top: 0,
          left: 0,
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
        }}
      >
        <div className="absolute bg-white h-[64px] left-0 top-0 w-[412px]">
          {/* Invisible tap target over hamburger icon */}
          <button
            onClick={onMenuOpen}
            aria-label="Open menu"
            className="absolute cursor-pointer active:opacity-60 transition-opacity"
            style={{ left: 8, top: 8, width: 56, height: 48, background: "transparent", zIndex: 10 }}
          />
          {/* Language switch */}
          <div className="absolute left-[308px] top-[17px]">
            <LangBadge />
          </div>

          {/* Hamburger icon */}
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
              <g>
                <path d={headerSvgPaths.pf91ed00} fill="black" />
                <path d={headerSvgPaths.p20c7180} fill="black" />
                <path d={headerSvgPaths.p1cecf900} fill="black" />
                <path d={headerSvgPaths.p226d7bf0} fill="black" />
                <path d={headerSvgPaths.p352bf872} fill="black" />
                <path d={headerSvgPaths.p252d3700} fill="black" />
                <path d={headerSvgPaths.pf0fcc80} fill="black" />
                <path d={headerSvgPaths.p31bda800} fill="black" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── BackHeader — detail screens only. No language button. ────────────────────
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
        <span
          className="font-['Manrope:Bold',sans-serif] font-bold uppercase tracking-[0.8px]"
          style={{ fontSize: 14, color: "#7a3100" }}
        >
          {label}
        </span>
      </button>
    </div>
  );
}

// ─── ArchitectBottomNav ───────────────────────────────────────────────────────
function ArchitectBottomNav({
  active,
  onNav,
}: {
  active: TabScreen;
  onNav: (t: TabScreen) => void;
}) {
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
                layoutId="arch-nav-pill"
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

// ─── ScrollArea — plain 390px, for architect Figma screens + custom components
function ArchScrollArea({
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

// ─── StageScrollArea — scales 412px native content to 390px visual.
//
// clipTop (native px, default 0): hides the top N native pixels of the Stage.
// Used for ISSUES and TIMELINE to match ContractorApp's visual rhythm.
//
// ContractorApp content area starts at top:0 and the PersistentHeader overlays
// at z-40, so visible gap = (native_y × SCALE) − HEADER_H.
// ArchitectApp content area starts at top:HEADER_H (no overlay), so visible gap
// = native_y × SCALE — much larger. clipTop=64 compensates: the Stage is
// shifted up by 64 native px so visible gap = (native_y − 64) × SCALE,
// matching ContractorApp's spacing exactly.
// ─────────────────────────────────────────────────────────────────────────────
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

// ─── DecisionDetailContent — dynamic review detail for all 3 decisions ────────
function DecisionDetailContent({
  decision,
  onApprove,
  onReject,
}: {
  decision: DecisionData;
  onApprove: () => void;
  onReject: () => void;
}) {
  return (
    <ArchScrollArea contentHeight={1060} reserveNav={false}>
      {/* Hero Image Section */}
      <div className="bg-[#f2efe9] overflow-hidden relative w-full">
        <div className="h-[292.5px] opacity-90 overflow-clip relative w-full">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={decision.hero}
          />
          {/* Left-to-right gradient */}
          <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0.78)] h-full left-0 to-[rgba(0,0,0,0)] top-0 w-full" />
          {/* Title */}
          <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[213px]">
            <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[30px] text-white tracking-[-0.75px] w-full">
              <p className="leading-[36px]">{decision.title}</p>
            </div>
          </div>
          {/* Subtitle */}
          <div className="absolute content-stretch flex flex-col items-start left-[24px] top-[249px] w-[342px]">
            <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-white w-full">
              <p className="leading-[29.25px]">{decision.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="content-stretch flex flex-col gap-[9px] items-start pb-[32px] px-[24px] relative w-full">
        {/* Impact Matrix */}
        <div className="content-stretch flex flex-col items-start pt-[9px] relative shrink-0 w-full">
          {/* COST row */}
          <div className="content-stretch flex items-center justify-between pb-[21px] pt-[20px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#e5e0d8] border-b border-solid inset-0 pointer-events-none" />
            <div className="relative shrink-0">
              <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#8c7b70] text-[10px] tracking-[0.5px] uppercase">
                <p className="leading-[15px]">COST</p>
              </div>
              <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] relative shrink-0 text-[20px]" style={{ color: decision.cost.color }}>
                <p className="leading-[28px]">{decision.cost.label}</p>
              </div>
            </div>
            <div className="h-[12px] w-[20px] relative shrink-0">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
                <path d={detailSvgPaths.p33125000} fill={decision.cost.color} />
              </svg>
            </div>
          </div>
          {/* TIME row */}
          <div className="content-stretch flex items-center justify-between pb-[21px] pt-[20px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#e5e0d8] border-b border-solid inset-0 pointer-events-none" />
            <div className="relative shrink-0">
              <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#8c7b70] text-[10px] tracking-[0.5px] uppercase">
                <p className="leading-[15px]">TIME</p>
              </div>
              <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] relative shrink-0 text-[20px]" style={{ color: decision.time.color }}>
                <p className="leading-[28px]">{decision.time.label}</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[20px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={detailSvgPaths.p256e1340} fill={decision.time.color} />
              </svg>
            </div>
          </div>
          {/* RISK row */}
          <div className="content-stretch flex items-center justify-between pb-[21px] pt-[20px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#e5e0d8] border-b border-solid inset-0 pointer-events-none" />
            <div className="relative shrink-0">
              <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#8c7b70] text-[10px] tracking-[0.5px] uppercase">
                <p className="leading-[15px]">RISK</p>
              </div>
              <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] relative shrink-0 text-[#0d5e44] text-[20px]">
                <p className="leading-[28px]">{decision.risk.label}</p>
              </div>
            </div>
            <div className="h-[20px] w-[16px] relative shrink-0">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
                <path d={detailSvgPaths.p2b677030} fill="#0D5E44" />
              </svg>
            </div>
          </div>
        </div>

        {/* Affects bar */}
        <div className="bg-[#f2efe9] h-[41px] relative rounded-[12px] shrink-0 w-full">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[27px] py-[13px] relative size-full">
              <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black whitespace-nowrap">
                <p>
                  <span className="leading-[28px]">{"Affects: "}</span>
                  <span className="leading-[28px] text-[#8c7b70]">{decision.affects}</span>
                </p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e5e0d8] border-solid inset-0 pointer-events-none rounded-[12px]" />
        </div>

        {/* Action Section */}
        <div className="h-[390px] relative shrink-0 w-full">
          {/* Details labels — left column */}
          <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip p-[10px] top-0">
            <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8c7b70] text-[12px] whitespace-nowrap">
              <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[16px] mb-0">DETAILS</p>
              <p className="leading-[16px] mb-0">&nbsp;</p>
              <p className="leading-[16px] mb-0">Requested By</p>
              <p className="leading-[16px] mb-0">&nbsp;</p>
              <p className="leading-[16px] mb-0">Reason</p>
              <p className="leading-[16px] mb-0">&nbsp;</p>
              <p className="leading-[16px] mb-0">Reference</p>
              <p className="leading-[16px] mb-0">&nbsp;</p>
              <p className="leading-[16px]">Linked To</p>
            </div>
          </div>

          {/* Details values — right column */}
          <div className="absolute content-stretch flex flex-col items-start left-[134px] overflow-clip p-[10px] top-[0.5px] w-[218px]">
            <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8c7b70] text-[12px] text-right w-full whitespace-pre-wrap">
              <p className="decoration-solid font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[16px] mb-0 text-[#7a3100] underline">View Drawings</p>
              <p className="leading-[16px] mb-0">&nbsp;</p>
              <p className="leading-[16px] mb-0">{decision.requestedBy}</p>
              <p className="leading-[16px] mb-0">&nbsp;</p>
              <p className="leading-[16px] mb-0">{decision.reason}</p>
              <p className="leading-[16px] mb-0">&nbsp;</p>
              <p className="leading-[16px] mb-0">{decision.reference}</p>
              <p className="leading-[16px] mb-0">&nbsp;</p>
              <p className="leading-[16px]">{decision.linkedTo}</p>
            </div>
          </div>

          {/* Ask a question input */}
          <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[189.5px]">
            <div className="bg-[#f2efe9] relative rounded-[12px] shrink-0 w-full">
              <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-start justify-center pb-[55px] pt-[18px] px-[17px] relative size-full">
                  <div className="flex-[1_0_0] min-w-px relative">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(140,123,112,0.5)] w-full">
                      <p className="leading-[normal]">Ask a question...</p>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e0d8] border-solid inset-0 pointer-events-none rounded-[12px]" />
            </div>
            <div className="absolute bottom-[40%] content-stretch flex flex-col items-center justify-center right-[16px] top-[40%]">
              <div className="h-[19px] w-[14px] relative shrink-0">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 19">
                  <path d={detailSvgPaths.p17652a80} fill="#7A3100" />
                </svg>
              </div>
            </div>
          </div>

          {/* REJECT + APPROVE buttons */}
          <div className="absolute flex gap-[24px] items-center left-0 right-0 top-[315.5px]">
            <button
              onClick={onReject}
              className="bg-[#ba1a1a] flex gap-[8px] h-[56px] items-center justify-center relative rounded-[12px] shrink-0 w-[107px] cursor-pointer active:opacity-80 transition-opacity"
            >
              <div className="relative shrink-0 size-[8.167px]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
                  <path d={detailSvgPaths.p2317cf00} fill="white" />
                </svg>
              </div>
              <span className="font-['Manrope:Regular',sans-serif] font-normal text-[16px] text-center text-white tracking-[-0.3px] uppercase">REJECT</span>
            </button>
            <button
              onClick={onApprove}
              className="bg-[#7a3100] flex gap-[8px] h-[56px] items-center justify-center relative rounded-[12px] shrink-0 w-[213px] cursor-pointer active:opacity-80 transition-opacity"
            >
              <div className="h-[7.015px] w-[12.775px] relative shrink-0">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.775 7.01458">
                  <path d={detailSvgPaths.p32d13d00} fill="white" />
                </svg>
              </div>
              <span className="font-['Manrope:Bold',sans-serif] font-bold text-[16px] text-center text-white tracking-[-0.3px] uppercase">APPROVE</span>
            </button>
          </div>
        </div>
      </div>
    </ArchScrollArea>
  );
}

// ─── ScreenFrame — motion wrapper for detail screens ─────────────────────────
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

// ─── Overlay — transparent tap target ────────────────────────────────────────
function Overlay({
  top,
  left = 0,
  width,
  height,
  onClick,
  label,
}: {
  top: number;
  left?: number;
  width: number;
  height: number;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="absolute cursor-pointer active:opacity-0 transition-opacity"
      style={{ top, left, width, height, background: "transparent", zIndex: 10 }}
    />
  );
}

// ─── Rejection Bottom Sheet ───────────────────────────────────────────────────
const REJECTION_CARDS = [
  {
    id: "alignment",
    label: "ALIGNMENT",
    labelFont: "font-['Manrope:Bold',sans-serif] font-bold",
    iconSvg: rejectionSvgPaths.p28cfa800,
    iconW: 20, iconH: 12,
    iconViewBox: "0 0 20 12",
  },
  {
    id: "material",
    label: "MATERIAL",
    labelFont: "font-['Manrope:Regular',sans-serif] font-normal",
    iconSvg: rejectionSvgPaths.p1104fd00,
    iconW: 18, iconH: 19.05,
    iconViewBox: "0 0 18 19.05",
  },
  {
    id: "quality",
    label: "QUALITY",
    labelFont: "font-['Manrope:Bold',sans-serif] font-bold",
    iconSvg: rejectionSvgPaths.p13774060,
    iconW: 22, iconH: 21,
    iconViewBox: "0 0 22 21",
  },
  {
    id: "incomplete",
    label: "INCOMPLETE",
    labelFont: "font-['Manrope:Regular',sans-serif] font-normal",
    iconSvg: rejectionSvgPaths.p1574ee00,
    iconW: 19, iconH: 21,
    iconViewBox: "0 0 19 21",
  },
];

function RejectionSheet({
  open,
  onClose,
  onSubmit,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    setSelected(null);
    setNote("");
    onSubmit();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Dimmed backdrop */}
          <motion.div
            key="arch-rejection-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/50 z-[70]"
            onClick={onClose}
          />

          {/* Bottom sheet — mirrors BackgroundShadow from Figma import */}
          <motion.div
            key="arch-rejection-sheet"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 340, damping: 36 }}
            className="absolute bottom-0 left-0 right-0 z-[80]"
          >
            <div className="bg-[#fdfcfb] drop-shadow-[0px_-10px_20px_rgba(61,43,31,0.2)] flex flex-col items-start rounded-tl-[24px] rounded-tr-[24px] w-full">

              {/* SheetDragHandle */}
              <div className="content-stretch flex items-start justify-center pb-[8px] pt-[16px] w-full">
                <div className="bg-[#d9cfc7] h-[6px] rounded-[9999px] w-[48px]" />
              </div>

              {/* Container */}
              <div className="content-stretch flex flex-col gap-[32px] items-start pb-[40px] pt-[8px] px-[24px] w-full">

                {/* Header */}
                <div className="content-stretch flex flex-col gap-[4px] items-start w-full">
                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] text-[#1a1a1a] text-[24px] tracking-[-0.6px] w-full">
                    <p className="leading-[32px]">Why are you rejecting?</p>
                  </div>
                  {/* Spacer (matches Figma Background element) */}
                  <div className="h-[4px] w-[48px]" />
                </div>

                {/* OptionsGrid — 2×2 grid matching Figma layout */}
                <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[82px_82px] w-full">
                  {REJECTION_CARDS.map((card) => {
                    const isSelected = selected === card.id;
                    return (
                      <button
                        key={card.id}
                        onClick={() => setSelected(isSelected ? null : card.id)}
                        className={`content-stretch flex flex-col items-start pl-[17px] pr-[17px] py-[17px] relative rounded-[12px] h-full w-full cursor-pointer transition-colors duration-150 ${isSelected ? "bg-[#7a3100]" : "bg-[#f5f1ee]"}`}
                      >
                        <div aria-hidden="true" className="absolute border border-[#d9cfc7] border-solid inset-0 pointer-events-none rounded-[12px]" />
                        {/* Icon */}
                        <div className="relative shrink-0 mb-[8px]">
                          <svg
                            width={card.iconW}
                            height={card.iconH}
                            viewBox={card.iconViewBox}
                            fill="none"
                          >
                            <path
                              d={card.iconSvg}
                              fill={isSelected ? "white" : "#7A3100"}
                            />
                          </svg>
                        </div>
                        {/* Label */}
                        <div className={`${card.labelFont} flex flex-col h-[16px] justify-center leading-[0] text-[12px] text-center tracking-[1.2px] uppercase ${isSelected ? "text-white" : "text-[#3d2b1f]"}`}>
                          <p className="leading-[16px]">{card.label}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* InputArea */}
                <div className="content-stretch flex flex-col items-start relative w-full">
                  {/* Textarea */}
                  <div className="bg-[#f5f1ee] relative rounded-[12px] w-full">
                    <div className="flex flex-row justify-center overflow-clip rounded-[inherit] w-full">
                      <div className="content-stretch flex items-start justify-center pb-[77px] pt-[17px] px-[17px] relative w-full">
                        <textarea
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                          placeholder="Type or record feedback..."
                          className="flex-1 min-w-0 bg-transparent resize-none outline-none w-full"
                          style={{
                            fontFamily: "'Manrope', sans-serif",
                            fontSize: 14,
                            lineHeight: "20px",
                            color: "#1b1c1c",
                          }}
                          rows={1}
                        />
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#d9cfc7] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  </div>
                  {/* Mic button — absolute inside InputArea */}
                  <div className="absolute bottom-[16px] right-[16px] flex flex-col items-center justify-center">
                    <div className="h-[19px] w-[14px] relative">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 19">
                        <path d={rejectionSvgPaths.p19d8b800} fill="#7A3100" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* ActionButton */}
                <div className="bg-[#5c4033] relative rounded-[12px] w-full">
                  <button onClick={handleSubmit} className="w-full">
                    <div className="flex flex-row items-center w-full">
                      <div className="content-stretch flex items-center justify-between px-[24px] py-[20px] relative w-full">
                        <div className="absolute bg-[#7a3100] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(92,64,51,0.2),0px_4px_6px_-4px_rgba(92,64,51,0.2)]" />
                        <div className="relative flex flex-col items-center">
                          <span className="font-['Manrope:Regular',sans-serif] font-normal text-[#fdfcfb] text-[14px] text-center tracking-[1.4px] uppercase leading-[20px]">
                            SUBMIT REJECTION
                          </span>
                        </div>
                        <div className="relative shrink-0 size-[16px]">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <path d={rejectionSvgPaths.p1a406200} fill="#FDFCFB" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Tab screens ──────────────────────────────────────────────────────────────

function HomeTab({
  onOpenDecisions,
  onOpenIssues,
}: {
  onOpenDecisions: () => void;
  onOpenIssues: () => void;
}) {
  // Cards sit inside ActionRequiredSection. With the Figma header (64px flex item)
  // hidden via CSS, all Main content shifts up by 64px.
  const ACTION_TOP = 347;

  return (
    <ArchScrollArea contentHeight={960}>
      <HomeImport />
      <Overlay
        top={ACTION_TOP}
        left={24}
        width={342}
        height={185}
        onClick={onOpenDecisions}
        label="Open AC Layout Change decision"
      />
      <Overlay
        top={ACTION_TOP + 201}
        left={24}
        width={342}
        height={185}
        onClick={onOpenIssues}
        label="Open Column Misaligned issue"
      />
      <Overlay
        top={ACTION_TOP + 402}
        left={24}
        width={342}
        height={185}
        onClick={onOpenDecisions}
        label="Open Plan Revision decision"
      />
    </ArchScrollArea>
  );
}

const DECISION_IDS: DecisionId[] = ["acLayout", "marble", "lighting"];
const DECISION_LABELS = ["AC Layout Change", "Marble Finish Selection", "Lighting Upgrade"];

function DecisionsTab({ onReview }: { onReview: (id: DecisionId) => void }) {
  // Card tops measured from content-area top (Figma header is CSS-hidden, removing its 64px from flow).
  // Layout: pt-8 (8px) + SectionHeroHeader (~125px) + gap-40 (40px) + BentoStats (141.5px) + gap-40 (40px) = ~355px.
  const CARD_TOP = 355;
  const CARD_H = 176;
  const CARD_GAP = 16;

  return (
    <ArchScrollArea contentHeight={960}>
      <DecisionsImport />
      {DECISION_IDS.map((id, i) => (
        <Overlay
          key={id}
          top={CARD_TOP + i * (CARD_H + CARD_GAP)}
          left={0}
          width={390}
          height={CARD_H}
          onClick={() => onReview(id)}
          label={`Open ${DECISION_LABELS[i]} decision`}
        />
      ))}
    </ArchScrollArea>
  );
}

// Issues tab — clipTop=64 aligns top spacing with ContractorApp (see StageScrollArea comment).
// contentHeight=1490: last element (obs card 2) ends at native y≈1461, +29px breathing room.
function IssuesTab({ onViewIssue }: { onViewIssue: () => void }) {
  return (
    <StageScrollArea contentHeight={1490} clipTop={64}>
      <IssuesListRich onViewColumnIssue={onViewIssue} />
    </StageScrollArea>
  );
}

// Timeline tab — clipTop=64 aligns top spacing with ContractorApp (see StageScrollArea comment).
// contentHeight updates dynamically whenever the user changes the timeline filters,
// so the scroll container always ends cleanly after the last visible entry.
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

// ─── Detail screens ───────────────────────────────────────────────────────────

function ReviewDecisionDetail({
  decisionId,
  onApprove,
  onReject,
}: {
  decisionId: DecisionId;
  onApprove: () => void;
  onReject: () => void;
}) {
  return (
    <ScreenFrame>
      <div className="absolute inset-0 bg-[#fdfbf7]">
        <DecisionDetailContent
          decision={DECISIONS[decisionId]}
          onApprove={onApprove}
          onReject={onReject}
        />
      </div>
    </ScreenFrame>
  );
}

// Issue detail — Component7 (412px Figma) clipped to skip its own absolute
// header. BackHeader in the app root handles navigation, so we clip the native
// component starting at y=64 (where Main lives) so no gap or duplicate appears.
const C7_HEADER_NATIVE = 64;
const C7_CONTENT_NATIVE = 1180;

function IssueDetailScreen() {
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
            <Component7 />
          </div>
        </div>
      </div>
    </ScreenFrame>
  );
}

// Timeline detail screens — match contractor flow exactly with proper centering
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

// ─── CSS injected once per mount — suppresses Figma-generated headers and nav
// bars that are baked into each imported screen. Without this, the real
// PersistentHeader / BackHeader / ArchitectBottomNav all appear twice.
// ─────────────────────────────────────────────────────────────────────────────
const FIGMA_HIDE_CSS = `
  .arch-root [data-name="Header - TopAppBar"],
  .arch-root [data-name="BottomNavBar"],
  .arch-root [data-name="BottomNavBar Shell"] {
    display: none !important;
  }
`;

// ─── Root ─────────────────────────────────────────────────────────────────────
export function ArchitectApp({ onSwitchProfile }: { onSwitchProfile?: (role: string) => void } = {}) {
  const [activeTab, setActiveTab] = useState<TabScreen>("home");
  const [activeDetail, setActiveDetail] = useState<DetailScreen | null>(null);
  const [activeDecisionId, setActiveDecisionId] = useState<DecisionId>("acLayout");
  const [rejectionOpen, setRejectionOpen] = useState(false);
  const [timelineTaskId, setTimelineTaskId] = useState<TimelineTaskId>("concrete");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showRolePicker, setShowRolePicker] = useState(false);
  const [role, setRole] = useState("architect");
  const [prevDetail, setPrevDetail] = useState<DetailScreen | null>(null);
  const [toast, setToast] = useState<{ visible: boolean; message: string }>({
    visible: false,
    message: "",
  });

  const showToast = useCallback((message: string) => {
    setToast({ visible: true, message });
  }, []);

  const dismissToast = useCallback(() => {
    setToast((t) => ({ ...t, visible: false }));
  }, []);

  const navToTab = (tab: TabScreen) => {
    setActiveDetail(null);
    setActiveTab(tab);
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
      blueprintsDocuments: "blueprintsDocuments",
      completedTasks: "completedTasksMenu",
      invite: "inviteScreen",
      settings: "settingsScreen",
    };
    const target = map[action];
    if (target) openDetail(target);
  }, []);

  const handleApprove = () => {
    closeDetail();
    showToast("Decision approved successfully");
  };

  const handleReject = () => setRejectionOpen(true);

  const handleRejectionSubmit = () => {
    setRejectionOpen(false);
    closeDetail();
    showToast("Rejection submitted to team");
  };

  const isDetailScreen = activeDetail !== null;

  // Screens that provide their own headers (timeline details + menu panels)
  const screensWithOwnHeader: DetailScreen[] = [
    "timelineTaskDetail",
    "timelineDecisionDetail",
    "timelineSiteUpdate",
    "blueprintsDocuments",
    "completedTasksMenu",
    "inviteScreen",
    "settingsScreen",
  ];
  const hasOwnHeader = activeDetail && screensWithOwnHeader.includes(activeDetail);

  // Back label per detail screen (for screens that use BackHeader)
  const backLabel: Record<DetailScreen, string> = {
    reviewDecision: "Review Decision",
    issueDetail: "Issues",
    timelineTaskDetail: "Timeline",
    timelineDecisionDetail: "Timeline",
    timelineSiteUpdate: "Timeline",
    blueprintsDocuments: "Menu",
    completedTasksMenu: "Menu",
    inviteScreen: "Menu",
    settingsScreen: "Menu",
  };

  return (
    <div className="arch-root absolute inset-0 overflow-hidden bg-[#fbf9f8]">
      <style>{FIGMA_HIDE_CSS}</style>
      <ArchitectAssetWarmup />
      {/* Header — persistent header for tabs, back-arrow header for non-timeline details */}
      {isDetailScreen && !hasOwnHeader ? (
        <BackHeader
          onBack={closeDetail}
          label={backLabel[activeDetail!]}
        />
      ) : !isDetailScreen ? (
        <PersistentHeader onMenuOpen={() => setMenuOpen(true)} />
      ) : null}

      {/* Content area — fills between header and nav */}
      <div
        className="absolute left-0 right-0"
        style={{
          top: hasOwnHeader ? 0 : HEADER_H,
          bottom: isDetailScreen ? 0 : NAV_H,
          transition: "bottom 220ms cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Persistent tab layer — keeps images decoded, avoids re-fetch on tab switch */}
        {TAB_IDS.map((tabId) => {
          const active = activeTab === tabId && !isDetailScreen;
          return (
            <motion.div
              key={tabId}
              className="absolute inset-0"
              initial={false}
              animate={{ opacity: active ? 1 : 0, y: active ? 0 : 6 }}
              transition={{ duration: 0.32, ease: EASE_OUT }}
              style={{ pointerEvents: active ? "auto" : "none" }}
            >
              {tabId === "home" && (
                <HomeTab
                  onOpenDecisions={() => {
                    setActiveDecisionId("acLayout");
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
                <DecisionsTab
                  onReview={(id) => {
                    setActiveDecisionId(id);
                    openDetail("reviewDecision");
                  }}
                />
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
              <ReviewDecisionDetail
                decisionId={activeDecisionId}
                onApprove={handleApprove}
                onReject={handleReject}
              />
            </div>
          )}
          {activeDetail === "issueDetail" && (
            <div key="issueDetail" className="absolute inset-0 z-20">
              <IssueDetailScreen />
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
          {activeDetail === "blueprintsDocuments" && (
            <div key="blueprintsDocuments" className="absolute inset-0 z-20">
              <ScreenFrame>
                <div className="no-scrollbar absolute inset-0 overflow-y-auto overflow-x-hidden bg-[#fbf9f8]">
                  <BlueprintsPanel onBack={closeDetail} />
                </div>
              </ScreenFrame>
            </div>
          )}
          {activeDetail === "completedTasksMenu" && (
            <div key="completedTasksMenu" className="absolute inset-0 z-20">
              <ScreenFrame>
                <div className="no-scrollbar absolute inset-0 overflow-y-auto overflow-x-hidden bg-[#fbf9f8]">
                  <CompletedTasksPanel
                    onBack={closeDetail}
                    onOpenTask={(id) => {
                      setPrevDetail("completedTasksMenu");
                      setTimelineTaskId(id);
                      setActiveDetail("timelineTaskDetail");
                    }}
                  />
                </div>
              </ScreenFrame>
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

      {/* Bottom nav — only visible on tab screens */}
      {!isDetailScreen && (
        <ArchitectBottomNav active={activeTab} onNav={navToTab} />
      )}

      {/* Hamburger drawer (z-[70+]) */}
      <ArchitectHamburgerDrawer
        open={menuOpen}
        role={role}
        onClose={() => setMenuOpen(false)}
        onAction={handleMenuAction}
      />

      {/* Role picker overlay — opens on "Switch Profile" */}
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

      {/* Rejection sheet (z-[80+]) */}
      <RejectionSheet
        open={rejectionOpen}
        onClose={() => setRejectionOpen(false)}
        onSubmit={handleRejectionSubmit}
      />

      {/* Toast */}
      <SiteflowToast
        visible={toast.visible}
        message={toast.message}
        onDismiss={dismissToast}
      />
    </div>
  );
}
