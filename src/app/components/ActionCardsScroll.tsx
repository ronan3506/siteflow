import svgPaths from "../../imports/1TodayBoardHomeScreen-1/svg-dgyex2e769";

export type ActionCardId = "safetyAudit" | "materialDelivery";

interface CardDef {
  id: ActionCardId;
  icon: React.ReactNode;
  badgeText: string;
  badgeBg: string;
  badgeColor: string;
  title: string;
  description: string;
  buttonText: string;
  buttonPrimary: boolean;
}

const CARDS: CardDef[] = [
  {
    id: "safetyAudit",
    icon: (
      <svg viewBox="0 0 18 20" fill="none" style={{ width: 18, height: 20 }}>
        <path d={svgPaths.p32d3f900} fill="#7A3100" />
      </svg>
    ),
    badgeText: "PRIORITY 01",
    badgeBg: "#e4e2e2",
    badgeColor: "#1b1c1c",
    title: "Submit Safety Audit",
    description: "East terrace needs immediate clearance before concrete pour.",
    buttonText: "START AUDIT",
    buttonPrimary: true,
  },
  {
    id: "materialDelivery",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" style={{ width: 20, height: 20 }}>
        <path d="M10 1L18 5.5V14.5L10 19L2 14.5V5.5L10 1Z" fill="#7A3100" />
        <path
          d="M2 5.5L10 10L18 5.5M10 10V19"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    badgeText: "PENDING",
    badgeBg: "#fff3e0",
    badgeColor: "#e65100",
    title: "Material Delivery",
    description: "Cement and steel delivery scheduled. Verify before work resumes.",
    buttonText: "TRACK",
    buttonPrimary: true,
  },
];

function ActionCard({
  card,
  onOpen,
}: {
  card: CardDef;
  onOpen: () => void;
}) {
  return (
    <div
      style={{
        width: 280,
        height: 253,
        flexShrink: 0,
        scrollSnapAlign: "start",
        position: "relative",
        backgroundColor: "white",
        borderRadius: 12,
        boxShadow: "0px 1px 1px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
        paddingTop: 24,
        paddingBottom: 24,
        paddingLeft: 24,
        paddingRight: 24,
        boxSizing: "border-box",
        gap: 0,
      }}
    >
      {/* 4px left border overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 12,
          pointerEvents: "none",
          border: "1px solid #bdbdbd",
          borderLeftWidth: 4,
        }}
      />

      {/* Icon + badge row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          width: "100%",
          flexShrink: 0,
          marginBottom: 16,
        }}
      >
        {card.icon}
        <div
          style={{
            backgroundColor: card.badgeBg,
            borderRadius: 6,
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 4,
            paddingBottom: 4,
          }}
        >
          <span
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 10, color: card.badgeColor, letterSpacing: "0.2px" }}
          >
            {card.badgeText}
          </span>
        </div>
      </div>

      {/* Title */}
      <p
        className="font-['Manrope:Regular',sans-serif]"
        style={{
          fontSize: 20,
          color: "#1b1c1c",
          lineHeight: "25px",
          flexShrink: 0,
          marginBottom: 8,
        }}
      >
        {card.title}
      </p>

      {/* Description */}
      <p
        className="font-['Manrope:Regular',sans-serif]"
        style={{
          fontSize: 13,
          color: "#564239",
          lineHeight: "20px",
          flex: 1,
          overflow: "hidden",
        }}
      >
        {card.description}
      </p>

      {/* CTA Button */}
      <button
        onClick={onOpen}
        className="cursor-pointer active:opacity-80 transition-opacity"
        style={{
          width: "100%",
          flexShrink: 0,
          backgroundColor: card.buttonPrimary ? "#7a3100" : "#efeded",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 14,
          paddingBottom: 14,
          marginTop: 14,
        }}
      >
        <span
          className="font-['Manrope:Regular',sans-serif] uppercase"
          style={{
            fontSize: 11,
            color: card.buttonPrimary ? "white" : "#7a3100",
            letterSpacing: "0.55px",
          }}
        >
          {card.buttonText}
        </span>
      </button>
    </div>
  );
}

export function ActionCardsScroll({
  onOpenCard,
}: {
  onOpenCard: (id: ActionCardId) => void;
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: 128,
        left: 16,
        width: 380,
        height: 269,
        backgroundColor: "white",
        overflow: "hidden",
        zIndex: 5,
      }}
    >
      <div
        className="no-scrollbar"
        style={{
          display: "flex",
          alignItems: "flex-start",
          height: "100%",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
          gap: 16,
          paddingRight: 100,
        }}
      >
        {CARDS.map((card) => (
          <ActionCard
            key={card.id}
            card={card}
            onOpen={() => onOpenCard(card.id)}
          />
        ))}
      </div>
    </div>
  );
}
