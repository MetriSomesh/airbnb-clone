# Implementation Plan: Airbnb Listing Clone

## Phase 1: Project Scaffolding & Data Preparation
1. Initialize a Next.js (App Router) project with Tailwind CSS and TypeScript.
2. Install dependencies: `lucide-react` (icons), `clsx`, `tailwind-merge` (class utilities), and `framer-motion` (for modal transitions).
3. Create a `data/mockListing.ts` file. Populate it with real, high-quality Unsplash image URLs to replace the broken assets from the reference, while maintaining the exact text, pricing (₹28,499), and amenity lists (Sofa, Air conditioning, etc.).

## Phase 2: Main Listing Page Construction
1. **Global Header:** Build the sticky top navigation bar featuring the logo, the `"Anywhere | Anytime | Add guests"` search pill, and the user profile menu.
2. **Hero Image Grid:** Implement the asymmetrical desktop grid (1 large image left, 2x2 small images right). Position the `"Show all photos"` absolute button at the bottom right.
3. **Sticky Sub-Navigation:** Create the secondary navigation bar (`Photos`, `Amenities`, `Reviews`, `Location`) that becomes `sticky` at the top of the viewport when scrolling past the hero images.
4. **Content Layout:** Establish a two-column CSS grid for the main body. The left column (~65% width) holds the listing details; the right column (~35% width) holds the booking widget.

## Phase 3: Detailed Content & Sticky Booking Widget
1. **Left Column:** Systematically build the title header, Guest Favourite badge, host details, highlights, description, "Where you'll sleep" cards, and the 2-column amenities grid.
2. **Right Column (Widget):** Implement the sticky booking widget. Recreate the price per night header, the Check-in/Checkout inputs, Guest selector, and the gradient Reserve button.

## Phase 4: Photo Tour Modal (URL-Driven)
1. Set up a Next.js layout or component that listens for `searchParams.get('modal') === 'PHOTO_TOUR_SCROLLABLE'`.
2. Build a full-screen fixed overlay (`inset-0`, `z-40`, `bg-white`, `overflow-y-auto`).
3. Implement the sticky header with the Back `<` button (which removes the query parameter).
4. Create the category sub-header bar and map out the grouped image sections (Living Room 1, Full Kitchen, etc.) using a responsive masonry grid.

## Phase 5: Lightbox Overlay (URL-Driven & Keyboard Navigable)
1. Listen for `searchParams.get('modalItem')`.
2. Build a dark fixed overlay (`inset-0`, `z-50`, `bg-black/95`).
3. Render the centered high-resolution image, the top header (with the dynamic `X of Y` counter), and the Close `✕` button.
4. Implement floating `<` and `>` arrow buttons. 
5. Create a custom hook `useLightboxNav` to handle `ArrowLeft`, `ArrowRight`, and `Escape` keyboard events to manipulate the `modalItem` URL parameter.

## Phase 6: Polish & Accessibility Verification
1. Verify that the Save/Heart button successfully toggles states and triggers a bottom toast notification.
2. Ensure tab-navigation flows logically through the page and focus is securely trapped when the Lightbox is active.
3. Perform a final side-by-side visual comparison against the reference video to ensure font weights, spacing, and brand colors (`#FF385C`) are identical.