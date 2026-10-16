# Initial setup

The website runs locally without GitHub, Vercel, Supabase, or Zotero. Accounts are required only when we publish or store data.

## Already done in this repository

- Next.js, TypeScript, and Tailwind are installed.
- Public pages exist for home, research, library, foundations, academic work, and about.
- Project pages are labeled planned. No results are invented.
- The database migration is a file only. It has not been executed.
- GitHub Actions will lint and build once the repository exists on GitHub.

## Do this now

### 1. Public profile

```bash
cp .env.example .env.local
```

Edit `.env.local`:

- `NEXT_PUBLIC_AUTHOR_NAME` — the name that should appear on the site.
- `NEXT_PUBLIC_GITHUB_URL` — your existing GitHub profile, for example `https://github.com/your-username`.
- `NEXT_PUBLIC_LINKEDIN_URL` — optional professional profile.
- Leave every Supabase and Zotero value empty.

`.env.local` is gitignored. `.env.example` is the only env file that belongs in Git.

Start the site:

```bash
npm run dev
```

Open http://localhost:3000 and check Home, Research, Library, Foundations, Academic, and About.

### 2. GitHub authentication

The GitHub CLI is not installed on this machine. Install it and log in. Do not create repositories yet.

```bash
brew install gh
gh auth login
```

Choose GitHub.com, HTTPS, and authenticate in the browser. After `gh auth status` succeeds, stop and say so. Repository creation waits for an explicit go-ahead, because it creates public or private remotes under your account.

Intended repository names, all separate:

| Local folder | GitHub repository | Role |
| --- | --- | --- |
| `~/dev/mic_portfolio` | `mic-research-portfolio` | This website |
| `~/dev/medical-xray-joint-analysis` | `medical-xray-joint-analysis` | X-ray project |
| `~/dev/ketamine-brain-mri-analysis` | `ketamine-brain-mri-analysis` | MRI project |
| `~/dev/lung-ct-airway-analysis` | `lung-ct-airway-analysis` | CT project |

Only the website repository is needed for the current step. The research repositories wait until the first notebook.

### 3. Empty Supabase project

Create the project now if you want credentials ready. Do not run the SQL and do not upload files.

1. Sign in at https://supabase.com/dashboard.
2. Create a new project. Use an EU region. Girona is in Spain, so Frankfurt or Ireland is a reasonable default.
3. Choose the free tier. One demonstration radiograph is tiny. Full CT or MRI studies should not go into this project later without a storage check.
4. Open Project Settings → API.
5. Copy the project URL into `NEXT_PUBLIC_SUPABASE_URL`.
6. Copy the `anon` public key into `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
7. Copy the `service_role` secret into `SUPABASE_SERVICE_ROLE_KEY`.

The service-role key can bypass row-level security. It must never be committed, never use the `NEXT_PUBLIC_` prefix, and never be pasted into a notebook that will be public.

Leave the SQL editor alone until we review `supabase/migrations/20261016120000_portfolio_core.sql` together.

## Leave for a later step

### Vercel

Import the site only after the GitHub repository exists and the first push has happened.

1. https://vercel.com/new
2. Import `mic-research-portfolio`.
3. Framework preset: Next.js.
4. Add the same `NEXT_PUBLIC_` variables that are in `.env.local`.
5. Do not add `SUPABASE_SERVICE_ROLE_KEY` until a server-side job needs it.

The Hobby plan is enough for this static site. Training does not run on Vercel.

### Zotero

Skip until the library has its first checked papers.

When that phase starts:

1. Create or open a Zotero account.
2. Open https://www.zotero.org/settings/keys.
3. Note the user ID shown for API calls. That becomes `ZOTERO_LIBRARY_ID`.
4. Create an API key with read access to the bibliography group or library. Store it as a GitHub Actions secret named `ZOTERO_API_KEY`.
5. Do not put the key in `.env.local` of the website unless a local sync script needs it, and never prefix it with `NEXT_PUBLIC_`.

Private notes and PDF attachments stay in Zotero. The sync will publish a note only when it is explicitly tagged for publication.

### Datasets and images

No image is selected. A hand radiograph enters the pipeline only after the license allows that exact use, including public display if the website will show it.

## Costs

| Service | Expected cost now | Watch item |
| --- | --- | --- |
| Local Next.js | Free | None |
| GitHub | Free for public repositories | Private repositories are also free within the normal personal quota |
| Supabase free tier | Free until the project exceeds database or storage limits | CT and MRI volumes |
| Vercel Hobby | Free for a personal portfolio | Commercial use has different terms |
| Google Colab | Free tier is enough for the first X-ray notebook | GPU limits if a U-Net is trained later |
| Zotero | Free storage is small | Do not mirror PDFs into Zotero file storage unless you need them |

## Checkpoint

Reply when these are true:

- `.env.local` has your public name and GitHub profile URL.
- `gh auth status` succeeds.
- Supabase URL and both keys are in `.env.local`, or you have decided to postpone Supabase.

The next implementation step is a review of the SQL, then applying it. Repository creation and the first push happen only after you ask for them.
