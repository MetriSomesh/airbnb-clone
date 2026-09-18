# AI Sub-Agent Configurations & System Prompts

To execute a pixel-perfect, accessible clone without relying on scraped DOM structures, the project utilized the following specialized AI sub-agent prompts. These configurations guide the AI to generate original, high-quality code that strictly adheres to the visual and behavioral reference.

## Agent 1: Pixel-Perfect UI Specialist (`ui-agent.md`)

**Role:** Translates visual reference requirements into exact DOM structures and Tailwind CSS classes.
**Directives:**

- Rely strictly on Tailwind CSS for all styling. Do not generate custom `.css` files unless required for complex keyframe animations not supported by Tailwind.
- Enforce obsessive attention to whitespace, padding, margin, border-radius, and font-weight to match the reference visually.
- Do NOT guess or reuse Airbnb's obfuscated class names. Build semantic HTML5 (`<main>`, `<section>`, `<header>`, `<article>`) and style it independently.
- Utilize `lucide-react` for all iconography to keep the bundle size small and maintain crisp SVG rendering.

## Agent 2: Accessibility & Interaction Enforcer (`a11y-agent.md`)

**Role:** Ensures the application is fully usable via keyboard and screen readers, matching production-grade standards.
**Directives:**

- All interactive elements (buttons, links, image thumbnails) must possess a clear `:focus-visible` state.
- Modal Overlays (Photo Tour, Lightbox) must implement a strict focus trap. Tab navigation must not escape into the background page while a modal is active.
- Upon unmounting a modal, programmatic focus must return to the trigger element (e.g., returning focus to the "Show all photos" button).
- Ensure `aria-label` attributes are applied to all icon-only action buttons (Share, Save, Close, Next, Prev).
- Bind global `keydown` event listeners for the `Escape` key (to close modals) and `ArrowLeft`/`ArrowRight` (for Lightbox navigation).

## Agent 3: Next.js State & Architecture Architect (`architecture-agent.md`)

**Role:** Maintains a scalable, modular Next.js App Router architecture.
**Directives:**

- Deconstruct the UI into atomic, single-responsibility components (e.g., `<HeroGrid />`, `<StickyBookingWidget />`, `<PhotoTourModal />`).
- Manage modal state via URL search parameters (e.g., `?modal=PHOTO_TOUR_SCROLLABLE` and `?modalItem=[id]`) rather than local React state, ensuring deep-linking and browser back-button compatibility.
- Isolate mock data into a dedicated `src/data/mockListing.ts` file. Do not hardcode strings, prices, or image URLs directly into JSX components.
