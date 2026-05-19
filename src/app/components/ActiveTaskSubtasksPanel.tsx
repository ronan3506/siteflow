export type ZoneId = "structural" | "interior" | "hvac";
export type SubtaskId = "concrete_slab" | "rebar_placement" | "tile_laying" | "duct_installation";

interface Subtask {
  id: SubtaskId | null;
  name: string;
  status: "completed" | "in_progress" | "pending";
}

interface ZoneData {
  title: string;
  location: string;
  statusLabel: string;
  statusColor: string;
  statusBg: string;
  progress: number;
  subtasks: Subtask[];
}

const ZONES: Record<ZoneId, ZoneData> = {
  structural: {
    title: "STRUCTURAL FRAME",
    location: "GROUND FLOOR",
    statusLabel: "ON SCHEDULE",
    statusColor: "#2e7d32",
    statusBg: "#e8f5e9",
    progress: 85,
    subtasks: [
      { id: "concrete_slab", name: "Concrete Slab Pour", status: "completed" },
      { id: "rebar_placement", name: "Rebar Placement", status: "completed" },
      { id: null, name: "Column Erection", status: "in_progress" },
      { id: null, name: "Beam Installation", status: "pending" },
      { id: null, name: "Slab Formwork", status: "pending" },
    ],
  },
  interior: {
    title: "INTERIOR FINISH",
    location: "MASTER BEDROOM",
    statusLabel: "AWAITING MATERIALS",
    statusColor: "#f5a623",
    statusBg: "#fff3e0",
    progress: 12,
    subtasks: [
      { id: "tile_laying", name: "Tile Laying – Bathroom", status: "completed" },
      { id: null, name: "Drywall Installation", status: "in_progress" },
      { id: null, name: "Paint Preparation", status: "pending" },
      { id: null, name: "Flooring Setup", status: "pending" },
    ],
  },
  hvac: {
    title: "HVAC SYSTEMS",
    location: "GROUND FLOOR LOBBY",
    statusLabel: "WORK STOPPED",
    statusColor: "#c62828",
    statusBg: "#ffebee",
    progress: 44,
    subtasks: [
      { id: "duct_installation", name: "Duct Installation – L1", status: "completed" },
      { id: null, name: "Air Handler Setup", status: "in_progress" },
      { id: null, name: "Final Connections", status: "pending" },
      { id: null, name: "Test & Balance", status: "pending" },
    ],
  },
};

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
          ACTIVE TASKS
        </span>
      </button>
    </div>
  );
}

function StatusIcon({ status }: { status: "completed" | "in_progress" | "pending" }) {
  if (status === "completed") {
    return (
      <div
        className="flex items-center justify-center shrink-0"
        style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "rgba(61,107,82,0.12)" }}
      >
        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
          <path d="M1 4L4.5 7.5L11 1" stroke="#3d6b52" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  if (status === "in_progress") {
    return (
      <div
        className="flex items-center justify-center shrink-0"
        style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "rgba(122,49,0,0.08)" }}
      >
        <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#7a3100" }} />
      </div>
    );
  }
  return (
    <div
      className="flex items-center justify-center shrink-0"
      style={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        backgroundColor: "#f5f3f1",
        border: "1px solid #e6e1dc",
      }}
    >
      <div style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#c4bab4" }} />
    </div>
  );
}

