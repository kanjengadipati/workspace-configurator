# Workspace Configurator

An interactive workspace designer: pick a desk, choose a chair, add accessories, watch the room update live, then rent the setup.

**Live:** https://workspace-configurator-psi.vercel.app/
**Built for:** Desent Solutions developer challenge (monis.rent)

## How it works

- **One state object drives everything.** The whole configuration lives in a single `workspace` state (`deskId`, `chairId`, `accessories`). The live preview, the summary and the total price are all derived from it on every render, so they can never go out of sync.
- **Data-driven catalog.** Desks, chairs and accessories are plain data in `src/data/catalog.ts`. Adding a product is a data change, not a UI change.
- **Accessories are quantities**, stored as `Record<string, number>` (e.g. `{ monitor: 2, plant: 1 }`), which is easier to render and total than an array with duplicates. Each is capped at 2 so the scene never gets cluttered.
- **Hand-made SVG preview.** Every item has its own small SVG component. The desk height is a single value that monitors, lamps and other items position themselves against, so switching to the standing desk lifts everything with it.
- **Mobile:** the preview stays pinned at the top of the screen while you scroll through the options, so every change is visible immediately.

## Tech choices

- **Next.js (App Router) + TypeScript**: required framework, typed data model
- **Tailwind CSS**: required; the warm palette is defined once as theme tokens
- **Vercel**: required for deployment
- **No backend, database or UI/animation libraries.** State is `useState`, visuals are inline SVG and CSS. For a single-screen configurator that keeps the bundle small and the code easy to follow.

## How I approached it

I treated it as a product for a freelancer who just landed in Bali and wants a workspace ready by next week, so I prioritised the interaction (choose, see, rent) over a wide catalog, and gave the UI a warm, relaxed look to match the audience. I skipped the extra sketch categories (coffee station, outdoor gear, relax zone, garage) to make sure the core flow was solid and polished first.

I used an AI assistant (Claude) as a coding partner, as the challenge allows — it wrote code that I reviewed, tested and adjusted at each step rather than generating the whole app at once. Decisions I made myself: the single-page layout instead of a wizard, using hand-drawn SVG for the preview instead of images from the monis.rent site (so it's lightweight and easy to restyle), the warm cream/terracotta/leaf palette suited to a Bali-based audience, and product/scope priorities like capping accessories at 2 per item and cutting the extra sketch categories to protect the core interaction.

## What I'd improve with more time

- Real product photography for the catalog instead of illustrations
- The sketch's other zones (coffee station, outdoor gear, relax zone, garage) as additional categories
- Rental duration and pricing tiers (weekly / monthly / long-term) and a real checkout flow
- Place items freely on the desk (drag & drop) instead of fixed slots
- Shareable setups via a URL, so a configuration can be sent to a client or teammate
- Automated tests for the price calculation, and a full accessibility audit

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.