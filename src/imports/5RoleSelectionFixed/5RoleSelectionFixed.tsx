import svgPaths from "./svg-xze5wifxs3";

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 flex flex-col font-['Inter:Black',sans-serif] font-black h-[42.452px] justify-center ml-0 mt-0 not-italic relative row-1 text-[29.501px] text-black tracking-[1.3963px] uppercase w-[188px]">
        <p className="leading-[42.144px]">s teFLOW</p>
      </div>
      <div className="col-1 h-[21.546px] ml-[17.46px] mt-[10.41px] relative row-1 w-[16.655px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6555 21.5459">
          <path d={svgPaths.p64c780} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-1/2" data-name="Container">
      <Group />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[42.452px] relative shrink-0 w-[188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function MdiExchange() {
  return (
    <div className="col-1 ml-[9.94px] mt-[2.58px] relative row-1 size-[25.833px]" data-name="mdi:exchange">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.8333 25.8333">
        <g clipPath="url(#clip0_1_559)" id="mdi:exchange">
          <path d={svgPaths.p2e913cc0} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_559">
            <rect fill="white" height="25.8333" width="25.8333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LangChangeButton() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Lang Change Button">
      <div className="bg-[#7a3100] col-1 h-[31px] ml-0 mt-0 relative rounded-[28.615px] row-1 w-[71.538px]" />
      <div className="capitalize col-1 flex flex-col font-['Outfit:Regular','Noto_Sans_Kannada:Regular',sans-serif] justify-center ml-[35.77px] mt-[2.58px] relative row-1 text-[15.296px] text-white tracking-[-0.1683px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'wght' 400" }}>
        <p className="leading-[1.5]">ಕನ್ನ</p>
      </div>
      <MdiExchange />
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="bg-[#fbf9f8] content-stretch flex h-[64px] items-center justify-between px-[24px] relative shrink-0 w-[390px]" data-name="Header - TopAppBar">
      <Container />
      <LangChangeButton />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#96593d] text-[32px] w-full">
        <p className="leading-[40px]">Who are you?</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#564239] text-[16px] w-full">
        <p className="leading-[24px]">Select your role</p>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Header Section">
      <Heading />
      <Container2 />
    </div>
  );
}

function HeaderSectionMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Header Section:margin">
      <HeaderSection />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[27px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 27">
        <g id="Container">
          <path d={svgPaths.pf251c40} fill="var(--fill-0, #564239)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">ARCHITECT</p>
        </div>
      </div>
    </div>
  );
}

function ButtonArchitectCard() {
  return (
    <div className="bg-[#f5f3f3] col-2 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-center justify-center justify-self-start px-[38.75px] py-[43.5px] relative rounded-[12px] row-1 self-start shrink-0" data-name="Button - Architect Card">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[27px] relative shrink-0 w-[32.85px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.85 27">
        <g id="Container">
          <path d={svgPaths.p3e5f5e80} fill="var(--fill-0, #564239)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">CONTRACTOR</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContractorCard() {
  return (
    <div className="bg-[#f5f3f3] col-1 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-center justify-center justify-self-start pl-[30.23px] pr-[30.24px] py-[43.5px] relative rounded-[12px] row-2 self-start shrink-0" data-name="Button - Contractor Card">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[27.038px] relative shrink-0 w-[27.788px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.7875 27.0375">
        <g id="Container">
          <path d={svgPaths.p2d750900} fill="var(--fill-0, #564239)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">WORKER</p>
        </div>
      </div>
    </div>
  );
}

function ButtonWorkerCard() {
  return (
    <div className="bg-[#f5f3f3] col-2 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-center justify-center justify-self-start pl-[48.34px] pr-[48.36px] py-[43.5px] relative rounded-[12px] row-2 self-start shrink-0" data-name="Button - Worker Card">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Container">
          <path d={svgPaths.p8fce480} fill="var(--fill-0, #7A3100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">CLIENT</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute right-[10px] size-[16.667px] top-[10px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">
          <path d={svgPaths.p6e98980} fill="var(--fill-0, #7A3100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonClientCardSelectedExample() {
  return (
    <div className="bg-white col-1 content-stretch drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25),0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-center justify-center justify-self-start pl-[53.13px] pr-[53.12px] py-[43.5px] relative rounded-[12px] row-1 self-start shrink-0" data-name="Button - Client Card (Selected Example)">
      <div aria-hidden="true" className="absolute border-2 border-[#7a3100] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function RoleGrid() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__155px_155px] relative shrink-0 w-full" data-name="Role Grid">
      <ButtonArchitectCard />
      <ButtonContractorCard />
      <ButtonWorkerCard />
      <ButtonClientCardSelectedExample />
    </div>
  );
}

function MainContent() {
  return (
    <div className="max-w-[448px] relative shrink-0 w-full" data-name="Main Content">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] pb-[358px] pt-[15px] px-[32px] relative size-full">
        <HeaderSectionMargin />
        <RoleGrid />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#7a3100] content-stretch flex h-[52px] items-center justify-center pb-[15.25px] pt-[13.75px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] h-[52px] left-0 right-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0" data-name="Button:shadow" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-white tracking-[0.375px] uppercase whitespace-nowrap">
        <p className="leading-[22.5px]">CONTINUE</p>
      </div>
    </div>
  );
}

function FooterBottomFixedAction() {
  return (
    <div className="absolute bg-[#fbf9f8] bottom-0 content-stretch flex flex-col items-start left-0 max-w-[448px] pb-[40px] pt-[16px] px-[32px] w-[390px]" data-name="Footer - Bottom Fixed Action">
      <Button />
    </div>
  );
}

export default function Component5RoleSelectionFixed() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(251, 249, 248) 0%, rgb(251, 249, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="5. Role Selection (Fixed)">
      <HeaderTopAppBar />
      <MainContent />
      <FooterBottomFixedAction />
    </div>
  );
}