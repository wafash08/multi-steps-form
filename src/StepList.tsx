export default function StepList() {
  return (
    <ul className="flex gap-6 lg:flex-col">
      <StepItem label="your info" step="1" />
      <StepItem label="select plan" step="2" />
      <StepItem label="add-ons" step="3" />
      <StepItem label="summary" step="4" />
    </ul>
  );
}

type StepItemProps = {
  step: string;
  label: string;
  status?: "completed" | "current";
};

function StepItem({ label, step }: StepItemProps) {
  return (
    <li className="flex items-center gap-4">
      <button className="rounded-full h-10 w-10 border-2 border-white text-white">
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
