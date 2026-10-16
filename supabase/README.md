# Supabase

This folder is the database design. Nothing in it has been applied.

Apply `migrations/20261016120000_portfolio_core.sql` only after:

1. A Supabase project exists.
2. The SQL has been read in a review session.
3. No medical image has been uploaded.

## What this migration does

- Creates five tables: `projects`, `datasets`, `assets`, `experiments`, `experiment_metrics`.
- Turns on row-level security.
- Lets anonymous visitors read rows marked `public`.
- Grants no insert, update, or delete to browser roles.
- Creates two storage buckets: `public-figures` (public read) and `research-private` (no public policy).
- Inserts the three planned projects. It inserts no datasets, files, or metrics.

The service-role key bypasses these policies. It stays in `.env.local` and, later, in GitHub Actions secrets. It is never prefixed with `NEXT_PUBLIC_`.

## What is postponed

Papers, topics, reading notes, annotations, notebooks, and academic outputs stay out of the database until those features need queries. Until then they live in the website source or in Zotero.

## How to apply later

In the Supabase SQL editor, paste the migration and run it once. After that, schema changes are new files in `migrations/`, not edits to a migration that has already run.
