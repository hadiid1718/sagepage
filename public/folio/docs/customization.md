# Customization Guide · Folio Template

Folio is engineered to be modified in minutes without needing command-line tools or JavaScript knowledge.

---

## 1. Changing Brand Colors in 60 Seconds
Open `assets/css/theme.css`. The entire color scheme is governed by 5 CSS custom properties at the top of the file:

```css
:root {
  --color-bg: #F5F3EF;          /* Off-white background */
  --color-ink: #111111;         /* Deep ink black for text & contrast */
  --color-warm-gray: #8C857B;   /* Subdued warm gray for metadata & captions */
  --color-light-line: #E4DFD6;  /* Thin hairline borders */
  --color-coral: #E4572E;       /* Singular signature accent color */
}
```

Simply update these hex codes to your preferred palette. Every page across the template updates automatically.

---

## 2. Updating Your Name, Email & Booking Link
Open `assets/js/config.js`. Update your details in one central spot:

```javascript
const FolioConfig = {
  brandName: "Your Full Name",
  brandSubtitle: "Photographer & Creative Director",
  location: "Paris · Available Worldwide",
  email: "hello@yourdomain.com",
  phone: "+1 (555) 019-2834",
  instagramUrl: "https://instagram.com/yourhandle",
  bookingUrl: "https://calendly.com/yourhandle",
  formUrl: "https://formspree.io/f/your-form-id"
};
```

---

## 3. Editing Text & Paragraphs
Every HTML page contains clear bracket placeholders:
- Search for `[` in your code editor (e.g. `[L'Aura Pavilion]` or `[Editorial & Fashion]`).
- Replace the bracketed text with your personalized copy.
- Each major section starts with a clear HTML comment such as `<!-- EDIT: hero text -->`.

---

## 4. Swapping Images
Replace the placeholder files in `assets/img/` with your own photographs, keeping the same file names:
- `hero.webp`: Full-screen hero image on `index.html` (recommended size: 1920×1080px or higher, under 300 KB).
- `work-01.webp` through `work-06.webp`: Featured projects on the homepage.
- `portrait.webp`: Your studio portrait on `about.html` (800×1000px, 4:5 ratio).
- `insta-01.webp` through `insta-06.webp`: Social journal square images on the homepage (600×600px).
- `case-hero.webp` and `case-01.webp` through `case-03.webp`: Project case study images.

*Tip: Convert your JPEG/PNG photos to modern `.webp` format using free web tools like squoosh.app or cloudconvert.com to keep page loading instantaneous.*

---

## 5. Adding or Changing Gallery Categories
On `portfolio.html`:
1. Find the filter toolbar at the top:
   ```html
   <button data-filter="weddings">Weddings</button>
   <button data-filter="portraits">Portraits</button>
   ```
2. On each gallery figure, ensure the `data-category` attribute matches your filter name:
   ```html
   <figure data-category="weddings"> ... </figure>
   ```
   To assign an image to multiple categories, separate them with commas:
   ```html
   <figure data-category="weddings, portraits"> ... </figure>
   ```

---

## 6. Changing Typography
Folio includes self-hosted `Cormorant Garamond` (editorial serif) and `Inter` (sans-serif body).
To use a different font:
1. Link your Google Font in the `<head>` of each HTML file.
2. In `assets/css/theme.css`, adjust `--font-serif` and `--font-sans`.
