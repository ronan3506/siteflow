import svgPaths from "./svg-53ip3ueiw8";
import imgStructuralDetail from "./5dd70c5b2774948923ca0ca27c8da84536a120c8.png";

function Container() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p12a32500} fill="var(--fill-0, #564239)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-[15px] justify-center leading-[0] relative shrink-0 text-[#564239] text-[10px] tracking-[1px] uppercase w-[33.13px]">
        <p className="leading-[15px]">HOME</p>
      </div>
    </div>
  );
}

function LinkHomeActive() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[63px] items-center justify-center ml-0 mt-0 relative row-1 w-[97.5px]" data-name="Link - Home Active">
      <Container />
      <Margin />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-[15px] justify-center leading-[0] relative shrink-0 text-[#564239] text-[10px] tracking-[1px] uppercase w-[36.7px]">
        <p className="leading-[15px]">TASKS</p>
      </div>
    </div>
  );
}

function LinkDecisions() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[63px] items-center justify-center ml-[97.5px] mt-0 relative row-1 w-[97.5px]" data-name="Link - Decisions">
      <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
          <path d={svgPaths.p31c91580} fill="var(--fill-0, #564239)" id="Icon" />
        </svg>
      </div>
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[19px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
        <g id="Container">
          <path d={svgPaths.p7555480} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-white tracking-[1px] uppercase w-[41.67px]">
        <p className="leading-[15px]">ISSUES</p>
      </div>
    </div>
  );
}

function LinkIssues() {
  return (
    <div className="bg-[#7a3100] col-1 content-stretch flex flex-col h-[63px] items-center justify-center ml-[195px] mt-0 relative row-1 w-[97.5px]" data-name="Link - Issues">
      <Container2 />
      <Margin1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[12px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
        <g id="Container">
          <path d={svgPaths.p3baffdc0} fill="var(--fill-0, #564239)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-[15px] justify-center leading-[0] relative shrink-0 text-[#564239] text-[10px] tracking-[1px] uppercase w-[52.45px]">
        <p className="leading-[15px]">TIMELINE</p>
      </div>
    </div>
  );
}

function LinkTimeline() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[63px] items-center justify-center ml-[292.5px] mt-0 relative row-1 w-[97.5px]" data-name="Link - Timeline">
      <Container3 />
      <Margin2 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <LinkHomeActive />
      <LinkDecisions />
      <LinkIssues />
      <LinkTimeline />
    </div>
  );
}

function BottomNavBarShell() {
  return (
    <div className="absolute bg-[#fbf9f8] content-stretch flex h-[64px] items-start justify-center left-0 pt-px top-[1149.29px] w-[390px]" data-name="BottomNavBar Shell">
      <div aria-hidden="true" className="absolute border-[#8a7267] border-solid border-t inset-0 pointer-events-none" />
      <Group />
    </div>
  );
}

function StructuralDetail() {
  return (
    <div className="h-[292.5px] opacity-90 relative shrink-0 w-full" data-name="Structural Detail">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStructuralDetail} />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[16px] top-[16px]">
      <div className="absolute bg-[#fff3e0] h-[23.277px] left-0 rounded-[4.988px] top-0 w-[82.301px]" data-name="Rectangle" />
      <p className="absolute font-['Manrope:Bold',sans-serif] font-bold leading-[normal] left-[6.65px] text-[#f5a623] text-[9.145px] top-[4.99px] tracking-[0.3658px] whitespace-nowrap">WORK PAUSED</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[16px] top-[16px]">
      <Group2 />
    </div>
  );
}

function HeroImageSection() {
  return (
    <div className="bg-[#f7f3f0] content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full z-[2]" data-name="Hero Image Section">
      <StructuralDetail />
      <Group1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6d5d53] text-[11px] tracking-[1.1px] w-full">
        <p className="leading-[16.5px]">ISSUE ID: 294-B</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[36px] tracking-[-1.08px] w-full">
        <p className="leading-[39.6px]">COLUMN NOT STRAIGHT</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[7.295px] items-start relative shrink-0 w-full" data-name="Header">
      <Container4 />
      <Heading />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6d5d53] text-[10px] uppercase w-full">
          <p className="leading-[15px]">ZONE</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f7f3f0] col-1 drop-shadow-[0px_0px_2.35px_rgba(0,0,0,0.25)] justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5e0db] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[21px] relative size-full">
        <Container5 />
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[18px] w-[91.91px]">
          <p className="leading-[28px]">Sector B-4</p>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6d5d53] text-[10px] uppercase w-full">
          <p className="leading-[15px]">DEVIATION</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f7f3f0] col-2 drop-shadow-[0px_0px_2.35px_rgba(0,0,0,0.25)] justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5e0db] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[21px] relative size-full">
        <Container6 />
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] relative shrink-0 text-[#b23b3b] text-[18px] w-[66.98px]">
          <p className="leading-[28px]">12.5mm</p>
        </div>
      </div>
    </div>
  );
}

