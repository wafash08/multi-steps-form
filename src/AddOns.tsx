import { useReducer } from "react";
import FormHeader from "./FormHeader";
import addOnsReducer from "./reducers/addOnsReducer";
import calculateAddOns, { ADD_ONS_MONTHLY } from "./utils/calculateAddOns";

export default function AddOns() {
  // const [addOns, setAddOns] = useState<string[]>([]);
  const [addOns, dispatch] = useReducer(addOnsReducer, []);

  function handleAddOnsChange(e: React.ChangeEvent<HTMLInputElement>) {
    let isChecked = e.currentTarget.checked;
    let value = e.currentTarget.value;
    dispatch({
      type: "SELECT_ADDONS",
      payload: {
        isChecked: isChecked,
        value: value,
      },
    });

    // implementasi menggunakan useState;

    // if (isChecked) {
    //   setAddOns([...addOns, value]);
    // } else {
    //   let idx = addOns.indexOf(value);
    //   let filteredAddOns = addOns.filter(function (_, index) {
    //     return index !== idx;
    //   });

    //   setAddOns(filteredAddOns);
    // }
  }

  let totalAddOns = calculateAddOns(ADD_ONS_MONTHLY, addOns);

  return (
    <>
      <FormHeader
        description="Add-ons help enhance your gaming experience."
        title="Pick add-ons"
      />

      <div className="grid gap-5">
        <CustomCheckbox
          description="Access to multiplayer games"
          frequency="mo"
          label="Online Service"
          key="Online Service"
          price={1}
          onChangeAddOns={handleAddOnsChange}
        />
        <CustomCheckbox
          description="Extra 1TB of cloud save"
          frequency="mo"
          label="Larger Storage"
          key="Larger Storage"
          price={2}
          onChangeAddOns={handleAddOnsChange}
        />
        <CustomCheckbox
          description="Custom theme on your profile"
          frequency="mo"
          label="Customizable Profile"
          key="Customizable Profile"
          price={2}
          onChangeAddOns={handleAddOnsChange}
        />
      </div>

      <p>{totalAddOns}</p>
    </>
  );
}

type CustomCheckboxProps = {
  label: string;
  description: string;
  price: number;
  frequency: "mo" | "yr";
  onChangeAddOns: React.ChangeEventHandler<HTMLInputElement>;
};

function CustomCheckbox({
  description,
  label,
  price,
  frequency,
  onChangeAddOns,
}: CustomCheckboxProps) {
  return (
    <label className="cursor-pointer p-4 flex items-center gap-4 select-none relative hover:bg-neutral-magnolia rounded-md">
      <input
        name="add-ons"
        type="checkbox"
        className="peer w-5 h-5 rounded-sm text-primary-purplish-blue shrink"
        value={label}
        onChange={onChangeAddOns}
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
