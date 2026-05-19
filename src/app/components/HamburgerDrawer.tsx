import { motion, AnimatePresence } from "motion/react";
import imgAvatar from "../../imports/3TaskAssignmentMobile-1/181963f2d49061eccafc8eb373f52a6dd6870927.png";

export type MenuAction =
  | "switchProfile"
  | "workerDashboard"
  | "approvals"
  | "resolvedIssues"
  | "completedTasks"
  | "invite"
  | "settings";

interface HamburgerDrawerProps {
  open: boolean;
  role: string;
  userName?: string;
  onClose: () => void;
  onAction: (action: MenuAction) => void;
}

const DRAWER_W = 280;

const ROLE_LABELS: Record<string, string> = {
  architect: "ARCHITECT",
  contractor: "CONTRACTOR",
  worker: "WORKER",
  client: "CLIENT",
};

function ChevronRight() {
  return (
    <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
      <path d="M1 1l4 4.5L1 10" stroke="#b8afa9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const CONTRACTOR_MENU: { key: MenuAction; label: string }[] = [
  { key: "switchProfile",   label: "SWITCH PROFILE"   },
  { key: "workerDashboard", label: "WORKER DASHBOARD"  },
  { key: "approvals",       label: "APPROVALS"         },
  { key: "resolvedIssues",  label: "RESOLVED ISSUES"   },
  { key: "completedTasks",  label: "COMPLETED TASKS"   },
  { key: "invite",          label: "INVITE"            },
  { key: "settings",        label: "SETTINGS"          },
];

export function HamburgerDrawer({
  open,
  role,
  userName = "Arjun Singh",
  onClose,
  onAction,
}: HamburgerDrawerProps) {
  const roleLabel = ROLE_LABELS[role] ?? role.toUpperCase();

  const handleItem = (key: MenuAction) => {
    onClose();
    setTimeout(() => onAction(key), 220);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 z-[70]"
            style={{ backgroundColor: "rgba(26,10,4,0.52)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            onClick={onClose}
          />

          {/* Drawer panel */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 z-[80] overflow-hidden flex flex-col"
            style={{
              width: DRAWER_W,
              backgroundColor: "#fbf9f8",
              boxShadow: "6px 0 32px rgba(26,10,4,0.20), 2px 0 8px rgba(26,10,4,0.08)",
            }}
            initial={{ x: -DRAWER_W }}
            animate={{ x: 0 }}
            exit={{ x: -DRAWER_W }}
            transition={{ type: "spring", stiffness: 320, damping: 32, mass: 0.9 }}
          >
            {/* ── Profile section ── */}
            <div
              style={{
                background: "linear-gradient(160deg, #f5e8dc 0%, #faf0e8 100%)",
                padding: "48px 24px 24px",
                position: "relative",
                flexShrink: 0,
              }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute cursor-pointer active:opacity-60 transition-opacity flex items-center justify-center"
                style={{
                  top: 14,
                  right: 14,
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  backgroundColor: "rgba(122,49,0,0.08)",
                }}
                aria-label="Close menu"
              >
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M1 1l9 9M10 1L1 10" stroke="#7a3100" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>

              {/* Avatar — decoding="sync" ensures no blank flash on mount */}
              <div
                style={{
                  width: 62,
                  height: 62,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2.5px solid #ddc1b4",
                  marginBottom: 13,
                  boxShadow: "0 2px 10px rgba(122,49,0,0.15)",
                  backgroundColor: "#e8d8cc",
                  flexShrink: 0,
                }}
              >
                <img
                  src={imgAvatar}
                  alt="Profile"
                  decoding="sync"
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <p
                className="font-['Manrope:Bold',sans-serif] font-bold"
                style={{ fontSize: 16, color: "#1a1a1a", lineHeight: "20px", marginBottom: 8 }}
              >
                {userName}
              </p>

              {/* Role badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "#7a3100",
                  borderRadius: 20,
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingTop: 4,
                  paddingBottom: 4,
                }}
              >
                <span
                  className="font-['Manrope:Bold',sans-serif] font-bold uppercase"
                  style={{ fontSize: 9, letterSpacing: "0.9px", color: "#ffffff" }}
                >
                  {roleLabel}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: 1, backgroundColor: "#e6e1dc", flexShrink: 0 }} />

            {/* ── Menu items — text-only, spacious rows ── */}
            <div style={{ flex: 1, paddingTop: 10, paddingBottom: 10 }}>
              {CONTRACTOR_MENU.map((item, i) => (
                <motion.button
                  key={item.key}
                  onClick={() => handleItem(item.key)}
                  className="w-full flex items-center cursor-pointer"
                  style={{
                    height: 66,
                    paddingLeft: 24,
                    paddingRight: 20,
                    background: "transparent",
                    borderBottom: i < CONTRACTOR_MENU.length - 1 ? "1px solid #f3ede9" : "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#f5ede7";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + i * 0.04, duration: 0.22, ease: "easeOut" }}
                >
                  <span
                    className="font-['Manrope:SemiBold',sans-serif] font-semibold uppercase flex-1 text-left"
                    style={{ fontSize: 11, letterSpacing: "0.8px", color: "#1a1a1a" }}
                  >
                    {item.label}
                  </span>
                  <ChevronRight />
                </motion.button>
              ))}
            </div>

            {/* ── Footer ── */}
            <div
              style={{
                borderTop: "1px solid #e6e1dc",
                padding: "13px 24px",
                flexShrink: 0,
              }}
            >
              <p
                className="font-['Manrope:Regular',sans-serif]"
                style={{ fontSize: 10, color: "#b8afa9", letterSpacing: "0.2px" }}
              >
                SITEFLOW v1.0 · Contractor Build
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
