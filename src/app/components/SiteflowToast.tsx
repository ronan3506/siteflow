import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SiteflowToastProps {
  visible: boolean;
  message: string;
  onDismiss: () => void;
}

// Positioned just below the persistent SITEFLOW header (~61px scaled height).
const TOAST_TOP = 70;

export function SiteflowToast({ visible, message, onDismiss }: SiteflowToastProps) {
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(onDismiss, 2100);
    return () => clearTimeout(t);
  }, [visible, onDismiss]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="siteflow-toast"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 right-0 z-[60] flex justify-center pointer-events-none"
          style={{ top: TOAST_TOP }}
          aria-live="polite"
          aria-atomic="true"
        >
          <div
            className="flex items-center gap-[9px] px-[18px] rounded-[14px]"
            style={{
              height: 42,
              backgroundColor: "#3d6b52",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0px 6px 22px rgba(0,0,0,0.18), 0px 1px 3px rgba(0,0,0,0.10)",
            }}
          >
            {/* Check icon */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path
                d="M2.5 7.5L5.8 11L12.5 4"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Message */}
            <span
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 500,
                fontSize: 13,
                letterSpacing: "-0.1px",
                color: "#ffffff",
                whiteSpace: "nowrap",
              }}
            >
              {message}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
