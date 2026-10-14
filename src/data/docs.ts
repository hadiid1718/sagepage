export interface DocSection {
  id: string;
  title: string;
  description: string;
  badge?: string;
  toc: { id: string; label: string }[];
  content: {
    heading: string;
    subheading?: string;
    body: string;
    codeSnippet?: {
      language: string;
      filename?: string;
      code: string;
    };
    callout?: {
      type: 'tip' | 'warning' | 'note';
      text: string;
    };
  }[];
}

export const DOCS_SECTIONS: DocSection[] = [
  {
    id: 'getting-started',
    title: 'Getting started',
    description: 'Welcome to your Clarity template. Learn how the package is structured and what files are included.',
    badge: 'Basics',
    toc: [
      { id: 'package-overview', label: 'Package overview' },
      { id: 'folder-structure', label: 'Folder structure' },
      { id: 'system-requirements', label: 'System requirements' }
    ],
    content: [
      {
        heading: 'Package overview',
        body: 'Clarity is an ultra-fast, mobile-first website template built specifically for coaches and independent consultants. It is written in clean, standard HTML5 with Tailwind CSS and zero framework overhead. Everything runs directly in any modern browser without needing Node.js or a server build step.'
      },
      {
        heading: 'Folder structure',
        body: 'Here is the exact layout of your downloaded clarity-coach-template.zip archive. Every file has a designated, logical home:',
        codeSnippet: {
          language: 'bash',
          filename: 'clarity-coach-template/',
          code: `clarity-coach-template/
├── README.md                 # Quickstart & instructions
├── LICENSE.txt               # Usage license details
├── CHANGELOG.md             # Version history
├── package.json              # Optional build scripts
├── tailwind.config.js        # Design tokens
├── index.html                # Home page
├── about.html                # About story & philosophy
├── work-with-me.html         # Coaching packages & pricing
├── book-a-call.html          # Embedded calendar & checklist
├── free-guide.html           # Lead magnet landing page
├── thank-you.html            # Confirmation & delivery
├── 404.html                  # Branded error page
├── sitemap.xml               # Search engine index
├── robots.txt                # Crawler directives
├── assets/
│   ├── css/
│   │   ├── style.css         # Compiled production CSS
│   │   └── theme.css         # Brand colors as CSS variables
│   ├── js/
│   │   ├── main.js           # Menu, FAQ accordion, forms
│   │   └── config.js         # Brand name, email, booking URL
│   └── img/                  # Optimized WebP imagery
└── docs/                     # Full offline markdown guides`
        },
        callout: {
          type: 'tip',
          text: 'No npm install is mandatory! You can literally unzip the folder and double-click index.html to preview your website locally right away.'
        }
      },
      {
        heading: 'System requirements',
        body: 'Any computer running Windows, macOS, or Linux with a modern web browser (Google Chrome, Apple Safari, Microsoft Edge, or Mozilla Firefox) and a code editor like VS Code, Sublime Text, or Cursor.'
      }
    ]
  },
  {
    id: 'run-the-template',
    title: 'Run the template',
    description: 'Two simple ways to preview and edit your website locally.',
    toc: [
      { id: 'no-build-mode', label: '1. No-build mode' },
      { id: 'developer-mode', label: '2. Developer mode (Live reload)' }
    ],
    content: [
      {
        heading: '1. No-build mode (Beginner friendly)',
        body: 'If you do not want to install developer tools, simply unzip the file and open index.html in your browser. All styles are pre-compiled into assets/css/style.css, and brand colors can be customized via assets/css/theme.css.'
      },
      {
        heading: '2. Developer mode (Live reload)',
        body: 'If you are comfortable with the command line and prefer live-reloading during editing, open your terminal inside the folder and run:',
        codeSnippet: {
          language: 'bash',
          filename: 'Terminal',
          code: `# 1. Install optional dev dependencies
npm install

# 2. Start local preview server with live reload
npm run dev

# 3. Compile optimized production CSS
npm run build`
        },
        callout: {
          type: 'note',
          text: 'The local preview server runs at http://localhost:3000 and automatically refreshes whenever you save changes to your HTML files.'
        }
      }
    ]
  },
  {
    id: 'change-colors-and-fonts',
    title: 'Change colors and fonts',
    description: 'Customize your palette in 60 seconds without touching complex stylesheet rules.',
    toc: [
      { id: 'editing-theme-css', label: 'Editing theme.css' },
      { id: 'updating-fonts', label: 'Updating typography' }
    ],
    content: [
      {
        heading: 'Editing theme.css',
        body: 'Open assets/css/theme.css in your text editor. You will see intuitive CSS custom properties representing the palette. Simply replace the hex values with your own brand colors:',
        codeSnippet: {
          language: 'css',
          filename: 'assets/css/theme.css',
          code: `:root {
  /* Sagepage Studio default palette */
  --color-warm-white: #FAF7F2; /* Page background */
  --color-sage: #A3B18A;       /* Primary accent */
  --color-forest: #344E41;     /* Primary button & headings */
  --color-clay: #D9A68B;       /* Secondary highlight */
  --color-charcoal: #2B2B2B;   /* Readable body copy */
  --color-beige: #E9E4D8;      /* Card and border tint */
}`
        },
        callout: {
          type: 'tip',
          text: 'Because all pages reference these CSS variables, changing a hex value in theme.css updates all 7 pages across the site instantly!'
        }
      },
      {
        heading: 'Updating typography',
        body: 'Clarity is styled with DM Serif Display for elegant editorial titles and Inter for readable body text. To swap to a different font, update the Google Fonts <link> tags in the <head> of each HTML file, and adjust font-family in theme.css.'
      }
    ]
  },
  {
    id: 'edit-text-and-images',
    title: 'Edit text and images',
    description: 'How to replace bracket placeholders with your own words and photos.',
    toc: [
      { id: 'bracket-placeholders', label: 'Bracket placeholders' },
      { id: 'image-assets', label: 'Optimizing images' }
    ],
    content: [
      {
        heading: 'Bracket placeholders',
        body: 'Every editable section in the HTML contains clear bracket markers such as [Your Name], [Your Tagline], [Your Core Outcome], and HTML comments like <!-- EDIT: Hero Section -->. Simply search for [ in your editor to find every place where your personalized copy belongs.'
      },
      {
        heading: 'Optimizing images',
        body: 'For lightning-fast page speeds, keep your photos in WebP format and under 200 KB each. Replace the placeholder files in assets/img/ with your own headshots and lifestyle photos, keeping the same file names or updating the src attribute.'
      }
    ]
  },
  {
    id: 'connect-forms',
    title: 'Connect forms',
    description: 'Link your contact and opt-in forms to MailerLite, Formspree, or Netlify Forms.',
    toc: [
      { id: 'mailerlite-setup', label: 'MailerLite integration' },
      { id: 'formspree-setup', label: 'Formspree / Netlify forms' }
    ],
    content: [
      {
        heading: 'MailerLite integration',
        body: 'To deliver your Free Guide lead magnet via MailerLite, open assets/js/config.js and set your embedded form action URL:',
        codeSnippet: {
          language: 'javascript',
          filename: 'assets/js/config.js',
          code: `const SageConfig = {
  brandName: "Clarity Coaching",
  supportEmail: "hello@yourdomain.com",
  bookingUrl: "https://calendly.com/your-username/discovery-call",
  leadMagnetFormUrl: "https://subscribepage.io/your-mailerlite-id",
  contactFormUrl: "https://formspree.io/f/your-form-id"
};`
        },
        callout: {
          type: 'note',
          text: 'The included JavaScript in assets/js/main.js features client-side email validation and an invisible honeypot field to block automated spam.'
        }
      }
    ]
  },
  {
    id: 'add-your-booking-link',
    title: 'Add your booking link',
    description: 'Connect Calendly, Acuity Scheduling, SavvyCal, or tidycal in one line.',
    toc: [
      { id: 'calendar-integration', label: 'Calendar integration' }
    ],
    content: [
      {
        heading: 'Calendar integration',
        body: 'Open assets/js/config.js and paste your scheduler link into bookingUrl. On book-a-call.html, you can either keep the direct button redirection or paste your embed iframe code into the highlighted container.'
      }
    ]
  },
  {
    id: 'seo-setup',
    title: 'SEO setup',
    description: 'Ensure your site gets indexed correctly with clean meta tags and Open Graph cards.',
    toc: [
      { id: 'meta-tags', label: 'Meta tags & schema' }
    ],
    content: [
      {
        heading: 'Meta tags & schema',
        body: 'Each page includes dedicated <title>, <meta name="description">, and Open Graph share card tags. We also bundle a pre-configured schema.org ProfessionalService JSON-LD snippet in index.html to help Google display your coaching business in rich local snippets.'
      }
    ]
  },
  {
    id: 'deploy',
    title: 'Deploy',
    description: 'Publish your coaching website to the web for free with custom domain and SSL.',
    toc: [
      { id: 'drag-and-drop-netlify', label: 'Netlify Drop (Easiest)' },
      { id: 'cloudflare-vercel', label: 'Cloudflare Pages & Vercel' }
    ],
    content: [
      {
        heading: 'Netlify Drop (Easiest - 60 seconds)',
        body: '1. Navigate to app.netlify.com/drop in your web browser.\n2. Drag the entire unzipped clarity-coach-template folder into the upload target.\n3. Your site is live instantly! Click "Domain management" to add your custom domain.',
        callout: {
          type: 'tip',
          text: 'Netlify provides free automated SSL certificates and CDN global hosting with zero monthly costs for static websites.'
        }
      },
      {
        heading: 'Cloudflare Pages & Vercel',
        body: 'If you host your code on GitHub, connect your repository to Cloudflare Pages or Vercel. Set the output directory to root (.) with no build command needed.'
      }
    ]
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Quick solutions to the 5 most common questions.',
    toc: [
      { id: 'common-fixes', label: 'Common fixes' }
    ],
    content: [
      {
        heading: 'Common fixes',
        body: '1. Images not loading? Ensure your file paths are relative and case-sensitive (e.g. assets/img/portrait.webp).\n2. Colors not updating? Clear your browser cache or perform a hard refresh (Cmd+Shift+R / Ctrl+F5).\n3. Form submission error? Double check that your Formspree endpoint is set in assets/js/config.js.\n4. Fonts look different? Verify internet connection for Google Fonts CDN link in the head.\n5. Domain shows 404? Ensure your DNS CNAME points directly to your hosting provider.'
      }
    ]
  },
  {
    id: 'updates',
    title: 'Updates',
    description: 'How to receive new releases and maintenance improvements.',
    toc: [
      { id: 'accessing-updates', label: 'Accessing updates' }
    ],
    content: [
      {
        heading: 'Accessing updates',
        body: 'All template owners receive free lifetime updates. Whenever a new version is released, you will receive an automated download link in your email with a detailed CHANGELOG.md summary.'
      }
    ]
  }
];
