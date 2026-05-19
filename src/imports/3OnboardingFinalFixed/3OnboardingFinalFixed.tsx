import svgPaths from "./svg-m3tdp6kh6r";
import imgImage2 from "./e87d585257b79bd34e441e463dd87be18886084e.png";
import { LangBadge } from "../../app/components/LangBadge";

function HeroIllustration() {
  return <div className="absolute h-[336px] left-[24px] top-[342px] w-[342px]" data-name="Hero Illustration" />;
}

function MainContent() {
  return (
    <div className="absolute h-[463px] left-[8px] top-[64px] w-[390px]" data-name="Main Content">
      <div className="absolute h-[342px] left-[46px] top-[53px] w-[297px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <HeroIllustration />
    </div>
  );
}

function PaginationDots() {
  return (
    <div className="absolute h-[10px] left-0 top-[706px] w-[390px]" data-name="Pagination Dots">
      <div className="absolute bg-[#ddc1b4] left-[172px] rounded-[9999px] size-[10px] top-0" data-name="Background" />
      <div className="absolute bg-[#7a3100] left-[190px] rounded-[9999px] size-[10px] top-0" data-name="Background" />
      <div className="absolute bg-[#ddc1b4] left-[208px] rounded-[9999px] size-[10px] top-0" data-name="Background" />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[20px] left-0 top-[3px] w-[21px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
        <g id="Container">
          <path d={svgPaths.p2bf86720} fill="var(--fill-0, #7A3100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[26px] left-[45px] top-0 w-[111.91px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-[55.96px] text-[#1b1c1c] text-[17px] text-center top-[13px] whitespace-nowrap">
        <p className="leading-[25.5px]">Fix issues fast</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[26px] left-[-9px] top-px w-[152px]" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function SimplifiedRow() {
  return (
    <div className="absolute h-[27px] left-[120px] top-[32px] w-[166px]" data-name="Simplified Row 2">
      <Container1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute left-[114px] size-[20px] top-px" data-name="Container">
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
    <div className="absolute h-[26px] left-[152px] top-[-3px] w-[138.34px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-[69.17px] text-[#1b1c1c] text-[17px] text-center top-[13px] whitespace-nowrap">
        <p className="leading-[25.5px]">Approve changes</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[58px] left-0 top-[618px] w-[390px]" data-name="Container">
      <SimplifiedRow />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[150px] top-[14px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[171px] text-[18px] text-center text-white top-[28px] whitespace-nowrap">
        <p className="leading-[28px]">Next</p>
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
    <div className="absolute bg-[#7a3100] h-[56px] left-[23px] rounded-[12px] top-[740px] w-[343px]" data-name="Button - Primary Action">
      <Group1 />
    </div>
  );
}

function MdiExchange() {
  return (
    <div className="size-[18px] shrink-0" data-name="mdi:exchange">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.8333 25.8333">
        <g clipPath="url(#clip0_1_548)" id="mdi:exchange">
          <path d={svgPaths.p2e913cc0} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_548">
            <rect fill="white" height="25.8333" width="25.8333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LangChangeButton() {
  return (
    <div className="absolute right-[24px] top-[17px]">
      <LangBadge />
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute bg-[#faf8f7] h-[64px] left-0 top-0 w-[390px] flex items-center justify-between px-[24px]" data-name="Header - TopAppBar">
      <div className="inline-grid grid-cols-[max-content] grid-rows-[max-content] leading-[0] place-items-start relative shrink-0">
        <div className="col-start-1 row-start-1 flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic text-[29.501px] text-black tracking-[1.3963px] uppercase w-[188px] whitespace-nowrap">
          <p className="leading-[42.144px]">s teFLOW</p>
        </div>
        <div className="col-start-1 row-start-1 h-[21.546px] ml-[17.46px] mt-[10.41px] w-[16.655px] relative">
          <svg className="absolute inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6555 21.5459">
            <path d={svgPaths.p64c780} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <LangChangeButton />
    </div>
  );
}

export default function Component3OnboardingFinalFixed() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(251, 249, 248) 0%, rgb(251, 249, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="3. Onboarding - Final (Fixed)">
      <MainContent />
      <PaginationDots />
      <Container />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[202.5px] text-[#9f4301] text-[32px] text-center top-[564px] whitespace-nowrap">
        <p className="leading-[35.2px]">Submit Approvals</p>
      </div>
      <ButtonPrimaryAction />
      <HeaderTopAppBar />
    </div>
  );
}