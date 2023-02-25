import clsx from "clsx";
import { useSteplist } from "./context/SteplistContext";

const STEPLIST = [
  {
    id: 0,
    label: "Your Info",
    step: "1",
  },
  {
    id: 1,
    label: "Select Plan",
    step: "2",
  },
  {
    id: 2,
    label: "Add-Ons",
    step: "3",
  },
  {
    id: 3,
    label: "Summary",
    step: "4",
  },
];

export default function StepList() {
  const steplist = useSteplist();
  return (
    <ul className="flex gap-5 lg:gap-10 lg:flex-col justify-center">
      {STEPLIST.map(({ label, step, id }) => (
        <StepItem
          key={label}
          label={label}
          step={step}
          selected_step={id === steplist.current_step}
        />
      ))}
    </ul>
  );
}

type StepItemProps = {
  step: string;
  label: string;
  selected_step: boolean;
};

function StepItem({ label, step, selected_step }: StepItemProps) {
  return (
    <li className="flex items-center gap-4">
      <button
        className={clsx(
          "rounded-full h-10 w-10 border-2 font-medium transition-all ease-in-out duration-300",
          selected_step
            ? "bg-primary-light-blue text-primary-marine-blue border-primary-light-blue"
            : "text-white border-white"
        )}
      >
        {step}
      </button>
      <div className="uppercase hidden lg:block">
        <p className="text-neutral-cool-gray text-sm">step {step}</p>
        <p className="text-neutral-alabaster font-medium tracking-wide">
          {label}
        </p>
      </div>
    </li>
  );
}
