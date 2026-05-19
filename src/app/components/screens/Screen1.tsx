import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../../imports/1LanguageSelectionCleaned/svg-9b2xstarpk";

const PRIMARY = [
  { id: "en", label: "English", font: "Manrope" },
  { id: "hi", label: "हिंदी (Hindi)", font: "Manrope, Noto_Sans_Devanagari" },
];

const MORE = [
  { id: "ta", label: "தமிழ் (Tamil)" },
  { id: "te", label: "తెలుగు (Telugu)" },
  { id: "kn", label: "ಕನ್ನಡ (Kannada)" },
  { id: "ml", label: "മലയാളം (Malayalam)" },
  { id: "bn", label: "বাংলা (Bengali)" },
  { id: "mr", label: "मराठी (Marathi)" },
  { id: "gu", label: "ગુજરાતી (Gujarati)" },
  { id: "pa", label: "ਪੰਜਾਬੀ (Punjabi)" },
];

function LangCard({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative h-[56px] w-full rounded-[12px] flex items-center justify-between px-[21px] transition-colors duration-200 ${
        selected ? "bg-[#ffdbcb]" : "bg-[#f5f3f3]"
      }`}
    >
      <div
        aria-hidden
        className={`absolute inset-0 rounded-[12px] pointer-events-none border ${
          selected ? "border-2 border-[#7a3100]" : "border-[#ddc1b4]"
        }`}
      />
      <span
        className={`leading-[22.5px] text-[15px] text-center whitespace-nowrap ${
          selected
            ? "font-['Manrope:Bold',sans-serif] font-bold text-[#7a3100]"
            : "font-['Manrope:Bold',_'Noto_Sans_Devanagari:Bold',_'Noto_Sans_Tamil:Bold',_'Noto_Sans_Telugu:Bold',_'Noto_Sans_Kannada:Bold',_'Noto_Sans_Malayalam:Bold',_'Noto_Sans_Bengali:Bold',_'Noto_Sans_Gujarati:Bold',_'Noto_Sans:Bold',sans-serif] font-bold text-[#1b1c1c]"
        }`}
      >
        {label}
      </span>
      {selected ? (
        <div className="size-[20px] relative shrink-0">
          <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p7b061c0} fill="#7A3100" />
          </svg>
        </div>
      ) : (
        <div className="size-[24px] rounded-full border border-[#ddc1b4] shrink-0" />
      )}
    </button>
  );
}

export function Screen1({
  onContinue,
  onLogin,
}: {
  onContinue: (lang: string) => void;
  onLogin: () => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  const enabled = selected !== null;

  return (
    <div
      className="relative size-full flex flex-col overflow-hidden"
      style={{ background: "#fbf9f8" }}
    >
      {/* decorative background */}
      <div className="absolute inset-[0_0_177px_0] opacity-5 pointer-events-none">
        <div className="absolute bg-[#7a3100] blur-[32px] left-[-80px] rounded-full size-[256px] top-[215px]" />
        <div className="absolute bg-[#7a3100] blur-[32px] bottom-[215px] right-[-80px] rounded-full size-[256px]" />
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-[64px] bg-[#fbf9f8] flex items-center justify-center px-4 z-10">
        <div className="inline-grid grid-cols-[max-content] grid-rows-[max-content] leading-[0] place-items-start relative shrink-0">
          <div className="col-start-1 row-start-1 flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic text-[29.501px] text-black tracking-[1.3963px] uppercase w-[188px] whitespace-nowrap">
            <p className="leading-[42.144px]">s teFLOW</p>
          </div>
          <div className="col-start-1 row-start-1 h-[21.546px] ml-[17.46px] mt-[10.41px] w-[16.655px] relative">
            <svg className="absolute inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6555 21.5459">
              <path d={svgPaths.p64c780} fill="black" />
            </svg>
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="no-scrollbar flex-1 overflow-y-auto overflow-x-hidden pt-[64px]">
        <div className="flex flex-col gap-[32px] pb-[172px] pt-[32px] px-[24px] w-full">
          {/* Title */}
          <div className="flex flex-col gap-[7px] items-center w-full">
            <p className="font-['Manrope:Bold',sans-serif] font-bold text-[22px] text-[#1b1c1c] leading-[28.6px]">
              Select your language
            </p>
            <p className="font-['Manrope:Medium',sans-serif] font-medium text-[15px] text-[#564239] leading-[22.5px] text-center">
              Choose the language you are comfortable with
            </p>
          </div>

          {/* Primary languages */}
          <div className="flex flex-col gap-[16px] w-full">
            {PRIMARY.map((l) => (
              <LangCard
                key={l.id}
                label={l.label}
                selected={selected === l.id}
                onClick={() => setSelected(l.id)}
              />
            ))}
          </div>

          {/* More languages toggle */}
          <div className="flex flex-col gap-[16px] w-full">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="flex gap-[8px] items-center px-[4px] self-start"
            >
              <span className="font-['Manrope:Bold',sans-serif] font-bold text-[15px] text-[#7a3100] leading-[22.5px]">
                More languages
              </span>
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="w-[7px] h-[4.317px] shrink-0"
              >
                <svg className="block" fill="none" viewBox="0 0 7 4.31667">
                  <path d={svgPaths.p1a9c9340} fill="#7A3100" />
                </svg>
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ overflow: "hidden", width: "100%" }}
                >
                  <div className="flex flex-col gap-[12px] w-full">
                    {MORE.map((l) => (
                      <LangCard
                        key={l.id}
                        label={l.label}
                        selected={selected === l.id}
                        onClick={() => setSelected(l.id)}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom — Continue + login shortcut */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-[6px] border-t border-[rgba(221,193,180,0.3)] flex flex-col items-center pt-[16px] pb-[36px] px-[24px] gap-[12px]">
        <motion.button
          whileTap={enabled ? { opacity: 0.82 } : {}}
          transition={{ duration: 0.12 }}
          disabled={!enabled}
          onClick={() => enabled && onContinue(selected!)}
          className={`h-[56px] w-full rounded-[12px] transition-all duration-250 font-['Manrope:Bold',sans-serif] font-bold text-[18px] text-white ${
            enabled
              ? "bg-[#7a3100] shadow-[0px_10px_15px_-3px_rgba(122,49,0,0.2),0px_4px_6px_-4px_rgba(122,49,0,0.2)]"
              : "bg-[#d9cfc8] cursor-not-allowed"
          }`}
        >
          Continue
        </motion.button>
        <button
          onClick={onLogin}
          className="font-['Manrope:Medium',sans-serif] font-medium text-[14px] text-[#7a3100] leading-[22px] underline underline-offset-2 decoration-[#7a3100]/60 active:opacity-60 transition-opacity"
        >
          Already have an account?
        </button>
      </div>
    </div>
  );
}
