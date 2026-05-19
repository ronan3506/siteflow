import { useState } from "react";
import svgPaths from "../../imports/3TaskAssignmentMobile-1/svg-ybiry1cibf";
import imgImage14 from "../../imports/3TaskAssignmentMobile-1/181963f2d49061eccafc8eb373f52a6dd6870927.png";
import imgImage13 from "../../imports/3TaskAssignmentMobile-1/f4775925dd8ae51fa91df8581e2ff018eeedf1fa.png";
import imgImage12 from "../../imports/3TaskAssignmentMobile-1/c79072b03053f8d4e1dfff5980541de18329d1f1.png";
import imgImage15 from "../../imports/3TaskAssignmentMobile-1/8397a0af8108bd240a71798f6fa6a6f4edcebf3b.png";

type Zone = "ground" | "1st" | "exterior";
type Skill = "plumbing" | "electric" | "paint" | "masonry";

interface WorkerDef {
  id: string;
  name: string;
  img: string;
  imgH: string;
  imgL: string;
  imgT: string;
  imgW: string;
}

const workersBySkill: Record<Skill, WorkerDef[]> = {
  plumbing: [
    { id: "raju",   name: "RAJU",   img: imgImage14, imgH: "151.32%", imgL: "0",       imgT: "-25.66%", imgW: "100%"    },
    { id: "suraj",  name: "SURAJ",  img: imgImage13, imgH: "152.28%", imgL: "0",       imgT: "-24.58%", imgW: "100%"    },
    { id: "kiran",  name: "KIRAN",  img: imgImage12, imgH: "163.99%", imgL: "-17.84%", imgT: "0",       imgW: "221.88%" },
    { id: "arnab",  name: "ARNAB",  img: imgImage15, imgH: "302.85%", imgL: "-73.82%", imgT: "-39.46%", imgW: "236.03%" },
  ],
  electric: [
    { id: "vikram", name: "VIKRAM", img: imgImage13, imgH: "152.28%", imgL: "0",       imgT: "-24.58%", imgW: "100%"    },
    { id: "amit",   name: "AMIT",   img: imgImage14, imgH: "151.32%", imgL: "0",       imgT: "-25.66%", imgW: "100%"    },
    { id: "deepak", name: "DEEPAK", img: imgImage15, imgH: "302.85%", imgL: "-73.82%", imgT: "-39.46%", imgW: "236.03%" },
    { id: "rajesh", name: "RAJESH", img: imgImage12, imgH: "163.99%", imgL: "-17.84%", imgT: "0",       imgW: "221.88%" },
  ],
  paint: [
    { id: "priya",  name: "PRIYA",  img: imgImage12, imgH: "163.99%", imgL: "-17.84%", imgT: "0",       imgW: "221.88%" },
    { id: "anita",  name: "ANITA",  img: imgImage15, imgH: "302.85%", imgL: "-73.82%", imgT: "-39.46%", imgW: "236.03%" },
    { id: "mohan",  name: "MOHAN",  img: imgImage14, imgH: "151.32%", imgL: "0",       imgT: "-25.66%", imgW: "100%"    },
    { id: "suresh", name: "SURESH", img: imgImage13, imgH: "152.28%", imgL: "0",       imgT: "-24.58%", imgW: "100%"    },
  ],
  masonry: [
    { id: "babu",   name: "BABU",   img: imgImage15, imgH: "302.85%", imgL: "-73.82%", imgT: "-39.46%", imgW: "236.03%" },
    { id: "arjun",  name: "ARJUN",  img: imgImage12, imgH: "163.99%", imgL: "-17.84%", imgT: "0",       imgW: "221.88%" },
    { id: "vijay",  name: "VIJAY",  img: imgImage13, imgH: "152.28%", imgL: "0",       imgT: "-24.58%", imgW: "100%"    },
    { id: "santosh",name: "SANTOSH",img: imgImage14, imgH: "151.32%", imgL: "0",       imgT: "-25.66%", imgW: "100%"    },
  ],
};

// ─── ZONE CARDS ────────────────────────────────────────────────────────────────

interface ZoneCardProps {
  label: string;
  sub: string;
  iconPath: string;
  iconViewBox: string;
  iconW: number;
  iconH: number;
  selected: boolean;
  left: number;
  onClick: () => void;
}

