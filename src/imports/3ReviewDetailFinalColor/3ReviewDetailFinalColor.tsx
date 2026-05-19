import svgPaths from "./svg-bf1xvuy53m";
import imgAcLayoutChange from "./9e03cc0fe5d2dd05269808484174846a4ae64867.png";

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
    <div className="bg-[#f9fafb] h-[64px] relative shrink-0 w-[390px]" data-name="Header - TopAppBar">
      <Container />
    </div>
  );
}

function Frame() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0.78)] h-[293px] left-0 to-[rgba(0,0,0,0)] top-0 w-[390px]" />;
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[30px] text-white tracking-[-0.75px] w-full">
        <p className="leading-[36px]">AC Layout Change</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[213px]" data-name="Container">
      <Heading />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] top-[249px] w-[342px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-white w-full">
        <p className="leading-[29.25px]">AC layout moved to avoid beam clash.</p>
      </div>
    </div>
  );
}

function AcLayoutChange() {
  return (
    <div className="h-[292.5px] opacity-90 overflow-clip relative shrink-0 w-full" data-name="AC Layout Change">
      <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgAcLayoutChange} />
      <Frame />
      <Container2 />
      <Container3 />
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

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#8c7b70] text-[10px] tracking-[0.5px] uppercase w-[29.53px]">
        <p className="leading-[15px]">COST</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] relative shrink-0 text-[#99161a] text-[20px] w-[163.63px]">
        <p className="leading-[28px]">₹12,450 increase</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-[163.63px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[12px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
        <g id="Container">
          <path d={svgPaths.p33125000} fill="var(--fill-0, #99161A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[21px] pt-[20px] relative shrink-0 w-full" data-name="Row 1">
      <div aria-hidden="true" className="absolute border-[#e5e0d8] border-b border-solid inset-0 pointer-events-none" />
      <Container4 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#8c7b70] text-[10px] tracking-[0.5px] uppercase w-[25.28px]">
        <p className="leading-[15px]">TIME</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] relative shrink-0 text-[#ea9f22] text-[20px] w-[106.73px]">
        <p className="leading-[28px]">4 day delay</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-[106.73px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p256e1340} fill="var(--fill-0, #EA9F22)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[21px] pt-[20px] relative shrink-0 w-full" data-name="Row 2">
      <div aria-hidden="true" className="absolute border-[#e5e0d8] border-b border-solid inset-0 pointer-events-none" />
      <Container8 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#8c7b70] text-[10px] tracking-[0.5px] uppercase w-[24.45px]">
        <p className="leading-[15px]">RISK</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] relative shrink-0 text-[#0d5e44] text-[20px] w-[51.11px]">
        <p className="leading-[28px]">None</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-[51.11px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p2b677030} fill="var(--fill-0, #0D5E44)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[21px] pt-[20px] relative shrink-0 w-full" data-name="Row 3">
      <div aria-hidden="true" className="absolute border-[#e5e0d8] border-b border-solid inset-0 pointer-events-none" />
      <Container12 />
      <Container15 />
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

function Frame1() {
  return (
    <div className="bg-[#f2efe9] h-[41px] relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[27px] py-[13px] relative size-full">
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black whitespace-nowrap">
            <p>
              <span className="leading-[28px]">{`Affects: `}</span>
              <span className="leading-[28px] text-[#8c7b70]">HVAC Installation, Ceiling Works</span>
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e0d8] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip p-[10px] top-0">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8c7b70] text-[12px] whitespace-nowrap">
        <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[16px] mb-0 whitespace-pre">DETAILS</p>
        <p className="leading-[16px] mb-0 whitespace-pre">​</p>
        <p className="leading-[16px] mb-0 whitespace-pre">Requested By</p>
        <p className="leading-[16px] mb-0 whitespace-pre">​</p>
        <p className="leading-[16px] mb-0 whitespace-pre">Reason</p>
        <p className="leading-[16px] mb-0 whitespace-pre">​</p>
        <p className="leading-[16px] mb-0 whitespace-pre">Reference</p>
        <p className="leading-[16px] mb-0 whitespace-pre">​</p>
        <p className="leading-[16px] whitespace-pre">Linked To</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[134px] overflow-clip p-[10px] top-[0.5px] w-[218px]">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8c7b70] text-[12px] text-right w-full whitespace-pre-wrap">
        <p className="decoration-solid font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[16px] mb-0 text-[#7a3100] underline">View Drawings</p>
        <p className="leading-[16px] mb-0">​</p>
        <p className="leading-[16px] mb-0">MEP Engineering Team</p>
        <p className="leading-[16px] mb-0">​</p>
        <p className="leading-[16px] mb-0">Avoid beam clash with duct routing</p>
        <p className="leading-[16px] mb-0">​</p>
        <p className="leading-[16px] mb-0">DRG-MEP-03-112 (Rev 2.4)</p>
        <p className="leading-[16px] mb-0">​</p>
        <p className="leading-[16px]">RFI #245 - Clash Report #09</p>
      </div>
    </div>
  );
}

function Container17() {
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
        <div className="content-stretch flex items-start justify-center pb-[55px] pt-[18px] px-[17px] relative size-full">
          <Container17 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e0d8] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container18() {
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
    <div className="absolute bottom-[40%] content-stretch flex flex-col items-center justify-center right-[16px] top-[40%]" data-name="Button">
      <Container18 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[189.5px]" data-name="Container">
      <Input />
      <Button1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 size-[8.167px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
        <g id="Container">
          <path d={svgPaths.p2317cf00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#ba1a1a] content-stretch flex gap-[8px] h-[56px] items-center justify-center relative rounded-[12px] shrink-0 w-[107px]" data-name="Button">
      <Container21 />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[-0.3px] uppercase w-[59.106px]">
        <p className="leading-[16px]">REJECT</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[7.015px] relative shrink-0 w-[12.775px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.775 7.01458">
        <g id="Container">
          <path d={svgPaths.p32d13d00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#7a3100] content-stretch flex gap-[8px] h-[56px] items-center justify-center relative rounded-[12px] shrink-0 w-[213px]" data-name="Button">
      <Container22 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[-0.3px] uppercase w-[84.653px]">
        <p className="leading-[16px]">APPROVE</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="col-1 content-stretch flex gap-[24px] items-start justify-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__60px_64px] h-[136px] left-0 right-0 top-[315.5px]" data-name="Container">
      <Container20 />
    </div>
  );
}

function ActionSection() {
  return (
    <div className="h-[390px] relative shrink-0 w-full" data-name="Action Section">
      <Frame2 />
      <Frame3 />
      <Container16 />
      <Container19 />
    </div>
  );
}

function ContentBody() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content Body">
      <div className="content-stretch flex flex-col gap-[9px] items-start pb-[32px] px-[24px] relative size-full">
        <ImpactMatrix />
        <Frame1 />
        <ActionSection />
      </div>
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[1160px] pb-[96px] pt-[2px] relative shrink-0 w-full" data-name="Main Content Canvas">
      <HeroImageSection />
      <ContentBody />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p12a32500} fill="var(--fill-0, #8C7B70)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#8c7b70] text-[10px] tracking-[-0.25px] w-[28.13px]">
        <p className="leading-[15px]">HOME</p>
      </div>
    </div>
  );
}

function LinkHome() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Link - HOME">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
          <Container23 />
          <Margin />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[19px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
        <g id="Container">
          <path d={svgPaths.p19ed9400} fill="var(--fill-0, #FDFBF7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#fdfbf7] text-[10px] tracking-[-0.25px] w-[51.19px]">
        <p className="leading-[15px]">DECISIONS</p>
      </div>
    </div>
  );
}

function LinkDecisionsActive() {
  return (
    <div className="bg-[#7a3100] flex-[1_0_0] h-full min-w-px relative" data-name="Link - DECISIONS (Active)">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
          <Container24 />
          <Margin1 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[19px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
        <g id="Container">
          <path d={svgPaths.p7555480} fill="var(--fill-0, #8C7B70)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#8c7b70] text-[10px] tracking-[-0.25px] w-[34.17px]">
        <p className="leading-[15px]">ISSUES</p>
      </div>
    </div>
  );
}

function LinkIssues() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Link - ISSUES">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
          <Container25 />
          <Margin2 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[12px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
        <g id="Container">
          <path d={svgPaths.p3baffdc0} fill="var(--fill-0, #8C7B70)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#8c7b70] text-[10px] tracking-[-0.25px] w-[42.45px]">
        <p className="leading-[15px]">TIMELINE</p>
      </div>
    </div>
  );
}

function LinkTimeline() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Link - TIMELINE">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
          <Container26 />
          <Margin3 />
        </div>
      </div>
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute bg-[#fdfbf7] bottom-0 content-stretch flex h-[64px] items-start justify-center left-0 pt-px w-[390px]" data-name="BottomNavBar">
      <div aria-hidden="true" className="absolute border-[#e5e0d8] border-solid border-t inset-0 pointer-events-none" />
      <LinkHome />
      <LinkDecisionsActive />
      <LinkIssues />
      <LinkTimeline />
    </div>
  );
}

export default function Component3ReviewDetailFinalColor() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(253, 251, 247) 0%, rgb(253, 251, 247) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="3. Review Detail (Final Color)">
      <HeaderTopAppBar />
      <MainContentCanvas />
      <BottomNavBar />
    </div>
  );
}