import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// ─── Image imports (architect screens — reused per spec) ─────────────────────
import imgAcLayoutHero from "../../imports/3ReviewDetailFinalColor/9e03cc0fe5d2dd05269808484174846a4ae64867.png";
import imgMarble from "../../imports/2DecisionsPendingListFinalColor/b5e8e0a128225c8cfb1a95c5d2f90b722310f294.png";
import imgLighting from "../../imports/2DecisionsPendingListFinalColor/898a9bca30863942c1f358937f6a4ec7d6cd1af3.png";
import imgColumn from "../../imports/4ApprovalDetailMobile-1/266786354298a33b573a5ff16e549f44d6da91bb.png";

// ─── Unsplash image URLs (new made-up decision items) ────────────────────────
const IMG_DRAINAGE =
  "https://images.unsplash.com/photo-1610079732357-0d20c1a98ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_PAINT =
  "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_RAILING =
  "https://images.unsplash.com/photo-1586370166363-e6484afb1bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_SHADE =
  "https://images.unsplash.com/photo-1641481001093-592dd889b1af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080";

// ─── Types ───────────────────────────────────────────────────────────────────

type RequestStatus = "Pending" | "Under Review";
type DecisionStatus = "Approved" | "Rejected" | "Revision Requested";
type Recipient = "Architect" | "Client";
type TabId = "requests" | "decisions";

interface RequestItem {
  id: string;
  title: string;
  requestType: string;
  sentTo: Recipient;
  dateSent: string;
  status: RequestStatus;
  costImpact: string;
  delayImpact: string;
  reason: string;
  whatChanged: string;
  cardImg: string;
  heroImg: string;
}

