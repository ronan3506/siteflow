import imgWorkerA from "../../imports/3TaskAssignmentMobile-1/181963f2d49061eccafc8eb373f52a6dd6870927.png";
import imgWorkerB from "../../imports/3TaskAssignmentMobile-1/f4775925dd8ae51fa91df8581e2ff018eeedf1fa.png";
import imgWorkerC from "../../imports/3TaskAssignmentMobile-1/c79072b03053f8d4e1dfff5980541de18329d1f1.png";

interface Worker {
  name: string;
  role: string;
  img: string;
  skills: string[];
  tasksCompleted: number;
  status: "active" | "break";
}

const WORKERS: Worker[] = [
  {
    name: "Raju M.",
    role: "Mason",
    img: imgWorkerA,
    skills: ["Concrete Work", "Formwork", "Reinforcement Steel"],
    tasksCompleted: 12,
    status: "active",
  },
  {
    name: "Suraj K.",
    role: "Mason",
    img: imgWorkerB,
    skills: ["Brick Masonry", "Surface Finishing", "Concrete Work"],
    tasksCompleted: 9,
    status: "active",
  },
  {
    name: "Babu R.",
    role: "Helper",
    img: imgWorkerC,
    skills: ["General Labor", "Material Handling", "Site Cleanup"],
    tasksCompleted: 7,
    status: "break",
  },
];

function MenuScreenHeader({ onBack, label }: { onBack: () => void; label: string }) {
  return (
    <div
      className="sticky top-0 left-0 right-0 z-10 flex items-center"
      style={{ height: 56, backgroundColor: "#faf8f6", borderBottom: "1px solid #e6e1dc" }}
    >
      <button
        onClick={onBack}
        className="flex items-center h-full cursor-pointer active:opacity-70 transition-opacity"
        style={{ paddingLeft: 14 }}
      >
        <svg width="9" height="15" viewBox="0 0 9.09 15" fill="none">
          <path d="M9.09 1.59L3.18 7.5L9.09 13.41L7.5 15L0 7.5L7.5 0L9.09 1.59Z" fill="#7A3100" />
        </svg>
        <span
          className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
          style={{ fontSize: 15, letterSpacing: "0.7px", color: "#7a3100", marginLeft: 14 }}
        >
          {label}
        </span>
      </button>
    </div>
  );
}

function SkillPill({ label }: { label: string }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        backgroundColor: "#f7f4f2",
        border: "1px solid #e6e1dc",
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 4,
        paddingBottom: 4,
      }}
    >
      <span
        className="font-['Manrope:Regular',sans-serif]"
        style={{ fontSize: 11, color: "#564239" }}
      >
        {label}
      </span>
    </div>
  );
}

function WorkerCard({ worker }: { worker: Worker }) {
  const isActive = worker.status === "active";
  return (
    <div
      className="bg-white border border-[#e6e1dc] rounded-[14px]"
      style={{ padding: "16px", marginBottom: 12 }}
    >
      {/* Top row: avatar + name/role + status */}
      <div className="flex items-center gap-[14px]" style={{ marginBottom: 14 }}>
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid #ddc1b4",
            flexShrink: 0,
            backgroundColor: "#e8d8cc",
          }}
        >
          <img
            src={worker.img}
            alt={worker.name}
            decoding="sync"
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>

        <div style={{ flex: 1 }}>
          <p
            className="font-['Manrope:Bold',sans-serif] font-bold"
            style={{ fontSize: 15, color: "#1a1a1a", marginBottom: 3 }}
          >
            {worker.name}
          </p>
          <p
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 10, letterSpacing: "0.6px", color: "#7a3100" }}
          >
            {worker.role}
          </p>
        </div>

        {/* Status badge */}
        <div
          style={{
            backgroundColor: isActive ? "rgba(61,107,82,0.10)" : "#f5f2f0",
            borderRadius: 20,
            paddingLeft: 9,
            paddingRight: 9,
            paddingTop: 4,
            paddingBottom: 4,
          }}
        >
          <div className="flex items-center gap-[5px]">
            <div
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                backgroundColor: isActive ? "#3d6b52" : "#b8afa9",
              }}
            />
            <span
              className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
              style={{ fontSize: 8.5, letterSpacing: "0.5px", color: isActive ? "#3d6b52" : "#6b5e55" }}
            >
              {isActive ? "Active" : "Break"}
            </span>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div style={{ marginBottom: 14 }}>
        <p
          className="font-['Manrope:Regular',sans-serif] uppercase"
          style={{ fontSize: 9, letterSpacing: "0.8px", color: "#6b5e55", marginBottom: 8 }}
        >
          SKILLS
        </p>
        <div className="flex flex-wrap gap-[6px]">
          {worker.skills.map((s) => (
            <SkillPill key={s} label={s} />
          ))}
        </div>
      </div>

      {/* Tasks completed stat */}
      <div
        style={{
          backgroundColor: "#faf8f6",
          borderRadius: 10,
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p
          className="font-['Manrope:Regular',sans-serif] uppercase"
          style={{ fontSize: 9, letterSpacing: "0.8px", color: "#6b5e55" }}
        >
          TASKS COMPLETED
        </p>
        <p
          className="font-['Manrope:Bold',sans-serif] font-bold"
          style={{ fontSize: 16, color: "#7a3100", letterSpacing: "-0.3px" }}
        >
          {worker.tasksCompleted}
        </p>
      </div>
    </div>
  );
}

export function WorkerDashboardPanel({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col min-h-full bg-[#fbf9f8]">
      <MenuScreenHeader onBack={onBack} label="MENU" />

      <div style={{ padding: "20px 20px 48px" }}>
        {/* Page header */}
        <p
          className="font-['Manrope:Regular',sans-serif] uppercase"
          style={{ fontSize: 10, letterSpacing: "1.1px", color: "#564239", marginBottom: 4 }}
        >
          CONTRACTOR VIEW
        </p>
        <p
          className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
          style={{ fontSize: 22, letterSpacing: "-0.5px", color: "#1a1a1a", lineHeight: "26px", marginBottom: 4 }}
        >
          WORKER DASHBOARD
        </p>
        <p
          className="font-['Manrope:Regular',sans-serif]"
          style={{ fontSize: 13, color: "#6b5e55", marginBottom: 24 }}
        >
          {WORKERS.length} workers assigned to this project
        </p>

        {/* Worker cards */}
        {WORKERS.map((w) => (
          <WorkerCard key={w.name} worker={w} />
        ))}
      </div>
    </div>
  );
}
