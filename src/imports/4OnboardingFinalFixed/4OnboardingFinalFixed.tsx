import svgPaths from "./svg-5hfjsbxx4a";
import imgImage3 from "./106e321b1f59737e2cc352adcc74edf479bd8003.png";

function HeroIllustration() {
  return <div className="h-[336px] relative shrink-0 w-full" data-name="Hero Illustration" />;
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col h-[463px] items-start left-0 px-[24px] right-0 top-[64px]" data-name="Main Content">
      <HeroIllustration />
    </div>
  );
}

function PaginationDots() {
  return (
    <div className="absolute h-[10px] left-0 top-[738px] w-[390px]" data-name="Pagination Dots">
      <div className="absolute bg-[#ddc1b4] left-[172px] rounded-[9999px] size-[10px] top-0" data-name="Background" />
      <div className="absolute bg-[#ddc1b4] left-[190px] rounded-[9999px] size-[10px] top-0" data-name="Background" />
      <div className="absolute bg-[#7a3100] left-[208px] rounded-[9999px] size-[10px] top-0" data-name="Background" />
    </div>
  );
}

function Container2() {
  return <div className="h-[20px] relative shrink-0 w-[21px]" data-name="Container" />;
}

function Container3() {
  return <div className="h-[26px] relative shrink-0 w-0" data-name="Container" />;
}

function Container1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[24px] items-center left-[calc(50%-40px)] top-0 w-[152px]" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function SimplifiedRow() {
  return (
    <div className="absolute h-[27px] left-[119px] top-[18px] w-[166px]" data-name="Simplified Row 2">
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[58px] left-[-1px] top-[632px] w-[390px]" data-name="Container">
      <SimplifiedRow />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[121px] top-[14px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[50.92px] text-[18px] text-center text-white top-[14px] whitespace-nowrap">
        <p className="leading-[28px]">Get Started</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-0">
      <div className="absolute h-[56px] left-0 right-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(122,49,0,0.2),0px_4px_6px_-4px_rgba(122,49,0,0.2)] top-0" data-name="Button - Primary Action:shadow" />
      <Group />
    </div>
  );
}

function ButtonPrimaryAction() {
  return (
    <div className="absolute bg-[#7a3100] content-stretch flex h-[56px] items-center justify-center left-[23px] rounded-[12px] top-[780px] w-[343px]" data-name="Button - Primary Action">
      <Group1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute left-[88px] size-[20px] top-[622px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1caa9380} fill="var(--fill-0, #7A3100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute left-[88px] size-[20px] top-[654px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1caa9380} fill="var(--fill-0, #7A3100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center left-[126px] top-[calc(50%+189px)]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[17px] text-center whitespace-nowrap">
        <p className="leading-[25.5px]">Tasks, updates, approvals</p>
      </div>
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

function Container8() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-1/2" data-name="Container">
      <Group2 />
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
    <div className="absolute bg-[#faf8f7] content-stretch flex h-[64px] items-center justify-between left-0 px-[24px] top-0 w-[390px]" data-name="Header - TopAppBar">
      <Container7 />
      <LangChangeButton />
    </div>
  );
}

export default function Component4OnboardingFinalFixed() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(251, 249, 248) 0%, rgb(251, 249, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="4. Onboarding - Final (Fixed)">
      <MainContent />
      <PaginationDots />
      <Container />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[calc(50%-0.5px)] text-[#9f4301] text-[32px] text-center top-[562px] w-[239px]">
        <p className="leading-[35.2px]">Track Progress</p>
      </div>
      <ButtonPrimaryAction />
      <Container4 />
      <Container5 />
      <Container6 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+24.5px)] text-[#1b1c1c] text-[17px] text-center top-[664px] whitespace-nowrap">
        <p className="leading-[25.5px]">Everything in one place</p>
      </div>
      <HeaderTopAppBar />
      <div className="absolute aspect-[1554/1911] left-[11.54%] right-[8.81%] top-[95px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}