import svgPaths from "./svg-4bu7875k3x";
import imgHvac from "./8c99a992d1b3b116e15bad3b102448ed92218e53.png";
import imgMarble from "./2ca9d873bb4db7b9b0b807babc695aac35975ccf.png";
import imgImage4 from "./bb36f6e72749115418871a91db17983a102e921c.png";
import imgElectrical from "./b9e653dfad03ae1354dfdf41f97feb9a26745efd.png";
import imgImage5 from "./4b6899e46adc70cf01250584a5d02ad656d233df.png";
import imgLandscaping from "./ac78125d459c7e6f2d47085452ccc7d2368446db.png";
import imgImage6 from "./76e721998061435153a19d42fdb116a8f283ef36.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[30px] tracking-[-0.75px] uppercase w-full">
        <p className="leading-[30px]">PENDING DECISIONS</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#564239] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">THINGS YOU NEED TO APPROVE</p>
      </div>
    </div>
  );
}

function HeadlineSection() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Headline Section">
      <Heading />
      <Container />
    </div>
  );
}

function Hvac() {
  return (
    <div className="aspect-square relative rounded-[8px] shrink-0 w-full" data-name="HVAC">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgHvac} />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-[113.39px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Hvac />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#c62828] text-[10px] tracking-[0.5px] uppercase w-[55.926px]">
        <p className="leading-[15px]">CRITICAL</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Heading 3:margin">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[14px] tracking-[-0.35px] uppercase w-[150.098px]">
        <p className="leading-[19.25px]">AC LAYOUT CHANGE</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] relative shrink-0 text-[#7a3100] text-[12px] w-[105.25px]">
        <p className="leading-[18px]">+₹12,450 • +4 days</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#7a3100] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-white tracking-[1px] uppercase w-[41.44px]">
        <p className="leading-[15px]">REVIEW</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-[194.61px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Margin />
        <Heading3Margin />
        <Margin1 />
        <Link />
      </div>
    </div>
  );
}

function DecisionCard1Critical() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Decision Card 1 (Critical)">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[17px] relative size-full">
          <Container1 />
          <Container2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Marble() {
  return (
    <div className="aspect-square overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Marble">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMarble} />
      </div>
      <div className="absolute left-0 size-[114px] top-[-0.39px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-[113.39px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Marble />
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#564239] text-[10px] tracking-[0.5px] uppercase w-[68.025px]">
        <p className="leading-[15px]">MATERIALS</p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Heading 3:margin">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[14px] tracking-[-0.35px] uppercase w-[198.254px]">
        <p className="leading-[19.25px]">MARBLE FINISH SELECTION</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] relative shrink-0 text-[#564239] text-[12px] w-[102.25px]">
        <p className="leading-[18px]">No cost • No delay</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#7a3100] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-white tracking-[1px] uppercase w-[41.44px]">
        <p className="leading-[15px]">REVIEW</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-[194.61px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Margin2 />
        <Heading3Margin1 />
        <Margin3 />
        <Link1 />
      </div>
    </div>
  );
}

function DecisionCard() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Decision Card 2">
      <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[17px] relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Electrical() {
  return (
    <div className="aspect-square overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Electrical">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgElectrical} />
      </div>
      <div className="absolute left-0 size-[117px] top-[-2.78px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-[113.39px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Electrical />
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#564239] text-[10px] tracking-[0.5px] uppercase w-[73.87px]">
        <p className="leading-[15px]">ELECTRICAL</p>
      </div>
    </div>
  );
}

function Heading3Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Heading 3:margin">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[14px] tracking-[-0.35px] uppercase w-[210.149px]">
        <p className="leading-[19.25px]">LIGHTING DIMMER UPGRADE</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] relative shrink-0 text-[#7a3100] text-[12px] w-[105.55px]">
        <p className="leading-[18px]">+₹4,200 • No delay</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[#7a3100] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-white tracking-[1px] uppercase w-[41.44px]">
        <p className="leading-[15px]">REVIEW</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-[194.61px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Margin4 />
        <Heading3Margin2 />
        <Margin5 />
        <Link2 />
      </div>
    </div>
  );
}

function DecisionCard1() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Decision Card 3">
      <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[17px] relative size-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Landscaping() {
  return (
    <div className="aspect-square overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Landscaping">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLandscaping} />
      </div>
      <div className="absolute h-[132px] left-[-31px] top-[-9.17px] w-[175px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-[113.39px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Landscaping />
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#564239] text-[10px] tracking-[0.5px] uppercase w-[86.871px]">
        <p className="leading-[15px]">LANDSCAPING</p>
      </div>
    </div>
  );
}

