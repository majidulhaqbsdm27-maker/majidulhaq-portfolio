# Majid Ul Haq – Personal Portfolio (static site)

Plain HTML, CSS and JavaScript. No build step, no backend. Works on GitHub Pages.

## Structure
- `index.html` – all content and SEO metadata
- `css/style.css` – design system (colors are variables at the top of the file)
- `js/script.js` – mobile menu, active nav, scroll reveal, footer year, back-to-top
- `assets/images/` – your photo (`majid-ul-haq.jpg`), social preview (`og-image.jpg`) and the section graphics (`graphic-*.svg`, vector, editable in any text editor)
- `assets/favicon/favicon.svg`, `robots.txt`, `sitemap.xml`

## Design notes
Typography is Lato (as in your deck), loaded from Google Fonts with system-font fallback. Icons are an inline SVG sprite at the top of `index.html`. Button text is white on the brand teal; hover/focus darkens to #1E7A6B.

## Preview locally
Open `index.html` in a browser, or run `python3 -m http.server 8000` in this folder and visit http://localhost:8000.

## Editing content
Open `index.html`; each section has an `id` (about, experience, skills, meta-ads, projects, portfolio, education, contact). Edit the text between tags. To change colors, edit the `:root` variables in `css/style.css` (Teal #2A9D8A, Slate #1E2F2D, Mint #D6EBE7, Gray #4A5A58). `--teal-text` (#1E7A6B) is a darker teal used only for small text so it stays readable.

## Deploy on GitHub Pages
1. Create a GitHub repository named `majid-portfolio` (public).
2. Upload all files in this folder (keep the folder structure; `index.html` at the root).
3. Repository Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`, Save.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/majid-portfolio/`.
5. Replace every `YOUR-USERNAME` in `index.html` (canonical, Open Graph, Twitter, JSON-LD), `robots.txt` and `sitemap.xml` with your username (or custom domain).

All asset paths are relative, so the site works inside a repository subdirectory.

## Remaining checklist
- [ ] Replace `YOUR-USERNAME` URLs (step 5).
- [ ] Confirm https://dhivetech.com/ is live and is the Dhive Tech project you built (it is used only on that project card).
- [ ] Add a CV download button after you make a CV copy without a city in the header (the current CV shows a city, which you asked not to display).
- [ ] Add Zealtouch's own social page links if you want a Zealtouch card (none were available).
- [ ] Optional: add real project screenshots to `assets/images/` and use them in the project cards.
- [ ] Optional: remove the PKR 30,000 line in the Meta Ads section if you prefer.
- [ ] Contact form: not included, to avoid a fake form. Email, phone and WhatsApp links work without any setup.
