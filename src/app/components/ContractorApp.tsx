import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Component1 from "../../imports/1TodayBoardHomeScreen-1/1TodayBoardHomeScreen";
import Component2 from "../../imports/2Tasks-1/2Tasks";
import Component3 from "../../imports/3TaskAssignmentMobile-1/3TaskAssignmentMobile";
import { InteractiveTaskAssign } from "./InteractiveTaskAssign";
import { ContractorAssetWarmup } from "./ContractorAssetWarmup";
import Component4 from "../../imports/4ApprovalDetailMobile-1/4ApprovalDetailMobile";
import Component5 from "../../imports/5RejectionFlowMobile-1/5RejectionFlowMobile";
import IssuesListRich from "./IssuesListRich";
import Component7 from "../../imports/7IssuesDetailIssueView-1/7IssuesDetailIssueView";
import navSvgPaths from "../../imports/6IssuesListUrgentIssues-1/svg-fjo5syj5my";
import { SiteflowToast } from "./SiteflowToast";
import InteractiveTimeline, { type TimelineTaskId } from "./InteractiveTimeline";
import TimelineTaskDetail from "./TimelineTaskDetail";
import TimelineDecisionDetail from "./TimelineDecisionDetail";
import TimelineSiteUpdateDetail from "./TimelineSiteUpdateDetail";
import { useLanguage } from "../i18n/LanguageContext";
import { useTranslations } from "../i18n/translations";
import { LangPickerModal } from "./screens/LangPickerModal";
import rejectionSvgPaths from "../../imports/5RejectionFlowMobile-1/svg-3gz9lwa83t";
import headerSvgPaths from "../../imports/1TodayBoardHomeScreen-1/svg-dgyex2e769";
import { HamburgerDrawer, type MenuAction } from "./HamburgerDrawer";
import { WorkerDashboardPanel } from "./WorkerDashboardPanel";
import { CompletedTasksPanel } from "./CompletedTasksPanel";
import { InvitePanel } from "./InvitePanel";
import { SettingsPanel } from "./SettingsPanel";
import { ApprovalsPanel } from "./ApprovalsPanel";
import { ResolvedIssuesPanel } from "./ResolvedIssuesPanel";
import { Screen5 } from "./screens/Screen5";
import { ActiveTaskSubtasksPanel, type ZoneId } from "./ActiveTaskSubtasksPanel";
import SubtaskDetailPanel, { type SubtaskDetailId } from "./SubtaskDetailPanel";
import { ActionCardsScroll, type ActionCardId } from "./ActionCardsScroll";
import { SafetyAuditPanel } from "./SafetyAuditPanel";
import { MaterialDeliveryPanel } from "./MaterialDeliveryPanel";

type Screen =
  | "home"
  | "tasks"
  | "taskAssign"
  | "approval"
  | "issuesList"
  | "issueDetail"
  | "timeline"
  | "timelineTaskDetail"
  | "timelineDecisionDetail"
  | "timelineSiteUpdate"
  | "timelineIssueDetail"
  | "workerDashboard"
  | "approvalsScreen"
  | "resolvedIssuesScreen"
  | "completedTasks"
  | "inviteScreen"
  | "settingsScreen"
  | "structuralSubtasks"
  | "interiorSubtasks"
  | "hvacSubtasks"
  | "subtaskDetail"
  | "safetyAudit"
  | "materialDelivery";

const TAB_SCREENS: Screen[] = ["home", "tasks", "issuesList", "timeline"];
const isTab = (s: Screen) => TAB_SCREENS.includes(s);

const NAV_TABS: { id: Screen; label: string }[] = [
  { id: "home", label: "HOME" },
  { id: "tasks", label: "TASKS" },
  { id: "issuesList", label: "ISSUES" },
  { id: "timeline", label: "TIMELINE" },
];

const FRAME_W = 390;
const NATIVE_W = 412;
const SCALE = FRAME_W / NATIVE_W;
const NAV_H = 64;
const HEADER_NATIVE_H = 64;
const HEADER_H = HEADER_NATIVE_H * SCALE;

