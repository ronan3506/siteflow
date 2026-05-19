import { useRef, useState } from "react";
import { motion } from "motion/react";
import svgPaths from "../../../imports/6ProfileSetupMobilePhoneSync/svg-fu02xaf4y6";
import { LangBadge } from "../LangBadge";

function Header() {
  return (
    <div className="absolute top-0 left-0 right-0 bg-[#fbf9f8] flex h-[64px] items-center justify-between px-[24px] z-10">
      <div className="inline-grid grid-cols-[max-content] grid-rows-[max-content] leading-[0] place-items-start relative shrink-0">
        <div className="col-start-1 row-start-1 flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic text-[29.501px] text-black tracking-[1.3963px] uppercase w-[188px] whitespace-nowrap">
          <p className="leading-[42.144px]">s teFLOW</p>
        </div>
        <div className="col-start-1 row-start-1 h-[21.546px] ml-[17.46px] mt-[10.41px] w-[16.655px] relative">
          <svg className="absolute inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6555 21.5459">
            <path d={svgPaths.p64c780} fill="black" />
          </svg>
        </div>
      </div>
      <LangBadge />
    </div>
  );
}

export function Screen6({ onContinue }: { onContinue: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const enabled = name.trim().length > 0 && phone.trim().length >= 10;

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setPhoto(URL.createObjectURL(f));
  };

  return (
    <div className="relative size-full" style={{ background: "#fbf9f8" }}>
      <Header />

      <div className="absolute inset-[64px_0_0_0] flex flex-col items-center px-[24px] pt-[15px] pb-[140px] overflow-auto">
        {/* Title */}
        <div className="flex flex-col gap-[7px] pb-[40px] items-center w-full">
          <h1 className="font-['Manrope:ExtraBold',sans-serif] font-extrabold text-[22px] leading-[28.6px] text-[#96593d] text-center">
            Set up your profile
          </h1>
          <p className="font-['Manrope:Medium',sans-serif] font-medium text-[15px] leading-[22.5px] text-[#564239] text-center">
            Add your details to continue
          </p>
        </div>

        {/* Profile picture */}
        <div className="flex flex-col items-center pb-[40px]">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => fileRef.current?.click()}
            className="relative size-[96px] rounded-full bg-[#efeded] border border-[#ddc1b4] flex items-center justify-center overflow-hidden"
          >
            {photo ? (
              <img src={photo} alt="profile" className="size-full object-cover" />
            ) : (
              <svg viewBox="0 0 32 32" fill="none" className="size-[32px]">
                <path d={svgPaths.p348ddf00} fill="#8A7267" />
              </svg>
            )}
            <div className="absolute bottom-0 right-0 bg-[#7a3100] size-[32px] rounded-full border-2 border-white flex items-center justify-center shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
              <svg viewBox="0 0 11.6667 10.5" fill="none" className="w-[11.67px] h-[10.5px]">
                <path d={svgPaths.p14a91f00} fill="white" />
              </svg>
            </div>
          </motion.button>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handlePhoto} />
          <p className="pt-[12px] font-['Manrope:Regular',sans-serif] text-[13px] text-[#8a7267] leading-[19.5px]">
            Add profile photo
          </p>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-[24px] w-full">
          <div className="bg-[#f5f3f3] rounded-[8px] border border-[#ddc1b4] h-[52px] flex items-center px-[17px]">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full bg-transparent outline-none font-['Manrope:Medium',sans-serif] text-[15px] text-[#1b1c1c] placeholder:text-[#6b7280]"
            />
          </div>

          <div className="bg-[#f5f3f3] rounded-[8px] border border-[#ddc1b4] h-[52px] flex items-stretch overflow-hidden">
            <div className="bg-[#efeded] flex items-center px-[17px] border-r border-[#ddc1b4]">
              <span className="font-['Manrope:Bold',sans-serif] font-bold text-[15px] text-[#1b1c1c]">+91</span>
            </div>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^\d]/g, "").slice(0, 10))}
              placeholder="Enter mobile number"
              className="flex-1 bg-transparent outline-none px-[16px] font-['Manrope:Medium',sans-serif] text-[15px] text-[#1b1c1c] placeholder:text-[#6b7280]"
            />
          </div>
        </div>
      </div>

      {/* Bottom button */}
      <div className="absolute bottom-0 left-0 w-full bg-[#fbf9f8] pb-[40px] pt-[16px] px-[32px]">
        <motion.button
          whileTap={enabled ? { scale: 0.98 } : {}}
          disabled={!enabled}
          onClick={() => enabled && onContinue()}
          className={`h-[52px] w-full rounded-[12px] transition-all duration-250 font-['Manrope:Bold',sans-serif] font-bold text-[15px] tracking-[0.375px] uppercase text-white ${
            enabled
              ? "bg-[#7a3100] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
              : "bg-[#d9cfc8] cursor-not-allowed"
          }`}
        >
          CONTINUE
        </motion.button>
      </div>
    </div>
  );
}