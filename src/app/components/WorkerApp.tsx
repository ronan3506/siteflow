import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import headerSvgPaths from "../../imports/1TodayBoardHomeScreen-1/svg-dgyex2e769";
import { LangBadge } from "./LangBadge";
import { Screen5 } from "./screens/Screen5";

// ─── Images (relative imports matching the Figma source directories) ──────────
import imgImage2 from "../../imports/1TaskListHomeFinalColor/f068387a9ecb0831125f5b8205e70bd6b4c10d22.png";
import imgSteelFrame from "../../imports/1TaskListHomeFinalColor/1e0de31a9eb5beccaa81f77ec28b80afd6b3f94d.png";
import imgElectricalConduits from "../../imports/1TaskListHomeFinalColor/3530b505514269fd86b8ec8fc25cd0a3e4b0573d.png";
import imgFloorPlan from "../../imports/2TaskDetailFinalColor/2da371bb88b721fb844cadb22cc7df8e0c447212.png";
import imgProofCapture from "../../imports/3CaptureProofFinalColor/9c96b64fb9bd3e183f29ec75cefc9a3913450918.png";
import imgProofWaiting from "figma:asset/2a20102ab74d2784b502d3663eb7d9bc2a3b28d7.png";

// ─── Types ────────────────────────────────────────────────────────────────────
type WorkerScreen =
  | "activeTasks"
  | "reviewTask"
  | "captureProof"
  | "waitingApproval"
  | "taskCompleted"
  | "completedTasksHistory"
  | "settingsScreen";

type WorkerMenuAction = "switchProfile" | "completedTasks" | "settings";

interface WorkerTask {
  id: string;
  title: string;
  description: string;
  floor: string;
  area: string;
  material: string;
  quantity: string;
  tools: string;
  notes: string;
  img: string;
  taskId: string;
  assignedTo: string;
}

// ─── Task data ────────────────────────────────────────────────────────────────
const TASKS: WorkerTask[] = [
  {
    id: "task-1",
    title: "Install Floor Tiles",
    description:
      "Install ceramic floor tiles evenly across the marked area before final finishing work begins.",
    floor: "1ST FLOOR",
    area: "CORRIDOR • 1ST FLOOR",
    material: "Ceramic 60x60cm",
    quantity: "150 sq meters",
    tools: "Tile cutter, Level, Trowel, Spacers (2mm)",
    notes:
      "Ensure substrate is level and clean. Use premium adhesive for large format. Maintain 2mm spacing.",
    img: imgImage2,
    taskId: "#TSK-8901",
    assignedTo: "Ramu Kinavar",
  },
  {
    id: "task-2",
    title: "Assemble Steel Frame",
    description:
      "Check torque specifications on all primary load-bearing connections on level 3 sector north.",
    floor: "1ST FLOOR",
    area: "ZONE A • 1ST FLOOR",
    material: "Structural Steel A36",
    quantity: "48 beams",
    tools: "Torque wrench, Impact driver, Safety harness",
    notes:
      "All connections must meet Grade 8 torque spec. Record each torque value on site log.",
    img: imgSteelFrame,
    taskId: "#TSK-8902",
    assignedTo: "Ramu Kinavar",
  },
  {
    id: "task-3",
    title: "Install Electric Cables",
    description:
      "Review main electrical trunk lines for conflict with upcoming HVAC duct installation paths.",
    floor: "2ND FLOOR",
    area: "MAIN TRUNK • 2ND FLOOR",
    material: "THHN Wire 4AWG",
    quantity: "200m run",
    tools: "Wire stripper, Conduit bender, Multimeter",
    notes:
      "Maintain 6-inch clearance from HVAC ducts. Label all trunk lines at 3-foot intervals.",
    img: imgElectricalConduits,
    taskId: "#TSK-8903",
    assignedTo: "Ramu Kinavar",
  },
];

// ─── Layout constants ─────────────────────────────────────────────────────────
const NATIVE_W = 412;
const SCALE = 390 / NATIVE_W;
const SITEFLOW_H = Math.round(64 * SCALE); // ≈ 60 — SITEFLOW header on home
const NAV_H = 64;                            // standalone back-header on detail screens

