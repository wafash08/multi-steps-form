import { useState } from "react";
import clsx from "clsx";

import AdvanceIcon from "./icons/AdvanceIcon";
import ArcadeIcon from "./icons/ArcadeIcon";
import ProIcon from "./icons/ProIcon";
import usePlan from "./hooks/usePlan";
import FormHeader from "./FormHeader";

type CustomRadioProps = {
  id: string;
  name: string;
  icon: React.ReactElement;
  title: string;
  price: number;
  hasYearlyPlan: boolean;
};

function CustomRadio(props: CustomRadioProps) {
  const { id, name, icon, title, price, hasYearlyPlan } = props;
  return (
    <label htmlFor={id} className="relative transition cursor-pointer">
      <input
        type="radio"
        name={name}
        id={id}
        className="absolute inset-0 opacity-0 peer z-50 cursor-pointer"
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
  const { handleChangePlan, choosedPlan, yourPlan } = usePlan();

  let monthlyChoosed = !choosedPlan;
  let yearlyChoosed = !monthlyChoosed;

  return (
    <>
      <FormHeader
        description="You have the option of monthly or yearly billing."
        title="Select Your Plan"
      />
      <div className="grid gap-6">
        <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2">
          <CustomRadio
            hasYearlyPlan={choosedPlan}
            icon={<ArcadeIcon />}
            id="arcade"
            name="plan"
            price={yourPlan.price.arcade}
            title="Arcade"
            key="arcade"
          />
          <CustomRadio
            hasYearlyPlan={choosedPlan}
            icon={<AdvanceIcon />}
            id="advanced"
            name="plan"
            price={yourPlan.price.advance}
            title="Advanced"
            key="advanced"
          />
          <CustomRadio
            hasYearlyPlan={choosedPlan}
            icon={<ProIcon />}
            id="pro"
            name="plan"
            price={yourPlan.price.pro}
            title="Pro"
            key="pro"
          />
        </div>
        <div className="bg-neutral-magnolia p-4 rounded-md grid place-items-center">
          <label
            htmlFor="select-plan"
            className="flex items-center gap-5 cursor-pointer"
          >
            <input
              checked={choosedPlan}
              type="checkbox"
              name="plan"
              id="select-plan"
              onChange={handleChangePlan}
              className="order-2 cursor-pointer rounded-full bg-primary-marine-blue border border-primary-marine-blue relative"
            />
            <span
              className={clsx(
                "order-1 font-medium text-neutral-cool-gray transition",
                monthlyChoosed && "text-primary-marine-blue"
              )}
            >
              Monthly
            </span>
            <span
              className={clsx(
                "order-3 font-medium text-neutral-cool-gray transition",
                yearlyChoosed && "text-primary-marine-blue"
              )}
            >
              Yearly
            </span>
          </label>
        </div>
      </div>
    </>
  );
}
