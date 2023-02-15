// @source
// https://www.codevertiser.com/creating-reusable-progress-steps-component-in-reactjs/
// https://devrecipes.net/stepper-component-with-react-hooks-and-context/

import StepList from "./StepList";

// TODO
// PERBAIKI DAN PIKIRKAN STRATEGI UNTUK TAMPILAN DESKTOP

export default function App() {
  return (
    <div className="bg-primary-light-blue min-h-screen w-full lg:grid lg:place-items-center">
      <div className="lg:bg-white lg:rounded-lg lg:p-4 grid lg:grid-cols-3 lg:max-w-5xl">
        <div className="bg-primary-purplish-blue bg-[url('./assets/bg-sidebar-mobile.svg')] lg:bg-[url('./assets/bg-sidebar-desktop.svg')] h-[172px] lg:h-auto bg-no-repeat bg-cover lg:rounded-lg p-10">
          <StepList />
        </div>

        {/* form */}
        <div className="lg:col-span-2 lg:pt-16 lg:pb-8 lg:px-20 mb-32 lg:mb-0">
          <div className="p-8 lg:p-0 bg-white -mt-10 lg:mt-0 shadow-md lg:shadow-none w-[90%] lg:w-full mx-auto lg:mx-0 rounded-md grid gap-8">
            <div className="grid gap-2">
              <h2 className="text-primary-marine-blue font-bold text-2xl lg:text-3xl">
                Personal Info
              </h2>
              <p className="text-neutral-cool-gray">
                Please provide your name, email, address, and phone number
              </p>
            </div>
            <form className="grid gap-6">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-primary-marine-blue">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="e.g Stephen King"
                  className="py-2 px-4 border border-neutral-light-gray rounded-md w-full placeholder:text-neutral-cool-gray placeholder:font-medium placeholder:text-lg text-lg text-primary-marine-blue font-medium focus:outline-primary-marine-blue"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-primary-marine-blue">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="e.g stephenking@lorem.com"
                  className="py-2 px-4 border border-neutral-light-gray rounded-md w-full placeholder:text-neutral-cool-gray placeholder:font-medium placeholder:text-lg text-lg text-primary-marine-blue font-medium focus:outline-primary-marine-blue"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="phone-number"
                  className="text-primary-marine-blue"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  placeholder="e.g +1 234 567 890"
                  className="py-2 px-4 border border-neutral-light-gray rounded-md w-full placeholder:text-neutral-cool-gray placeholder:font-medium placeholder:text-lg text-lg text-primary-marine-blue font-medium focus:outline-primary-marine-blue"
                  required
                />
              </div>
            </form>
          </div>

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
