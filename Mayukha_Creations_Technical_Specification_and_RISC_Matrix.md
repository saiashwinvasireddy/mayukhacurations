# Technical Specification & RISC Matrix: Mayukha Creations Static Web Platform

---

## 1. Executive Summary & Project Context

* **Brand Name**: Mayukha Creations
* **Official Instagram**: `@MayukhaCurations` (`https://instagram.com/MayukhaCurations`)
* **Primary WhatsApp Hotline**: `+91 9550163099` (`https://wa.me/919550163099`)
* **Target Audience & Scope**: Bespoke event design, traditional Indian & contemporary ceremonies across Hyderabad, Telangana, and Andhra Pradesh (Pellikuthuru/Pellikoduku, Sangeet, Haldi, Receptions, Cradle Ceremonies, Half-Saree/Dhoti functions, Birthday styling, and Corporate setups).
* **Hosting Platform**: GitHub Pages (Static React Web Application).
* **Target Repository**: `https://github.com/saiashwinvasireddy/mayukhacurations`
* **Default GitHub Pages URL**: `https://saiashwinvasireddy.github.io/mayukhacurations/`
* **Custom Domain Target (Optional / Future)**: `mayukhacreations.com`

---

## 2. Design Inspiration, Palette & Aesthetic Directives

### 2.1 Web Inspiration & Design Patterns
* **Visual-First Layout**: Emphasizing high-resolution event imagery, clean white/cream negative space, and minimal background clutter.
* **Competitor / Industry References**:
  * *Style Me Pretty / Junebug Weddings*: Categorized editorial image galleries and tiered service listings.
  * *Twenty Three Layers / LK Events*: Full-viewport atmospheric carousels, soft typography, and non-intrusive floating contact hooks.

### 2.2 Pastel Color System (Tailwind CSS Palette)
* **Pastel Sage Green (Primary Brand & Action Buttons)**: `#8FA89B` (Dark: `#7A9A8B`)
* **Soft Mint Green (Card Backgrounds & Subtle Tints)**: `#EAF2ED` (Light: `#F0F5F2`)
* **Warm Cream / Ivory Linen (Base Page Background)**: `#FAF8F5` (Light: `#FDFBF7`)
* **Blush Rose / Soft Terracotta (Secondary Accents & Badges)**: `#E8C5B8` (Dark: `#DFA89B`)
* **Deep Slate Charcoal (Typography & Body Text)**: `#2D3732` (Ensures high readability without the harshness of pure black `#000000`).
* **Muted Gold / Warm Brass (Stars & Highlights)**: `#C5A880`

### 2.3 Typography & Micro-Interactions
* **Headings**: `Cormorant Garamond` or `Playfair Display` (Serif elegance, weight 600).
* **Body / UI**: `Plus Jakarta Sans`, `Inter`, or `Montserrat` (Clean sans-serif readability, weight 400/500).
* **Card Borders & Radii**: `rounded-2xl` (16px) or `rounded-3xl` (24px) for gentle organic styling.
* **Shadows**: Soft multi-layered diffuse shadows (`shadow-sm`, `shadow-md` with `rgba(45, 55, 50, 0.05)`).
* **Micro-interactions**: Subtle hover lifts (`-translate-y-1`), soft drop shadows, and smooth 300ms transitions.

---

## 3. Comprehensive Visual Blueprint & UI Components

### 3.1 Navigation Bar (Sticky & Frosted Glass)
* **Styling**: `backdrop-blur-md bg-[#FAF8F5]/90 sticky top-0 z-50 border-b border-[#EAF2ED]`.
* **Elements**:
  * Brand Logo / Monogram: *"Mayukha Creations"* (Serif font).
  * Navigation Anchors: *Home*, *Portfolio*, *Packages*, *Process*, *Testimonials*, *Contact*.
  * Action Buttons:
    * Instagram Icon Link: `https://instagram.com/MayukhaCurations`
    * WhatsApp Direct Button: Pill-shaped Sage Green button linking to `https://wa.me/919550163099`.

### 3.2 Hero Section (Atmospheric & Conversion-Focused)
* **Layout**: Full-viewport responsive banner with soft ambient pastel gradient (`linear-gradient(135deg, #F0F5F2 0%, #FAF8F5 100%)`).
* **Content**:
  * Eyebrow Tag: *"BESPOKE EVENT STYLING & FLORAL DÉCOR"* (Muted brass caps).
  * Main Headline: *"Crafting Timeless Moments & Unforgettable Atmospheres."*
  * Subheadline: *"Elevating weddings, intimate ceremonies, half-saree functions, birthdays, and celebrations with handcrafted floral architecture and custom themes."*
  * Dual CTAs:
    * Primary CTA: *"Chat on WhatsApp"* (`https://wa.me/919550163099?text=Hi%20Mayukha%20Creations%2C%20I'm%20interested%20in%20discussing%20decor%20for%20an%20upcoming%20event.`)
    * Secondary CTA: *"View Instagram Feed"* (`https://instagram.com/MayukhaCurations`)
  * Highlight Badges: *"100% Customized Themes"*, *"Traditional & Contemporary Styles"*, *"End-to-End On-Site Execution"*.

