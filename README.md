# CLNCH Web

A landing page and concept demo for **CLNCH**, an AI opportunity assistant that helps people navigate the journey from discovering scholarships, jobs, fellowships, and grants through to completing applications.

**Live:** https://clnchweb.vercel.app

## What is this?

This repository contains the **marketing website and product concept** for CLNCH. It's not the functional product itself (which is still in development), but rather a demonstration of the vision, user research, and product thinking behind the idea.

The site includes:
- Product landing page with feature explanations
- "The CLNCH Log" — field notes documenting the product development process
- About page explaining the vision and philosophy
- Contact form (Supabase-backed)
- Privacy policy and terms of service

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast builds
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Motion** (Framer Motion alternative) for animations
- **Lucide React** for icons
- **Supabase** for contact form submissions
- **Vercel Analytics** for insights
- Deployed to **Vercel**

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)
- A Supabase project (optional, but required for contact form)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mensahsandra/clnch-web.git
   cd clnch-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` and add your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

   **Note:** The site works without Supabase configured. If you don't set these variables, the contact form will skip the database insert but will still show a success message.

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building

Build for production:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

### Type Checking

Run TypeScript checks:
```bash
npm run typecheck
```

### Linting

Run ESLint:
```bash
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable components (Hero, Navbar, Footer, etc.)
├── pages/              # Page components (Home, About, Contact, TheClncLog, Privacy, Terms)
├── lib/                # Utilities (Supabase client)
├── App.tsx             # Main app with routing
├── main.tsx            # React entry point
└── index.css           # Global styles (Tailwind)
```

## Supabase Setup (Optional)

If you want to enable the contact form to save submissions to a database:

1. Create a Supabase project at https://supabase.com
2. Create a table called `contact_submissions` with columns:
   - `id` (primary key, auto-increment)
   - `name` (text)
   - `email` (text)
   - `intent` (text, nullable)
   - `message` (text)
   - `created_at` (timestamp, default: now())

3. Enable Row-Level Security (RLS) on the table and create a policy allowing unauthenticated inserts:
   ```sql
   CREATE POLICY "Allow public to insert" ON contact_submissions
   FOR INSERT WITH CHECK (true);
   ```

4. Get your Supabase URL and anon key from the project settings
5. Add them to `.env.local`

## How This Was Built

This project was built with **AI-assisted development** using:
- **Cursor** and **Bolt** for code generation
- **Claude** for architectural guidance
- **GitHub Copilot** for inline suggestions

The approach prioritizes:
- **Speed**: Ship working features quickly using AI assistance
- **Clarity**: Code is readable and maintainable
- **Honesty**: No false claims about capabilities or experience
- **Iteration**: Field notes in "The CLNCH Log" document the process

This is a builder's portfolio — it shows product thinking, the ability to execute ideas, and willingness to experiment and iterate.

## Key Features

- **Responsive Design**: Mobile-first approach, works on all screen sizes
- **Smooth Animations**: Motion library for polished transitions
- **Form Handling**: Contact form with error handling and loading states
- **Analytics**: Vercel Analytics integrated
- **SEO Ready**: Proper meta tags and semantic HTML (where applicable)

## Known Limitations & Future Improvements

- This is a marketing site, not a functional product
- The UI mockups show concept previews, not real features
- Video embeds use Dropbox links (could be migrated to proper CDN)
- No 404 page yet
- Accessibility audit recommended

## Contributing

Feedback and contributions welcome! If you notice issues or have suggestions:
1. Open an issue describing the problem or idea
2. Fork and create a feature branch if contributing code
3. Make your changes and test locally
4. Submit a pull request

## Security

- Supabase credentials are stored as environment variables (never committed)
- The anon key is publicly visible by design (Supabase pattern)
- Row-Level Security (RLS) policies protect the database
- Contact form includes error handling and validation

**Supabase Security Note:** Ensure RLS is enabled and policies are restrictive. Only authenticated users or specific conditions should have access to data.

## Deployment

This site is deployed to Vercel and auto-deploys on every push to `main`.

To deploy your own fork:
1. Connect your repository to Vercel
2. Set environment variables in Vercel project settings
3. Deploy

## License

MIT (or specify your preferred license)

## Built by

**Sandra Mensah** at **Coreaxis** — an independent product studio exploring how AI can make complex digital experiences easier.

**Contact:** mensahs@coreaxishq.tech

---

**Questions?** Open an issue or reach out via the contact form on the website.
