import { useState } from "react";
import imgSiteA from "../../imports/4ApprovalDetailMobile-1/59a9c517fb11ea105e061b3f8e152833fd21db43.png";
import imgSiteB from "../../imports/4ApprovalDetailMobile-1/7145531c5ea9f6711eef9f9b12e4fcaf46e570d1.png";
import imgOfficer from "../../imports/3TaskAssignmentMobile-1/181963f2d49061eccafc8eb373f52a6dd6870927.png";

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

interface CheckItem {
  id: string;
  label: string;
  sublabel: string;
  category: string;
}

const CHECKLIST: CheckItem[] = [
  { id: "ppe_hardhats", label: "Hard Hats Verified", sublabel: "All workers wearing IS 2925 certified helmets", category: "PPE VERIFICATION" },
  { id: "ppe_vests", label: "Safety Vests Present", sublabel: "High-visibility vests worn at all active zones", category: "PPE VERIFICATION" },
  { id: "ppe_boots", label: "Safety Boots Worn", sublabel: "Steel toe boots confirmed for ground crew", category: "PPE VERIFICATION" },
  { id: "barricade_perimeter", label: "Site Perimeter Secured", sublabel: "Barricades and warning tape in place", category: "BARRICADE CHECK" },
  { id: "barricade_signage", label: "Warning Signage Posted", sublabel: "Entry notices and hazard signs installed", category: "BARRICADE CHECK" },
  { id: "equip_scaffold", label: "Scaffolding Inspected", sublabel: "All platforms and clamps load-certified", category: "EQUIPMENT INSPECTION" },
  { id: "equip_tools", label: "Power Tools Checked", sublabel: "Guards fitted, insulation intact", category: "EQUIPMENT INSPECTION" },
  { id: "hazard_clearance", label: "East Terrace Clearance", sublabel: "Area clear of debris before concrete pour", category: "HAZARD NOTES" },
];

function CheckRow({
  item,
  checked,
  onToggle,
  last,
}: {
  item: CheckItem;
  checked: boolean;
  onToggle: () => void;
  last: boolean;
}) {
  return (
    <button
      onClick={onToggle}
      className="w-full flex items-center gap-[14px] cursor-pointer active:bg-[#f9f6f4] transition-colors text-left"
      style={{
        padding: "13px 16px",
        borderBottom: last ? "none" : "1px solid #f0ece9",
      }}
    >
      {/* Checkbox */}
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: 6,
          border: checked ? "none" : "1.5px solid #c4bab4",
          backgroundColor: checked ? "#7a3100" : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "background-color 0.15s ease, border-color 0.15s ease",
        }}
      >
        {checked && (
          <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
            <path d="M1 3.5L4 6.5L10 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>

      {/* Text */}
      <div style={{ flex: 1 }}>
        <p
          className="font-['Manrope:Medium',sans-serif] font-medium"
          style={{
            fontSize: 13,
            color: checked ? "#7a3100" : "#1a1a1a",
            marginBottom: 2,
            textDecoration: checked ? "line-through" : "none",
            transition: "color 0.15s ease",
          }}
        >
          {item.label}
        </p>
        <p
          className="font-['Manrope:Regular',sans-serif]"
          style={{ fontSize: 11, color: checked ? "#b8afa9" : "#6b5e55", lineHeight: "15px" }}
        >
          {item.sublabel}
        </p>
      </div>
    </button>
  );
}

function SectionHeader({ label }: { label: string }) {
  return (
    <p
      className="font-['Manrope:Regular',sans-serif] uppercase"
      style={{
        fontSize: 10,
        letterSpacing: "0.9px",
        color: "#7a3100",
        padding: "10px 16px 6px",
        backgroundColor: "#faf8f6",
        borderBottom: "1px solid #f0ece9",
      }}
    >
      {label}
    </p>
  );
}

