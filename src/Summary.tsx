import FormHeader from "./FormHeader";

export default function Summary() {
  return (
    <>
      <FormHeader
        description="Double-check everything looks OK before confirming."
        title="Finishing up"
      />

      <div className="grid gap-6">
        <div className="p-5 bg-neutral-magnolia rounded-md grid gap-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-primary-marine-blue font-medium md:text-lg">
                Arcade (Monthly)
              </p>
              <a
                href="#"
                className="text-primary-purplish-blue hover:underline transition"
              >
                Change
              </a>
            </div>
            <p className="text-primary-marine-blue font-medium md:text-lg">
              $9/mo
            </p>
          </div>
          <div className="w-full h-[1px] bg-neutral-light-gray rounded-sm" />
          <div className="grid gap-3">
            <div className="flex justify-between">
              <p className="text-neutral-cool-gray">Online Service</p>
              <p className="text-primary-marine-blue">+$1/mo</p>
            </div>
            <div className="flex justify-between">
              <p className="text-neutral-cool-gray">Larger Storage</p>
              <p className="text-primary-marine-blue">+$2/mo</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-5">
          <p className="text-neutral-cool-gray">Total (per month)</p>
          <p className="text-primary-purplish-blue text-lg md:text-xl font-medium">
            +$12/mo
          </p>
        </div>
      </div>
    </>
  );
}
