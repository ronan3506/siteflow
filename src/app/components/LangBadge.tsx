import { useLang } from "../LanguageContext";

/**
 * The small pill shown in every screen header to indicate the selected language.
 * Reads directly from LanguageContext — no props needed.
 *
 * The exchange icon SVG path is embedded inline to avoid import coupling.
 */
const EXCHANGE_PATH =
  "M17.1458 9.4375L14.3333 6.625V8.625H5.20833V10.2917H14.3333V12.25L17.1458 9.4375ZM3.66667 14.7917L6.47917 17.6042V15.6042H15.6042V13.9375H6.47917V11.9792L3.66667 14.7917ZM10.4167 0.0625C4.78125 0.0625 0.208333 4.625 0.208333 10.25C0.208333 15.875 4.78125 20.4375 10.4167 20.4375C16.0521 20.4375 20.625 15.875 20.625 10.25C20.625 4.625 16.0521 0.0625 10.4167 0.0625ZM10.4167 18.7708C5.70833 18.7708 1.875 14.9375 1.875 10.25C1.875 5.5625 5.70833 1.72917 10.4167 1.72917C15.125 1.72917 18.9583 5.5625 18.9583 10.25C18.9583 14.9375 15.125 18.7708 10.4167 18.7708Z";

export function LangBadge() {
  const { badge, setShowLangSheet } = useLang();
  return (
    <button 
      onClick={() => setShowLangSheet(true)}
      className="bg-[#7a3100] h-[31px] rounded-[28.6px] flex items-center px-[14px] gap-[8px] cursor-pointer hover:bg-[#682a00] transition-colors active:scale-95"
    >
      <span className="capitalize font-['Outfit:Regular',sans-serif] text-[15.3px] text-white whitespace-nowrap leading-none">
        {badge}
      </span>
      <div className="size-[18px] shrink-0">
        <svg className="block size-full" viewBox="0 0 25.8333 25.8333" fill="none">
          <path d={EXCHANGE_PATH} fill="white" />
        </svg>
      </div>
    </button>
  );
}
