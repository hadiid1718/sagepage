# Changelog

All notable changes to the Folio template will be documented in this release log.

## [1.0.0] - 2026-10-13
### Added
- Initial official release of Folio website template.
- 8 responsive HTML pages:
  - `index.html` (Full-screen hero, 6 featured works, about strip, services list, testimonials, Instagram-style grid, contact CTA)
  - `portfolio.html` (Category filter buttons, masonry layout, keyboard-accessible lightbox)
  - `project.html` (Case study layout with dual image pairs, narrative blocks, quote, and next project navigator)
  - `about.html` (Portrait, narrative biography, client/award history, 4-step process, CV download)
  - `services.html` (3 structured commission tiers, FAQ accordion, booking link)
  - `contact.html` (Validated inquiry form with honeypot spam protection, direct email/phone/address)
  - `thank-you.html` (Inquiry confirmation screen)
  - `404.html` (Archival not-found screen)
- Pure vanilla JavaScript with zero framework dependencies (lightbox, filter, sticky header, mobile drawer, form validation).
- Centralized `assets/css/theme.css` with CSS custom properties for instant palette re-theming.
- Centralized `assets/js/config.js` for one-stop contact, brand, and social profile configuration.
- Pre-compiled production CSS in `assets/css/style.css` ensuring `index.html` runs by double-clicking it offline with no build step required.
- Self-hosted Cormorant Garamond & Inter `.woff2` font files.
- Complete documentation guides: `customization.md`, `deploy.md`, `seo-checklist.md`, `forms.md`.
