import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function Screen7({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(8);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(id);
          return 100;
        }
        return p + Math.random() * 4 + 1;
      });
    }, 220);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (progress >= 100 && onComplete) {
      const t = setTimeout(onComplete, 400);
      return () => clearTimeout(t);
    }
  }, [progress, onComplete]);

  return (
    <div
      className="relative size-full flex items-center justify-center"
      style={{ background: "#fbf9f8" }}
    >
      <div className="relative w-full max-w-[448px] flex flex-col items-center px-[24px]">
        {/* Loader circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
          className="bg-white rounded-full size-[96px] flex items-center justify-center shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[rgba(221,193,180,0.2)] mb-[40px]"
        >
          <div className="size-[40px] rounded-full border-2 border-[#7a3100] border-t-transparent" />
        </motion.div>

        {/* Heading */}
        <h1 className="font-['Manrope:ExtraBold',sans-serif] font-extrabold text-[32px] leading-[40px] tracking-[-0.8px] text-[#1b1c1c] text-center mb-[16px]">
          Setting up your<br />workspace...
        </h1>

        <p className="font-['Manrope:Medium',sans-serif] font-medium text-[16px] leading-[26px] text-[#564239] text-center mb-[40px]">
          This will take a moment
        </p>

        {/* Progress bar */}
        <div className="w-full max-w-[330px] h-[6px] bg-[#e4e2e2] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#7a3100] rounded-full shadow-[0px_0px_12px_0px_rgba(122,49,0,0.2)]"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
}