import svgPaths from "./svg-stlgi2ker8";

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#615e5b] text-[11px] tracking-[0.55px] uppercase w-full">
          <p className="leading-[16.5px]">Change Order ID</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#7a3100] text-[16px] w-full">
          <p className="leading-[24px]">SF-2024-8891-X</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#cbc3bd] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[21px] pt-[20px] px-[21px] relative size-full">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#615e5b] text-[11px] tracking-[0.55px] uppercase w-full">
          <p className="leading-[16.5px]">TIMESTAMP</p>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#7a3100] text-[16px] uppercase w-full">
          <p className="leading-[24px]">OCT 24, 2023 • 14:32 GMT</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#cbc3bd] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[21px] pt-[20px] px-[21px] relative size-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function InfoCards() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Info Cards">
      <BackgroundBorder />
      <BackgroundBorder1 />
    </div>
  );
}

function InfoCardsMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] pb-[32px] right-[16px] top-[394px]" data-name="Info Cards:margin">
      <InfoCards />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#7a3100] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center pl-[127.52px] pr-[127.51px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.35px] w-[102.97px]">
        <p className="leading-[20px]">BACK TO HOME</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center pl-[141.88px] pr-[141.87px] py-[17px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#52311a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#7a3100] text-[13.5px] text-center tracking-[0.35px] w-[74.25px]">
        <p className="leading-[20px]">VIEW LOGS</p>
      </div>
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[16px] right-[16px] top-[611px]" data-name="Action Buttons">
      <Button />
      <Button1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Container">
          <path d={svgPaths.pf059c0} fill="var(--fill-0, #2E7D32)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(16,185,129,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[96px]" data-name="Overlay">
      <Container4 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[120px] items-start pb-[24px] relative shrink-0 w-[96px]" data-name="Margin">
      <Overlay />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[38px] justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[30px] text-center tracking-[-0.75px] w-[180.83px]">
        <p className="leading-[37.5px]">Decision Sent</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[180.83px]" data-name="Container">
      <Heading />
    </div>
  );
}

function SuccessAnimationIconArea() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Success Animation/Icon Area">
      <Margin />
      <Container5 />
    </div>
  );
}

function SuccessAnimationIconAreaMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] pb-[32px] right-[16px] top-[128px]" data-name="Success Animation/Icon Area:margin">
      <SuccessAnimationIconArea />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[26px] top-[338px] w-[337.3px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#615e5b] text-[16px] text-center w-[337.3px]">
        <p className="leading-[24px]">Your decision has been shared with the team.</p>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-[844.5px] max-w-[390px] relative shrink-0 w-full" data-name="Main Content">
      <InfoCardsMargin />
      <ActionButtons />
      <SuccessAnimationIconAreaMargin />
      <Container6 />
    </div>
  );
}

function Component4DecisionSentCleaned() {
  return (
    <div className="absolute content-stretch flex flex-col h-[884px] items-center left-0 min-h-[884px] pb-[39.5px] top-px w-[390px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(251, 249, 248) 0%, rgb(251, 249, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="4. Decision Sent (Cleaned)">
      <MainContent />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-px">
      <Component4DecisionSentCleaned />
    </div>
  );
}

function Container8() {
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

function Button2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[9999px] size-[40px] top-0" data-name="Button">
      <Container8 />
    </div>
  );
}

function Container7() {
  return (
    <div className="-translate-y-1/2 absolute h-[40px] left-[16px] top-1/2 w-[374px]" data-name="Container">
      <Button2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[56px] text-[#7a3100] text-[16px] top-[20px] tracking-[0.8px] uppercase whitespace-nowrap">
        <p className="leading-[24px] whitespace-pre">{`Review Decision  `}</p>
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#fbf9f8] h-[64px] left-1/2 top-0 w-[390px]" data-name="Header - TopAppBar">
      <Container7 />
    </div>
  );
}

export default function Component4DecSent() {
  return (
    <div className="bg-white relative size-full" data-name="4. dec sent">
      <Group />
      <HeaderTopAppBar />
    </div>
  );
}