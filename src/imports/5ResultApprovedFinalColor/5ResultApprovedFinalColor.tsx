import svgPaths from "./svg-i9ws3ev7sc";

function Container1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Container">
          <path d={svgPaths.pf059c0} fill="var(--fill-0, #4CAF50)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function SuccessIcon() {
  return (
    <div className="bg-[#e8f5e9] content-stretch flex items-center justify-center relative rounded-[124px] shrink-0 size-[138px]" data-name="Success Icon">
      <Container1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[36px] justify-center leading-[0] relative shrink-0 text-[#3e2723] text-[30px] text-center tracking-[-0.75px] w-[226.09px]">
        <p className="leading-[36px]">Task Completed</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[14px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14">
        <g id="Container">
          <path d={svgPaths.pcb8380} fill="var(--fill-0, #4CAF50)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#e8f5e9] content-stretch flex gap-[6px] items-center px-[16px] py-[6px] relative rounded-[9999px] shrink-0" data-name="Background">
      <Container2 />
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] relative shrink-0 text-[#4caf50] text-[12px] text-center w-[58.995px]">
        <p className="leading-[16px]">Approved</p>
      </div>
    </div>
  );
}

function HeadlinesStatus() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="Headlines & Status">
      <Heading />
      <Background />
    </div>
  );
}

function HeadlinesStatusMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0" data-name="Headlines & Status:margin">
      <HeadlinesStatus />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3e2723] text-[16px] w-full">
        <p className="leading-[24px]">Summary</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#7a3100] text-[12px] tracking-[0.6px] uppercase w-[46.03px]">
        <p className="leading-[16px]">TASK ID</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#3e2723] text-[14px] w-[77.73px]">
        <p className="leading-[20px]">#TSK-8902</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f8f6f2] relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative size-full">
          <Container4 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#7a3100] text-[12px] tracking-[0.6px] uppercase w-[81.56px]">
        <p className="leading-[16px]">ASSIGNED TO</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#3e2723] text-[14px] w-[89.84px]">
        <p className="leading-[20px]">Ramu Kinavar</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f8f6f2] relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative size-full">
          <Container6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Background1 />
      <Background2 />
    </div>
  );
}

function DetailsSection() {
  return (
    <div className="bg-[#f3f1ed] relative rounded-[16px] shrink-0 w-full" data-name="Details Section">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <Heading1 />
        <Container3 />
      </div>
    </div>
  );
}

function DetailsSectionMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" data-name="Details Section:margin">
      <DetailsSection />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center max-w-[384px] relative shrink-0 w-full" data-name="Container">
      <SuccessIcon />
      <HeadlinesStatusMargin />
      <DetailsSectionMargin />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute bg-[#faf9f6] content-stretch flex flex-col items-center justify-center left-0 pb-[150px] pt-[81px] px-[24px] right-0 top-[64px]" data-name="Main Content">
      <Container />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[74.88px]">
        <p className="leading-[24px]">Next Task</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.p32510800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <Container9 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#7a3100] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex-[1_0_0] max-w-[384px] min-w-px relative rounded-[12px]" data-name="Button">
      <div className="flex flex-row items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center max-w-[inherit] px-[24px] py-[16px] relative size-full">
          <Container8 />
          <Margin />
        </div>
      </div>
    </div>
  );
}

function FooterBottomActionArea() {
  return (
    <div className="absolute bg-[#faf9f6] bottom-[54px] content-stretch flex items-start justify-center left-0 p-[24px] right-0" data-name="Footer - Bottom Action Area">
      <Button />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[15px] relative shrink-0 w-[9.09px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.09005 15">
        <g id="Container">
          <path d={svgPaths.p2ca96600} fill="var(--fill-0, #7A3100)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[9999px] size-[40px] top-0" data-name="Button">
      <Container11 />
    </div>
  );
}

function Container10() {
  return (
    <div className="-translate-y-1/2 absolute h-[40px] left-[16px] top-1/2 w-[374px]" data-name="Container">
      <Button1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[56px] text-[#7a3100] text-[16px] top-[20px] tracking-[0.8px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">STATUS</p>
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute bg-[#fdfbf9] h-[64px] left-0 top-0 w-[390px]" data-name="Header - TopAppBar">
      <Container10 />
    </div>
  );
}

export default function Component5ResultApprovedFinalColor() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(250, 249, 246) 0%, rgb(250, 249, 246) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="5. Result (Approved) - Final Color">
      <MainContent />
      <FooterBottomActionArea />
      <HeaderTopAppBar />
    </div>
  );
}