interface DecisionItem {
  id: string;
  title: string;
  respondedBy: Recipient;
  status: DecisionStatus;
  responseDate: string;
  costEffect: string;
  delayEffect: string;
  summary: string;
  responseNote: string;
  recommendation: string;
  cardImg: string;
  heroImg: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const REQUESTS: RequestItem[] = [
  {
    id: "req-001",
    title: "HVAC Layout Revision",
    requestType: "Design Change",
    sentTo: "Architect",
    dateSent: "May 15, 2026 · 10:22 AM",
    status: "Pending",
    costImpact: "+₹28,000",
    delayImpact: "1–2 days",
    reason:
      "Duct routing conflicts with structural beam C-12 in Zone B-4. Current layout cannot be installed without cutting into the beam.",
    whatChanged:
      "Proposed an alternate routing path through the east corridor ceiling cavity, which avoids the beam entirely.",
    cardImg: imgAcLayoutHero,
    heroImg: imgAcLayoutHero,
  },
  {
    id: "req-002",
    title: "Marble Finish Approval",
    requestType: "Material Approval",
    sentTo: "Client",
    dateSent: "May 12, 2026 · 2:45 PM",
    status: "Under Review",
    costImpact: "+₹64,000",
    delayImpact: "None",
    reason:
      "Original imported marble is unavailable from the supplier. An equivalent alternative with matching grain pattern has been sourced.",
    whatChanged:
      "Calacatta Gold replaced with Statuario Venato from an approved vendor. Sample confirmed on site.",
    cardImg: imgMarble,
    heroImg: imgMarble,
  },
  {
    id: "req-003",
    title: "Lighting Upgrade Cost Approval",
    requestType: "Budget Approval",
    sentTo: "Client",
    dateSent: "May 13, 2026 · 9:00 AM",
    status: "Under Review",
    costImpact: "+₹42,500",
    delayImpact: "None",
    reason:
      "Client verbally requested LED panel upgrade across all office zones. Final fixture selection confirmed — formal cost approval pending.",
    whatChanged:
      "Upgrade from standard downlights to integrated LED panels with individual zone dimming control.",
    cardImg: imgLighting,
    heroImg: imgLighting,
  },
];

const DECISIONS: DecisionItem[] = [
  {
    id: "dec-001",
    title: "Column Correction Design Check",
    respondedBy: "Architect",
    status: "Revision Requested",
    responseDate: "May 15, 2026 · 12:45 PM",
    costEffect: "TBD",
    delayEffect: "2–3 days",
    summary: "Clarification requested before correction work can proceed.",
    responseNote:
      "The routing path as submitted conflicts with the fire suppression pipe run in Zone C. Please resubmit with an updated clash detection report and revised positioning detail.",
    recommendation:
      "Coordinate with the MEP team, update the clash report, and resubmit the corrected column positioning proposal for final review.",
    cardImg: imgColumn,
    heroImg: imgColumn,
  },
  {
    id: "dec-002",
    title: "Foundation Drainage Reroute",
    respondedBy: "Architect",
    status: "Rejected",
    responseDate: "May 14, 2026 · 4:20 PM",
    costEffect: "No change",
    delayEffect: "None",
    summary: "Drainage reroute rejected. Original layout to be maintained.",
    responseNote:
      "The proposed reroute does not align with the approved drainage plan and may affect waterproofing membrane continuity. Proceed with the original drainage layout as per approved drawings.",
    recommendation:
      "Revert to the original drainage plan. If site conditions require a change, raise a formal RFI with the structural engineer.",
    cardImg: IMG_DRAINAGE,
    heroImg: IMG_DRAINAGE,
  },
  {
    id: "dec-003",
    title: "Exterior Paint Finish Change",
    respondedBy: "Client",
    status: "Approved",
    responseDate: "May 13, 2026 · 5:10 PM",
    costEffect: "+₹18,000 approved",
    delayEffect: "None",
    summary: "Paint finish change approved. Proceed with new specification.",
    responseNote:
      "Client has approved the switch from matte to satin exterior finish for all façade elevations. Proceed with the updated paint specification and confirm colour reference codes before application.",
    recommendation:
      "Update the materials schedule with the revised finish spec, confirm colour codes with the client, and proceed with application on the approved elevation sequence.",
    cardImg: IMG_PAINT,
    heroImg: IMG_PAINT,
  },
  {
    id: "dec-004",
    title: "Terrace Railing Height Revision",
    respondedBy: "Architect",
    status: "Approved",
    responseDate: "May 12, 2026 · 3:55 PM",
    costEffect: "+₹9,500 approved",
    delayEffect: "None",
    summary: "Height revision approved. Proceed with updated railing spec.",
    responseNote:
      "Revised railing height of 1100mm reviewed and approved in line with local safety code requirements. Fabrication can proceed with the updated height across all terrace zones.",
    recommendation:
      "Issue updated fabrication drawings to the railing contractor and confirm installation sequence with the site supervisor.",
    cardImg: IMG_RAILING,
    heroImg: IMG_RAILING,
  },
  {
    id: "dec-005",
    title: "Window Shade Motor Upgrade",
    respondedBy: "Client",
    status: "Revision Requested",
    responseDate: "May 11, 2026 · 6:30 PM",
    costEffect: "TBD",
    delayEffect: "Under review",
    summary: "Further specification detail required before approval.",
    responseNote:
      "The motor brand and compatibility with the smart home integration system has not been confirmed. Please resubmit with a confirmed motor specification sheet and integration compatibility note.",
    recommendation:
      "Obtain confirmation from the smart home systems vendor, attach the motor spec sheet, and resubmit for client sign-off.",
    cardImg: IMG_SHADE,
    heroImg: IMG_SHADE,
  },
];

// ─── Status styling ───────────────────────────────────────────────────────────

const REQUEST_CHIP: Record<RequestStatus, { bg: string; text: string }> = {
  Pending:        { bg: "#f5f0ec", text: "#8a7267" },
  "Under Review": { bg: "#fef9ec", text: "#a07c2a" },
};

const DECISION_CHIP: Record<DecisionStatus, { bg: string; text: string; dot: string }> = {
  Approved:             { bg: "#edf6f0", text: "#3d6b52", dot: "#3d6b52" },
  Rejected:             { bg: "#fdf0ef", text: "#b23b3b", dot: "#b23b3b" },
  "Revision Requested": { bg: "#fef4e8", text: "#b26020", dot: "#c98020" },
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

function ReqStatusChip({ status }: { status: RequestStatus }) {
  const c = REQUEST_CHIP[status];
  return (
    <span
      className="font-['Manrope:SemiBold',sans-serif] font-semibold uppercase"
      style={{
        display: "inline-flex",
        alignItems: "center",
        backgroundColor: c.bg,
        color: c.text,
        fontSize: 9,
        letterSpacing: "0.7px",
        padding: "4px 8px",
        borderRadius: 6,
      }}
    >
      {status}
    </span>
  );
}

function DecChip({ status }: { status: DecisionStatus }) {
  const c = DECISION_CHIP[status];
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
      }}
    >
      <span
        style={{
          width: 5, height: 5, borderRadius: "50%",
          backgroundColor: c.dot, flexShrink: 0, display: "inline-block",
        }}
      />
      {status}
    </span>
  );
}

