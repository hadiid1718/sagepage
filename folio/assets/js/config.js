/**
 * FOLIO CONFIGURATION
 * Edit your details here once. All pages, mailto links, social handles,
 * and form endpoints across your website will update automatically.
 */
const FolioConfig = {
  // Your name or studio moniker
  brandName: "[Elena Rostova]",

  // Professional role / discipline
  role: "[Editorial Photographer & Visual Artist]",

  // Contact details
  email: "studio@elenarostova.com",
  phone: "+1 (555) 234-8901",
  location: "New York & Paris · Available Worldwide",

  // Social & scheduler links
  instagramUrl: "https://instagram.com/elenarostova",
  bookingUrl: "https://calendly.com",

  // Form endpoint (e.g. Formspree, Netlify Forms, Formkeep, or Formcarry)
  // Create your free endpoint at https://formspree.io and paste here:
  formUrl: "https://formspree.io/f/your-form-id"
};

// Expose globally for vanilla scripts
window.FolioConfig = FolioConfig;
