/*
# Create waitlist and contact_submissions tables

## Purpose
Store waitlist signups from the landing page CTA and contact form submissions from the Contact page. This is a no-auth (single-tenant) site — visitors are not signed in — so both tables use `TO anon, authenticated` policies that allow the anon-key frontend to insert rows. No SELECT policy is added because visitors should not be able to read other people's submissions.

## New Tables

### waitlist
- `id` (uuid, primary key)
- `email` (text, unique, not null) — the visitor's email
- `created_at` (timestamptz, defaults to now)

### contact_submissions
- `id` (uuid, primary key)
- `name` (text, not null)
- `email` (text, not null)
- `intent` (text, nullable) — what the visitor wants help with
- `message` (text, not null)
- `created_at` (timestamptz, defaults to now)

## Security
- RLS enabled on both tables.
- INSERT-only policies for `anon, authenticated` — visitors can submit but cannot read, update, or delete.
- No SELECT/UPDATE/DELETE policies — only the service role (server-side) can read submissions.
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_waitlist" ON waitlist;
CREATE POLICY "anon_insert_waitlist" ON waitlist FOR INSERT
  TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  intent text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);
