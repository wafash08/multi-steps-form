type AddOnsType = {
  "Online Service": number;
  "Larger Storage": number;
  "Customizable Profile": number;
};

export const ADD_ONS_MONTHLY = {
  "Online Service": 1,
  "Larger Storage": 2,
  "Customizable Profile": 2,
};

const ADD_ONS_YEARLY = {
  "Online Service": 10,
  "Larger Storage": 20,
  "Customizable Profile": 20,
};

export default function calculateAddOns(
  addOnsCategory: AddOnsType,
  addOns: string[]
) {
  let addOnsPrice: Array<number> = [];

  for (let category of addOns) {
    switch (category) {
      case "Online Service": {
        addOnsPrice.push(addOnsCategory["Online Service"]);
        break;
      }
      case "Larger Storage": {
        addOnsPrice.push(addOnsCategory["Larger Storage"]);
        break;
      }
      case "Customizable Profile": {
        addOnsPrice.push(addOnsCategory["Customizable Profile"]);
        break;
      }
    }
  }

  return addOnsPrice.reduce((acc, curr) => acc + curr, 0);
}
