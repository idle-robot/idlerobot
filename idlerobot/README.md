# Idle Robot Website

Next.js (App Router) + Tailwind with **Incremental Static Regeneration** and **on‑demand revalidation**.
- Projects stored as MDX in `/content/projects`
- Screenshots pulled by **Cloudinary tag** (no server key required if "image list by tag" is enabled)
- Revalidation endpoint to refresh pages as soon as you upload media or publish content

## Quick start

```bash
pnpm i  # or npm i / yarn
pnpm dev
```

## Environment

Create `.env.local`:

```
REVALIDATE_SECRET=supersecret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Optionally set `YOUTUBE_PLAYLIST_ID` if you add YouTube automation.

## Automatic updates

1. **Screenshots**: upload to Cloudinary with a tag like `project:<slug>` (e.g., `project:sample-agent`). Public access mode is required.
2. Have Cloudinary Webhook call:
   - `POST https://<your-domain>/api/revalidate`
   - Header: `x-webhook-secret: <REVALIDATE_SECRET>`
   - Body: `{ "type": "project", "slug": "<slug>" }`

3. **Videos**: if you use a YouTube playlist, set up a GitHub Action/Zap to call the same webhook when a new video is added.

## Deploy on Vercel

- Create a Vercel project from this repo.
- Add env vars: `REVALIDATE_SECRET`, `CLOUDINARY_CLOUD_NAME`.
- Set your production domain to `idle-robot.com` (via Cloudflare proxy/DNS).

## Content

Add files in `/content/projects/*.mdx` with frontmatter:

```md
---
slug: "my-cool-agent"
title: "My Cool Agent"
summary: "One-liner."
tags: ["MCP","AWS"]
status: "launched"
gallery_tags: ["project:my-cool-agent"]
video_ids: ["<YouTubeID>"]
links:
  repo: "https://github.com/idle-robot/my-cool-agent"
---
Optional long-form content (currently not rendered; you can extend the page).
```

## Security

Keep `REVALIDATE_SECRET` private. Only share it with trusted webhooks (Cloudinary, CMS, automation).

## Notes

- The gallery fetch uses Cloudinary's Search API; keep API credentials server-side only (Vercel env vars) and rotate if exposed.
- If you prefer a headless CMS (Sanity/Contentful), point `getAllProjects()` to the CMS and trigger `/api/revalidate` via their webhooks.
