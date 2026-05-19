import { createContext, useContext, useState, type ReactNode } from "react";

export type LangId =
  | "en" | "hi" | "ta" | "te" | "kn" | "ml" | "bn" | "mr" | "gu" | "pa";

export const LANG_LABELS: Record<LangId, string> = {
  en: "EN",
  hi: "हिं",
  ta: "தமி",
  te: "తెలు",
  kn: "ಕನ್ನ",
  ml: "മലയ",
  bn: "বাং",
  mr: "मरा",
  gu: "ગુજ",
  pa: "ਪੰਜ",
};

interface LangContextValue {
  lang: LangId;
  setLang: (l: LangId) => void;
  badge: string;
  showLangSheet: boolean;
  setShowLangSheet: (s: boolean) => void;
}

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  badge: "EN",
  showLangSheet: false,
  setShowLangSheet: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LangId>("en");
  const [showLangSheet, setShowLangSheet] = useState(false);
  const badge = LANG_LABELS[lang];
  return (
    <LangContext.Provider value={{ lang, setLang, badge, showLangSheet, setShowLangSheet }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
