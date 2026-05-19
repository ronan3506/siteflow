import imgConcrete from "../../imports/2Tasks-1/4ea645fc116eac63e2f3c66d66eb76f4d0a012b9.png";
import imgStructural from "../../imports/2Tasks-1/ca136f8c2e4dfdf09b12dbb1967f19f5ccdc5083.png";
import imgTile from "../../imports/2Tasks-1/d57fc7764a294dadd06d3cb669552a9de986742d.png";
import imgWorkerA from "../../imports/3TaskAssignmentMobile-1/181963f2d49061eccafc8eb373f52a6dd6870927.png";
import imgWorkerB from "../../imports/3TaskAssignmentMobile-1/f4775925dd8ae51fa91df8581e2ff018eeedf1fa.png";
import imgWorkerC from "../../imports/3TaskAssignmentMobile-1/c79072b03053f8d4e1dfff5980541de18329d1f1.png";
import imgProgress1 from "../../imports/4ApprovalDetailMobile-1/59a9c517fb11ea105e061b3f8e152833fd21db43.png";
import imgProgress2 from "../../imports/4ApprovalDetailMobile-1/7145531c5ea9f6711eef9f9b12e4fcaf46e570d1.png";

export type SubtaskDetailId =
  | "concrete_slab"
  | "rebar_placement"
  | "tile_laying"
  | "duct_installation";

interface SubtaskData {
  title: string;
  zone: string;
  heroImage: string;
  date: string;
  time: string;
  workers: { name: string; role: string; img: string }[];
  approvedBy: string;
  notes: string;
  steps: { label: string; time: string }[];
  backLabel: string;
}

const SUBTASKS: Record<SubtaskDetailId, SubtaskData> = {
  concrete_slab: {
    title: "CONCRETE SLAB POUR",
    zone: "STRUCTURAL FRAME • GROUND FLOOR",
    heroImage: imgConcrete,
    date: "OCT 24, 2024",
    time: "10:30 AM",
    workers: [
      { name: "Raju M.", role: "Mason", img: imgWorkerA },
      { name: "Suraj K.", role: "Mason", img: imgWorkerB },
    ],
    approvedBy: "Site Supervisor Arun",
    notes:
      "Concrete slab pour completed on schedule. Mix ratio verified before commencement. Curing compound applied and covered with polythene sheeting. Re-inspection at 24-hour mark confirmed adequate curing.",
    steps: [
      { label: "Shuttering and rebar grid verified", time: "7:30 AM" },
      { label: "Ready-mix concrete delivered to site", time: "9:45 AM" },
      { label: "Pour completed, surface levelled", time: "10:30 AM" },
    ],
    backLabel: "STRUCTURAL FRAME",
  },
  rebar_placement: {
    title: "REBAR PLACEMENT",
    zone: "STRUCTURAL FRAME • GROUND FLOOR",
    heroImage: imgStructural,
    date: "OCT 22, 2024",
    time: "04:00 PM",
    workers: [
      { name: "Arjun P.", role: "Steel Fixer", img: imgWorkerA },
      { name: "Babu R.", role: "Helper", img: imgWorkerC },
    ],
    approvedBy: "Lead Engineer Priya",
    notes:
      "Rebar cage fabricated and placed per structural drawings. Splice lengths and cover blocks confirmed. Inspection by structural engineer completed before shuttering sign-off.",
    steps: [
      { label: "Rebar cut and bent to schedule", time: "8:00 AM" },
      { label: "Grid placed and tied in position", time: "12:30 PM" },
      { label: "Structural engineer inspection passed", time: "04:00 PM" },
    ],
    backLabel: "STRUCTURAL FRAME",
  },
  tile_laying: {
    title: "TILE LAYING – BATHROOM",
    zone: "INTERIOR FINISH • MASTER BEDROOM",
    heroImage: imgTile,
    date: "OCT 19, 2024",
    time: "03:00 PM",
    workers: [{ name: "Suraj K.", role: "Mason", img: imgWorkerB }],
    approvedBy: "Site Supervisor Arun",
    notes:
      "Bathroom wall and floor tiling completed. Adhesive cured for 24 hours before grout application. Joints aligned and consistent. Sealant applied to all corners and wet edges.",
    steps: [
      { label: "Surface prep and waterproofing applied", time: "9:00 AM" },
      { label: "Wall tiles set, spacers placed", time: "11:30 AM" },
      { label: "Floor tiling and grouting completed", time: "03:00 PM" },
    ],
    backLabel: "INTERIOR FINISH",
  },
  duct_installation: {
    title: "DUCT INSTALLATION – L1",
    zone: "HVAC SYSTEMS • GROUND FLOOR LOBBY",
    heroImage: imgConcrete,
    date: "OCT 20, 2024",
    time: "05:30 PM",
    workers: [
      { name: "Raju M.", role: "Mason", img: imgWorkerA },
      { name: "Babu R.", role: "Helper", img: imgWorkerC },
    ],
    approvedBy: "MEP Supervisor Kiran",
    notes:
      "Level 1 supply and return ductwork installed and fastened to structure. All joints sealed with approved mastic. Hangers spaced per SMACNA standards. Pressure test passed at 1.5× design pressure.",
    steps: [
      { label: "Main trunk ducts hoisted and bracketed", time: "9:30 AM" },
      { label: "Branch runs connected and sealed", time: "2:00 PM" },
      { label: "Pressure test passed, handover to MEP", time: "5:30 PM" },
    ],
    backLabel: "HVAC SYSTEMS",
  },
};

