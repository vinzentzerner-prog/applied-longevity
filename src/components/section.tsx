import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function Section({ children, className, id, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 md:py-32 lg:py-40",
        dark && "bg-dark-bg text-dark-fg",
        className
      )}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">{children}</div>
    </section>
  );
}
