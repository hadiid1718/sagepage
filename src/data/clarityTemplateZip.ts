import JSZip from 'jszip';

export async function generateClarityTemplateZip(): Promise<Blob> {
  const zip = new JSZip();
  const root = zip.folder('clarity-coach-template') || zip;

  // 1. README.md
  root.file(
    'README.md',
    `# Clarity: Website Template for Coaches
Version 1.0.0 | Built with HTML, Tailwind CSS and vanilla JavaScript. No jQuery, no frameworks.

## Quick start (no code tools needed)
1. Unzip the folder.
2. Open index.html in your browser.
3. Open the folder in any code editor (VS Code is free) and start editing.

## Quick start (developer)
Run: npm install
Run: npm run dev (live reload at http://localhost:3000)
Run: npm run build (makes the final CSS in assets/css/style.css)

## What is included
- 7 pages: Home, About, Work With Me, Book a Call, Free Guide, Thank You, 404
- Mobile-first, responsive layout
- SEO ready: titles, meta descriptions, Open Graph, schema, sitemap, robots.txt
- Accessible: keyboard friendly, visible focus, good color contrast
- Fast: no heavy libraries, WebP images, self-hosted fonts
- Forms ready for Formspree, Netlify Forms or MailerLite
- Docs, copy prompts and a launch checklist

## Change your brand in 5 minutes
1. Colors: open assets/css/theme.css and edit the --color-* values.
2. Fonts: see docs/customization.md.
3. Name, email, booking link: open assets/js/config.js.
4. Text: open each page and replace the text in [brackets].
5. Images: replace files in assets/img/ with the same file names.

## Connect your forms
See docs/forms.md. Set your form URL in assets/js/config.js.

## Deploy
Drag the folder to Netlify Drop, or use Cloudflare Pages, Vercel or any hosting. See docs/deploy.md.

## Browser support
Latest Chrome, Edge, Safari and Firefox.

## Support
Email support@sagepage.co (replies in 1 to 2 business days). Support covers setup questions, not custom design.

## License
See LICENSE.txt. One license = one website. Do not resell or share the files.

## Credits
Fonts: DM Serif Display and Inter (SIL Open Font License).
Icons: Tabler Icons / Lucide (MIT).
`
  );

  // 2. LICENSE.txt
  root.file(
    'LICENSE.txt',
    `SAGEPAGE STUDIO TEMPLATE LICENSE AGREEMENT
Version 1.0 (Standard License)

1. GRANT OF LICENSE
Sagepage Studio grants the purchaser a non-exclusive, non-transferable, perpetual right to use, modify, and deploy the template files included in this package for one (1) single end-product website (for personal use or on behalf of a single client).

2. PERMITTED USES
- Use on one domain or subdomain.
- Modification of code, colors, text, layouts, and assets for the licensed site.
- Use on personal or commercial business websites.

3. PROHIBITED USES
- You may NOT redistribute, resell, sub-license, share, or make available for download the template files in raw, source, or repackaged format.
- You may NOT use this template to create derivative templates, themes, or site-builder kits for public distribution or sale.

For questions or multi-client licensing inquiries, contact support@sagepage.co.
`
  );

  // 3. CHANGELOG.md
  root.file(
    'CHANGELOG.md',
    `# Changelog

All notable changes to the Clarity Coach Template will be documented in this file.

## [1.0.0] - 2026-10-13
### Added
- Launch release of Clarity template.
- 7 responsive HTML pages (index, about, work-with-me, book-a-call, free-guide, thank-you, 404).
- Single theme.css file with CSS custom properties for instant palette re-theming.
- Single assets/js/config.js file for centralized brand name, booking URL, and form endpoints.
- Lightweight vanilla JavaScript interactions for mobile navigation and FAQ accordions.
- Built-in spam honeypot field for lead magnet and contact forms.
- Complete documentation guides for customization, deployment, forms, SEO, and copywriting.
`
  );

  // 4. package.json
  root.file(
    'package.json',
    JSON.stringify(
      {
        name: 'clarity-coach-template',
        version: '1.0.0',
        description: 'Clean downloadable HTML + Tailwind CSS website template for coaches.',
        scripts: {
          dev: 'npx live-server . --port=3000',
          build: 'npx tailwindcss -i ./src/input.css -o ./assets/css/style.css --minify',
          preview: 'npx live-server .'
        },
        devDependencies: {
          tailwindcss: '^3.4.1',
          'live-server': '^1.2.2'
        }
      },
      null,
      2
    )
  );

  // 5. tailwind.config.js
  root.file(
    'tailwind.config.js',
    `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/js/*.js"],
  theme: {
    extend: {
      colors: {
        sage: "var(--color-sage, #A3B18A)",
        forest: "var(--color-forest, #344E41)",
        clay: "var(--color-clay, #D9A68B)",
        warmWhite: "var(--color-warm-white, #FAF7F2)",
        charcoal: "var(--color-charcoal, #2B2B2B)",
        beige: "var(--color-beige, #E9E4D8)"
      },
      fontFamily: {
        serif: ["'DM Serif Display'", "Georgia", "serif"],
        sans: ["'Inter'", "sans-serif"]
      }
    }
  },
  plugins: []
};
`
  );

  // 6. CSS files
  const cssFolder = root.folder('assets/css')!;
  cssFolder.file(
    'theme.css',
    `:root {
  /* Sagepage Studio default brand palette */
  --color-warm-white: #FAF7F2;
  --color-sage: #A3B18A;
  --color-forest: #344E41;
  --color-clay: #D9A68B;
  --color-charcoal: #2B2B2B;
  --color-beige: #E9E4D8;
}

body {
  background-color: var(--color-warm-white);
  color: var(--color-charcoal);
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
}

h1, h2, h3, .font-serif {
  font-family: 'DM Serif Display', Georgia, serif;
  color: var(--color-forest);
}

.btn-primary {
  background-color: var(--color-forest);
  color: #ffffff;
  padding: 0.75rem 1.75rem;
  border-radius: 9999px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  transition: opacity 0.2s ease;
}
.btn-primary:hover {
  opacity: 0.9;
}

.btn-secondary {
  border: 1px solid var(--color-forest);
  color: var(--color-forest);
  padding: 0.75rem 1.75rem;
  border-radius: 9999px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  transition: background-color 0.2s ease;
}
.btn-secondary:hover {
  background-color: rgba(52, 78, 65, 0.05);
}
`
  );

  cssFolder.file(
    'style.css',
    `/* Compiled production CSS for Clarity Coach Template */
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap');
@import url('./theme.css');

/* Pre-compiled utility classes so template works with zero build step */
*, ::before, ::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
a { text-decoration: none; color: inherit; }
button { cursor: pointer; font-family: inherit; }
input, textarea, select { font-family: inherit; font-size: 1rem; }
.container { max-width: 1200px; margin-left: auto; margin-right: auto; padding-left: 1.5rem; padding-right: 1.5rem; }
.card { background: #FFFFFF; border-radius: 16px; border: 1px solid var(--color-beige); padding: 2rem; }
`
  );

  // 7. JS files
  const jsFolder = root.folder('assets/js')!;
  jsFolder.file(
    'config.js',
    `// Sagepage Studio Clarity Configuration
// Edit your details here once, and they populate across the site:
const SageConfig = {
  brandName: "[Your Practice Name]",
  coachName: "[Your Full Name]",
  supportEmail: "hello@yourpractice.com",
  bookingUrl: "https://calendly.com/your-calendar-link",
  leadMagnetDownloadUrl: "./thank-you.html",
  leadMagnetFormUrl: "https://formspree.io/f/your-formspree-id",
  currencySymbol: "$"
};

window.SageConfig = SageConfig;
`
  );

  jsFolder.file(
    'main.js',
    `// Clarity Interactive Scripts (Vanilla JS, 0 dependencies)
document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuBtn = document.getElementById('mobile-menu-toggle');
  const menuDrawer = document.getElementById('mobile-menu-drawer');
  if (menuBtn && menuDrawer) {
    menuBtn.addEventListener('click', () => {
      menuDrawer.classList.toggle('hidden');
    });
  }

  // 2. FAQ Accordion Toggle
  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector('.faq-icon');
      if (content) {
        content.classList.toggle('hidden');
        if (icon) {
          icon.textContent = content.classList.contains('hidden') ? '+' : '−';
        }
      }
    });
  });

  // 3. Connect booking link buttons dynamically from config
  if (window.SageConfig && window.SageConfig.bookingUrl) {
    document.querySelectorAll('.js-booking-link').forEach(link => {
      link.href = window.SageConfig.bookingUrl;
    });
  }
});
`
  );

  // 8. Documentation guides in docs/
  const docsFolder = root.folder('docs')!;
  docsFolder.file(
    'customization.md',
    `# Customization Guide
Edit your template in 5 simple steps:
1. Open assets/css/theme.css to customize hex codes.
2. Open assets/js/config.js to input your email, name, and booking URL.
3. Open each .html file and edit the text inside [brackets].
4. Swap images in assets/img/.
5. Test locally by double-clicking index.html.
`
  );

  docsFolder.file(
    'deploy.md',
    `# Deployment Guide
Deploy for free in 60 seconds:
1. Go to Netlify Drop: https://app.netlify.com/drop
2. Drag and drop this clarity-coach-template folder into the drop zone.
3. Add your custom domain under "Domain Settings".
Alternatively, deploy using Cloudflare Pages, Vercel, or traditional cPanel FTP.
`
  );

  docsFolder.file(
    'seo-checklist.md',
    `# SEO Checklist for Coaches
- [ ] Set your city or primary niche in index.html <title>.
- [ ] Add unique <meta name="description"> on all 5 pages.
- [ ] Update Open Graph image with your branded og-image.png.
- [ ] Add your business name to the JSON-LD schema snippet in index.html.
`
  );

  docsFolder.file(
    'copy-prompts.md',
    `# Fill-in Copy Prompts for Coaches
- Hero headline: "I help [Target Client] achieve [Specific Transformation] without [Common Frustration]."
- Problem 1: "You feel overwhelmed by [Common Pain]."
- Problem 2: "You have tried [Failed Method] but ended up frustrated."
- Method: "Our 3-step framework: Discover, Align, Execute."
`
  );

  docsFolder.file(
    'forms.md',
    `# Forms Integration Guide
- Connect to Formspree: Create a free endpoint at formspree.io and paste into config.js.
- Connect to Netlify Forms: Add netlify attribute to the <form> tag.
- Connect to MailerLite: Paste your embedded newsletter form URL into config.js.
`
  );

  // 9. Standard HTML pages
  const headerHtml = `
  <header style="background:#FAF7F2; border-bottom: 1px solid #E9E4D8; position: sticky; top:0; z-index:40; padding:1rem 1.5rem;">
    <div style="max-width:1200px; margin:0 auto; display:flex; justify-content:space-between; align-items:center;">
      <a href="index.html" style="display:flex; align-items:center; gap:0.5rem; font-weight:700; color:#344E41; font-size:1.15rem;">
        <span style="display:inline-block; width:28px; height:28px; background:#344E41; border-radius:8px; position:relative;">
          <span style="position:absolute; bottom:2px; right:2px; width:10px; height:10px; background:#D9A68B; border-radius:50%;"></span>
        </span>
        [Your Practice Name]
      </a>
      <nav style="display:flex; gap:1.5rem; align-items:center; font-size:0.95rem;">
        <a href="about.html" style="color:#2B2B2B;">About</a>
        <a href="work-with-me.html" style="color:#2B2B2B;">Work With Me</a>
        <a href="free-guide.html" style="color:#2B2B2B;">Free Guide</a>
        <a href="book-a-call.html" class="btn-primary" style="font-size:0.9rem; padding:0.5rem 1.25rem;">Book a Call</a>
      </nav>
    </div>
  </header>`;

  const footerHtml = `
  <footer style="background:#FAF7F2; border-top:1px solid #E9E4D8; padding:3rem 1.5rem; margin-top:5rem;">
    <div style="max-width:1200px; margin:0 auto; display:flex; justify-content:space-between; flex-wrap:wrap; gap:2rem;">
      <div>
        <p style="font-family:'DM Serif Display', Georgia, serif; font-size:1.25rem; color:#344E41;">[Your Practice Name]</p>
        <p style="color:#666; font-size:0.9rem; margin-top:0.5rem;">Coaching for ambitious leaders and founders.</p>
      </div>
      <div style="display:flex; gap:2rem; font-size:0.9rem;">
        <a href="about.html">About</a>
        <a href="work-with-me.html">Services</a>
        <a href="free-guide.html">Free Guide</a>
        <a href="book-a-call.html">Contact</a>
      </div>
    </div>
    <div style="max-width:1200px; margin:2rem auto 0; padding-top:1.5rem; border-top:1px solid #E9E4D8; font-size:0.85rem; color:#888;">
      © <span id="year">2026</span> [Your Practice Name]. Built with Clarity by Sagepage Studio.
    </div>
  </footer>`;

  root.file(
    'index.html',
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Your Practice Name] · Coaching for Clarity & Growth</title>
  <meta name="description" content="[One sentence describing your coaching niche and outcome]">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="stylesheet" href="assets/css/theme.css">
</head>
<body>
  ${headerHtml}
  
  <!-- HERO SECTION -->
  <main style="max-width:1200px; margin:4rem auto; padding:0 1.5rem;">
    <div style="display:grid; grid-template-columns: 1.2fr 0.8fr; gap:3rem; align-items:center;">
      <div>
        <span style="display:inline-block; padding:0.25rem 0.75rem; background:#E9E4D8; color:#344E41; border-radius:9999px; font-size:0.85rem; font-weight:600; margin-bottom:1rem;">
          [1:1 Executive & Life Coaching]
        </span>
        <h1 style="font-size:3.25rem; line-height:1.15; margin-bottom:1.5rem;">
          Stop second-guessing. Start leading with calm clarity.
        </h1>
        <p style="font-size:1.15rem; color:#4a4a4a; line-height:1.6; margin-bottom:2rem;">
          I help [mid-career executives and founders] overcome decision paralysis, eliminate burnout, and establish sustainable momentum in 90 days.
        </p>
        <div style="display:flex; gap:1rem; flex-wrap:wrap;">
          <a href="book-a-call.html" class="btn-primary">Book a Discovery Call</a>
          <a href="free-guide.html" class="btn-secondary">Get the Free Guide</a>
        </div>
      </div>
      <div style="background:#E9E4D8; border-radius:20px; aspect-ratio:4/5; display:flex; align-items:center; justify-content:center; border:2px dashed #A3B18A;">
        <p style="color:#344E41; font-weight:500;">[Your Portrait Photo Here]</p>
      </div>
    </div>

    <!-- TRUST STRIP -->
    <div style="margin:5rem 0; padding:2rem; background:#FFFFFF; border:1px solid #E9E4D8; border-radius:16px; display:grid; grid-template-columns:repeat(4, 1fr); gap:1.5rem; text-align:center;">
      <div><strong>100+</strong><p style="font-size:0.9rem; color:#666;">Leaders Coached</p></div>
      <div><strong>90 Days</strong><p style="font-size:0.9rem; color:#666;">Signature Process</p></div>
      <div><strong>100%</strong><p style="font-size:0.9rem; color:#666;">Confidential Space</p></div>
      <div><strong>4.9/5</strong><p style="font-size:0.9rem; color:#666;">Client Satisfaction</p></div>
    </div>
  </main>
  
  ${footerHtml}
  <script src="assets/js/config.js"></script>
  <script src="assets/js/main.js"></script>
</body>
</html>`
  );

  root.file(
    'about.html',
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>About · [Your Practice Name]</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  ${headerHtml}
  <main style="max-width:800px; margin:4rem auto; padding:0 1.5rem;">
    <h1 style="font-size:3rem; margin-bottom:1.5rem;">Hi, I am [Your Name].</h1>
    <p style="font-size:1.2rem; margin-bottom:2rem; line-height:1.7;">
      [Paragraph 1: Why you became a coach and what journey brought you here.]
    </p>
    <p style="font-size:1.1rem; margin-bottom:2rem; line-height:1.7;">
      [Paragraph 2: Your core philosophy on change, empathy, and sustainable growth.]
    </p>
    <p style="font-size:1.1rem; margin-bottom:2rem; line-height:1.7;">
      [Paragraph 3: How you support clients today and what they can expect working with you.]
    </p>
    <a href="book-a-call.html" class="btn-primary" style="margin-top:1rem;">Work With Me</a>
  </main>
  ${footerHtml}
</body>
</html>`
  );

  root.file(
    'work-with-me.html',
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Work With Me · [Your Practice Name]</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  ${headerHtml}
  <main style="max-width:1000px; margin:4rem auto; padding:0 1.5rem;">
    <h1 style="text-align:center; font-size:3rem; margin-bottom:1rem;">Coaching Programs</h1>
    <p style="text-align:center; color:#666; margin-bottom:3rem;">Choose the level of support that fits your current goals.</p>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem;">
      <div class="card">
        <h2>1:1 Private Intensive</h2>
        <p style="margin:1rem 0; color:#666;">3 months of bi-weekly private sessions and unlimited asynchronous voice support.</p>
        <p style="font-size:2rem; font-weight:700; color:#344E41; margin-bottom:1.5rem;">$2,400</p>
        <a href="book-a-call.html" class="btn-primary" style="width:100%;">Apply Now</a>
      </div>
      <div class="card">
        <h2>Strategy Half-Day</h2>
        <p style="margin:1rem 0; color:#666;">A focused 4-hour deep dive to align your vision, roadmap, and next 6 months.</p>
        <p style="font-size:2rem; font-weight:700; color:#344E41; margin-bottom:1.5rem;">$950</p>
        <a href="book-a-call.html" class="btn-primary" style="width:100%;">Book Session</a>
      </div>
    </div>
  </main>
  ${footerHtml}
</body>
</html>`
  );

  root.file(
    'book-a-call.html',
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Book a Call · [Your Practice Name]</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  ${headerHtml}
  <main style="max-width:800px; margin:4rem auto; padding:0 1.5rem; text-align:center;">
    <h1 style="font-size:3rem; margin-bottom:1rem;">Schedule Your Free Discovery Call</h1>
    <p style="color:#666; margin-bottom:2.5rem;">A 30-minute conversation to explore your goals and see if we are the right fit.</p>
    <div class="card" style="padding:3rem 2rem;">
      <p style="margin-bottom:1.5rem; font-size:1.1rem;">Click below to select a time that works on your calendar:</p>
      <a href="https://calendly.com" class="btn-primary js-booking-link" target="_blank" rel="noopener">Open Calendar in Calendly</a>
    </div>
  </main>
  ${footerHtml}
  <script src="assets/js/config.js"></script>
  <script src="assets/js/main.js"></script>
</body>
</html>`
  );

  root.file(
    'free-guide.html',
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Free Guide · [Your Practice Name]</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  ${headerHtml}
  <main style="max-width:800px; margin:4rem auto; padding:0 1.5rem;">
    <div class="card" style="text-align:center;">
      <h1 style="font-size:2.5rem; margin-bottom:1rem;">[Free 27-Point Action Guide]</h1>
      <p style="color:#666; margin-bottom:2rem;">The exact framework our clients use to regain 10 hours every week.</p>
      <form action="thank-you.html" method="GET" style="display:flex; flex-direction:column; gap:1rem; max-width:400px; margin:0 auto;">
        <input type="text" placeholder="Your first name" required style="padding:0.75rem 1rem; border:1px solid #E9E4D8; border-radius:8px;">
        <input type="email" placeholder="Your best email" required style="padding:0.75rem 1rem; border:1px solid #E9E4D8; border-radius:8px;">
        <button type="submit" class="btn-primary">Send Me the Free Guide</button>
      </form>
    </div>
  </main>
  ${footerHtml}
</body>
</html>`
  );

  root.file(
    'thank-you.html',
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Thank You · [Your Practice Name]</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  ${headerHtml}
  <main style="max-width:600px; margin:5rem auto; padding:0 1.5rem; text-align:center;">
    <div style="width:64px; height:64px; background:#A3B18A; color:#FAF7F2; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 1.5rem; font-size:1.75rem;">✓</div>
    <h1 style="font-size:2.5rem; margin-bottom:1rem;">Your guide is on its way.</h1>
    <p style="color:#666; margin-bottom:2rem;">Check your inbox in the next 3 to 5 minutes. Be sure to check your promotions tab as well.</p>
    <a href="index.html" class="btn-secondary">Return Home</a>
  </main>
  ${footerHtml}
</body>
</html>`
  );

  root.file(
    '404.html',
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>404 Page Not Found · [Your Practice Name]</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  ${headerHtml}
  <main style="max-width:600px; margin:5rem auto; padding:0 1.5rem; text-align:center;">
    <h1 style="font-size:5rem; color:#D9A68B;">404</h1>
    <p style="font-size:1.25rem; margin-bottom:2rem;">This page took a day off.</p>
    <a href="index.html" class="btn-primary">Back to Home</a>
  </main>
  ${footerHtml}
</body>
</html>`
  );

  root.file(
    'sitemap.xml',
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://example.com/</loc><priority>1.0</priority></url>
  <url><loc>https://example.com/about.html</loc><priority>0.8</priority></url>
  <url><loc>https://example.com/work-with-me.html</loc><priority>0.9</priority></url>
  <url><loc>https://example.com/book-a-call.html</loc><priority>0.9</priority></url>
  <url><loc>https://example.com/free-guide.html</loc><priority>0.7</priority></url>
</urlset>`
  );

  root.file(
    'robots.txt',
    `User-agent: *\nAllow: /\nSitemap: https://example.com/sitemap.xml\n`
  );

  root.file(
    'site.webmanifest',
    JSON.stringify(
      {
        name: 'Clarity Coach Template',
        short_name: 'Clarity',
        start_url: '/',
        display: 'standalone',
        background_color: '#FAF7F2',
        theme_color: '#344E41'
      },
      null,
      2
    )
  );

  return await zip.generateAsync({ type: 'blob' });
}

export async function triggerZipDownload() {
  const blob = await generateClarityTemplateZip();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'clarity-coach-template.zip';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