function DetailHeader({ label, onBack }: { label: string; onBack: () => void }) {
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
          aria-label="Back"
        >
          <svg width="9" height="15" viewBox="0 0 9.09 15" fill="none">
            <path d="M9.09 1.59L3.18 7.5L9.09 13.41L7.5 15L0 7.5L7.5 0L9.09 1.59Z" fill="#7A3100" />
          </svg>
        </button>
        <span
          className="font-['Manrope:Bold',sans-serif] font-bold uppercase whitespace-nowrap"
          style={{ fontSize: 16, letterSpacing: "0.8px", color: "#7a3100", marginLeft: 16 }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

export default function SubtaskDetailPanel({
  subtaskId,
  onBack,
}: {
  subtaskId: SubtaskDetailId;
  onBack: () => void;
}) {
  const task = SUBTASKS[subtaskId];

  return (
    <div className="relative bg-[#fbf9f8]" style={{ width: 412 }}>
      <DetailHeader label={task.backLabel} onBack={onBack} />

      <div style={{ paddingTop: 72, paddingLeft: 24, paddingRight: 24, paddingBottom: 48 }}>

        {/* Screen label */}
        <p
          className="font-['Manrope:Regular',sans-serif] uppercase"
          style={{ fontSize: 10, letterSpacing: "1.1px", color: "#564239", marginBottom: 6 }}
        >
          SUBTASK LOG
        </p>

        {/* Title */}
        <p
          className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
          style={{
            fontSize: 24,
            letterSpacing: "-0.6px",
            color: "#1a1a1a",
            lineHeight: "28px",
            marginBottom: 4,
          }}
        >
          {task.title}
        </p>

        {/* Zone label */}
        <p
          className="font-['Manrope:Regular',sans-serif] uppercase"
          style={{ fontSize: 11, letterSpacing: "0.6px", color: "#7a3100" }}
        >
          {task.zone}
        </p>

        {/* Hero image */}
        <div
          style={{
            marginTop: 20,
            borderRadius: 16,
            overflow: "hidden",
            height: 200,
            position: "relative",
          }}
        >
          <img
            src={task.heroImage}
            alt={task.title}
            decoding="sync"
            loading="eager"
            className="w-full h-full object-cover pointer-events-none"
          />
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
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#a5d6b7",
              }}
            />
            <span
              className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
              style={{ fontSize: 9, letterSpacing: "0.6px", color: "#ffffff" }}
            >
              COMPLETED
            </span>
          </div>
        </div>

        {/* Meta row */}
        <div className="flex gap-[10px]" style={{ marginTop: 16 }}>
          {[
            { label: "DATE", value: task.date },
            { label: "TIME", value: task.time },
            { label: "DELAY", value: "NO" },
          ].map(({ label, value }) => (
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
                style={{
                  fontSize: 13,
                  color: label === "DELAY" ? "#3d6b52" : "#1a1a1a",
                  lineHeight: "18px",
                }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Approved by */}
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

        {/* Assigned workers */}
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
                    backgroundColor: "#e8d8cc",
                  }}
                >
                  <img
                    src={w.img}
                    alt={w.name}
                    decoding="sync"
                    loading="eager"
                    className="w-full h-full object-cover pointer-events-none"
                  />
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

        {/* Supervisor notes */}
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

        {/* Progress history */}
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
                <div
                  className="flex flex-col items-center"
                  style={{ width: 16, paddingTop: 4, flexShrink: 0 }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#7a3100",
                    }}
                  />
                  {i < task.steps.length - 1 && (
                    <div
                      style={{
                        width: 1,
                        height: 30,
                        backgroundColor: "#ddc1b4",
                        marginTop: 4,
                      }}
                    />
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

        {/* Site photos */}
        <div style={{ marginTop: 20 }}>
          <p
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 10, letterSpacing: "0.8px", color: "#564239", marginBottom: 12 }}
          >
            SITE PHOTOS
          </p>
          <div className="flex gap-[10px]">
            <div style={{ flex: 1, height: 92, borderRadius: 10, overflow: "hidden" }}>
              <img
                src={imgProgress1}
                alt="Site photo 1"
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
            <div style={{ flex: 1, height: 92, borderRadius: 10, overflow: "hidden" }}>
              <img
                src={imgProgress2}
                alt="Site photo 2"
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