// ────────────────────────────────────────────────────────────────────────────
// Persistent Top Header — mirrors HeaderTopAppBar from the Figma tab screens
// pixel-for-pixel (hamburger icon, SITEFLOW wordmark, language switch button).
// Rendered once at the root so it remains visually anchored while the content
// beneath transitions between tab screens.
// ────────────────────────────────────────────────────────────────────────────
function PersistentHeader({ onMenuOpen }: { onMenuOpen: () => void }) {
  const { lang } = useLanguage();
  const t = useTranslations(lang);
  const [langOpen, setLangOpen] = useState(false);
  return (
    <div
      className="absolute top-0 left-0 right-0 overflow-hidden bg-white"
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
        <div
          className="absolute bg-white h-[64px] left-0 top-0 w-[412px]"
          data-name="Header - TopAppBar"
        >
          {/* Language switch */}
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

          {/* Hamburger button — invisible overlay in native coords, covers the 3-line icon */}
          <button
            onClick={onMenuOpen}
            aria-label="Open menu"
            className="absolute cursor-pointer active:opacity-60 transition-opacity"
            style={{ left: 8, top: 8, width: 56, height: 48, background: "transparent", zIndex: 10 }}
          />

          {/* Hamburger icon (visual only) */}
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
      <LangPickerModal open={langOpen} onClose={() => setLangOpen(false)} />
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Stage
// ────────────────────────────────────────────────────────────────────────────
function Stage({
  height,
  children,
}: {
  height: number;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        width: FRAME_W,
        height: height * SCALE,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: NATIVE_W,
          height,
          position: "absolute",
          top: 0,
          left: 0,
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Persistent Bottom Navigation — rendered once at the root.
// Active highlight uses layoutId so it morphs smoothly between tabs.
// ────────────────────────────────────────────────────────────────────────────
function BottomNav({
  active,
  onNav,
}: {
  active: Screen;
  onNav: (s: Screen) => void;
}) {
  const icons: Record<Screen, JSX.Element> = {
    home: (
      <svg viewBox="0 0 16 18" fill="none" className="w-[16px] h-[18px]">
        <path d={navSvgPaths.p12a32500} fill="currentColor" />
      </svg>
    ),
    tasks: (
      <svg viewBox="0 0 18 20" fill="none" className="w-[18px] h-[20px]">
        <path d={navSvgPaths.p31c91580} fill="currentColor" />
      </svg>
    ),
    issuesList: (
      <svg viewBox="0 0 22 19" fill="none" className="w-[22px] h-[19px]">
        <path d={navSvgPaths.p7555480} fill="currentColor" />
      </svg>
    ),
    timeline: (
      <svg viewBox="0 0 22 12" fill="none" className="w-[22px] h-[12px]">
        <path d={navSvgPaths.p3baffdc0} fill="currentColor" />
      </svg>
    ),
    taskAssign: <></>,
    approval: <></>,
    issueDetail: <></>,
    timelineTaskDetail: <></>,
    timelineDecisionDetail: <></>,
    timelineSiteUpdate: <></>,
    timelineIssueDetail: <></>,
    workerDashboard: <></>,
    approvalsScreen: <></>,
    resolvedIssuesScreen: <></>,
    completedTasks: <></>,
    inviteScreen: <></>,
    settingsScreen: <></>,
    structuralSubtasks: <></>,
    interiorSubtasks: <></>,
    hvacSubtasks: <></>,
    subtaskDetail: <></>,
    safetyAudit: <></>,
    materialDelivery: <></>,
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
                layoutId="nav-active-pill"
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

// ────────────────────────────────────────────────────────────────────────────
// Scroll regions — no longer own the nav; nav is persistent.
// ────────────────────────────────────────────────────────────────────────────
function ScrollArea({
  contentHeight,
  bottomExtra = 0,
  reserveNav,
  children,
}: {
  contentHeight: number;
  bottomExtra?: number;
  reserveNav: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className="no-scrollbar absolute inset-0 overflow-y-auto overflow-x-hidden"
      style={{ paddingBottom: (reserveNav ? NAV_H : 0) + bottomExtra }}
    >
      <Stage height={contentHeight}>{children}</Stage>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Motion variants
// ────────────────────────────────────────────────────────────────────────────
const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

// Tab → tab: gentle crossfade with a soft vertical lift. Feels anchored
// because the nav doesn't move at all.
const tabVariants = {
  initial: { opacity: 0, y: 8, scale: 0.995 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -6, scale: 0.997 },
};

// Detail push: drills forward from slightly below — no horizontal travel.
// The y + scale combo reads as "opening a deeper layer" rather than "switching tabs."
// Exit recedes gently back downward so the return feels like ascending the hierarchy.
const detailEnterVariants = {
  initial: { opacity: 0, y: 22, scale: 0.978 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 14, scale: 0.988 },
};

// Stagger inner content so it feels lively (cards drift up a touch after
// the frame settles).
const innerVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

function ScreenFrame({
  kind,
  children,
}: {
  kind: "tab" | "detail";
  children: React.ReactNode;
}) {
  const variants = kind === "tab" ? tabVariants : detailEnterVariants;
  // Detail screens use a slightly longer duration with a more deliberate
  // ease curve to reinforce the "entering a deeper layer" feeling.
  const duration = kind === "tab" ? 0.32 : 0.34;
  const ease = kind === "tab" ? EASE_OUT : ([0.16, 1, 0.3, 1] as const);

  return (
    <motion.div
      className="absolute inset-0"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration, ease }}
    >
      <motion.div
        className="absolute inset-0"
        variants={innerVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.38, ease: EASE_OUT, delay: 0.05 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// SCREENS — pure content (no nav, no transition wrapper). They render inside
// the persistent content area above the fixed nav.
// ────────────────────────────────────────────────────────────────────────────
function HomeScreen({
  onOpenZone,
  onOpenAction,
}: {
  onOpenZone: (z: ZoneId) => void;
  onOpenAction: (id: ActionCardId) => void;
}) {
  // Zone card overlay positions in native 412px Stage coordinates.
  // Main starts at top:64 (header), pt:8, gap:25 between sections.
  // ActionSectionHorizontalScroll = Heading(40) + gap(16) + Container(269) = 325px.
  // ZonesSectionVerticalStack starts at: 64 + 8 + 325 + 25 = 422px.
  // Cards span px-16 content area: left:16, width:380.
  const ZONES_TOP = 422;
  const CARD_LEFT = 16;
  const CARD_W = 380;

  return (
    <ScrollArea contentHeight={1650} reserveNav>
      <Component1 />
      {/* Scrollable action cards — overlays the static Figma card container */}
      <ActionCardsScroll onOpenCard={onOpenAction} />
      {/* STRUCTURAL FRAME — ZoneCard at top-[56px] within ZoneSection */}
      <button
        onClick={() => onOpenZone("structural")}
        aria-label="Open Structural Frame subtasks"
        className="absolute cursor-pointer"
        style={{
          top: ZONES_TOP + 56,
          left: CARD_LEFT,
          width: CARD_W,
          height: 342,
          background: "transparent",
          zIndex: 10,
        }}
      />
      {/* INTERIOR FINISH — ZoneCard1 at top-[422.5px] within ZoneSection */}
      <button
        onClick={() => onOpenZone("interior")}
        aria-label="Open Interior Finish subtasks"
        className="absolute cursor-pointer"
        style={{
          top: ZONES_TOP + 422.5,
          left: CARD_LEFT,
          width: CARD_W,
          height: 320,
          background: "transparent",
          zIndex: 10,
        }}
      />
      {/* HVAC SYSTEMS — ZoneCard2 at top-[765px] within ZoneSection */}
      <button
        onClick={() => onOpenZone("hvac")}
        aria-label="Open HVAC Systems subtasks"
        className="absolute cursor-pointer"
        style={{
          top: ZONES_TOP + 765,
          left: CARD_LEFT,
          width: CARD_W,
          height: 320,
          background: "transparent",
          zIndex: 10,
        }}
      />
    </ScrollArea>
  );
}

function TasksScreen({
  onAddTask,
  onApproval,
}: {
  onAddTask: () => void;
  onApproval: () => void;
}) {
  const ADD_BTN_H = 54;
  const ADD_BTN_GAP = 10;
  return (
    <>
      <ScrollArea
        contentHeight={1380}
        reserveNav
        bottomExtra={ADD_BTN_H + ADD_BTN_GAP * 2}
      >
        <Component2 />
        <button
          onClick={onApproval}
          aria-label="Open Structural Frame approval"
          className="absolute cursor-pointer"
          style={{
            top: 390,
            left: 12,
            width: 366,
            height: 210,
            background: "transparent",
            zIndex: 10,
          }}
        />
      </ScrollArea>
      <motion.div
        className="absolute left-0 right-0 z-40 px-[12px]"
        style={{ bottom: ADD_BTN_GAP }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.32, ease: EASE_OUT, delay: 0.08 }}
      >
        <button
          onClick={onAddTask}
          className="w-full h-[54px] bg-[#7a3100] rounded-[12px] flex items-center justify-center gap-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] cursor-pointer active:scale-[0.97] transition-transform"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px]">
            <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[16px] tracking-[0.5px] uppercase">
            ADD TASK
          </span>
        </button>
      </motion.div>
    </>
  );
}

function TaskAssignScreen({ onBack, onAssign }: { onBack: () => void; onAssign: () => void }) {
  return (
    <ScreenFrame kind="detail">
      <ScrollArea contentHeight={1140} reserveNav={false}>
        <InteractiveTaskAssign />
        <button
          onClick={onBack}
          aria-label="Back"
          className="absolute cursor-pointer"
          style={{ top: 0, left: 0, width: 60, height: 56, background: "transparent", zIndex: 20 }}
        />
        <button
          onClick={onAssign}
          aria-label="Assign Task"
          className="absolute cursor-pointer"
          style={{ top: 1044, left: 25, right: 25, height: 70, background: "transparent", zIndex: 20 }}
        />
      </ScrollArea>
    </ScreenFrame>
  );
}

function ApprovalScreen({
  onBack,
  onApprove,
  onReject,
}: {
  onBack: () => void;
  onApprove: () => void;
  onReject: () => void;
}) {
  return (
    <ScreenFrame kind="detail">
      <ScrollArea contentHeight={1320} reserveNav={false}>
        <Component4 />
        <button
          onClick={onBack}
          aria-label="Back"
          className="absolute cursor-pointer"
          style={{ top: 12, left: 12, width: 56, height: 40, background: "transparent", zIndex: 20 }}
        />
        <button
          onClick={onReject}
          aria-label="Reject"
          className="absolute cursor-pointer"
          style={{ top: 1230, left: 24, width: 120, height: 56, background: "transparent", zIndex: 20 }}
        />
        <button
          onClick={onApprove}
          aria-label="Approve Submission"
          className="absolute cursor-pointer"
          style={{ top: 1230, left: 156, width: 232, height: 56, background: "transparent", zIndex: 20 }}
        />
      </ScrollArea>
    </ScreenFrame>
  );
}

function IssuesListScreen({ onViewIssue }: { onViewIssue: () => void }) {
  return (
    <ScrollArea contentHeight={1521} reserveNav>
      <IssuesListRich onViewColumnIssue={onViewIssue} />
    </ScrollArea>
  );
}

function IssueDetailScreen({ onBack }: { onBack: () => void }) {
  return (
    <ScreenFrame kind="detail">
      <ScrollArea contentHeight={1180} reserveNav={false}>
        <Component7 />
        <button
          onClick={onBack}
          aria-label="Back to Issues"
          className="absolute cursor-pointer"
          style={{ top: 12, left: 4, width: 130, height: 42, background: "transparent", zIndex: 20 }}
        />
      </ScrollArea>
    </ScreenFrame>
  );
}

function TimelineIssueDetailScreen({ onBack }: { onBack: () => void }) {
  return (
    <ScreenFrame kind="detail">
      <ScrollArea contentHeight={1180} reserveNav={false}>
        <Component7 />
        <button
          onClick={onBack}
          aria-label="Back to Timeline"
          className="absolute cursor-pointer"
          style={{ top: 12, left: 4, width: 130, height: 42, background: "transparent", zIndex: 20 }}
        />
      </ScrollArea>
    </ScreenFrame>
  );
}

// ── Menu sub-screens (flow layout, 390px space, no Stage scaling) ─────────────

function MenuDetailScreen({ children }: { children: React.ReactNode }) {
  return (
    <ScreenFrame kind="detail">
      <div className="absolute inset-0 overflow-y-auto overflow-x-hidden no-scrollbar bg-[#fbf9f8]">
        {children}
      </div>
    </ScreenFrame>
  );
}

function WorkerDashboardScreen({ onBack }: { onBack: () => void }) {
  return (
    <MenuDetailScreen>
      <WorkerDashboardPanel onBack={onBack} />
    </MenuDetailScreen>
  );
}

function CompletedTasksScreen({
  onBack,
  onOpenTask,
}: {
  onBack: () => void;
  onOpenTask: (id: TimelineTaskId) => void;
}) {
  return (
    <MenuDetailScreen>
      <CompletedTasksPanel onBack={onBack} onOpenTask={onOpenTask} />
    </MenuDetailScreen>
  );
}

function InviteScreen({
  onBack,
  onShowToast,
}: {
  onBack: () => void;
  onShowToast: (msg: string) => void;
}) {
  return (
    <MenuDetailScreen>
      <InvitePanel onBack={onBack} onShowToast={onShowToast} />
    </MenuDetailScreen>
  );
}

function SettingsScreen({ onBack }: { onBack: () => void }) {
  return (
    <MenuDetailScreen>
      <SettingsPanel onBack={onBack} />
    </MenuDetailScreen>
  );
}

function TimelineTaskDetailScreen({ taskId, onBack }: { taskId: TimelineTaskId; onBack: () => void }) {
  return (
    <ScreenFrame kind="detail">
      <ScrollArea contentHeight={1300} reserveNav={false}>
        <TimelineTaskDetail taskId={taskId} onBack={onBack} />
      </ScrollArea>
    </ScreenFrame>
  );
}

function TimelineDecisionDetailScreen({ onBack }: { onBack: () => void }) {
  return (
    <ScreenFrame kind="detail">
      <ScrollArea contentHeight={1200} reserveNav={false}>
        <TimelineDecisionDetail onBack={onBack} />
      </ScrollArea>
    </ScreenFrame>
  );
}

function TimelineSiteUpdateScreen({ onBack }: { onBack: () => void }) {
  return (
    <ScreenFrame kind="detail">
      <ScrollArea contentHeight={1200} reserveNav={false}>
        <TimelineSiteUpdateDetail onBack={onBack} />
      </ScrollArea>
    </ScreenFrame>
  );
}

function TimelineScreen({
  onOpenIssue,
  onOpenTaskDetail,
  onOpenDecisionDetail,
  onOpenSiteUpdate,
}: {
  onOpenIssue: () => void;
  onOpenTaskDetail: (id: TimelineTaskId) => void;
  onOpenDecisionDetail: () => void;
  onOpenSiteUpdate: () => void;
}) {
  return (
    <ScrollArea contentHeight={1420} reserveNav>
      <InteractiveTimeline
        onOpenIssue={onOpenIssue}
        onOpenTaskDetail={onOpenTaskDetail}
        onOpenDecisionDetail={onOpenDecisionDetail}
        onOpenSiteUpdate={onOpenSiteUpdate}
      />
    </ScrollArea>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// REJECTION BOTTOM SHEET
// ────────────────────────────────────────────────────────────────────────────
type ReasonId = "safety" | "delay" | "specs" | "other";

const REASON_CARDS: {
  id: ReasonId;
  x: number;
  y: number;
  icon: { path: string; viewBox: string; w: number; h: number; x: number; y: number };
  label: { lines: [string, string]; x: number; y: number; w: number };
}[] = [
  {
    id: "safety",
    x: 22,
    y: 198,
    icon: { path: rejectionSvgPaths.p7555480, viewBox: "0 0 22 35", w: 22, h: 35, x: 16, y: 16 },
    label: { lines: ["SAFETY", "VIOLATION"], x: 16, y: 51, w: 52.66 },
  },
  {
    id: "delay",
    x: 22,
    y: 309,
    icon: { path: rejectionSvgPaths.p256e1340, viewBox: "0 0 20 36", w: 20, h: 36, x: 16, y: 16 },
    label: { lines: ["DELAY", "ISSUES"], x: 16, y: 52, w: 36.41 },
  },
  {
    id: "specs",
    x: 217,
    y: 198,
    icon: { path: rejectionSvgPaths.p34c7c000, viewBox: "0 0 11 18", w: 11, h: 18, x: 16, y: 16 },
    label: { lines: ["SPECS", "MISMATCH"], x: 16, y: 50, w: 63 },
  },
  {
    id: "other",
    x: 217,
    y: 309,
    icon: { path: rejectionSvgPaths.p3a256b80, viewBox: "0 0 16.7758 23", w: 16.776, h: 23, x: 10.12, y: 29.5 },
    label: { lines: ["OTHER", "REASON"], x: 10.12, y: 52.5, w: 42.988 },
  },
];

const CARD_W = 173;
const CARD_H = 94;

function ReasonCard({
  card,
  active,
  onSelect,
}: {
  card: (typeof REASON_CARDS)[number];
  active: boolean;
  onSelect: () => void;
}) {
  const bg = active ? "#7a3100" : "#fbf9f8";
  const border = active ? "1px solid transparent" : "1px solid #e4e2e2";
  const fg = active ? "#ffffff" : "#1b1c1c";

  return (
    <motion.button
      onClick={onSelect}
      aria-pressed={active}
      aria-label={card.label.lines.join(" ")}
      className="absolute cursor-pointer"
      whileTap={{ scale: 0.96 }}
      animate={{ scale: active ? 1.02 : 1 }}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
      style={{
        top: card.y * SCALE,
        left: card.x * SCALE,
        width: CARD_W * SCALE,
        height: CARD_H * SCALE,
        background: bg,
        border,
        borderRadius: 12 * SCALE,
        padding: 0,
        zIndex: 22,
        transition: "background 200ms ease-out, border-color 200ms ease-out",
      }}
    >
      <svg
        viewBox={card.icon.viewBox}
        fill="none"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          left: card.icon.x * SCALE,
          top: card.icon.y * SCALE,
          width: card.icon.w * SCALE,
          height: card.icon.h * SCALE,
        }}
      >
        <path d={card.icon.path} fill={fg} />
      </svg>
      <div
        className="absolute font-['Manrope:SemiBold',sans-serif] font-semibold uppercase text-left"
        style={{
          left: card.label.x * SCALE,
          top: card.label.y * SCALE,
          width: card.label.w * SCALE,
          color: fg,
          fontSize: 10 * SCALE,
          lineHeight: `${12.5 * SCALE}px`,
        }}
      >
        <p style={{ margin: 0 }}>{card.label.lines[0]}</p>
        <p style={{ margin: 0 }}>{card.label.lines[1]}</p>
      </div>
    </motion.button>
  );
}

function RejectionSheet({
  onSubmit,
  onCancel,
}: {
  onSubmit: () => void;
  onCancel: () => void;
}) {
  const FORM_OFFSET = 172;
  const SHEET_NATIVE_H = 745;
  const SHEET_H = SHEET_NATIVE_H * SCALE;
  const [reason, setReason] = useState<ReasonId | null>(null);
  const canSubmit = reason !== null;

  return (
    <motion.div
      className="absolute inset-0 z-[60]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22, ease: EASE_IN_OUT }}
    >
      <motion.div
        className="absolute inset-0 bg-black/40"
        onClick={onCancel}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.24 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 overflow-hidden rounded-t-[16px] shadow-[0_-8px_24px_rgba(0,0,0,0.18)]"
        style={{ height: SHEET_H }}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 320, damping: 34, mass: 0.9 }}
      >
        <div className="relative size-full bg-[#fbf9f8] rounded-t-[16px] overflow-hidden">
          <div
            style={{
              width: NATIVE_W,
              height: 917,
              position: "absolute",
              top: -FORM_OFFSET * SCALE,
              left: 0,
              transform: `scale(${SCALE})`,
              transformOrigin: "top left",
            }}
          >
            <Component5 />
          </div>

          {REASON_CARDS.map((card) => (
            <ReasonCard
              key={card.id}
              card={card}
              active={reason === card.id}
              onSelect={() => setReason(card.id)}
            />
          ))}

          <button
            onClick={() => canSubmit && onSubmit()}
            disabled={!canSubmit}
            aria-label="Submit Rejection"
            className="absolute"
            style={{
              top: (81 + 493) * SCALE,
              left: 29 * SCALE,
              width: 354 * SCALE,
              height: 60 * SCALE,
              background: "transparent",
              cursor: canSubmit ? "pointer" : "not-allowed",
              zIndex: 25,
            }}
          />
          {!canSubmit && (
            <div
              className="absolute pointer-events-none"
              style={{
                top: (81 + 493) * SCALE,
                left: 29 * SCALE,
                width: 354 * SCALE,
                height: 60 * SCALE,
                background: "rgba(251,249,248,0.55)",
                borderRadius: 12 * SCALE,
                zIndex: 24,
              }}
            />
          )}

          <button
            onClick={onCancel}
            aria-label="Cancel"
            className="absolute cursor-pointer"
            style={{
              top: (81 + 577) * SCALE,
              left: 24 * SCALE,
              width: 366 * SCALE,
              height: 40 * SCALE,
              background: "transparent",
              zIndex: 25,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// ROOT — persistent nav, content area swaps inside its own AnimatePresence.
// "lastTab" keeps the nav anchored to the most recent tab while in a detail
// screen (e.g. tapping a task card from TASKS keeps TASKS highlighted).
// ────────────────────────────────────────────────────────────────────────────
export function ContractorApp({ initialRole = "contractor", onSwitchProfile }: { initialRole?: string; onSwitchProfile?: (role: string) => void }) {
  const [screen, setScreen] = useState<Screen>("home");
  const [lastTab, setLastTab] = useState<Screen>("home");
  const [showRejection, setShowRejection] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("Task Assigned Successfully");
  const [timelineTaskId, setTimelineTaskId] = useState<TimelineTaskId>("concrete");
  const [taskDetailOrigin, setTaskDetailOrigin] = useState<Screen>("timeline");
  const [menuOpen, setMenuOpen] = useState(false);
  const [role, setRole] = useState(initialRole);
  const [showRolePicker, setShowRolePicker] = useState(false);
  const [activeZoneId, setActiveZoneId] = useState<ZoneId>("structural");
  const [activeSubtaskId, setActiveSubtaskId] = useState<SubtaskDetailId>("concrete_slab");

  const navigate = (s: Screen) => {
    if (isTab(s)) setLastTab(s);
    setScreen(s);
  };

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setToastVisible(true);
  }, []);

  const handleTaskAssigned = useCallback(() => {
    navigate("tasks");
    setTimeout(() => showToast("Task Assigned Successfully"), 180);
  }, []);

  const handleMenuAction = useCallback((action: MenuAction) => {
    switch (action) {
      case "switchProfile":
        setShowRolePicker(true);
        break;
      case "workerDashboard":
        navigate("workerDashboard");
        break;
      case "approvals":
        navigate("approvalsScreen");
        break;
      case "resolvedIssues":
        navigate("resolvedIssuesScreen");
        break;
      case "completedTasks":
        navigate("completedTasks");
        break;
      case "invite":
        navigate("inviteScreen");
        break;
      case "settings":
        navigate("settingsScreen");
        break;
    }
  }, []);

  const showNav = isTab(screen);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#fbf9f8]">
      {/* Asset warmup — keeps every contractor PNG decoded in the browser cache
          for the lifetime of the app, so screens never paint blank/grey after
          navigation, modal toggles, or interaction state changes. */}
      <ContractorAssetWarmup />

      {/* Content layer */}
      <div
        className="absolute left-0 right-0 top-0"
        style={{ bottom: showNav ? NAV_H : 0, transition: "bottom 220ms cubic-bezier(0.22,1,0.36,1)" }}
      >
        {/* Persistent tab layer — all four tab screens stay mounted so their
            Figma <img> assets are decoded once and never re-fetched. Visibility
            is driven by opacity, preserving the previous tab→tab cross-fade
            feel without unmounting any images. */}
        {TAB_SCREENS.map((tabId) => {
          const active = screen === tabId;
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
                <HomeScreen
                  onOpenZone={(z) => {
                    setActiveZoneId(z);
                    const screenMap: Record<ZoneId, Screen> = {
                      structural: "structuralSubtasks",
                      interior: "interiorSubtasks",
                      hvac: "hvacSubtasks",
                    };
                    navigate(screenMap[z]);
                  }}
                  onOpenAction={(id: ActionCardId) => {
                    const screenMap: Record<ActionCardId, Screen> = {
                      safetyAudit: "safetyAudit",
                      materialDelivery: "materialDelivery",
                    };
                    navigate(screenMap[id]);
                  }}
                />
              )}
              {tabId === "tasks" && (
                <TasksScreen
                  onAddTask={() => navigate("taskAssign")}
                  onApproval={() => navigate("approval")}
                />
              )}
              {tabId === "issuesList" && (
                <IssuesListScreen onViewIssue={() => navigate("issueDetail")} />
              )}
              {tabId === "timeline" && (
                <TimelineScreen
                  onOpenIssue={() => navigate("timelineIssueDetail")}
                  onOpenTaskDetail={(id) => { setTimelineTaskId(id); setTaskDetailOrigin("timeline"); navigate("timelineTaskDetail"); }}
                  onOpenDecisionDetail={() => navigate("timelineDecisionDetail")}
                  onOpenSiteUpdate={() => navigate("timelineSiteUpdate")}
                />
              )}
            </motion.div>
          );
        })}

        {/* Detail layer — back-button screens transition in/out independently. */}
        <AnimatePresence initial={false}>
          {screen === "taskAssign" && (
            <div key="taskAssign" className="absolute inset-0">
              <TaskAssignScreen onBack={() => navigate("tasks")} onAssign={handleTaskAssigned} />
            </div>
          )}
          {screen === "approval" && (
            <div key="approval" className="absolute inset-0">
              <ApprovalScreen
                onBack={() => navigate("tasks")}
                onApprove={() => navigate("tasks")}
                onReject={() => setShowRejection(true)}
              />
            </div>
          )}
          {screen === "issueDetail" && (
            <div key="issueDetail" className="absolute inset-0">
              <IssueDetailScreen onBack={() => navigate("issuesList")} />
            </div>
          )}
          {screen === "timelineTaskDetail" && (
            <div key="timelineTaskDetail" className="absolute inset-0">
              <TimelineTaskDetailScreen taskId={timelineTaskId} onBack={() => navigate(taskDetailOrigin)} />
            </div>
          )}
          {screen === "timelineDecisionDetail" && (
            <div key="timelineDecisionDetail" className="absolute inset-0">
              <TimelineDecisionDetailScreen onBack={() => navigate("timeline")} />
            </div>
          )}
          {screen === "timelineSiteUpdate" && (
            <div key="timelineSiteUpdate" className="absolute inset-0">
              <TimelineSiteUpdateScreen onBack={() => navigate("timeline")} />
            </div>
          )}
          {screen === "timelineIssueDetail" && (
            <div key="timelineIssueDetail" className="absolute inset-0">
              <TimelineIssueDetailScreen onBack={() => navigate("timeline")} />
            </div>
          )}
          {screen === "workerDashboard" && (
            <div key="workerDashboard" className="absolute inset-0">
              <WorkerDashboardScreen onBack={() => navigate(lastTab)} />
            </div>
          )}
          {screen === "approvalsScreen" && (
            <div key="approvalsScreen" className="absolute inset-0">
              <ApprovalsPanel
                onBack={() => navigate(lastTab)}
                onShowToast={showToast}
              />
            </div>
          )}
          {screen === "resolvedIssuesScreen" && (
            <div key="resolvedIssuesScreen" className="absolute inset-0">
              <ResolvedIssuesPanel onBack={() => navigate(lastTab)} />
            </div>
          )}
          {screen === "completedTasks" && (
            <div key="completedTasks" className="absolute inset-0">
              <CompletedTasksScreen
                onBack={() => navigate(lastTab)}
                onOpenTask={(id) => {
                  setTimelineTaskId(id);
                  setTaskDetailOrigin("completedTasks");
                  navigate("timelineTaskDetail");
                }}
              />
            </div>
          )}
          {screen === "inviteScreen" && (
            <div key="inviteScreen" className="absolute inset-0">
              <InviteScreen onBack={() => navigate(lastTab)} onShowToast={showToast} />
            </div>
          )}
          {screen === "settingsScreen" && (
            <div key="settingsScreen" className="absolute inset-0">
              <SettingsScreen onBack={() => navigate(lastTab)} />
            </div>
          )}
          {(screen === "structuralSubtasks" || screen === "interiorSubtasks" || screen === "hvacSubtasks") && (
            <div key="zoneSubtasks" className="absolute inset-0">
              <MenuDetailScreen>
                <ActiveTaskSubtasksPanel
                  zoneId={activeZoneId}
                  onBack={() => navigate("home")}
                  onOpenSubtask={(id) => {
                    setActiveSubtaskId(id as SubtaskDetailId);
                    navigate("subtaskDetail");
                  }}
                />
              </MenuDetailScreen>
            </div>
          )}
          {screen === "subtaskDetail" && (
            <div key="subtaskDetail" className="absolute inset-0">
              <ScreenFrame kind="detail">
                <ScrollArea contentHeight={1300} reserveNav={false}>
                  <SubtaskDetailPanel
                    subtaskId={activeSubtaskId}
                    onBack={() => {
                      const screenMap: Record<ZoneId, Screen> = {
                        structural: "structuralSubtasks",
                        interior: "interiorSubtasks",
                        hvac: "hvacSubtasks",
                      };
                      navigate(screenMap[activeZoneId]);
                    }}
                  />
                </ScrollArea>
              </ScreenFrame>
            </div>
          )}
          {screen === "safetyAudit" && (
            <div key="safetyAudit" className="absolute inset-0">
              <MenuDetailScreen>
                <SafetyAuditPanel
                  onBack={() => navigate("home")}
                  onSubmit={() => {
                    navigate("home");
                    setTimeout(() => showToast("Safety Audit Submitted"), 180);
                  }}
                />
              </MenuDetailScreen>
            </div>
          )}
          {screen === "materialDelivery" && (
            <div key="materialDelivery" className="absolute inset-0">
              <MenuDetailScreen>
                <MaterialDeliveryPanel
                  onBack={() => navigate("home")}
                  onMarkReceived={() => {
                    setTimeout(() => showToast("Delivery Updated"), 300);
                  }}
                />
              </MenuDetailScreen>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Persistent top header — only over tab screens; fades out when entering
          a detail screen so it doesn't visually compete with the content transition.
          Short y-offset (not full HEADER_H) keeps the exit subtle and directional
          without feeling like the whole app is relocating. */}
      <AnimatePresence initial={false}>
        {showNav && (
          <motion.div
            key="persistent-header"
            className="absolute top-0 left-0 right-0 z-40"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: EASE_OUT }}
          >
            <PersistentHeader onMenuOpen={() => setMenuOpen(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent nav — fades with a small y offset so it exits without
          competing against the detail screen's entrance from below. */}
      <AnimatePresence initial={false}>
        {showNav && (
          <motion.div
            key="persistent-nav"
            className="absolute bottom-0 left-0 right-0 z-50"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.22, ease: EASE_OUT }}
          >
            <BottomNav active={lastTab} onNav={navigate} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showRejection && (
          <RejectionSheet
            onSubmit={() => {
              setShowRejection(false);
              navigate("tasks");
            }}
            onCancel={() => setShowRejection(false)}
          />
        )}
      </AnimatePresence>

      {/* Success toast — renders above all layers */}
      <SiteflowToast
        visible={toastVisible}
        message={toastMessage}
        onDismiss={() => setToastVisible(false)}
      />

      {/* Hamburger drawer — z-[70/80], above header and nav */}
      <HamburgerDrawer
        open={menuOpen}
        role={role}
        onClose={() => setMenuOpen(false)}
        onAction={handleMenuAction}
      />

      {/* Role picker overlay — z-[90], slides up over everything */}
      <AnimatePresence>
        {showRolePicker && (
          <motion.div
            key="role-picker"
            className="absolute inset-0 z-[90]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <Screen5
              returningUser
              onContinue={(r) => {
                setShowRolePicker(false);
                onSwitchProfile?.(r);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}