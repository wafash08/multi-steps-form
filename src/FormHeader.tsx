import { FormDescription, FormTitle } from "./FormSection";

export default function FormHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="grid gap-2">
      <FormTitle>{title}</FormTitle>
      <FormDescription>{description}</FormDescription>
    </div>
  );
}
