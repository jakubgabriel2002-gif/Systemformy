-- System Formy database foundation.
create extension if not exists pgcrypto;

do $$ begin
  create type public.app_role as enum ('USER','ADMIN');
exception when duplicate_object then null; end $$;

do $$ begin
  create type public.product_type as enum ('ebook','freebie','service');
exception when duplicate_object then null; end $$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role public.app_role not null default 'USER',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text not null,
  short_description text,
  type public.product_type not null,
  price_pln numeric(10,2) not null default 0 check (price_pln >= 0),
  storage_path text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete restrict,
  status text not null default 'pending' check (status in ('pending','paid','failed','refunded')),
  provider text,
  provider_payment_id text unique,
  amount_pln numeric(10,2) not null,
  paid_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.user_products (
  user_id uuid not null references public.profiles(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete restrict,
  purchase_id uuid references public.purchases(id) on delete set null,
  access_granted_at timestamptz not null default now(),
  access_expires_at timestamptz,
  primary key (user_id, product_id)
);

create table if not exists public.training_plans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  goal text,
  duration_weeks integer check (duration_weeks > 0),
  status text not null default 'active' check (status in ('draft','active','archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.training_weeks (
  id uuid primary key default gen_random_uuid(),
  plan_id uuid not null references public.training_plans(id) on delete cascade,
  week_number integer not null check (week_number > 0),
  title text,
  unique(plan_id, week_number)
);

create table if not exists public.workouts (
  id uuid primary key default gen_random_uuid(),
  week_id uuid not null references public.training_weeks(id) on delete cascade,
  name text not null,
  sort_order integer not null default 0
);

create table if not exists public.exercises (
  id uuid primary key default gen_random_uuid(),
  name text unique not null,
  instructions text
);

create table if not exists public.workout_exercises (
  id uuid primary key default gen_random_uuid(),
  workout_id uuid not null references public.workouts(id) on delete cascade,
  exercise_id uuid not null references public.exercises(id) on delete restrict,
  sort_order integer not null default 0,
  sets integer,
  reps text,
  tempo text,
  rest text,
  notes text
);

create table if not exists public.exercise_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  workout_exercise_id uuid not null references public.workout_exercises(id) on delete cascade,
  performed_at timestamptz not null default now(),
  weight numeric(8,2),
  completed_reps integer,
  completed_sets integer,
  note text
);

create table if not exists public.coaching_clients (
  id uuid primary key default gen_random_uuid(),
  user_id uuid unique not null references public.profiles(id) on delete cascade,
  status text not null default 'active' check (status in ('active','paused','ended')),
  starts_at date not null default current_date,
  ends_at date,
  created_at timestamptz not null default now()
);

create table if not exists public.reports (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.coaching_clients(id) on delete cascade,
  week_start date,
  body text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  sender_id uuid not null references public.profiles(id) on delete cascade,
  recipient_id uuid not null references public.profiles(id) on delete cascade,
  body text not null,
  created_at timestamptz not null default now(),
  read_at timestamptz
);

alter table public.profiles enable row level security;
alter table public.products enable row level security;
alter table public.purchases enable row level security;
alter table public.user_products enable row level security;
alter table public.training_plans enable row level security;
alter table public.training_weeks enable row level security;
alter table public.workouts enable row level security;
alter table public.exercises enable row level security;
alter table public.workout_exercises enable row level security;
alter table public.exercise_logs enable row level security;
alter table public.coaching_clients enable row level security;
alter table public.reports enable row level security;
alter table public.messages enable row level security;

-- Basic self-access policies. Admin policies will be added in the authorization stage.
create policy "profiles own row" on public.profiles for select using (auth.uid() = id);
create policy "products public active" on public.products for select using (is_active = true);
create policy "user products own" on public.user_products for select using (auth.uid() = user_id);
create policy "plans own" on public.training_plans for select using (auth.uid() = user_id);
create policy "weeks through own plan" on public.training_weeks for select using (exists (select 1 from public.training_plans p where p.id = training_weeks.plan_id and p.user_id = auth.uid()));
create policy "workouts through own week" on public.workouts for select using (exists (select 1 from public.training_weeks w join public.training_plans p on p.id=w.plan_id where w.id=workouts.week_id and p.user_id=auth.uid()));
create policy "exercise logs own" on public.exercise_logs for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "coaching own" on public.coaching_clients for select using (auth.uid() = user_id);
create policy "reports own client" on public.reports for select using (exists (select 1 from public.coaching_clients c where c.id=reports.client_id and c.user_id=auth.uid()));
create policy "messages participant" on public.messages for select using (auth.uid() = sender_id or auth.uid() = recipient_id);

create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path = public as $$
begin insert into public.profiles(id, full_name) values (new.id, coalesce(new.raw_user_meta_data->>'full_name','')); return new; end; $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();
