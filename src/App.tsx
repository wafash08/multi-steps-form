// @source
// https://www.codevertiser.com/creating-reusable-progress-steps-component-in-reactjs/
// https://devrecipes.net/stepper-component-with-react-hooks-and-context/

import clsx from "clsx";
import { useReducer } from "react";
import stepsReducer, { TOTAL_STEPLIST } from "./context/stepsReducer";
import FormSection from "./FormSection";
import StepList from "./StepList";

const initialSteplist = {
  current_step: 0,
};

// todo
// 1 ubah state ke dalam context
// 2 implementasi plan berdasarkan pilihan monthly atau yearly

export default function App() {
  const [state, dispatch] = useReducer(stepsReducer, initialSteplist);

  function handleNextStep() {
    dispatch({
      type: "go_next_step",
    });
  }

  function handlePrevStep() {
    dispatch({
      type: "back_prev_step",
    });
  }

  function handleConfirm() {
    dispatch({
      type: "confirmed",
    });
  }

  return (
    <div className="bg-primary-light-blue min-h-screen w-full lg:grid lg:place-items-center">
      <div className="lg:bg-white lg:rounded-lg lg:p-4 grid lg:grid-cols-3 lg:max-w-5xl">
        <div className="bg-primary-purplish-blue bg-[url('./assets/bg-sidebar-mobile.svg')] lg:bg-[url('./assets/bg-sidebar-desktop.svg')] h-[172px] lg:h-auto bg-no-repeat bg-cover lg:rounded-lg p-10">
          <StepList current_step={state.current_step} />
        </div>

        {/* form */}
        <div className="lg:col-span-2 lg:pt-16 lg:pb-8 lg:px-20 mb-32 lg:mb-0">
          <FormSection current_step={state.current_step} />

          {/* tombol navigasi: next step dan go back */}
          <div className="fixed bottom-0 left-0 w-full z-50 lg:z-0 bg-white lg:static lg:mt-16 flex py-4 shadow-md lg:shadow-none">
            <div className="flex w-[90%] lg:w-full mx-auto">
              <div className="mr-auto">
                <button
                  onClick={handlePrevStep}
                  className={clsx(
                    "bg-transparent text-neutral-cool-gray font-medium py-3 px-6 rounded-md hover:text-primary-marine-blue transition-colors ease-in-out",
                    state.current_step === 0 ? "hidden" : "block"
                  )}
                >
                  Go Back
                </button>
              </div>
              <div className="ml-auto">
                <button
                  onClick={
                    state.current_step === TOTAL_STEPLIST
                      ? handleConfirm
                      : handleNextStep
                  }
                  className="bg-primary-purplish-blue text-white py-3 px-6 rounded-md font-medium"
                >
                  {state.current_step === TOTAL_STEPLIST
                    ? "Confirm"
                    : "Next Step"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
