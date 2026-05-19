import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../imports/8ProjectTimelineDailyLog-1/svg-59cqx3vezz";
import imgConstructionSite from "../../imports/8ProjectTimelineDailyLog-1/f5c465596267617a9e58f5b0cb4aca345375b5e6.png";

type TimeFilter = "today" | "week" | "month";
type ActivityFilter = "all" | "issues" | "decisions";
export type TimelineTaskId = "concrete" | "structural";

interface TimelineEntry {
  id: string;
  type: "completed" | "issue" | "resolved" | "decision" | "siteUpdate" | "clearance";
  day: "today" | "oct23";
  time: string;
  typeLabel: string;
  title: string;
  costDelay?: string;
  clickable: boolean;
}

const ALL_ENTRIES: TimelineEntry[] = [
  {
    id: "concrete", type: "completed", day: "today",
    time: "10:30 AM", typeLabel: "COMPLETED WORK",
    title: "CONCRETE POURED - 1ST FLOOR", clickable: true,
  },
  {
    id: "column", type: "issue", day: "today",
    time: "11:15 AM", typeLabel: "ISSUE DETECTED",
    title: "COLUMN NOT ALIGNED", clickable: true,
  },
  {
    id: "approved", type: "resolved", day: "today",
    time: "02:40 PM", typeLabel: "ISSUE RESOLVED",
    title: "APPROVED", clickable: false,
  },
  {
    id: "hvac", type: "decision", day: "today",
    time: "03:10 PM", typeLabel: "DECISION MADE",
    title: "HVAC CHANGE APPROVED", costDelay: "₹12,450 • +4 DAYS", clickable: true,
  },
  {
    id: "siteUpdate", type: "siteUpdate", day: "today",
    time: "04:30 PM", typeLabel: "SITE UPDATE",
    title: "COLUMN WORK COMPLETED - 1ST FLOOR", clickable: true,
  },
  {
    id: "structural", type: "completed", day: "oct23",
    time: "02:00 PM", typeLabel: "COMPLETED WORK",
    title: "STRUCTURAL FRAME COMPLETE", clickable: true,
  },
  {
    id: "excavation", type: "clearance", day: "oct23",
    time: "04:00 PM", typeLabel: "SITE CLEARANCE",
    title: "EXCAVATION COMPLETE - READY FOR CONCRETE", clickable: false,
  },
];

// ─── Icon helpers ──────────────────────────────────────────────────────────────

function CompletedIcon() {
  return (
    <div className="absolute bg-[#e9e8e7] left-[16px] rounded-[6px] size-[40px] top-[16px]">
      <div className="absolute h-[15.021px] left-[12.28px] top-[12.49px] w-[15.438px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4375 15.0208">
          <path d={svgPaths.p129c4ba0} fill="#615E5B" />
        </svg>
      </div>
    </div>
  );
}

function IssueIcon() {
  return (
    <div className="absolute bg-[rgba(186,26,26,0.1)] left-[16px] rounded-[6px] size-[40px] top-[16px]">
      <div className="absolute h-[15.833px] left-[10.83px] top-[12.08px] w-[18.333px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 15.8333">
          <path d={svgPaths.p1de06280} fill="#C62828" />
        </svg>
      </div>
    </div>
  );
}

function ResolvedIcon() {
  return (
    <div className="absolute bg-[#e9e8e7] left-[16px] rounded-[6px] size-[40px] top-[16px]">
      <div className="absolute left-[11.67px] size-[16.667px] top-[11.67px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
          <path d={svgPaths.p6e98980} fill="#615E5B" />
        </svg>
      </div>
    </div>
  );
}

function DecisionIcon() {
  return (
    <div className="absolute bg-[#e9e8e7] left-[16px] rounded-[6px] size-[40px] top-[16px]">
      <div className="absolute h-[15.833px] left-[12.5px] top-[12.08px] w-[15px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15.8333">
          <path d={svgPaths.p1060bc80} fill="#7A3100" />
        </svg>
      </div>
    </div>
  );
}

function ClearanceIcon() {
  return (
    <div className="absolute bg-[#e9e8e7] left-[16px] rounded-[6px] size-[40px] top-[25px]">
      <div className="absolute h-[15.875px] left-[12.5px] top-[12.06px] w-[15px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15.875">
          <path d={svgPaths.p387f4100} fill="#615E5B" />
        </svg>
      </div>
    </div>
  );
}

// ─── Entry card components ─────────────────────────────────────────────────────

