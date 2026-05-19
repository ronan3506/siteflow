import imgBlueprintHero from "../../imports/3ReviewDetailFinalColor/9e03cc0fe5d2dd05269808484174846a4ae64867.png";
import imgHvacRef from "../../imports/2Tasks-1/d57fc7764a294dadd06d3cb669552a9de986742d.png";

interface Document {
  code: string;
  title: string;
  type: "PDF" | "DWG";
  revision: string;
  status: "current" | "draft" | "superseded";
}

const DOCUMENTS: Document[] = [
  { code: "DRG-MEP-03-112", title: "MEP Layout Drawing",     type: "DWG", revision: "Rev 2.4", status: "current" },
  { code: "SPEC-INT-01-004", title: "Interior Specification", type: "PDF", revision: "Rev 1.1", status: "current" },
  { code: "DRG-ELEC-02-087", title: "Electrical Drawing",    type: "DWG", revision: "Rev 1.3", status: "current" },
  { code: "STRUCT-FOUND-001", title: "Foundation Plan",      type: "DWG", revision: "Rev 1.0", status: "current" },
  { code: "ARCH-SITE-005",   title: "Site Layout Plan",      type: "PDF", revision: "Rev 3.0", status: "draft"   },
];

const STATUS_COLORS = {
  current:    { bg: "rgba(61,107,82,0.10)",  text: "#3d6b52",  dot: "#3d6b52"  },
  draft:      { bg: "rgba(234,159,34,0.12)", text: "#b87f00",  dot: "#ea9f22"  },
  superseded: { bg: "#f5f2f0",               text: "#6b5e55",  dot: "#b8afa9"  },
};

const STATUS_LABELS = { current: "CURRENT", draft: "DRAFT", superseded: "SUPERSEDED" };

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

function FileTypeTag({ type }: { type: "PDF" | "DWG" }) {
  const isPdf = type === "PDF";
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        backgroundColor: isPdf ? "rgba(186,26,26,0.08)" : "rgba(122,49,0,0.08)",
        borderRadius: 4,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 2,
        paddingBottom: 2,
      }}
    >
      <span
        className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
        style={{ fontSize: 8.5, letterSpacing: "0.5px", color: isPdf ? "#ba1a1a" : "#7a3100" }}
      >
        {type}
      </span>
    </div>
  );
}

function DocumentRow({ doc }: { doc: Document }) {
  const statusStyle = STATUS_COLORS[doc.status];
  return (
    <div
      className="bg-white border border-[#e6e1dc] rounded-[12px] flex items-center cursor-pointer active:opacity-80 transition-opacity"
      style={{ padding: "13px 14px", marginBottom: 10 }}
    >
      {/* Icon column */}
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 8,
          backgroundColor: "#f7f4f2",
          border: "1px solid #e6e1dc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          marginRight: 13,
        }}
      >
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path d="M9 1H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7L9 1Z" stroke="#7a3100" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 1v6h6M5 11h6M5 14h6M5 8h2" stroke="#7a3100" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="flex items-center gap-[7px]" style={{ marginBottom: 4 }}>
          <p
            className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
            style={{ fontSize: 9, letterSpacing: "0.5px", color: "#7a3100" }}
          >
            {doc.code}
          </p>
          <FileTypeTag type={doc.type} />
        </div>
        <p
          className="font-['Manrope:Regular',sans-serif]"
          style={{ fontSize: 12, color: "#1a1a1a", marginBottom: 5 }}
        >
          {doc.title}
        </p>
        <div className="flex items-center gap-[8px]">
          <span
            className="font-['Manrope:Regular',sans-serif]"
            style={{ fontSize: 10, color: "#b8afa9" }}
          >
            {doc.revision}
          </span>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              backgroundColor: statusStyle.bg,
              borderRadius: 4,
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 2,
              paddingBottom: 2,
            }}
          >
            <div style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: statusStyle.dot }} />
            <span
              className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
              style={{ fontSize: 8, letterSpacing: "0.4px", color: statusStyle.text }}
            >
              {STATUS_LABELS[doc.status]}
            </span>
          </div>
        </div>
      </div>

      {/* Arrow */}
      <div style={{ flexShrink: 0, marginLeft: 8 }}>
        <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
          <path d="M1 1l4 4.5L1 10" stroke="#b8afa9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

