# Tiny Vivid Minds

Vite + React + TypeScript frontend for Tiny Vivid Minds.

## Scripts

- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run preview` – preview production build locally
- `npm run lint` – run ESLint

## Environment

Configuration is driven by environment variables. **Do not commit `.env`**; it is gitignored.

1. Copy `.env.example` to `.env`.
2. Fill in the values (app name, description, contact phone/email, WhatsApp number, OG image URL, etc.).
3. See `.env.example` for a short comment per variable.

All client-visible variables must be prefixed with `VITE_` so Vite exposes them at build time. Meta tags in `index.html` use `%VITE_*%` placeholders and are replaced during `vite build`.

### Variables (see `.env.example`)

- `VITE_APP_NAME` – site name (title, og:title)
- `VITE_APP_DESCRIPTION` – meta and og description
- `VITE_APP_AUTHOR` – meta author
- `VITE_OG_IMAGE` – full URL for og:image / twitter:image (or `/og.png` if you add `public/og.png`)
- `VITE_TWITTER_SITE` – Twitter handle (e.g. `@tinyvividminds`)
- `VITE_CONTACT_PHONE` – phone for display and `tel:` link
- `VITE_CONTACT_EMAIL` – email for display and `mailto:`
- `VITE_WHATSAPP_NUMBER` – WhatsApp number for `wa.me` (country code + number, no `+`)

## Deployment

For production (e.g. Vercel, Netlify, or any static host):

1. Set the same environment variables in the host’s dashboard or CI (no `.env` file in the repo).
2. Run `npm run build` and serve the `dist` folder.

The app is static; no server-side env is required beyond what you configure in the build environment.
