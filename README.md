# Brunoise AI — Next.js Website

Full Next.js 15 App Router rebuild of brunoiseai.com, ready for Vercel deployment.

## Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Home — Hero, Features, How It Works, Stats, Team, CTA |
| `/about` | `app/about/` | About — Mission, values, timeline, team |
| `/contact` | `app/contact/` | Contact — Interactive form with validation |
| `/download` | `app/download/` | Download — TestFlight CTA + setup steps |
| `/careers` | `app/careers/` | Careers — Job listings with collapsible detail, search & filter |
| `/press` | `app/press/` | Press — Coverage, assets, fact sheet |
| `/privacy` | `app/privacy/` | Privacy Policy |
| `/terms` | `app/terms/` | Terms of Service |
| `/cookie-policy` | `app/cookie-policy/` | Cookie Policy |
| `/security` | `app/security/` | Security practices + responsible disclosure |

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### Option 1 — Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2 — Vercel Dashboard

1. Push this folder to a GitHub/GitLab/Bitbucket repo
2. Go to [vercel.com](https://vercel.com) → "Add New Project"
3. Import the repo — Vercel auto-detects Next.js
4. Set your domain to `brunoiseai.com` in Project Settings → Domains
5. Deploy!

## Customisation Notes

- **Team info**: Update the `team` arrays in `app/page.tsx` and `app/about/AboutClient.tsx`
- **Job listings**: Edit the `roles` array in `app/careers/CareersClient.tsx`
- **Press coverage**: Update `coverageItems` in `app/press/PressClient.tsx`
- **Legal dates**: Update `lastUpdated` in the privacy/terms/cookie-policy pages
- **Social links**: Update hrefs in `components/Footer.tsx`

## Brand Colours

| Name | Hex |
|------|-----|
| Brand orange | `#ff7b54` |
| Brand dark | `#e56a45` |
| Brand light | `#ff9f7a` |
| Background | `#000000` |
