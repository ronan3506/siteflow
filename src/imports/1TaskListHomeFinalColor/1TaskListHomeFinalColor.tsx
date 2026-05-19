import svgPaths from "./svg-hhu76gpd1b";
import imgConcretePillar from "./aabfa83c923ffd68380d02464f92ddd44acdace8.png";
import imgImage2 from "./f068387a9ecb0831125f5b8205e70bd6b4c10d22.png";
import imgSteelFrame from "./1e0de31a9eb5beccaa81f77ec28b80afd6b3f94d.png";
import imgElectricalConduits from "./3530b505514269fd86b8ec8fc25cd0a3e4b0573d.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#3e2723] text-[36px] tracking-[-0.9px] w-full">
        <p className="leading-[45px]">Active Tasks</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6d4c41] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">Manage your daily operations and site inspections.</p>
        <p className="leading-[22.75px]">Ensure all structural standards are met.</p>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="content-stretch flex flex-col gap-[10.875px] items-start relative shrink-0 w-full" data-name="Hero Section">
      <Heading />
      <Container />
    </div>
  );
}

function ConcretePillar() {
  return (
    <div className="absolute inset-0 overflow-clip rounded-[12px]" data-name="Concrete pillar">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute h-[217.5%] left-0 max-w-none top-[-58.75%] w-full" src={imgConcretePillar} />
      </div>
      <div className="absolute h-[205px] left-[-16px] top-[-35.5px] w-[364px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#7a3100] h-[23px] left-[12px] rounded-[8px] top-[12px] w-[78px]" data-name="Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] left-[10px] text-[10px] text-white top-[11px] tracking-[0.5px] uppercase w-[58px]">
        <p className="leading-[15px]">1st FLOOR</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#d7ccc8] h-[160px] relative rounded-[12px] shrink-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ConcretePillar />
        <Background1 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-[28px] justify-center leading-[0] relative shrink-0 text-[#3e2723] text-[20px] w-[237.73px]">
        <p className="leading-[28px]">Install Floor Tiles</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[253.47px] top-[4.49px]">
      <div className="absolute bg-[#fff3e0] h-[19.021px] left-[253.47px] rounded-[4.684px] top-[4.49px] w-[53.867px]" data-name="Rectangle" />
      <p className="absolute font-['Manrope:Bold',sans-serif] font-bold leading-[normal] left-[261.28px] text-[#f5a623] text-[8.587px] top-[7.9px] tracking-[0.3435px] whitespace-nowrap">PENDING</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-between relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Group5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6d4c41] text-[12px] w-full">
        <p className="leading-[19.5px]">Install ceramic floor tiles evenly across the marked area before final finishing work begins.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#7a3100] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center py-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.35px] uppercase w-[94.41px]">
        <p className="leading-[20px]">REVIEW TASK</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[20px] relative size-full">
        <Container2 />
        <Container3 />
        <Button />
      </div>
    </div>
  );
}

