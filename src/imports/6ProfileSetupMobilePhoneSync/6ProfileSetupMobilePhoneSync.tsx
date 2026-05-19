import svgPaths from "./svg-fu02xaf4y6";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#96593d] text-[22px] text-center whitespace-nowrap">
        <p className="leading-[28.6px]">Set up your profile</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#564239] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[22.5px]">Add your details to continue</p>
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

function TitleSectionMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Title Section:margin">
      <TitleSection />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Container">
          <path d={svgPaths.p348ddf00} fill="var(--fill-0, #8A7267)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#efeded] flex-[1_0_0] min-h-px relative rounded-[9999px] w-full" data-name="Background+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Container2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ddc1b4] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 10.5">
        <g id="Container">
          <path d={svgPaths.p14a91f00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#7a3100] bottom-0 content-stretch flex items-center justify-center p-[2px] right-0 rounded-[9999px] size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 right-0 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[32px]" data-name="Button:shadow" />
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[96px] z-[2]" data-name="Container">
      <BackgroundBorder />
      <Button />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 z-[1]" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8a7267] text-[13px] whitespace-nowrap">
        <p className="leading-[19.5px]">Add profile photo</p>
      </div>
    </div>
  );
}

function ProfilePictureSection() {
  return (
    <div className="content-stretch flex flex-col isolate items-center relative shrink-0 w-full" data-name="Profile Picture Section">
      <Container1 />
      <Margin />
    </div>
  );
}

function ProfilePictureSectionMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Profile Picture Section:margin">
      <ProfilePictureSection />
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[15px] w-full">
          <p className="leading-[normal]">Enter your name</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f5f3f3] flex-[1_0_0] min-h-px relative rounded-[8px] w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[17px] py-[15.5px] relative size-full">
          <Container4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ddc1b4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function NameInput() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start justify-center relative shrink-0 w-full" data-name="Name Input">
      <Input />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[15px] whitespace-nowrap">
          <p className="leading-[22.5px]">+91</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="bg-[#efeded] h-full relative shrink-0" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#ddc1b4] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[13.75px] pl-[16px] pr-[17px] pt-[12.75px] relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[15px] w-full">
        <p className="leading-[normal]">Enter mobile number</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15px] pt-[14px] px-[16px] relative size-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function MobileNumberInput() {
  return (
    <div className="bg-[#f5f3f3] h-[52px] relative rounded-[8px] shrink-0 w-full" data-name="Mobile Number Input">
      <div className="content-stretch flex items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <BackgroundVerticalBorder />
        <Input1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ddc1b4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InputsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Inputs Section">
      <NameInput />
      <MobileNumberInput />
    </div>
  );
}

function VisualAnchorDecorativeBentoElement() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_64px] opacity-20 pt-[40px] relative shrink-0 w-full" data-name="Visual Anchor (Decorative Bento Element)">
      <div className="bg-[#e2e2e2] col-2 h-[64px] justify-self-stretch relative rounded-[12px] row-1 shrink-0" data-name="Background" />
    </div>
  );
}

function VisualAnchorDecorativeBentoElementMargin() {
  return (
    <div className="flex-[1_0_0] min-h-[104px] relative w-full" data-name="Visual Anchor (Decorative Bento Element):margin">
      <div className="flex flex-col justify-end min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end min-h-[inherit] pt-[209.406px] relative size-full">
          <VisualAnchorDecorativeBentoElement />
        </div>
      </div>
    </div>
  );
}

function Button1() {
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
    <div className="absolute bg-[#fbf9f8] bottom-[27px] content-stretch flex flex-col items-start left-0 max-w-[448px] pb-[40px] pt-[16px] px-[32px] w-[390px]" data-name="Footer - Bottom Fixed Action">
      <Button1 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[64px_0_-24px_0] items-start justify-between overflow-auto pb-[96px] pt-[15px] px-[24px]" data-name="Main">
      <TitleSectionMargin />
      <ProfilePictureSectionMargin />
      <InputsSection />
      <VisualAnchorDecorativeBentoElementMargin />
      <FooterBottomFixedAction />
      <div className="absolute flex items-center justify-center left-[30.59px] size-[15.36px] top-[22px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none scale-x-96 scale-y-96">
          <div className="relative size-[16px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p3573eb00} fill="var(--fill-0, #1A1A1A)" id="Icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

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

function Container8() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-1/2" data-name="Container">
      <Group />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[42.452px] relative shrink-0 w-[188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container8 />
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
    <div className="absolute bg-[#fbf9f8] content-stretch flex h-[64px] items-center justify-between left-0 px-[24px] right-0 top-0" data-name="Header - TopAppBar">
      <Container7 />
      <LangChangeButton />
    </div>
  );
}

export default function Component6ProfileSetupMobilePhoneSync() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(251, 249, 248) 0%, rgb(251, 249, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="6. Profile Setup (Mobile) - Phone Sync">
      <Main />
      <HeaderTopAppBar />
    </div>
  );
}