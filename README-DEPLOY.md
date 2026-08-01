# CuraNova AI — Website Files

This is a **static** (no build step) version of CuraNova AI, built with plain
HTML, CSS, and JavaScript + Tailwind CSS (loaded via CDN, no npm install
needed). It is designed so you can upload it directly to GitHub from a phone
and publish it for free with **GitHub Pages** — no computer required for this
stage.

## What's included

- `index.html` — Home page (hero, search, features, testimonials)
- `ai-chat.html` — AI Health Chat (demo responses + emergency detection)
- `symptom-checker.html` — Structured symptom checker (demo results)
- `health-library.html` — Category browsing
- `diet-fitness.html`, `mental-wellness.html`, `first-aid.html`
- `dashboard.html` — Sample user dashboard
- `admin-dashboard.html` — Sample admin dashboard
- `login.html`, `register.html`
- `about.html`, `contact.html`, `faq.html`, `pricing.html`
- `privacy.html`, `terms.html`, `disclaimer.html`
- `style.css` — shared design system (colors, glass effect, "vital line" signature animation)
- `app.js` — theme toggle + mock AI reply engine + emergency keyword detection

## How to publish this for free (GitHub Pages)

1. Go to your repository on GitHub (e.g. `github.com/yourname/curanova-ai`).
2. Tap **"Add file" → "Upload files"**.
3. Select **all the files in this folder** (not the folder itself — select
   the individual files) and upload them.
4. Commit the upload (tap **"Commit changes"**).
5. Go to your repo's **Settings → Pages**.
6. Under "Build and deployment", set **Source: Deploy from a branch**,
   Branch: **main**, folder: **/ (root)** → Save.
7. Wait 1–2 minutes. GitHub will give you a live URL like:
   `https://yourname.github.io/curanova-ai/`

That's it — your site is live and free, no Horizons subscription needed.

## Current limitations (by design, for now)

- The **AI Chat** and **Symptom Checker** currently return pre-written demo
  replies (see `mockAIReply()` in `app.js`) — there is no real AI or database
  connected yet, because that requires a backend server, which needs a
  computer to set up (Node.js/Express + a real AI API key, as in the earlier
  full-stack plan).
- **Login/Register/Dashboard forms** are visual only — they don't yet create
  real accounts.
- These are intentionally left as clearly-labeled placeholders so the whole
  site is safe to publish and demo right now, and can be wired up to a real
  backend later without redesigning anything.

## Next steps when you have computer access

1. Build the backend (Node.js + Express + PostgreSQL) — this was scaffolded
   earlier and can be adapted for CuraNova AI's features (auth, chat storage,
   symptom logs, admin tools).
2. Replace `mockAIReply()` in `app.js` with a real `fetch()` call to your
   backend's `/api/ai/chat` endpoint, which itself calls a real AI API
   (e.g. the Claude API) with a system prompt encoding the medical disclaimer
   and emergency-detection rules.
3. Wire up `login.html` / `register.html` forms to real `/api/auth/*` endpoints.
4. Deploy the backend to Render or Railway (free tier available) and point
   the frontend's API calls at that URL.