### 3.3 Filterable Masonry Portfolio Grid & Lightbox
* **Filter Tabs**: `All`, `Weddings & Mandaps`, `Haldi & Mehendi`, `Birthdays & Half-Saree`, `Baby Shower / Cradle`, `Floral & Backdrops`.
* **Interactions**:
  * Card aspect ratio `aspect-[4/5]` with `loading="lazy"`.
  * Hover overlay displaying event title, category, and zoom icon.
  * Full-screen Lightbox popover on click with high-resolution image rendering.

### 3.4 Stop-Gap Event Decoration Packages (`/src/data/packages.json`)
```json
[
  {
    "id": "intimate-celebration",
    "name": "The Intimate Elegance",
    "tagline": "Ideal for Birthdays, Half-Saree, Cradle Ceremonies & Intimate Gatherings",
    "startingPrice": "Custom Quote",
    "isPopular": false,
    "features": [
      "Custom Themed Backdrop (8ft x 8ft)",
      "Premium Artificial & Fresh Floral Accents",
      "Welcome Signboard with Floral Garland",
      "Ambient Mood Lighting & Warm Spotlights",
      "Cake Table / Seating Décor Staging",
      "On-site Setup and Tear-down Included"
    ],
    "ctaText": "Inquire for Intimate Décor"
  },
  {
    "id": "festive-traditions",
    "name": "The Signature Festive",
    "tagline": "Curated for Haldi, Mehendi, Pellikuthuru & Sangeet Evenings",
    "startingPrice": "Custom Quote",
    "isPopular": true,
    "features": [
      "Traditional Marigold / Exotic Floral Arch & Stage Staging",
      "Customized Seating Arrangement (Jhula / Diwan / Urli Setup)",
      "Curated Photo-Booth / Selfie Corner with Brand Props",
      "Pathway / Aisle Floral Tassel Styling",
      "Dynamic Warm Uplighting & Par Lights",
      "Dedicated On-site Décor Supervisor"
    ],
    "ctaText": "Inquire for Festive Décor"
  },
  {
    "id": "grand-bespoke-wedding",
    "name": "The Royal Bespoke",
    "tagline": "Full-Scale Architectural Styling for Weddings & Grand Receptions",
    "startingPrice": "Custom Quote",
    "isPopular": false,
    "features": [
      "Grand Mandap / Stage Architectural Installation (Up to 24ft+)",
      "Cascading Fresh Floral Ceilings & Overhead Chandeliers",
      "VIP Entrance Tunnel with Custom Structures & Draping",
      "Designer Aisle Runner with Floral Pillars & Ambient Lanterns",
      "Complete Venue Mood Lighting Synchronization",
      "End-to-End Conceptualization & 3D Visualization Support"
    ],
    "ctaText": "Book Bespoke Consultation"
  }
]
```

### 3.5 4-Step Design & Booking Workflow
1. **01. Discovery & Consultation**: Client shares event vision, venue, dates, and theme.
2. **02. Moodboard & Custom Quote**: Mayukha Creations provides curated design palettes and transparent estimates.
3. **03. Sourcing & Handcrafted Prep**: Custom fabrication, floral procurement, and lighting configurations.
4. **04. On-Site Setup & Execution**: Punctual, flawless setup and post-event teardown.

### 3.6 Lead Capture & Interactive Contact Section
* **Two-Column Responsive Layout**:
  * **Left Column (Direct Channels)**:
    * Heading: *"Let's Design Your Dream Event"*
    * Direct WhatsApp & Phone: `+91 9550163099`
    * Instagram Link Card: `@MayukhaCurations` (`https://instagram.com/MayukhaCurations`)
    * Service Areas: Hyderabad, Telangana, and Andhra Pradesh.
  * **Right Column (WhatsApp Inquiry Dispatcher Form)**:
    * Fields: Name, Phone Number, Event Date, Event Type (Dropdown), Venue Location, Notes.
    * Submission Logic: Form formats a pre-filled WhatsApp message and opens `https://wa.me/919550163099?text=...`.
* **Persistent Floating Action Widgets**:
  * Bottom-Right Floating **WhatsApp Button** with glowing pulse animation.
  * Quick Instagram link button.

---

## 4. GitHub Repository Configuration & Branch Protection

* **Repository**: `https://github.com/saiashwinvasireddy/mayukhacurations`
* **Admin**: `@saiashwinvasireddy`

### 4.1 Strict Branch Protection Rules
To ensure no unauthorized direct pushes occur to `main`:
1. Navigate to **Settings -> Branches -> Add branch protection rule**.
2. **Branch name pattern**: `main`.
3. Check **Require a pull request before merging**.
4. Check **Require approvals** and set count to `1`.
5. Check **Require status checks to pass before merging** (select GitHub Actions build job).
6. Check **Do not allow bypassing the above settings**.

---

## 5. RISC Analysis Matrix (Risk, Impact, Severity, Countermeasure)

