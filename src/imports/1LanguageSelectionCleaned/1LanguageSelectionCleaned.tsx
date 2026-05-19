import svgPaths from "./svg-9b2xstarpk";

function BackgroundDecorativeElements() {
  return (
    <div className="absolute inset-[0_0_177px_0] opacity-5" data-name="Background Decorative Elements">
      <div className="absolute bg-[#7a3100] blur-[32px] left-[-80px] rounded-[9999px] size-[256px] top-[215.25px]" data-name="Background+Blur" />
      <div className="absolute bg-[#7a3100] blur-[32px] bottom-[215.25px] right-[-80px] rounded-[9999px] size-[256px]" data-name="Background+Blur" />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[22px] text-center whitespace-nowrap">
        <p className="leading-[28.6px]">Select your language</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#564239] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[22.5px]">Choose the language you are comfortable with</p>
      </div>
    </div>
  );
}

function TitleSection() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full" data-name="Title Section">
      <Heading />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[53.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-1/2 text-[#7a3100] text-[15px] text-center top-[10.5px] whitespace-nowrap">
          <p className="leading-[22.5px]">English</p>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p7b061c0} fill="var(--fill-0, #7A3100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonEnglishSelectedStateExample() {
  return (
    <div className="bg-[#ffdbcb] h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Button - English - Selected State Example">
      <div aria-hidden="true" className="absolute border-2 border-[#7a3100] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[22px] py-[2px] relative size-full">
          <Container2 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[75.92px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold','Noto_Sans_Devanagari:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(50%-0.46px)] text-[#1b1c1c] text-[15px] text-center top-[10.5px] whitespace-nowrap">
          <p className="leading-[22.5px]">हिंदी (Hindi)</p>
        </div>
      </div>
    </div>
  );
}

function ButtonHindiUnselectedStateExample() {
  return (
    <div className="bg-[#f5f3f3] h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Button - Hindi - Unselected State Example">
      <div aria-hidden="true" className="absolute border border-[#ddc1b4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[21px] py-px relative size-full">
          <Container4 />
          <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name="Border">
            <div aria-hidden="true" className="absolute border border-[#ddc1b4] border-solid inset-0 pointer-events-none rounded-[9999px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <ButtonEnglishSelectedStateExample />
      <ButtonHindiUnselectedStateExample />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[115.86px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-1/2 text-[#7a3100] text-[15px] text-center top-[10.5px] whitespace-nowrap">
        <p className="leading-[22.5px]">More languages</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[4.317px] relative shrink-0 w-[7px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4.31667">
        <g id="Container">
          <path d={svgPaths.p1a9c9340} fill="var(--fill-0, #7A3100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[4px] relative shrink-0" data-name="Button">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Manrope:Bold','Noto_Sans_Tamil:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[15px] text-center whitespace-nowrap">
          <p className="leading-[22.5px]">தமிழ் (Tamil)</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f5f3f3] h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ddc1b4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[16.75px] pt-[15.75px] px-[21px] relative size-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Manrope:Bold','Noto_Sans_Telugu:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[15px] text-center whitespace-nowrap">
          <p className="leading-[22.5px]">తెలుగు (Telugu)</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f5f3f3] h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ddc1b4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[16.75px] pt-[15.75px] px-[21px] relative size-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Manrope:Bold','Noto_Sans_Kannada:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[15px] text-center whitespace-nowrap">
          <p className="leading-[22.5px]">ಕನ್ನಡ (Kannada)</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f5f3f3] h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ddc1b4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[16.75px] pt-[15.75px] px-[21px] relative size-full">
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
        <div className="flex flex-col font-['Manrope:Bold','Noto_Sans_Malayalam:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[15px] text-center whitespace-nowrap">
          <p className="leading-[22.5px]">മലയാളം (Malayalam)</p>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#f5f3f3] h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ddc1b4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[16.75px] pt-[15.75px] px-[21px] relative size-full">
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Manrope:Bold','Noto_Sans_Bengali:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[15px] text-center whitespace-nowrap">
          <p className="leading-[22.5px]">বাংলা (Bengali)</p>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#f5f3f3] h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ddc1b4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[16.75px] pt-[15.75px] px-[21px] relative size-full">
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
        <div className="flex flex-col font-['Manrope:Bold','Noto_Sans_Devanagari:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[15px] text-center whitespace-nowrap">
          <p className="leading-[22.5px]">मराठी (Marathi)</p>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#f5f3f3] h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ddc1b4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[16.75px] pt-[15.75px] px-[21px] relative size-full">
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Manrope:Bold','Noto_Sans_Gujarati:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[15px] text-center whitespace-nowrap">
          <p className="leading-[22.5px]">ગુજરાતી (Gujarati)</p>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#f5f3f3] h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ddc1b4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[16.75px] pt-[15.75px] px-[21px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Manrope:Bold','Noto_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[15px] text-center whitespace-nowrap">
          <p className="leading-[22.5px]">ਪੰਜਾਬੀ (Punjabi)</p>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#f5f3f3] h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ddc1b4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[16.75px] pt-[15.75px] px-[21px] relative size-full">
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function AdditionalLanguageGridListStyle() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Additional Language Grid (List style)">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function ProgressiveDisclosureMoreLanguages() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Progressive Disclosure: More Languages">
      <Button />
      <AdditionalLanguageGridListStyle />
    </div>
  );
}

function SectionPrimaryLanguageOptions() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Section - Primary Language Options">
      <Container1 />
      <ProgressiveDisclosureMoreLanguages />
    </div>
  );
}

function Main() {
  return (
    <div className="h-[815px] max-w-[448px] relative shrink-0 w-full" data-name="Main">
      <div className="max-w-[inherit] overflow-auto size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[inherit] pb-[128px] pt-[32px] px-[24px] relative size-full">
          <TitleSection />
          <SectionPrimaryLanguageOptions />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[130.5px] top-[14px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[171.5px] text-[18px] text-center text-white top-[28px] whitespace-nowrap">
        <p className="leading-[28px]">Continue</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[56px] left-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(122,49,0,0.2),0px_4px_6px_-4px_rgba(122,49,0,0.2)] top-0 w-[343px]" data-name="Button - Primary Action:shadow" />
      <Group />
    </div>
  );
}

function ButtonPrimaryAction() {
  return (
    <div className="bg-[#7a3100] h-[56px] relative rounded-[12px] shrink-0 w-[343px]" data-name="Button - Primary Action">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Group1 />
      </div>
    </div>
  );
}

function FixedBottomActionArea() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-white bottom-0 content-stretch flex h-[128px] items-start justify-center left-0 pb-[24px] pt-[25px] px-[24px] right-0" data-name="Fixed Bottom Action Area">
      <div aria-hidden="true" className="absolute border-[rgba(221,193,180,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <ButtonPrimaryAction />
    </div>
  );
}

function Group2() {
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

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[162px]" data-name="Container">
      <Group2 />
    </div>
  );
}

function HeaderTopNavigationAnchorFromSharedComponentsJsonLogic() {
  return (
    <div className="absolute bg-[#fbf9f8] content-stretch flex h-[64px] items-center justify-center left-0 px-[16px] right-0 top-0" data-name="Header - Top Navigation Anchor (from Shared Components JSON Logic)">
      <Container15 />
    </div>
  );
}

export default function Component1LanguageSelectionCleaned() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[64px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(251, 249, 248) 0%, rgb(251, 249, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="1. Language Selection (Cleaned)">
      <BackgroundDecorativeElements />
      <Main />
      <FixedBottomActionArea />
      <HeaderTopNavigationAnchorFromSharedComponentsJsonLogic />
    </div>
  );
}