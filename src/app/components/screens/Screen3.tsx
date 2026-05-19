import Component3 from "../../../imports/3OnboardingFinalFixed/3OnboardingFinalFixed";

export function Screen3({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative size-full">
      <Component3 />
      <button
        onClick={onNext}
        aria-label="Next"
        className="absolute left-[23px] top-[740px] w-[343px] h-[56px] rounded-[12px] bg-transparent cursor-pointer active:scale-[0.98] transition-transform"
      />
    </div>
  );
}