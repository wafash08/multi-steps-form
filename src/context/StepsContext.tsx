import { createContext, Dispatch, useContext, useReducer } from "react";

type InitialSteplistContextType = {
  current_step: number;
};

type InitialSteplistDispatchContextType = Dispatch<StepAction>;

const initialSteplistContext: InitialSteplistContextType = {
  current_step: 0,
};

const initialSteplistDispatchContext: InitialSteplistDispatchContextType =
  () => {};

const SteplistContext = createContext(initialSteplistContext);
const SteplistDispatchContext = createContext(initialSteplistDispatchContext);

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

function steplistReducer(steplist: SteplistType, action: StepAction) {
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

export function SteplistProvider({ children }: { children: React.ReactNode }) {
  const [steplist, dispatch] = useReducer(steplistReducer, { current_step: 0 });
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
