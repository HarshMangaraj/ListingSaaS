# ListingKaro

AI listing helper for Indian sellers (Meesho, Amazon, Flipkart).

**Phase 1 (now):** mock frontend only. No Supabase, Gemini, or Razorpay yet. Login is fake. Generate waits 2 seconds and returns sample text.

This folder (`listingkaro/`) is the Next.js app. The repo root only holds Cursor rules and a short pointer README.

## Run locally

```bash
cd listingkaro
npm install
npm run dev
```

Open http://localhost:3000

## Deploy (Vercel)

Set **Root Directory** to `listingkaro`. No env vars in this phase.

---

## Folder structure (what lives where)

```
listingkaro/
  src/
    app/                 ← PAGES + future API routes (URLs come from folders here)
    components/          ← reusable UI pieces
    lib/                 ← helpers, Zod schema, mock data (no React)
  public/                ← static files (images, etc.) if you add any
  package.json           ← scripts and npm packages
  next.config.ts         ← Next.js settings
```

### `src/app/` — this is the router

Next.js App Router: **folder name = URL**. `page.tsx` is the screen. `layout.tsx` wraps every page.

| File | URL | What it is today |
|------|-----|------------------|
| `src/app/page.tsx` | `/` | Landing |
| `src/app/login/page.tsx` | `/login` | Fake Google login → links to `/app` |
| `src/app/app/page.tsx` | `/app` | Seller dashboard (calls `AppDashboard`) |
| `src/app/privacy/page.tsx` | `/privacy` | Legal |
| `src/app/terms/page.tsx` | `/terms` | Legal |
| `src/app/refund/page.tsx` | `/refund` | Legal |
| `src/app/contact/page.tsx` | `/contact` | Legal |
| `src/app/layout.tsx` | all pages | Fonts, metadata, `<html>` |
| `src/app/not-found.tsx` | unknown URLs | 404 |
| `src/app/robots.ts` | `/robots.txt` | Tells Google not to index `/app` and `/login` |
| `src/app/icon.tsx` | favicon | Site icon |
| `src/app/globals.css` | — | Tailwind + brand colors |

There is **no `src/app/api/` folder yet**. That is where backend routes will go.

### `src/components/` — UI only

| File | Used on |
|------|---------|
| `Logo.tsx`, `SiteHeader.tsx`, `SiteFooter.tsx` | Landing, login, legal |
| `FaqAccordion.tsx`, `PricingCards.tsx` | Landing |
| `LegalPage.tsx` | Privacy / terms / refund / contact |
| `AppDashboard.tsx` | `/app` — upload, generate, credits |
| `ResultsCard.tsx` | `/app` — title, description, copy, CSV |
| `HistoryList.tsx` | `/app` — past listings (in-memory mock) |
| `CreditsModal.tsx` | `/app` — buy packs (button disabled) |
| `ErrorBanner.tsx`, `DemoBanner.tsx` | `/app` errors + yellow demo bar |

### `src/lib/` — shared logic (safe to import from pages and APIs)

| File | Role |
|------|------|
| `schema.ts` | Zod listing shape + `Listing` type. Frontend and Gemini must stay in sync with this. |
| `site.ts` | Site name, tagline, `CONTACT_EMAIL` |
| `mock.ts` | Sample listing, history, credit packs |
| `compressImage.ts` | Browser: shrink photo to 1000px JPEG |
| `csv.ts` | Browser: download listing as CSV |

`@/` in imports means `src/`. Example: `import { listingSchema } from "@/lib/schema"`.

---

## How pages talk to backend later

In Next.js you do **not** add a separate Express server. You add **Route Handlers** next to pages:

```
src/app/api/generate/route.ts      →  POST /api/generate
src/app/api/credits/route.ts       →  GET  /api/credits
src/app/api/razorpay/order/route.ts
src/app/api/razorpay/verify/route.ts
src/app/api/razorpay/webhook/route.ts
src/app/auth/callback/route.ts     →  Google OAuth return URL (typical)
```

Rule of thumb:

- Files named `page.tsx` = HTML screens (browser).
- Files named `route.ts` = API (server). Gemini and Razorpay secrets go **only** in `route.ts`, never in `components/`.

### What to change in the frontend when APIs exist

1. **`AppDashboard.tsx`**  
   Today: fake 2s delay + `SAMPLE_LISTING`.  
   Later: `fetch("/api/generate", { method: "POST", body: formData })`, then `listingSchema.parse(json)`.

2. **`src/app/login/page.tsx`**  
   Today: `<Link href="/app">`.  
   Later: real Google OAuth (Supabase) instead of that link.

3. **Credits badge + Buy modal**  
   Today: `useState(3)` and “Payments coming soon”.  
   Later: load credits from `/api/credits`; Checkout.js from a Razorpay order API.

4. **History**  
   Today: array in React state (gone on refresh).  
   Later: load from Postgres.

Keep using `listingSchema` so the UI and the server agree on title / keywords / bullets.

---

## Current user flow (mock)

`/` → `/login` → `/app` → upload photo → Generate → copy listing or CSV.

Legal links in the footer: `/privacy` `/terms` `/refund` `/contact`.
