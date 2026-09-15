# System Formy

Foundation of the System Formy web app / PWA. The first stage is a real Next.js application committed to the GitHub repository and ready for local/Vercel deployment.

## Stack

- Next.js App Router + React + TypeScript
- Supabase planned for Auth, PostgreSQL and private Storage
- Server-side authorization + Supabase Row Level Security
- Payment provider integration isolated behind backend/webhook layer
- PWA manifest + minimal service worker; private panel/API responses are not cached

## Current stage

The foundation includes:

- mobile-first public homepage
- offer catalogue and product detail routes
- e-book catalogue
- login/registration UI shells
- panel and admin UI shells
- FAQ, contact, privacy policy and terms placeholders
- PWA manifest, icons and service worker
- initial Supabase database schema for users, products, purchases, entitlements, training plans, coaching, reports and messages

This stage is intentionally not pretending to be a finished store: authentication, real entitlements, payments and admin actions are the next implementation layers.

## MVP stages

1. Foundation + public offer (current)
2. Supabase Auth + protected panel
3. Private digital library + entitlement checks + signed URLs
4. Training plan model + client view
5. Admin authorization + management screens
6. Payment provider + webhook reconciliation
7. Coaching 1:1 + reports + basic contact
8. PWA polish, QA, legal/privacy hardening and deployment

## Local setup

1. Install Node.js LTS.
2. Copy `.env.example` to `.env.local`.
3. Create a Supabase project and fill the public URL/key.
4. Run `supabase/schema.sql` in Supabase SQL Editor.
5. Run `npm install`.
6. Start with `npm run dev`.

Private e-books must live in a private Storage bucket. Never commit the PDFs or a Supabase service-role key to GitHub.

## Source materials

The product catalogue and training-plan structure were based on the supplied System Formy materials. The supplied e-book PDFs remain outside the codebase until the private Storage layer is implemented.
