-- Portfolio core schema.
-- Do not run this until the Supabase project exists and this file has been reviewed.
-- It creates no experimental results and uploads no images.

create extension if not exists pgcrypto;

do $$
begin
  if not exists (select 1 from pg_type where typname = 'visibility') then
    create type public.visibility as enum ('public', 'private');
  end if;
  if not exists (select 1 from pg_type where typname = 'work_status') then
    create type public.work_status as enum ('planned', 'in_progress', 'completed');
  end if;
  if not exists (select 1 from pg_type where typname = 'imaging_modality') then
    create type public.imaging_modality as enum ('xray', 'mri', 'ct', 'other');
  end if;
end
$$;

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  research_question text not null,
  modality public.imaging_modality not null,
  status public.work_status not null default 'planned',
  visibility public.visibility not null default 'private',
  repository_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint projects_repository_url_https check (
    repository_url is null or repository_url ~ '^https://'
  )
);

create table if not exists public.datasets (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects (id),
  name text not null,
  version text not null,
  source_url text not null,
  license text not null,
  redistribution_allowed boolean not null,
  deidentified boolean not null,
  visibility public.visibility not null default 'private',
  notes text,
  created_at timestamptz not null default now(),
  unique (project_id, name, version),
  constraint datasets_source_url_https check (source_url ~ '^https://'),
  constraint datasets_public_must_allow_redistribution check (
    visibility <> 'public' or (redistribution_allowed and deidentified)
  )
);

create table if not exists public.assets (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects (id),
  dataset_id uuid references public.datasets (id),
  visibility public.visibility not null default 'private',
  modality public.imaging_modality not null,
  file_format text not null,
  storage_bucket text not null,
  storage_path text not null,
  checksum_sha256 text,
  width_px integer check (width_px is null or width_px > 0),
  height_px integer check (height_px is null or height_px > 0),
  spacing_x double precision,
  spacing_y double precision,
  spacing_z double precision,
  deidentified boolean not null,
  license text not null,
  source_url text,
  caption text,
  created_at timestamptz not null default now(),
  unique (storage_bucket, storage_path),
  constraint assets_public_must_be_deidentified check (
    visibility <> 'public' or deidentified
  )
);

create table if not exists public.experiments (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects (id),
  dataset_id uuid references public.datasets (id),
  slug text not null,
  title text not null,
  method text not null,
  status public.work_status not null default 'planned',
  visibility public.visibility not null default 'private',
  code_repository text,
  code_commit text,
  notebook_path text,
  parameters jsonb not null default '{}'::jsonb,
  random_seed integer,
  software_environment text,
  split_description text,
  limitations text,
  executed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (project_id, slug)
);

create table if not exists public.experiment_metrics (
  id uuid primary key default gen_random_uuid(),
  experiment_id uuid not null references public.experiments (id) on delete cascade,
  name text not null,
  value double precision,
  unit text,
  notes text,
  unique (experiment_id, name)
);

create index if not exists datasets_project_id_idx on public.datasets (project_id);
create index if not exists assets_project_id_idx on public.assets (project_id);
create index if not exists assets_dataset_id_idx on public.assets (dataset_id);
create index if not exists experiments_project_id_idx on public.experiments (project_id);
create index if not exists experiments_dataset_id_idx on public.experiments (dataset_id);
create index if not exists experiment_metrics_experiment_id_idx
  on public.experiment_metrics (experiment_id);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists projects_set_updated_at on public.projects;
create trigger projects_set_updated_at
before update on public.projects
for each row execute function public.set_updated_at();

drop trigger if exists experiments_set_updated_at on public.experiments;
create trigger experiments_set_updated_at
before update on public.experiments
for each row execute function public.set_updated_at();

alter table public.projects enable row level security;
alter table public.datasets enable row level security;
alter table public.assets enable row level security;
alter table public.experiments enable row level security;
alter table public.experiment_metrics enable row level security;

drop policy if exists projects_public_read on public.projects;
create policy projects_public_read
on public.projects
for select
to anon, authenticated
using (visibility = 'public');

drop policy if exists datasets_public_read on public.datasets;
create policy datasets_public_read
on public.datasets
for select
to anon, authenticated
using (visibility = 'public');

drop policy if exists assets_public_read on public.assets;
create policy assets_public_read
on public.assets
for select
to anon, authenticated
using (visibility = 'public');

drop policy if exists experiments_public_read on public.experiments;
create policy experiments_public_read
on public.experiments
for select
to anon, authenticated
using (visibility = 'public');

drop policy if exists experiment_metrics_public_read on public.experiment_metrics;
create policy experiment_metrics_public_read
on public.experiment_metrics
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.experiments
    where experiments.id = experiment_metrics.experiment_id
      and experiments.visibility = 'public'
  )
);

revoke all on public.projects, public.datasets, public.assets, public.experiments, public.experiment_metrics
  from anon, authenticated;
grant select on public.projects, public.datasets, public.assets, public.experiments, public.experiment_metrics
  to anon, authenticated;

insert into storage.buckets (id, name, public)
values
  ('public-figures', 'public-figures', true),
  ('research-private', 'research-private', false)
on conflict (id) do nothing;

drop policy if exists public_figures_read on storage.objects;
create policy public_figures_read
on storage.objects
for select
to anon, authenticated
using (bucket_id = 'public-figures');

-- Planned project rows. Status is planned. No datasets, images, or metrics are inserted.
insert into public.projects (slug, title, research_question, modality, status, visibility)
values
  (
    'rheumatoid-arthritis',
    'From Hand Radiographs to Quantitative Joint Image Analysis',
    'How do classical image-processing choices change the quantitative description of joint regions in hand radiographs, and how do those baselines compare with a lightweight learned segmentation model?',
    'xray',
    'planned',
    'public'
  ),
  (
    'ketamine-mri',
    'Reproducibility of Longitudinal Brain MRI Measurements',
    'How much do reasonable preprocessing and registration choices change quantitative measurements in longitudinal structural brain MRI?',
    'mri',
    'planned',
    'public'
  ),
  (
    'lung-ct',
    'Quantitative Airway Analysis from Chest CT',
    'How stable are introductory airway measurements from chest CT when segmentation method and windowing choices change?',
    'ct',
    'planned',
    'public'
  )
on conflict (slug) do nothing;
