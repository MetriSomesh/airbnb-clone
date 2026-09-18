# Architecture Documentation: Airbnb Listing Clone

This document provides a comprehensive technical breakdown of the architecture, component structure, state management, and production cloud infrastructure for the **Airbnb Listing Page Clone**.

---

## 1. Application Component Architecture

The frontend is constructed with **Next.js App Router**, **React 19**, and **Tailwind CSS**. The interface is organized into a modular component hierarchy designed for responsive performance and high visual fidelity.

```mermaid
graph TD
    Root[App Layout / page.tsx] --> Header[GlobalHeader]
    Root --> StickyNav[StickySubNav - ScrollSpy]
    
    subgraph Main Container - max-w-6xl
        Root --> Actions[ListingActions - Wishlist & Share]
        Root --> Hero[HeroGrid - 5 Image Mosaic]
        Hero --> Lightbox[Lightbox Modal]
        Hero --> PhotoTour[PhotoTourModal]
        
        subgraph Split Content Layout
            Root --> LeftCol[Left Column Details]
            Root --> RightCol[Right Column Sticky Sidebar]
            
            LeftCol --> Host[HostDetails]
            LeftCol --> Listing[ListingDetails - Amenities & Highlights]
            LeftCol --> MapComp[NeighborhoodMap - Leaflet / Location]
            LeftCol --> Reviews[ReviewsSection - Sub-ratings & Tags]
            
            RightCol --> Booking[BookingWidget - Pricing & Reserve]
            Booking --> Calendar[DualCalendar - Date Selection]
        end
        
        Root --> Carousel[NearbyStaysCarousel - Stays nearby]
    end

    Root --> Toast[WishlistToast - Global Notifications]
```

---

## 2. Production Cloud Infrastructure & Microservices

For a production-grade scale deployment, the platform follows a distributed, microservices-based cloud architecture to deliver sub-second search latency, high availability, and ACID-compliant transaction processing.

```mermaid
graph TD
    Client[Web / Mobile Client] --> WAF[Cloudflare CDN & WAF]
    WAF --> Edge[Next.js App Edge Server - Vercel / AWS]
    Edge --> Gateway[API Gateway - Kong / AWS API Gateway]

    subgraph Core Microservices
        Gateway --> SearchSvc[Search & Discovery Service]
        Gateway --> ListingSvc[Listing Catalog Service]
        Gateway --> BookingSvc[Booking & Reservation Service]
        Gateway --> UserSvc[User & Auth Service]
    end

    subgraph Data Tier
        SearchSvc --> Elastic[(Elasticsearch - Geospatial & Filters)]
        ListingSvc --> Mongo[(MongoDB - Listing Attributes & Reviews)]
        ListingSvc --> Redis[(Redis Cache - Pricing & Availability)]
        BookingSvc --> Postgres[(PostgreSQL - ACID Bookings & Payments)]
        UserService --> Postgres
    end

    subgraph Media Pipeline
        ListingSvc --> S3[(AWS S3 - Property Images)]
        S3 --> ImgOpt[Image Optimization CDN]
        ImgOpt --> Client
    end

    BookingSvc --> Stripe[Stripe / Payment Gateway API]
```

---

## 3. Dynamic State & Data Flow

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant Nav as StickySubNav
    participant Widget as BookingWidget
    participant Cal as DualCalendar
    participant Toast as WishlistToast

    User->>Nav: Scroll down listing page
    Nav->>Nav: IntersectionObserver triggers ScrollSpy
    Nav-->>User: Highlight active section & slide-in subnav

    User->>Cal: Select Check-in & Check-out dates
    Cal->>Widget: Calculate night count & total price
    Widget-->>User: Update dynamic price summary & reserve breakdown

    User->>User: Click Save (Wishlist button)
    User->>Toast: Trigger state change (isSaved = true)
    Toast-->>User: Display Toast: "Saved to wishlist"
```

---

## 4. Key Component Responsibilities

| Component | Responsibility | Key Features |
| :--- | :--- | :--- |
| **`GlobalHeader.tsx`** | Top primary navigation bar | Beló stroke-outline logo, search pill with house emoji, responsive profile/globe actions |
| **`StickySubNav.tsx`** | Secondary sticky navbar | Appears on scroll past hero grid; provides smooth ScrollSpy navigation to page sections |
| **`HeroGrid.tsx`** | Listing photo showcase | 5-image grid mosaic with hover overlay and triggers for Lightbox & Photo Tour |
| **`HostDetails.tsx`** | Host profile & information card | Host badge metrics, co-hosts grid, protection callout, and 3-column "Things to know" |
| **`ReviewsSection.tsx`** | Reviews & Ratings | 4.95 badge flanked by laurel wreaths, 6 sub-rating score columns with 26px icons, interactive tag filter pills, and expandable comments |
| **`BookingWidget.tsx`** | Pricing & Reservation card | Sticky floating widget with date picker inputs, guest selector, and fee breakdown calculations |
| **`DualCalendar.tsx`** | Multi-month date picker | Interactive check-in / check-out date selection with minimum stay rules |
| **`NearbyStaysCarousel.tsx`** | Related listings recommendations | Responsive 5-card horizontal slider with page pagination indicator (`1 / 2`) |
| **`WishlistToast.tsx`** | State feedback | Animated notification popup when saving/removing listing from wishlist |

---

## 5. Technology Stack & Design System

- **Framework:** Next.js (App Router, Server & Client Components)
- **Styling:** Tailwind CSS (Custom color tokens, responsive container breakpoints)
- **Typography:** Google Font **Plus Jakarta Sans** (Airbnb Cereal alternative)
- **Icons:** Lucide React & Handcrafted Inline SVGs
- **Build Tooling:** TypeScript 5, ESLint, PostCSS
