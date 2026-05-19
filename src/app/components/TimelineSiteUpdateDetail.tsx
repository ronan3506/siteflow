import imgHero from "../../imports/8ProjectTimelineDailyLog-1/f5c465596267617a9e58f5b0cb4aca345375b5e6.png";
import imgPhoto1 from "../../imports/4ApprovalDetailMobile-1/bb7f40408c635757a14beb63beb0669d716b2388.png";
import imgPhoto2 from "../../imports/4ApprovalDetailMobile-1/7145531c5ea9f6711eef9f9b12e4fcaf46e570d1.png";
import imgPhoto3 from "../../imports/5IssuesListUrgentIssuesFinalColor/6a6304f351d8e9b12a162600ef85a762d67bfa15.png";

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

function ProgressBar({ pct }: { pct: number }) {
  return (
    <div>
      <div className="flex justify-between items-center" style={{ marginBottom: 8 }}>
        <p
          className="font-['Manrope:Regular',sans-serif] uppercase"
          style={{ fontSize: 10, letterSpacing: "0.8px", color: "#564239" }}
        >
          OVERALL PROGRESS
        </p>
        <p
          className="font-['Manrope:Bold',sans-serif] font-bold"
          style={{ fontSize: 18, color: "#7a3100", letterSpacing: "-0.3px" }}
        >
          {pct}%
        </p>
      </div>
      <div style={{ width: "100%", height: 6, borderRadius: 3, backgroundColor: "#e6e1dc", overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            borderRadius: 3,
            background: "linear-gradient(90deg, #7a3100 0%, #a34500 100%)",
          }}
        />
      </div>
    </div>
  );
}

function StageRow({ label, status, done }: { label: string; status: string; done: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[10px]">
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: done ? "#3d6b52" : "#ddc1b4",
            flexShrink: 0,
          }}
        />
        <p
          className="font-['Manrope:Regular',sans-serif]"
          style={{ fontSize: 13, color: "#1a1a1a" }}
        >
          {label}
        </p>
      </div>
      <div
        style={{
          backgroundColor: done ? "rgba(61,107,82,0.1)" : "#f0ece9",
          borderRadius: 20,
          paddingLeft: 8,
          paddingRight: 8,
          paddingTop: 3,
          paddingBottom: 3,
        }}
      >
        <p
          className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
          style={{ fontSize: 9, letterSpacing: "0.5px", color: done ? "#3d6b52" : "#6b5e55" }}
        >
          {status}
        </p>
      </div>
    </div>
  );
}

export default function TimelineSiteUpdateDetail({ onBack }: { onBack: () => void }) {
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
          SITE UPDATE
        </p>

        {/* Title */}
        <p
          className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
          style={{ fontSize: 24, letterSpacing: "-0.6px", color: "#1a1a1a", lineHeight: "28px", marginBottom: 4 }}
        >
          FIRST FLOOR
        </p>

        {/* Timestamp */}
        <p
          className="font-['Manrope:Regular',sans-serif] uppercase"
          style={{ fontSize: 11, letterSpacing: "0.6px", color: "#7a3100" }}
        >
          04:30 PM • OCT 24, 2024
        </p>

        {/* Hero image — no overlay */}
        <div
          style={{ marginTop: 20, borderRadius: 16, overflow: "hidden", height: 212 }}
        >
          <img src={imgHero} alt="Site update" className="w-full h-full object-cover pointer-events-none" />
        </div>

        {/* Progress bar card */}
        <div
          className="bg-[#f7f4f2] border border-[#e6e1dc] rounded-[14px]"
          style={{ marginTop: 16, padding: "16px 16px" }}
        >
          <ProgressBar pct={67} />
        </div>

        {/* Stage overview */}
        <div
          className="bg-[#f7f4f2] border border-[#e6e1dc] rounded-[12px]"
          style={{ marginTop: 12, padding: "14px 16px" }}
        >
          <p
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 10, letterSpacing: "0.8px", color: "#564239", marginBottom: 12 }}
          >
            CURRENT WORK STAGE
          </p>
          <div className="flex flex-col gap-[12px]">
            <StageRow label="Foundation & Excavation"  status="Complete"     done={true} />
            <StageRow label="Structural Steel Frame"    status="Complete"     done={true} />
            <StageRow label="Concrete Columns – GF"     status="Complete"     done={true} />
            <StageRow label="Concrete Columns – 1F"     status="In Progress"  done={false} />
            <StageRow label="Slab & Secondary Framing"  status="Pending"      done={false} />
            <StageRow label="MEP Rough-In"              status="Pending"      done={false} />
          </div>
        </div>

        {/* Update notes */}
        <div
          className="bg-[#f7f4f2] border border-[#e6e1dc] rounded-[12px]"
          style={{ marginTop: 12, padding: "14px 16px" }}
        >
          <p
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 10, letterSpacing: "0.8px", color: "#564239", marginBottom: 8 }}
          >
            UPDATE NOTES
          </p>
          <p
            className="font-['Manrope:Regular',sans-serif]"
            style={{ fontSize: 13, color: "#2d241e", lineHeight: "20px" }}
          >
            All column work on the 1st floor has been completed and inspected. Formwork removed, visual inspection passed. Ready for slab pour once 2nd day curing confirmation is received from the structural team.
          </p>
        </div>

        {/* Weekly progress photos */}
        <div style={{ marginTop: 20 }}>
          <p
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 10, letterSpacing: "0.8px", color: "#564239", marginBottom: 12 }}
          >
            PHOTOS SUBMITTED THIS WEEK
          </p>
          <div className="flex gap-[8px]">
            <div style={{ flex: 1, height: 90, borderRadius: 10, overflow: "hidden" }}>
              <img src={imgPhoto1} alt="Progress photo 1" className="w-full h-full object-cover pointer-events-none" />
            </div>
            <div style={{ flex: 1, height: 90, borderRadius: 10, overflow: "hidden" }}>
              <img src={imgPhoto2} alt="Progress photo 2" className="w-full h-full object-cover pointer-events-none" />
            </div>
            <div style={{ flex: 1, height: 90, borderRadius: 10, overflow: "hidden" }}>
              <img src={imgPhoto3} alt="Progress photo 3" className="w-full h-full object-cover pointer-events-none" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
