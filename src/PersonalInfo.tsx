import FormHeader from "./FormHeader";

export default function PersonalInfo() {
  return (
    <>
      <FormHeader
        description="Please provide your name, email, address, and phone number."
        title="Personal Info"
      />
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
