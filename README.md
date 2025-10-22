# Frontend - Portfolio

This is the frontend for Dev Narpheesah's portfolio built with React, Vite, Tailwind, and Framer Motion.

## Quick checklist (what's present)
- Hero, About, Skills, Projects, Experience, Contact sections
- Framer Motion animations with reduced-motion support
- Contact form wired to the live backend on Render: `https://portbackend-1-nn8t.onrender.com/api/contact`
- Demo links pointing to live Vercel site: `https://portfrontend-ten.vercel.app/`

## Missing items to add (recommendations)
- `resume.pdf` in the `public/` folder (used by the "Download Resume" link in the Hero)
- Project images referenced in `src/sections/Projects.jsx` (`/project1.png`, `/project2.png`, `/portfolio.png`) — either add to `public/` or import from `src/assets`
- Update real LinkedIn URL and email address in `src/components/Footer.jsx`
- Optional: Add structured data (JSON-LD) for SEO, and a real favicon

## How to run locally
1. Install dependencies

```powershell
cd frontend
npm install
```

2. Run dev server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
```

## Contact form
The contact form posts to the live backend at `https://portbackend-1-nn8t.onrender.com/api/contact`. If you want to test locally against your backend, either run the backend locally and configure Vite proxy or change the API URL in `src/sections/Contact.jsx`.

## Next improvements (optional)
- Add unit tests for the contact form (React Testing Library)
- Add project detail pages or modal that shows screenshots and features
- Add a resume section with downloadable PDF and highlights
- Add analytics (e.g., Plausible) and contact spam protection (reCAPTCHA)

If you want, I can add the missing resume and images if you provide the files, or I can generate placeholder images and a sample resume PDF.
