import { FormDescription, FormTitle } from "./FormSection";

export default function AddOns() {
  return (
    <>
      <div className="grid gap-2">
        <FormTitle>Select Your Plan</FormTitle>
        <FormDescription>
          You have the option of monthly or yearly billing.
        </FormDescription>
      </div>

      <div className="grid gap-5">
        <label className="cursor-pointer border border-neutral-cool-gray hover:border-primary-purplish-blue p-4 flex justify-between rounded-md select-none">
          <div className="flex gap-4 items-center">
            <input
              type="checkbox"
              className="w-5 h-5 rounded-sm text-primary-purplish-blue"
            />
            <div>
              <p className="font-medium text-primary-marine-blue text-lg">
                Online Service
              </p>
              <p className="text-neutral-cool-gray text-sm">
                Access to multiplayer games
              </p>
            </div>
          </div>
          <p>+$1/mo</p>
        </label>
        <label className="cursor-pointer border border-neutral-cool-gray hover:border-primary-purplish-blue p-4 flex justify-between rounded-md select-none">
          <div className="flex gap-4 items-center">
            <input
              type="checkbox"
              className="w-5 h-5 rounded-sm text-primary-purplish-blue"
            />
            <div>
              <p className="font-medium text-primary-marine-blue text-lg">
                Larger Storage
              </p>
              <p className="text-neutral-cool-gray text-sm">
                Extra 1TB of cloud save
              </p>
            </div>
          </div>
          <p>+$1/mo</p>
        </label>
        <label className="cursor-pointer border border-neutral-cool-gray hover:border-primary-purplish-blue p-4 flex justify-between rounded-md select-none">
          <div className="flex gap-4 items-center">
            <input
              type="checkbox"
              className="w-5 h-5 rounded-sm text-primary-purplish-blue"
            />
            <div>
              <p className="font-medium text-primary-marine-blue text-lg">
                Customizable Profile
              </p>
              <p className="text-neutral-cool-gray text-sm">
                Custom theme on your profile
              </p>
            </div>
          </div>
          <p>+$1/mo</p>
        </label>
      </div>
    </>
  );
}
