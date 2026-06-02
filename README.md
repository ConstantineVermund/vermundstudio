# Vermund Studio — GitHub Pages version

Static website version for GitHub Pages. Updated with a clearer small-business offer, website fixes as a low-risk first step, a Good First Project block and softened portfolio-concept wording.

## Files

- `index.html` — main landing page
- `privacy.html` — simple privacy page
- `project-terms.html` — simple project terms page
- `assets/css/styles.css` — website styles
- `assets/js/main.js` — form logic, reveal animations, LinkedIn config, PayPal-first / Useme-optional workflow
- `assets/img/` — logo and favicon assets

## Before publishing

Open `assets/js/main.js` and replace:

```js
const LINKEDIN_URL = "https://www.linkedin.com/in/constantine-vermund-01baba405/";
```

with your real LinkedIn profile URL if you need to change it.

## GitHub Pages setup

1. Create a repository, for example `vermund-studio`.
2. Upload all files from this folder to the repository root.
3. Go to **Settings → Pages**.
4. Choose branch `main` and folder `/root`.
5. Save and wait for GitHub Pages to publish the site.

## Contact form note

This static version uses an embedded Tally form for project requests: https://tally.so/r/ZjP2dy.

To edit the form fields or notification email, update the form directly in Tally.
