import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  compact?: boolean;
  id?: string;
}

export function Section({ children, className, dark, compact, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        compact ? "py-12 md:py-16" : "py-20 md:py-28 lg:py-32",
        dark && "bg-dark-bg text-paper",
        className
      )}
    >
      {children}
    </section>
  );
}
