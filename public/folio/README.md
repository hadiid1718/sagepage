# Folio: Editorial Website Template for Photographers, Designers & Artists
Version 1.0.0 | Pure HTML5, Tailwind CSS and Vanilla JavaScript. No jQuery, no framework bloat.

Folio is an image-first, editorial website template designed with generous whitespace, delicate hairlines, and refined typography. It delivers an archival, gallery-quality portfolio experience for independent photographers, visual directors, interior architects, and artists.

---

## What Is Inside Every Folio Package

```text
folio/
├── README.md               # Quickstart guide & documentation overview
├── LICENSE.txt             # License terms & usage rights
├── CHANGELOG.md           # Version release history
├── package.json            # Scripts: dev, build, preview
├── tailwind.config.js      # Color and font tokens
├── src/
│   └── input.css           # Tailwind source input
├── sitemap.xml             # Search engine index
├── robots.txt              # Web crawler instructions
├── site.webmanifest        # PWA & mobile bookmark metadata
├── index.html              # Full-screen hero, 6 featured works, about strip, services, testimonials, social strip, contact CTA
├── portfolio.html          # Category filter toolbar, masonry grid, full-screen lightbox
├── project.html            # Case study layout with dual image pairs, narrative, quote, next project
├── about.html              # Studio portrait, biography, client/awards list, 4-step process, CV download
├── services.html           # 3 structured commission tiers, FAQ accordion, scheduler CTA
├── contact.html            # Inquiry form with budget/date selectors & honeypot spam filter
├── thank-you.html          # Confirmation screen
├── 404.html                # Editorial 404 screen
├── assets/
│   ├── css/
│   │   ├── style.css       # Pre-compiled CSS (runs offline with zero build!)
│   │   └── theme.css       # Brand colors as CSS variables
│   ├── js/
│   │   ├── main.js         # Lightbox, gallery filter, sticky header, mobile drawer, form validation
│   │   └── config.js       # Central brandName, email, phone, instagramUrl, bookingUrl, formUrl
│   ├── img/                # WebP placeholder images with width and height set
│   └── fonts/              # Self-hosted Cormorant Garamond & Inter .woff2 fonts
└── docs/
    ├── customization.md    # 60-second color & copy customization guide
    ├── deploy.md           # Free deployment on Netlify Drop, Cloudflare, Vercel, cPanel
    ├── seo-checklist.md    # Title tags, meta descriptions, Open Graph & schema guide
    └── forms.md            # Connect Formspree, Netlify Forms, Basin, or MailerLite
```

---

## Quick Start (Two Ways to Run)

### 1. No-Build Quick Start (3 Steps — No Coding Tools Required)
1. **Unzip** the `folio/` folder on your computer.
2. **Double-click `index.html`** in your file manager to open and preview it immediately in any web browser.
3. Open the folder in any free text editor (e.g., [VS Code](https://code.visualstudio.com/), Sublime, or Notepad) and start editing your text inside the bracket placeholders `[Your Name]`.

*All styles are pre-compiled in `assets/css/style.css`, so you do not need Node.js, npm, or terminal commands to run the website!*

---

### 2. Developer Quick Start (Terminal & Live Reload)
If you are comfortable with Node.js and prefer live auto-reloading while editing:

```bash
# 1. Install optional dev tools
npm install

# 2. Launch local live-server (opens at http://localhost:3000)
npm run dev

# 3. Compile optimized production CSS
npm run build

# 4. Preview final build
npm run preview
```

---

## How to Customize Your Brand in 5 Minutes

### 1. Colors
Open `assets/css/theme.css`. Update the 5 hex color variables:
- `--color-bg: #F5F3EF;` (canvas background)
- `--color-ink: #111111;` (editorial typography & high contrast)
- `--color-warm-gray: #8C857B;` (metadata & captions)
- `--color-light-line: #E4DFD6;` (hairline borders)
- `--color-coral: #E4572E;` (accent buttons & links)

### 2. Name, Contact Details & Booking Scheduler
Open `assets/js/config.js` to change:
- `brandName`: Your name or studio moniker
- `email`: Your direct email address
- `phone`: Your studio telephone
- `instagramUrl`: Your Instagram profile
- `bookingUrl`: Your Calendly / Acuity scheduler link
- `formUrl`: Your Formspree or form endpoint URL

### 3. Text & Content
Open each `.html` file. Every editable section begins with an HTML comment such as `<!-- EDIT: hero text -->`, and placeholder copy is marked with `[brackets]`. Simply replace the text.

### 4. Images
Drop your WebP or JPEG photos into `assets/img/` using the existing file names (`hero.webp`, `work-01.webp`, `portrait.webp`, etc.). All image containers use explicit CSS aspect-ratio classes (`aspect-portrait`, `aspect-landscape`, `aspect-square`) so pages never layout-shift while loading.

### 5. Gallery Categories
On `portfolio.html`, edit the category filter buttons (`data-filter="weddings"`) and ensure each gallery item has a matching `data-category="weddings"` attribute.

---

## How to Connect the Contact Form
1. Create a free endpoint at [formspree.io](https://formspree.io).
2. Paste your form URL into `assets/js/config.js` (`formUrl: "https://formspree.io/f/your-id"`).
3. Alternatively, if hosting on Netlify, add `netlify` to the `<form>` tag in `contact.html`. See `docs/forms.md` for complete instructions.

---

## How to Deploy Your Site
- **Netlify Drop (Recommended)**: Drag and drop the `folio/` folder to [app.netlify.com/drop](https://app.netlify.com/drop). Goes live in 60 seconds with free custom domain SSL.
- **Cloudflare Pages**: Direct upload with global edge distribution.
- **Vercel**: Deploy with zero build step via `vercel` CLI.
- **cPanel / FTP**: Upload into your web host’s `public_html` directory.
- Full details in `docs/deploy.md`.

---

## Browser Support & Performance
- **Browsers**: Google Chrome, Apple Safari (macOS & iOS), Mozilla Firefox, Microsoft Edge.
- **Lighthouse Score**: 98–100 across Performance, Accessibility, Best Practices, and SEO.
- **Accessibility**: Visible focus rings on all interactive elements, WCAG AA color contrast, skip-to-content links, screen-reader friendly semantic landmarks.

---

## Support & Assistance
- Need help setting up? Email: **support@sagepage.co** (guaranteed response within 1 to 2 business days).
- Comprehensive offline guides are available in the `docs/` folder.

---

## License & Credits
- **License**: See `LICENSE.txt`. One license covers one published website for personal use or for a client. Redistribution or resale of raw source files is prohibited.
- **Fonts**: *Cormorant Garamond* (Christian Thalmann) and *Inter* (Rasmus Andersson), licensed under the SIL Open Font License.
- **Crafted with care by Sagepage Studio** ([sagepage.co](https://sagepage.co)).
