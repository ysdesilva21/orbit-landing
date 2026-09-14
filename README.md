# Orbit

**An AI-powered business analytics experience designed to turn complex business data into clear, actionable insight.**

A responsive SaaS landing page and product interface concept created around clarity, trust, and data-driven decision making — combining product UI, visual design, frontend development, and scroll-based interactions.

**Live Website:** [orbitai-landing-orcin.vercel.app](https://orbitai-landing.vercel.app/)

**Repository:** [github.com/ysdesilva21/orbit-ai-landing](https://github.com/ysdesilva21/orbit-landing)

**Orbit — Desktop Preview:**
![Orbit — Desktop Preview]()

---

## Overview

Orbit is a **business analytics SaaS concept** built around a simple idea:

> **Make business data easier to understand and act on.**

Modern analytics platforms can expose large amounts of information without necessarily making that information easier to interpret. Orbit approaches the experience from the opposite direction — presenting important metrics, trends, and AI-generated insights through a clear visual hierarchy.

The landing page introduces Orbit through the problems businesses face with fragmented or difficult-to-interpret data, then transitions into the product experience through dashboard previews, analytics visualizations, AI insights, reporting, and pricing.

The project combines **marketing communication with product UI**, allowing the interface itself to demonstrate the product rather than relying entirely on promotional copy.

---

## Features

* 📊 AI-powered business analytics concept
* 🤖 AI-generated business insights
* 💼 SaaS-focused landing page structure
* 🎯 Clear value proposition and conversion-focused CTAs
* 🔍 Business metrics and performance visualizations
* 📑 Reporting and analytics sections
* 💳 Monthly and annual pricing interaction
* 🧭 Responsive navigation
* 📱 Responsive desktop, tablet, and mobile layouts
* ✨ Scroll-based GSAP animations
* 🎬 UI-focused motion and micro-interactions
* 🖼️ Optimized visual assets
* ⚡ Vite production build
* 🚀 Vercel deployment

---

## Design

Orbit was designed around three primary ideas:

> **Clarity. Trust. Action.**

Business analytics interfaces can become visually dense very quickly. Orbit therefore uses hierarchy, spacing, typography, restrained color, and product UI to make complex information easier to scan.

Rather than treating the dashboard as a separate visual element, the product interface is integrated into the landing page to help visitors understand **what Orbit does and how it works**.

### Design Principles

**Clarity**
Important information is presented through strong hierarchy, concise messaging, and structured visual groupings.

**Trust**
The visual language uses restrained colors, structured data visualization, and consistent UI patterns to create a professional SaaS experience.

**Action**
Sections are structured around a progression from problem → solution → product → benefits → pricing → conversion.

**Product-Led Presentation**
Instead of relying only on marketing copy, Orbit uses dashboard components, analytics cards, metrics, and AI insights to demonstrate the product experience.

**Consistency**
The interface uses a shared visual system across landing-page sections and product UI components.

### Visual Direction

The visual language combines:

* Deep charcoal typography
* Muted purple accent
* Soft neutral surfaces
* Dark blue supporting tones
* Positive orange data states
* Editorial serif accents
* Structured analytics UI
* Generous whitespace
* Restrained rounded components
* Product-focused visual hierarchy

---

## Interaction & Motion

Motion was used to support the interface rather than dominate it.

The landing page uses **GSAP and ScrollTrigger** for scroll-based transitions and product-focused animations.

Motion is primarily used for:

* Section entrances
* Data visualization movement
* Card interactions
* Navigation behavior
* Scroll-based storytelling
* Micro-interactions

The goal was to make the page feel responsive and dynamic while keeping the primary content understandable.

---

## Tech Stack

### Frontend

* **React**
* **TypeScript**
* **Vite**
* **Tailwind CSS**

### Animation

* **GSAP**
* **ScrollTrigger**
* **@gsap/react**

### Icons

* **Lucide React**

### Typography

* **Familjen Grotesk**
* **Instrument Serif**

### Deployment

* **Vercel**

---

## Development

Orbit was developed as a component-based React application with a focus on reusable UI patterns, responsive implementation, frontend interaction, and animation.

The landing page is divided into independent sections and reusable interface components rather than being implemented as a single large component.

### Development Focus

* Component-based React architecture
* Type-safe TypeScript development
* Responsive layouts
* Reusable UI components
* Tailwind CSS styling
* GSAP animation workflows
* ScrollTrigger interactions
* Product UI implementation
* Responsive navigation
* Production Vite builds
* Performance considerations
* Vercel deployment

---

## Project Structure

```text
orbit/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── sections/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ysdesilva21/orbit-landing.git
cd orbit-ai-landing
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will provide the local development URL in your terminal.

---

## Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Responsive Design

Orbit was implemented across:

* Desktop
* Tablet
* Mobile

Responsive behavior was considered across:

* Navigation
* Typography
* Dashboard UI
* Analytics cards
* Charts
* Section layouts
* CTAs
* Pricing
* Animations
* Footer

The implementation adapts the product presentation and interaction patterns rather than simply scaling the desktop layout down.

---

## Performance

Performance was considered throughout development, particularly because the project includes animation and product UI.

Current considerations include:

* Vite production builds
* Optimized image assets
* Responsive layouts
* Controlled GSAP animations
* Reduced unnecessary animation work
* Production asset bundling

The project was evaluated using **Lighthouse** during development, with performance results varying depending on the testing environment and network conditions.

---

## Credits

Orbit is an original frontend and product design project by **Sanju De Silva**.

Third-party resources such as photography, illustrations, icons, fonts, and mockups may be sourced from external providers. Those assets remain subject to their respective licenses and terms.

* **Icons:** Lucide React
* **Fonts:** Familjen Grotesk, Instrument Serif
* **Images / Visual Assets:** Third-party assets used under their respective licenses

---

## License

The source code and original interface implementation are provided for **portfolio and educational purposes**.

You may reference the implementation and structure for learning, but the original Orbit branding, visual design, content, and project assets should not be redistributed or presented as your own work.

Third-party assets included in the project remain subject to their original licenses.

---

## Author

**Sanju De Silva**

Frontend Developer & UI/UX Designer

**React · TypeScript · Tailwind CSS · GSAP**

[GitHub](https://github.com/ysdesilva21)