// ─── Shared icons ─────────────────────────────────────────────────────────────
function BackChevron() {
  return (
    <svg width="9" height="15" viewBox="0 0 9 15" fill="none">
      <path
        d="M7.5 1.5L1.5 7.5L7.5 13.5"
        stroke="#7a3100"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── SITEFLOW Header (Active Tasks home only) ─────────────────────────────────
function SiteflowHeader({ onHamburger }: { onHamburger: () => void }) {
  return (
    <div
      className="absolute top-0 left-0 right-0 overflow-hidden"
      style={{ height: SITEFLOW_H, backgroundColor: "#fbf9f8", zIndex: 20 }}
    >
      <div
        style={{
          width: NATIVE_W,
          height: 64,
          position: "absolute",
          top: 0,
          left: 0,
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
        }}
      >
        <div className="absolute bg-[#fbf9f8] h-[64px] left-0 top-0 w-[412px]">
          {/* Language toggle */}
          <div className="absolute left-[308px] top-[17px]">
            <LangBadge />
          </div>
          {/* Hamburger hit area */}
          <button
            onClick={onHamburger}
            aria-label="Open menu"
            className="absolute cursor-pointer active:opacity-60 transition-opacity"
            style={{ left: 8, top: 8, width: 56, height: 48, background: "transparent", zIndex: 10, border: "none" }}
          />
          {/* Hamburger icon */}
          <div className="absolute h-[16px] left-[24px] top-[24px] w-[21px]">
            <div className="absolute inset-[-1.56%_-1.19%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 16.5">
                <path d={headerSvgPaths.p1c170d80} fill="#2E2A28" stroke="#2E2A28" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
          {/* Wordmark */}
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

// ─── Standalone back-header (all non-home screens) ────────────────────────────
function ScreenHeader({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <div
      className="absolute left-0 right-0 flex items-center"
      style={{
        top: 0,
        height: NAV_H,
        backgroundColor: "#faf8f6",
        zIndex: 20,
      }}
    >
      <button
        onClick={onBack}
        className="flex items-center justify-center cursor-pointer active:opacity-60 transition-opacity"
        style={{ width: 40, height: 40, borderRadius: "50%", background: "transparent", border: "none", marginLeft: 16, flexShrink: 0 }}
        aria-label="Go back"
      >
        <BackChevron />
      </button>
      <span
        className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
        style={{ fontSize: 16, letterSpacing: "0.8px", color: "#7a3100", marginLeft: 8 }}
      >
        {title}
      </span>
    </div>
  );
}

// ─── Worker Profile Drawer ────────────────────────────────────────────────────
const WORKER_MENU: { key: WorkerMenuAction; label: string }[] = [
  { key: "switchProfile",   label: "SWITCH PROFILE"  },
  { key: "completedTasks",  label: "COMPLETED TASKS" },
  { key: "settings",        label: "SETTINGS"        },
];

function DrawerChevron() {
  return (
    <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
      <path d="M1 1l4 4.5L1 10" stroke="#b8afa9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WorkerProfileDrawer({
  open,
  onClose,
  onAction,
}: {
  open: boolean;
  onClose: () => void;
  onAction: (action: WorkerMenuAction) => void;
}) {
  const W = 280;

  const handleItem = (key: WorkerMenuAction) => {
    onClose();
    setTimeout(() => onAction(key), 220);
  };
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(26,10,4,0.52)", zIndex: 70 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            onClick={onClose}
          />
          <motion.div
            className="absolute left-0 top-0 bottom-0 flex flex-col overflow-hidden"
            style={{ width: W, backgroundColor: "#fbf9f8", zIndex: 80, boxShadow: "6px 0 32px rgba(26,10,4,0.20), 2px 0 8px rgba(26,10,4,0.08)" }}
            initial={{ x: -W }}
            animate={{ x: 0 }}
            exit={{ x: -W }}
            transition={{ type: "spring", stiffness: 320, damping: 32, mass: 0.9 }}
          >
            <div
              style={{
                background: "linear-gradient(160deg, #f5e8dc 0%, #faf0e8 100%)",
                padding: "48px 24px 24px",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <button
                onClick={onClose}
                className="absolute cursor-pointer active:opacity-60 transition-opacity flex items-center justify-center"
                style={{ top: 14, right: 14, width: 30, height: 30, borderRadius: "50%", backgroundColor: "rgba(122,49,0,0.08)", border: "none" }}
                aria-label="Close"
              >
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M1 1l9 9M10 1L1 10" stroke="#7a3100" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
              <div
                style={{
                  width: 62, height: 62, borderRadius: "50%",
                  border: "2.5px solid #ddc1b4", marginBottom: 13,
                  backgroundColor: "#e8d8cc", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 2px 10px rgba(122,49,0,0.15)",
                }}
              >
                <span className="font-['Manrope:Bold',sans-serif] font-bold" style={{ fontSize: 20, color: "#7a3100" }}>RK</span>
              </div>
              <p className="font-['Manrope:Bold',sans-serif] font-bold" style={{ fontSize: 16, color: "#1a1a1a", lineHeight: "20px", marginBottom: 8 }}>
                Ramu Kinavar
              </p>
              <div style={{ display: "inline-flex", alignItems: "center", backgroundColor: "#7a3100", borderRadius: 20, paddingLeft: 10, paddingRight: 10, paddingTop: 4, paddingBottom: 4 }}>
                <span className="font-['Manrope:Bold',sans-serif] font-bold uppercase" style={{ fontSize: 9, letterSpacing: "0.9px", color: "#fff" }}>WORKER</span>
              </div>
            </div>
            <div style={{ height: 1, backgroundColor: "#e6e1dc", flexShrink: 0 }} />

            {/* Menu items */}
            <div style={{ flex: 1, paddingTop: 10, paddingBottom: 10 }}>
              {WORKER_MENU.map((item, i) => (
                <motion.button
                  key={item.key}
                  onClick={() => handleItem(item.key)}
                  className="w-full flex items-center cursor-pointer"
                  style={{
                    height: 66,
                    paddingLeft: 24,
                    paddingRight: 20,
                    background: "transparent",
                    border: "none",
                    borderBottom: i < WORKER_MENU.length - 1 ? "1px solid #f3ede9" : "none",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f5ede7"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + i * 0.04, duration: 0.22, ease: "easeOut" }}
                >
                  <span
                    className="font-['Manrope:SemiBold',sans-serif] font-semibold uppercase flex-1 text-left"
                    style={{ fontSize: 11, letterSpacing: "0.8px", color: "#1a1a1a" }}
                  >
                    {item.label}
                  </span>
                  <DrawerChevron />
                </motion.button>
              ))}
            </div>

            <div style={{ borderTop: "1px solid #e6e1dc", padding: "13px 24px" }}>
              <p className="font-['Manrope:Regular',sans-serif]" style={{ fontSize: 10, color: "#b8afa9", letterSpacing: "0.2px" }}>
                SITEFLOW v1.0 · Worker Build
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Scrollable content wrapper (hides scrollbar) ────────────────────────────
function ScrollArea({
  top,
  bottom = 0,
  children,
}: {
  top: number;
  bottom?: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className="absolute left-0 right-0 worker-scroll"
      style={{
        top,
        bottom,
        overflowY: "auto",
        overflowX: "hidden",
        scrollbarWidth: "none",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        msOverflowStyle: "none" as any,
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div style={{ boxSizing: "border-box" }}>
        {children}
      </div>
    </div>
  );
}

// ─── Screen 1: Active Tasks ───────────────────────────────────────────────────
function ActiveTasksScreen({
  onReviewTask,
  onHamburger,
}: {
  onReviewTask: (id: string) => void;
  onHamburger: () => void;
}) {
  return (
    <div className="absolute inset-0" style={{ backgroundColor: "#fdfbf7" }}>
      <SiteflowHeader onHamburger={onHamburger} />
      <ScrollArea top={SITEFLOW_H}>
        <div style={{ padding: "24px 20px 40px" }}>
          <div style={{ marginBottom: 28 }}>
            <h1
              className="font-['Manrope:ExtraBold',sans-serif] font-extrabold"
              style={{ fontSize: 36, color: "#3e2723", lineHeight: "45px", letterSpacing: "-0.9px", marginBottom: 8 }}
            >ACTIVE TASKS</h1>
            <p
              className="font-['Manrope:Medium',sans-serif] font-medium"
              style={{ fontSize: 14, color: "#6d4c41", lineHeight: "22.75px" }}
            >
              Manage your daily operations and site inspections.
              <br />
              Ensure all structural standards are met.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {TASKS.map((task) => (
              <TaskCard key={task.id} task={task} onReview={() => onReviewTask(task.id)} />
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}

function TaskCard({ task, onReview }: { task: WorkerTask; onReview: () => void }) {
  return (
    <div
      style={{
        backgroundColor: "#ede8e2",
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid rgba(215,204,200,0.5)",
      }}
    >
      {/* Image */}
      <div style={{ height: 160, backgroundColor: "#d7ccc8", overflow: "hidden", position: "relative" }}>
        <img
          src={task.img}
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div
          style={{
            position: "absolute", top: 12, left: 12,
            backgroundColor: "#7a3100", borderRadius: 8,
            paddingLeft: 10, paddingRight: 10, height: 23,
            display: "flex", alignItems: "center",
          }}
        >
          <span className="font-['Manrope:Bold',sans-serif] font-bold uppercase" style={{ fontSize: 10, letterSpacing: "0.5px", color: "#fff" }}>
            {task.floor}
          </span>
        </div>
        {/* Audio/TTS accessibility icon — top-right of image */}
        <div style={{ position: "absolute", top: "8.86%", right: "5.78%", width: 19, height: 19, pointerEvents: "none" }}>
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
            <path d="M11.075 0.600047C11.4046 0.352819 11.875 0.588008 11.875 1.00004V6.12461C11.875 6.30346 11.9721 6.46642 12.1194 6.56793C12.5532 6.86698 12.9162 7.2593 13.1812 7.7175C13.4944 8.25933 13.6593 8.87414 13.6593 9.5C13.6593 10.1259 13.4944 10.7407 13.1812 11.2825C12.9162 11.7407 12.5532 12.133 12.1194 12.4321C11.9721 12.5336 11.875 12.6965 11.875 12.8754V18C11.875 18.412 11.4046 18.6472 11.075 18.4L5.6754 14.35C5.58885 14.2851 5.48358 14.25 5.37539 14.25H0.499999C0.223857 14.25 0 14.0261 0 13.75V5.25C0 4.97386 0.223858 4.75 0.5 4.75H5.37539C5.48358 4.75 5.58885 4.71491 5.6754 4.64999L11.075 0.600047ZM9.5 5.74992C9.5 5.33792 9.02965 5.10272 8.70002 5.34991L6.46626 7.02502C6.37972 7.08992 6.27446 7.125 6.16629 7.125H2.875C2.59886 7.125 2.375 7.34886 2.375 7.625V11.375C2.375 11.6511 2.59886 11.875 2.875 11.875H6.16629C6.27446 11.875 6.37972 11.9101 6.46626 11.975L8.70002 13.6501C9.02965 13.8973 9.5 13.6621 9.5 13.2501V5.74992Z" fill="white" />
            <path d="M16.15 3.8L15.601 3.38771C15.3802 3.2219 15.0668 3.26647 14.9009 3.48725L14.0755 4.58624C13.9096 4.80715 13.9543 5.12076 14.1753 5.28652L14.725 5.69881C15.0852 5.9696 15.4051 6.29027 15.675 6.65119C16.2723 7.44444 16.625 8.42888 16.625 9.5C16.625 10.5711 16.2723 11.5544 15.675 12.35C15.4049 12.7101 15.0851 13.0299 14.725 13.3L14.1746 13.7135C13.9539 13.8793 13.9093 14.1926 14.075 14.4134L14.9009 15.5136C15.0667 15.7346 15.3803 15.7792 15.6011 15.6132L16.1512 15.2C16.6905 14.7947 17.1695 14.315 17.5738 13.775C18.5008 12.5426 19.0014 11.0421 19 9.5C19 7.89688 18.4692 6.41488 17.575 5.225C17.1699 4.68489 16.6901 4.20509 16.15 3.8Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
          <span className="font-['Manrope:SemiBold',sans-serif] font-semibold" style={{ fontSize: 20, color: "#3e2723", lineHeight: "28px", flex: 1 }}>
            {task.title}
          </span>
          <div style={{ backgroundColor: "#fff3e0", borderRadius: 4, paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, flexShrink: 0, marginTop: 4 }}>
            <span className="font-['Manrope:Bold',sans-serif] font-bold" style={{ fontSize: 8.5, color: "#f5a623", letterSpacing: "0.34px" }}>
              PENDING
            </span>
          </div>
        </div>
        <p className="font-['Manrope:Medium',sans-serif] font-medium" style={{ fontSize: 12, color: "#6d4c41", lineHeight: "19.5px" }}>
          {task.description}
        </p>
        <button
          onClick={onReview}
          className="w-full cursor-pointer active:opacity-80 transition-opacity"
          style={{
            backgroundColor: "#7a3100", borderRadius: 12,
            paddingTop: 12, paddingBottom: 12,
            display: "flex", alignItems: "center", justifyContent: "center",
            border: "none", boxShadow: "0 1px 1px rgba(0,0,0,0.05)", marginTop: 4,
          }}
        >
          <span className="font-['Manrope:Bold',sans-serif] font-bold uppercase" style={{ fontSize: 14, letterSpacing: "0.35px", color: "#fff" }}>
            REVIEW TASK
          </span>
        </button>
      </div>
    </div>
  );
}

// ─── Screen 2: Review Task ────────────────────────────────────────────────────
function ReviewTaskScreen({
  task,
  onStartTask,
  onBack,
}: {
  task: WorkerTask;
  onStartTask: () => void;
  onBack: () => void;
}) {
  return (
    <div className="absolute inset-0" style={{ backgroundColor: "#faf8f6" }}>
      <ScreenHeader title="REVIEW TASK" onBack={onBack} />
      <ScrollArea top={NAV_H}>
        <div style={{ padding: "20px 20px 40px", display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Task header */}
          <div>
            <span
              className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
              style={{ fontSize: 11, letterSpacing: "1.65px", color: "#6d5f54", display: "block", marginBottom: 6 }}
            >
              {task.area}
            </span>
            <h2
              className="font-['Manrope:ExtraBold',sans-serif] font-extrabold"
              style={{ fontSize: 24, color: "#1a1a1a", lineHeight: "30px", marginBottom: 10 }}
            >
              {task.title}
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <div style={{ backgroundColor: "rgba(77,59,44,0.1)", borderRadius: 6, paddingLeft: 10, paddingRight: 10, paddingTop: 4, paddingBottom: 4 }}>
                <span className="font-['Manrope:Bold',sans-serif] font-bold uppercase" style={{ fontSize: 10, letterSpacing: "0.5px", color: "#1a1a1a" }}>PENDING</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="5.5" stroke="#6d5f54" />
                  <path d="M6 3v3.5l2 1.5" stroke="#6d5f54" strokeLinecap="round" />
                </svg>
                <span className="font-['Manrope:Medium',sans-serif] font-medium" style={{ fontSize: 12, color: "#6d5f54" }}>
                  Due Today, 5:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Reference image */}
          <div style={{ borderRadius: 16, overflow: "hidden", backgroundColor: "#f2ede9", aspectRatio: "4/3", position: "relative" }}>
            <img
              src={imgFloorPlan}
              alt="Reference blueprint"
              style={{ width: "100%", height: "100%", objectFit: "cover", mixBlendMode: "multiply", opacity: 0.85, display: "block" }}
            />
            <div
              style={{
                position: "absolute", bottom: 12, right: 16,
                backgroundColor: "#7a3100", borderRadius: 12,
                paddingLeft: 12, paddingRight: 12, paddingTop: 7, paddingBottom: 7,
                display: "flex", alignItems: "center", gap: 7,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M10 1H2a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1zm-8 1.5h8v.6L6 7 2 3.1V2.5zm0 6.5V5l4 3 4-3v4H2z" fill="#faf8f6" />
              </svg>
              <span className="font-['Manrope:Bold',sans-serif] font-bold uppercase" style={{ fontSize: 10, letterSpacing: "0.5px", color: "#faf8f6" }}>
                VIEW BLUEPRINT
              </span>
            </div>
          </div>

          {/* Technical details */}
          <div
            style={{
              backgroundColor: "#fff", border: "1px solid #e6ded7", borderRadius: 16,
              padding: 20, display: "flex", flexDirection: "column", gap: 18,
              boxShadow: "0 1px 1px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ borderBottom: "1px solid rgba(230,222,215,0.5)", paddingBottom: 12, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span className="font-['Manrope:Bold',sans-serif] font-bold uppercase" style={{ fontSize: 13, letterSpacing: "0.7px", color: "#1a1a1a" }}>
                TECHNICAL DETAILS
              </span>
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M11.075 0.600047C11.4046 0.352819 11.875 0.588008 11.875 1.00004V6.12461C11.875 6.30346 11.9721 6.46642 12.1194 6.56793C12.5532 6.86698 12.9162 7.2593 13.1812 7.7175C13.4944 8.25933 13.6593 8.87414 13.6593 9.5C13.6593 10.1259 13.4944 10.7407 13.1812 11.2825C12.9162 11.7407 12.5532 12.133 12.1194 12.4321C11.9721 12.5336 11.875 12.6965 11.875 12.8754V18C11.875 18.412 11.4046 18.6472 11.075 18.4L5.6754 14.35C5.58885 14.2851 5.48358 14.25 5.37539 14.25H0.499999C0.223857 14.25 0 14.0261 0 13.75V5.25C0 4.97386 0.223858 4.75 0.5 4.75H5.37539C5.48358 4.75 5.58885 4.71491 5.6754 4.64999L11.075 0.600047ZM9.5 5.74992C9.5 5.33792 9.02965 5.10272 8.70002 5.34991L6.46626 7.02502C6.37972 7.08992 6.27446 7.125 6.16629 7.125H2.875C2.59886 7.125 2.375 7.34886 2.375 7.625V11.375C2.375 11.6511 2.59886 11.875 2.875 11.875H6.16629C6.27446 11.875 6.37972 11.9101 6.46626 11.975L8.70002 13.6501C9.02965 13.8973 9.5 13.6621 9.5 13.2501V5.74992Z" fill="#6D5F54" />
                <path d="M16.15 3.8L15.601 3.38771C15.3802 3.2219 15.0668 3.26647 14.9009 3.48725L14.0755 4.58624C13.9096 4.80715 13.9543 5.12076 14.1753 5.28652L14.725 5.69881C15.0852 5.9696 15.4051 6.29027 15.675 6.65119C16.2723 7.44444 16.625 8.42888 16.625 9.5C16.625 10.5711 16.2723 11.5544 15.675 12.35C15.4049 12.7101 15.0851 13.0299 14.725 13.3L14.1746 13.7135C13.9539 13.8793 13.9093 14.1926 14.075 14.4134L14.9009 15.5136C15.0667 15.7346 15.3803 15.7792 15.6011 15.6132L16.1512 15.2C16.6905 14.7947 17.1695 14.315 17.5738 13.775C18.5008 12.5426 19.0014 11.0421 19 9.5C19 7.89688 18.4692 6.41488 17.575 5.225C17.1699 4.68489 16.6901 4.20509 16.15 3.8Z" fill="#6D5F54" />
              </svg>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 14px" }}>
              <div>
                <div className="font-['Manrope:SemiBold',sans-serif] font-semibold uppercase" style={{ fontSize: 10, letterSpacing: "1px", color: "#7a3100", marginBottom: 4 }}>MATERIAL</div>
                <div className="font-['Manrope:SemiBold',sans-serif] font-semibold" style={{ fontSize: 14, color: "#1a1a1a" }}>{task.material}</div>
              </div>
              <div>
                <div className="font-['Manrope:SemiBold',sans-serif] font-semibold uppercase" style={{ fontSize: 10, letterSpacing: "1px", color: "#7a3100", marginBottom: 4 }}>QUANTITY</div>
                <div className="font-['Manrope:SemiBold',sans-serif] font-semibold" style={{ fontSize: 14, color: "#1a1a1a" }}>{task.quantity}</div>
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <div className="font-['Manrope:SemiBold',sans-serif] font-semibold uppercase" style={{ fontSize: 10, letterSpacing: "1px", color: "#7a3100", marginBottom: 4 }}>REQUIRED TOOLS</div>
                <div className="font-['Manrope:SemiBold',sans-serif] font-semibold" style={{ fontSize: 14, color: "#1a1a1a" }}>{task.tools}</div>
              </div>
            </div>
            <div style={{ backgroundColor: "#f7f3f0", borderRadius: 10, borderLeft: "2px solid #1a1a1a", paddingLeft: 14, paddingRight: 12, paddingTop: 12, paddingBottom: 12 }}>
              <p className="font-['Manrope:Regular',sans-serif]" style={{ fontSize: 12, color: "#6d5f54", lineHeight: "19px" }}>
                {task.notes}
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <button
              onClick={onStartTask}
              className="w-full cursor-pointer active:opacity-80 transition-opacity"
              style={{
                backgroundColor: "#7a3100", borderRadius: 16, height: 56,
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                border: "none",
                boxShadow: "0 10px 15px -3px rgba(77,59,44,0.2), 0 4px 6px -4px rgba(77,59,44,0.2)",
              }}
            >
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                <path d="M0 0v12l10-6z" fill="white" />
              </svg>
              <span className="font-['Manrope:Bold',sans-serif] font-bold uppercase" style={{ fontSize: 14, letterSpacing: "1.4px", color: "#fff" }}>
                START TASK
              </span>
            </button>
            <button
              className="w-full cursor-pointer active:opacity-80 transition-opacity"
              style={{
                backgroundColor: "#ebe4de", borderRadius: 16, height: 56,
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                border: "1px solid #e6ded7",
              }}
            >
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
                <path d="M9 0L0 16h18L9 0zm0 13.5a1 1 0 110-2 1 1 0 010 2zm-1-3.5V6h2v4H8z" fill="#b3261e" />
              </svg>
              <span className="font-['Manrope:Bold',sans-serif] font-bold uppercase" style={{ fontSize: 14, letterSpacing: "1.4px", color: "#7a3100" }}>
                REPORT ISSUE
              </span>
            </button>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}

// ─── Screen 3: Capture Proof ──────────────────────────────────────────────────
const FOOTER_H = 120;

function CaptureProofScreen({ onSubmit, onBack }: { onSubmit: () => void; onBack: () => void }) {
  return (
    <div className="absolute inset-0" style={{ backgroundColor: "#0a0a0a" }}>
      <ScreenHeader title="CAPTURE PROOF" onBack={onBack} />

      {/* Viewfinder fills between header and footer */}
      <div className="absolute left-0 right-0 overflow-hidden" style={{ top: NAV_H, bottom: FOOTER_H }}>
        <img
          src={imgProofCapture}
          alt="Captured proof"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        {/* Focus bracket corners */}
        <div style={{ position: "absolute", inset: 24, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: 36, height: 36, borderTop: "2px solid rgba(255,255,255,0.7)", borderLeft: "2px solid rgba(255,255,255,0.7)" }} />
          <div style={{ position: "absolute", top: 0, right: 0, width: 36, height: 36, borderTop: "2px solid rgba(255,255,255,0.7)", borderRight: "2px solid rgba(255,255,255,0.7)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, width: 36, height: 36, borderBottom: "2px solid rgba(255,255,255,0.7)", borderLeft: "2px solid rgba(255,255,255,0.7)" }} />
          <div style={{ position: "absolute", bottom: 0, right: 0, width: 36, height: 36, borderBottom: "2px solid rgba(255,255,255,0.7)", borderRight: "2px solid rgba(255,255,255,0.7)" }} />
        </div>
      </div>

      {/* Footer */}
      <div
        className="absolute left-0 right-0"
        style={{
          bottom: 0, height: FOOTER_H,
          backgroundColor: "#fdfbf9", borderTop: "1px solid #d3c2bb",
          display: "flex", alignItems: "center",
          paddingLeft: 20, paddingRight: 20, gap: 12,
        }}
      >
        <button
          onClick={onBack}
          className="cursor-pointer active:opacity-80 transition-opacity"
          style={{
            flex: 1, backgroundColor: "#e8e0dc", borderRadius: 16, height: 54,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            border: "none",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1a6 6 0 100 12A6 6 0 007 1zm0 1.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm-.5 2v3H4v1.5h2.5V11h1.5V8.5H10V7H7.5V4.5h-1z" fill="#2c1810" />
          </svg>
          <span className="font-['Manrope:Bold',sans-serif] font-bold" style={{ fontSize: 16, color: "#2c1810" }}>Retake</span>
        </button>
        <button
          onClick={onSubmit}
          className="cursor-pointer active:opacity-80 transition-opacity"
          style={{
            flex: 1, backgroundColor: "#7a3100", borderRadius: 16, height: 54,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            border: "none", boxShadow: "0 1px 1px rgba(0,0,0,0.05)",
          }}
        >
          <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
            <path d="M1 5.5L5 9.5L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-['Manrope:Bold',sans-serif] font-bold" style={{ fontSize: 14, color: "#fff" }}>Submit Proof</span>
        </button>
      </div>
    </div>
  );
}

// ─── Screen 4: Waiting for Approval ──────────────────────────────────────────
function WaitingApprovalScreen({
  onBackToTasks,
  onSimulateApproval,
}: {
  onBackToTasks: () => void;
  onSimulateApproval: () => void;
}) {
  return (
    <div className="absolute inset-0" style={{ backgroundColor: "#fbf9f8" }}>
      <ScreenHeader title="STATUS" onBack={onBackToTasks} />
      <ScrollArea top={NAV_H}>
        <div style={{ padding: "28px 24px 40px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Proof image */}
          <div style={{ width: "100%" }}>
            <div
              style={{
                aspectRatio: "16/9", backgroundColor: "#e4e2e2", borderRadius: 12,
                overflow: "hidden", position: "relative",
                boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
              }}
            >
              <img
                src={imgProofWaiting}
                alt="Submitted proof"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div
                style={{
                  position: "absolute", top: 12, left: 12,
                  backgroundColor: "#e8f5e9", borderRadius: 6,
                  paddingLeft: 8, paddingRight: 8, height: 28,
                  display: "flex", alignItems: "center",
                }}
              >
                <span className="font-['Manrope:Bold',sans-serif] font-bold" style={{ fontSize: 11, letterSpacing: "0.44px", color: "#2e7d32" }}>
                  SUBMITTED
                </span>
              </div>
            </div>
            <p className="font-['Manrope:Regular',sans-serif]" style={{ fontSize: 11, color: "#564239", marginTop: 10, paddingLeft: 4 }}>
              Uploaded 2 mins ago
            </p>
          </div>

          {/* Status banner */}
          <div style={{ marginTop: 20, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                backgroundColor: "#f3b344", borderRadius: 12,
                paddingLeft: 20, paddingRight: 20, paddingTop: 14, paddingBottom: 14,
                display: "flex", alignItems: "center", gap: 10,
                boxShadow: "0 1px 1px rgba(0,0,0,0.05)",
              }}
            >
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <circle cx="8.5" cy="8.5" r="8" stroke="#201a17" />
                <path d="M8.5 5v4.5M8.5 11.5v.5" stroke="#201a17" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="font-['Manrope:Bold',sans-serif] font-bold uppercase" style={{ fontSize: 12, letterSpacing: "1.8px", color: "#201a17", whiteSpace: "nowrap" }}>
                WAITING FOR APPROVAL
              </span>
            </div>
            <div style={{ marginTop: 20, maxWidth: 260, textAlign: "center" }}>
              <p className="font-['Manrope:Regular',sans-serif]" style={{ fontSize: 14, color: "#564239", lineHeight: "22.75px" }}>
                Your submission has been received and is currently under review by the site manager.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div style={{ marginTop: 28, width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
            <button
              onClick={onBackToTasks}
              className="w-full cursor-pointer active:opacity-80 transition-opacity"
              style={{
                backgroundColor: "#7a3100", borderRadius: 12, height: 50,
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                border: "none", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
              }}
            >
              <svg width="11" height="12" viewBox="0 0 11 12" fill="none">
                <path d="M5.5 0L0 6h3.5v6h4V6H11z" fill="white" />
              </svg>
              <span className="font-['Manrope:Bold',sans-serif] font-bold uppercase" style={{ fontSize: 12, letterSpacing: "1.2px", color: "#fff", whiteSpace: "nowrap" }}>
                BACK TO TASKS
              </span>
            </button>
            <button
              onClick={onBackToTasks}
              className="w-full cursor-pointer active:opacity-80 transition-opacity"
              style={{ backgroundColor: "#e9e8e7", borderRadius: 12, height: 50, display: "flex", alignItems: "center", justifyContent: "center", border: "none" }}
            >
              <span className="font-['Manrope:Bold',sans-serif] font-bold uppercase" style={{ fontSize: 12, letterSpacing: "1.2px", color: "#1b1c1c" }}>
                CANCEL SUBMISSION
              </span>
            </button>
          </div>

          {/* Demo controls */}
          <div
            style={{
              marginTop: 32, paddingTop: 20, borderTop: "1px solid #e6e1dc",
              width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
            }}
          >
            <p className="font-['Manrope:Regular',sans-serif] uppercase" style={{ fontSize: 9, color: "#b8afa9", letterSpacing: "0.8px" }}>
              Demo Controls
            </p>
            <button
              onClick={onSimulateApproval}
              className="cursor-pointer active:opacity-80 transition-opacity"
              style={{
                backgroundColor: "rgba(76,175,80,0.08)", border: "1px solid rgba(76,175,80,0.3)",
                borderRadius: 8, paddingLeft: 16, paddingRight: 16, paddingTop: 9, paddingBottom: 9,
              }}
            >
              <span className="font-['Manrope:SemiBold',sans-serif] font-semibold" style={{ fontSize: 11, color: "#2e7d32" }}>
                ✓ Simulate Contractor Approval
              </span>
            </button>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}

// ─── Screen 5: Task Completed ─────────────────────────────────────────────────
function TaskCompletedScreen({ task, onNextTask }: { task: WorkerTask; onNextTask: () => void }) {
  return (
    <div className="absolute inset-0" style={{ background: "#faf9f6" }}>
      <ScreenHeader title="STATUS" onBack={onNextTask} />

      <ScrollArea top={NAV_H}>
        <div
          style={{
            padding: "44px 24px 36px",
            display: "flex", flexDirection: "column", alignItems: "center",
            maxWidth: 384, margin: "0 auto",
          }}
        >
          {/* Animated success icon */}
          <motion.div
            initial={{ scale: 0.55, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22, delay: 0.1 }}
            style={{
              width: 138, height: 138, borderRadius: "50%",
              backgroundColor: "#e8f5e9",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <circle cx="22" cy="22" r="19" fill="#4CAF50" />
              <motion.path
                d="M13 22L19 28L31 15"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.38, ease: "easeOut" }}
              />
            </svg>
          </motion.div>

          {/* Headlines */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.28 }}
            style={{ marginTop: 28, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}
          >
            <h2
              className="font-['Manrope:ExtraBold',sans-serif] font-extrabold"
              style={{ fontSize: 30, color: "#3e2723", letterSpacing: "-0.75px", textAlign: "center", lineHeight: "36px" }}
            >
              Task Completed
            </h2>
            <div
              style={{
                backgroundColor: "#e8f5e9", borderRadius: 9999,
                paddingLeft: 16, paddingRight: 16, paddingTop: 5, paddingBottom: 5,
                display: "flex", alignItems: "center", gap: 5,
              }}
            >
              <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
                <path d="M5 9.5L1.5 6l1.3-1.3 2.2 2.2 5.2-5.2L11.5 3z" fill="#4CAF50" />
              </svg>
              <span className="font-['Manrope:SemiBold',sans-serif] font-semibold" style={{ fontSize: 12, color: "#4CAF50" }}>Approved</span>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.42 }}
            style={{
              marginTop: 28, width: "100%",
              backgroundColor: "#f3f1ed", borderRadius: 16,
              padding: 20, display: "flex", flexDirection: "column", gap: 14,
            }}
          >
            <span className="font-['Manrope:SemiBold',sans-serif] font-semibold" style={{ fontSize: 16, color: "#3e2723" }}>Summary</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { label: "TASK ID", value: task.taskId },
                { label: "ASSIGNED TO", value: task.assignedTo },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{
                    backgroundColor: "#f8f6f2", borderRadius: 14,
                    paddingLeft: 16, paddingRight: 16, paddingTop: 10, paddingBottom: 10,
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                  }}
                >
                  <span className="font-['Manrope:Regular',sans-serif] uppercase" style={{ fontSize: 12, color: "#7a3100", letterSpacing: "0.6px" }}>
                    {row.label}
                  </span>
                  <span className="font-['Manrope:Medium',sans-serif] font-medium" style={{ fontSize: 14, color: "#3e2723" }}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Next Task button — inline below summary, no fixed footer */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.54 }}
            style={{ marginTop: 28, width: "100%" }}
          >
            <button
              onClick={onNextTask}
              className="w-full cursor-pointer active:opacity-80 transition-opacity"
              style={{
                backgroundColor: "#7a3100", borderRadius: 14, height: 52,
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                border: "none", boxShadow: "0 1px 1px rgba(0,0,0,0.05)",
              }}
            >
              <span className="font-['Manrope:Bold',sans-serif] font-bold" style={{ fontSize: 16, color: "#fff" }}>Next Task</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 0L5.8 1.2l4.8 4.8H0v1.7h10.6L5.8 12.5 7 13.7l6.7-6.7z" fill="white" />
              </svg>
            </button>
          </motion.div>
        </div>
      </ScrollArea>
    </div>
  );
}

// ─── Completed Task History data ─────────────────────────────────────────────
const COMPLETED_HISTORY = [
  { id: "ch-1", title: "Pour Foundation Slab",      area: "SECTOR B • GROUND",   taskId: "#TSK-8891", date: "14 May 2026" },
  { id: "ch-2", title: "Install Rebar Framework",   area: "ZONE C • BASEMENT",   taskId: "#TSK-8884", date: "11 May 2026" },
  { id: "ch-3", title: "Waterproof Retaining Wall", area: "PERIMETER • GROUND",  taskId: "#TSK-8876", date: "8 May 2026"  },
  { id: "ch-4", title: "Lay Drainage Pipes",         area: "SECTOR A • GROUND",   taskId: "#TSK-8864", date: "5 May 2026"  },
  { id: "ch-5", title: "Set Column Formwork",        area: "ZONE A • 1ST FLOOR",  taskId: "#TSK-8851", date: "2 May 2026"  },
];

// ─── Screen: Worker Completed Tasks History ───────────────────────────────────
function WorkerCompletedTasksScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="absolute inset-0" style={{ backgroundColor: "#fdfbf7" }}>
      <ScreenHeader title="COMPLETED TASKS" onBack={onBack} />
      <ScrollArea top={NAV_H}>
        <div style={{ padding: "24px 20px 48px" }}>
          {/* Page heading */}
          <div style={{ marginBottom: 24 }}>
            <h1
              className="font-['Manrope:ExtraBold',sans-serif] font-extrabold"
              style={{ fontSize: 28, color: "#3e2723", lineHeight: "36px", letterSpacing: "-0.7px", marginBottom: 6 }}
            >
              Completed Tasks
            </h1>
            <p
              className="font-['Manrope:Medium',sans-serif] font-medium"
              style={{ fontSize: 13, color: "#6d4c41", lineHeight: "20px" }}
            >
              Your personal work history and completed assignments.
            </p>
          </div>

          {/* Summary strip */}
          <div
            style={{
              backgroundColor: "#f5ede7",
              borderRadius: 12,
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
              border: "1px solid #e8ddd6",
            }}
          >
            <span
              className="font-['Manrope:SemiBold',sans-serif] font-semibold uppercase"
              style={{ fontSize: 10, letterSpacing: "1px", color: "#7a3100" }}
            >
              Total Completed
            </span>
            <span
              className="font-['Manrope:ExtraBold',sans-serif] font-extrabold"
              style={{ fontSize: 26, color: "#3e2723", letterSpacing: "-1px" }}
            >
              {COMPLETED_HISTORY.length}
            </span>
          </div>

          {/* Task cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {COMPLETED_HISTORY.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: 12,
                  border: "1px solid #e6ded7",
                  padding: "16px 18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                }}
              >
                {/* Top row: title + status chip */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
                  <span
                    className="font-['Manrope:SemiBold',sans-serif] font-semibold"
                    style={{ fontSize: 15, color: "#3e2723", lineHeight: "22px", flex: 1 }}
                  >
                    {item.title}
                  </span>
                  <div
                    style={{
                      backgroundColor: "#e8f5e9",
                      borderRadius: 6,
                      paddingLeft: 8,
                      paddingRight: 8,
                      paddingTop: 3,
                      paddingBottom: 3,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <span
                      className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
                      style={{ fontSize: 8.5, letterSpacing: "0.5px", color: "#2e7d32" }}
                    >
                      Completed
                    </span>
                  </div>
                </div>

                {/* Area */}
                <span
                  className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
                  style={{ fontSize: 10, letterSpacing: "1.2px", color: "#6d5f54" }}
                >
                  {item.area}
                </span>

                {/* Bottom row: task ID + date */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 8,
                    borderTop: "1px solid #f2ede9",
                  }}
                >
                  <span
                    className="font-['Manrope:Medium',sans-serif] font-medium"
                    style={{ fontSize: 11, color: "#7a3100", letterSpacing: "0.3px" }}
                  >
                    {item.taskId}
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <circle cx="5.5" cy="5.5" r="5" stroke="#9e8a82" />
                      <path d="M5.5 2.5v3.2l2 1.5" stroke="#9e8a82" strokeLinecap="round" />
                    </svg>
                    <span
                      className="font-['Manrope:Regular',sans-serif]"
                      style={{ fontSize: 11, color: "#9e8a82" }}
                    >
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}

// ─── Screen: Worker Settings ──────────────────────────────────────────────────
function WorkerSettingsScreen({ onBack }: { onBack: () => void }) {
  const rows: { label: string; value: string }[] = [
    { label: "Worker Name",     value: "Ramu Kinavar"       },
    { label: "Employee ID",     value: "WK-2024-084"        },
    { label: "Site",            value: "Greenfield Phase 2" },
    { label: "App Version",     value: "SITEFLOW v1.0"      },
    { label: "Language",        value: "English / ಕನ್ನಡ"    },
    { label: "Notifications",   value: "Enabled"            },
  ];

  return (
    <div className="absolute inset-0" style={{ backgroundColor: "#faf8f6" }}>
      <ScreenHeader title="SETTINGS" onBack={onBack} />
      <ScrollArea top={NAV_H}>
        <div style={{ padding: "24px 20px 48px" }}>
          <h1
            className="font-['Manrope:ExtraBold',sans-serif] font-extrabold"
            style={{ fontSize: 28, color: "#3e2723", letterSpacing: "-0.7px", marginBottom: 24 }}
          >
            Settings
          </h1>

          {/* Profile card */}
          <div
            style={{
              background: "linear-gradient(160deg, #f5e8dc 0%, #faf0e8 100%)",
              borderRadius: 16,
              padding: "20px 20px 20px",
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 20,
              border: "1px solid #e8ddd6",
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                backgroundColor: "#e8d8cc",
                border: "2px solid #ddc1b4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                className="font-['Manrope:Bold',sans-serif] font-bold"
                style={{ fontSize: 17, color: "#7a3100" }}
              >
                RK
              </span>
            </div>
            <div>
              <p
                className="font-['Manrope:Bold',sans-serif] font-bold"
                style={{ fontSize: 16, color: "#1a1a1a", lineHeight: "20px", marginBottom: 4 }}
              >
                Ramu Kinavar
              </p>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "#7a3100",
                  borderRadius: 20,
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingTop: 3,
                  paddingBottom: 3,
                }}
              >
                <span
                  className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
                  style={{ fontSize: 9, letterSpacing: "0.9px", color: "#fff" }}
                >
                  WORKER
                </span>
              </div>
            </div>
          </div>

          {/* Settings rows */}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 16,
              border: "1px solid #e6ded7",
              overflow: "hidden",
              boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
            }}
          >
            {rows.map((row, i) => (
              <div
                key={row.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft: 18,
                  paddingRight: 18,
                  paddingTop: 14,
                  paddingBottom: 14,
                  borderBottom: i < rows.length - 1 ? "1px solid #f3ede9" : "none",
                }}
              >
                <span
                  className="font-['Manrope:SemiBold',sans-serif] font-semibold"
                  style={{ fontSize: 13, color: "#3e2723" }}
                >
                  {row.label}
                </span>
                <span
                  className="font-['Manrope:Regular',sans-serif]"
                  style={{ fontSize: 13, color: "#7a6b62" }}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}

// ─── Main WorkerApp ───────────────────────────────────────────────────────────
export function WorkerApp({ onSwitchProfile }: { onSwitchProfile?: (role: string) => void }) {
  const [screen, setScreen] = useState<WorkerScreen>("activeTasks");
  const [activeTaskId, setActiveTaskId] = useState<string>("task-1");
  const [direction, setDirection] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showRolePicker, setShowRolePicker] = useState(false);

  const navigate = (next: WorkerScreen, dir = 1) => {
    setDirection(dir);
    setScreen(next);
  };

  const handleMenuAction = (action: WorkerMenuAction) => {
    if (action === "switchProfile") {
      setShowRolePicker(true);
    } else if (action === "completedTasks") {
      navigate("completedTasksHistory");
    } else if (action === "settings") {
      navigate("settingsScreen");
    }
  };

  const activeTask = TASKS.find((t) => t.id === activeTaskId) ?? TASKS[0];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 30 : -30, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -20 : 20, opacity: 0 }),
  };
  const transition = { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <div className="absolute inset-0" style={{ backgroundColor: "#fdfbf7", overflow: "hidden" }}>
      {/* Scoped webkit scrollbar hiding — targets the scrollable outer div */}
      <style>{`.worker-scroll::-webkit-scrollbar{display:none}`}</style>

      <AnimatePresence custom={direction} mode="wait" initial={false}>
        <motion.div
          key={screen}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
          className="absolute inset-0"
        >
          {screen === "activeTasks" && (
            <ActiveTasksScreen
              onHamburger={() => setDrawerOpen(true)}
              onReviewTask={(id) => { setActiveTaskId(id); navigate("reviewTask"); }}
            />
          )}
          {screen === "reviewTask" && (
            <ReviewTaskScreen
              task={activeTask}
              onStartTask={() => navigate("captureProof")}
              onBack={() => navigate("activeTasks", -1)}
            />
          )}
          {screen === "captureProof" && (
            <CaptureProofScreen
              onSubmit={() => navigate("waitingApproval")}
              onBack={() => navigate("reviewTask", -1)}
            />
          )}
          {screen === "waitingApproval" && (
            <WaitingApprovalScreen
              onBackToTasks={() => navigate("activeTasks", -1)}
              onSimulateApproval={() => navigate("taskCompleted")}
            />
          )}
          {screen === "taskCompleted" && (
            <TaskCompletedScreen
              task={activeTask}
              onNextTask={() => navigate("activeTasks", -1)}
            />
          )}
          {screen === "completedTasksHistory" && (
            <WorkerCompletedTasksScreen
              onBack={() => navigate("activeTasks", -1)}
            />
          )}
          {screen === "settingsScreen" && (
            <WorkerSettingsScreen
              onBack={() => navigate("activeTasks", -1)}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Drawer lives outside the screen stack so it persists across transitions */}
      <WorkerProfileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onAction={handleMenuAction}
      />

      {/* Role picker — slides up over everything, same pattern as other stakeholder apps */}
      <AnimatePresence>
        {showRolePicker && (
          <motion.div
            key="worker-role-picker"
            className="absolute inset-0"
            style={{ zIndex: 90 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] as const }}
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
    </div>
  );
}
