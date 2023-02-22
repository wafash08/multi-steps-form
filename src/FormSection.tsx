import AddOns from "./AddOns";
import SelectYourPlan from "./SelectYourPlan";
import Summary from "./Summary";

const STEPS = [
  {
    id: 1,
    step: 1,
    label: "Your info",
    form_info: {
      title: "Personal info",
      description: "Please provide your name, email address, and phone number.",
    },
  },
  {
    id: 2,
    step: 2,
    label: "Select plan",
    form_info: {
      title: "Select your plan",
      description: "You have the option of monthly or yearly billing.",
    },
  },
  {
    id: 3,
    step: 3,
    label: "Add-ons",
    form_info: {
      title: "Pick add-ons",
      description: "Add-ons help enhance your gaming experience.",
    },
  },
  {
    id: 4,
    step: 4,
    label: "Summary",
    form_info: {
      title: "Finished up",
      description: "Double-check everything looks OK before confirming.",
    },
  },
];

export function FormTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-primary-marine-blue font-bold text-2xl lg:text-3xl">
      {children}
    </h2>
  );
}

export function FormDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-neutral-cool-gray">{children}</p>;
}

export default function FormSection() {
  return (
    <section className="p-8 lg:p-0 bg-white -mt-10 lg:mt-0 shadow-md lg:shadow-none w-[90%] lg:w-full mx-auto lg:mx-0 rounded-md grid gap-8">
      {/* <SelectYourPlan /> */}
      {/* <AddOns /> */}
      <Summary />
    </section>
  );
}

function PersonalInfo() {
  return (
    <>
      <div className="grid gap-2">
        <FormTitle>Personal Info</FormTitle>
        <FormDescription>
          Please provide your name, email, address, and phone number
        </FormDescription>
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
          <label htmlFor="phone-number" className="text-primary-marine-blue">
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
    </>
  );
}