export function SafetyAuditPanel({
  onBack,
  onSubmit,
}: {
  onBack: () => void;
  onSubmit: () => void;
}) {
  const initialState = CHECKLIST.reduce((acc, item) => ({ ...acc, [item.id]: false }), {} as Record<string, boolean>);
  const [checked, setChecked] = useState<Record<string, boolean>>(initialState);

  const toggle = (id: string) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  const checkedCount = Object.values(checked).filter(Boolean).length;
  const allChecked = checkedCount === CHECKLIST.length;

  const categories = [...new Set(CHECKLIST.map((i) => i.category))];

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
          SAFETY AUDIT
        </p>

        {/* Meta row */}
        <div className="flex items-center gap-[10px]" style={{ marginBottom: 20 }}>
          <div
            style={{
              backgroundColor: "rgba(198,40,40,0.08)",
              borderRadius: 6,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 4,
              paddingBottom: 4,
            }}
          >
            <span
              className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
              style={{ fontSize: 10, letterSpacing: "0.5px", color: "#c62828" }}
            >
              PRIORITY 01
            </span>
          </div>
          <span
            className="font-['Manrope:Regular',sans-serif]"
            style={{ fontSize: 12, color: "#6b5e55" }}
          >
            East Terrace · Due Today
          </span>
        </div>

        {/* Progress bar */}
        <div
          className="bg-white border border-[#e6e1dc] rounded-[12px]"
          style={{ padding: "12px 16px", marginBottom: 20 }}
        >
          <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
            <p
              className="font-['Manrope:Regular',sans-serif] uppercase"
              style={{ fontSize: 9, letterSpacing: "0.8px", color: "#6b5e55" }}
            >
              CHECKLIST PROGRESS
            </p>
            <p
              className="font-['Manrope:Bold',sans-serif] font-bold"
              style={{ fontSize: 13, color: "#7a3100" }}
            >
              {checkedCount}/{CHECKLIST.length}
            </p>
          </div>
          <div style={{ height: 5, backgroundColor: "#e6e1dc", borderRadius: 3, overflow: "hidden" }}>
            <div
              style={{
                height: "100%",
                width: `${(checkedCount / CHECKLIST.length) * 100}%`,
                backgroundColor: allChecked ? "#3d6b52" : "#7a3100",
                borderRadius: 3,
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>

        {/* Grouped checklist */}
        {categories.map((cat) => {
          const items = CHECKLIST.filter((i) => i.category === cat);
          return (
            <div key={cat} style={{ marginBottom: 16 }}>
              <div className="bg-white border border-[#e6e1dc] rounded-[14px] overflow-hidden">
                <SectionHeader label={cat} />
                {items.map((item, i) => (
                  <CheckRow
                    key={item.id}
                    item={item}
                    checked={checked[item.id]}
                    onToggle={() => toggle(item.id)}
                    last={i === items.length - 1}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {/* Assigned safety officer */}
        <div
          className="bg-white border border-[#e6e1dc] rounded-[14px]"
          style={{ marginBottom: 16, padding: "14px 16px" }}
        >
          <p
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 9, letterSpacing: "0.8px", color: "#6b5e55", marginBottom: 10 }}
          >
            ASSIGNED SAFETY OFFICER
          </p>
          <div className="flex items-center gap-[12px]">
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid #ddc1b4",
                backgroundColor: "#e8d8cc",
                flexShrink: 0,
              }}
            >
              <img
                src={imgOfficer}
                alt="Safety Officer"
                decoding="sync"
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p
                className="font-['Manrope:Medium',sans-serif] font-medium"
                style={{ fontSize: 14, color: "#1a1a1a", marginBottom: 2 }}
              >
                Raju M.
              </p>
              <p
                className="font-['Manrope:Regular',sans-serif] uppercase"
                style={{ fontSize: 9, letterSpacing: "0.6px", color: "#7a3100" }}
              >
                SITE SAFETY SUPERVISOR
              </p>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <p
                className="font-['Manrope:Regular',sans-serif]"
                style={{ fontSize: 11, color: "#b8afa9" }}
              >
                08:47 AM
              </p>
            </div>
          </div>
        </div>

        {/* Upload site photos */}
        <div
          className="bg-white border border-[#e6e1dc] rounded-[14px]"
          style={{ marginBottom: 16, padding: "14px 16px" }}
        >
          <p
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 9, letterSpacing: "0.8px", color: "#6b5e55", marginBottom: 12 }}
          >
            SITE PHOTOS
          </p>
          <div className="flex gap-[10px]">
            <div style={{ flex: 1, height: 80, borderRadius: 10, overflow: "hidden" }}>
              <img src={imgSiteA} alt="Site" className="w-full h-full object-cover pointer-events-none" />
            </div>
            <div style={{ flex: 1, height: 80, borderRadius: 10, overflow: "hidden" }}>
              <img src={imgSiteB} alt="Site" className="w-full h-full object-cover pointer-events-none" />
            </div>
            <div
              className="flex items-center justify-center"
              style={{
                flex: 1,
                height: 80,
                borderRadius: 10,
                backgroundColor: "#f5f3f1",
                border: "1.5px dashed #c4bab4",
                cursor: "pointer",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="#b8afa9" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <p
            className="font-['Manrope:Regular',sans-serif]"
            style={{ fontSize: 11, color: "#b8afa9", marginTop: 8 }}
          >
            Tap + to attach additional site photos
          </p>
        </div>
      </div>

      {/* Sticky submit CTA */}
      <div
        className="sticky bottom-0 left-0 right-0"
        style={{
          padding: "12px 20px 24px",
          backgroundColor: "#fbf9f8",
          borderTop: "1px solid #e6e1dc",
        }}
      >
        {!allChecked && (
          <p
            className="font-['Manrope:Regular',sans-serif] text-center"
            style={{ fontSize: 11, color: "#b8afa9", marginBottom: 8 }}
          >
            {CHECKLIST.length - checkedCount} item{CHECKLIST.length - checkedCount !== 1 ? "s" : ""} remaining
          </p>
        )}
        <button
          onClick={onSubmit}
          className="w-full flex items-center justify-center gap-[8px] cursor-pointer active:opacity-80 transition-opacity"
          style={{
            height: 52,
            backgroundColor: allChecked ? "#3d6b52" : "#7a3100",
            borderRadius: 14,
            transition: "background-color 0.2s ease",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span
            className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
            style={{ fontSize: 13, letterSpacing: "0.6px", color: "white" }}
          >
            SUBMIT AUDIT
          </span>
        </button>
      </div>
    </div>
  );
}
