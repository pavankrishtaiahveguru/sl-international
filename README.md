# SL International — Overseas Manpower Consultants

A professional marketing website for **SL International**, a Government of India–licensed overseas manpower consultancy that connects skilled, semi-skilled and unskilled professionals with international employment opportunities and supports candidates through the full overseas employment journey.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Website Pages](#website-pages)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [Available Commands](#available-commands)
- [Company Logo and Image Assets](#company-logo-and-image-assets)
- [Responsive Design](#responsive-design)
- [SEO and Accessibility](#seo-and-accessibility)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Future Improvements](#future-improvements)
- [License and Contact](#license-and-contact)

---

## Project Overview

This project is the public website for SL International, an overseas manpower consultancy. The website presents the company's recruitment and mobility support services, its licensed and registered status, and the international destinations it serves, and gives candidates several ways to get in touch.

The site is aimed at two audiences:

- **Candidates** seeking genuine overseas employment in countries such as the UAE, Qatar, Oman, Bahrain, Kuwait, Russia and Turkey.
- **Prospective clients and partners** reviewing the company's profile, services and international client base.

Visitors can explore:

- **Home** (`/`) — an overview of the company, its value proposition, the recruitment process and calls to action.
- **About** (`/about`) — the company profile, vision, mission and licence/trust information.
- **Services** (`/services`) — detailed descriptions of each service stage, from recruitment to post-departure support.
- **Clients** (`/clients`) — a country-wise directory of partner company logos.
- **Contact** (`/contact`) — an enquiry form plus direct phone, email, WhatsApp and office details.

The site is a static, client-side rendered Next.js application. There is no backend, database or CMS; page content is defined directly in components and plain JavaScript data files.

---

## Key Features

All features listed below are implemented in the current codebase.

- **Responsive navigation** — fixed top navbar with active-link highlighting, a scroll-aware background, and an animated slide-in mobile menu with a backdrop overlay.
- **Home page sections** — hero, company introduction, destinations marquee (pure CSS animation with hover-pause and `prefers-reduced-motion` support), "Why Choose Us", a step-by-step process section and a final call-to-action.
- **About page** — company profile with welcome, overview, candidate-journey, solutions, vision, mission sections plus a Government of India licence/trust section.
- **Services page** — five service sections (overseas recruitment, visa & documentation, travel assistance, medical & insurance, post-departure support) with alternating layouts, a journey timeline and a structured process flow.
- **Country-wise client logo directory** (`/clients`) — partner logos grouped by country with filter chips ("All Countries" plus one per country), collapsible country panels, and a responsive logo grid.
- **Contact page** — enquiry form (name, email, phone, service, message) with phone validation via `react-phone-number-input`, plus contact cards for phone, email, WhatsApp, office locations and business hours.
- **WhatsApp integration** — a floating WhatsApp button rendered globally in the root layout, plus WhatsApp links on the Services, Clients and Footer sections.
- **SEO metadata** — global title template, description and keywords in the root layout with Open Graph support; per-page `metadata` is not currently defined (see [Future Improvements](#future-improvements)).
- **Animations** — scroll-triggered fade/slide-in animations via Framer Motion throughout, respecting the user's reduced-motion preference.
- **Responsive footer** — quick links, services, contact details, office locations, licence info, social link (Instagram), back-to-top button and a dynamic copyright year.

---

## Technology Stack

| Technology | Role |
| --- | --- |
| [Next.js](https://nextjs.org) 16 (App Router) | React framework, routing and rendering |
| [React](https://react.dev) 19 | UI library (with React Compiler enabled via `next.config.mjs` and `babel-plugin-react-compiler`) |
| [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (JSX) | Language — no TypeScript is used |
| [Tailwind CSS](https://tailwindcss.com) v4 | Utility-first styling (via `@tailwindcss/postcss`, imported in `src/app/globals.css`) |
| [Framer Motion](https://www.framer.com/motion/) | Scroll-triggered and entrance animations |
| [`next/image`](https://nextjs.org/docs/app/api-reference/components/image) | Optimized image component used throughout |
| [lucide-react](https://lucide.dev) | Primary icon library |
| [react-icons](https://react-icons.github.io/react-icons/) | Additional brand icons (WhatsApp, Instagram, misc.) |
| [react-phone-number-input](https://catamphetamine.github.io/react-phone-number-input/) | International phone input with validation on the contact form |
| [Geist / Geist Mono](https://vercel.com/font) | Fonts loaded with `next/font/google` in the root layout |

Path alias `@/*` → `./src/*` is configured in `jsconfig.json`.

There is **no** database, authentication layer, backend API or CMS in this project.

---

## Website Pages

| Route | Page | Purpose |
| --- | --- | --- |
| `/` | Home | Hero, company intro, destination marquee, why choose us, process and CTA sections |
| `/about` | About Us | Company profile, journey, solutions, vision, mission and licence/trust sections |
| `/services` | Services | Five detailed service sections, journey timeline, process flow and trust section |
| `/clients` | Clients | Country-filterable directory of partner company logos with collapsible panels |
| `/contact` | Contact | Enquiry form and complete contact information (phone, email, WhatsApp, offices) |

The footer also links to `/privacy-policy` and `/terms`. **These routes do not exist yet** — those links currently lead to 404 pages. This is noted in [Future Improvements](#future-improvements).

---

## Project Structure

```text
sl-international/
├── public/
│   └── images/
│       ├── about/                  # About page imagery
│       ├── clients/
│       │   ├── company-logos/      # Country folders with partner logos
│       │   │   ├── BAHARAIN/
│       │   │   ├── DUBAI/
│       │   │   ├── KUWAIT/
│       │   │   ├── OMAN/
│       │   │   ├── QATAR/
│       │   │   ├── RUUSIA/
│       │   │   └── TURKEY/
│       │   └── flags/              # SVG country flags
│       ├── home/                   # Home page imagery
│       ├── logo/                   # Brand logo
│       └── services/               # Services page imagery
├── src/
│   ├── app/
│   │   ├── about/page.jsx
│   │   ├── clients/page.jsx
│   │   ├── contact/page.jsx
│   │   ├── services/page.jsx
│   │   ├── globals.css             # Tailwind v4 entry + brand CSS variables
│   │   ├── layout.js               # Root layout, fonts, metadata, navbar/footer
│   │   ├── page.js                 # Home page
│   │   └── icon.png                # Favicon
│   ├── components/
│   │   ├── common/                 # FloatingWhatsApp, DevelopedByStaffArc
│   │   ├── home/                   # Hero, CompanyIntro, ClientMarquee, etc.
│   │   └── layout/                 # Navbar, Footer
│   └── data/
│       └── clientLogos.js          # Country configs + explicit logo manifests
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── postcss.config.mjs
├── package.json
└── README.md
```

---

## Installation and Setup

### Prerequisites

- **Node.js** — a current LTS version (18.18+ is the minimum for Next.js 15/16; a recent LTS such as 20 or 22 is recommended). You can check with `node -v`.
- **npm** — ships with Node.js.

### Steps

```bash
git clone 
cd sl-international
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

No environment variables or API keys are required — the project currently has none.

---

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server on `http://localhost:3000` |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build (run `npm run build` first) |
| `npm run lint` | Run ESLint (flat config in `eslint.config.mjs`, extending `eslint-config-next` core-web-vitals) |

---

## Company Logo and Image Assets

### Directory layout

- `public/images/clients/company-logos/` — partner logos organized in **one folder per country**.
- `public/images/clients/flags/` — SVG flags used on the Clients page.
- `public/images/about/`, `public/images/home/`, `public/images/services/`, `public/images/logo/` — page imagery and the brand logo.

### Country folder names

The country folders on disk use their **existing names (as-is):**

```text
BAHARAIN   DUBAI   KUWAIT   OMAN   QATAR   RUUSIA   TURKEY
```

Note that some of these folder names are historical misspellings of the countries they represent. The UI displays **normalized country names** that don't depend on the folder names — for example, the `BAHARAIN` folder is shown as **Bahrain**, `RUUSIA` as **Russia**, and `DUBAI` as **United Arab Emirates (UAE)**. This mapping is defined in the `countryConfigs` array of [`src/data/clientLogos.js`](src/data/clientLogos.js), which pairs each display country with its on-disk `folder` value. Keep the folder names unchanged unless you update that mapping.

### How logos are loaded

The Clients page does **not** scan the filesystem at runtime. It uses an **explicit manifest** in [`src/data/clientLogos.js`](src/data/clientLogos.js):

- `countryConfigs` defines each country's display name, short name, folder and flag image.
- `rawLogoSets` maps each folder name to an explicit list of logo filenames.

### Adding a new logo

1. Place the image file (currently `.png`) into the correct country folder under `public/images/clients/company-logos/<COUNTRY>/`.
2. Add its filename to the matching array in `rawLogoSets` in `src/data/clientLogos.js`.

   > If a logo file exists in the folder but is missing from `rawLogoSets`, it will **not** appear on the website — the manifest is the source of truth.
3. The public URL is `/images/clients/company-logos/<COUNTRY>/<filename>`. Filenames are passed through `encodeURIComponent`, but prefer avoiding special characters entirely (see [Troubleshooting](#troubleshooting)).
4. The visible company name is auto-derived from the filename by `formatDisplayName`, which strips common suffixes such as `COMPANY`, `COMAPNY` and `COMPAN` and title-cases the rest. If the derived name looks wrong, adjust the filename.
5. Run `npm run dev` and verify the logo renders correctly on both desktop and mobile viewports.

If you add a **new country**, add an entry to `countryConfigs`, a folder under `company-logos/`, a corresponding entry in `rawLogoSets`, and a filter option in `src/app/clients/page.jsx` (`filterOptions`). A flag SVG in `flags/` is optional — the UI falls back to a two-letter badge.

---

## Responsive Design

Responsive behavior is implemented with Tailwind's mobile-first breakpoints (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`).

- **Mobile navigation** — hamburger button below `lg`, slide-in panel (88% width, capped at `max-w-sm`) with body-scroll locking and an overlay that closes the menu on tap.
- **Desktop navigation** — centered links with animated underlines and an "Enquire Now" CTA at `lg` and above.
- **Contact page** and most sections collapse gracefully with adjusted spacing/typography across breakpoints.
- **Country filters and logo grid** — the filter row scrolls horizontally on small screens; the grid flows from 2 columns on mobile up to 7 columns on wide (`2xl`) screens.
- **Images** — all imagery uses `next/image` with explicit `sizes` so browsers pick appropriately sized assets per viewport.
- **Contact actions** — phone/email/WhatsApp are tappable links, and the floating WhatsApp button is sized down on mobile.
- **Section spacing** — reduced padding on mobile with progressively larger spacing at `sm`/`lg`.

Responsive behavior has been implemented in code but **not every viewport has been exhaustively manually tested**; please report layout issues on your target devices.

---

## SEO and Accessibility

### SEO

- Global metadata in `src/app/layout.js`: default title, `%s | SL International` title template, description, keyword list, author/creator, `metadataBase`, and Open Graph tags (`og:type: website`, `og:locale: en_IN`).
- No per-page `metadata` exports exist yet (pages are client components), and no sitemap, robots configuration or structured data (JSON-LD) is implemented.

### Accessibility practices in the code

- Semantic HTML — `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- `aria-label` on icon-only buttons (menu toggle, back-to-top, floating WhatsApp link).
- `aria-expanded`/`aria-controls` on the mobile menu toggle and country panels; `aria-pressed` on filter chips; `role="alert"` for the phone validation error; `aria-invalid`/`aria-describedby` on the phone input.
- Visible focus styles via `:focus-visible` outlines in `globals.css`.
- Descriptive `alt` text on content images; decorative images use `alt=""`.
- `prefers-reduced-motion` respected for the marquee animation and Framer Motion animations (`useReducedMotion` / `MotionConfig reducedMotion="user"`).

Full accessibility compliance has **not** been independently audited.

---

## Deployment

No production deployment or domain is confirmed for this repository. Generic guidance:

1. Build the project:

   ```bash
   npm run build
   ```

2. Serve it with any Node.js host:

   ```bash
   npm run start
   ```

   or deploy to a platform supporting Next.js, such as [Vercel](https://vercel.com/docs) (connect the Git repository and it will build automatically).

### `metadataBase` warning

`src/app/layout.js` currently sets:

```js
metadataBase: new URL("https://www.sl-international.com"),
```

This is a **placeholder** domain. Before deploying, replace it with the real production URL so Open Graph and canonical URLs resolve correctly.

---

## Troubleshooting

- **A logo/image doesn't appear** — check the path exactly matches `public/images/...` (case-sensitive: `BAHARAIN`, not `Bahrain`/`BAHRAIN`) and that the filename is listed in `rawLogoSets` in `src/data/clientLogos.js`.
- **Filenames with spaces** — filenames are stored with spaces in the manifest and URL-encoded via `encodeURIComponent`. This works, but prefer avoiding spaces and special characters; use hyphens (`al-naboodah.png`) to prevent subtle path/display issues.
- **Company name displayed incorrectly** — it's derived from the filename by `formatDisplayName`; rename the file (and update the manifest) if the derivation is wrong.
- **Cannot find module "@/...`"** — the `@/*` alias is configured in `jsconfig.json`; make sure the file exists under `src/` and run `npm install` if `node_modules` is missing.
- **Port 3000 already in use** — the dev server will suggest a different port (e.g. `3001`), or start on a specific one with `npm run dev -- -p 3001`. Alternatively, stop the process occupying port 3000.
- **Build or lint failure** — run `npm run lint` directly to see rule violations, and `npm run build` for the full build output. Both must pass before changes can be considered complete.
- **Changes not appearing** — if hard refresh doesn't help, delete the `.next` cache and restart:

  ```bash
  rm -rf .next
  npm run dev
  ```

- **Missing flag image** — `TURKEY` currently has `flag: null`; the UI shows a two-letter badge instead. Add an SVG to `flags/` and update `countryConfigs` to fix it.

---

## Future Improvements

The following are **not implemented yet** and are suggestions only:

- Per-page metadata and canonical URLs (pages are currently client components inheriting the root layout metadata only).
- Sitemap (`sitemap.js`), robots configuration and structured data (JSON-LD) for richer search results.
- Actual pages for the footer's `/privacy-policy` and `/terms` links (these routes don't exist yet).
- Automated responsive visual tests across key breakpoints.
- An improved client-logo browsing experience (e.g. lightbox details per company, richer country pages), plus normalizing the misspelled country folder names with proper redirects/backward-compat handling.

---

## License and Contact

### License

No license file is present in this repository, so all rights are reserved by SL International unless a license is added. Do not redistribute the code or assets without permission.

### Business contact

Details below are as shown publicly on the website itself:

- **Website:** `https://www.sl-international.com` (also a placeholder — see [Deployment](#deployment))
- **Phone / WhatsApp:** +91 77024 66534
- **Email:** slinternationaltravel@gmail.com / hr.slintl@gmail.com
- **Instagram:** [@slinternationaltravel](https://www.instagram.com/slinternationaltravel/)
- **Head office:** 2-106/A, 2nd Floor, Above Honda Showroom, Dist: Jagtial, Metpally - 505325, Telangana, India
- **Branch office:** Door No. 3-3-2622/1, Lavanya Arcade, 2nd Floor, Opp. Chaitanya Public School, Gayatri Nagar, Kotagally, Nizamabad - 503001

*Note: the +91 77024 66534 phone/WhatsApp number is used sitewide for calls, WhatsApp and floating button, while some CTA buttons (e.g. services/contact hero) link to a different number (`918725236116`). This inconsistency exists in the current codebase and is worth unifying.*
<!--  -->