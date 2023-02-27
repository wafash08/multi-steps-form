import clsx from "clsx";

type CustomRadioProps = {
  id: string;
  name: string;
  icon: React.ReactElement;
  title: string;
  price: number;
  hasYearlyPlan: boolean;
  onChangePlan: React.ChangeEventHandler<HTMLInputElement>;
};

export default function CustomRadio(props: CustomRadioProps) {
  const { id, name, icon, title, price, hasYearlyPlan, onChangePlan } = props;

  return (
    <label htmlFor={id} className="relative transition cursor-pointer">
      <input
        type="radio"
        name={name}
        id={id}
        className="absolute inset-0 opacity-0 peer z-50 cursor-pointer"
        onChange={onChangePlan}
        value={id}
      />
      <div className="absolute inset-0 peer-checked:border-primary-marine-blue border border-neutral-light-gray rounded-md transition" />
      <div className="w-full h-full flex gap-4 items-start lg:justify-between lg:flex-col lg:gap-10 peer-checked:bg-neutral-magnolia p-4 lg:p-6 transition">
        {icon}
        <div className="grid gap-1">
          <h3 className="text-primary-marine-blue font-medium text-lg leading-none">
            {title}
          </h3>
          <p className="text-neutral-cool-gray">
            ${price}/{hasYearlyPlan ? "yr" : "mo"}
          </p>
          <p
            className={clsx(
              "text-primary-marine-blue text-sm transition opacity-0",
              hasYearlyPlan && "opacity-100 visible"
            )}
          >
            2 months free
          </p>
        </div>
      </div>
    </label>
  );
}