function SubtaskRow({
  subtask,
  onOpen,
  last,
}: {
  subtask: Subtask;
  onOpen: (() => void) | null;
  last: boolean;
}) {
  const isClickable = subtask.status === "completed" && onOpen !== null;

  return (
    <div
      onClick={isClickable ? onOpen : undefined}
      className={isClickable ? "cursor-pointer active:bg-[#f5ede7] transition-colors" : ""}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "14px 16px",
        borderBottom: last ? "none" : "1px solid #f0ece9",
      }}
    >
      <StatusIcon status={subtask.status} />
      <div style={{ flex: 1 }}>
        <p
          className="font-['Manrope:Medium',sans-serif] font-medium"
          style={{
            fontSize: 14,
            color: subtask.status === "pending" ? "#b8afa9" : "#1a1a1a",
            marginBottom: 3,
          }}
        >
          {subtask.name}
        </p>
        <p
          className="font-['Manrope:Regular',sans-serif] uppercase"
          style={{
            fontSize: 9,
            letterSpacing: "0.7px",
            color:
              subtask.status === "completed"
                ? "#3d6b52"
                : subtask.status === "in_progress"
                ? "#7a3100"
                : "#c4bab4",
          }}
        >
          {subtask.status === "completed"
            ? "COMPLETED"
            : subtask.status === "in_progress"
            ? "IN PROGRESS"
            : "PENDING"}
        </p>
      </div>
      {isClickable && (
        <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
          <path d="M1 1l4 4.5L1 10" stroke="#b8afa9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}

export function ActiveTaskSubtasksPanel({
  zoneId,
  onBack,
  onOpenSubtask,
}: {
  zoneId: ZoneId;
  onBack: () => void;
  onOpenSubtask: (id: SubtaskId) => void;
}) {
  const zone = ZONES[zoneId];
  const completedCount = zone.subtasks.filter((s) => s.status === "completed").length;

  return (
    <div className="flex flex-col min-h-full bg-[#fbf9f8]">
      <PanelHeader onBack={onBack} />

      <div style={{ padding: "20px 20px 48px" }}>
        {/* Zone label */}
        <p
          className="font-['Manrope:Regular',sans-serif] uppercase"
          style={{ fontSize: 10, letterSpacing: "1.1px", color: "#564239", marginBottom: 4 }}
        >
          {zone.location}
        </p>

        {/* Zone title */}
        <p
          className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
          style={{
            fontSize: 22,
            letterSpacing: "-0.5px",
            color: "#1a1a1a",
            lineHeight: "26px",
            marginBottom: 12,
          }}
        >
          {zone.title}
        </p>

        {/* Status + progress row */}
        <div className="flex items-center justify-between" style={{ marginBottom: 14 }}>
          <div
            style={{
              backgroundColor: zone.statusBg,
              borderRadius: 6,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 4,
              paddingBottom: 4,
            }}
          >
            <span
              className="font-['Manrope:Bold',sans-serif] font-bold"
              style={{ fontSize: 11, letterSpacing: "0.44px", color: zone.statusColor }}
            >
              {zone.statusLabel}
            </span>
          </div>
          <span
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 11, letterSpacing: "0.55px", color: "#564239" }}
          >
            {zone.progress}% COMPLETE
          </span>
        </div>

        {/* Progress bar */}
        <div
          style={{
            height: 5,
            backgroundColor: "#e6e1dc",
            borderRadius: 3,
            marginBottom: 20,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${zone.progress}%`,
              backgroundColor: "#7a3100",
              borderRadius: 3,
            }}
          />
        </div>

        {/* Subtask count */}
        <p
          className="font-['Manrope:Regular',sans-serif]"
          style={{ fontSize: 13, color: "#6b5e55", marginBottom: 14 }}
        >
          {completedCount} of {zone.subtasks.length} subtasks completed
        </p>

        {/* Subtask list card */}
        <div className="bg-white border border-[#e6e1dc] rounded-[14px] overflow-hidden">
          {zone.subtasks.map((subtask, i) => (
            <SubtaskRow
              key={subtask.name}
              subtask={subtask}
              onOpen={subtask.id ? () => onOpenSubtask(subtask.id!) : null}
              last={i === zone.subtasks.length - 1}
            />
          ))}
        </div>

        {/* Hint */}
        <div
          style={{
            marginTop: 16,
            display: "flex",
            alignItems: "flex-start",
            gap: 8,
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            style={{ flexShrink: 0, marginTop: 1 }}
          >
            <circle cx="12" cy="12" r="10" stroke="#b8afa9" strokeWidth="1.8" />
            <path d="M12 8v4M12 16h.01" stroke="#b8afa9" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <p
            className="font-['Manrope:Regular',sans-serif]"
            style={{ fontSize: 11, color: "#b8afa9", lineHeight: "16px" }}
          >
            Tap a completed subtask to view its full detail log.
          </p>
        </div>
      </div>
    </div>
  );
}
