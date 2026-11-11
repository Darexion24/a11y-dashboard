# https://a11y-dashboard-delta.vercel.app/
# Accessibility-First Developer Dashboard

A responsive, enterprise-grade data dashboard built to strict WCAG 2.1 AA standards. This project visualizes developer metrics while prioritizing inclusive design, keyboard navigation, and screen reader compatibility.

## 🚀 Tech Stack
* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS v4
* **Data Visualization:** Recharts
* **A11y Testing:** Axe-Core

## ♿ Accessibility (A11y) Features

Unlike standard dashboards that render charts as invisible `<canvas>` or `<svg>` elements to assistive technologies, this dashboard was built with a strict accessibility-first mindset:

* **Screen Reader Fallbacks:** Every visual Recharts component is paired with a visually hidden (`sr-only`) HTML data table. Screen readers seamlessly bypass the visual chart and read the tabular data.
* **Full Keyboard Navigation:** All interactive elements, including sidebar links, time-range filters, and theme toggles, are fully navigable via `Tab`, `Enter`, and `Space`. Focus rings are strictly defined.
* **Skip to Main Content:** A visually hidden skip link is injected at the root level, allowing keyboard users to bypass repetitive navigation links.
* **Semantic HTML & ARIA:** Heavy use of native semantic elements (`<nav>`, `<main>`, `<aside>`) and precise ARIA attributes (`aria-pressed`, `aria-current`, `aria-hidden`) to communicate application state.
* **High Contrast Mode:** In addition to standard Light/Dark modes, a strict High-Contrast theme is included to maximize readability for visually impaired users.

## 🛠️ Running Locally

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

*Note: In development mode, `@axe-core/react` runs automatically and reports any accessibility violations directly to the browser console.*
