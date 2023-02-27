const MONTHLYPLAN = {
  arcade: 9,
  advanced: 12,
  pro: 15,
};

const YEARLYPLAN = {
  arcade: 90,
  advanced: 120,
  pro: 150,
};

export const PLANLIST = {
  monthly: MONTHLYPLAN,
  yearly: YEARLYPLAN,
};

// export type PlanListKeys = keyof typeof PLANLIST;

export function getPlanlist(planCategory: string) {
  switch (planCategory) {
    case "monthly": {
      return PLANLIST["monthly"];
    }
    case "yearly": {
      return PLANLIST["yearly"];
    }
    default: {
      return PLANLIST["monthly"];
    }
  }
}

export function getYourPlanPrice(
  yourPlanlist: { arcade: number; advanced: number; pro: number },
  yourPlan: string
) {
  switch (yourPlan) {
    case "advance": {
      return yourPlanlist["advanced"];
    }
    case "arcade": {
      return yourPlanlist["arcade"];
    }
    case "pro": {
      return yourPlanlist["pro"];
    }
    default: {
      return yourPlanlist["advanced"];
    }
  }
}
