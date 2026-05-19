import svgPaths from "./svg-q16qru0qpm";
import { LangBadge } from "../../app/components/LangBadge";

function HeroIllustration() {
  return <div className="absolute h-[336px] left-[24px] top-0 w-[342px]" data-name="Hero Illustration" />;
}

function MainContent() {
  return (
    <div className="absolute h-[463px] left-0 top-[46px] w-[390px]" data-name="Main Content">
      <HeroIllustration />
    </div>
  );
}

function PaginationDots() {
  return (
    <div className="absolute h-[10px] left-0 top-[706px] w-[390px]" data-name="Pagination Dots">
      <div className="absolute bg-[#7a3100] left-[172px] rounded-[9999px] size-[10px] top-0" data-name="Background" />
      <div className="absolute bg-[#ddc1b4] left-[190px] rounded-[9999px] size-[10px] top-0" data-name="Background" />
      <div className="absolute bg-[#ddc1b4] left-[208px] rounded-[9999px] size-[10px] top-0" data-name="Background" />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[24.5px] left-0 top-[1.25px] w-[23.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3333 24.5">
        <g id="Container">
          <path d={svgPaths.p19737800} fill="var(--fill-0, #7A3100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[27px] left-[39.33px] top-0 w-[124.55px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[#1b1c1c] text-[18px] top-[13.5px] whitespace-nowrap">
        <p className="leading-[27px]">Track progress</p>
      </div>
    </div>
  );
}

function SimplifiedRow() {
  return (
    <div className="absolute h-[27px] left-[112px] top-0 w-[166px]" data-name="Simplified Row 1">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[23.392px] left-0 top-[1.8px] w-[23.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3333 23.3917">
        <g id="Container">
          <path d={svgPaths.p21d0b600} fill="var(--fill-0, #7A3100)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[27px] left-[39.33px] top-0 w-[106px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[#1b1c1c] text-[18px] top-[13.5px] whitespace-nowrap">
        <p className="leading-[27px]">See updates</p>
      </div>
    </div>
  );
}

function SimplifiedRow1() {
  return (
    <div className="absolute h-[27px] left-[112px] top-[31px] w-[166px]" data-name="Simplified Row 2">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[58px] left-[-1.5px] top-[616px] w-[390px]" data-name="Container">
      <SimplifiedRow />
      <SimplifiedRow1 />
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
        <g clipPath="url(#clip0_1_537)" id="mdi:exchange">
          <path d={svgPaths.p2e913cc0} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_537">
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

function ConstructionWorkerDiggingWithShovelVectorized() {
  return (
    <div className="absolute h-[311px] left-[-29.5px] top-[151px] w-[431px]" data-name="Construction worker digging with shovel [Vectorized]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 431 311">
        <g id="Construction worker digging with shovel [Vectorized]">
          <path d={svgPaths.p19a41400} fill="var(--fill-0, #F9A461)" id="Vector" />
          <path d={svgPaths.pa29dd80} fill="var(--fill-0, #AFB6C5)" id="Vector_2" />
          <path d={svgPaths.p195ee3c0} fill="var(--fill-0, #959497)" id="Vector_3" />
          <path d={svgPaths.p1ab82880} fill="var(--fill-0, #959497)" id="Vector_4" />
          <path d={svgPaths.p18b22a80} fill="var(--fill-0, #D6D4D3)" id="Vector_5" />
          <path d={svgPaths.p380f3b00} fill="var(--fill-0, #D6D4D3)" id="Vector_6" />
          <path d={svgPaths.p19ff47c0} fill="var(--fill-0, #F09164)" id="Vector_7" />
          <path d={svgPaths.p2ee3b700} fill="var(--fill-0, #010000)" id="Vector_8" />
          <path d={svgPaths.p6353e00} fill="var(--fill-0, #F09164)" id="Vector_9" />
          <path d={svgPaths.p374e2000} fill="var(--fill-0, #010000)" id="Vector_10" />
          <path d={svgPaths.p15636100} fill="var(--fill-0, #F09164)" id="Vector_11" />
          <path d={svgPaths.p2aa5480} fill="var(--fill-0, #F09164)" id="Vector_12" />
          <path d={svgPaths.p1497ba00} fill="var(--fill-0, #DD3B2D)" id="Vector_13" />
          <path d={svgPaths.p1f5cc900} fill="var(--fill-0, #010000)" id="Vector_14" />
          <path d={svgPaths.p30e41a80} fill="var(--fill-0, #010000)" fillOpacity="0.988235" id="Vector_15" />
          <path d={svgPaths.p2dd71e80} fill="var(--fill-0, #010000)" fillOpacity="0.988235" id="Vector_16" />
          <path d={svgPaths.p27fdda00} fill="var(--fill-0, #010000)" fillOpacity="0.984314" id="Vector_17" />
          <path d={svgPaths.p776d400} fill="var(--fill-0, #010000)" fillOpacity="0.984314" id="Vector_18" />
          <path d={svgPaths.p3e74f400} fill="var(--fill-0, #010000)" fillOpacity="0.984314" id="Vector_19" />
          <path d={svgPaths.p32c78c80} fill="var(--fill-0, #010000)" fillOpacity="0.984314" id="Vector_20" />
          <path d={svgPaths.p3bea4600} fill="var(--fill-0, #DD3B2D)" id="Vector_21" />
          <path d={svgPaths.p37eb9c0} fill="var(--fill-0, #010000)" fillOpacity="0.980392" id="Vector_22" />
          <path d={svgPaths.padc9f80} fill="var(--fill-0, #010000)" id="Vector_23" />
          <path d={svgPaths.p23228110} fill="var(--fill-0, #F9B944)" id="Vector_24" />
          <path d={svgPaths.p1d5e1880} fill="var(--fill-0, #959497)" id="Vector_25" />
          <path d={svgPaths.p3fe4f80} fill="var(--fill-0, #F48144)" id="Vector_26" />
          <path d={svgPaths.p3a4a7400} fill="var(--fill-0, #F9B944)" id="Vector_27" />
          <path d={svgPaths.p26e23500} fill="var(--fill-0, #BA4D40)" id="Vector_28" />
          <path d={svgPaths.p164e0580} fill="var(--fill-0, #55668B)" id="Vector_29" />
          <path d={svgPaths.p1d19cc00} fill="var(--fill-0, #55668B)" id="Vector_30" />
          <path d={svgPaths.p1baac000} fill="var(--fill-0, #F48144)" id="Vector_31" />
          <path d={svgPaths.p24b5fa10} fill="var(--fill-0, #BA4D40)" id="Vector_32" />
          <path d={svgPaths.p3e246600} fill="var(--fill-0, #35425F)" id="Vector_33" />
          <path d={svgPaths.p5b3a900} fill="var(--fill-0, #010000)" id="Vector_34" />
          <path d={svgPaths.p1e3e3400} fill="var(--fill-0, #F48144)" id="Vector_35" />
          <path d={svgPaths.p1cf1a800} fill="var(--fill-0, #BA4D40)" id="Vector_36" />
          <path d={svgPaths.p30657100} fill="var(--fill-0, #35425F)" id="Vector_37" />
          <path d={svgPaths.p93bc3f0} fill="var(--fill-0, #959497)" id="Vector_38" />
          <path d={svgPaths.p17d784f0} fill="var(--fill-0, #959497)" id="Vector_39" />
          <path d={svgPaths.pd1619f0} fill="var(--fill-0, #959497)" id="Vector_40" />
          <path d={svgPaths.p3c140ef0} fill="var(--fill-0, #D6D4D3)" id="Vector_41" />
          <path d={svgPaths.p3c410200} fill="var(--fill-0, #D6D4D3)" id="Vector_42" />
          <path d={svgPaths.p1682cb80} fill="var(--fill-0, #959497)" id="Vector_43" />
          <path d={svgPaths.p2c60b5c0} fill="var(--fill-0, #8D2522)" id="Vector_44" />
          <path d={svgPaths.p2a0e4000} fill="var(--fill-0, #DD3B2D)" id="Vector_45" />
          <path d={svgPaths.p2badd700} fill="var(--fill-0, #959497)" id="Vector_46" />
          <path d={svgPaths.p1b756b80} fill="var(--fill-0, #D6D4D3)" id="Vector_47" />
          <path d={svgPaths.p167b0c80} fill="var(--fill-0, #55668B)" id="Vector_48" />
          <path d={svgPaths.p2f7109c0} fill="var(--fill-0, #010000)" id="Vector_49" />
          <path d={svgPaths.p344bdd00} fill="var(--fill-0, #F09164)" id="Vector_50" />
          <path d={svgPaths.p1ee47f30} fill="var(--fill-0, #010000)" id="Vector_51" />
          <path d={svgPaths.pf9f3b00} fill="var(--fill-0, #F09164)" id="Vector_52" />
          <path d={svgPaths.pef66f00} fill="var(--fill-0, #F9B944)" id="Vector_53" />
          <path d={svgPaths.p246f4c00} fill="var(--fill-0, #D6D4D3)" id="Vector_54" />
          <path d={svgPaths.p22929200} fill="var(--fill-0, #D6D4D3)" id="Vector_55" />
          <path d={svgPaths.p2b9c9a00} fill="var(--fill-0, #D6D4D3)" id="Vector_56" />
          <path d={svgPaths.p3b2feb00} fill="var(--fill-0, #D6D4D3)" id="Vector_57" />
          <path d={svgPaths.p26ba92f2} fill="var(--fill-0, #D6D4D3)" id="Vector_58" />
          <path d={svgPaths.p20b0980} fill="var(--fill-0, #D6D4D3)" id="Vector_59" />
          <path d={svgPaths.p3bfed80} fill="var(--fill-0, #D6D4D3)" id="Vector_60" />
          <path d={svgPaths.p31c22600} fill="var(--fill-0, #D6D4D3)" id="Vector_61" />
          <path d={svgPaths.p1346da40} fill="var(--fill-0, black)" fillOpacity="0.964706" id="Vector_62" />
          <path d={svgPaths.p3c22cb00} fill="var(--fill-0, #F09164)" id="Vector_63" />
          <path d={svgPaths.p309ef280} fill="var(--fill-0, #D6D4D3)" id="Vector_64" />
          <path d={svgPaths.p28cd5e00} fill="var(--fill-0, #D6D4D3)" id="Vector_65" />
          <path d={svgPaths.p2b251980} fill="var(--fill-0, #D6D4D3)" id="Vector_66" />
          <path d={svgPaths.p37cc6f0} fill="var(--fill-0, #D6D4D3)" id="Vector_67" />
          <path d={svgPaths.pf5cdf00} fill="var(--fill-0, #D6D4D3)" id="Vector_68" />
          <path d={svgPaths.p3f165000} fill="var(--fill-0, #F9B944)" id="Vector_69" />
          <path d={svgPaths.p35f20c80} fill="var(--fill-0, #BA4D40)" id="Vector_70" />
          <path d={svgPaths.p10333300} fill="var(--fill-0, #010000)" id="Vector_71" />
          <path d={svgPaths.p1a4fd480} fill="var(--fill-0, #010000)" fillOpacity="0.929412" id="Vector_72" />
          <path d={svgPaths.p2e655080} fill="var(--fill-0, #F9B944)" id="Vector_73" />
          <path d={svgPaths.p3bd16800} fill="var(--fill-0, #010000)" fillOpacity="0.94902" id="Vector_74" />
          <path d={svgPaths.p3d146200} fill="var(--fill-0, #8D2522)" id="Vector_75" />
          <path d={svgPaths.p205a6c80} fill="var(--fill-0, #8D2522)" id="Vector_76" />
          <path d={svgPaths.p187a980} fill="var(--fill-0, black)" fillOpacity="0.956863" id="Vector_77" />
          <path d={svgPaths.p343bb900} fill="var(--fill-0, #010000)" fillOpacity="0.976471" id="Vector_78" />
          <path d={svgPaths.pe110100} fill="var(--fill-0, black)" fillOpacity="0.964706" id="Vector_79" />
          <path d={svgPaths.p19110f80} fill="var(--fill-0, #F9B944)" id="Vector_80" />
          <path d={svgPaths.p35337300} fill="var(--fill-0, #F9B944)" id="Vector_81" />
          <path d={svgPaths.p3b729880} fill="var(--fill-0, #F9B944)" id="Vector_82" />
          <path d={svgPaths.p434e600} fill="var(--fill-0, #F9B944)" id="Vector_83" />
          <path d={svgPaths.p377d2600} fill="var(--fill-0, #F09164)" id="Vector_84" />
          <path d={svgPaths.p16b50d80} fill="var(--fill-0, #DD3B2D)" id="Vector_85" />
          <path d={svgPaths.pb5298f0} fill="var(--fill-0, black)" fillOpacity="0.964706" id="Vector_86" />
          <path d={svgPaths.p38a00200} fill="var(--fill-0, #DD3B2D)" id="Vector_87" />
          <path d={svgPaths.p370c3c00} fill="var(--fill-0, #DD3B2D)" id="Vector_88" />
          <path d={svgPaths.p38d7000} fill="var(--fill-0, black)" fillOpacity="0.976471" id="Vector_89" />
          <path d={svgPaths.p3e723200} fill="var(--fill-0, #DD3B2D)" id="Vector_90" />
          <path d={svgPaths.p16bb3700} fill="var(--fill-0, #010000)" fillOpacity="0.980392" id="Vector_91" />
          <path d={svgPaths.p38f9600} fill="var(--fill-0, #010000)" fillOpacity="0.984314" id="Vector_92" />
          <path d={svgPaths.p1d190670} fill="var(--fill-0, #F09164)" id="Vector_93" />
          <path d={svgPaths.p24f5f480} fill="var(--fill-0, #010000)" fillOpacity="0.988235" id="Vector_94" />
        </g>
      </svg>
    </div>
  );
}

export default function Component2OnboardingFinalFixed() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(251, 249, 248) 0%, rgb(251, 249, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="2. Onboarding - Final (Fixed)">
      <MainContent />
      <PaginationDots />
      <Container />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[195.5px] text-[#9f4301] text-[32px] text-center top-[568px] whitespace-nowrap">
        <p className="leading-[35.2px]">Assign Work</p>
      </div>
      <ButtonPrimaryAction />
      <HeaderTopAppBar />
      <ConstructionWorkerDiggingWithShovelVectorized />
    </div>
  );
}