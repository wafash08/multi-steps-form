import { useState } from "react";

import CustomRadio from "./components/CustomRadio";
import Switch from "./components/Switch";
import AdvanceIcon from "./icons/AdvanceIcon";
import ArcadeIcon from "./icons/ArcadeIcon";
import ProIcon from "./icons/ProIcon";
import FormHeader from "./FormHeader";
import { getPlanlist, getYourPlanPrice } from "./utils";

export default function SelectYourPlan() {
  const [yourPlan, setYourPlan] = useState<string>("");
  const [billPlan, setBillPlan] = useState<boolean>(false);

  function handleChangeBillPlan() {
    setBillPlan(!billPlan);
  }

  function handleChangePlan(e: React.ChangeEvent<HTMLInputElement>) {
    setYourPlan(e.currentTarget.value);
  }

  let selectedBillPlan = billPlan ? "yearly" : "monthly";
  let selectedPlanlist = getPlanlist(selectedBillPlan);

  const { advanced, arcade, pro } = selectedPlanlist;

  let yourPlanPrice = getYourPlanPrice(selectedPlanlist, yourPlan);

  return (
    <>
      <FormHeader
        description="You have the option of monthly or yearly billing."
        title="Select Your Plan"
      />
      <h1>
        {yourPlan} = {yourPlanPrice}
      </h1>
      <div className="grid gap-6">
        <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2">
          <CustomRadio
            hasYearlyPlan={billPlan}
            icon={<ArcadeIcon />}
            id="arcade"
            name="plan"
            price={arcade}
            title="Arcade"
            key="arcade"
            onChangePlan={handleChangePlan}
          />
          <CustomRadio
            hasYearlyPlan={billPlan}
            icon={<AdvanceIcon />}
            id="advanced"
            name="plan"
            price={advanced}
            title="Advanced"
            key="advanced"
            onChangePlan={handleChangePlan}
          />
          <CustomRadio
            hasYearlyPlan={billPlan}
            icon={<ProIcon />}
            id="pro"
            name="plan"
            price={pro}
            title="Pro"
            key="pro"
            onChangePlan={handleChangePlan}
          />
        </div>
        <div className="bg-neutral-magnolia p-4 rounded-md grid place-items-center">
          <Switch
            chosenPlan={billPlan}
            onChangeBillPlan={handleChangeBillPlan}
          />
        </div>
      </div>
    </>
  );
}
