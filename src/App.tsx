// @source
// https://www.codevertiser.com/creating-reusable-progress-steps-component-in-reactjs/
// https://devrecipes.net/stepper-component-with-react-hooks-and-context/

import FormSection from "./FormSection";
import StepList from "./StepList";

export default function App() {
  return (
    <div className="bg-primary-light-blue min-h-screen w-full lg:grid lg:place-items-center">
      <div className="lg:bg-white lg:rounded-lg lg:p-4 grid lg:grid-cols-3 lg:max-w-5xl">
        <div className="bg-primary-purplish-blue bg-[url('./assets/bg-sidebar-mobile.svg')] lg:bg-[url('./assets/bg-sidebar-desktop.svg')] h-[172px] lg:h-auto bg-no-repeat bg-cover lg:rounded-lg p-10">
          <StepList />
        </div>

        {/* form */}
        <div className="lg:col-span-2 lg:pt-16 lg:pb-8 lg:px-20 mb-32 lg:mb-0">
          <FormSection />

          {/* tombol navigasi: next step dan go back */}
          <div className="fixed bottom-0 left-0 w-full z-50 lg:z-0 bg-white lg:static lg:mt-20 flex py-4 shadow-md lg:shadow-none">
            <div className="flex w-[90%] lg:w-full mx-auto">
              <div className="mr-auto">
                <button className="bg-transparent text-neutral-cool-gray py-3 px-6 rounded-md">
                  Go Back
                </button>
              </div>
              <div className="ml-auto">
                <button className="bg-primary-purplish-blue text-white py-3 px-6 rounded-md">
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