function StatusLocationBento() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_89px] relative shrink-0 w-full" data-name="Status & Location Bento">
      <BackgroundBorder />
      <BackgroundBorder1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d241e] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">THE PROBLEM</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6d5d53] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">Critical alignment failure detected during</p>
        <p className="leading-[22.75px] mb-0">the morning inspection. Structural column</p>
        <p className="mb-0">
          <span className="font-['Manrope:Regular',sans-serif] font-normal leading-[22.75px] text-[#2d241e]">C-12</span>
          <span className="leading-[22.75px]">{` is slightly off position in `}</span>
          <span className="font-['Manrope:Regular',sans-serif] font-normal leading-[22.75px] text-[#2d241e]">Zone B</span>
          <span className="leading-[22.75px]">.</span>
        </p>
        <p className="leading-[22.75px] mb-0">Verticality exceeds tolerance limits for the</p>
        <p className="leading-[22.75px] mb-0">load-bearing deck installation scheduled for</p>
        <p className="leading-[22.75px]">tomorrow.</p>
      </div>
    </div>
  );
}

function SectionProblemDescription() {
  return (
    <div className="bg-[#f7f3f0] drop-shadow-[0px_0px_2.35px_rgba(0,0,0,0.25)] relative rounded-[12px] shrink-0 w-full" data-name="Section - Problem Description">
      <div className="content-stretch flex flex-col gap-[14.875px] items-start p-[24px] relative size-full">
        <Heading1 />
        <Container7 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6d5d53] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">REQUIRED ACTIONS</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#fdfcfb] text-[14px] text-center tracking-[1.4px] uppercase w-[150.84px]">
        <p className="leading-[20px]">GIVE INSTRUCTION</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, #FDFCFB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#7a3100] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[20px] pt-[24px] px-[24px] relative size-full">
          <Container8 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#2d241e] text-[14px] text-center tracking-[1.4px] uppercase w-[102.38px]">
          <p className="leading-[20px]">APPROVE FIX</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1caa9380} fill="var(--fill-0, #2D241E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f7f3f0] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e0db] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[25px] py-[21px] relative size-full">
          <Container10 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#2d241e] text-[14px] text-center tracking-[1.4px] uppercase w-[114.36px]">
          <p className="leading-[20px]">REQUEST INFO</p>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2816f2c0} fill="var(--fill-0, #2D241E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f7f3f0] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e0db] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[25px] py-[21px] relative size-full">
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function ActionSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Action Section">
      <Heading2 />
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function ArticleIssueContent() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Article - Issue Content">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[24px] pt-[23px] px-[24px] relative size-full">
        <Header />
        <StatusLocationBento />
        <SectionProblemDescription />
        <ActionSection />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col isolate items-start left-0 max-w-[448px] right-0 top-[64px]" data-name="Main">
      <HeroImageSection />
      <ArticleIssueContent />
    </div>
  );
}

function Container15() {
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

function Button3() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[9999px] size-[40px] top-0" data-name="Button">
      <Container15 />
    </div>
  );
}

function Container14() {
  return (
    <div className="-translate-y-1/2 absolute h-[40px] left-[16px] top-1/2 w-[374px]" data-name="Container">
      <Button3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[56px] text-[#7a3100] text-[16px] top-[20px] tracking-[0.8px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">View issues</p>
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[64px] left-1/2 top-0 w-[390px]" data-name="Header - TopAppBar">
      <Container14 />
    </div>
  );
}

export default function Component6IssuesDetailIssueViewFinalColor() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(253, 252, 251) 0%, rgb(253, 252, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="6. ISSUES — Detail (Issue View) (Final Color)">
      <BottomNavBarShell />
      <Main />
      <HeaderTopAppBar />
    </div>
  );
}