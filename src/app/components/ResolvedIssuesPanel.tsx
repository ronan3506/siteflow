import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// ─── Unsplash images for detail pages ────────────────────────────────────────
const IMG_COLUMN =
  "https://images.unsplash.com/photo-1563166423-482a8c14b2d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_ELECTRICAL =
  "https://images.unsplash.com/photo-1606340670695-ec5b4f47f521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_RAILING =
  "https://images.unsplash.com/photo-1574837470917-f3f8372d1a61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_MATERIAL =
  "https://images.unsplash.com/photo-1615461476249-718ef8bc369c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_GLAZING =
  "https://images.unsplash.com/photo-1523477593243-78bbf626fd3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_WATERPROOF =
  "https://images.unsplash.com/photo-1674485169641-bcb2bf6f1df9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080";

// ─── Types ───────────────────────────────────────────────────────────────────

type IssueStatus = "Resolved" | "Closed" | "Work Resumed";

interface ResolvedIssue {
  id: string;
  title: string;
  area: string;
  resolutionSummary: string;
  timeToResolve: string;
  extraCost: string;
  approvedBy: string;
  dateClosed: string;
  status: IssueStatus;
  heroImg: string;
  issueSummary: string;
  rootCause: string;
  actionTaken: string;
  finalOutcome: string;
  concludingNote: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const ISSUES: ResolvedIssue[] = [
  {
    id: "ri-001",
    title: "Column Misalignment Correction",
    area: "Zone B-4 · Structural Frame",
    resolutionSummary: "Column repositioned and re-anchored per approved structural drawing.",
    timeToResolve: "2 days",
    extraCost: "+₹34,000",
    approvedBy: "Architect",
    dateClosed: "May 10, 2026",
    status: "Resolved",
    heroImg: IMG_COLUMN,
    issueSummary:
      "Column C-12 in Zone B-4 was found to be 38mm out of alignment from the approved positioning grid during a routine inspection. The deviation was confirmed with total station survey data.",
    rootCause:
      "Incorrect formwork setting during concrete pour. The base plate was not re-surveyed after scaffolding adjustments the previous day.",
    actionTaken:
      "Column removed, base plate repositioned using total station reference, and re-poured with approved mix design. Structural engineer inspected and signed off on the corrected positioning.",
    finalOutcome: "Column now within ±3mm tolerance. Work resumed on structural frame.",
    concludingNote:
      "A secondary survey check has been added as a mandatory step before all future column pours in this zone.",
  },
  {
    id: "ri-002",
    title: "Electrical Conduit Leak",
    area: "Basement · MEP Zone",
    resolutionSummary: "Damaged conduit section replaced and sealed. Cable run re-tested.",
    timeToResolve: "1 day",
    extraCost: "No extra cost",
    approvedBy: "Site Engineer",
    dateClosed: "May 8, 2026",
    status: "Closed",
    heroImg: IMG_ELECTRICAL,
    issueSummary:
      "A 1.2m section of EMT conduit in the basement MEP zone showed signs of moisture ingress and minor physical damage, likely from nearby drainage work. Cables within showed surface discolouration.",
    rootCause:
      "Conduit was installed before waterproofing completion in the adjacent wall section. Water from incomplete waterproofing seeped into the conduit run.",
    actionTaken:
      "Damaged conduit section replaced with galvanised steel conduit. Entry and exit points resealed with waterproof compound. Cable continuity and insulation resistance tested and confirmed.",
    finalOutcome: "Conduit sealed and cable run certified. No further moisture ingress detected.",
    concludingNote:
      "Conduit installation sequence for remaining basement zones updated to follow waterproofing completion.",
  },
  {
    id: "ri-003",
    title: "Safety Railing Reinforcement",
    area: "Level 3 · Terrace Edge",
    resolutionSummary: "Loose railing posts re-welded and base plates anchored to approved spec.",
    timeToResolve: "3 days",
    extraCost: "+₹9,500",
    approvedBy: "Safety Officer",
    dateClosed: "May 6, 2026",
    status: "Work Resumed",
    heroImg: IMG_RAILING,
    issueSummary:
      "Three railing posts on the Level 3 terrace perimeter were found to have insufficient weld penetration at the base plate. Posts failed a lateral load test at 60% of the required rated load.",
    rootCause:
      "Weld passes applied during fabrication did not meet the minimum throat thickness specified. Welder qualification records confirmed the issue was isolated to one fabricator's batch.",
    actionTaken:
      "All affected posts ground back, re-welded to correct specification, and base plates anchored with M16 chemical anchors. Full section load-tested to 1.5x rated load and passed.",
    finalOutcome: "Railing assembly certified to code. Terrace access reinstated.",
    concludingNote:
      "All fabricated railing sections now require third-party weld inspection sign-off before site delivery.",
  },
  {
    id: "ri-004",
    title: "Material Shortage Delay",
    area: "Block C · Ground Floor",
    resolutionSummary: "Alternative supplier sourced. Brickwork resumed after 4-day gap.",
    timeToResolve: "4 days",
    extraCost: "No extra cost",
    approvedBy: "Project Manager",
    dateClosed: "May 3, 2026",
    status: "Work Resumed",
    heroImg: IMG_MATERIAL,
    issueSummary:
      "Primary brick supplier for Block C ground floor brickwork failed to deliver the scheduled consignment due to a transport dispute. Work on all three elevations was stalled.",
    rootCause:
      "Single-supplier dependency for non-standard brick size. No approved backup supplier was on record at the time.",
    actionTaken:
      "Backup supplier identified and brick sample approved by architect within 24 hours. First consignment received on Day 4. Brickwork sequence adjusted to absorb the delay without pushing the critical path.",
    finalOutcome: "Brickwork resumed. Schedule impact absorbed within existing float.",
    concludingNote:
      "Procurement team has now registered two pre-approved alternative suppliers for all specified non-standard materials.",
  },
  {
    id: "ri-005",
    title: "Glazing Panel Imperfection",
    area: "East Façade · Levels 2–4",
    resolutionSummary: "Three imperfect panels replaced. Visual inspection passed by architect.",
    timeToResolve: "5 days",
    extraCost: "+₹18,000",
    approvedBy: "Architect",
    dateClosed: "Apr 29, 2026",
    status: "Resolved",
    heroImg: IMG_GLAZING,
    issueSummary:
      "Three glass panels on the east façade (Levels 2, 3, and 4) exhibited visible distortion lines and minor surface scratches identified during the architect's cladding inspection walk.",
    rootCause:
      "Panels were found to have manufacturing distortion and surface damage from inadequate protective film during transport. Damage was not visible at ground level until the architect inspection.",
    actionTaken:
      "Three panels removed and returned to manufacturer. Replacement panels ordered and fitted with upgraded edge protection during transport. Installed and re-inspected on site.",
    finalOutcome: "All three panels replaced and approved. Façade inspection closed.",
    concludingNote:
      "Transport specification updated to require double-layer protective film on all glass panels above 1.5m².",
  },
  {
    id: "ri-006",
    title: "Waterproofing Patch Failure",
    area: "Podium Deck · Zone D",
    resolutionSummary: "Failed patch stripped, substrate treated, and full-coverage membrane reapplied.",
    timeToResolve: "3 days",
    extraCost: "No extra cost",
    approvedBy: "Site Engineer",
    dateClosed: "Apr 25, 2026",
    status: "Resolved",
    heroImg: IMG_WATERPROOF,
    issueSummary:
      "A 4m² patch repair applied to the podium deck waterproofing in Zone D showed delamination and pinhole leaks discovered during the pre-monsoon flood test.",
    rootCause:
      "Patch was applied over insufficiently prepared substrate. Surface contaminants were not removed before membrane application, preventing proper adhesion.",
    actionTaken:
      "Failed patch fully removed, substrate mechanically scarified and cleaned. Primer coat applied. New 2-layer SBS membrane applied to the full affected zone, extended 300mm beyond the original repair boundary. Flood-tested and confirmed leak-free.",
    finalOutcome: "Podium deck waterproofing certified. Pre-monsoon inspection passed.",
    concludingNote:
      "Substrate preparation checklist now mandatory for all waterproofing repairs above 0.5m².",
  },
];

// ─── Derived counts ───────────────────────────────────────────────────────────

const resolvedCount = ISSUES.length;
const extraCostCount = ISSUES.filter((i) => i.extraCost !== "No extra cost").length;

// ─── Status styling ───────────────────────────────────────────────────────────

const STATUS_CHIP: Record<IssueStatus, { bg: string; text: string; dot: string }> = {
  Resolved:       { bg: "#edf6f0", text: "#3d6b52", dot: "#3d6b52" },
  Closed:         { bg: "#f0ede8", text: "#564239", dot: "#6b5a4e" },
  "Work Resumed": { bg: "#fef9ec", text: "#8a6820", dot: "#c4a020" },
};

// ─── Shared atoms ─────────────────────────────────────────────────────────────

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

function StatusChip({ status }: { status: IssueStatus }) {
  const c = STATUS_CHIP[status];
  return (
    <span
      className="font-['Manrope:SemiBold',sans-serif] font-semibold uppercase"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        backgroundColor: c.bg,
        color: c.text,
        fontSize: 9,
        letterSpacing: "0.7px",
        padding: "4px 8px",
        borderRadius: 6,
        flexShrink: 0,
      }}
    >
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: c.dot,
          flexShrink: 0,
          display: "inline-block",
        }}
      />
      {status}
    </span>
  );
}

function ViewBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="font-['Manrope:Bold',sans-serif] font-bold uppercase cursor-pointer active:opacity-80 transition-opacity"
      style={{
        backgroundColor: "#7a3100",
        color: "#ffffff",
        fontSize: 10,
        letterSpacing: "0.8px",
        padding: "7px 14px",
        borderRadius: 8,
        border: "none",
        flexShrink: 0,
      }}
    >
      VIEW
    </button>
  );
}

function HeroImage({ src }: { src: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: 210,
        overflow: "hidden",
        flexShrink: 0,
        backgroundColor: "#e8ddd8",
      }}
    >
      <ImageWithFallback
        src={src}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
  );
}

// ─── Summary boxes ────────────────────────────────────────────────────────────

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function StatBoxLight({ line1, line2, value }: { line1: string; line2: string; value: number }) {
  return (
    <div
      style={{
        backgroundColor: "#f2f0ed",
        border: "1px solid #d1cdc7",
        borderRadius: 16,
        height: 141.5,
        flex: 1,
        padding: 25,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <span
        className="font-['Manrope:Regular',sans-serif]"
        style={{ fontSize: 48, lineHeight: "48px", letterSpacing: "-2.4px", color: "#3d2b1f", display: "block" }}
      >
        {pad(value)}
      </span>
      <span
        className="font-['Manrope:Regular',sans-serif]"
        style={{ fontSize: 11, letterSpacing: "1.1px", lineHeight: "13.75px", color: "#6b5a4e", textTransform: "uppercase", display: "block" }}
      >
        {line1}<br />{line2}
      </span>
    </div>
  );
}

function StatBoxDark({ line1, line2, value }: { line1: string; line2: string; value: number }) {
  return (
    <div
      style={{
        backgroundColor: "#7a3100",
        borderRadius: 16,
        height: 141.5,
        flex: 1,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <span
        className="font-['Manrope:Regular',sans-serif]"
        style={{ fontSize: 48, lineHeight: "48px", letterSpacing: "-2.4px", color: "#f9f8f6", display: "block" }}
      >
        {pad(value)}
      </span>
      <span
        className="font-['Manrope:Regular',sans-serif]"
        style={{ fontSize: 11, letterSpacing: "1.1px", lineHeight: "13.75px", color: "#f9f8f6", textTransform: "uppercase", display: "block" }}
      >
        {line1}<br />{line2}
      </span>
    </div>
  );
}

// ─── Issue card ───────────────────────────────────────────────────────────────

function IssueCard({ item, onView }: { item: ResolvedIssue; onView: () => void }) {
  return (
    <div
      style={{
        backgroundColor: "#fdfcfb",
        border: "1px solid #e6e1dc",
        borderRadius: 14,
        padding: "16px",
        marginBottom: 10,
      }}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-[10px]" style={{ marginBottom: 8 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            className="font-['Manrope:Bold',sans-serif] font-bold"
            style={{ fontSize: 13, color: "#1a1a1a", lineHeight: "18px", marginBottom: 3 }}
          >
            {item.title}
          </p>
          <span
            className="font-['Manrope:Regular',sans-serif]"
            style={{ fontSize: 10, color: "#8a7267" }}
          >
            {item.area}
          </span>
        </div>
        <StatusChip status={item.status} />
      </div>

      {/* Resolution summary */}
      <p
        className="font-['Manrope:Regular',sans-serif]"
        style={{ fontSize: 11, color: "#564239", lineHeight: "17px", marginBottom: 10 }}
      >
        {item.resolutionSummary}
      </p>

      {/* Meta row: time + cost */}
      <div className="flex items-center gap-[14px]" style={{ marginBottom: 10 }}>
        {[
          { label: "Time",  value: item.timeToResolve },
          { label: "Cost",  value: item.extraCost     },
        ].map((p) => (
          <div key={p.label} className="flex items-center gap-[5px]">
            <span
              className="font-['Manrope:Regular',sans-serif] uppercase"
              style={{ fontSize: 9, letterSpacing: "0.5px", color: "#8a7267" }}
            >
              {p.label}:
            </span>
            <span
              className="font-['Manrope:SemiBold',sans-serif] font-semibold"
              style={{
                fontSize: 10,
                color: p.value === "No extra cost" ? "#3d6b52" : "#2d241e",
              }}
            >
              {p.value}
            </span>
          </div>
        ))}
      </div>

      {/* Footer: closed by + date + VIEW */}
      <div className="flex items-center justify-between">
        <div>
          <span
            className="font-['Manrope:Regular',sans-serif]"
            style={{ fontSize: 10, color: "#b0a49d" }}
          >
            Closed by {item.approvedBy} · {item.dateClosed}
          </span>
        </div>
        <ViewBtn onClick={onView} />
      </div>
    </div>
  );
}

// ─── List screen ──────────────────────────────────────────────────────────────

function ResolvedIssuesListScreen({
  onBack,
  onViewIssue,
}: {
  onBack: () => void;
  onViewIssue: (id: string) => void;
}) {
  return (
    <div className="absolute inset-0 flex flex-col" style={{ backgroundColor: "#faf8f6" }}>
      <MenuScreenHeader onBack={onBack} label="Back" />

      <div className="flex-1 overflow-y-auto no-scrollbar" style={{ paddingBottom: 28 }}>
        {/* Page title */}
        <div style={{ padding: "22px 20px 0" }}>
          <p
            className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
            style={{ fontSize: 22, letterSpacing: "-0.4px", color: "#1a1a1a", lineHeight: "28px" }}
          >
            Resolved Issues
          </p>
          <p
            className="font-['Manrope:Regular',sans-serif]"
            style={{ fontSize: 12, color: "#8a7267", marginTop: 4 }}
          >
            Documented fixes and completed issue resolutions
          </p>
        </div>

        {/* Summary boxes */}
        <div className="flex gap-[16px]" style={{ padding: "16px 20px 0" }}>
          <StatBoxLight line1="RESOLVED"    line2="THIS MONTH"   value={resolvedCount}  />
          <StatBoxDark  line1="WITH EXTRA"  line2="COST"         value={extraCostCount} />
        </div>

        {/* Issue list */}
        <div style={{ padding: "16px 20px 0" }}>
          {ISSUES.map((issue) => (
            <IssueCard
              key={issue.id}
              item={issue}
              onView={() => onViewIssue(issue.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Detail screen ────────────────────────────────────────────────────────────

function DetailBlock({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        backgroundColor: "#fdfcfb",
        border: "1px solid #e6e1dc",
        borderRadius: 12,
        padding: "15px",
        marginBottom: 10,
      }}
    >
      <p
        className="font-['Manrope:Regular',sans-serif] uppercase"
        style={{ fontSize: 9, letterSpacing: "0.8px", color: "#8a7267", marginBottom: 8 }}
      >
        {label}
      </p>
      <p
        className="font-['Manrope:Regular',sans-serif]"
        style={{ fontSize: 13, color: "#2d241e", lineHeight: "20px" }}
      >
        {value}
      </p>
    </div>
  );
}

function ResolvedIssueDetailScreen({
  issueId,
  onBack,
}: {
  issueId: string;
  onBack: () => void;
}) {
  const item = ISSUES.find((i) => i.id === issueId)!;
  const chipColors = STATUS_CHIP[item.status];

  return (
    <div className="absolute inset-0 flex flex-col" style={{ backgroundColor: "#faf8f6" }}>
      <MenuScreenHeader onBack={onBack} label="Resolved Issues" />

      <div className="flex-1 overflow-y-auto no-scrollbar" style={{ paddingBottom: 28 }}>
        {/* Hero image */}
        <HeroImage src={item.heroImg} />

        <div style={{ padding: "20px 20px 0" }}>
          {/* Area */}
          <p
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 10, letterSpacing: "1px", color: "#8a7267", marginBottom: 6 }}
          >
            {item.area}
          </p>

          {/* Title */}
          <p
            className="font-['Manrope:Bold',sans-serif] font-bold"
            style={{ fontSize: 22, color: "#1a1a1a", lineHeight: "28px", marginBottom: 12 }}
          >
            {item.title}
          </p>

          {/* Status chip + date */}
          <div className="flex items-center gap-[10px]" style={{ marginBottom: 22 }}>
            <StatusChip status={item.status} />
            <span
              className="font-['Manrope:Regular',sans-serif]"
              style={{ fontSize: 10, color: "#b0a49d" }}
            >
              Closed {item.dateClosed}
            </span>
          </div>

          {/* Detail blocks */}
          <DetailBlock label="ISSUE SUMMARY"  value={item.issueSummary} />
          <DetailBlock label="ROOT CAUSE"     value={item.rootCause}    />
          <DetailBlock label="ACTION TAKEN"   value={item.actionTaken}  />

          {/* Bento pair: time + cost */}
          <div className="flex gap-[10px]" style={{ marginBottom: 10 }}>
            {[
              { label: "TIME TO RESOLVE", value: item.timeToResolve },
              { label: "EXTRA COST",      value: item.extraCost      },
            ].map((b) => (
              <div
                key={b.label}
                className="flex-1 flex flex-col"
                style={{
                  backgroundColor: "#f7f4f1",
                  border: "1px solid #e6e1dc",
                  borderRadius: 12,
                  padding: "13px 15px",
                }}
              >
                <p
                  className="font-['Manrope:Regular',sans-serif] uppercase"
                  style={{ fontSize: 9, letterSpacing: "0.7px", color: "#8a7267", marginBottom: 6 }}
                >
                  {b.label}
                </p>
                <p
                  className="font-['Manrope:Bold',sans-serif] font-bold"
                  style={{
                    fontSize: 14,
                    color: b.value === "No extra cost" ? "#3d6b52" : "#1a1a1a",
                  }}
                >
                  {b.value}
                </p>
              </div>
            ))}
          </div>

          {/* Approved/closed by */}
          <div
            style={{
              backgroundColor: "#fdfcfb",
              border: "1px solid #e6e1dc",
              borderRadius: 12,
              padding: "13px 15px",
              marginBottom: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                className="font-['Manrope:Regular',sans-serif] uppercase"
                style={{ fontSize: 9, letterSpacing: "0.7px", color: "#8a7267", marginBottom: 4 }}
              >
                APPROVED / CLOSED BY
              </p>
              <p
                className="font-['Manrope:SemiBold',sans-serif] font-semibold"
                style={{ fontSize: 13, color: "#1a1a1a" }}
              >
                {item.approvedBy}
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p
                className="font-['Manrope:Regular',sans-serif] uppercase"
                style={{ fontSize: 9, letterSpacing: "0.7px", color: "#8a7267", marginBottom: 4 }}
              >
                DATE CLOSED
              </p>
              <p
                className="font-['Manrope:SemiBold',sans-serif] font-semibold"
                style={{ fontSize: 13, color: "#1a1a1a" }}
              >
                {item.dateClosed}
              </p>
            </div>
          </div>

          {/* Final outcome */}
          <div
            style={{
              backgroundColor: chipColors.bg,
              border: `1.5px solid ${chipColors.dot}33`,
              borderRadius: 12,
              padding: "15px",
              marginBottom: 10,
            }}
          >
            <p
              className="font-['Manrope:Regular',sans-serif] uppercase"
              style={{ fontSize: 9, letterSpacing: "0.8px", color: chipColors.text, marginBottom: 8 }}
            >
              FINAL OUTCOME
            </p>
            <p
              className="font-['Manrope:Regular',sans-serif]"
              style={{ fontSize: 13, color: "#2d241e", lineHeight: "20px" }}
            >
              {item.finalOutcome}
            </p>
          </div>

          {/* Concluding note */}
          <DetailBlock label="NOTES &amp; FOLLOW-UP" value={item.concludingNote} />

          {/* Back button */}
          <button
            onClick={onBack}
            className="w-full cursor-pointer active:opacity-70 transition-opacity font-['Manrope:SemiBold',sans-serif] font-semibold uppercase"
            style={{
              height: 48,
              marginTop: 16,
              backgroundColor: "transparent",
              color: "#7a3100",
              fontSize: 12,
              letterSpacing: "0.8px",
              borderRadius: 10,
              border: "1.5px solid #c5bfba",
            }}
          >
            Back to Resolved Issues
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

type SubScreen = { view: "list" } | { view: "detail"; id: string };

const EASE = [0.22, 1, 0.36, 1] as const;

export function ResolvedIssuesPanel({ onBack }: { onBack: () => void }) {
  const [sub, setSub] = useState<SubScreen>({ view: "list" });

  return (
    <div className="absolute inset-0" style={{ backgroundColor: "#faf8f6" }}>
      <AnimatePresence initial={false} mode="wait">
        {sub.view === "list" && (
          <motion.div
            key="list"
            className="absolute inset-0"
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -14 }}
            transition={{ duration: 0.22, ease: EASE }}
          >
            <ResolvedIssuesListScreen
              onBack={onBack}
              onViewIssue={(id) => setSub({ view: "detail", id })}
            />
          </motion.div>
        )}

        {sub.view === "detail" && (
          <motion.div
            key="detail"
            className="absolute inset-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.22, ease: EASE }}
          >
            <ResolvedIssueDetailScreen
              issueId={sub.id}
              onBack={() => setSub({ view: "list" })}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
