import svgPaths from "./svg-fjo5syj5my";
import imgAb6AXuDNtyiOZoLiMpRiJmvIzoo3L74LsUxX8OmbYtwPh24A7LLDqOhhHq70O2SrHznve614Dejh8W5XXvZGdQ5IrwnQc4X8Evj3QSjbhYirmgr3FdeNaPRk2U6Muq3TR033IG4XfTfEwEiBMurppHBsPe7TQgZkBhono8PUfEqYgWsywNXeMj51NKpXqYSnOrjRe7YdE5ONghNtizsm0IJo2JyzWx92REjGSsh82D6Lx0Rfko7Gh4Yzdu7OUrgF4COiTfXlUic from "./d6698214b01f936b8b0315eea3a42a14e2174325.png";

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
    <div className="absolute content-stretch flex flex-col items-start left-[30.75px] top-[36px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-[15px] justify-center leading-[0] relative shrink-0 text-[#564239] text-[10px] tracking-[1px] uppercase w-[36.7px]">
        <p className="leading-[15px]">TASKS</p>
      </div>
    </div>
  );
}

function LinkDecisions() {
  return (
    <div className="bg-[#fbf9f8] col-1 h-[63px] ml-[97.5px] mt-0 relative row-1 w-[97.5px]" data-name="Link - Decisions">
      <div className="absolute h-[20px] left-[39.75px] top-[12px] w-[18px]" data-name="Icon">
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
    <div className="absolute bg-[#fbf9f8] content-stretch flex h-[64px] items-start justify-center left-[-0.08px] pt-px top-[1037px] w-[412px]" data-name="BottomNavBar Shell">
      <div aria-hidden="true" className="absolute border-[#8a7267] border-solid border-t inset-0 pointer-events-none" />
      <Group />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[364px]" data-name="Heading 1">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#1a1a1a] text-[32px] top-[20px] tracking-[-0.9px] uppercase whitespace-nowrap">
        <p className="leading-[40px]">URGENT ISSUES</p>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="absolute h-[32px] left-0 top-[48px] w-[364px]" data-name="VerticalBorder">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#6b5e55] text-[16px] top-[16px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[24px]">Problems on site needing review.</p>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="absolute h-[80px] left-[24px] top-[5px] w-[364px]" data-name="Header Section">
      <Heading />
      <VerticalBorder />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[15px] left-[25px] top-[25px] w-[113px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#6b5e55] text-[10px] top-[7.5px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">ACTIVE NOW</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f7f4f2] col-1 h-[108.5px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e6e1dc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container4 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[25px] text-[#1a1a1a] text-[36px] top-[63.5px] tracking-[-1.8px] whitespace-nowrap">
        <p className="leading-[40px]">03</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[113px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#6b5e55] text-[10px] top-[7.5px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">STATUS</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="absolute h-[19px] left-[25px] top-[25px] w-[113px]" data-name="Margin">
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[16px] left-[18px] top-0 w-[53.88px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#b23b3b] text-[12px] top-[8px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">CRITICAL</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[16px] left-[25px] top-[52px] w-[113px]" data-name="Container">
      <div className="absolute bg-[#b23b3b] left-0 rounded-[9999px] size-[10px] top-[3px]" data-name="Background" />
      <Container7 />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f7f4f2] col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e6e1dc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Margin3 />
      <Container6 />
    </div>
  );
}

function StatsBento() {
  return (
    <div className="absolute gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_109px] left-[24px] top-[117px] w-[364px]" data-name="Stats Bento">
      <BackgroundBorder />
      <BackgroundBorder1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[182.73px]" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#1a1a1a] text-[18px] top-[14px] tracking-[-0.45px] whitespace-nowrap">
        <p className="leading-[28px]">Column Not Straight</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#f7f4f2] h-[19px] left-0 rounded-[12px] top-[0.01px] w-[90.123px]" data-name="Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[8px] text-[#6b5e55] text-[10px] top-[9.5px] tracking-[-0.25px] whitespace-nowrap">
        <p className="leading-[15px]">GROUND FLOOR</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#fff3e0] h-[19.021px] left-0 rounded-[4.684px] top-0 w-[80.607px]" data-name="Rectangle" />
      <p className="absolute font-['Manrope:Bold',sans-serif] font-bold leading-[normal] left-[7.92px] text-[#f5a623] text-[8.587px] top-[3.51px] tracking-[0.3435px] whitespace-nowrap">WORK PAUSED</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[19.021px] left-[102.12px] top-0 w-[80.607px]" data-name="Container">
      <Group2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[19.021px] left-0 top-[32px] w-[182.73px]" data-name="Container">
      <Background />
      <Container13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[51.021px] left-0 top-0 w-[182.73px]" data-name="Container">
      <Heading1 />
      <Container12 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#7a3100] h-[31px] left-[254.72px] rounded-[12px] top-0 w-[61.28px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[30px] text-[#fdfcfb] text-[10px] text-center top-[15.5px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">VIEW</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[51.021px] left-[20px] top-[20px] w-[316px]" data-name="Container">
      <Container11 />
      <Button />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[91.021px] left-[6px] top-0 w-[356px]" data-name="Container">
      <Container10 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[91.021px] left-0 top-0 w-[362px]" data-name="Container">
      <div className="absolute bg-[#f9b74a] h-[91.021px] left-0 top-0 w-[6px]" data-name="Background" />
      <Container9 />
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-[#fdfcfb] border border-[#e6e1dc] border-solid h-[93.021px] left-0 overflow-clip rounded-[16px] shadow-[0px_0px_4.7px_0px_rgba(0,0,0,0.25)] top-0 w-[364px]" data-name="Card 1">
      <Container8 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[185.313px]" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#1a1a1a] text-[18px] top-[14px] tracking-[-0.45px] whitespace-nowrap">
        <p className="leading-[28px]">Water leak</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#f7f4f2] h-[19px] left-0 rounded-[12px] top-[0.01px] w-[75.15px]" data-name="Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[8px] text-[#6b5e55] text-[10px] top-[9.5px] tracking-[-0.25px] whitespace-nowrap">
        <p className="leading-[15px]">FIRST FLOOR</p>
      </div>
    </div>
  );
}

function Container20() {
  return <div className="absolute h-[10.5px] left-0 top-[4.26px] w-[2.333px]" data-name="Container" />;
}

function Group1() {
  return (
    <div className="absolute contents left-[6.33px] top-0">
      <div className="absolute bg-[#ffebee] h-[19.021px] left-[6.33px] rounded-[4.684px] top-0 w-[91.83px]" data-name="Rectangle" />
      <p className="absolute font-['Manrope:Bold',sans-serif] font-bold leading-[normal] left-[16.75px] text-[#c62828] text-[8.587px] top-[3.51px] tracking-[0.3435px] whitespace-nowrap">URGENT REVIEW</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[19.021px] left-[87.15px] top-0 w-[98.163px]" data-name="Container">
      <Container20 />
      <Group1 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[19.021px] left-0 top-[32px] w-[185.313px]" data-name="Container">
      <Background1 />
      <Container19 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[51.021px] left-0 top-0 w-[185.313px]" data-name="Container">
      <Heading2 />
      <Container18 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#7a3100] h-[31px] left-[254.72px] rounded-[12px] top-0 w-[61.28px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[30px] text-[#fdfcfb] text-[10px] text-center top-[15.5px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">VIEW</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[51.021px] left-[20px] top-[20px] w-[316px]" data-name="Container">
      <Container17 />
      <Button1 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[91.021px] left-[6px] top-0 w-[356px]" data-name="Container">
      <Container16 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[91.021px] left-0 top-0 w-[362px]" data-name="Container">
      <div className="absolute bg-[#b23b3b] h-[91.021px] left-0 top-0 w-[6px]" data-name="Background" />
      <Container15 />
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-[#fdfcfb] border border-[#e6e1dc] border-solid h-[93.021px] left-0 overflow-clip rounded-[16px] shadow-[0px_0px_4.7px_0px_rgba(0,0,0,0.25)] top-[109.02px] w-[364px]" data-name="Card 2">
      <Container14 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[250.83px]" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#1a1a1a] text-[18px] top-[14px] tracking-[-0.45px] whitespace-nowrap">
        <p className="leading-[28px]">Safety railing damaged</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#f7f4f2] h-[19px] left-0 rounded-[12px] top-[0.01px] w-[64px]" data-name="Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-[8px] text-[#6b5e55] text-[10px] top-[9.5px] tracking-[-0.25px] whitespace-nowrap">
        <p className="leading-[15px]">TERRENCE</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[19.021px] left-0 top-[32px] w-[250.83px]" data-name="Container">
      <Background2 />
      <div className="absolute bg-[#ffebee] h-[19.021px] left-[93.15px] rounded-[4.684px] top-[-0.04px] w-[91.83px]" data-name="Rectangle" />
      <p className="absolute font-['Manrope:Bold',sans-serif] font-bold leading-[normal] left-[102.15px] text-[#c62828] text-[8.587px] top-[3.96px] tracking-[0.3435px] whitespace-nowrap">URGENT REVIEW</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[51.021px] left-0 top-0 w-[250.83px]" data-name="Container">
      <Heading3 />
      <Container25 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#7a3100] h-[31px] left-[255.15px] rounded-[12px] top-[-0.04px] w-[61.28px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[30px] text-[#fdfcfb] text-[10px] text-center top-[15.5px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">VIEW</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[51.021px] left-[20px] top-[20px] w-[316px]" data-name="Container">
      <Container24 />
      <Button2 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[91.021px] left-[6px] top-0 w-[356px]" data-name="Container">
      <Container23 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[91.021px] left-0 top-0 w-[362px]" data-name="Container">
      <div className="absolute bg-[#b23b3b] h-[91.021px] left-0 top-0 w-[6px]" data-name="Background" />
      <Container22 />
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-[#fdfcfb] border border-[#e6e1dc] border-solid h-[93.021px] left-0 overflow-clip rounded-[16px] shadow-[0px_0px_4.7px_0px_rgba(0,0,0,0.25)] top-[218.04px] w-[364px]" data-name="Card 3">
      <Container21 />
    </div>
  );
}

function IssuesList() {
  return (
    <div className="absolute h-[311.063px] left-[24px] top-[258px] w-[364px]" data-name="Issues List">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Ab6AXuDNtyiOZoLiMpRiJmvIzoo3L74LsUxX8OmbYtwPh24A7LLDqOhhHq70O2SrHznve614Dejh8W5XXvZGdQ5IrwnQc4X8Evj3QSjbhYirmgr3FdeNaPRk2U6Muq3TR033IG4XfTfEwEiBMurppHBsPe7TQgZkBhono8PUfEqYgWsywNXeMj51NKpXqYSnOrjRe7YdE5ONghNtizsm0IJo2JyzWx92REjGSsh82D6Lx0Rfko7Gh4Yzdu7OUrgF4COiTfXlUic() {
  return (
    <div className="absolute h-[192px] left-0 opacity-80 top-0 w-[292px]" data-name="AB6AXuDNtyiOZoLiMPRiJmvIZOO3L74lsUxX8OmbYtwPh24A7L-lDqOhhHq70O2SrHZNVE6_1_4dejh8W5xXvZGdQ5IRWNQc4X8evj3qSjbhYIRMGR3FDE_NaPRk2u6Muq3tR033iG4xfTf_ewEiBMurppHBsPE7TQgZkBhono8-pUFEqYgWsyw-nXeMJ51NKpXqYSnOrjRE7YdE5oNgh_NTIZSM0iJO2JYZWx92REj_gSSH82d6lx0Rfko7Gh4yzdu7OUrgF4COiTfXLUic">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[152.08%] left-0 max-w-none top-[-26.04%] w-full" src={imgAb6AXuDNtyiOZoLiMpRiJmvIzoo3L74LsUxX8OmbYtwPh24A7LLDqOhhHq70O2SrHznve614Dejh8W5XXvZGdQ5IrwnQc4X8Evj3QSjbhYirmgr3FdeNaPRk2U6Muq3TR033IG4XfTfEwEiBMurppHBsPe7TQgZkBhono8PUfEqYgWsywNXeMj51NKpXqYSnOrjRe7YdE5ONghNtizsm0IJo2JyzWx92REjGSsh82D6Lx0Rfko7Gh4Yzdu7OUrgF4COiTfXlUic} />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[192px] left-[24px] overflow-clip rounded-[12px] top-[32px] w-[292px]" data-name="Container">
      <Ab6AXuDNtyiOZoLiMpRiJmvIzoo3L74LsUxX8OmbYtwPh24A7LLDqOhhHq70O2SrHznve614Dejh8W5XXvZGdQ5IrwnQc4X8Evj3QSjbhYirmgr3FdeNaPRk2U6Muq3TR033IG4XfTfEwEiBMurppHBsPe7TQgZkBhono8PUfEqYgWsywNXeMj51NKpXqYSnOrjRe7YdE5ONghNtizsm0IJo2JyzWx92REjGSsh82D6Lx0Rfko7Gh4Yzdu7OUrgF4COiTfXlUic />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[251px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#6b5e55] text-[10px] top-[7.5px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">OBSERVATION LOG</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[20px] left-0 top-[19px] w-[251px]" data-name="Heading 4">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#2d241e] text-[14px] top-[10px] tracking-[-0.35px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">MAIN LOBBY STRUCTURAL INTEGRITY</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[39px] left-0 top-0 w-[251px]" data-name="Container">
      <Container29 />
      <Heading4 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[39px] left-[24px] top-[248px] w-[292px]" data-name="Container">
      <Container28 />
    </div>
  );
}

function SectionArchitecturalImageFeature() {
  return (
    <div className="absolute bg-[#f7f4f2] border border-[#e6e1dc] border-solid drop-shadow-[0px_0px_2.35px_rgba(0,0,0,0.25)] h-[313px] left-[24px] rounded-[16px] top-[601.06px] w-[364px]" data-name="Section - Architectural Image Feature">
      <Container26 />
      <Container27 />
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="absolute h-[946.063px] left-0 top-[64px] w-[412px]" data-name="Main - Content Area">
      <HeaderSection />
      <StatsBento />
      <IssuesList />
      <SectionArchitecturalImageFeature />
    </div>
  );
}

function MdiExchange() {
  return (
    <div className="absolute left-[317.94px] size-[25.833px] top-[19.58px]" data-name="mdi:exchange">
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
    <div className="absolute contents left-[308px] top-[17px]" data-name="Lang Change Button">
      <div className="absolute bg-[#7a3100] h-[31px] left-[308px] rounded-[28.615px] top-[17px] w-[71.538px]" />
      <div className="-translate-y-1/2 absolute capitalize flex flex-col font-['Outfit:Regular','Noto_Sans_Kannada:Regular',sans-serif] justify-center leading-[0] left-[343.77px] text-[15.296px] text-white top-[31.08px] tracking-[-0.1683px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'wght' 400" }}>
        <p className="leading-[1.5]">ಕನ್ನ</p>
      </div>
      <MdiExchange />
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute bg-white h-[64px] left-0 top-0 w-[412px]" data-name="Header - TopAppBar">
      <LangChangeButton />
      <div className="absolute h-[16px] left-[24px] top-[24px] w-[21px]" data-name="Icon">
        <div className="absolute inset-[-1.56%_-1.19%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 16.5">
            <path d={svgPaths.p1c170d80} fill="var(--fill-0, #2E2A28)" id="Icon" stroke="var(--stroke-0, #2E2A28)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[19.992px] left-[68px] top-[22px] w-[145.299px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 145.299 19.9916">
          <g id="Vector">
            <path d={svgPaths.pf91ed00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p20c7180} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1cecf900} fill="var(--fill-0, black)" />
            <path d={svgPaths.p226d7bf0} fill="var(--fill-0, black)" />
            <path d={svgPaths.p352bf872} fill="var(--fill-0, black)" />
            <path d={svgPaths.p252d3700} fill="var(--fill-0, black)" />
            <path d={svgPaths.pf0fcc80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p31bda800} fill="var(--fill-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Component6IssuesListUrgentIssues() {
  return (
    <div className="bg-white relative size-full" data-name="6. ISSUES — List (Urgent Issues)">
      <BottomNavBarShell />
      <MainContentArea />
      <HeaderTopAppBar />
    </div>
  );
}