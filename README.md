# Jamaica Literacy Guide

A policy-grounded, AI-powered literacy resource for Jamaican educators.
Built for the **National Standards Curriculum (NSC)**, the **National Comprehensive Literacy Programme (NCLP)**, and the **2025 Timetabled Reading Initiative**.

## What This App Does

| Section | Description |
|---|---|
| **Dashboard** | Overview of Jamaica's national literacy landscape, policy timeline, and Grade 4 mastery data |
| **Policy Library** | All 8 national literacy policies (2001-2025) with NSC alignment, classroom implications, and primary source links |
| **AI Lesson Builder** | Generate complete, NSC-aligned literacy lessons using Claude AI - Jamaica context, bilingual awareness, ICT integration |
| **Teaching Strategies** | Six research-grounded strategy clusters with classroom tactics, teacher tips, and policy anchors |
| **NSC Alignment Table** | Full policy to curriculum crosswalk with learning outcomes, classroom implications, and assessment signals |

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool and dev server |
| Tailwind CSS | Utility-first styling |
| Anthropic Claude API | AI lesson generation (claude-sonnet-4-20250514) |

## Quick Start

```bash
npm install
cp .env.example .env
# Edit .env and add your Anthropic API key
npm run dev
```

## Deploy to Vercel

Push to GitHub and import in Vercel. Add `VITE_ANTHROPIC_API_KEY` as an environment variable.

## Licence

MIT
