import FormHeader from "./FormHeader";

export default function AddOns() {
  return (
    <>
      <FormHeader
        description="You have the option of monthly or yearly billing."
        title="Select Your Plan"
      />

      <div className="grid gap-5">
        <CustomCheckbox
          description="Access to multiplayer games"
          frequency="mo"
          label="Online Service"
          key="Online Service"
          price={1}
        />
        <CustomCheckbox
          description="Extra 1TB of cloud save"
          frequency="mo"
          label="Larger Storage"
          key="Larger Storage"
          price={2}
        />
        <CustomCheckbox
          description="Custom theme on your profile"
          frequency="mo"
          label="Customizable Profile"
          key="Customizable Profile"
          price={2}
        />
      </div>
    </>
  );
}

type CustomCheckboxProps = {
  label: string;
  description: string;
  price: number;
  frequency: "mo" | "yr";
};

function CustomCheckbox({
  description,
  label,
  price,
  frequency,
}: CustomCheckboxProps) {
  return (
    <label className="cursor-pointer p-4 flex items-center gap-4 select-none relative hover:bg-neutral-magnolia rounded-md">
      <input
        name="add-ons"
        type="checkbox"
        className="peer w-5 h-5 rounded-sm text-primary-purplish-blue shrink"
      />
      <div className="flex-1">
        <p className="font-medium text-primary-marine-blue text-lg">{label}</p>
        <p className="text-neutral-cool-gray text-sm">{description}</p>
      </div>
      <p className="text-primary-purplish-blue">
        +${price}/{frequency}
      </p>
      <div className="absolute inset-0 transition border border-neutral-cool-gray hover:border-primary-purplish-blue peer-focus:border-primary-purplish-blue rounded-md peer-checked:border-primary-purplish-blue" />
    </label>
  );
}
