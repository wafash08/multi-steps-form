// @source
// https://www.codevertiser.com/creating-reusable-progress-steps-component-in-reactjs/
// https://devrecipes.net/stepper-component-with-react-hooks-and-context/

import StepList from "./StepList";

export default function App() {
  return (
    <div className="bg-primary-light-blue min-h-screen w-full lg:grid lg:place-items-center">
      <div className="lg:bg-white lg:rounded-lg lg:p-4">
        <div className="bg-primary-purplish-blue bg-[url('./assets/bg-sidebar-mobile.svg')] lg:bg-[url('./assets/bg-sidebar-desktop.svg')] h-[172px] lg:h-auto bg-no-repeat bg-cover lg:rounded-lg">
          <div className="grid place-items-center lg:place-items-start pl-6 pt-6">
            <StepList />
          </div>
        </div>

        {/* form */}
        <div className="bg-white -mt-10 lg:mt-0 shadow-md lg:shadow-none w-5/6 lg:w-full mx-auto lg:mx-0 rounded-md p-8 grid gap-4">
          <h2 className="text-primary-marine-blue font-bold text-2xl">
            Personal Info
          </h2>
          <p className="text-neutral-cool-gray">
            Please provide your name, email, address, and phone number
          </p>
          <form className="grid gap-4">
            <div className="grid">
              <label htmlFor="name" className="text-primary-marine-blue">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="e.g Stephen King"
                className="py-2 px-4 border border-neutral-light-gray rounded-md w-full placeholder:text-neutral-cool-gray placeholder:font-medium placeholder:text-lg"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-primary-marine-blue">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="e.g stephenking@lorem.com"
                className="py-2 px-4 border border-neutral-light-gray rounded-md w-full placeholder:text-neutral-cool-gray placeholder:font-medium placeholder:text-lg"
              />
            </div>
            <div>
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
                className="py-2 px-4 border border-neutral-light-gray rounded-md w-full placeholder:text-neutral-cool-gray placeholder:font-medium placeholder:text-lg"
              />
            </div>
          </form>
        </div>

        {/* tombol navigasi: next step dan go back */}
        {/* <div className="bg-white mt-auto">
          <div>Tombol</div>
        </div> */}
      </div>
    </div>
  );
}
