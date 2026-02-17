"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(target: "en" | "de") {
    router.replace(pathname, { locale: target });
  }

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <button
        onClick={() => switchTo("en")}
        className={cn(
          "px-2 py-1 rounded transition-colors",
          locale === "en" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        )}
      >
        EN
      </button>
      <span className="text-border">|</span>
      <button
        onClick={() => switchTo("de")}
        className={cn(
          "px-2 py-1 rounded transition-colors",
          locale === "de" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        )}
      >
        DE
      </button>
    </div>
  );
}
