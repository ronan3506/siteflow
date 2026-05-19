import imgImage3 from "../../../imports/4OnboardingFinalFixed/106e321b1f59737e2cc352adcc74edf479bd8003.png";
import svgPaths from "../../../imports/4OnboardingFinalFixed/svg-5hfjsbxx4a";
import { LangBadge } from "../LangBadge";

function Header() {
  return (
    <div className="absolute bg-[#faf8f7] flex h-[64px] items-center justify-between left-0 right-0 top-0 px-[24px]">
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
      <LangBadge />
    </div>
  );
}

function ChecklistRow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-[12px]">
      <div className="size-[20px] shrink-0">
        <svg viewBox="0 0 20 20" fill="none" className="block size-full">
          <path d={svgPaths.p1caa9380} fill="#7A3100" />
        </svg>
      </div>
      <span className="font-['Manrope:Medium',sans-serif] font-medium text-[17px] leading-[25.5px] text-[#1b1c1c] whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}

export function Screen4({ onNext }: { onNext: () => void }) {
  return (
    <div
      className="relative size-full"
      style={{ background: "#fbf9f8" }}
    >
      <Header />

      {/* Hero illustration */}
      <div className="absolute aspect-[1554/1911] left-[11.54%] right-[8.81%] top-[95px]">
        <img
          alt=""
          src={imgImage3}
          className="absolute inset-0 size-full object-cover pointer-events-none"
        />
      </div>

      {/* Title */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[562px] -translate-y-1/2 w-[239px] text-center">
        <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold text-[#9f4301] text-[32px] leading-[35.2px]">
          Track Progress
        </p>
      </div>

      {/* Checklist — matches Screens 2/3 alignment: centered block with two rows */}
      <div className="absolute left-0 right-0 top-[616px] flex justify-center">
        <div className="flex flex-col gap-[8px]">
          <ChecklistRow text="Tasks, updates, approvals" />
          <ChecklistRow text="Everything in one place" />
        </div>
      </div>

      {/* Pagination dots */}
      <div className="absolute h-[10px] left-0 top-[706px] w-full flex items-center justify-center gap-[8px]">
        <div className="bg-[#ddc1b4] rounded-full size-[10px]" />
        <div className="bg-[#ddc1b4] rounded-full size-[10px]" />
        <div className="bg-[#7a3100] rounded-full size-[10px]" />
      </div>

      {/* CTA — matches Next button structure from Screens 2/3 */}
      <button
        onClick={onNext}
        className="absolute bg-[#7a3100] h-[56px] left-[23px] top-[740px] w-[343px] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(122,49,0,0.2),0px_4px_6px_-4px_rgba(122,49,0,0.2)] flex items-center justify-center cursor-pointer active:scale-[0.97] transition-transform"
      >
        <span className="font-['Manrope:Bold',sans-serif] font-bold text-[18px] text-white leading-[28px]">
          Get Started
        </span>
      </button>
    </div>
  );
}