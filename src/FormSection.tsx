import AddOns from "./AddOns";
import { useSteplist } from "./context/SteplistContext";
import PersonalInfo from "./PersonalInfo";
import SelectYourPlan from "./SelectYourPlan";
import Summary from "./Summary";

type StepsKeys = "your_info" | "select_plan" | "add_ons" | "summary";

const STEPKEYS: StepsKeys[] = [
  "your_info",
  "select_plan",
  "add_ons",
  "summary",
];

function renderContent(selected_content: StepsKeys) {
  switch (selected_content) {
    case "your_info": {
      return <PersonalInfo />;
    }
    case "select_plan": {
      return <SelectYourPlan />;
    }
    case "add_ons": {
      return <AddOns />;
    }
    case "summary": {
      return <Summary />;
    }
  }
}

export default function FormSection() {
  const steplist = useSteplist();
  let selected_content = STEPKEYS[steplist.current_step];
  return (
    <section className="p-8 lg:p-0 bg-white -mt-10 lg:mt-0 shadow-md lg:shadow-none w-[90%] lg:w-[450px] mx-auto lg:mx-0 rounded-md grid gap-8">
      {renderContent(selected_content)}
    </section>
  );
}
