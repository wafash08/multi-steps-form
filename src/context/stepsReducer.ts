type SteplistType = {
  current_step: number;
};

type Action<T> = {
  type: T;
};

type StepAction =
  | Action<"go_next_step">
  | Action<"back_prev_step">
  | Action<"confirmed">;

export const TOTAL_STEPLIST = 3;

export default function stepsReducer(
  steplist: SteplistType,
  action: StepAction
) {
  const { current_step } = steplist;

  switch (action.type) {
    case "go_next_step": {
      return {
        current_step:
          current_step < TOTAL_STEPLIST ? current_step + 1 : current_step,
      };
    }

    case "back_prev_step": {
      return {
        current_step: current_step > 0 ? current_step - 1 : current_step,
      };
    }

    case "confirmed": {
      return { current_step };
    }
  }
}
