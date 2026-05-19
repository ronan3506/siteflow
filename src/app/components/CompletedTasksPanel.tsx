import imgConcrete from "../../imports/2Tasks-1/4ea645fc116eac63e2f3c66d66eb76f4d0a012b9.png";
import imgStructural from "../../imports/2Tasks-1/ca136f8c2e4dfdf09b12dbb1967f19f5ccdc5083.png";
import imgHvac from "../../imports/2Tasks-1/d57fc7764a294dadd06d3cb669552a9de986742d.png";

type OpenableTaskId = "concrete" | "structural";

interface CompletedTask {
  id: string;
  title: string;
  location: string;
  date: string;
  time: string;
  approvedBy: string;
  img: string;
  clickable: boolean;
}

const TASKS: CompletedTask[] = [
  {
    id: "concrete",
    title: "CONCRETE POURED – 1ST FLOOR",
    location: "1ST FLOOR · STRUCTURAL",
    date: "OCT 24, 2024",
    time: "10:30 AM",
    approvedBy: "Site Supervisor Arun",
    img: imgConcrete,
    clickable: true,
  },
  {
    id: "structural",
    title: "STRUCTURAL FRAME COMPLETE",
    location: "GROUND + 1ST FLOOR · STEEL",
    date: "OCT 23, 2024",
    time: "02:00 PM",
    approvedBy: "Lead Engineer Priya",
    img: imgStructural,
    clickable: true,
  },
  {
    id: "hvac",
    title: "HVAC ROUGH-IN – GROUND FLOOR",
    location: "GROUND FLOOR · MEP",
    date: "OCT 20, 2024",
    time: "04:00 PM",
    approvedBy: "Project Manager Deepak R.",
    img: imgHvac,
    clickable: false,
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

function TaskCard({
  task,
  onOpen,
}: {
  task: CompletedTask;
  onOpen?: () => void;
}) {
  return (
    <div
      onClick={task.clickable ? onOpen : undefined}
      className={`bg-white border border-[#e6e1dc] rounded-[14px] flex gap-[14px] ${task.clickable ? "cursor-pointer active:opacity-80" : ""}`}
      style={{ padding: "14px", marginBottom: 12, transition: "opacity 0.15s" }}
    >
      {/* Thumbnail */}
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: 10,
          overflow: "hidden",
          flexShrink: 0,
          backgroundColor: "#e8d8cc",
        }}
      >
        <img
          src={task.img}
          alt={task.title}
          decoding="sync"
          loading="eager"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          className="font-['Manrope:Regular',sans-serif] uppercase"
          style={{ fontSize: 9, letterSpacing: "0.6px", color: "#7a3100", marginBottom: 3 }}
        >
          {task.location}
        </p>
        <p
          className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
          style={{ fontSize: 13, color: "#1a1a1a", lineHeight: "17px", marginBottom: 8 }}
        >
          {task.title}
        </p>

        {/* Date + time row */}
        <div className="flex gap-[10px]" style={{ marginBottom: 6 }}>
          <div
            style={{
              backgroundColor: "#f7f4f2",
              borderRadius: 6,
              paddingLeft: 7,
              paddingRight: 7,
              paddingTop: 3,
              paddingBottom: 3,
            }}
          >
            <span
              className="font-['Manrope:Regular',sans-serif]"
              style={{ fontSize: 10, color: "#564239" }}
            >
              {task.date}
            </span>
          </div>
          <div
            style={{
              backgroundColor: "#f7f4f2",
              borderRadius: 6,
              paddingLeft: 7,
              paddingRight: 7,
              paddingTop: 3,
              paddingBottom: 3,
            }}
          >
            <span
              className="font-['Manrope:Regular',sans-serif]"
              style={{ fontSize: 10, color: "#564239" }}
            >
              {task.time}
            </span>
          </div>
        </div>

        {/* Approved by */}
        <p
          className="font-['Manrope:Regular',sans-serif]"
          style={{ fontSize: 10, color: "#6b5e55" }}
        >
          <span style={{ color: "#b8afa9" }}>Approved: </span>{task.approvedBy}
        </p>
      </div>

      {/* Arrow (only for clickable) */}
      {task.clickable && (
        <div className="flex items-center" style={{ flexShrink: 0, marginLeft: 2 }}>
          <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
            <path d="M1 1l4 4.5L1 10" stroke="#b8afa9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </div>
  );
}

export function CompletedTasksPanel({
  onBack,
  onOpenTask,
}: {
  onBack: () => void;
  onOpenTask: (id: OpenableTaskId) => void;
}) {
  return (
    <div className="flex flex-col min-h-full bg-[#fbf9f8]">
      <MenuScreenHeader onBack={onBack} label="MENU" />

      <div style={{ padding: "20px 20px 48px" }}>
        {/* Page header */}
        <p
          className="font-['Manrope:Regular',sans-serif] uppercase"
          style={{ fontSize: 10, letterSpacing: "1.1px", color: "#564239", marginBottom: 4 }}
        >
          TASK LOG
        </p>
        <p
          className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
          style={{ fontSize: 22, letterSpacing: "-0.5px", color: "#1a1a1a", lineHeight: "26px", marginBottom: 4 }}
        >
          COMPLETED TASKS
        </p>
        <p
          className="font-['Manrope:Regular',sans-serif]"
          style={{ fontSize: 13, color: "#6b5e55", marginBottom: 24 }}
        >
          {TASKS.length} tasks completed this month
        </p>

        {/* Completed badge row */}
        <div
          className="flex items-center gap-[8px]"
          style={{
            backgroundColor: "rgba(61,107,82,0.08)",
            borderRadius: 10,
            padding: "10px 14px",
            marginBottom: 20,
          }}
        >
          <div style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#3d6b52" }} />
          <p
            className="font-['Manrope:Medium',sans-serif] font-medium"
            style={{ fontSize: 12, color: "#3d6b52" }}
          >
            All tasks approved and logged
          </p>
        </div>

        {/* Task cards */}
        {TASKS.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onOpen={task.clickable ? () => onOpenTask(task.id as OpenableTaskId) : undefined}
          />
        ))}
      </div>
    </div>
  );
}
