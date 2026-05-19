import { useState } from "react";

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

type InviteType = "client" | "architect" | "worker" | null;

interface InviteOption {
  id: InviteType;
  label: string;
  role: string;
  description: string;
  color: string;
  linkSuffix: string;
}

const INVITE_OPTIONS: InviteOption[] = [
  {
    id: "client",
    label: "Invite Client",
    role: "CLIENT ACCESS",
    description: "View-only access to project progress, approvals, and reports",
    color: "#4a7fa5",
    linkSuffix: "client",
  },
  {
    id: "architect",
    label: "Invite Architect",
    role: "ARCHITECT ACCESS",
    description: "Review drawings, approve changes, and track design progress",
    color: "#5a4a8a",
    linkSuffix: "architect",
  },
  {
    id: "worker",
    label: "Invite Worker",
    role: "WORKER ACCESS",
    description: "View assigned tasks, log progress, and submit site photos",
    color: "#7a3100",
    linkSuffix: "worker",
  },
];

function generateLink(suffix: string): string {
  return `siteflow.app/join/proj-7821-${suffix}-4k9x`;
}

function CopyIcon({ copied }: { copied: boolean }) {
  if (copied) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <rect x="9" y="9" width="13" height="13" rx="2" stroke="white" strokeWidth="1.8" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function InviteCard({
  option,
  onCopy,
}: {
  option: InviteOption;
  onCopy: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleExpand = () => setExpanded(true);

  const handleCopy = () => {
    setCopied(true);
    onCopy();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="bg-white border border-[#e6e1dc] rounded-[14px]"
      style={{ marginBottom: 12, overflow: "hidden" }}
    >
      {/* Header row */}
      <button
        onClick={handleExpand}
        className="w-full flex items-center cursor-pointer active:opacity-80 transition-opacity"
        style={{ padding: "16px", textAlign: "left" }}
      >
        {/* Role dot */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            backgroundColor: `${option.color}14`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            marginRight: 14,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: option.color }} />
        </div>

        <div style={{ flex: 1 }}>
          <p
            className="font-['Manrope:Regular',sans-serif] uppercase"
            style={{ fontSize: 9, letterSpacing: "0.6px", color: option.color, marginBottom: 3 }}
          >
            {option.role}
          </p>
          <p
            className="font-['Manrope:Bold',sans-serif] font-bold"
            style={{ fontSize: 14, color: "#1a1a1a" }}
          >
            {option.label}
          </p>
        </div>

        {/* Chevron / arrow */}
        {!expanded && (
          <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
            <path d="M1 1l4 4.5L1 10" stroke="#b8afa9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      {/* Expanded link area */}
      {expanded && (
        <div style={{ borderTop: "1px solid #f0ece9", padding: "0 16px 16px" }}>
          <p
            className="font-['Manrope:Regular',sans-serif]"
            style={{ fontSize: 12, color: "#6b5e55", lineHeight: "18px", marginTop: 10, marginBottom: 14 }}
          >
            {option.description}
          </p>

          {/* Generated link box */}
          <div
            style={{
              backgroundColor: "#faf8f6",
              border: "1px solid #e6e1dc",
              borderRadius: 10,
              padding: "10px 12px",
              marginBottom: 12,
            }}
          >
            <p
              className="font-['Manrope:Regular',sans-serif] uppercase"
              style={{ fontSize: 8.5, letterSpacing: "0.7px", color: "#b8afa9", marginBottom: 4 }}
            >
              INVITE LINK
            </p>
            <p
              className="font-['Manrope:Medium',sans-serif] font-medium"
              style={{ fontSize: 12, color: "#1a1a1a", letterSpacing: "0.1px" }}
            >
              {generateLink(option.linkSuffix)}
            </p>
          </div>

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-center gap-[8px] cursor-pointer active:opacity-80 transition-all"
            style={{
              height: 44,
              backgroundColor: copied ? "#3d6b52" : "#7a3100",
              borderRadius: 10,
              transition: "background-color 0.2s ease",
            }}
          >
            <CopyIcon copied={copied} />
            <span
              className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
              style={{ fontSize: 11, letterSpacing: "0.6px", color: "#ffffff" }}
            >
              {copied ? "COPIED!" : "COPY LINK"}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export function InvitePanel({
  onBack,
  onShowToast,
}: {
  onBack: () => void;
  onShowToast: (msg: string) => void;
}) {
  return (
    <div className="flex flex-col min-h-full bg-[#fbf9f8]">
      <MenuScreenHeader onBack={onBack} label="MENU" />

      <div style={{ padding: "20px 20px 48px" }}>
        {/* Page header */}
        <p
          className="font-['Manrope:Regular',sans-serif] uppercase"
          style={{ fontSize: 10, letterSpacing: "1.1px", color: "#564239", marginBottom: 4 }}
        >
          COLLABORATION
        </p>
        <p
          className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
          style={{ fontSize: 22, letterSpacing: "-0.5px", color: "#1a1a1a", lineHeight: "26px", marginBottom: 4 }}
        >
          INVITE TEAM
        </p>
        <p
          className="font-['Manrope:Regular',sans-serif]"
          style={{ fontSize: 13, color: "#6b5e55", marginBottom: 24 }}
        >
          Share project access with your team members
        </p>

        {/* Info note */}
        <div
          style={{
            backgroundColor: "rgba(122,49,0,0.06)",
            borderRadius: 10,
            padding: "11px 14px",
            marginBottom: 20,
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
            <circle cx="12" cy="12" r="10" stroke="#7a3100" strokeWidth="1.8" />
            <path d="M12 8v4M12 16h.01" stroke="#7a3100" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <p
            className="font-['Manrope:Regular',sans-serif]"
            style={{ fontSize: 12, color: "#564239", lineHeight: "17px" }}
          >
            Links are valid for 7 days. Each role has customised access to project data.
          </p>
        </div>

        {/* Invite cards */}
        {INVITE_OPTIONS.map((option) => (
          <InviteCard
            key={option.id}
            option={option}
            onCopy={() => onShowToast("Link copied!")}
          />
        ))}
      </div>
    </div>
  );
}