function TaskCard() {
  return (
    <div className="bg-[#ede8e2] relative rounded-[12px] shrink-0 w-full" data-name="Task Card 1">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background />
        <Container1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(215,204,200,0.5)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.86%_5.78%_79.26%_88.76%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Group">
          <path d={svgPaths.p2021d300} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p143c5480} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function SteelFrame() {
  return (
    <div className="absolute inset-0 overflow-clip rounded-[12px]" data-name="Steel frame">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute h-[217.5%] left-0 max-w-none top-[-84.23%] w-full" src={imgSteelFrame} />
      </div>
      <Group />
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[#7a3100] h-[23px] left-[12px] rounded-[8px] top-[12px] w-[78px]" data-name="Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] left-[10px] text-[10px] text-white top-[11px] tracking-[0.5px] uppercase w-[58px]">
        <p className="leading-[15px]">1st FLOOR</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#d7ccc8] h-[160px] relative rounded-[12px] shrink-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SteelFrame />
        <Background3 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[90.5px] relative rounded-[12px] shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-[28px] justify-center leading-[0] relative shrink-0 text-[#3e2723] text-[20px] w-[237.73px]">
        <p className="leading-[28px]">Assemble Steel Frame</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[252.47px] top-[18.49px]">
      <div className="absolute bg-[#fff3e0] h-[19.021px] left-[252.47px] rounded-[4.684px] top-[18.49px] w-[53.867px]" data-name="Rectangle" />
      <p className="absolute font-['Manrope:Bold',sans-serif] font-bold leading-[normal] left-[260.28px] text-[#f5a623] text-[8.587px] top-[21.9px] tracking-[0.3435px] whitespace-nowrap">PENDING</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Group6 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6d4c41] text-[12px] w-full">
        <p className="leading-[19.5px] mb-0">Check torque specifications on all primary load-</p>
        <p className="leading-[19.5px]">bearing connections on level 3 sector north.</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#7a3100] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center py-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.35px] uppercase w-[94.41px]">
        <p className="leading-[20px]">REVIEW TASK</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[20px] relative size-full">
        <Container5 />
        <Container6 />
        <Button1 />
      </div>
    </div>
  );
}

function TaskCard1() {
  return (
    <div className="bg-[#ede8e2] relative rounded-[12px] shrink-0 w-full" data-name="Task Card 2">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background2 />
        <Container4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(215,204,200,0.5)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function TaskCard2Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Task Card 2:margin">
      <TaskCard1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[9.05%_5.92%_79.07%_88.62%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Group">
          <path d={svgPaths.p2021d300} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p143c5480} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ElectricalConduits() {
  return (
    <div className="absolute inset-0 overflow-clip rounded-[12px]" data-name="Electrical conduits">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute h-[217.5%] left-0 max-w-none top-[-58.75%] w-full" src={imgElectricalConduits} />
      </div>
      <Group1 />
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-[#7a3100] h-[23px] left-[12px] rounded-[8px] top-[12px] w-[82px]" data-name="Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] left-[10px] text-[10px] text-white top-[11px] tracking-[0.5px] uppercase w-[62px]">
        <p className="leading-[15px]">2nd FLOOR</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#d7ccc8] h-[160px] relative rounded-[12px] shrink-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ElectricalConduits />
        <Background5 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-[28px] justify-center leading-[0] relative shrink-0 text-[#3e2723] text-[20px] w-[244.53px]">
        <p className="leading-[28px]">Install electric cables</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#fff3e0] col-1 h-[19.021px] ml-0 mt-0 relative rounded-[4.684px] row-1 w-[53.867px]" data-name="Rectangle" />
      <p className="col-1 font-['Manrope:Bold',sans-serif] font-bold leading-[normal] ml-[7.81px] mt-[3.41px] relative row-1 text-[#f5a623] text-[8.587px] tracking-[0.3435px] whitespace-nowrap">PENDING</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center justify-between relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Group4 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6d4c41] text-[12px] w-full">
        <p className="leading-[19.5px] mb-0">Review main electrical trunk lines for conflict with</p>
        <p className="leading-[19.5px]">upcoming HVAC duct installation paths.</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#7a3100] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center py-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.35px] uppercase w-[94.41px]">
        <p className="leading-[20px]">REVIEW TASK</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[20px] relative size-full">
        <Container8 />
        <Container9 />
        <Button2 />
      </div>
    </div>
  );
}

function TaskCard2() {
  return (
    <div className="bg-[#ede8e2] relative rounded-[12px] shrink-0 w-full" data-name="Task Card 3">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background4 />
        <Container7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(215,204,200,0.5)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function TaskCard3Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Task Card 3:margin">
      <TaskCard2 />
    </div>
  );
}

function TaskList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Task List">
      <TaskCard />
      <TaskCard2Margin />
      <TaskCard3Margin />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[1234px] items-start left-0 max-w-[448px] px-[20px] right-0 top-[69px]" data-name="Main Content Canvas">
      <HeroSection />
      <TaskList />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[15.79%_10.51%_82.88%_84.62%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Group">
          <path d={svgPaths.p2021d300} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p143c5480} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MdiExchange() {
  return (
    <div className="absolute left-[308.94px] size-[25.833px] top-[18.58px]" data-name="mdi:exchange">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.8333 25.8333">
        <g clipPath="url(#clip0_124_87)" id="mdi:exchange">
          <path d={svgPaths.p2e913cc0} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_124_87">
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
      <div className="-translate-y-1/2 absolute capitalize flex flex-col font-['Outfit:Regular','Noto_Sans_Kannada:Regular',sans-serif] justify-center leading-[0] left-[334.77px] text-[15.296px] text-white top-[30.08px] tracking-[-0.1683px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'wght' 400" }}>
        <p className="leading-[1.5]">ಕನ್ನ</p>
      </div>
      <MdiExchange />
    </div>
  );
}

function Group3() {
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
    <div className="absolute bg-[#fbf9f8] h-[64px] left-0 top-0 w-[390px]" data-name="Header - TopAppBar">
      <LangChangeButton />
      <div className="absolute h-[16px] left-[24px] top-[23px] w-[21px]" data-name="Icon">
        <div className="absolute inset-[-1.56%_-1.19%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 16.5">
            <path d={svgPaths.p1c170d80} fill="var(--fill-0, #2E2A28)" id="Icon" stroke="var(--stroke-0, #2E2A28)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <Group3 />
    </div>
  );
}

export default function Component1TaskListHomeFinalColor() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(253, 251, 247) 0%, rgb(253, 251, 247) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="1. Task List (Home) - Final Color">
      <MainContentCanvas />
      <Group2 />
      <HeaderTopAppBar />
    </div>
  );
}