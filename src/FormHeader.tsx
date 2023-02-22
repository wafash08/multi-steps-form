function FormTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-primary-marine-blue font-bold text-2xl lg:text-3xl">
      {children}
    </h2>
  );
}

function FormDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-neutral-cool-gray">{children}</p>;
}

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
