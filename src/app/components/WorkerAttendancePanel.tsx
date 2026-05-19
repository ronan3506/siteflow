import { useState } from "react";
import imgWorkerA from "../../imports/3TaskAssignmentMobile-1/181963f2d49061eccafc8eb373f52a6dd6870927.png";
import imgWorkerB from "../../imports/3TaskAssignmentMobile-1/f4775925dd8ae51fa91df8581e2ff018eeedf1fa.png";
import imgWorkerC from "../../imports/3TaskAssignmentMobile-1/c79072b03053f8d4e1dfff5980541de18329d1f1.png";
import imgWorkerD from "../../imports/1TodayBoardHomeScreen-1/40985322c374c2f14a87d1d9009ac4e2a7d166e2.png";
import imgWorkerE from "../../imports/1TodayBoardHomeScreen-1/190b01c8986ecada96d37573100345ba0caa969a.png";

type AttendanceStatus = "present" | "late" | "break" | "absent";

interface WorkerEntry {
  id: string;
  name: string;
  role: string;
  img: string;
  defaultStatus: AttendanceStatus;
}

const WORKERS: WorkerEntry[] = [
  { id: "raju", name: "Raju M.", role: "Mason", img: imgWorkerA, defaultStatus: "present" },
  { id: "suraj", name: "Suraj K.", role: "Mason", img: imgWorkerB, defaultStatus: "present" },
  { id: "babu", name: "Babu R.", role: "Helper", img: imgWorkerC, defaultStatus: "break" },
  { id: "arjun", name: "Arjun P.", role: "Steel Fixer", img: imgWorkerD, defaultStatus: "present" },
  { id: "santosh", name: "Santosh D.", role: "Steel Fixer", img: imgWorkerE, defaultStatus: "late" },
];

const STATUS_CONFIG: Record<AttendanceStatus, { label: string; bg: string; color: string; dot: string }> = {
  present: { label: "PRESENT", bg: "rgba(61,107,82,0.10)", color: "#3d6b52", dot: "#3d6b52" },
  late: { label: "LATE", bg: "rgba(245,166,35,0.12)", color: "#c67c00", dot: "#f5a623" },
  break: { label: "BREAK", bg: "rgba(122,49,0,0.08)", color: "#7a3100", dot: "#7a3100" },
  absent: { label: "ABSENT", bg: "rgba(198,40,40,0.08)", color: "#c62828", dot: "#c62828" },
};

const ALL_STATUSES: AttendanceStatus[] = ["present", "late", "break", "absent"];

function PanelHeader({ onBack }: { onBack: () => void }) {
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
          TODAY'S BOARD
        </span>
      </button>
    </div>
  );
}

function StatusPill({
  status,
  active,
  onSelect,
}: {
  status: AttendanceStatus;
  active: boolean;
  onSelect: () => void;
}) {
  const cfg = STATUS_CONFIG[status];
  return (
    <button
      onClick={onSelect}
      className="cursor-pointer transition-all active:scale-95"
      style={{
        paddingLeft: 9,
        paddingRight: 9,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 20,
        backgroundColor: active ? cfg.bg : "#f5f3f1",
        border: active ? `1.5px solid ${cfg.dot}` : "1.5px solid #e6e1dc",
        transition: "background-color 0.15s ease, border-color 0.15s ease",
      }}
    >
      <div className="flex items-center gap-[5px]">
        <div
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            backgroundColor: active ? cfg.dot : "#c4bab4",
            transition: "background-color 0.15s ease",
          }}
        />
        <span
          className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
          style={{
            fontSize: 8.5,
            letterSpacing: "0.5px",
            color: active ? cfg.color : "#b8afa9",
            transition: "color 0.15s ease",
          }}
        >
          {cfg.label}
        </span>
      </div>
    </button>
  );
}

