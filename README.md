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
## How This Was Built

This project was built with **AI-assisted development** using:
- **Bolt** for code generation
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