function RecipientTag({ to }: { to: Recipient }) {
  const isArch = to === "Architect";
  return (
    <span
      className="font-['Manrope:Regular',sans-serif]"
      style={{
        display: "inline-flex",
        alignItems: "center",
        backgroundColor: isArch ? "#f0ece8" : "#faf0e8",
        color: isArch ? "#564239" : "#8a5a2a",
        fontSize: 10,
        padding: "3px 7px",
        borderRadius: 5,
      }}
    >
      {isArch ? "→ Architect" : "→ Client"}
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

function ImpactPair({ cost, delay }: { cost: string; delay: string }) {
  return (
    <div className="flex items-center gap-[14px]">
      {[{ label: "Cost", value: cost }, { label: "Delay", value: delay }].map((p) => (
        <div key={p.label} className="flex items-center gap-[5px]">
          <span
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 9, letterSpacing: "0.5px", color: "#8a7267" }}
          >
            {p.label}:
          </span>
          <span
            className="font-['Manrope:SemiBold',sans-serif] font-semibold"
            style={{ fontSize: 10, color: "#2d241e" }}
          >
            {p.value}
          </span>
        </div>
      ))}
    </div>
  );
}

// Full-width hero image for detail pages
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

// ─── Summary boxes — styled to match architect DECISIONS bento grid ──────────

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

// ─── Tab bar ──────────────────────────────────────────────────────────────────

