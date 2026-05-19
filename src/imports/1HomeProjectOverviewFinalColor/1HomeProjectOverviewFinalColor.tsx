import svgPaths from "./svg-ibu8qrj20t";

function MdiExchange() {
  return (
    <div className="absolute left-[308.94px] size-[25.833px] top-[18.58px]" data-name="mdi:exchange">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.8333 25.8333">
        <g clipPath="url(#clip0_53_151)" id="mdi:exchange">
          <path d={svgPaths.p2e913cc0} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_53_151">
            <rect fill="white" height="25.8333" width="25.8333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LangChangeButton() {
  return (
    <div className="absolute contents left-[299px] top-[16px]" data-name="Lang Change Button">
      <div className="absolute bg-[#7a3100] h-[31px] left-[299px] rounded-[28.615px] top-[16px] w-[71.538px]" />
      <div className="-translate-y-1/2 absolute capitalize flex flex-col font-['Outfit:Regular','Noto_Sans_Kannada:Regular',sans-serif] font-normal justify-center leading-[0] left-[334.77px] text-[15.296px] text-white top-[30.08px] tracking-[-0.1683px] whitespace-nowrap">
        <p className="leading-[1.5]">ಕನ್ನ</p>
      </div>
      <MdiExchange />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[68px] top-[12px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Black',sans-serif] font-black h-[39px] justify-center leading-[0] left-[68px] not-italic text-[26.757px] text-black top-[31.5px] tracking-[1.2664px] uppercase w-[147.837px]">
        <p className="leading-[38.224px]">s teFLOW</p>
      </div>
      <div className="absolute inset-[33.5%_74.63%_35.96%_21.5%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1061 19.5416">
          <path d={svgPaths.pa0b6300} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="bg-[#fbf9f8] h-[64px] relative shrink-0 w-[390px] z-[2]" data-name="Header - TopAppBar">
      <LangChangeButton />
      <div className="absolute h-[16px] left-[24px] top-[23px] w-[21px]" data-name="Icon">
        <div className="absolute inset-[-1.56%_-1.19%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 16.5">
            <path d={svgPaths.p1c170d80} fill="var(--fill-0, #2E2A28)" id="Icon" stroke="var(--stroke-0, #2E2A28)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <Group />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8a7d71] text-[11px] tracking-[1.1px] uppercase w-full">
        <p className="leading-[16.5px]">CURRENT PROJECT</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[36px] tracking-[-0.9px] w-full">
        <p className="leading-[40px]">{`Arnab’s Residence `}</p>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[342px]" data-name="Hero Section">
      <Container />
      <Heading />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8a7d71] text-[11px] tracking-[1.1px] uppercase w-full">
        <p className="leading-[16.5px]">PROJECT STATUS</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-[48px] justify-center leading-[0] relative shrink-0 text-[#7a3100] text-[48px] tracking-[-1.2px] w-[102.574px]">
        <p className="leading-[48px]">68%</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[84px] items-center relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <div className="flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#8a7d71] text-[0px] tracking-[1.1px]">
        <p className="leading-[16.5px] mb-0 text-[10px]">Milestone</p>
        <p className="leading-[16.5px] text-[#3e2c1d] text-[11px]">Structure Phase</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[73px] items-start left-[25px] right-[25px] top-[11px]" data-name="Container">
      <Heading1 />
      <Container2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#e8f5e9] col-1 h-[28px] ml-0 mt-0 relative rounded-[6px] row-1 w-[97px]" data-name="Rectangle" />
      <p className="col-1 font-['Manrope:Bold',sans-serif] font-bold leading-[normal] ml-[8px] mt-[6.5px] relative row-1 text-[#2e7d32] text-[11px] tracking-[0.44px] whitespace-nowrap">ON SCHEDULE</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[93px]" data-name="Heading 3">
      <Group1 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#e5e0da] h-[8px] left-[25px] overflow-clip right-[25px] rounded-[9999px] top-[134px]" data-name="Background">
      <div className="absolute bg-[#7a3100] inset-[0_32%_0_0] rounded-br-[35px] rounded-tr-[35px]" data-name="Background" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex flex-col items-end justify-center left-[168px] top-[154px] w-[149px]" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8a7d71] text-[10px] text-right tracking-[1.1px] w-[149px]">
        <p className="leading-[16.5px]">Updated 2h ago</p>
      </div>
    </div>
  );
}

function StatusBarSection() {
  return (
    <div className="bg-[#f7f5f2] drop-shadow-[0px_0px_2.35px_rgba(0,0,0,0.25)] h-[186px] relative rounded-[16px] shrink-0 w-[342px]" data-name="Status Bar Section">
      <div aria-hidden="true" className="absolute border border-[#e5e0da] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container1 />
      <Heading2 />
      <Background />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-[25px] text-[#7d6c5c] text-[11px] top-[162.5px] tracking-[1.1px] w-[148px]">
        <p className="leading-[16.5px]">Completed: 32/47 Tasks</p>
      </div>
      <Heading3 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#7a3100] text-[14px] tracking-[0.7px] uppercase w-[129.06px]">
        <p className="leading-[20px]">ACTION REQUIRED</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="flex-[1_0_0] h-px min-w-px relative" data-name="Margin">
      <div className="content-stretch flex flex-col items-start pl-[16px] relative size-full">
        <div className="bg-[#e5e0da] h-px relative shrink-0 w-full" data-name="Horizontal Divider" />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center justify-between left-[24px] right-[24px] top-[16px]" data-name="Container">
      <Heading4 />
      <Margin />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[15px] tracking-[-0.375px] w-full">
        <p className="leading-[21px]">AC Layout Change - Needs Approval</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[16.5px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] text-[#8a7d71] text-[11px] tracking-[0.275px] uppercase">
        <p className="leading-[16.5px]">LOBBY</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#e5e0da] text-[12px] w-[7.84px]">
        <p className="leading-[16px]">•</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[20px] right-[100px] top-[20px]" data-name="Container">
      <Heading5 />
      <Container7 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#7a3100] content-stretch flex flex-col items-center justify-center px-[24px] py-[10px] right-[20px] rounded-[12px] top-[20px]" data-name="Button">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#fdfcfb] text-[12px] text-center tracking-[1.2px] uppercase w-[32.92px]">
        <p className="leading-[16px]">VIEW</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[36px] left-0 right-0 top-0" data-name="Container">
      <Button />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute left-[20px] top-[74px]">
      <div className="bg-[#fff3e0] h-[20px] rounded-[5px] w-[94px] flex items-center justify-center" data-name="Rectangle">
        <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] text-[#ea9200] text-[8.6px] tracking-[0.34px] whitespace-nowrap">PENDING REVIEW</p>
      </div>
    </div>
  );
}

function Card1AcLayoutChange() {
  return (
    <div className="absolute bg-[#f7f5f2] border border-[#e5e0da] border-solid drop-shadow-[0px_0px_2.35px_rgba(0,0,0,0.25)] h-[185px] left-0 right-0 rounded-[16px] top-0" data-name="Card 1: AC Layout Change">
      <Container6 />
      <Container11 />
      <Group2 />
      <div className="absolute bg-[#e5e0da] h-px left-[20px] right-[20px] top-[104px]" data-name="Horizontal Divider" />
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-start leading-[0] left-[20px] text-[#7d6c5c] text-[0px] top-[120px] tracking-[1.1px] w-[100px]">
        <p className="leading-[13px] mb-0 text-[10px]">Impact</p>
        <p className="leading-[13px] text-[10px] text-black">Design Delay</p>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-start leading-[0] left-[140px] text-[#7d6c5c] text-[0px] top-[120px] tracking-[1.1px] w-[80px]">
        <p className="leading-[13px] mb-0 text-[10px]">Delay</p>
        <p className="leading-[13px] text-[10px] text-black">+1 Day</p>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-start leading-[0] left-[240px] text-[#7d6c5c] text-[0px] top-[120px] tracking-[1.1px] w-[130px]">
        <p className="leading-[13px] mb-0 text-[10px]">Assigned to</p>
        <p className="leading-[13px] text-[10px] text-black">MEP Engineer</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[15px] tracking-[-0.375px] w-full">
        <p className="leading-[21px]">{`Column Misaligned `}</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[16.5px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] text-[#8a7d71] text-[11px] tracking-[0.275px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">Ground floor</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#e5e0da] text-[12px] w-[7.84px]">
        <p className="leading-[16px]">•</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[20px] right-[100px] top-[20px]" data-name="Container">
      <Heading6 />
      <Container13 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#7a3100] content-stretch flex flex-col items-center justify-center px-[24px] py-[10px] right-[20px] rounded-[12px] top-[20px]" data-name="Button">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#fdfcfb] text-[12px] text-center tracking-[1.2px] uppercase w-[32.92px]">
        <p className="leading-[16px]">VIEW</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[36px] left-0 right-0 top-0" data-name="Container">
      <Button1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute left-[20px] top-[74px]">
      <div className="bg-[#ffebee] h-[20px] rounded-[5px] w-[94px] flex items-center justify-center" data-name="Rectangle">
        <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] text-[#c62828] text-[8.6px] tracking-[0.34px] whitespace-nowrap">WORK STOPPED</p>
      </div>
    </div>
  );
}

function Card2ColumnMisaligned() {
  return (
    <div className="absolute bg-[#f7f5f2] border-2 border-[rgba(185,28,28,0.2)] border-solid drop-shadow-[0px_0px_2.35px_rgba(0,0,0,0.25)] h-[185px] left-0 right-0 rounded-[16px] top-[201px]" data-name="Card 2: Column Misaligned">
      <Container12 />
      <Container17 />
      <Group3 />
      <div className="absolute bg-[#e5e0da] h-px left-[20px] right-[20px] top-[104px]" data-name="Horizontal Divider" />
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-start leading-[0] left-[20px] text-[#7d6c5c] text-[0px] top-[120px] tracking-[1.1px] w-[100px]">
        <p className="leading-[13px] mb-0 text-[10px]">Impact</p>
        <p className="leading-[13px] text-[10px] text-black">Work Halted</p>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-start leading-[0] left-[140px] text-[#7d6c5c] text-[0px] top-[120px] tracking-[1.1px] w-[80px]">
        <p className="leading-[13px] mb-0 text-[10px]">Delay</p>
        <p className="leading-[13px] text-[10px] text-black">+2 Day</p>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-start leading-[0] left-[240px] text-[#7d6c5c] text-[0px] top-[120px] tracking-[1.1px] w-[130px]">
        <p className="leading-[13px] mb-0 text-[10px]">Assigned to</p>
        <p className="leading-[13px] text-[10px] text-black">Site Engineer</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[15px] tracking-[-0.375px] w-full">
        <p className="leading-[21px]">Plan Revision Requested</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[16.5px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] text-[#8a7d71] text-[11px] tracking-[0.275px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">KITCHEN</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#e5e0da] text-[12px] w-[7.84px]">
        <p className="leading-[16px]">•</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16.5px] items-center left-0 right-0 top-[29px]" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[12.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 9.33333">
        <g id="Container">
          <path d={svgPaths.p35624880} fill="var(--fill-0, #8A7D71)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#8a7d71] text-[10px] tracking-[-0.25px] uppercase w-[65.55px]">
        <p className="leading-[15px]">₹12,450 EXTRA</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p29478120} fill="var(--fill-0, #8A7D71)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#8a7d71] text-[10px] tracking-[-0.25px] uppercase w-[35.59px]">
        <p className="leading-[15px]">+4 DAYS</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container27 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[4px] right-0 top-[53px]" data-name="Margin">
      <Container23 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[76px] left-[20px] right-[100px] top-[20px]" data-name="Container">
      <Heading7 />
      <Container19 />
      <Margin1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute left-[20px] top-[106px]">
      <div className="bg-[#e8f5e9] h-[20px] rounded-[5px] w-[94px] flex items-center justify-center" data-name="Rectangle">
        <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] text-[#2e7d32] text-[8.6px] tracking-[0.34px] whitespace-nowrap">DESIGN UPDATE</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#7a3100] content-stretch flex flex-col items-center justify-center px-[24px] py-[10px] right-[20px] rounded-[12px] top-[20px]" data-name="Button">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#fdfcfb] text-[12px] text-center tracking-[1.2px] uppercase w-[49.72px]">
        <p className="leading-[16px]">REVIEW</p>
      </div>
    </div>
  );
}

function Card3PlanRevisionRequested() {
  return (
    <div className="absolute bg-[#f7f5f2] border border-[#e5e0da] border-solid drop-shadow-[0px_0px_2.35px_rgba(0,0,0,0.25)] h-[185px] left-0 right-0 rounded-[16px] top-[402px]" data-name="Card 3: Plan Revision Requested">
      <Container18 />
      <Group4 />
      <Button2 />
      <div className="absolute bg-[#e5e0da] h-px left-[20px] right-[20px] top-[136px]" data-name="Horizontal Divider" />
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-start leading-[0] left-[20px] text-[#7d6c5c] text-[0px] top-[150px] tracking-[1.1px] w-[100px]">
        <p className="leading-[13px] mb-0 text-[10px]">Impact</p>
        <p className="leading-[13px] text-[10px] text-black">Scope Change</p>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-start leading-[0] left-[140px] text-[#7d6c5c] text-[0px] top-[150px] tracking-[1.1px] w-[80px]">
        <p className="leading-[13px] mb-0 text-[10px]">Delay</p>
        <p className="leading-[13px] text-[10px] text-black">+0 Day</p>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-start leading-[0] left-[240px] text-[#7d6c5c] text-[0px] top-[150px] tracking-[1.1px] w-[130px]">
        <p className="leading-[13px] mb-0 text-[10px]">Assigned to</p>
        <p className="leading-[13px] text-[10px] text-black">Design Team</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[571px] left-[24px] right-[24px] top-[60px]" data-name="Container">
      <Card1AcLayoutChange />
      <Card2ColumnMisaligned />
      <Card3PlanRevisionRequested />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p12a32500} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-white tracking-[1px] uppercase w-[33.13px]">
        <p className="leading-[15px]">HOME</p>
      </div>
    </div>
  );
}

function LinkHomeActive() {
  return (
    <div className="bg-[#7a3100] flex-[1_0_0] h-full min-w-px relative" data-name="Link - Home Active">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container30 />
        <Margin2 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[19px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
        <g id="Container">
          <path d={svgPaths.p19ed9400} fill="var(--fill-0, #564239)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#564239] text-[10px] tracking-[1px] uppercase w-[62.44px]">
        <p className="leading-[15px]">DECISIONS</p>
      </div>
    </div>
  );
}

function LinkDecisions() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Link - Decisions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container31 />
        <Margin3 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[19px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
        <g id="Container">
          <path d={svgPaths.p7555480} fill="var(--fill-0, #564239)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#564239] text-[10px] tracking-[1px] uppercase w-[41.67px]">
        <p className="leading-[15px]">ISSUES</p>
      </div>
    </div>
  );
}

function LinkIssues() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Link - Issues">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container32 />
        <Margin4 />
      </div>
    </div>
  );
}

function Container33() {
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

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#564239] text-[10px] tracking-[1px] uppercase w-[52.45px]">
        <p className="leading-[15px]">TIMELINE</p>
      </div>
    </div>
  );
}

function LinkTimeline() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Link - Timeline">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container33 />
        <Margin5 />
      </div>
    </div>
  );
}

function BottomNavBarShell() {
  return (
    <div className="absolute bg-[#fbf9f8] bottom-0 h-[55px] left-0 w-[390px]" data-name="BottomNavBar Shell">
      <div className="content-stretch flex items-start justify-center overflow-clip pt-px relative rounded-[inherit] size-full">
        <LinkHomeActive />
        <LinkDecisions />
        <LinkIssues />
        <LinkTimeline />
      </div>
      <div aria-hidden="true" className="absolute border-[#8a7267] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function ActionRequiredSection() {
  return (
    <div className="h-[706px] relative shrink-0 w-[390px]" data-name="Action Required Section">
      <Container4 />
      <Container5 />
      <BottomNavBarShell />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[924px] items-center pb-[96px] pt-[8px] relative shrink-0 w-full z-[1]" data-name="Main">
      <HeroSection />
      <StatusBarSection />
      <ActionRequiredSection />
    </div>
  );
}

export default function Component1HomeProjectOverviewFinalColor() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(253, 252, 251) 0%, rgb(253, 252, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="1. HOME — Project Overview (Final Color)">
      <HeaderTopAppBar />
      <Main />
    </div>
  );
}