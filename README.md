# MIC Research Portfolio

Educational research portfolio for preparation toward the University of Girona Master's in Medical Image Computing, intended academic year 2027/2028. Official dates still need to be confirmed with the university.

The site describes planned work. It does not report experimental results, and it is not clinical software.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

Account setup, Supabase, and deployment steps are in [docs/SETUP.md](docs/SETUP.md). Architecture decisions are in [docs/PHASE-0.md](docs/PHASE-0.md).

## Scripts

- `npm run dev` — local site
- `npm run lint` — ESLint
- `npm run build` — production build
