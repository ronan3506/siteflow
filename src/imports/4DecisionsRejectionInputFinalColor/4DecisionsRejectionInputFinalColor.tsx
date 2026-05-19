import svgPaths from "./svg-gwege7s0m6";
import imgAcLayoutChange from "./8c99a992d1b3b116e15bad3b102448ed92218e53.png";

function Container1() {
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

function Button() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[9999px] size-[40px] top-0" data-name="Button">
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-y-1/2 absolute h-[40px] left-[16px] top-1/2 w-[374px]" data-name="Container">
      <Button />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[56px] text-[#7a3100] text-[16px] top-[20px] tracking-[0.8px] uppercase whitespace-nowrap">
        <p className="leading-[24px] whitespace-pre">{`Review Decision  `}</p>
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="bg-[#f9fafb] h-[64px] mb-[-64px] relative shrink-0 w-[390px]" data-name="Header - TopAppBar">
      <Container />
    </div>
  );
}

function Container2() {
  return <div className="h-[67px] mb-[-67px] relative shrink-0 w-full" data-name="Container" />;
}

function AcLayoutChange() {
  return (
    <div className="h-[292.5px] opacity-90 relative shrink-0 w-full" data-name="AC Layout Change">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.33%] left-0 max-w-none top-[-16.67%] w-full" src={imgAcLayoutChange} />
      </div>
    </div>
  );
}

function HeroImageSection() {
  return (
    <div className="bg-[#f2efe9] content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Hero Image Section">
      <AcLayoutChange />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8c7b70] text-[11px] tracking-[1.1px] uppercase w-full">
        <p className="leading-[16.5px]">3. DECISIONS — REVIEW DETAIL</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[30px] tracking-[-0.75px] w-full">
        <p className="leading-[36px]">AC Layout Change</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Heading />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8c7b70] text-[18px] w-full">
        <p className="leading-[29.25px]">AC layout moved to avoid beam clash.</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#8c7b70] text-[10px] tracking-[0.5px] uppercase w-[29.53px]">
        <p className="leading-[15px]">COST</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[20px] w-[163.63px]">
        <p className="leading-[28px]">₹12,450 increase</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-[163.63px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[12px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
        <g id="Container">
          <path d={svgPaths.p33125000} fill="var(--fill-0, #7A3100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[21px] pt-[20px] relative shrink-0 w-full" data-name="Row 1">
      <div aria-hidden="true" className="absolute border-[#e5e0d8] border-b border-solid inset-0 pointer-events-none" />
      <Container6 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#8c7b70] text-[10px] tracking-[0.5px] uppercase w-[25.28px]">
        <p className="leading-[15px]">TIME</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[20px] w-[106.73px]">
        <p className="leading-[28px]">4 day delay</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-[106.73px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p256e1340} fill="var(--fill-0, #7A3100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[21px] pt-[20px] relative shrink-0 w-full" data-name="Row 2">
      <div aria-hidden="true" className="absolute border-[#e5e0d8] border-b border-solid inset-0 pointer-events-none" />
      <Container10 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#8c7b70] text-[10px] tracking-[0.5px] uppercase w-[24.45px]">
        <p className="leading-[15px]">RISK</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[20px] w-[51.11px]">
        <p className="leading-[28px]">None</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-[51.11px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p2b677030} fill="var(--fill-0, #7A3100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[21px] pt-[20px] relative shrink-0 w-full" data-name="Row 3">
      <div aria-hidden="true" className="absolute border-[#e5e0d8] border-b border-solid inset-0 pointer-events-none" />
      <Container14 />
      <Container17 />
    </div>
  );
}

function ImpactMatrix() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[9px] relative shrink-0 w-full" data-name="Impact Matrix">
      <Row />
      <Row1 />
      <Row2 />
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(140,123,112,0.5)] w-full">
          <p className="leading-[normal]">Ask a question...</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f2efe9] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[17px] py-[18px] relative size-full">
          <Container19 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e0d8] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[19px] relative shrink-0 w-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 19">
        <g id="Container">
          <path d={svgPaths.p17652a80} fill="var(--fill-0, #7A3100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bottom-[33.62%] content-stretch flex flex-col items-center justify-center right-[16px] top-[33.62%]" data-name="Button">
      <Container20 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <Button1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#7a3100] col-1 content-stretch flex flex-col items-center justify-center justify-self-start pl-[134.22px] pr-[134.23px] py-[20px] relative rounded-[12px] row-1 self-start shrink-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#fdfbf7] text-[14px] text-center tracking-[1.4px] uppercase w-[73.55px]">
        <p className="leading-[20px]">APPROVE</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="col-1 content-stretch flex flex-col items-center justify-center justify-self-start pl-[102.16px] pr-[102.17px] py-[22px] relative rounded-[12px] row-2 self-start shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#483c32] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#483c32] text-[14px] text-center tracking-[1.4px] uppercase w-[137.67px]">
        <p className="leading-[20px]">ASK FOR CHANGE</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__60px_64px] relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function ActionSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[17px] relative shrink-0 w-full" data-name="Action Section">
      <Container18 />
      <Container21 />
    </div>
  );
}

function ContentBody() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content Body">
      <div className="content-stretch flex flex-col gap-[23px] items-start pb-[32px] pt-[31px] px-[24px] relative size-full">
        <Container3 />
        <Container5 />
        <ImpactMatrix />
        <ActionSection />
      </div>
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[1160px] pb-[96px] pt-[64px] relative shrink-0 w-full" data-name="Main Content Canvas">
      <HeroImageSection />
      <ContentBody />
    </div>
  );
}