function ZoneCard({ label, sub, iconPath, iconViewBox, iconW, iconH, selected, left, onClick }: ZoneCardProps) {
  return (
    <div
      className="absolute h-[128px] w-[200px] min-w-[200px] cursor-pointer"
      style={{ left }}
      onClick={onClick}
    >
      <div
        className="flex flex-col h-full items-start justify-between p-[21px] rounded-[12px] transition-colors duration-150"
        style={{ backgroundColor: selected ? "#ffffff" : "#fbf9f8" }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none rounded-[12px] border border-solid transition-colors duration-150"
          style={{ borderColor: selected ? "#7a3100" : "#bdbdbd" }}
        />
        {/* Icon */}
        <div className="relative shrink-0 w-full">
          <div className="bg-clip-padding border-0 border-transparent border-solid flex flex-col items-start relative size-full">
            <div className="relative shrink-0" style={{ width: iconW, height: iconH }}>
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox={iconViewBox}
              >
                <path
                  d={iconPath}
                  fill={selected ? "#7A3100" : "#564239"}
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Labels */}
        <div className="relative shrink-0 w-full">
          <div className="flex flex-col items-start relative size-full">
            <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[14px] uppercase w-full">
              <p className="leading-[20px]">{label}</p>
            </div>
            <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#564239] text-[10px] uppercase w-full">
              <p className="leading-[15px]">{sub}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── SKILL CARD ────────────────────────────────────────────────────────────────

interface SkillCardProps {
  label: string;
  iconPath: string;
  iconViewBox: string;
  iconW: number;
  iconH: number;
  selected: boolean;
  onClick: () => void;
}

function SkillCard({ label, iconPath, iconViewBox, iconW, iconH, selected, onClick }: SkillCardProps) {
  return (
    <div
      className="justify-self-stretch relative rounded-[12px] self-center shrink-0 cursor-pointer transition-colors duration-150"
      style={{ backgroundColor: selected ? "#7a3100" : "#fbf9f8" }}
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center size-full">
        <div
          className="flex flex-col items-center justify-center p-[16px] relative size-full"
          style={{ gap: selected ? "5px" : "8px" }}
        >
          <div className="relative shrink-0" style={{ width: iconW, height: iconH }}>
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox={iconViewBox}
            >
              <path
                d={iconPath}
                fill={selected ? "white" : "#564239"}
              />
            </svg>
          </div>
          <div className="flex flex-col items-start relative shrink-0">
            <div
              className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[9px] uppercase whitespace-nowrap"
              style={{ color: selected ? "white" : "#564239" }}
            >
              <p className="leading-[13.5px]">{label}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── WORKER CARD ───────────────────────────────────────────────────────────────

interface WorkerCardProps {
  worker: WorkerDef;
  selected: boolean;
  onClick: () => void;
}

function WorkerCard({ worker, selected, onClick }: WorkerCardProps) {
  return (
    <div
      className="flex flex-col gap-[8px] items-center relative self-stretch shrink-0 cursor-pointer"
      onClick={onClick}
    >
      {/* Avatar */}
      <div
        className="flex flex-col items-start justify-center p-[5px] relative rounded-[12px] shrink-0 size-[64px] transition-all duration-150"
        style={{
          backgroundColor: selected ? "#ffffff" : "#fbf9f8",
          opacity: selected ? 1 : 0.6,
        }}
      >
        {/* border overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none rounded-[12px] border border-solid transition-colors duration-150"
          style={{ borderColor: selected ? "#7a3100" : "transparent" }}
        />
        {/* Desaturate filter for unselected */}
        {!selected && (
          <>
            <div className="absolute bg-[#fbf9f8] inset-0 rounded-[12px]" />
            <div className="absolute bg-white inset-0 mix-blend-saturation rounded-[12px]" />
          </>
        )}
        {/* Photo */}
        <div className="h-[53.5px] relative rounded-[6px] shrink-0 w-[54px] z-[1]">
          <div className="absolute bg-clip-padding border-0 border-transparent border-solid inset-0 overflow-hidden pointer-events-none rounded-[6px]">
            <img
              alt=""
              className="absolute max-w-none"
              style={{
                height: worker.imgH,
                left: worker.imgL,
                top: worker.imgT,
                width: worker.imgW,
              }}
              src={worker.img}
            />
          </div>
        </div>
        {/* Checkmark badge */}
        {selected && (
          <div className="absolute bg-[#7a3100] right-[-3px] size-[20px] top-[-3px] rounded-[3px] z-[2]">
            <div className="flex items-center justify-center relative size-full">
              <div className="h-[7.015px] relative shrink-0 w-[9.508px]">
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 9.50833 7.01458"
                >
                  <path d={svgPaths.p25f8ca80} fill="white" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Name */}
      <div className="flex flex-col items-start relative shrink-0">
        <div
          className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[10px] uppercase whitespace-nowrap"
          style={{ color: selected ? "#1b1c1c" : "#564239" }}
        >
          <p className="leading-[15px]">{worker.name}</p>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN INTERACTIVE COMPONENT ────────────────────────────────────────────────

export function InteractiveTaskAssign() {
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [selectedWorkers, setSelectedWorkers] = useState<Set<string>>(new Set());

  function handleSkillChange(skill: Skill) {
    setSelectedSkill(skill);
    setSelectedWorkers(new Set());
  }

  function toggleWorker(workerId: string) {
    setSelectedWorkers(prev => {
      const next = new Set(prev);
      if (next.has(workerId)) {
        next.delete(workerId);
      } else {
        next.add(workerId);
      }
      return next;
    });
  }

  const zones: { id: Zone; label: string; sub: string; iconPath: string; iconViewBox: string; iconW: number; iconH: number; left: number }[] = [
    { id: "ground",   label: "Ground floor",  sub: "Lobby & Entrance",         iconPath: svgPaths.p34c7c000, iconViewBox: "0 0 11 18",         iconW: 11,     iconH: 18,     left: 0   },
    { id: "1st",      label: "1st floor",     sub: "kitchen & Living room ",   iconPath: svgPaths.p9250360,  iconViewBox: "0 0 18 18",         iconW: 18,     iconH: 18,     left: 216 },
    { id: "exterior", label: "EXTERIOR C-01", sub: "LANDSCAPING PHASE 1",      iconPath: svgPaths.p2e358900, iconViewBox: "0 0 20 20",         iconW: 20,     iconH: 20,     left: 432 },
  ];

  const skills: { id: Skill; label: string; iconPath: string; iconViewBox: string; iconW: number; iconH: number }[] = [
    { id: "plumbing", label: "PLUMBING", iconPath: svgPaths.p20682f80, iconViewBox: "0 0 16.3 19.55",   iconW: 16.3,   iconH: 19.55  },
    { id: "electric", label: "ELECTRIC", iconPath: svgPaths.p10002b00, iconViewBox: "0 0 18 16",        iconW: 18,     iconH: 16     },
    { id: "paint",    label: "Paint",    iconPath: svgPaths.p285e6f00, iconViewBox: "0 0 16 19",        iconW: 16,     iconH: 19     },
    { id: "masonry",  label: "MASONRY",  iconPath: svgPaths.p3ce88680, iconViewBox: "0 0 18.525 18.025",iconW: 18.525, iconH: 18.025 },
  ];

  const currentWorkers = selectedSkill ? workersBySkill[selectedSkill] : workersBySkill.plumbing;

  return (
    <div className="bg-white relative size-full" data-name="3. Task Assignment (Mobile)">
      {/* ── MAIN CONTENT ── */}
      <div className="absolute flex flex-col gap-[30px] h-[1103px] items-start left-0 px-[24px] right-0 top-[70px]">

        {/* 01. SITE AREA */}
        <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="flex items-end justify-between relative shrink-0 w-full">
            <div className="h-[16.5px] relative shrink-0 w-[130.59px]">
              <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-0 text-[#564239] text-[11px] top-[7.5px] tracking-[1.1px] uppercase whitespace-nowrap">
                <p className="leading-[16.5px]">01. SITE AREA</p>
              </div>
            </div>
            <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#8a7267] text-[9px] tracking-[-0.45px] whitespace-nowrap">
              <p className="leading-[13.5px]">REQUIRED</p>
            </div>
          </div>
          {/* Horizontal scroll zone cards */}
          <div className="no-scrollbar h-[136px] overflow-auto relative shrink-0 w-full">
            {zones.map(z => (
              <ZoneCard
                key={z.id}
                label={z.label}
                sub={z.sub}
                iconPath={z.iconPath}
                iconViewBox={z.iconViewBox}
                iconW={z.iconW}
                iconH={z.iconH}
                selected={selectedZone === z.id}
                left={z.left}
                onClick={() => setSelectedZone(z.id)}
              />
            ))}
          </div>
        </div>

        {/* 02. SKILL SETS */}
        <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="flex flex-col items-start relative shrink-0 w-full">
            <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#564239] text-[11px] tracking-[1.1px] uppercase w-full">
              <p className="leading-[16.5px]">02. SKILL SETS</p>
            </div>
          </div>
          <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_77.50px] relative shrink-0 w-full">
            {skills.map(s => (
              <SkillCard
                key={s.id}
                label={s.label}
                iconPath={s.iconPath}
                iconViewBox={s.iconViewBox}
                iconW={s.iconW}
                iconH={s.iconH}
                selected={selectedSkill === s.id}
                onClick={() => handleSkillChange(s.id)}
              />
            ))}
          </div>
        </div>

        {/* 03. ASSIGN WORKERS */}
        <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="flex flex-col items-start relative shrink-0 w-full">
            <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#564239] text-[11px] tracking-[1.1px] uppercase w-full">
              <p className="leading-[16.5px]">03. ASSIGN WORKERS</p>
            </div>
          </div>
          <div
            className="no-scrollbar flex gap-[24px] h-[103px] items-start overflow-auto py-[8px] relative shrink-0 w-full transition-opacity duration-200"
            style={{ opacity: selectedSkill ? 1 : 0.35, pointerEvents: selectedSkill ? "auto" : "none" }}
          >
            {currentWorkers.map(w => (
              <WorkerCard
                key={w.id}
                worker={w}
                selected={selectedWorkers.has(w.id)}
                onClick={() => toggleWorker(w.id)}
              />
            ))}
          </div>
        </div>

        {/* 04. REFERENCES & INSTRUCTIONS */}
        <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="flex flex-col items-start relative shrink-0 w-full">
            <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#564239] text-[11px] tracking-[1.1px] uppercase w-full">
              <p className="leading-[16.5px]">{`04. REFERENCES & INSTRUCTIONS`}</p>
            </div>
          </div>
          <div className="bg-[#f5f3f3] flex flex-col gap-[12px] h-[192px] items-center justify-center p-[2px] relative rounded-[12px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-2 border-[#ddc1b4] border-dashed inset-0 pointer-events-none rounded-[12px]" />
            <div className="h-[24px] relative shrink-0 w-[33px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 24">
                <path d={svgPaths.p336d2000} fill="#8A7267" />
              </svg>
            </div>
            <div className="relative shrink-0 w-[290px]">
              <div className="flex flex-col items-center relative size-full">
                <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b1c1c] text-[14px] text-center uppercase w-[244px]">
                  <p className="leading-[20px] mb-0">UPLOAD PHOTOS, DRAWINGS, PDFS, OR SITE</p>
                  <p className="leading-[20px]">REFERENCES</p>
                </div>
                <div className="h-[15px] relative shrink-0 w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* 05. TASK DESCRIPTION */}
        <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="flex flex-col items-start relative shrink-0 w-full">
            <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#564239] text-[11px] tracking-[1.1px] uppercase w-full">
              <p className="leading-[16.5px]">05. TASK DESCRIPTION</p>
            </div>
          </div>
          <div className="flex flex-col items-start relative shrink-0 w-full">
            <div className="bg-white h-[128px] relative rounded-[12px] shrink-0 w-full">
              <div className="no-scrollbar flex flex-row justify-center overflow-auto size-full">
                <div className="flex items-start justify-center p-[17px] relative size-full">
                  <div className="flex-[1_0_0] min-w-px relative">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full">
                      <p className="leading-[20px]">Describe the work to be completed…</p>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#ddc1b4] border-solid inset-0 pointer-events-none rounded-[12px]" />
            </div>
            {/* mic icon button */}
            <div className="absolute bottom-[12px] flex flex-col items-center justify-center right-[12px]">
              <div className="h-[19px] relative shrink-0 w-[14px]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 19">
                  <path d={svgPaths.p39e29d00} fill="#564239" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── ASSIGN TASK BUTTON ── */}
      <div className="absolute bg-[#7a3100] flex gap-[12px] items-center justify-center left-[25px] py-[20px] right-[25px] rounded-[12px] top-[1044px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
        <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[1.4px] uppercase whitespace-nowrap">
          <p className="leading-[20px]">ASSIGN TASK</p>
        </div>
        <div className="h-[16px] relative shrink-0 w-[19px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16">
            <path d={svgPaths.p28dab5c0} fill="white" />
          </svg>
        </div>
      </div>

      {/* ── HEADER ── */}
      <div className="-translate-x-1/2 absolute bg-white h-[64px] left-1/2 top-0 w-[412px]">
        <div className="-translate-y-1/2 absolute h-[40px] left-[16px] top-1/2 w-[374px]">
          {/* Back button overlay handled by ContractorApp */}
          <div className="absolute flex items-center justify-center left-0 rounded-[9999px] size-[40px] top-0">
            <div className="h-[15px] relative shrink-0 w-[9.09px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.09005 15">
                <path d={svgPaths.p2ca96600} fill="#7A3100" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[56px] text-[#7a3100] text-[16px] top-[20px] tracking-[0.8px] uppercase whitespace-nowrap">
            <p className="leading-[24px]">ADD TASK</p>
          </div>
        </div>
      </div>
    </div>
  );
}
