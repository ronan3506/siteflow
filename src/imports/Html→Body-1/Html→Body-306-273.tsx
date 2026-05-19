import svgPaths from "./svg-b0jys8w73m";
import imgImage1 from "./2a20102ab74d2784b502d3663eb7d9bc2a3b28d7.png";

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
        <p className="leading-[24px]">STATUS</p>
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="bg-[#fdfbf9] h-[64px] relative shrink-0 w-[390px]" data-name="Header - TopAppBar">
      <Container />
    </div>
  );
}

function ConstructionSiteProof() {
  return (
    <div className="h-[192px] overflow-clip relative shrink-0 w-[350px]" data-name="construction site proof">
      <div className="absolute h-[192px] left-0 top-[-0.19px] w-[342px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[12px] top-[12px]">
      <div className="absolute bg-[#e8f5e9] h-[28px] left-[12px] rounded-[6px] top-[12px] w-[83.747px]" data-name="Rectangle" />
      <p className="absolute font-['Manrope:Bold',sans-serif] font-bold leading-[normal] left-[20.34px] text-[#2e7d32] text-[11px] top-[18.5px] tracking-[0.44px] w-[67.07px]">SUBMITTED</p>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="aspect-video bg-[#e4e2e2] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full z-[2]" data-name="Background+Shadow">
      <ConstructionSiteProof />
      <Group />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[4px] relative size-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#564239] text-[11px] w-full">
          <p className="leading-[16.5px]">Uploaded 2 mins ago</p>
        </div>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full z-[1]" data-name="Margin">
      <Container2 />
    </div>
  );
}

function ImagePreviewRectangle() {
  return (
    <div className="content-stretch flex flex-col isolate items-start max-w-[448px] relative shrink-0 w-full" data-name="Image Preview Rectangle">
      <BackgroundShadow />
      <Margin />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">
          <path d={svgPaths.p4bfffc0} fill="var(--fill-0, #201A17)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function FunctionalColorWarmPendingStatus() {
  return (
    <div className="bg-[#f3b344] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[12px] items-center px-[24px] py-[16px] relative rounded-[12px] shrink-0" data-name="Functional Color: Warm Pending Status">
      <Container3 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#201a17] text-[12px] tracking-[1.8px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">WAITING FOR APPROVAL</p>
      </div>
    </div>
  );
}

function FunctionalColorWarmPendingStatusMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Functional Color: Warm Pending Status:margin">
      <FunctionalColorWarmPendingStatus />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[280px] pl-[6.14px] pr-[6.16px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#564239] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[22.75px] mb-0">Your submission has been received and is</p>
        <p className="leading-[22.75px]">currently under review by the site manager.</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[280px] pt-[23.375px] relative shrink-0" data-name="Margin">
      <Container4 />
    </div>
  );
}

function StatusIndicator() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Status Indicator">
      <FunctionalColorWarmPendingStatusMargin />
      <Margin1 />
    </div>
  );
}

function StatusIndicatorMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Status Indicator:margin">
      <StatusIndicator />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main Content Canvas">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[211.62px] pt-[32px] px-[24px] relative size-full">
          <ImagePreviewRectangle />
          <StatusIndicatorMargin />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.6667">
        <g id="Container">
          <path d={svgPaths.p25f99e00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#7a3100] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7.99px] items-center justify-center px-[24px] py-[16px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
          <Container5 />
          <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">BACK TO TASKS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#e9e8e7] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">CANCEL SUBMISSION</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomActionArea() {
  return (
    <div className="max-w-[448px] relative shrink-0 w-full" data-name="Bottom Action Area">
      <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center max-w-[inherit] p-[24px] relative size-full">
          <Button1 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function BottomActionAreaMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] pt-[16px] relative shrink-0 w-full" data-name="Bottom Action Area:margin">
      <BottomActionArea />
    </div>
  );
}

export default function HtmlBody() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(251, 249, 248) 0%, rgb(251, 249, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <HeaderTopAppBar />
      <MainContentCanvas />
      <BottomActionAreaMargin />
    </div>
  );
}