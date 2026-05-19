import imgObs1 from "../../imports/5IssuesListUrgentIssuesFinalColor/6a6304f351d8e9b12a162600ef85a762d67bfa15.png";
import imgObs2 from "../../imports/5IssuesListUrgentIssuesFinalColor/d6698214b01f936b8b0315eea3a42a14e2174325.png";

// ────────────────────────────────────────────────────────────────────────────
// Issue Card Component — NEW richer layout with:
// - Left severity indicator bar
// - Title + location/status chips
// - VIEW button
// - Divider
// - Impact + Response Due metadata
// ────────────────────────────────────────────────────────────────────────────
interface IssueCardProps {
  severityColor: string; // e.g., "#f9b74a" or "#b23b3b"
  title: string;
  locationLabel: string;
  statusLabel: string;
  statusBg: string;
  statusTextColor: string;
  impact: string;
  responseDue: string;
  onView: () => void;
}

function IssueCard({
  severityColor,
  title,
  locationLabel,
  statusLabel,
  statusBg,
  statusTextColor,
  impact,
  responseDue,
  onView,
}: IssueCardProps) {
  return (
    <div className="relative bg-[#fdfcfb] border border-[#e6e1dc] border-solid h-[158px] overflow-clip rounded-[16px] shadow-[0px_0px_4.7px_0px_rgba(0,0,0,0.25)] w-[342px]">
      {/* Left severity bar */}
      <div
        className="absolute h-[170px] left-0 top-0 w-[6px]"
        style={{ backgroundColor: severityColor }}
      />

      {/* Top section: title, chips, VIEW button */}
      <div className="absolute h-[51.021px] left-[23px] top-[16px] w-[294px]">
        <div className="absolute h-[51.021px] left-0 top-0 w-[182.73px]">
          {/* Title */}
          <div className="absolute h-[28px] left-0 top-0">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#1a1a1a] text-[18px] top-[14px] tracking-[-0.45px] whitespace-nowrap">
              <p className="leading-[28px]">{title}</p>
            </div>
          </div>

          {/* Location + Status chips */}
          <div className="absolute h-[19.021px] left-0 top-[32px] flex gap-[12px]">
            {/* Location chip */}
            <div className="relative bg-[#f7f4f2] h-[19px] rounded-[12px] px-[8px] flex items-center">
              <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] text-[#6b5e55] text-[10px] tracking-[-0.25px] whitespace-nowrap">
                <p className="leading-[15px]">{locationLabel}</p>
              </div>
            </div>

            {/* Status chip */}
            <div
              className="relative h-[19.021px] rounded-[4.684px] px-[7.92px] flex items-center"
              style={{ backgroundColor: statusBg }}
            >
              <p
                className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] text-[8.587px] tracking-[0.3435px] whitespace-nowrap"
                style={{ color: statusTextColor }}
              >
                {statusLabel}
              </p>
            </div>
          </div>
        </div>

        {/* VIEW button */}
        <button
          onClick={onView}
          className="absolute bg-[#7a3100] h-[31px] right-0 top-0 rounded-[12px] w-[61.28px] cursor-pointer hover:bg-[#8a4100] transition-colors active:scale-95"
        >
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-[50%] text-[#fdfcfb] text-[10px] text-center top-[50%] tracking-[1px] uppercase whitespace-nowrap">
            <p className="leading-[15px]">VIEW</p>
          </div>
        </button>
      </div>

      {/* Horizontal divider */}
      <div className="absolute bg-[#e5e0da] h-px left-[23px] right-[23px] top-[89px]" />

      {/* Bottom section: Impact + Response Due */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-[23px] text-[#7d6c5c] text-[0px] top-[122px] tracking-[1.1px] w-[110px]">
        <p className="leading-[17px] mb-0 text-[10px]">Impact</p>
        <p className="leading-[17px] text-[10px] text-black">{impact}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-[189px] text-[#7d6c5c] text-[0px] top-[122px] tracking-[1.1px] w-[111px]">
        <p className="leading-[17px] mb-0 text-[10px]">Response Due</p>
        <p className="leading-[17px] text-[10px] text-black">{responseDue}</p>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Main Issues List Screen with NEW richer card layout
// ────────────────────────────────────────────────────────────────────────────
export default function IssuesListRich({ onViewColumnIssue }: { onViewColumnIssue: () => void }) {
  return (
    <div
      className="relative size-full"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(253, 252, 251) 0%, rgb(253, 252, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
      }}
    >
      {/* Header Section with Title and Subtitle */}
      <div className="absolute h-[90px] left-[35px] top-[80px] w-[342px]">
        {/* Title */}
        <div className="absolute h-[40px] left-0 top-0 w-[342px]">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#1a1a1a] text-[28px] top-[20px] tracking-[-0.9px] uppercase whitespace-nowrap">
            <p className="leading-[40px]">URGENT ISSUES</p>
          </div>
        </div>

        {/* Subtitle */}
        <div className="absolute h-[32px] left-0 top-[50px] w-[342px]">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#6b5e55] text-[16px] top-[16px] tracking-[-0.4px] whitespace-nowrap">
            <p className="leading-[24px]">Problems on site needing review.</p>
          </div>
        </div>
      </div>

      {/* Stats Bento */}
      <div className="absolute gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__109px_minmax(0,1fr)] h-[68px] left-[35px] top-[185px] w-[342px]">
        {/* Active High stat */}
        <div className="col-[1/span_2] h-[68px] relative row-1 shrink-0 w-[342px]">
          <div className="absolute bg-[#f7f4f2] border border-[#e6e1dc] border-solid h-[68px] left-0 rounded-[16px] top-0 w-[163px]">
            <div className="absolute h-[15px] left-[24px] top-[11px] w-[113px]">
              <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#6b5e55] text-[10px] top-[7.5px] tracking-[1px] uppercase whitespace-nowrap">
                <p className="leading-[15px]">ACTIVE HIGH</p>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-[24px] text-[#1a1a1a] text-[25px] top-[40px] tracking-[-1.8px] whitespace-nowrap">
              <p className="leading-[40px]">03</p>
            </div>
          </div>

          {/* Status stat */}
          <div className="absolute bg-[#f7f4f2] border border-[#e6e1dc] border-solid h-[68px] left-[179px] rounded-[16px] top-0 w-[163px]">
            <div className="absolute h-[19px] left-[24px] top-[16px] w-[113px]">
              <div className="absolute h-[15px] left-0 top-0 w-[113px]">
                <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#6b5e55] text-[10px] top-[7.5px] tracking-[1px] uppercase whitespace-nowrap">
                  <p className="leading-[15px]">STATUS</p>
                </div>
              </div>
            </div>
            <div className="absolute h-[16px] left-[24px] top-[34px] w-[113px]">
              <div className="absolute bg-[#b23b3b] left-0 rounded-[9999px] size-[10px] top-[3px]" />
              <div className="absolute h-[16px] left-[18px] top-0 w-[53.88px]">
                <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#b23b3b] text-[12px] top-[8px] uppercase whitespace-nowrap">
                  <p className="leading-[16px]">CRITICAL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Issues List — THREE CARDS with NEW richer layout */}
      <div className="absolute h-[496px] left-[35px] top-[270px] w-[342px]">
        {/* Card 1: Column Not Straight (YELLOW severity) */}
        <div className="absolute top-0 left-0">
          <IssueCard
            severityColor="#f9b74a"
            title="Column Not Straight"
            locationLabel="GROUND FLOOR"
            statusLabel="WORK PAUSED"
            statusBg="#fff3e0"
            statusTextColor="#f5a623"
            impact="Structural Safety"
            responseDue="1h 30m"
            onView={onViewColumnIssue}
          />
        </div>

        {/* Card 2: Water leak (RED severity) */}
        <div className="absolute top-[169px] left-0">
          <IssueCard
            severityColor="#b23b3b"
            title="Water leak"
            locationLabel="FIRST FLOOR"
            statusLabel="URGENT REVIEW"
            statusBg="#ffebee"
            statusTextColor="#c62828"
            impact="Water Damage"
            responseDue="4h"
            onView={() => {}}
          />
        </div>

        {/* Card 3: Safety railing damaged (RED severity) */}
        <div className="absolute top-[338px] left-0">
          <IssueCard
            severityColor="#b23b3b"
            title="Safety railing damaged"
            locationLabel="TERRENCE"
            statusLabel="URGENT REVIEW"
            statusBg="#ffebee"
            statusTextColor="#c62828"
            impact="Personnel Safety"
            responseDue="30m"
            onView={() => {}}
          />
        </div>
      </div>

      {/* Observation Log heading */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-[35px] text-[#4f443d] text-[16px] top-[790px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[24px]">Observation Log</p>
      </div>

      {/* Observation Log Card 1 */}
      <div className="absolute bg-[#f7f4f2] border border-[#e6e1dc] border-solid drop-shadow-[0px_0px_2.35px_rgba(0,0,0,0.25)] h-[313px] left-[35px] rounded-[16px] top-[820px] w-[342px]">
        <div className="absolute h-[192px] left-[24px] overflow-clip rounded-[12px] top-[32px] w-[292px]">
          <div className="absolute h-[192px] left-0 opacity-80 top-0 w-[292px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt="Observation photo - Main atrium structural integrity"
                className="absolute h-[152.08%] left-0 max-w-none top-[-26.04%] w-full"
                src={imgObs2}
              />
            </div>
          </div>
        </div>
        <div className="absolute h-[39px] left-[24px] top-[248px] w-[292px]">
          <div className="absolute h-[39px] left-0 top-0 w-[251px]">
            <div className="absolute h-[15px] left-0 top-0 w-[251px]">
              <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#6b5e55] text-[10px] top-[7.5px] tracking-[1px] uppercase whitespace-nowrap">
                <p className="leading-[15px]">OBSERVATION LOG</p>
              </div>
            </div>
            <div className="absolute h-[20px] left-0 top-[19px] w-[251px]">
              <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#2d241e] text-[14px] top-[10px] tracking-[-0.35px] uppercase whitespace-nowrap">
                <p className="leading-[20px]">MAIN ATRIUM STRUCTURAL INTEGRITY</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Observation Log Card 2 */}
      <div className="absolute bg-[#f7f4f2] border border-[#e6e1dc] border-solid drop-shadow-[0px_0px_2.35px_rgba(0,0,0,0.25)] h-[313px] left-[35px] rounded-[16px] top-[1148px] w-[342px]">
        <div className="absolute h-[192px] left-[24px] overflow-clip rounded-[12px] top-[32px] w-[292px]">
          <div className="absolute h-[192px] left-0 opacity-80 top-0 w-[292px]">
            <img
              alt="Observation photo - Structural demolition"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgObs1}
            />
          </div>
        </div>
        <div className="absolute h-[39px] left-[24px] top-[248px] w-[292px]">
          <div className="absolute h-[39px] left-0 top-0 w-[251px]">
            <div className="absolute h-[15px] left-0 top-0 w-[251px]">
              <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#6b5e55] text-[10px] top-[7.5px] tracking-[1px] uppercase whitespace-nowrap">
                <p className="leading-[15px]">OBSERVATION LOG</p>
              </div>
            </div>
            <div className="absolute h-[20px] left-0 top-[19px] w-[251px]">
              <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#2d241e] text-[14px] top-[10px] tracking-[-0.35px] uppercase whitespace-nowrap">
                <p className="leading-[20px]">Structural demolition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
