import imgConcrete from "../../imports/2Tasks-1/4ea645fc116eac63e2f3c66d66eb76f4d0a012b9.png";
import imgStructural from "../../imports/2Tasks-1/ca136f8c2e4dfdf09b12dbb1967f19f5ccdc5083.png";
import imgWorkerA from "../../imports/3TaskAssignmentMobile-1/181963f2d49061eccafc8eb373f52a6dd6870927.png";
import imgWorkerB from "../../imports/3TaskAssignmentMobile-1/f4775925dd8ae51fa91df8581e2ff018eeedf1fa.png";
import imgWorkerC from "../../imports/3TaskAssignmentMobile-1/c79072b03053f8d4e1dfff5980541de18329d1f1.png";
import imgProgress1 from "../../imports/4ApprovalDetailMobile-1/59a9c517fb11ea105e061b3f8e152833fd21db43.png";
import imgProgress2 from "../../imports/4ApprovalDetailMobile-1/7145531c5ea9f6711eef9f9b12e4fcaf46e570d1.png";

export type TimelineTaskId = "concrete" | "structural";

interface TaskData {
  title: string;
  location: string;
  heroImage: string;
  date: string;
  time: string;
  workers: { name: string; role: string; img: string }[];
  approvedBy: string;
  delay: boolean;
  notes: string;
  steps: { label: string; time: string }[];
}

const TASKS: Record<TimelineTaskId, TaskData> = {
  concrete: {
    title: "CONCRETE POURED – 1ST FLOOR",
    location: "1ST FLOOR • STRUCTURAL",
    heroImage: imgConcrete,
    date: "OCT 24, 2024",
    time: "10:30 AM",
    workers: [
      { name: "Raju M.", role: "Mason", img: imgWorkerA },
      { name: "Suraj K.", role: "Mason", img: imgWorkerB },
      { name: "Babu R.", role: "Helper", img: imgWorkerC },
    ],
    approvedBy: "Site Supervisor Arun",
    delay: false,
    notes:
      "Concrete pour completed on schedule. Mix ratio verified by structural engineer before commencement. Curing compound applied and covered. Re-inspection scheduled at 24-hour mark.",
    steps: [
      { label: "Area prepped & shuttering verified", time: "7:00 AM" },
      { label: "Ready-mix concrete delivered on site", time: "9:45 AM" },
      { label: "Pour completed, surface levelled", time: "10:30 AM" },
    ],
  },
  structural: {
    title: "STRUCTURAL FRAME COMPLETE",
    location: "GROUND + 1ST FLOOR • STEEL",
    heroImage: imgStructural,
    date: "OCT 23, 2024",
    time: "02:00 PM",
    workers: [
      { name: "Arjun P.", role: "Steel Fixer", img: imgWorkerA },
      { name: "Santosh D.", role: "Steel Fixer", img: imgWorkerC },
    ],
    approvedBy: "Lead Engineer Priya",
    delay: false,
    notes:
      "Full structural steel frame erected and locked into position. All bolts torqued to specification. Plumb and level checks completed. Ready for secondary framing and MEP rough-in.",
    steps: [
      { label: "Steel delivered and staged on site", time: "7:30 AM" },
      { label: "Primary columns and beams set", time: "10:00 AM" },
      { label: "Frame inspection & sign-off", time: "02:00 PM" },
    ],
  },
};

