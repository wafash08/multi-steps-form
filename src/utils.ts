export type Price = {
  arcade: number;
  advance: number;
  pro: number;
};

type MonthlyPrice = {
  monthly: Price;
};

type YearlyPrice = {
  yearly: Price;
};

export type Planlist = MonthlyPrice & YearlyPrice;

export const planList: Planlist = {
  monthly: {
    arcade: 9,
    advance: 12,
    pro: 15,
  },
  yearly: {
    arcade: 90,
    advance: 120,
    pro: 150,
  },
};

export type PlanListKeys = keyof typeof planList;

export function getPlanList(planCategory: PlanListKeys) {
  return planList[planCategory];
}
