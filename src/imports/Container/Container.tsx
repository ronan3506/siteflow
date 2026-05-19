function Container1() {
  return (
    <div className="absolute h-[241px] left-px top-0 w-[357px]" data-name="Container">
      <div className="absolute inset-[-2.49%_-1.68%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 369 253">
          <g filter="url(#filter0_f_197_84)" id="Container" style={{ mixBlendMode: "plus-darker" }}>
            <rect fill="#E8E8E8" height="241" transform="translate(6 6)" width="357" />
            <foreignObject height="253" width="369" x="0" y="0">
              <div style={{ backdropFilter: "blur(1px)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <g id="Overlay+OverlayBlur" data-figma-bg-blur-radius="2" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="253" id="filter0_f_197_84" width="369" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_197_84" stdDeviation="3" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container3() {
  return <div className="absolute h-[56px] left-0 top-0 w-[111px]" data-name="Container" />;
}

function Container4() {
  return <div className="absolute h-[24.5px] left-0 top-[60px] w-[111px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="absolute h-[84.5px] left-[122.5px] top-[20px] w-[111px]" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="absolute bg-[#e8f5e9] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[24.5px] left-[225.5px] rounded-[6px] top-[80px] w-[84px]" data-name="Background+Shadow">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[42px] text-[#2e7d32] text-[11px] text-center top-[12.25px] tracking-[0.55px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">ON TRACK</p>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] border border-[rgba(221,193,180,0.2)] border-solid h-[8px] left-0 overflow-clip rounded-[9999px] top-[16px] w-[316px]" data-name="Overlay+Border">
      <div className="absolute bg-[#7a3100] h-[6px] left-0 rounded-bl-[12px] rounded-tl-[12px] top-0 w-[213.52px]" data-name="Background" />
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute h-[24px] left-[20px] top-[104.5px] w-[316px]" data-name="Margin">
      <OverlayBorder />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[27px] left-[11px] top-[11px] w-[78px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[39px] text-[#7a3100] text-[18px] text-center top-[13.5px] whitespace-nowrap">
        <p className="leading-[27px]">03</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[27px] left-[11px] top-[38px] w-[78px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[39px] text-[#564239] text-[9px] text-center top-[13.5px] uppercase whitespace-nowrap">
        <p className="leading-[13.5px] mb-0">PENDING</p>
        <p className="leading-[13.5px]">DECISIONS</p>
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.85)] col-1 h-[76px] justify-self-stretch relative rounded-[12px] row-1 shrink-0" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.8)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[27px] left-[11px] top-[11px] w-[78px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[39px] text-[#ba1a1a] text-[18px] text-center top-[13.5px] whitespace-nowrap">
        <p className="leading-[27px]">02</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[14px] left-[11px] top-[38px] w-[78px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[39px] text-[#564239] text-[9px] text-center top-[7px] uppercase whitespace-nowrap">
        <p className="leading-[13.5px]">ACTIVE ISSUES</p>
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur1() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.85)] col-2 h-[76.5px] justify-self-stretch relative rounded-[12px] row-1 shrink-0" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.8)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[27px] left-[11px] top-[11px] w-[78px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[39px] text-[#1b1c1c] text-[18px] text-center top-[13.5px] whitespace-nowrap">
        <p className="leading-[27px]">42</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[14px] left-[11px] top-[38px] w-[78px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[39px] text-[#564239] text-[9px] text-center top-[7px] uppercase whitespace-nowrap">
        <p className="leading-[13.5px]">DAYS REMAINING</p>
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur2() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.85)] col-3 h-[76.5px] justify-self-stretch relative rounded-[12px] row-1 shrink-0" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.8)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_76px] left-0 top-[16px] w-[316px]" data-name="Container">
      <OverlayBorderShadowOverlayBlur />
      <OverlayBorderShadowOverlayBlur1 />
      <OverlayBorderShadowOverlayBlur2 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute h-[92px] left-[20px] top-[128.5px] w-[316px]" data-name="Margin">
      <Container5 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <Container1 />
      <Container2 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[267.5px] text-[#7a3100] text-[56px] text-center top-[48px] tracking-[-2.8px] whitespace-nowrap">
        <p className="leading-[56px]">78%</p>
      </div>
      <BackgroundShadow />
      <Margin />
      <Margin1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[21px] text-[#7a3100] text-[30px] top-[59px] tracking-[-0.75px] uppercase whitespace-nowrap">
        <p className="leading-[33px]">
          PROJECT
          <br aria-hidden="true" />
          STATUS
        </p>
      </div>
    </div>
  );
}