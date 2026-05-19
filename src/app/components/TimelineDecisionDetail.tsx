import imgHvac from "../../imports/2Tasks-1/d57fc7764a294dadd06d3cb669552a9de986742d.png";
import imgRef1 from "../../imports/4ApprovalDetailMobile-1/266786354298a33b573a5ff16e549f44d6da91bb.png";
import imgRef2 from "../../imports/4ApprovalDetailMobile-1/8211e308a79c82aa65044667c538b43bba82efae.png";

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

function ImpactPill({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div
      className="flex-1 rounded-[12px] border border-[#e6e1dc]"
      style={{ backgroundColor: "#f7f4f2", padding: "12px 14px" }}
    >
      <p
        className="font-['Manrope:Regular',sans-serif] uppercase"
        style={{ fontSize: 9, letterSpacing: "0.9px", color: "#6b5e55", marginBottom: 6 }}
      >
        {label}
      </p>
      <p
        className="font-['Manrope:Bold',sans-serif] font-bold"
        style={{ fontSize: 18, color: accent, letterSpacing: "-0.3px" }}
      >
        {value}
      </p>
    </div>
  );
}

function RefFile({ icon, name, type }: { icon: string; name: string; type: string }) {
  return (
    <div
      className="flex items-center gap-[12px] bg-[#f7f4f2] border border-[#e6e1dc] rounded-[10px]"
      style={{ padding: "12px 14px" }}
    >
      <div
        className="flex items-center justify-center rounded-[8px]"
        style={{ width: 34, height: 34, backgroundColor: "#ede8e4", flexShrink: 0 }}
      >
        <span style={{ fontSize: 14 }}>{icon}</span>
      </div>
      <div>
        <p
          className="font-['Manrope:Medium',sans-serif] font-medium"
          style={{ fontSize: 12, color: "#1a1a1a" }}
        >
          {name}
        </p>
        <p
          className="font-['Manrope:Regular',sans-serif]"
          style={{ fontSize: 10, color: "#6b5e55", marginTop: 2, letterSpacing: "0.3px" }}
        >
          {type}
        </p>
      </div>
    </div>
  );
}

export default function TimelineDecisionDetail({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative bg-[#fbf9f8]" style={{ width: 412 }}>
      <DetailHeader onBack={onBack} />

      {/* Content — starts below header */}
      <div style={{ paddingTop: 72, paddingLeft: 24, paddingRight: 24, paddingBottom: 48 }}>

        {/* Screen label */}
        <p
          className="font-['Manrope:Regular',sans-serif] uppercase"
          style={{ fontSize: 10, letterSpacing: "1.1px", color: "#564239", marginBottom: 6 }}
        >
          DECISION LOG
        </p>

        {/* Title */}
        <p
          className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
          style={{ fontSize: 24, letterSpacing: "-0.6px", color: "#1a1a1a", lineHeight: "28px", marginBottom: 4 }}
        >
          HVAC CHANGE APPROVED
        </p>

        {/* Timestamp */}
        <p
          className="font-['Manrope:Regular',sans-serif] uppercase"
          style={{ fontSize: 11, letterSpacing: "0.6px", color: "#7a3100" }}
        >
          03:10 PM • OCT 24, 2024
        </p>

        {/* Hero image */}
        <div
          style={{ marginTop: 20, borderRadius: 16, overflow: "hidden", height: 186, position: "relative" }}
        >
          <img src={imgHvac} alt="HVAC work" className="w-full h-full object-cover pointer-events-none" />
          <div
            className="absolute flex items-center gap-[6px]"
            style={{
              bottom: 12,
              left: 12,
              backgroundColor: "rgba(122,49,0,0.88)",
              borderRadius: 20,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 5,
              paddingBottom: 5,
            }}
          >
            <span
              className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
              style={{ fontSize: 9, letterSpacing: "0.6px", color: "#ffffff" }}
            >
              DECISION MADE
            </span>
          </div>
        </div>

        {/* Impact pills */}
        <div className="flex gap-[10px]" style={{ marginTop: 16 }}>
          <ImpactPill label="COST IMPACT" value="₹12,450" accent="#7a3100" />
          <ImpactPill label="DELAY IMPACT" value="+4 DAYS" accent="#c62828" />
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
            Project Manager Deepak R.
          </p>
        </div>

        {/* Decision summary */}
        <div
          className="bg-[#f7f4f2] border border-[#e6e1dc] rounded-[12px]"
          style={{ marginTop: 12, padding: "14px 16px" }}
        >
          <p
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 10, letterSpacing: "0.8px", color: "#564239", marginBottom: 8 }}
          >
            DECISION SUMMARY
          </p>
          <p
            className="font-['Manrope:Regular',sans-serif]"
            style={{ fontSize: 13, color: "#2d241e", lineHeight: "20px" }}
          >
            Original ducting layout conflicted with revised beam positions on 2nd floor. Change order approved to reroute HVAC trunk lines via the east corridor. Additional materials and labour accounted for in the cost revision.
          </p>
        </div>

        {/* Site notes */}
        <div
          className="bg-[#f7f4f2] border border-[#e6e1dc] rounded-[12px]"
          style={{ marginTop: 12, padding: "14px 16px" }}
        >
          <p
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 10, letterSpacing: "0.8px", color: "#564239", marginBottom: 8 }}
          >
            SITE NOTES
          </p>
          <p
            className="font-['Manrope:Regular',sans-serif]"
            style={{ fontSize: 13, color: "#2d241e", lineHeight: "20px" }}
          >
            Mechanical subcontractor briefed on revised routing. Updated drawings to be issued by EOD. No structural implications beyond the cost and schedule adjustment.
          </p>
        </div>

        {/* Reference photos */}
        <div style={{ marginTop: 20 }}>
          <p
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 10, letterSpacing: "0.8px", color: "#564239", marginBottom: 12 }}
          >
            REFERENCE PHOTOS
          </p>
          <div className="flex gap-[10px]">
            <div style={{ flex: 1, height: 92, borderRadius: 10, overflow: "hidden" }}>
              <img src={imgRef1} alt="Reference 1" className="w-full h-full object-cover pointer-events-none" />
            </div>
            <div style={{ flex: 1, height: 92, borderRadius: 10, overflow: "hidden" }}>
              <img src={imgRef2} alt="Reference 2" className="w-full h-full object-cover pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Reference files */}
        <div style={{ marginTop: 20 }}>
          <p
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 10, letterSpacing: "0.8px", color: "#564239", marginBottom: 12 }}
          >
            REFERENCE FILES
          </p>
          <div className="flex flex-col gap-[8px]">
            <RefFile icon="📐" name="HVAC-Revised-Layout-v2.dwg" type="AutoCAD Drawing" />
            <RefFile icon="📄" name="Change-Order-CO-047.pdf" type="PDF Document" />
          </div>
        </div>

      </div>
    </div>
  );
}
