# YAY Foundation website

Website for **Youngsters Are Young-stars (YAY) Foundation**, built with [Astro](https://astro.build).

## Run it on your computer

```bash
npm install      # once, downloads Astro
npm run dev      # opens a live preview at http://localhost:4321
npm run build    # builds the final site into /dist
```

## Where things live

| To change | Edit |
|---|---|
| Email, Instagram, founder's LinkedIn, form key, tagline | `src/data/site.ts` |
| Stats, pillars, regions, outreach timeline, photos, targets, partner cards | `src/data/content.ts` |
| Brand colours and fonts | `src/styles/global.css` (the `:root` block) |
| A section's look | `src/components/<Name>.astro` |
| Which sections a page shows | `src/pages/<page>.astro` |
| Logo, video, favicon, share image | `public/` |
| Photos | `src/assets/photos/` (Astro converts them to WebP automatically) |

## Adding a new outreach

Add an item to `events` in `src/data/content.ts` and push. The timeline updates on the Outreach page.

## Deploying

Vercel builds the site on every push to `main`. Framework preset: **Astro**.
