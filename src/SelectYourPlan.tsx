import clsx from "clsx";

import AdvanceIcon from "./icons/AdvanceIcon";
import ArcadeIcon from "./icons/ArcadeIcon";
import ProIcon from "./icons/ProIcon";
import FormHeader from "./FormHeader";
import {
  InitialSteplistDispatchContextType,
  useSteplist,
  useSteplistDispatch,
} from "./context/SteplistContext";
import { ChangeEventHandler, useState } from "react";

type CustomRadioProps = {
  id: string;
  name: string;
  icon: React.ReactElement;
  title: string;
  price: number;
  hasYearlyPlan: boolean;
  onChangePlan: ChangeEventHandler<HTMLInputElement>;
};

function CustomRadio(props: CustomRadioProps) {
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

export default function SelectYourPlan() {
  const steplist = useSteplist();
  const dispatch = useSteplistDispatch();
  const { has_chosen_plan } = steplist;
  const [plan, setPlan] = useState("");

  function handleChangePlan(e: React.ChangeEvent<HTMLInputElement>) {
    setPlan(e.currentTarget.value);
  }

  return (
    <>
      <FormHeader
        description="You have the option of monthly or yearly billing."
        title="Select Your Plan"
      />
      <div className="grid gap-6">
        <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2">
          <CustomRadio
            hasYearlyPlan={has_chosen_plan}
            icon={<ArcadeIcon />}
            id="arcade"
            name="plan"
            price={15}
            title="Arcade"
            key="arcade"
            onChangePlan={handleChangePlan}
          />
          <CustomRadio
            hasYearlyPlan={has_chosen_plan}
            icon={<AdvanceIcon />}
            id="advanced"
            name="plan"
            price={15}
            title="Advanced"
            key="advanced"
            onChangePlan={handleChangePlan}
          />
          <CustomRadio
            hasYearlyPlan={has_chosen_plan}
            icon={<ProIcon />}
            id="pro"
            name="plan"
            price={15}
            title="Pro"
            key="pro"
            onChangePlan={handleChangePlan}
          />
        </div>
        <div className="bg-neutral-magnolia p-4 rounded-md grid place-items-center">
          <Switch chosen_plan={has_chosen_plan} dispatch={dispatch} />
        </div>
      </div>
    </>
  );
}

function Switch({
  dispatch,
  chosen_plan,
}: {
  dispatch: InitialSteplistDispatchContextType;
  chosen_plan: boolean;
}) {
  return (
    <label
      htmlFor="select-plan"
      className="flex items-center gap-5 cursor-pointer"
    >
      <input
        checked={chosen_plan}
        type="checkbox"
        name="plan"
        id="select-plan"
        onChange={() => {
          dispatch({ type: "chose_plan" });
        }}
        className="order-2 cursor-pointer rounded-full bg-primary-marine-blue border border-primary-marine-blue relative"
      />
      <span
        className={clsx(
          "order-1 font-medium text-neutral-cool-gray transition",
          !chosen_plan && "text-primary-marine-blue"
        )}
      >
        Monthly
      </span>
      <span
        className={clsx(
          "order-3 font-medium text-neutral-cool-gray transition",
          chosen_plan && "text-primary-marine-blue"
        )}
      >
        Yearly
      </span>
    </label>
  );
}
