# Folio Image Asset Catalog & Production Shopping List

This document lists every unique image slot across the **Folio** website template. Every image slot uses a dedicated, non-repeated file name so that you can swap in your own photographs, client case studies, and editorial artwork.

All placeholder images are self-hosted WebP files with subtle warm tonal gradations and the file name labeled in the corner.

---

## Technical Image Guidelines
- **Format**: Modern WebP (`.webp`) recommended (JPEG or PNG also supported).
- **Maximum Resolution**: 1600px along the longest dimension.
- **File Weight**: Target under 200 KB per image for instant load times (Lighthouse 95+).
- **Color Profile**: sRGB.
- **Aspect Ratios**: Set explicit `width` and `height` attributes on HTML `<img>` elements to avoid Cumulative Layout Shift (CLS).
- **Loading Attribute**: `loading="lazy"` on all below-the-fold images; hero image uses immediate eager load.
- **Lightbox**: Add `class="js-lightbox-trigger"` to allow visitors to view any image in high-resolution full screen.

---

## Complete Image Slots Table

| File Name | Page / Section | Recommended Size (px) | Aspect Ratio | Suggested Photographic Subject |
| :--- | :--- | :--- | :--- | :--- |
| **hero-01.webp** | `index.html` (Hero Center) | 800 × 1000 | 4:5 (Portrait) | Editorial portrait of a woman in a linen shirt by a window, soft natural light, film look |
| **hero-02.webp** | `index.html` (Hero Left Top) | 600 × 450 | 4:3 (Landscape) | Minimal product photograph of ceramic cups on a beige surface, soft shadow |
| **hero-03.webp** | `index.html` (Hero Left Bottom) | 600 × 450 | 4:3 (Landscape) | Architectural detail of a curved white staircase, strong shadows |
| **hero-04.webp** | `index.html` (Hero Right Top) | 600 × 450 | 4:3 (Landscape) | Travel photo of a narrow European street with warm evening light |
| **hero-05.webp** | `index.html` (Hero Right Bottom) | 600 × 450 | 4:3 (Landscape) | Studio interior with large windows, a camera on a tripod and plants |
| **feat-01.webp** | `index.html` (Featured Mosaic 01) | 800 × 1000 | 4:5 (Portrait) | Fashion portrait of a man in a camel coat against a plain sand wall |
| **feat-02.webp** | `index.html` (Featured Mosaic 02) | 900 × 600 | 3:2 (Landscape) | Wedding couple walking through a green field at golden hour, candid documentary style |
| **feat-03.webp** | `index.html` (Featured Mosaic 03) | 600 × 600 | 1:1 (Square) | Close-up of hands shaping clay on a pottery wheel |
| **feat-04.webp** | `index.html` (Featured Mosaic 04) | 800 × 1000 | 4:5 (Portrait) | Street photograph of a person with an umbrella in a rainy city, moody tones |
| **feat-05.webp** | `index.html` (Featured Mosaic 05) | 1200 × 675 | 16:9 (Wide) | Mountain lake at sunrise with mist, wide landscape, muted colors |
| **feat-06.webp** | `index.html` (Featured Mosaic 06) | 600 × 600 | 1:1 (Square) | Designer workspace flat lay with sketches, color swatches and a pencil |
| **feat-07.webp** | `index.html` (Featured Mosaic 07) | 800 × 1000 | 4:5 (Portrait) | Editorial portrait of a model in olive knitwear against textured concrete |
| **feat-08.webp** | `index.html` (Featured Mosaic 08) | 900 × 600 | 3:2 (Landscape) | Coastal afternoon light over rocky sea coves and Mediterranean pines |
| **feat-09.webp** | `index.html` (Featured Mosaic 09) | 600 × 600 | 1:1 (Square) | Abstract painting texture in sage green and clay tones, macro close-up |
| **feat-10.webp** | `index.html` (Featured Mosaic 10) | 900 × 600 | 3:2 (Landscape) | Architectural interior with raw wood beams and linen curtains |
| **about-portrait.webp** | `index.html` (About Strip Main) | 800 × 1000 | 4:5 (Portrait) | Lead artist portrait sitting in daylight studio with medium format camera |
| **about-strip-01.webp** | `index.html` (About 2×2 Mosaic 1) | 600 × 600 | 1:1 (Square) | Ceramic vessels on stone worktable |
| **about-strip-02.webp** | `index.html` (About 2×2 Mosaic 2) | 600 × 600 | 1:1 (Square) | Analog film contact sheets and loupe magnifier |
| **about-strip-03.webp** | `index.html` (About 2×2 Mosaic 3) | 600 × 600 | 1:1 (Square) | Natural shadow cast across linen fabric swatch board |
| **about-strip-04.webp** | `index.html` (About 2×2 Mosaic 4) | 600 × 600 | 1:1 (Square) | Minimalist architectural skylight and concrete beams |
| **service-01.webp** | `index.html` (Service Item 1) | 800 × 533 | 3:2 (Landscape) | Editorial portraiture sitting in natural light daylight loft |
| **service-02.webp** | `index.html` (Service Item 2) | 800 × 533 | 3:2 (Landscape) | Commercial brand lookbook flat lay and apparel styling |
| **service-03.webp** | `index.html` (Service Item 3) | 800 × 533 | 3:2 (Landscape) | Private destination celebration in historic European villa courtyard |
| **testimonial-01.webp** | `index.html` (Testimonial 1) | 400 × 400 | 1:1 (Square) | Client portrait of Astrid Lindqvist (Creative Director) in ceramic atelier |
| **testimonial-02.webp** | `index.html` (Testimonial 2) | 400 × 400 | 1:1 (Square) | Documentary wedding couple portrait at sunset in Florence |
| **strip-01.webp** | `index.html` (Journal Strip 1) | 600 × 600 | 1:1 (Square) | Morning espresso and ceramic mug beside open sketchbook |
| **strip-02.webp** | `index.html` (Journal Strip 2) | 600 × 600 | 1:1 (Square) | Parisian limestone street corner in soft morning drizzle |
| **strip-03.webp** | `index.html` (Journal Strip 3) | 600 × 600 | 1:1 (Square) | Monochrome shadow of olive branches on plaster wall |
| **strip-04.webp** | `index.html` (Journal Strip 4) | 600 × 600 | 1:1 (Square) | Hand holding exposed 120mm color negative film against light |
| **strip-05.webp** | `index.html` (Journal Strip 5) | 600 × 600 | 1:1 (Square) | Sculptural travertine coffee table with stoneware bowl |
| **strip-06.webp** | `index.html` (Journal Strip 6) | 600 × 600 | 1:1 (Square) | Solitary wooden rowboat on tranquil misty morning lake |
| **strip-07.webp** | `index.html` (Journal Strip 7) | 600 × 600 | 1:1 (Square) | Linen curtains billowing in Mediterranean sea breeze |
| **strip-08.webp** | `index.html` (Journal Strip 8) | 600 × 600 | 1:1 (Square) | Dried botanical branches in handmade patinated vase |
| **footer-01.webp** | Global Footer Strip (Image 1) | 600 × 400 | 3:2 (Landscape) | Architectural curved staircase and raking afternoon light |
| **footer-02.webp** | Global Footer Strip (Image 2) | 600 × 400 | 3:2 (Landscape) | Monochromatic portrait detail in wool overcoat |
| **footer-03.webp** | Global Footer Strip (Image 3) | 600 × 400 | 3:2 (Landscape) | Hands working terracotta clay on wheel |
| **footer-04.webp** | Global Footer Strip (Image 4) | 600 × 400 | 3:2 (Landscape) | Fog rolling over alpine pine ridges |
| **footer-05.webp** | Global Footer Strip (Image 5) | 600 × 400 | 3:2 (Landscape) | Intimate couple silhouette walking across Tuscan field |
| **footer-06.webp** | Global Footer Strip (Image 6) | 600 × 400 | 3:2 (Landscape) | Still life ceramic cup on travertine block with shadow |
| **work-01.webp** | `portfolio.html` (Portraits) | 800 × 1000 | 4:5 (Portrait) | Monolith Series: Ceramic study and architectural shadow |
| **work-02.webp** | `portfolio.html` (Brand) | 900 × 600 | 3:2 (Landscape) | Solis Campaign: Coastal light study in Marseille |
| **work-03.webp** | `portfolio.html` (Portraits) | 800 × 1000 | 4:5 (Portrait) | The Quiet Gesture: High fashion editorial for Revue Magazine |
| **work-04.webp** | `portfolio.html` (Weddings) | 800 × 1000 | 4:5 (Portrait) | Villa Medicea: Intimate wedding story in Val d'Orcia |
| **work-05.webp** | `portfolio.html` (Travel) | 900 × 600 | 3:2 (Landscape) | Kyoto Pavilions: Spatial geometry and shoji screens |
| **work-06.webp** | `portfolio.html` (Portraits) | 800 × 1000 | 4:5 (Portrait) | Elysian Shadows: Bronze and ceramic still life |
| **work-07.webp** | `portfolio.html` (Brand) | 600 × 600 | 1:1 (Square) | Aura Fragrance: Glass flacon in desert noon light |
| **work-08.webp** | `portfolio.html` (Weddings) | 900 × 600 | 3:2 (Landscape) | Coastline Vows: Candid cliffside documentary walk |
| **work-09.webp** | `portfolio.html` (Travel) | 800 × 1000 | 4:5 (Portrait) | Amalfi Morning: Pastel facades and sea mist |
| **work-10.webp** | `portfolio.html` (Portraits) | 800 × 1000 | 4:5 (Portrait) | Studio Diptych: Monochromatic study of posture |
| **work-11.webp** | `portfolio.html` (Brand) | 900 × 600 | 3:2 (Landscape) | Raw Linen: Minimal textiles lookbook for Ateliers |
| **work-12.webp** | `portfolio.html` (Travel) | 600 × 600 | 1:1 (Square) | Atlas Mountain Mist: Solitary ridge at dawn |
| **work-13.webp** | `portfolio.html` (Weddings) | 800 × 1000 | 4:5 (Portrait) | Under the Olive Grove: Candlelight reception table |
| **work-14.webp** | `portfolio.html` (Brand) | 900 × 600 | 3:2 (Landscape) | Nordic Living: Sculptural oak chairs and soft shadows |
| **work-15.webp** | `portfolio.html` (Portraits) | 800 × 1000 | 4:5 (Portrait) | Linen and Light: Window silhouette in afternoon gloom |
| **work-16.webp** | `portfolio.html` (Travel) | 900 × 600 | 3:2 (Landscape) | Venetian Lagoon: Wooden boat mooring poles in winter fog |
| **project-hero.webp** | `project.html` (Hero Spread) | 1600 × 900 | 16:9 (Wide) | Kinfolk XIV main spread: Ceramic vessels on limestone table |
| **project-two-01.webp** | `project.html` (Two-Image Row 1) | 800 × 1000 | 4:5 (Portrait) | Plate 02: Tactile study in raw earth and unglazed clay |
| **project-two-02.webp** | `project.html` (Two-Image Row 2) | 800 × 1000 | 4:5 (Portrait) | Plate 03: Negative space framing the studio pine forest |
| **project-wide.webp** | `project.html` (Panoramic Spread) | 1600 × 800 | 2:1 (Panoramic) | Plate 04: Workshop panoramic view with morning raking shadows |
| **project-three-01.webp** | `project.html` (Three-Image Row 1) | 600 × 800 | 3:4 (Portrait) | Plate 05: Glaze crystallization macro detail |
| **project-three-02.webp** | `project.html` (Three-Image Row 2) | 600 × 800 | 3:4 (Portrait) | Plate 06: Hands trimming leather-hard vessel base |
| **project-three-03.webp** | `project.html` (Three-Image Row 3) | 600 × 800 | 3:4 (Portrait) | Plate 07: Kiln opening and cool-down gradation |
| **project-gal-01.webp** | `project.html` (Final Gallery 1) | 700 × 700 | 1:1 (Square) | Studio tools and natural bristle glazing brushes |
| **project-gal-02.webp** | `project.html` (Final Gallery 2) | 700 × 525 | 4:3 (Landscape) | Stacked ceramic test tiles with mineral pigment notes |
| **project-gal-03.webp** | `project.html` (Final Gallery 3) | 700 × 875 | 4:5 (Portrait) | Solitary finished vessel bathed in north-facing window light |
| **project-gal-04.webp** | `project.html` (Final Gallery 4) | 700 × 525 | 4:3 (Landscape) | Weathered timber drying racks in workshop corner |
| **project-gal-05.webp** | `project.html` (Final Gallery 5) | 700 × 700 | 1:1 (Square) | Clay dust settled across handwritten recipe notebook |
| **project-gal-06.webp** | `project.html` (Final Gallery 6) | 700 × 875 | 4:5 (Portrait) | Final catalog arrangement on linen tablecloth |
| **about-main.webp** | `about.html` (Full-Height Portrait) | 900 × 1200 | 3:4 (Portrait) | Full-height environmental portrait of Elena Rostova in natural studio light |
| **studio-01.webp** | `about.html` (Studio Mosaic 1) | 800 × 600 | 4:3 (Landscape) | Studio overview with skylight, drafting table, and print racks |
| **studio-02.webp** | `about.html` (Studio Mosaic 2) | 600 × 600 | 1:1 (Square) | Vintage medium format camera bodies on open shelf |
| **studio-03.webp** | `about.html` (Studio Mosaic 3) | 600 × 600 | 1:1 (Square) | Darkroom print bath development tray and tongs |
| **studio-04.webp** | `about.html` (Studio Mosaic 4) | 800 × 600 | 4:3 (Landscape) | Bookshelf of monograph art books and collected ceramic objects |
| **process-01.webp** | `about.html` (Methodology Step 1) | 700 × 525 | 4:3 (Landscape) | Step 1: Moodboard curation, tonal swatches, and lighting sketches |
| **process-02.webp** | `about.html` (Methodology Step 2) | 700 × 525 | 4:3 (Landscape) | Step 2: Location scouting notes and daylight timing schedule |
| **process-03.webp** | `about.html` (Methodology Step 3) | 700 × 525 | 4:3 (Landscape) | Step 3: On-set analog medium format camera execution |
| **process-04.webp** | `about.html` (Methodology Step 4) | 700 × 525 | 4:3 (Landscape) | Step 4: Contact sheet review, fine art print mastering, and archival delivery |
| **service-pkg-01.webp** | `services.html` (Package 1 Header) | 800 × 500 | 16:10 (Landscape) | Editorial sitting: model framed by morning studio window |
| **service-pkg-02.webp** | `services.html` (Package 2 Header) | 800 × 500 | 16:10 (Landscape) | Brand lookbook: multi-location set with apparel and props |
| **service-pkg-03.webp** | `services.html` (Package 3 Header) | 800 × 500 | 16:10 (Landscape) | Destination wedding: historic Mediterranean villa courtyard |
| **service-deliverable-01.webp** | `services.html` (Deliverables 1) | 800 × 550 | 16:11 (Landscape) | Handcrafted linen archival presentation box and cotton rag prints |
| **service-deliverable-02.webp** | `services.html` (Deliverables 2) | 800 × 550 | 16:11 (Landscape) | Private client online proofing vault displayed on tablet |
| **contact-panel-01.webp** | `contact.html` (Side Panel 1) | 700 × 500 | 7:5 (Landscape) | Studio consultation desk with espresso and print proofs |
| **contact-panel-02.webp** | `contact.html` (Side Panel 2) | 700 × 700 | 1:1 (Square) | Morning light streaming through studio casement window |
| **contact-panel-03.webp** | `contact.html` (Side Panel 3) | 700 × 900 | 7:9 (Portrait) | Curated art monograph library and ceramic specimen shelf |
| **404-visual.webp** | `404.html` (404 Artwork) | 800 × 1000 | 4:5 (Portrait) | Solitary architectural archway and quiet geometric shadows |
| **thankyou-visual.webp** | `thank-you.html` (Confirmation Artwork) | 800 × 1000 | 4:5 (Portrait) | Warm afternoon sunlight across wooden studio desk and fountain pen |
| **og-image.webp** | Global Open Graph Card | 1200 × 630 | 1.91:1 (Landscape) | Curated editorial photography portfolio social preview card |
| **favicon.webp** | Browser Icon | 64 × 64 | 1:1 (Square) | Minimal monochrome studio monograph icon |
