export interface Template {
  id: string;
  name: string;
  tagline: string;
  category: 'Coaches' | 'Creatives' | 'Service business';
  description: string;
  price: number;
  regularPrice?: number;
  status: 'available' | 'coming_soon';
  badge?: string;
  pagesCount: number;
  highlights: string[];
  features: string[];
  image: string;
  techStack: string;
}

export const TEMPLATES: Template[] = [
  {
    id: 'clarity',
    name: 'Clarity',
    tagline: 'The coach website template that gets you booked.',
    category: 'Coaches',
    description: 'A 5-page downloadable HTML + Tailwind CSS template with a clean discovery call booking flow. Edit in minutes, launch this weekend.',
    price: 59,
    regularPrice: 79,
    status: 'available',
    badge: 'Launch price',
    pagesCount: 5,
    highlights: ['5 Ready-to-use pages', 'No framework needed', 'Zero monthly fees', 'Lighthouse 98+'],
    features: [
      'Mobile-ready & responsive',
      'Easy colors & fonts via theme.css',
      'Strategic booking button placement',
      'Opt-in lead magnet section',
      'SEO meta tags & Open Graph ready',
      '10-minute setup guide included'
    ],
    image: 'clarity-preview',
    techStack: 'HTML5 · Tailwind CSS · Vanilla JS (No jQuery)'
  },
  {
    id: 'folio',
    name: 'Folio',
    tagline: 'Editorial and image-first template for photographers & artists.',
    category: 'Creatives',
    description: 'Generous white space, large responsive photo grids, masonry gallery with native accessible lightbox, and project case study layout.',
    price: 69,
    regularPrice: 89,
    status: 'available',
    badge: 'New Release',
    pagesCount: 8,
    highlights: ['Masonry gallery + Lightbox', 'Case study layout', 'Zero frameworks needed', 'Lighthouse 98+'],
    features: [
      'Interactive lightbox with keyboard arrows & Escape',
      'Editorial case study blueprint',
      'Services pricing table & FAQ accordion',
      'Honeypot-protected inquiry form',
      'prefers-reduced-motion scroll animations',
      'theme.css custom properties for 60-second color edits'
    ],
    image: 'folio-preview',
    techStack: 'HTML5 · Tailwind CSS 3 · Vanilla JS (No frameworks)'
  },
  {
    id: 'studio',
    name: 'Studio',
    tagline: 'High-converting website for boutique agencies & consultants.',
    category: 'Service business',
    description: 'Structured layout for service providers with multi-tier package displays, client onboarding questionnaire, and FAQ accordions.',
    price: 79,
    status: 'coming_soon',
    badge: 'Coming Soon',
    pagesCount: 7,
    highlights: ['Package tables', 'Team profiles', 'Client onboarding', 'SEO pre-tuned'],
    features: [
      'Multi-tier service packages',
      'Team & credentials section',
      'Process timeline blueprint',
      'Pre-configured consultation forms'
    ],
    image: 'studio-preview',
    techStack: 'HTML5 · Tailwind CSS · Vanilla JS'
  }
];