// ─── Figma-spec detail header ─────────────────────────────────────────────────
function DetailHeader({ onBack }: { onBack: () => void }) {
  return (
    <div
      className="absolute left-0 top-0 w-full"
      style={{ height: 56, backgroundColor: "#faf8f6" }}
    >
      <div
        className="-translate-y-1/2 absolute flex items-center"
        style={{ height: 40, left: 16, right: 16, top: "50%" }}
      >
        <button
          onClick={onBack}
          className="flex items-center justify-center cursor-pointer active:opacity-70 transition-opacity"
          style={{ width: 40, height: 40, borderRadius: "50%", flexShrink: 0 }}
          aria-label="Back to Timeline"
        >
          <svg width="9" height="15" viewBox="0 0 9.09 15" fill="none">
            <path d="M9.09 1.59L3.18 7.5L9.09 13.41L7.5 15L0 7.5L7.5 0L9.09 1.59Z" fill="#7A3100" />
          </svg>
        </button>
        <span
          className="font-['Manrope:Bold',sans-serif] font-bold uppercase whitespace-nowrap"
          style={{ fontSize: 16, letterSpacing: "0.8px", color: "#7a3100", marginLeft: 16 }}
        >
          TIMELINE
        </span>
      </div>
    </div>
  );
}

export default function TimelineTaskDetail({
  taskId,
  onBack,
}: {
  taskId: TimelineTaskId;
  onBack: () => void;
}) {
  const task = TASKS[taskId];

  return (
    <div className="relative bg-[#fbf9f8]" style={{ width: 412 }}>
      <DetailHeader onBack={onBack} />

      {/* ── Content — starts below header ── */}
      <div style={{ paddingTop: 72, paddingLeft: 24, paddingRight: 24, paddingBottom: 48 }}>

        {/* Screen label */}
        <p
          className="font-['Manrope:Regular',sans-serif] uppercase"
          style={{ fontSize: 10, letterSpacing: "1.1px", color: "#564239", marginBottom: 6 }}
        >
          TASK LOG
        </p>

        {/* Title */}
        <p
          className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
          style={{ fontSize: 24, letterSpacing: "-0.6px", color: "#1a1a1a", lineHeight: "28px", marginBottom: 4 }}
        >
          {task.title}
        </p>

        {/* Location label */}
        <p
          className="font-['Manrope:Regular',sans-serif] uppercase"
          style={{ fontSize: 11, letterSpacing: "0.6px", color: "#7a3100" }}
        >
          {task.location}
        </p>

        {/* ── Hero image ── */}
        <div
          style={{ marginTop: 20, borderRadius: 16, overflow: "hidden", height: 200, position: "relative" }}
        >
          <img
            src={task.heroImage}
            alt={task.title}
            className="w-full h-full object-cover pointer-events-none"
          />
          {/* Completed badge */}
          <div
            className="absolute flex items-center gap-[6px]"
            style={{
              bottom: 12,
              left: 12,
              backgroundColor: "rgba(61,107,82,0.90)",
              borderRadius: 20,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 5,
              paddingBottom: 5,
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#a5d6b7" }} />
            <span
              className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
              style={{ fontSize: 9, letterSpacing: "0.6px", color: "#ffffff" }}
            >
              COMPLETED
            </span>
          </div>
        </div>

        {/* ── Meta row: Date / Time / Delay ── */}
        <div className="flex gap-[10px]" style={{ marginTop: 16 }}>
          {[
            { label: "DATE", value: task.date, color: "#1a1a1a" },
            { label: "TIME", value: task.time, color: "#1a1a1a" },
            { label: "DELAY", value: task.delay ? "YES" : "NO", color: task.delay ? "#c62828" : "#3d6b52" },
          ].map(({ label, value, color }) => (
            <div
              key={label}
              className="flex-1 bg-[#f7f4f2] border border-[#e6e1dc] rounded-[12px]"
              style={{ padding: "12px 14px" }}
            >
              <p
                className="font-['Manrope:Regular',sans-serif] uppercase"
                style={{ fontSize: 9, letterSpacing: "0.9px", color: "#6b5e55", marginBottom: 5 }}
              >
                {label}
              </p>
              <p
                className="font-['Manrope:Medium',sans-serif] font-medium"
                style={{ fontSize: 13, color, lineHeight: "18px" }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* ── Approved by ── */}
        <div
          className="bg-[#f7f4f2] border border-[#e6e1dc] rounded-[12px]"
          style={{ marginTop: 12, padding: "13px 16px" }}
        >
          <p
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 9, letterSpacing: "0.9px", color: "#6b5e55", marginBottom: 5 }}
          >
            APPROVED BY
          </p>
          <p
            className="font-['Manrope:Medium',sans-serif] font-medium"
            style={{ fontSize: 13, color: "#1a1a1a" }}
          >
            {task.approvedBy}
          </p>
        </div>

        {/* ── Assigned workers ── */}
        <div style={{ marginTop: 20 }}>
          <p
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 10, letterSpacing: "0.8px", color: "#564239", marginBottom: 14 }}
          >
            ASSIGNED WORKERS
          </p>
          <div className="flex gap-[20px]">
            {task.workers.map((w) => (
              <div key={w.name} className="flex flex-col items-center gap-[7px]">
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2px solid #ddc1b4",
                    flexShrink: 0,
                  }}
                >
                  <img src={w.img} alt={w.name} className="w-full h-full object-cover pointer-events-none" />
                </div>
                <p
                  className="font-['Manrope:Medium',sans-serif] font-medium text-center"
                  style={{ fontSize: 11, color: "#1a1a1a", lineHeight: "15px" }}
                >
                  {w.name}
                </p>
                <p
                  className="font-['Manrope:Regular',sans-serif] text-center"
                  style={{ fontSize: 10, color: "#6b5e55", letterSpacing: "0.2px" }}
                >
                  {w.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Supervisor notes ── */}
        <div
          className="bg-[#f7f4f2] border border-[#e6e1dc] rounded-[12px]"
          style={{ marginTop: 20, padding: "14px 16px" }}
        >
          <p
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 10, letterSpacing: "0.8px", color: "#564239", marginBottom: 8 }}
          >
            SUPERVISOR NOTES
          </p>
          <p
            className="font-['Manrope:Regular',sans-serif]"
            style={{ fontSize: 13, color: "#2d241e", lineHeight: "20px" }}
          >
            {task.notes}
          </p>
        </div>

        {/* ── Progress history ── */}
        <div style={{ marginTop: 20 }}>
          <p
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 10, letterSpacing: "0.8px", color: "#564239", marginBottom: 14 }}
          >
            PROGRESS HISTORY
          </p>
          <div className="flex flex-col">
            {task.steps.map((step, i) => (
              <div key={i} className="flex gap-[14px] items-start">
                {/* Dot + connector line */}
                <div className="flex flex-col items-center" style={{ width: 16, paddingTop: 4, flexShrink: 0 }}>
                  <div
                    style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#7a3100" }}
                  />
                  {i < task.steps.length - 1 && (
                    <div style={{ width: 1, height: 30, backgroundColor: "#ddc1b4", marginTop: 4 }} />
                  )}
                </div>
                <div style={{ paddingBottom: i < task.steps.length - 1 ? 22 : 0 }}>
                  <p
                    className="font-['Manrope:Medium',sans-serif] font-medium"
                    style={{ fontSize: 13, color: "#1a1a1a", lineHeight: "18px" }}
                  >
                    {step.label}
                  </p>
                  <p
                    className="font-['Manrope:Regular',sans-serif]"
                    style={{ fontSize: 11, color: "#6b5e55", marginTop: 3, letterSpacing: "0.3px" }}
                  >
                    {step.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Site photos ── */}
        <div style={{ marginTop: 20 }}>
          <p
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 10, letterSpacing: "0.8px", color: "#564239", marginBottom: 12 }}
          >
            SITE PHOTOS
          </p>
          <div className="flex gap-[10px]">
            <div style={{ flex: 1, height: 92, borderRadius: 10, overflow: "hidden" }}>
              <img src={imgProgress1} alt="Site photo 1" className="w-full h-full object-cover pointer-events-none" />
            </div>
            <div style={{ flex: 1, height: 92, borderRadius: 10, overflow: "hidden" }}>
              <img src={imgProgress2} alt="Site photo 2" className="w-full h-full object-cover pointer-events-none" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
