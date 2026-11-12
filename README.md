# Tech Global | Civil Contractors

A corporate website project for **Tech Global**, presenting its civil construction, industrial finishing, and related contracting services.

The website is built with Next.js, React, TypeScript, and Tailwind CSS. Its visual direction uses an architectural, editorial layout with a charcoal, ivory, and olive palette.

## Project overview

The website is designed to help prospective clients understand Tech Global's services, review selected completed work, learn about the company, and prepare a project inquiry.

### Current website sections

- **Home:** Introductory hero section and navigation.
- **Services:** Overview of seven service categories, with individual service detail pages.
- **Projects:** Selected completed work, with individual project pages and image galleries.
- **About:** Company profile and service focus.
- **Contact:** Project inquiry form interface.
- **Legal:** Privacy Policy and Terms of Service pages.

### Services presented

1. Complete Civil Construction
2. Masonry & Plastering
3. Industrial Painting & Protective Coatings
4. Epoxy Flooring & Surface Systems
5. Waterproofing Systems
6. Restoration & Commercial Rehabilitation
7. Additional Finishing Works & Pavers

### Selected project work

The current project portfolio includes two completed works:

- Industrial Facility Flooring & Finishing
- Interlocking Paver Installation

Project descriptions and images are maintained in the application data files and media manifest.

## Technology

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- Next.js App Router
- Next.js Image and Font optimization

## Repository structure

The Next.js application is located in the `tech_global/` directory.

```text
tech-global/
├── README.md
└── tech_global/
    ├── app/
    │   ├── about/
    │   ├── contact/
    │   ├── privacy/
    │   ├── projects/
    │   │   └── [slug]/
    │   ├── services/
    │   │   └── [slug]/
    │   ├── terms/
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    ├── data/
    │   ├── media.ts
    │   ├── projects.ts
    │   └── services.ts
    ├── public/
    │   └── images/
    ├── package.json
    └── tsconfig.json
```

## Run locally

### Requirements

- Node.js
- npm

### Installation

From the repository root, open a terminal and run:

```bash
cd tech_global
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Available commands

Run these commands from the `tech_global/` directory.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server after building |
| `npm run lint` | Run ESLint checks |

## Configuration and content

- Service information is maintained in `tech_global/data/services.ts`.
- Project information is maintained in `tech_global/data/projects.ts`.
- Image paths, alt text, and captions are maintained in `tech_global/data/media.ts`.
- Website-wide layout, fonts, and metadata are configured in `tech_global/app/layout.tsx`.
- Images used by the site are stored under `tech_global/public/images/`.

## Current implementation notes

The repository contains the website interface and page structure. The following items require confirmation or completion before the site is treated as production-ready:

- **Contact form integration:** The form interface is present, but it is not connected to an email service, CRM, or backend endpoint. It does not currently send or store inquiries.
- **Company contact details:** Official phone number, email address, business address, and domain details should be added only after confirmation by Tech Global.
- **Legal content:** Privacy Policy and Terms of Service pages should be reviewed and approved by the company before publication.
- **Launch:** Production hosting, domain configuration, and final deployment are separate launch steps.

## Review and handover

This repository is provided for review of the website source code and current implementation. Final content, contact information, form handling, and deployment should be confirmed with the company before launch.

---

**Tech Global | Civil Contractors**