export function BlueprintsPanel({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col min-h-full bg-[#fbf9f8]">
      <MenuScreenHeader onBack={onBack} label="MENU" />

      <div style={{ padding: "20px 20px 48px" }}>
        {/* Page header */}
        <p
          className="font-['Manrope:Regular',sans-serif] uppercase"
          style={{ fontSize: 10, letterSpacing: "1.1px", color: "#564239", marginBottom: 4 }}
        >
          ARCHITECT VIEW
        </p>
        <p
          className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
          style={{ fontSize: 22, letterSpacing: "-0.5px", color: "#1a1a1a", lineHeight: "26px", marginBottom: 4 }}
        >
          BLUEPRINTS &amp; DOCUMENTS
        </p>
        <p
          className="font-['Manrope:Regular',sans-serif]"
          style={{ fontSize: 13, color: "#6b5e55", marginBottom: 24 }}
        >
          {DOCUMENTS.length} documents on this project
        </p>

        {/* Blueprint hero preview card */}
        <div
          className="bg-white border border-[#e6e1dc] rounded-[14px] overflow-hidden"
          style={{ marginBottom: 24 }}
        >
          {/* Image area */}
          <div style={{ height: 176, position: "relative", overflow: "hidden" }}>
            <img
              src={imgBlueprintHero}
              alt="AC Layout Drawing"
              decoding="sync"
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(26,10,4,0.65) 0%, rgba(26,10,4,0) 55%)",
              }}
            />
            {/* Active drawing badge */}
            <div
              style={{
                position: "absolute",
                top: 12,
                left: 12,
                backgroundColor: "rgba(122,49,0,0.90)",
                borderRadius: 8,
                padding: "4px 10px",
              }}
            >
              <span
                className="font-['Manrope:SemiBold',sans-serif] font-semibold uppercase"
                style={{ fontSize: 9, letterSpacing: "0.5px", color: "#fff" }}
              >
                ACTIVE DRAWING
              </span>
            </div>
            {/* Drawing title overlay */}
            <div style={{ position: "absolute", bottom: 12, left: 14, right: 14 }}>
              <p
                className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
                style={{ fontSize: 13, color: "#ffffff", letterSpacing: "0.3px", lineHeight: "18px" }}
              >
                AC LAYOUT — DRG-MEP-03-112
              </p>
              <p
                className="font-['Manrope:Regular',sans-serif]"
                style={{ fontSize: 10, color: "rgba(255,255,255,0.75)", marginTop: 2 }}
              >
                MEP Engineering Team · Rev 2.4
              </p>
            </div>
          </div>

          {/* Second reference image */}
          <div
            className="flex items-center gap-[12px]"
            style={{ padding: "12px 14px", borderTop: "1px solid #f2ede9" }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 8,
                overflow: "hidden",
                flexShrink: 0,
                backgroundColor: "#e8d8cc",
              }}
            >
              <img
                src={imgHvacRef}
                alt="HVAC reference"
                decoding="sync"
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
            <div style={{ flex: 1 }}>
              <p
                className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
                style={{ fontSize: 10, color: "#1a1a1a", letterSpacing: "0.3px", marginBottom: 3 }}
              >
                HVAC REVISION REFERENCE
              </p>
              <p
                className="font-['Manrope:Regular',sans-serif]"
                style={{ fontSize: 10, color: "#6b5e55" }}
              >
                DRG-MEP-03-112 · Clash Report #09
              </p>
            </div>
          </div>
        </div>

        {/* Section label */}
        <p
          className="font-['Manrope:Regular',sans-serif] uppercase"
          style={{ fontSize: 9, letterSpacing: "1.2px", color: "#564239", marginBottom: 12 }}
        >
          KEY DOCUMENTS
        </p>

        {/* Document rows */}
        {DOCUMENTS.map((doc) => (
          <DocumentRow key={doc.code} doc={doc} />
        ))}
      </div>
    </div>
  );
}
