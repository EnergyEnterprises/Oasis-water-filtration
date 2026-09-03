# Oasis Water Filtration

Public marketing site for **Oasis Water Filtration** (Energy Enterprises LLC / sister brand to Oasis Well Pump) in Meridian, Idaho.

Intended public hostname: [oasiswaterfiltration.com](https://oasiswaterfiltration.com). This repository is the website. Pointing that domain at a host is a later step and is not done here.

## Preview locally

```bash
npm install && npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | What it does |
| --- | --- |
| `npm run dev` | Local preview with hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

Node 20+ is recommended.

## What this site is

A fast Next.js (App Router, TypeScript) marketing site:

- Home, filtration, well water, process, service area, and contact / quote
- Click-to-call `208-573-0859`
- Contact form is a **stub** — it does not send email
- SEO: titles, descriptions, Open Graph, `sitemap.xml`, `robots.txt`

It does not include login, a CMS, reviews, ratings, licenses, years in business, or certifications.

## After the site is approved

1. Host the production build (`npm run build` then `npm run start`, or a Next.js host).
2. Point `oasiswaterfiltration.com` (and `www` if you want it) at that host.
3. Replace the contact form stub with a real inbox or form service when you are ready to take web leads.

## Business facts used in copy

- Brand: Oasis Water Filtration
- Address: 517 E. 3rd St., Meridian, ID 83642
- Phone: 208-573-0859
- Related: Oasis Well Pump, a division of Energy Enterprises LLC
- Offer: whole-home water filtration and treatment, plus point-source reverse osmosis for drinking water; free water tests and quotes
- Area: Treasure Valley / Ada and Canyon County, Idaho, homes on private wells
