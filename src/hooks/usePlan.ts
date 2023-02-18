import { useState } from "react";

const planList = {
  monthly: {
    price: {
      arcade: 9,
      advance: 12,
      pro: 15,
    },
  },
  yearly: {
    price: {
      arcade: 90,
      advance: 120,
      pro: 150,
    },
  },
};

type PlanListKeys = keyof typeof planList;

function getPlanList(planCategory: PlanListKeys) {
  return planList[planCategory];
}

export default function usePlan() {
  const [choosePlan, setChoosePlan] = useState(false);

  const handleChangePlan = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChoosePlan(e.currentTarget.checked);
  };

  let planCategory: PlanListKeys = choosePlan ? "yearly" : "monthly";

  const yourPlan = getPlanList(planCategory);

  return {
    handleChangePlan,
    choosedPlan: choosePlan,
    yourPlan,
  };
}
