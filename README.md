# Matias Cukier — Portfolio

Personal portfolio with integrated AI assistant ("Ask me before the interview").

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Vercel AI SDK** + **Google Gemini Flash** (free tier)

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

Get your free Gemini API key at [aistudio.google.com](https://aistudio.google.com/app/apikey) — no credit card needed.

Paste it in `.env.local`:

```
GOOGLE_GENERATIVE_AI_API_KEY=your_key_here
```

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push to GitHub
2. Import repo in [vercel.com](https://vercel.com)
3. Add `GOOGLE_GENERATIVE_AI_API_KEY` in Vercel project settings → Environment Variables
4. Deploy 🚀

## Customization

- **AI system prompt:** Edit `lib/system-prompt.ts` to update any info about yourself
- **Projects:** Edit the `projects` array in `components/Projects.tsx`
- **Experience/Skills:** Edit `components/About.tsx`
- **Contact links:** Edit `components/Contact.tsx`
