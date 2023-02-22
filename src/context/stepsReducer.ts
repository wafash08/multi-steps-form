type SteplistType = {
  current_step: number;
};

type Action<T> = {
  type: T;
};

type StepAction = Action<"next_step"> | Action<"prev_step"> | Action<"confirm">;

export const TOTAL_STEPLIST = 3;

export default function stepsReducer(
  steplist: SteplistType,
  action: StepAction
) {
  const { current_step } = steplist;

  switch (action.type) {
    case "next_step": {
      return {
        current_step:
          current_step < TOTAL_STEPLIST ? current_step + 1 : current_step,
      };
    }

    case "prev_step": {
      return {
        current_step: current_step > 0 ? current_step - 1 : current_step,
      };
    }

    case "confirm": {
      return { current_step };
    }
  }
}