function Heading3Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] pr-[32.8px] relative shrink-0" data-name="Heading 3:margin">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[39px] justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[14px] tracking-[-0.35px] uppercase w-[194.61px]">
        <p className="leading-[19.25px] mb-0">TERRACE PLANTER DEPTH</p>
        <p className="leading-[19.25px]">CHANGE</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] relative shrink-0 text-[#7a3100] text-[12px] w-[92.16px]">
        <p className="leading-[18px]">+₹2,800 • +1 day</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[#7a3100] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-white tracking-[1px] uppercase w-[41.44px]">
        <p className="leading-[15px]">REVIEW</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-[194.61px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Margin6 />
        <Heading3Margin3 />
        <Margin7 />
        <Link3 />
      </div>
    </div>
  );
}

function DecisionCard2() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Decision Card 4">
      <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[17px] relative size-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function SectionDecisionsList() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section - Decisions List">
      <DecisionCard1Critical />
      <DecisionCard />
      <DecisionCard1 />
      <DecisionCard2 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-0 max-w-[390px] min-h-[996px] pt-[9px] px-[16px] right-0 top-[64px]" data-name="Main">
      <HeadlineSection />
      <SectionDecisionsList />
    </div>
  );
}

function Margin8() {
  return (
    <div className="h-[22px] relative shrink-0 w-[16px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 22">
        <g id="Margin">
          <path d={svgPaths.p12a32500} fill="var(--fill-0, #564239)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] relative shrink-0 text-[#564239] text-[9px] tracking-[0.9px] uppercase w-[28.97px]">
        <p className="leading-[13.5px]">HOME</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Margin8 />
        <Container9 />
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="h-[23px] relative shrink-0 w-[18px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 23">
        <g id="Margin">
          <path d={svgPaths.p19ed9400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] relative shrink-0 text-[9px] text-white tracking-[0.9px] uppercase w-[53.47px]">
        <p className="leading-[13.5px]">DECISIONS</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-[#7a3100] flex-[1_0_0] h-full min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Margin9 />
        <Container10 />
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="h-[23px] relative shrink-0 w-[22px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 23">
        <g id="Margin">
          <path d={svgPaths.p7555480} fill="var(--fill-0, #564239)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] relative shrink-0 text-[#564239] text-[9px] tracking-[0.9px] uppercase w-[35.5px]">
        <p className="leading-[13.5px]">ISSUES</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Margin10 />
        <Container11 />
      </div>
    </div>
  );
}

function Margin11() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Margin">
          <path d={svgPaths.p3baffdc0} fill="var(--fill-0, #564239)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] relative shrink-0 text-[#564239] text-[9px] tracking-[0.9px] uppercase w-[45.36px]">
        <p className="leading-[13.5px]">TIMELINE</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Margin11 />
        <Container12 />
      </div>
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex h-[64px] items-start justify-center left-0 max-w-[390px] pt-px w-[390px]" data-name="BottomNavBar">
      <div aria-hidden="true" className="absolute border-[#8a7267] border-solid border-t inset-0 pointer-events-none" />
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
    </div>
  );
}

function MdiExchange() {
  return (
    <div className="absolute left-[308.94px] size-[25.833px] top-[18.58px]" data-name="mdi:exchange">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.8333 25.8333">
        <g clipPath="url(#clip0_186_659)" id="mdi:exchange">
          <path d={svgPaths.p2e913cc0} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_186_659">
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
      <div className="-translate-y-1/2 absolute capitalize flex flex-col font-['Outfit:Regular','Noto_Sans_Kannada:Regular',sans-serif] font-normal justify-center leading-[0] left-[334.77px] text-[15.296px] text-white top-[30.08px] tracking-[-0.1683px] whitespace-nowrap">
        <p className="leading-[1.5]">ಕನ್ನ</p>
      </div>
      <MdiExchange />
    </div>
  );
}

function Group() {
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
      <Group />
    </div>
  );
}

function Component2PendingDecisionsVisual() {
  return (
    <div className="col-1 h-[904px] ml-0 mt-0 relative row-1 w-[390px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(251, 249, 248) 0%, rgb(251, 249, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="2. Pending Decisions (Visual)">
      <Main />
      <BottomNavBar />
      <HeaderTopAppBar />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 z-[1]">
      <Component2PendingDecisionsVisual />
    </div>
  );
}

export default function Component2Descisons() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start relative size-full" data-name="2. descisons">
      <Group1 />
    </div>
  );
}