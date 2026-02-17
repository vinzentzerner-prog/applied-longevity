# Applied Longevity — Style Guide

## Design Direction

Warm off-white canvas, oversized editorial headings, coral CTA accents, minimal navigation, generous whitespace, and occasional dark sections for contrast.

---

## Color Palette

| Token              | Hex       | CSS Variable           | Usage                            |
| ------------------ | --------- | ---------------------- | -------------------------------- |
| Paper              | `#FDFBF4` | `--background`         | Page background (warm off-white) |
| Surface            | `#FFFFFF` | `--card`               | Card / elevated surfaces         |
| Ink                | `#1B1B17` | `--foreground`         | Primary text                     |
| Muted text         | `#655040` | `--muted-foreground`   | Secondary text, captions         |
| Muted surface      | `#F5F0E8` | `--muted`              | Subtle backgrounds               |
| Border             | `#BEB3A5` | `--border`             | Borders, dividers                |
| Brand / CTA        | `#EB5140` | `--primary`            | CTA buttons, links, accents      |
| Brand hover        | `#D84738` | `--primary-hover`      | CTA hover state                  |
| Dark section bg    | `#0F0F0D` | `--dark-bg`            | Dark section backgrounds         |
| Dark section text  | `#FDFBF4` | `--dark-fg`            | Text on dark sections            |
| Dark section muted | `#BEB3A5` | `--dark-muted`         | Muted text on dark sections      |
| Sage accent        | `#2F6F5E` | `--accent`             | Optional accent (very sparingly) |

---

## Typography

### Font Families

| Role       | Family          | Tailwind class   | Source files                    |
| ---------- | --------------- | ---------------- | ------------------------------- |
| Headings   | Clash Display   | `font-display`   | `src/app/fonts/ClashDisplay-*`  |
| Body / UI  | Satoshi         | `font-sans`      | `src/app/fonts/Satoshi-*`       |

Loaded via `@font-face` in `globals.css`.

### Type Scale

| Element    | Size                              | Weight | Tracking    |
| ---------- | --------------------------------- | ------ | ----------- |
| H1         | `clamp(3rem, 6vw, 5rem)`         | 700    | `-0.02em`   |
| H2         | `clamp(2rem, 4vw, 3.25rem)`      | 600    | `-0.015em`  |
| H3         | `clamp(1.5rem, 2.5vw, 2rem)`     | 600    | `-0.01em`   |
| H4         | `1.25rem`                         | 600    | `0`         |
| Body       | `text-lg` (18px)                  | 400    | `0`         |
| Small      | `text-base` (16px)                | 400    | `0`         |
| Caption    | `text-sm` (14px)                  | 500    | `0`         |
| Overline   | `text-xs` (12px) uppercase        | 600    | `0.08em`    |

---

## Layout

### Section Component

All page sections use `<Section>`. Contains a centered `max-w-5xl` wrapper.

- Default padding: `py-20 md:py-28 lg:py-32`
- Compact: `py-12 md:py-16`
- Dark variant: `bg-dark-bg text-dark-fg`

### Spacing Principles

- Generous vertical whitespace between sections (80–128px via Section).
- Heading to body: `mt-6`
- Body to CTA: `mt-10`
- Card grid gap: `gap-8`
- Card internal padding: `p-6`

---

## Components

### Buttons

**Primary (CTA)** — coral, rounded-full, white text:
```
bg-primary text-primary-foreground rounded-full hover:bg-primary-hover
```

**Outline** — border, transparent bg:
```
border border-border rounded-full hover:bg-muted
```

**Ghost / Link** — underline, no bg:
```
text-foreground underline-offset-4 hover:underline
```

### Cards

```
rounded-2xl border border-border bg-card shadow-sm
```

Dark section cards: `bg-[#1a1a17] border-[#2a2a25]`

### Navigation

Sticky, minimal, `bg-background/80 backdrop-blur-md`, border-b. Logo left, links center, CTA + language switcher right.

### Footer

Dark section. Brand name, tagline, nav links, copyright.

---

## Dark Sections

Used for CTAs and contrast sections. Invert the palette:
- Background: `--dark-bg` (#0F0F0D)
- Text: `--dark-fg` (#FDFBF4)
- Muted: `--dark-muted` (#BEB3A5)

---

## Responsive Breakpoints

Standard Tailwind: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px).

---

## Animations

Subtle transitions only: `transition-colors duration-200`. Respect `prefers-reduced-motion`.