function TabBar({
  active,
  onChange,
}: {
  active: TabId;
  onChange: (t: TabId) => void;
}) {
  const tabs: { id: TabId; label: string }[] = [
    { id: "requests",  label: "Requests Sent"    },
    { id: "decisions", label: "Decision Updates" },
  ];

  return (
    <div
      className="flex"
      style={{
        borderBottom: "1px solid #e6e1dc",
        marginTop: 16,
        marginLeft: 20,
        marginRight: 20,
      }}
    >
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className="relative flex-1 flex items-center justify-center cursor-pointer transition-colors"
            style={{
              height: 40,
              backgroundColor: "transparent",
              border: "none",
              color: isActive ? "#7a3100" : "#8a7267",
              fontFamily: "'Manrope:SemiBold', sans-serif",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: "0.7px",
              textTransform: "uppercase",
            }}
          >
            {tab.label}
            {isActive && (
              <motion.div
                layoutId="approvals-tab-indicator"
                className="absolute bottom-0 left-0 right-0"
                style={{ height: 2, backgroundColor: "#7a3100", borderRadius: 2 }}
                transition={{ type: "spring", stiffness: 380, damping: 34 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

// ─── Request card ─────────────────────────────────────────────────────────────

function RequestCard({ item, onView }: { item: RequestItem; onView: () => void }) {
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
      <div className="flex items-start justify-between gap-[10px]" style={{ marginBottom: 10 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            className="font-['Manrope:Bold',sans-serif] font-bold"
            style={{ fontSize: 13, color: "#1a1a1a", lineHeight: "18px", marginBottom: 4 }}
          >
            {item.title}
          </p>
          <div className="flex items-center gap-[6px] flex-wrap">
            <span
              className="font-['Manrope:Regular',sans-serif]"
              style={{ fontSize: 10, color: "#8a7267" }}
            >
              {item.requestType}
            </span>
            <RecipientTag to={item.sentTo} />
          </div>
        </div>
        <ReqStatusChip status={item.status} />
      </div>

      {/* Impact row */}
      <ImpactPair cost={item.costImpact} delay={item.delayImpact} />

      {/* Footer: date + VIEW */}
      <div className="flex items-center justify-between" style={{ marginTop: 10 }}>
        <span
          className="font-['Manrope:Regular',sans-serif]"
          style={{ fontSize: 10, color: "#b0a49d" }}
        >
          {item.dateSent}
        </span>
        <ViewBtn onClick={onView} />
      </div>
    </div>
  );
}

// ─── Decision card ────────────────────────────────────────────────────────────

function DecisionCard({ item, onView }: { item: DecisionItem; onView: () => void }) {
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
      <div className="flex items-start justify-between gap-[10px]" style={{ marginBottom: 10 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            className="font-['Manrope:Bold',sans-serif] font-bold"
            style={{ fontSize: 13, color: "#1a1a1a", lineHeight: "18px", marginBottom: 4 }}
          >
            {item.title}
          </p>
          <span
            className="font-['Manrope:Regular',sans-serif]"
            style={{ fontSize: 10, color: "#8a7267" }}
          >
            Response from {item.respondedBy}
          </span>
        </div>
        <DecChip status={item.status} />
      </div>

      {/* Summary */}
      <p
        className="font-['Manrope:Regular',sans-serif]"
        style={{ fontSize: 11, color: "#564239", lineHeight: "17px", marginBottom: 10 }}
      >
        {item.summary}
      </p>

      {/* Impact row */}
      <ImpactPair cost={item.costEffect} delay={item.delayEffect} />

      {/* Footer: date + VIEW */}
      <div className="flex items-center justify-between" style={{ marginTop: 10 }}>
        <span
          className="font-['Manrope:Regular',sans-serif]"
          style={{ fontSize: 10, color: "#b0a49d" }}
        >
          {item.responseDate}
        </span>
        <ViewBtn onClick={onView} />
      </div>
    </div>
  );
}

// ─── Approvals list screen ────────────────────────────────────────────────────

function ApprovalsListScreen({
  onBack,
  tab,
  onTabChange,
  onViewRequest,
  onViewDecision,
}: {
  onBack: () => void;
  tab: TabId;
  onTabChange: (t: TabId) => void;
  onViewRequest: (id: string) => void;
  onViewDecision: (id: string) => void;
}) {
  const pendingCount = REQUESTS.length;
  const responseCount = DECISIONS.length;

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
            Approvals
          </p>
          <p
            className="font-['Manrope:Regular',sans-serif]"
            style={{ fontSize: 12, color: "#8a7267", marginTop: 4 }}
          >
            Requests sent and responses received
          </p>
        </div>

        {/* Summary boxes — architect DECISIONS bento style */}
        <div className="flex gap-[16px]" style={{ padding: "16px 20px 0" }}>
          <StatBoxLight line1="PENDING"  line2="REQUESTS"  value={pendingCount}  />
          <StatBoxDark  line1="NEW"      line2="RESPONSES" value={responseCount} />
        </div>

        {/* Tab bar */}
        <TabBar active={tab} onChange={onTabChange} />

        {/* Tab content */}
        <div style={{ padding: "16px 20px 0" }}>
          <AnimatePresence mode="wait" initial={false}>
            {tab === "requests" ? (
              <motion.div
                key="requests"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                {REQUESTS.map((req) => (
                  <RequestCard key={req.id} item={req} onView={() => onViewRequest(req.id)} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="decisions"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                {DECISIONS.map((dec) => (
                  <DecisionCard key={dec.id} item={dec} onView={() => onViewDecision(dec.id)} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ─── Request detail screen ────────────────────────────────────────────────────

const HISTORY_DOTS: Record<RequestStatus, [boolean, boolean, boolean]> = {
  Pending:        [true, false, false],
  "Under Review": [true, true,  false],
};

function HistoryTrack({ status }: { status: RequestStatus }) {
  const [sent, viewed, responded] = HISTORY_DOTS[status];
  const steps = [
    { label: "Sent", done: sent },
    { label: viewed ? "Viewed — Under Review" : "Not yet viewed", done: viewed },
    { label: responded ? "Response received" : "Waiting for response", done: responded },
  ];

  return (
    <div>
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-start gap-[12px]">
          <div className="flex flex-col items-center" style={{ width: 16 }}>
            <div
              style={{
                width: 13, height: 13, borderRadius: "50%", marginTop: 2, flexShrink: 0,
                backgroundColor: step.done ? "#7a3100" : "#ddd8d4",
                border: step.done ? "none" : "1.5px solid #c5bfba",
              }}
            />
            {i < steps.length - 1 && (
              <div
                style={{
                  width: 1.5, flex: 1, minHeight: 12,
                  backgroundColor: step.done ? "#d4b8a8" : "#e6e1dc",
                  marginTop: 3, marginBottom: 3,
                }}
              />
            )}
          </div>
          <p
            className="font-['Manrope:Regular',sans-serif]"
            style={{
              fontSize: 12, lineHeight: "18px",
              color: step.done ? "#2d241e" : "#b0a49d",
              paddingBottom: i < steps.length - 1 ? 10 : 0,
            }}
          >
            {step.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function RequestDetailScreen({
  requestId,
  onBack,
  onReminder,
}: {
  requestId: string;
  onBack: () => void;
  onReminder: () => void;
}) {
  const item = REQUESTS.find((r) => r.id === requestId)!;
  const isPending = item.status === "Pending" || item.status === "Under Review";

  return (
    <div className="absolute inset-0 flex flex-col" style={{ backgroundColor: "#faf8f6" }}>
      <MenuScreenHeader onBack={onBack} label="Approvals" />

      <div className="flex-1 overflow-y-auto no-scrollbar" style={{ paddingBottom: 28 }}>
        {/* Hero image */}
        <HeroImage src={item.heroImg} />

        <div style={{ padding: "20px 20px 0" }}>
          {/* Type + recipient */}
          <p
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 10, letterSpacing: "1px", color: "#8a7267", marginBottom: 6 }}
          >
            {item.requestType} · Sent to {item.sentTo}
          </p>

          {/* Title */}
          <p
            className="font-['Manrope:Bold',sans-serif] font-bold"
            style={{ fontSize: 22, color: "#1a1a1a", lineHeight: "28px", marginBottom: 12 }}
          >
            {item.title}
          </p>

          {/* Status + date */}
          <div className="flex items-center gap-[10px]" style={{ marginBottom: 22 }}>
            <ReqStatusChip status={item.status} />
            <span
              className="font-['Manrope:Regular',sans-serif]"
              style={{ fontSize: 10, color: "#b0a49d" }}
            >
              {item.dateSent}
            </span>
          </div>

          {/* Detail blocks */}
          {[
            { label: "REASON FOR REQUEST", value: item.reason },
            { label: "WHAT CHANGED",       value: item.whatChanged },
          ].map((block) => (
            <div
              key={block.label}
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
                {block.label}
              </p>
              <p
                className="font-['Manrope:Regular',sans-serif]"
                style={{ fontSize: 13, color: "#2d241e", lineHeight: "20px" }}
              >
                {block.value}
              </p>
            </div>
          ))}

          {/* Impact bento */}
          <div className="flex gap-[10px]" style={{ marginBottom: 22 }}>
            {[
              { label: "COST IMPACT",  value: item.costImpact  },
              { label: "DELAY IMPACT", value: item.delayImpact },
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
                  style={{ fontSize: 16, color: "#1a1a1a" }}
                >
                  {b.value}
                </p>
              </div>
            ))}
          </div>

          {/* History strip */}
          <div
            style={{
              backgroundColor: "#fdfcfb",
              border: "1px solid #e6e1dc",
              borderRadius: 12,
              padding: "15px",
              marginBottom: 22,
            }}
          >
            <p
              className="font-['Manrope:Regular',sans-serif] uppercase"
              style={{ fontSize: 9, letterSpacing: "0.8px", color: "#8a7267", marginBottom: 13 }}
            >
              REQUEST HISTORY
            </p>
            <HistoryTrack status={item.status} />
          </div>

          {/* Passive state + send reminder */}
          {isPending && (
            <>
              <div
                className="flex items-center gap-[10px]"
                style={{
                  backgroundColor: "#fef9ec",
                  border: "1px solid #f0de98",
                  borderRadius: 10,
                  padding: "12px 14px",
                  marginBottom: 12,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6.25" stroke="#c4a020" strokeWidth="1.5" />
                  <path d="M7 4v3.5M7 10v.25" stroke="#c4a020" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span
                  className="font-['Manrope:Regular',sans-serif]"
                  style={{ fontSize: 11, color: "#8a6820", lineHeight: "17px" }}
                >
                  Waiting for a response from {item.sentTo}.
                </span>
              </div>
              <button
                onClick={onReminder}
                className="w-full cursor-pointer active:opacity-80 transition-opacity font-['Manrope:SemiBold',sans-serif] font-semibold uppercase"
                style={{
                  height: 48,
                  backgroundColor: "transparent",
                  border: "1.5px solid #c5bfba",
                  borderRadius: 10,
                  color: "#564239",
                  fontSize: 12,
                  letterSpacing: "0.8px",
                }}
              >
                SEND REMINDER
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Decision detail screen ───────────────────────────────────────────────────

function DecisionDetailScreen({
  decisionId,
  onBack,
  onContinueWork,
  onRevise,
}: {
  decisionId: string;
  onBack: () => void;
  onContinueWork: () => void;
  onRevise: () => void;
}) {
  const item = DECISIONS.find((d) => d.id === decisionId)!;
  const cfg = DECISION_CHIP[item.status];
  const isApproved = item.status === "Approved";

  const responseLabel =
    item.status === "Revision Requested"
      ? "CLARIFICATION NOTE"
      : item.status === "Rejected"
      ? "REJECTION REASON"
      : "RESPONSE NOTE";

  return (
    <div className="absolute inset-0 flex flex-col" style={{ backgroundColor: "#faf8f6" }}>
      <MenuScreenHeader onBack={onBack} label="Approvals" />

      <div className="flex-1 overflow-y-auto no-scrollbar" style={{ paddingBottom: 28 }}>
        {/* Hero image */}
        <HeroImage src={item.heroImg} />

        <div style={{ padding: "20px 20px 0" }}>
          {/* Respondent */}
          <p
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 10, letterSpacing: "1px", color: "#8a7267", marginBottom: 6 }}
          >
            Response from {item.respondedBy}
          </p>

          {/* Title */}
          <p
            className="font-['Manrope:Bold',sans-serif] font-bold"
            style={{ fontSize: 22, color: "#1a1a1a", lineHeight: "28px", marginBottom: 12 }}
          >
            {item.title}
          </p>

          {/* Decision chip + date */}
          <div className="flex items-center gap-[10px]" style={{ marginBottom: 22 }}>
            <DecChip status={item.status} />
            <span
              className="font-['Manrope:Regular',sans-serif]"
              style={{ fontSize: 10, color: "#b0a49d" }}
            >
              {item.responseDate}
            </span>
          </div>

          {/* Response note */}
          <div
            style={{
              backgroundColor: cfg.bg,
              border: `1.5px solid ${cfg.dot}33`,
              borderRadius: 12,
              padding: "15px",
              marginBottom: 10,
            }}
          >
            <p
              className="font-['Manrope:Regular',sans-serif] uppercase"
              style={{ fontSize: 9, letterSpacing: "0.8px", color: cfg.text, marginBottom: 8 }}
            >
              {responseLabel}
            </p>
            <p
              className="font-['Manrope:Regular',sans-serif]"
              style={{ fontSize: 13, color: "#2d241e", lineHeight: "20px" }}
            >
              {item.responseNote}
            </p>
          </div>

          {/* Impact bento */}
          <div className="flex gap-[10px]" style={{ marginBottom: 10 }}>
            {[
              { label: "COST EFFECT",  value: item.costEffect  },
              { label: "DELAY EFFECT", value: item.delayEffect },
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
                  style={{ fontSize: 14, color: "#1a1a1a" }}
                >
                  {b.value}
                </p>
              </div>
            ))}
          </div>

          {/* Recommendation */}
          <div
            style={{
              backgroundColor: "#fdfcfb",
              border: "1px solid #e6e1dc",
              borderRadius: 12,
              padding: "15px",
              marginBottom: 26,
            }}
          >
            <p
              className="font-['Manrope:Regular',sans-serif] uppercase"
              style={{ fontSize: 9, letterSpacing: "0.8px", color: "#8a7267", marginBottom: 8 }}
            >
              RECOMMENDED NEXT STEP
            </p>
            <p
              className="font-['Manrope:Regular',sans-serif]"
              style={{ fontSize: 13, color: "#2d241e", lineHeight: "20px" }}
            >
              {item.recommendation}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-[10px]">
            {isApproved ? (
              <button
                onClick={onContinueWork}
                className="w-full cursor-pointer active:opacity-80 transition-opacity font-['Manrope:Bold',sans-serif] font-bold uppercase"
                style={{
                  height: 52,
                  backgroundColor: "#7a3100",
                  color: "#ffffff",
                  fontSize: 13,
                  letterSpacing: "1px",
                  borderRadius: 12,
                  border: "none",
                  boxShadow: "0px 2px 8px rgba(122,49,0,0.22)",
                }}
              >
                Continue Work
              </button>
            ) : (
              <button
                onClick={onRevise}
                className="w-full cursor-pointer active:opacity-80 transition-opacity font-['Manrope:Bold',sans-serif] font-bold uppercase"
                style={{
                  height: 52,
                  backgroundColor: "#7a3100",
                  color: "#ffffff",
                  fontSize: 13,
                  letterSpacing: "1px",
                  borderRadius: 12,
                  border: "none",
                  boxShadow: "0px 2px 8px rgba(122,49,0,0.22)",
                }}
              >
                Revise and Resubmit
              </button>
            )}
            <button
              onClick={onBack}
              className="w-full cursor-pointer active:opacity-70 transition-opacity font-['Manrope:SemiBold',sans-serif] font-semibold uppercase"
              style={{
                height: 44,
                backgroundColor: "transparent",
                color: "#7a3100",
                fontSize: 12,
                letterSpacing: "0.8px",
                borderRadius: 10,
                border: "1.5px solid #c5bfba",
              }}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

type SubScreen =
  | { view: "list" }
  | { view: "requestDetail";  id: string }
  | { view: "decisionDetail"; id: string };

const EASE = [0.22, 1, 0.36, 1] as const;

export function ApprovalsPanel({
  onBack,
  onShowToast,
}: {
  onBack: () => void;
  onShowToast: (msg: string) => void;
}) {
  const [tab,  setTab]  = useState<TabId>("requests");
  const [sub,  setSub]  = useState<SubScreen>({ view: "list" });

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
            <ApprovalsListScreen
              onBack={onBack}
              tab={tab}
              onTabChange={setTab}
              onViewRequest={(id) => setSub({ view: "requestDetail", id })}
              onViewDecision={(id) => setSub({ view: "decisionDetail", id })}
            />
          </motion.div>
        )}

        {sub.view === "requestDetail" && (
          <motion.div
            key="requestDetail"
            className="absolute inset-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.22, ease: EASE }}
          >
            <RequestDetailScreen
              requestId={sub.id}
              onBack={() => { setTab("requests"); setSub({ view: "list" }); }}
              onReminder={() => onShowToast("Reminder sent")}
            />
          </motion.div>
        )}

        {sub.view === "decisionDetail" && (
          <motion.div
            key="decisionDetail"
            className="absolute inset-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.22, ease: EASE }}
          >
            <DecisionDetailScreen
              decisionId={sub.id}
              onBack={() => { setTab("decisions"); setSub({ view: "list" }); }}
              onContinueWork={() => {
                setTab("decisions");
                setSub({ view: "list" });
                onShowToast("Work order updated — continuing");
              }}
              onRevise={() => {
                setTab("decisions");
                setSub({ view: "list" });
                onShowToast("Revision submitted to the team");
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
