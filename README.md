# Maha Viral

Single-page landing site for the Maha Viral proposal to the Industries and Marathi Language Departments, Government of Maharashtra: *Historic decisions. Now in every village.*

Built with Next.js 15 (App Router), React 19 and Tailwind CSS 4.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/page.tsx` — all page sections
- `lib/data.ts` — page copy (edit text here)
- `lib/mapGeo.ts` — Maharashtra district boundaries as SVG paths, generated from [india-maps-data](https://github.com/udit-001/india-maps-data)
- `lib/districts.ts` — divisions and WhatsApp group counts per district
- `components/` — map, case studies, content bank, navbar and other UI pieces
- `app/globals.css` — colour tokens and animations
