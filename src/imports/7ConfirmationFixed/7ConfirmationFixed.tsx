function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center px-[55.27px] relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[32px] text-center tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[40px] mb-0">Setting up your</p>
        <p className="leading-[40px]">workspace...</p>
      </div>
    </div>
  );
}

function Heading1Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[16px] top-[136px]" data-name="Heading 1:margin">
      <Heading />
    </div>
  );
}

function Margin() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-[calc(50%-0.01px)] pb-[40px] px-[84.203px] top-[232px]" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#564239] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[26px]">This will take a moment</p>
      </div>
    </div>
  );
}

function SimpleProgressBar() {
  return (
    <div className="absolute bg-[#e4e2e2] h-[6px] left-[31px] overflow-clip right-[31px] rounded-[9999px] top-[298px]" data-name="Simple Progress Bar">
      <div className="absolute bg-[#7a3100] inset-[0_35%_0_0] rounded-[9999px] shadow-[0px_0px_12px_0px_rgba(122,49,0,0.2)]" data-name="Background+Shadow" />
    </div>
  );
}

function SimplifiedCenterIconAnimation() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[96px]" data-name="Simplified Center Icon/Animation">
      <div aria-hidden="true" className="absolute border border-[rgba(221,193,180,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Border">
        <div aria-hidden="true" className="absolute border-2 border-[#7a3100] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function SimplifiedCenterIconAnimationMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[123px] pb-[40px] top-0" data-name="Simplified Center Icon/Animation:margin">
      <SimplifiedCenterIconAnimation />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] h-[304px] max-w-[448px] min-w-px relative" data-name="Container">
      <Heading1Margin />
      <Margin />
      <SimpleProgressBar />
      <SimplifiedCenterIconAnimationMargin />
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[330px] pt-[250px] px-[24px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

export default function Component7ConfirmationFixed() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(251, 249, 248) 0%, rgb(251, 249, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="7. Confirmation (Fixed)">
      <Main />
    </div>
  );
}