function WorkerCard({
  worker,
  status,
  onStatusChange,
}: {
  worker: WorkerEntry;
  status: AttendanceStatus;
  onStatusChange: (s: AttendanceStatus) => void;
}) {
  const cfg = STATUS_CONFIG[status];
  return (
    <div
      className="bg-white border border-[#e6e1dc] rounded-[14px]"
      style={{ padding: "14px 16px", marginBottom: 10 }}
    >
      {/* Worker identity row */}
      <div className="flex items-center gap-[12px]" style={{ marginBottom: 12 }}>
        <div
          style={{
            width: 46,
            height: 46,
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
            style={{ fontSize: 14, color: "#1a1a1a", marginBottom: 3 }}
          >
            {worker.name}
          </p>
          <p
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 9, letterSpacing: "0.6px", color: "#7a3100" }}
          >
            {worker.role}
          </p>
        </div>
        {/* Current status badge */}
        <div
          style={{
            backgroundColor: cfg.bg,
            borderRadius: 20,
            paddingLeft: 9,
            paddingRight: 9,
            paddingTop: 4,
            paddingBottom: 4,
          }}
        >
          <div className="flex items-center gap-[5px]">
            <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: cfg.dot }} />
            <span
              className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
              style={{ fontSize: 8.5, letterSpacing: "0.5px", color: cfg.color }}
            >
              {cfg.label}
            </span>
          </div>
        </div>
      </div>

      {/* Status selector */}
      <div className="flex flex-wrap gap-[6px]">
        {ALL_STATUSES.map((s) => (
          <StatusPill
            key={s}
            status={s}
            active={status === s}
            onSelect={() => onStatusChange(s)}
          />
        ))}
      </div>
    </div>
  );
}

export function WorkerAttendancePanel({
  onBack,
  onConfirm,
}: {
  onBack: () => void;
  onConfirm: () => void;
}) {
  const [attendance, setAttendance] = useState<Record<string, AttendanceStatus>>(
    WORKERS.reduce((acc, w) => ({ ...acc, [w.id]: w.defaultStatus }), {} as Record<string, AttendanceStatus>)
  );

  const setStatus = (id: string, status: AttendanceStatus) =>
    setAttendance((prev) => ({ ...prev, [id]: status }));

  const presentCount = Object.values(attendance).filter((s) => s === "present").length;
  const lateCount = Object.values(attendance).filter((s) => s === "late").length;
  const absentCount = Object.values(attendance).filter((s) => s === "absent").length;

  return (
    <div className="flex flex-col min-h-full bg-[#fbf9f8]">
      <PanelHeader onBack={onBack} />

      <div style={{ padding: "20px 20px 100px" }}>
        {/* Page header */}
        <p
          className="font-['Manrope:Regular',sans-serif] uppercase"
          style={{ fontSize: 10, letterSpacing: "1.1px", color: "#564239", marginBottom: 4 }}
        >
          TODAY'S BOARD
        </p>
        <p
          className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
          style={{ fontSize: 22, letterSpacing: "-0.5px", color: "#1a1a1a", lineHeight: "26px", marginBottom: 4 }}
        >
          WORKER ATTENDANCE
        </p>
        <p
          className="font-['Manrope:Regular',sans-serif]"
          style={{ fontSize: 13, color: "#6b5e55", marginBottom: 20 }}
        >
          Morning shift · East Terrace Site
        </p>

        {/* Summary stats */}
        <div className="flex gap-[10px]" style={{ marginBottom: 24 }}>
          {[
            { label: "PRESENT", value: presentCount, color: "#3d6b52", bg: "rgba(61,107,82,0.08)" },
            { label: "LATE", value: lateCount, color: "#c67c00", bg: "rgba(245,166,35,0.08)" },
            { label: "ABSENT", value: absentCount, color: "#c62828", bg: "rgba(198,40,40,0.08)" },
          ].map(({ label, value, color, bg }) => (
            <div
              key={label}
              className="flex-1 rounded-[12px]"
              style={{ padding: "11px 14px", backgroundColor: bg }}
            >
              <p
                className="font-['Manrope:Regular',sans-serif] uppercase"
                style={{ fontSize: 9, letterSpacing: "0.8px", color, marginBottom: 4 }}
              >
                {label}
              </p>
              <p
                className="font-['Manrope:Bold',sans-serif] font-bold"
                style={{ fontSize: 22, color, letterSpacing: "-0.4px" }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Worker cards */}
        {WORKERS.map((w) => (
          <WorkerCard
            key={w.id}
            worker={w}
            status={attendance[w.id]}
            onStatusChange={(s) => setStatus(w.id, s)}
          />
        ))}
      </div>

      {/* Sticky CTA */}
      <div
        className="sticky bottom-0 left-0 right-0"
        style={{
          padding: "12px 20px 24px",
          backgroundColor: "#fbf9f8",
          borderTop: "1px solid #e6e1dc",
        }}
      >
        <button
          onClick={onConfirm}
          className="w-full flex items-center justify-center gap-[8px] cursor-pointer active:opacity-80 transition-opacity"
          style={{ height: 52, backgroundColor: "#7a3100", borderRadius: 14 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span
            className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
            style={{ fontSize: 13, letterSpacing: "0.6px", color: "white" }}
          >
            CONFIRM ATTENDANCE
          </span>
        </button>
      </div>
    </div>
  );
}