function EntryCompleted({ entry, onClick }: { entry: TimelineEntry; onClick?: () => void }) {
  return (
    <div
      className="relative bg-[#fbf9f8] border border-[#ddc1b4] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[74px] rounded-[12px] w-[358px]"
      style={{ cursor: onClick ? "pointer" : "default" }}
      onClick={onClick}
    >
      <CompletedIcon />
      <div className="absolute h-[39px] left-[72px] top-[16px] w-[268px]">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#564239] text-[10px] top-[7.5px] tracking-[0.5px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">{entry.time} • {entry.typeLabel}</p>
        </div>
        <div className="absolute h-[20px] left-0 top-[19px] w-[268px]">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#1a1a1a] text-[16px] top-[10px] uppercase whitespace-nowrap">
            <p className="leading-[20px]">{entry.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EntryIssue({ entry, onClick }: { entry: TimelineEntry; onClick?: () => void }) {
  return (
    <div
      className="relative bg-[#fbf9f8] border-[#ddc1b4] border-b border-r border-solid border-t drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[104px] rounded-[12px] w-[358px]"
      style={{ borderLeftWidth: 4, borderLeftColor: "#c62828", cursor: "pointer" }}
      onClick={onClick}
    >
      <IssueIcon />
      {/* Text content — flow layout to accommodate pill */}
      <div className="absolute left-[72px] right-[12px] top-[14px]">
        <p className="font-['Manrope:Regular',sans-serif] font-normal text-[#c62828] text-[10px] tracking-[0.5px] uppercase leading-[15px] whitespace-nowrap">
          {entry.time} • {entry.typeLabel}
        </p>
        <p className="font-['Manrope:Regular',sans-serif] font-normal text-[#1a1a1a] text-[16px] uppercase leading-[20px] mt-[3px] whitespace-nowrap">
          {entry.title}
        </p>
        {/* WORK PAUSED status pill — matches IssuesListRich chip system */}
        <div
          className="mt-[6px] inline-flex items-center bg-[#ffebee] rounded-[4.988px]"
          style={{ height: 21, paddingLeft: 7, paddingRight: 7 }}
        >
          <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#c62828] leading-[normal] tracking-[0.3658px] uppercase whitespace-nowrap" style={{ fontSize: 9.145 }}>
            WORK PAUSED
          </span>
        </div>
      </div>
    </div>
  );
}

function EntryResolved({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="relative bg-[#fbf9f8] border border-[#ddc1b4] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[74px] rounded-[12px] w-[358px]">
      <ResolvedIcon />
      <div className="absolute h-[39px] left-[72px] top-[16px] w-[268px]">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#564239] text-[10px] top-[7.5px] tracking-[0.5px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">{entry.time} • {entry.typeLabel}</p>
        </div>
        <div className="absolute h-[20px] left-0 top-[19px] w-[268px]">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#1a1a1a] text-[16px] top-[10px] uppercase whitespace-nowrap">
            <p className="leading-[20px]">{entry.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EntryDecision({ entry, onClick }: { entry: TimelineEntry; onClick?: () => void }) {
  return (
    <div
      className="relative bg-[#fbf9f8] border-[#ddc1b4] border-b border-r border-solid border-t drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[93px] rounded-[12px] w-[358px]"
      style={{ borderLeftWidth: 4, borderLeftColor: "#7a3100", cursor: "pointer" }}
      onClick={onClick}
    >
      <DecisionIcon />
      <div className="absolute h-[59px] left-[72px] top-[16px] w-[265px]">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#564239] text-[10px] top-[7.5px] tracking-[0.5px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">{entry.time} • {entry.typeLabel}</p>
        </div>
        <div className="absolute h-[21px] left-0 top-[18px] w-[265px]">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#1a1a1a] text-[16px] top-[11px] uppercase whitespace-nowrap">
            <p className="leading-[20px]">{entry.title}</p>
          </div>
        </div>
        {entry.costDelay && (
          <div className="absolute h-[17px] left-0 top-[42px] w-[265px]">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#7a3100] text-[11px] top-[8.5px] uppercase whitespace-nowrap">
              <p className="leading-[16.5px]">{entry.costDelay}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function EntrySiteUpdate({ entry, onClick }: { entry: TimelineEntry; onClick?: () => void }) {
  return (
    <div
      className="relative bg-[#fbf9f8] border border-[#ddc1b4] border-solid h-[225px] overflow-clip rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-[358px]"
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      {/* Construction site photo */}
      <div className="absolute h-[176px] left-0 top-0 w-[356px]">
        <img alt="Site update" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgConstructionSite} />
      </div>
      {/* Caption bar */}
      <div className="absolute bg-[#fbf9f8] h-[47px] left-0 top-[176px] w-[356px]">
        <div className="absolute h-[15px] left-[16px] top-[16px] w-[324px]">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#564239] text-[10px] top-[7.5px] tracking-[1px] uppercase whitespace-nowrap">
            <p className="leading-[15px]">{entry.title}</p>
          </div>
        </div>
      </div>
      {/* Timestamp overlay */}
      <div className="absolute bg-[rgba(122,49,0,0.9)] h-[22px] left-[12px] rounded-[8px] top-[12px] w-[132.25px]">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[8px] text-[9px] text-white top-[11px] tracking-[0.45px] uppercase whitespace-nowrap">
          <p className="leading-[13.5px]">{entry.time} • SITE UPDATE</p>
        </div>
      </div>
    </div>
  );
}

function EntryClearance({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="relative bg-[#fbf9f8] border border-[#ddc1b4] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[93px] rounded-[8px] w-[358px]">
      <ClearanceIcon />
      <div className="absolute h-[59px] left-[72px] top-[16px] w-[268px]">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#564239] text-[10px] top-[7.5px] tracking-[0.5px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">{entry.time} • {entry.typeLabel}</p>
        </div>
        <div className="absolute h-[40px] left-0 top-[19px] w-[268px]">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#1a1a1a] text-[16px] top-[20px] uppercase w-[268px]">
            <p className="leading-[20px] whitespace-pre-wrap">{entry.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Date group header ─────────────────────────────────────────────────────────

function DateGroupHeader({ label }: { label: string }) {
  return (
    <div className="bg-[#efeded] h-[34px] rounded-[8px] w-[358px] relative mb-[16px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-[12px] text-[#564239] text-[12px] top-[17px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[18px]">{label}</p>
      </div>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

interface InteractiveTimelineProps {
  onOpenIssue: () => void;
  onOpenTaskDetail: (id: TimelineTaskId) => void;
  onOpenDecisionDetail: () => void;
  onOpenSiteUpdate: () => void;
  onFiltersChange?: (timeFilter: TimeFilter, activityFilter: ActivityFilter) => void;
}

export default function InteractiveTimeline({
  onOpenIssue,
  onOpenTaskDetail,
  onOpenDecisionDetail,
  onOpenSiteUpdate,
  onFiltersChange,
}: InteractiveTimelineProps) {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("today");
  const [activityFilter, setActivityFilter] = useState<ActivityFilter>("all");

  const applyTimeFilter = (tf: TimeFilter) => {
    setTimeFilter(tf);
    onFiltersChange?.(tf, activityFilter);
  };
  const applyActivityFilter = (af: ActivityFilter) => {
    setActivityFilter(af);
    onFiltersChange?.(timeFilter, af);
  };

  const filteredEntries = ALL_ENTRIES.filter((e) => {
    if (timeFilter === "today" && e.day !== "today") return false;
    if (activityFilter === "issues" && e.type !== "issue" && e.type !== "resolved") return false;
    if (activityFilter === "decisions" && e.type !== "decision") return false;
    return true;
  });

  const todayEntries = filteredEntries.filter((e) => e.day === "today");
  const oct23Entries = filteredEntries.filter((e) => e.day === "oct23");

  const getClickHandler = (entry: TimelineEntry): (() => void) | undefined => {
    if (!entry.clickable) return undefined;
    if (entry.id === "column") return onOpenIssue;
    if (entry.id === "concrete") return () => onOpenTaskDetail("concrete");
    if (entry.id === "structural") return () => onOpenTaskDetail("structural");
    if (entry.id === "hvac") return onOpenDecisionDetail;
    if (entry.id === "siteUpdate") return onOpenSiteUpdate;
    return undefined;
  };

  const renderEntry = (entry: TimelineEntry) => {
    const handler = getClickHandler(entry);
    switch (entry.type) {
      case "completed":  return <EntryCompleted key={entry.id} entry={entry} onClick={handler} />;
      case "issue":      return <EntryIssue key={entry.id} entry={entry} onClick={handler} />;
      case "resolved":   return <EntryResolved key={entry.id} entry={entry} />;
      case "decision":   return <EntryDecision key={entry.id} entry={entry} onClick={handler} />;
      case "siteUpdate": return <EntrySiteUpdate key={entry.id} entry={entry} onClick={handler} />;
      case "clearance":  return <EntryClearance key={entry.id} entry={entry} />;
    }
  };

  const FilterBtn = ({
    active, label, onClick,
  }: { active: boolean; label: string; onClick: () => void }) => (
    <button
      onClick={onClick}
      className="h-[33px] flex-1 rounded-[6px] cursor-pointer active:scale-95 transition-transform"
      style={{ backgroundColor: active ? "#7a3100" : "#e9e8e7" }}
    >
      <span
        className="font-['Manrope:Regular',sans-serif] text-[11px] uppercase"
        style={{ color: active ? "white" : "#1b1c1c" }}
      >
        {label}
      </span>
    </button>
  );

  return (
    <div className="relative size-full bg-[#fbf9f8]">
      {/* Outer wrapper matches Component8's Group: left-[11px] top-[40px] w-[390px] */}
      <div className="absolute left-[11px] top-[40px] w-[390px]">

        {/* Header section — exact match to Component8 HeaderSection */}
        <div className="absolute h-[88px] left-0 top-0 w-[390px]">
          <div className="absolute h-[30px] left-[16px] top-[32px]">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#1a1a1a] text-[30px] top-[15px] tracking-[-0.75px] uppercase whitespace-nowrap">
              <p className="leading-[30px]">PROJECT TIMELINE</p>
            </div>
          </div>
          <div className="absolute h-[18px] left-[16px] top-[70px]">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[#564239] text-[12px] top-[9px] tracking-[0.3px] uppercase whitespace-nowrap">
              <p className="leading-[18px]">DAILY SITE ACTIVITY AND PROGRESS LOG</p>
            </div>
          </div>
        </div>

        {/* Filter bar — exact match to Component8 SectionFilterBar */}
        <div className="absolute bg-[#fbf9f8] h-[106px] left-0 top-[89.83px] w-[390px]">
          <div className="absolute flex gap-[8px] h-[33px] left-[16px] top-[16px] w-[358px]">
            <FilterBtn active={timeFilter === "today"} label="TODAY"      onClick={() => applyTimeFilter("today")} />
            <FilterBtn active={timeFilter === "week"}  label="THIS WEEK"  onClick={() => applyTimeFilter("week")} />
            <FilterBtn active={timeFilter === "month"} label="THIS MONTH" onClick={() => applyTimeFilter("month")} />
          </div>
          <div className="absolute flex gap-[8px] h-[33px] left-[16px] top-[57px] w-[358px]">
            <FilterBtn active={activityFilter === "all"}       label="ALL ACTIVITY"   onClick={() => applyActivityFilter("all")} />
            <FilterBtn active={activityFilter === "issues"}    label="ISSUES ONLY"    onClick={() => applyActivityFilter("issues")} />
            <FilterBtn active={activityFilter === "decisions"} label="DECISIONS ONLY" onClick={() => applyActivityFilter("decisions")} />
          </div>
        </div>

        {/* Main timeline content — starts at same position as Component8's MainTimelineContent */}
        <div className="absolute left-[16px] w-[358px]" style={{ top: 202.83 }}>

          {/* TODAY group */}
          <AnimatePresence mode="popLayout">
            {todayEntries.length > 0 && (
              <motion.div
                key="group-today"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <DateGroupHeader label="OCT 24 - TODAY" />
                <div className="flex flex-col gap-[16px]">
                  <AnimatePresence mode="popLayout">
                    {todayEntries.map((entry) => (
                      <motion.div
                        key={entry.id}
                        layout
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {renderEntry(entry)}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* OCT 23 group */}
          <AnimatePresence mode="popLayout">
            {oct23Entries.length > 0 && (
              <motion.div
                key="group-oct23"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-[24px]"
              >
                <DateGroupHeader label="OCT 23" />
                <div className="flex flex-col gap-[16px]">
                  <AnimatePresence mode="popLayout">
                    {oct23Entries.map((entry) => (
                      <motion.div
                        key={entry.id}
                        layout
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {renderEntry(entry)}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Empty state */}
          <AnimatePresence>
            {filteredEntries.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-[60px]"
              >
                <div className="font-['Manrope:Regular',sans-serif] text-[12px] text-[#564239] tracking-[0.5px] uppercase">
                  NO ACTIVITY FOR THIS FILTER
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom breathing room */}
          <div style={{ height: 40 }} />
        </div>
      </div>
    </div>
  );
}
