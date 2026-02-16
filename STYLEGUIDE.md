# Applied Longevity — Style Guide

## Design Direction

Warm off-white canvas, oversized editorial headings, coral CTA accents, minimal navigation, generous whitespace, and occasional dark sections for contrast.

---

## Color Palette

| Token        | Hex       | Usage                                |
| ------------ | --------- | ------------------------------------ |
| `paper`      | `#FDFBF4` | Page background (warm off-white)     |
| `surface`    | `#FFFFFF` | Card / elevated surfaces             |
| `ink`        | `#1B1B17` | Primary text                         |
| `muted`      | `#655040` | Secondary text, captions             |
| `border`     | `#BEB3A5` | Borders, dividers                    |
| `brand`      | `#EB5140` | CTA buttons, links, accents          |
| `brand-hover`| `#D84738` | CTA hover state                      |
| `dark-bg`    | `#0F0F0D` | Dark section backgrounds             |
| `sage`       | `#2F6F5E` | Optional accent (use very sparingly) |

### Dark Sections

Dark sections invert the palette: background `#0F0F0D`, text `#FDFBF4`, muted text `#BEB3A5`.

---

## Typography

### Font Families

| Role       | Family          | Tailwind class   |
| ---------- | --------------- | ---------------- |
| Headings   | Clash Display   | `font-display`   |
| Body / UI  | Satoshi         | `font-sans`      |

Both fonts are self-hosted as `.woff2` in `/public/fonts` and loaded via `next/font/local`.

### Type Scale

| Element    | Size (desktop)         | Weight   | Tracking        | Class                            |
| ---------- | ---------------------- | -------- | --------------- | -------------------------------- |
| H1         | `clamp(3rem, 6vw, 5rem)` | 700      | `-0.02em`       | `font-display text-h1 font-bold` |
| H2         | `clamp(2rem, 4vw, 3.25rem)` | 600   | `-0.015em`      | `font-display text-h2 font-semibold` |
| H3         | `clamp(1.5rem, 2.5vw, 2rem)` | 600  | `-0.01em`       | `font-display text-h3 font-semibold` |
| H4         | `1.25rem`              | 600      | `0`             | `font-display text-h4 font-semibold` |
| Body       | `1.125rem` (18px)      | 400      | `0`             | `font-sans text-body`            |
| Body small | `1rem` (16px)          | 400      | `0`             | `font-sans text-sm`              |
| Caption    | `0.875rem` (14px)      | 500      | `0.01em`        | `font-sans text-caption`         |
| Overline   | `0.75rem` (12px)       | 600      | `0.08em`        | `font-sans text-overline uppercase` |

---

## Layout

### Container

Max-width `1200px`, centered, with responsive horizontal padding:

- Mobile: `px-5` (20px)
- Tablet: `px-8` (32px)
- Desktop: `px-6` (24px — narrower padding at wide screens lets content breathe)

### Section

Vertical padding per section:

- Default: `py-20 md:py-28 lg:py-32`
- Compact: `py-12 md:py-16`

### Grid

Use CSS Grid or Flexbox. Common patterns:

- Two-column split: `grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20`
- Three-column cards: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`

---

## Components

### Buttons

**Primary (CTA)**

```
bg-brand text-white rounded-full px-8 py-3.5 font-sans font-medium text-base
hover:bg-brand-hover transition-colors
```

**Secondary (outline)**

```
border border-border text-ink rounded-full px-8 py-3.5 font-sans font-medium text-base
hover:border-ink transition-colors
```

**Ghost**

```
text-ink underline underline-offset-4 font-sans font-medium
hover:text-brand transition-colors
```

### Cards

```
bg-surface rounded-2xl border border-border p-8
```

Elevated variant adds `shadow-sm`. Cards on dark sections use `bg-[#1a1a17] border-[#2a2a25]`.

### Navigation

Minimal sticky nav, transparent on scroll-top, with a subtle `border-b border-border/50` when scrolled. Contains logo (left), nav links (center/right), and CTA button.

### Footer

Dark section (`bg-dark-bg text-paper`). Simple layout with brand, links, and copyright.

---

## Spacing Principles

- Generous vertical whitespace between sections (80–128px).
- Content blocks within sections spaced 32–48px apart.
- Headings to body gap: `mt-6` (24px).
- Body to CTA gap: `mt-8` (32px).
- Card internal padding: `p-8` (32px).

---

## Responsive Breakpoints

| Name | Min-width | Usage                    |
| ---- | --------- | ------------------------ |
| sm   | 640px     | Mobile landscape         |
| md   | 768px     | Tablet                   |
| lg   | 1024px    | Desktop                  |
| xl   | 1280px    | Wide desktop             |

---

## Animations

Keep animations subtle and purposeful:

- Hover transitions: `transition-colors duration-200`
- Fade-in on scroll: opacity 0→1 with slight upward translate (optional)
- No gratuitous motion — respect `prefers-reduced-motion`

---

## Notes

- Fonts in `/public/fonts` are placeholder binaries. Replace with real `.woff2` files downloaded from [fontshare.com](https://www.fontshare.com) (Clash Display + Satoshi).
- Sage accent `#2F6F5E` is reserved for small highlights (badges, success states) — do not use as a primary color.
