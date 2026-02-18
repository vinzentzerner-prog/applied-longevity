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
        "py-20 md:py-28 lg:py-32",
        dark && "bg-dark-bg text-dark-fg",
        className
      )}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">{children}</div>
    </section>
  );
}
