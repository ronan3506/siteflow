import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLang, type LangId } from "../LanguageContext";
import svgPaths from "../../imports/1LanguageSelectionCleaned/svg-9b2xstarpk";

const PRIMARY: { id: LangId; label: string }[] = [
  { id: "en", label: "English" },
  { id: "hi", label: "हिंदी (Hindi)" },
];

const MORE: { id: LangId; label: string }[] = [
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
            : "font-['Manrope:Bold',sans-serif] font-bold text-[#1b1c1c]"
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

export function LangSheet() {
  const { lang, setLang, showLangSheet, setShowLangSheet } = useLang();
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatePresence>
      {showLangSheet && (
        <div className="absolute inset-0 z-50 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLangSheet(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative bg-white rounded-t-[24px] shadow-2xl flex flex-col max-h-[85vh] overflow-hidden"
          >
            {/* Handle for dragging (visual only) */}
            <div className="w-full flex justify-center py-[12px]">
              <div className="w-[40px] h-[4px] rounded-full bg-black/15" />
            </div>

            <div className="px-[24px] pb-[16px]">
              <p className="font-['Manrope:Bold',sans-serif] font-bold text-[22px] text-[#1b1c1c] leading-[28.6px]">
                Select your language
              </p>
              <p className="font-['Manrope:Medium',sans-serif] font-medium text-[15px] text-[#564239] leading-[22.5px] mt-[4px]">
                Choose the language you are comfortable with
              </p>
            </div>

            <div className="no-scrollbar overflow-y-auto px-[24px] pb-[40px] flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[12px]">
                {PRIMARY.map((l) => (
                  <LangCard
                    key={l.id}
                    label={l.label}
                    selected={lang === l.id}
                    onClick={() => {
                      setLang(l.id);
                      setShowLangSheet(false);
                    }}
                  />
                ))}
              </div>

              <div className="flex flex-col gap-[12px]">
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
                      <div className="flex flex-col gap-[12px] pb-[12px]">
                        {MORE.map((l) => (
                          <LangCard
                            key={l.id}
                            label={l.label}
                            selected={lang === l.id}
                            onClick={() => {
                              setLang(l.id);
                              setShowLangSheet(false);
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
