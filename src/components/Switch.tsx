import clsx from "clsx";

export default function Switch({
  chosenPlan,
  onChangeBillPlan,
}: {
  chosenPlan: boolean;
  onChangeBillPlan: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <label
      htmlFor="select-plan"
      className="flex items-center gap-5 cursor-pointer"
    >
      <input
        checked={chosenPlan}
        type="checkbox"
        name="plan"
        id="select-plan"
        onChange={onChangeBillPlan}
        className="order-2 cursor-pointer rounded-full bg-primary-marine-blue border border-primary-marine-blue relative"
      />
      <span
        className={clsx(
          "order-1 font-medium text-neutral-cool-gray transition",
          !chosenPlan && "text-primary-marine-blue"
        )}
      >
        Monthly
      </span>
      <span
        className={clsx(
          "order-3 font-medium text-neutral-cool-gray transition",
          chosenPlan && "text-primary-marine-blue"
        )}
      >
        Yearly
      </span>
    </label>
  );
}