| ID | Risk Factor | Impact Area | Severity | Countermeasure / Mitigation Strategy |
| :--- | :--- | :--- | :--- | :--- |
| **R-01** | **Direct Unreviewed Pushes to `main`** | Security / Uptime | **High** | Enforce GitHub Branch Protection requiring PR and admin review approval. |
| **R-02** | **SPA 404 Routing on Static GitHub Pages** | Navigation / UX | **High** | Single-page layout with smooth-scroll anchors and a `public/404.html` redirect script. |
| **R-03** | **Large Photography Dragging Page Speed** | LCP / Core Web Vitals | **High** | WebP format, `loading="lazy"`, thumbnail previews, and lazy-loading lightbox modals. |
| **R-04** | **Static Client-Side SEO Limitations** | Search Discovery | **Medium** | Embed `react-helmet-async`, structured `JSON-LD` (`LocalBusiness`), and a static `sitemap.xml`. |
| **R-05** | **Lead Loss Without a Database Backend** | Business Inquiries | **Medium** | Form routes directly to pre-formatted native WhatsApp messages (`wa.me/919550163099`). |
| **R-06** | **Path Resolution Errors on GitHub Pages** | Asset Loading | **Medium** | Set `base: '/mayukhacurations/'` in `vite.config.js` for repository subpath hosting. |

---

## 6. Technical Architecture & File Directory

```
mayukhacurations/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions automated build & Pages deployment
├── public/
│   ├── assets/
│   │   ├── gallery/          # WebP event images
│   │   └── brand/            # Logo & Favicon
│   ├── 404.html              # GitHub Pages fallback script
│   ├── sitemap.xml
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Glassmorphic header with IG & WhatsApp links
│   │   ├── Hero.jsx          # Ambient pastel gradient hero with CTAs
│   │   ├── PortfolioGrid.jsx # Filterable masonry gallery
│   │   ├── LightboxModal.jsx # Full-screen image preview
│   │   ├── Packages.jsx      # Stop-gap 3-tier event packages
│   │   ├── Process.jsx       # 4-step workflow cards
│   │   ├── Testimonials.jsx  # Client reviews & ratings
│   │   ├── ContactSection.jsx# Contact info + WhatsApp dispatcher form
│   │   ├── FloatingActions.jsx # Persistent floating WhatsApp & IG buttons
│   │   └── Footer.jsx        # Social links & copyright
│   ├── data/
│   │   ├── portfolio.json    # Gallery metadata & image links
│   │   ├── packages.json     # Stop-gap packages data
│   │   └── reviews.json      # Client testimonials
│   ├── App.jsx               # Single-page layout assembler
│   ├── main.jsx              # App entrypoint
│   └── index.css             # Tailwind CSS & custom pastel utility classes
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## 7. Automated GitHub Actions CI/CD Pipeline (`.github/workflows/deploy.yml`)

```yaml
name: Deploy Mayukha Creations Static Site

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build-and-deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Source Code
        uses: actions/checkout@v4

      - name: Setup Node.js Environment
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Build Static Production Assets
        run: npm run build

      - name: Setup GitHub Pages
        uses: actions/configure-pages@v4

      - name: Upload Static Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 8. Step-by-Step Instructions for the AI Agent (Running in Workspace)

1. **Workspace Check**: Ensure execution is in the root directory of the cloned repo (`mayukhacurations`).
2. **Branch Creation**:
   ```bash
   git checkout -b feature/initial-web-scaffold
   ```
3. **Scaffold React & Vite**:
   ```bash
   npm create vite@latest . -- --template react
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   npm install lucide-react framer-motion react-helmet-async
   ```
4. **Configure `vite.config.js`**:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/mayukhacurations/',
   })
   ```
5. **Configure Tailwind Palette (`tailwind.config.js`)**:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {
         colors: {
           sage: { DEFAULT: '#8FA89B', dark: '#7A9A8B' },
           mint: { light: '#F0F5F2', DEFAULT: '#EAF2ED' },
           cream: { light: '#FDFBF7', DEFAULT: '#FAF8F5' },
           blush: { DEFAULT: '#E8C5B8', dark: '#DFA89B' },
           charcoal: '#2D3732',
           brass: '#C5A880',
         },
         fontFamily: {
           serif: ['"Cormorant Garamond"', 'serif'],
           sans: ['"Plus Jakarta Sans"', 'sans-serif'],
         }
       },
     },
     plugins: [],
   }
   ```
6. **Populate Data & Components**:
   * Create `/src/data/packages.json` and `/src/data/portfolio.json`.
   * Implement UI components with responsive pastel styling and mobile navigation.
   * Wire the WhatsApp form dispatcher to open `https://wa.me/919550163099?text=...`.
7. **Create CI/CD Pipeline**: Write `.github/workflows/deploy.yml`.
8. **Git Commit & Push**:
   ```bash
   git add .
   git commit -m "feat: scaffold initial Mayukha Creations static React site with pastel theme"
   git push -u origin feature/initial-web-scaffold
   ```