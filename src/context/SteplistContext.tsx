import { createContext, Dispatch, useContext, useReducer } from "react";

type SteplistType = {
  current_step: number;
  has_chosen_plan: boolean;
};

type Action<T> = {
  type: T;
};

type StepAction =
  | Action<"go_next_step">
  | Action<"back_prev_step">
  | Action<"confirmed">
  | Action<"chose_plan">
  | Action<"go_to">;

type InitialSteplistContextType = SteplistType;
export type InitialSteplistDispatchContextType = Dispatch<StepAction>;

const initialSteplistContext: InitialSteplistContextType = {
  current_step: 0,
  has_chosen_plan: false,
};

const initialSteplistDispatchContext: InitialSteplistDispatchContextType =
  () => {};

const SteplistContext = createContext(initialSteplistContext);
const SteplistDispatchContext = createContext(initialSteplistDispatchContext);

export const TOTAL_STEPLIST = 3;

function steplistReducer(
  steplist: InitialSteplistContextType,
  action: StepAction
) {
  const { current_step, has_chosen_plan } = steplist;

  switch (action.type) {
    case "go_next_step": {
      return {
        ...steplist,
        current_step:
          current_step < TOTAL_STEPLIST ? current_step + 1 : current_step,
      };
    }

    case "back_prev_step": {
      return {
        ...steplist,
        current_step: current_step > 0 ? current_step - 1 : current_step,
      };
    }

    case "confirmed": {
      // bertugas untuk memeriksan dan memastikan pilihan user
      return { ...steplist };
    }

    case "chose_plan": {
      return {
        ...steplist,
        has_chosen_plan: !has_chosen_plan,
      };
    }

    default: {
      return { ...steplist };
    }
  }
}

export function SteplistProvider({ children }: { children: React.ReactNode }) {
  const [steplist, dispatch] = useReducer(
    steplistReducer,
    initialSteplistContext
  );

  return (
    <SteplistContext.Provider value={steplist}>
      <SteplistDispatchContext.Provider value={dispatch}>
        {children}
      </SteplistDispatchContext.Provider>
    </SteplistContext.Provider>
  );
}

export function useSteplist() {
  return useContext(SteplistContext);
}

export function useSteplistDispatch() {
  return useContext(SteplistDispatchContext);
}
