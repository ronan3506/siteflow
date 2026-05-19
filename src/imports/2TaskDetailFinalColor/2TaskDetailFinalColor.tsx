import svgPaths from "./svg-djrrcnhzuy";
import imgArchitecturalFloorPlan from "./2da371bb88b721fb844cadb22cc7df8e0c447212.png";

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6d5f54] text-[11px] tracking-[1.65px] uppercase w-full">
        <p className="leading-[16.5px]">CORRIDOR • 1st FLOOR</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[24px] text-black w-full">
        <p className="leading-[30px]">Install floor tiles</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(77,59,44,0.1)] content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-black text-center tracking-[0.5px] uppercase w-[47.23px]">
        <p className="leading-[15px]">PENDING</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p29478120} fill="var(--fill-0, #6D5F54)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Container3 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#6d5f54] text-[12px] w-[108.88px]">
        <p className="leading-[16px]">Due Today, 5:00 PM</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Overlay />
      <Container2 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container1 />
    </div>
  );
}

function TaskHeaderSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[350px]" data-name="Task Header Section">
      <Container />
      <Heading />
      <Margin />
    </div>
  );
}

function ArchitecturalFloorPlan() {
  return (
    <div className="h-[262.5px] mix-blend-multiply opacity-80 relative shrink-0 w-full" data-name="Architectural floor plan">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.33%] left-0 max-w-none top-[-16.67%] w-full" src={imgArchitecturalFloorPlan} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
        <g id="Container">
          <path d={svgPaths.p3b059d18} fill="var(--fill-0, #FAF8F6)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#faf8f6] text-[10px] tracking-[0.5px] uppercase w-[87.544px]">
        <p className="leading-[15px]">VIEW BLUEPRINT</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#7a3100] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[12px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_14.25px_3.4px_0] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Container4 />
      <Container5 />
    </div>
  );
}

function ReferenceImageCanvas() {
  return (
    <div className="aspect-[4/3] bg-[#f2ede9] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[16px] shrink-0" data-name="Reference Image Canvas">
      <ArchitecturalFloorPlan />
      <div className="absolute bottom-[13.7px] flex h-[27.9px] items-center justify-center right-[18.88px] w-[119.74px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "43" } as React.CSSProperties}>
        <div className="flex-none scale-x-90 scale-y-90">
          <Background />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[0.7px] uppercase w-[147.88px]">
          <p className="leading-[20px]">TECHNICAL DETAILS</p>
        </div>
      </div>
    </div>
  );
}

function RivetIconsAudio() {
  return (
    <div className="overflow-clip relative shrink-0 size-[19px]" data-name="rivet-icons:audio">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Group">
          <path d={svgPaths.p2021d300} fill="var(--fill-0, #6D5F54)" id="Vector" />
          <path d={svgPaths.p143c5480} fill="var(--fill-0, #6D5F54)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <RivetIconsAudio />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(230,222,215,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[13px] relative size-full">
        <Heading1 />
        <Container6 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#7a3100] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">MATERIAL</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[20px]">Ceramic 60x60cm</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[4px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#7a3100] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">QUANTITY</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[20px]">150 sq meters</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[4px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#7a3100] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">REQUIRED TOOLS</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[20px]">Tile cutter, Level, Trowel, Spacers (2mm)</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[4px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[20px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__39px_39px] relative size-full">
        <Container8 />
        <Container11 />
        <Container14 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6d5f54] text-[12px] w-full">
          <p className="leading-[19.5px] mb-0">Ensure substrate is level and clean. Use premium</p>
          <p className="leading-[19.5px]">adhesive for large format. Maintain 2mm spacing.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="bg-[#f7f3f0] relative rounded-[12px] shrink-0 w-full" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-black border-l-2 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[16px] pr-[14px] py-[14px] relative size-full">
        <Container17 />
      </div>
    </div>
  );
}

function SectionTechnicalSpecificationsBlock() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[20px] items-start p-[21px] relative rounded-[16px] shrink-0 w-[350px]" data-name="Section - Technical Specifications Block">
      <div aria-hidden="true" className="absolute border border-[#e6ded7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <HorizontalBorder />
      <Container7 />
      <BackgroundVerticalBorder />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.167px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.16667 11.6667">
        <g id="Container">
          <path d={svgPaths.p3edf7c80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#7a3100] content-stretch flex gap-[8px] h-[56px] items-center justify-center relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] h-[56px] left-0 right-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(77,59,44,0.2),0px_4px_6px_-4px_rgba(77,59,44,0.2)] top-0" data-name="Button:shadow" />
      <Container18 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[1.4px] uppercase w-[96.5px]">
        <p className="leading-[20px]">START TASK</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[15.833px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 15.8333">
        <g id="Container">
          <path d={svgPaths.p1a7e4c60} fill="var(--fill-0, #B3261E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ebe4de] content-stretch flex gap-[8px] h-[56px] items-center justify-center p-px relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e6ded7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container19 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#7a3100] text-[14px] text-center tracking-[1.4px] uppercase w-[114.59px]">
        <p className="leading-[20px]">REPORT ISSUE</p>
      </div>
    </div>
  );
}

function ActionArea() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pb-[32px] pt-[16px] relative shrink-0 w-[350px]" data-name="Action Area">
      <Button />
      <Button1 />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[24px] h-[897px] items-start left-1/2 pb-[20px] pt-[69px] px-[20px] top-0" data-name="Main Content Canvas">
      <TaskHeaderSection />
      <ReferenceImageCanvas />
      <SectionTechnicalSpecificationsBlock />
      <ActionArea />
    </div>
  );
}

function Container21() {
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
      <Container21 />
    </div>
  );
}

function Container20() {
  return (
    <div className="-translate-y-1/2 absolute h-[40px] left-[16px] top-1/2 w-[374px]" data-name="Container">
      <Button2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[56px] text-[#7a3100] text-[16px] top-[20px] tracking-[0.8px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">REVIEW TASK</p>
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#faf8f6] h-[64px] left-1/2 top-0 w-[390px]" data-name="Header - TopAppBar">
      <Container20 />
    </div>
  );
}

export default function Component2TaskDetailFinalColor() {
  return (
    <div className="relative shadow-[0px_0px_40px_0px_rgba(0,0,0,0.05)] size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(250, 248, 246) 0%, rgb(250, 248, 246) 100%), linear-gradient(90deg, rgb(245, 245, 244) 0%, rgb(245, 245, 244) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="2. Task Detail - Final Color">
      <MainContentCanvas />
      <HeaderTopAppBar />
    </div>
  );
}