function Section() {
  return (
    <div className="h-[1374px] relative shrink-0 w-full" data-name="Section">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-between pb-[185.5px] px-[24px] relative size-full">
          <Container2 />
          <MainContentCanvas />
        </div>
      </div>
    </div>
  );
}

function MainBackgroundContextDecisionDetail() {
  return (
    <div className="blur-[2px] content-stretch flex flex-col items-start min-h-[884px] opacity-40 relative shrink-0 w-full" data-name="Main - Background Context (Decision Detail)">
      <Section />
    </div>
  );
}

function SheetDragHandle() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[8px] pt-[16px] relative shrink-0 w-full" data-name="Sheet Drag Handle">
      <div className="bg-[#d9cfc7] h-[6px] relative rounded-[9999px] shrink-0 w-[48px]" data-name="Background" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[24px] tracking-[-0.6px] w-full">
        <p className="leading-[32px]">Why are you rejecting?</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Header">
      <Heading1 />
      <div className="h-[4px] relative shrink-0 w-[48px]" data-name="Background">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Background" />
        </svg>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[12px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
        <g id="Container">
          <path d={svgPaths.p28cfa800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[1.2px] uppercase w-[79.2px]">
          <p className="leading-[16px]">ALIGNMENT</p>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#7a3100] col-1 content-stretch flex flex-col h-[77px] items-start justify-self-start pl-[17px] pr-[68.8px] py-[17px] relative rounded-[12px] row-1 self-start shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d9cfc7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Margin />
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[19.05px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19.05">
        <g id="Container">
          <path d={svgPaths.p1104fd00} fill="var(--fill-0, #7A3100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Container25 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#3d2b1f] text-[12px] text-center tracking-[1.2px] uppercase w-[67.22px]">
          <p className="leading-[16px]">MATERIAL</p>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#f5f1ee] col-2 content-stretch flex flex-col items-start justify-self-start pl-[17px] pr-[80.78px] py-[17px] relative rounded-[12px] row-1 self-start shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d9cfc7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Margin1 />
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[21px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
        <g id="Container">
          <path d={svgPaths.p13774060} fill="var(--fill-0, #7A3100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Container27 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#3d2b1f] text-[12px] text-center tracking-[1.2px] uppercase w-[58.47px]">
          <p className="leading-[16px]">QUALITY</p>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#f5f1ee] col-1 content-stretch flex flex-col items-start justify-self-start pl-[17px] pr-[89.53px] py-[17px] relative rounded-[12px] row-2 self-start shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d9cfc7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Margin2 />
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[21px] relative shrink-0 w-[19px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 21">
        <g id="Container">
          <path d={svgPaths.p1574ee00} fill="var(--fill-0, #7A3100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Container29 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#3d2b1f] text-[12px] text-center tracking-[1.2px] uppercase w-[87.48px]">
          <p className="leading-[16px]">INCOMPLETE</p>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#f5f1ee] col-2 content-stretch flex flex-col items-start justify-self-start pl-[17px] pr-[60.52px] py-[17px] relative rounded-[12px] row-2 self-start shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d9cfc7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Margin3 />
      <Container30 />
    </div>
  );
}

function OptionsGrid() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__82px_82px] relative shrink-0 w-full" data-name="Options Grid">
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Container31() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(112,94,82,0.6)] w-full">
          <p className="leading-[20px]">Type or record feedback...</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-[#f5f1ee] relative rounded-[12px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[77px] pt-[17px] px-[17px] relative size-full">
          <Container31 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9cfc7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[19px] relative shrink-0 w-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 19">
        <g id="Container">
          <path d={svgPaths.p19d8b800} fill="var(--fill-0, #7A3100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bottom-[16px] content-stretch flex flex-col items-center justify-center right-[16px]" data-name="Button">
      <Container32 />
    </div>
  );
}

function InputArea() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input Area">
      <Textarea />
      <Button8 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#fdfcfb] text-[14px] text-center tracking-[1.4px] uppercase w-[154.67px]">
        <p className="leading-[20px]">SUBMIT REJECTION</p>
      </div>
    </div>
  );
}

function Container34() {
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

function ActionButton() {
  return (
    <div className="bg-[#5c4033] relative rounded-[12px] shrink-0 w-full" data-name="Action Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[20px] relative size-full">
          <div className="absolute bg-[#7a3100] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(92,64,51,0.2),0px_4px_6px_-4px_rgba(92,64,51,0.2)]" data-name="Action Button:shadow" />
          <Container33 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[40px] pt-[8px] px-[24px] relative size-full">
        <Header />
        <OptionsGrid />
        <InputArea />
        <ActionButton />
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#fdfcfb] content-stretch drop-shadow-[0px_-10px_20px_rgba(61,43,31,0.2)] flex flex-col items-start max-w-[448px] relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Background+Shadow">
      <SheetDragHandle />
      <Container22 />
    </div>
  );
}

function RejectionBottomSheet() {
  return (
    <div className="absolute bottom-[3px] content-stretch flex flex-col items-start left-0 right-0" data-name="Rejection Bottom Sheet">
      <BackgroundShadow />
    </div>
  );
}

export default function Component4DecisionsRejectionInputFinalColor() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(253, 252, 251) 0%, rgb(253, 252, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="4. DECISIONS — Rejection Input (Final Color)">
      <HeaderTopAppBar />
      <MainBackgroundContextDecisionDetail />
      <div className="absolute backdrop-blur-[1px] bg-[rgba(61,43,31,0.6)] inset-0" data-name="Overlay / Scrim" />
      <RejectionBottomSheet />
    </div>
  );
}