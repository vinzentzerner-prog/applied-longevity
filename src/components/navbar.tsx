"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Container } from "./container";
import { LanguageSwitcher } from "./language-switcher";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/services" as const, label: t("services") },
    { href: "/method" as const, label: t("method") },
    { href: "/results" as const, label: t("results") },
    { href: "/contact" as const, label: t("contact") },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-paper/90 backdrop-blur-md">
      <Container className="flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="font-display text-xl font-bold tracking-tight text-ink">
          Applied Longevity
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="/contact">
            <Button size="sm">{t("cta")}</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border/50 bg-paper">
          <Container className="py-6 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-muted hover:text-ink transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-border/30">
              <LanguageSwitcher />
              <Link href="/contact" onClick={() => setOpen(false)}>
                <Button size="sm">{t("cta")}</Button>
              </Link>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
}
