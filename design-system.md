# Farmio Comppro Design System

This document outlines the core design tokens and components to maintain visual consistency across the Farmio Comppro application.

## 1. Colors & Theming

### Primary Palette
- **Foreground (Text Main)**: `#142013` (Deep Slate/Dark Green) -- `var(--foreground)`
- **Background (Base)**: `#f8f5ec` (Cream) -- `var(--background)`

### Accent Colors
- **Leaf Green (Primary Brand)**: `#3fa535` -- `var(--color-leaf)`
- **Leaf Green Dark**: `#25711f` -- `var(--color-leaf-deep)`
- **Sun Yellow**: `#f4a300` -- `var(--color-sun)`
- **Sun Deep**: `#b67300` -- `var(--color-sun-deep)`
- **Orange**: `#ff7a00` -- `var(--color-orange)`
- **Orange Deep**: `#c95f00` -- `var(--color-orange-deep)`

### Neutrals
- **Cream (Base)**: `#f8f5ec` -- `var(--color-cream)`
- **Cream Deep**: `#efe7d3` -- `var(--color-cream-deep)`
- **Ink Soft (Secondary Text)**: `#52624d` -- `var(--color-ink-soft)`

## 2. Typography
The system uses three main font families defined in `layout.tsx`:

- **Display/Headings**: `Sora` (`var(--font-display)`)
  - Weight: SemiBold (600)
  - Usage: `h1`, `h2`, `h3`, `.section-title`
  - Sizes scale responsively (e.g., `clamp(2rem, 2.6vw, 3.5rem)` for `.section-title`)
- **Body & UI Elements**: `Plus Jakarta Sans` (`var(--font-body)`)
  - Usage: Paragraphs, buttons, chips, labels.
- **Monospace**: `Geist Mono` (`var(--font-geist-mono)`)

## 3. UI Elements & Layouts

### Cards & Surfaces
- **Border Radius**: Exceptionally large corners (`2rem` / `32px` typically) for a friendly, modern "bento-box" style.
- **Background Details**: Often uses slight gradients on white backgrounds with backdrop filters.
  - Example card background: `rgba(255, 255, 255, 0.84)` with `backdrop-filter: blur(18px)`.
- **Shadows**: Soft, diffused shadows with green hints (e.g., `box-shadow: 0 24px 60px rgba(44, 67, 30, 0.08)`).
- **Hover Effects (`:hover`)**: Cards shift upwards `transform: translateY(-8px)` and increase shadow intensity for interactivity.

### Buttons & Tags
- **Primary CTA (`.cta-primary`)**:
  - Gradient Background: `linear-gradient(135deg, var(--color-leaf) 0%, var(--color-orange) 100%)`
  - Hover Action: Shifts up (`-4px`) and casts a prominent shadow `0 26px 48px rgba(91, 134, 27, 0.32)`.
  - Feature: Animated shimmer overlay effect.
- **Pills/Chips (`.marquee-pill` and others)**:
  - Radius: Fully rounded (`border-radius: 999px`)
  - Used for secondary labels or floating content.

### Background Graphics & Overlays
- **Wash Overlays (`.section-wash`, `.hero-orb`)**: Blurry (`filter: blur(20px)`), large, circular gradients in Brand Green (`rgba(63, 165, 53, 0.18)`) or Orange (`rgba(255, 122, 0, 0.18)`), which slowly animate (`float-orb`).
- **Texture**: Grid overlays (`.hero-grid`) using subtle `1px` lines repeating every `70px`.

## 4. Animations
- **Fade Up**: Elements appear moving upwards smoothly (`fade-up`, `fade-up-delayed`).
- **Orbs floating**: Slow up and down translation (`float-orb: 11s ease-in-out infinite`).
- **Subtle Spin**: Ring elements rotating continuously (`spin-slow: 24s linear infinite`).
- **Pulse Dot**: A radar-like spread shadow animation (`pulse-dot`).

### Usage Guideline
When building new sections, utilize `var(--color-...)` for consistent coloring, ensure generous padding, apply large border radiuses to containers, and leverage the `Plus Jakarta Sans` font for body readability and `Sora` for prominent titles. Use `.feature-card` or `.product-card` classes for standard grid items to ensure they match existing aesthetic choices.
