import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Screen1 } from "./components/screens/Screen1";
import { Screen2 } from "./components/screens/Screen2";
import { Screen3 } from "./components/screens/Screen3";
import { Screen4 } from "./components/screens/Screen4";
import { Screen5 } from "./components/screens/Screen5";
import { Screen6 } from "./components/screens/Screen6";
import { Screen7 } from "./components/screens/Screen7";
import { LangSheet } from "./components/LangSheet";
import { ContractorApp } from "./components/ContractorApp";
import { ArchitectApp } from "./components/ArchitectApp";
import { ClientApp } from "./components/ClientApp";
import { WorkerApp } from "./components/WorkerApp";
import { LanguageProvider, useLang, type LangId } from "./LanguageContext";

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7;

function AppInner() {
  const { setLang } = useLang();
  const [step, setStep] = useState<Step>(1);
  const [direction, setDirection] = useState(1);
  const [mode, setMode] = useState<"onboarding" | "contractor">("onboarding");
  const [role, setRole] = useState("contractor");
  const [loginMode, setLoginMode] = useState(false);

  const go = (next: Step) => {
    setDirection(next > step ? 1 : -1);
    setStep(next);
  };

  const handleLogin = () => {
    setLoginMode(true);
    setDirection(1);
    setStep(5);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 20 : -20, opacity: 0, scale: 0.987 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -14 : 14, opacity: 0, scale: 0.993 }),
  };

  const transition = { duration: 0.38, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <div className="size-full flex items-center justify-center bg-white overflow-hidden">
      <div className="phone-frame">
        <div className="phone-shell">
          <AnimatePresence custom={direction} mode="wait" initial={false}>
            {mode === "onboarding" ? (
              <motion.div
                key={`onboarding-${step}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
                className="absolute inset-0"
              >
                {step === 1 && (
                  <Screen1
                    onContinue={(lang: string) => {
                      setLang(lang as LangId);
                      go(2);
                    }}
                    onLogin={handleLogin}
                  />
                )}
                {step === 2 && <Screen2 onNext={() => go(3)} />}
                {step === 3 && <Screen3 onNext={() => go(4)} />}
                {step === 4 && <Screen4 onNext={() => go(5)} />}
                {step === 5 && (
                  <Screen5
                    returningUser={loginMode}
                    onContinue={(r) => {
                      setRole(r);
                      if (loginMode) {
                        setMode("contractor");
                      } else {
                        go(6);
                      }
                    }}
                  />
                )}
                {step === 6 && <Screen6 onContinue={() => go(7)} />}
                {step === 7 && <Screen7 onComplete={() => setMode("contractor")} />}
              </motion.div>
            ) : (
              <motion.div
                key="contractor"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {role === "architect" ? (
                  <ArchitectApp onSwitchProfile={setRole} />
                ) : role === "client" ? (
                  <ClientApp onSwitchProfile={setRole} />
                ) : role === "worker" ? (
                  <WorkerApp onSwitchProfile={setRole} />
                ) : (
                  <ContractorApp initialRole={role} onSwitchProfile={setRole} />
                )}
              </motion.div>
            )}
          </AnimatePresence>
          {/* Language bottom-sheet — overlays the entire phone screen */}
          <LangSheet />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}
