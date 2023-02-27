type Action<T, P> = {
  type: T;
  payload: P;
};

type AddOnsAction = Action<
  "SELECT_ADDONS",
  { isChecked: boolean; value: string }
>;

export default function addOnsReducer(state: string[], action: AddOnsAction) {
  const { isChecked, value } = action.payload;

  switch (action.type) {
    case "SELECT_ADDONS": {
      if (isChecked) {
        return [...state, value];
      } else {
        let idx = state.indexOf(value);
        let filteredAddOns = state.filter(function (_, index) {
          return index !== idx;
        });
        return filteredAddOns;
      }
    }

    default: {
      return [...state];
    }
  }
}
