import svgPaths from "./svg-hw6vt2omev";

function SheetDragHandle() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[8px] pt-[16px] relative shrink-0 w-full" data-name="Sheet Drag Handle">
      <div className="bg-[#d9cfc7] h-[6px] relative rounded-[9999px] shrink-0 w-[48px]" data-name="Background" />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[24px] tracking-[-0.6px] w-full">
        <p className="leading-[32px]">Why are you rejecting?</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Header">
      <Heading />
      <div className="h-[4px] relative shrink-0 w-[48px]" data-name="Background">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Background" />
        </svg>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[12px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
        <g id="Container">
          <path d={svgPaths.p28cfa800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[1.2px] uppercase w-[79.2px]">
          <p className="leading-[16px]">ALIGNMENT</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#7a3100] col-1 content-stretch flex flex-col h-[77px] items-start justify-self-start pl-[17px] pr-[68.8px] py-[17px] relative rounded-[12px] row-1 self-start shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d9cfc7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Margin />
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[19.05px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19.05">
        <g id="Container">
          <path d={svgPaths.p1104fd00} fill="var(--fill-0, #7A3100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#3d2b1f] text-[12px] text-center tracking-[1.2px] uppercase w-[67.22px]">
          <p className="leading-[16px]">MATERIAL</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f5f1ee] col-2 content-stretch flex flex-col items-start justify-self-start pl-[17px] pr-[80.78px] py-[17px] relative rounded-[12px] row-1 self-start shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d9cfc7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Margin1 />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[21px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
        <g id="Container">
          <path d={svgPaths.p13774060} fill="var(--fill-0, #7A3100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#3d2b1f] text-[12px] text-center tracking-[1.2px] uppercase w-[58.47px]">
          <p className="leading-[16px]">QUALITY</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f5f1ee] col-1 content-stretch flex flex-col items-start justify-self-start pl-[17px] pr-[89.53px] py-[17px] relative rounded-[12px] row-2 self-start shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d9cfc7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Margin2 />
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[21px] relative shrink-0 w-[19px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 21">
        <g id="Container">
          <path d={svgPaths.p1574ee00} fill="var(--fill-0, #7A3100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#3d2b1f] text-[12px] text-center tracking-[1.2px] uppercase w-[87.48px]">
          <p className="leading-[16px]">INCOMPLETE</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f5f1ee] col-2 content-stretch flex flex-col items-start justify-self-start pl-[17px] pr-[60.52px] py-[17px] relative rounded-[12px] row-2 self-start shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d9cfc7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Margin3 />
      <Container8 />
    </div>
  );
}

function OptionsGrid() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__82px_82px] relative shrink-0 w-full" data-name="Options Grid">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(112,94,82,0.6)] w-full">
          <p className="leading-[20px]">Type or record feedback...</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-[#f5f1ee] relative rounded-[12px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[77px] pt-[17px] px-[17px] relative size-full">
          <Container9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9cfc7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[19px] relative shrink-0 w-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 19">
        <g id="Container">
          <path d={svgPaths.p19d8b800} fill="var(--fill-0, #7A3100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bottom-[16px] content-stretch flex flex-col items-center justify-center right-[16px]" data-name="Button">
      <Container10 />
    </div>
  );
}

function InputArea() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input Area">
      <Textarea />
      <Button4 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#fdfcfb] text-[14px] text-center tracking-[1.4px] uppercase w-[154.67px]">
        <p className="leading-[20px]">SUBMIT REJECTION</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, #FDFCFB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ActionButton() {
  return (
    <div className="bg-[#5c4033] relative rounded-[12px] shrink-0 w-full" data-name="Action Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[20px] relative size-full">
          <div className="absolute bg-[#7a3100] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(92,64,51,0.2),0px_4px_6px_-4px_rgba(92,64,51,0.2)]" data-name="Action Button:shadow" />
          <Container11 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[40px] pt-[8px] px-[24px] relative size-full">
        <Header />
        <OptionsGrid />
        <InputArea />
        <ActionButton />
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#fdfcfb] content-stretch drop-shadow-[0px_-10px_20px_rgba(61,43,31,0.2)] flex flex-col items-start max-w-[448px] relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Background+Shadow">
      <SheetDragHandle />
      <Container />
    </div>
  );
}

export default function RejectionBottomSheet() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Rejection Bottom Sheet">
      <BackgroundShadow />
    </div>
  );
}