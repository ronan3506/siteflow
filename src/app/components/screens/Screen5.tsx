import { useState } from "react";
import { motion } from "motion/react";
import svgPaths from "../../../imports/5RoleSelectionFixed/svg-xze5wifxs3";
import { LangBadge } from "../LangBadge";

const ROLES = [
  { id: "architect", label: "ARCHITECT", icon: <svg viewBox="0 0 16.5 27" className="h-[27px] w-[16.5px]"><path d={svgPaths.pf251c40} fill="#564239" /></svg> },
  { id: "contractor", label: "CONTRACTOR", icon: <svg viewBox="0 0 32.85 27" className="h-[27px] w-[32.85px]"><path d={svgPaths.p3e5f5e80} fill="#564239" /></svg> },
  { id: "worker", label: "WORKER", icon: <svg viewBox="0 0 27.7875 27.0375" className="h-[27px] w-[27.78px]"><path d={svgPaths.p2d750900} fill="#564239" /></svg> },
  { id: "client", label: "CLIENT", icon: <svg viewBox="0 0 24 24" className="size-[24px]"><path d={svgPaths.p8fce480} fill="#7A3100" /></svg> },
];

function Header() {
  return (
    <div className="bg-[#fbf9f8] flex h-[64px] items-center justify-between px-[24px] w-full">
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

export function Screen5({
  onContinue,
  returningUser = false,
}: {
  onContinue: (role: string) => void;
  returningUser?: boolean;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const enabled = selected !== null;

  const handleRoleClick = (roleId: string) => {
    if (returningUser) {
      onContinue(roleId);
    } else {
      setSelected(roleId);
    }
  };

  return (
    <div className="relative size-full flex flex-col items-center" style={{ background: "#fbf9f8" }}>
      <Header />

      <div className="w-full max-w-[448px] flex flex-col px-[32px] pt-[15px] pb-[180px] flex-1">
        {/* Heading */}
        <div className="flex flex-col gap-[8px] pb-[40px]">
          <h1 className="font-['Manrope:ExtraBold',sans-serif] font-extrabold text-[32px] leading-[40px] text-[#96593d]">
            {returningUser ? "Welcome back." : "Who are you?"}
          </h1>
          <p className="font-['Manrope:Medium',sans-serif] font-medium text-[16px] leading-[24px] text-[#564239]">
            {returningUser ? "Select your profile to continue" : "Select your role"}
          </p>
        </div>

        {/* Role grid */}
        <div className="grid grid-cols-2 gap-[16px] w-full">
          {ROLES.map((r) => {
            const isSelected = !returningUser && selected === r.id;
            return (
              <motion.button
                key={r.id}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleRoleClick(r.id)}
                className={`relative h-[155px] rounded-[12px] flex flex-col items-center justify-center gap-[12px] transition-colors duration-200 ${
                  isSelected ? "bg-white" : "bg-[#f5f3f3]"
                }`}
                style={{
                  filter: isSelected
                    ? "drop-shadow(0px 4px 4px rgba(0,0,0,0.25)) drop-shadow(0px 1px 1px rgba(0,0,0,0.05))"
                    : "drop-shadow(0px 1px 1px rgba(0,0,0,0.05))",
                }}
              >
                <div
                  aria-hidden
                  className={`absolute inset-0 rounded-[12px] pointer-events-none border-2 ${
                    isSelected ? "border-[#7a3100]" : "border-transparent"
                  }`}
                />
                {r.icon}
                <span className="font-['Manrope:Bold',sans-serif] font-bold text-[12px] tracking-[1.2px] uppercase text-[#1b1c1c] leading-[16px]">
                  {r.label}
                </span>
                {isSelected && (
                  <div className="absolute right-[10px] top-[10px] size-[16.667px]">
                    <svg viewBox="0 0 16.6667 16.6667" fill="none">
                      <path d={svgPaths.p6e98980} fill="#7A3100" />
                    </svg>
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Bottom button — hidden in returning user mode */}
      {!returningUser && (
        <div className="absolute bottom-0 left-0 w-full bg-[#fbf9f8] pb-[40px] pt-[16px] px-[32px]">
          <motion.button
            whileTap={enabled ? { scale: 0.98 } : {}}
            disabled={!enabled}
            onClick={() => enabled && onContinue(selected!)}
            className={`h-[52px] w-full rounded-[12px] transition-all duration-250 font-['Manrope:Bold',sans-serif] font-bold text-[15px] tracking-[0.375px] uppercase text-white ${
              enabled
                ? "bg-[#7a3100] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
                : "bg-[#d9cfc8] cursor-not-allowed"
            }`}
          >
            CONTINUE
          </motion.button>
        </div>
      )}
    </div>
  );
}
