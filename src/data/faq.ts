export interface FAQItem {
  id: string;
  category: 'Buying' | 'Using' | 'Support';
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'run-it',
    category: 'Using',
    question: 'What do I need to run it?',
    answer: 'Just a modern web browser (Chrome, Safari, Firefox, Edge) and a free code editor like VS Code or Notepad. You don\'t need any paid subscriptions, expensive builders, or complex command-line tools. You can literally double-click index.html to preview it instantly.'
  },
  {
    id: 'need-code',
    category: 'Using',
    question: 'Do I need to know how to code?',
    answer: 'Only the very basics of editing text inside brackets in HTML! All your brand colors are isolated into a single theme.css file with clear labels (e.g., --color-sage), and your business name, email, and booking links are configured in one simple assets/js/config.js file. We also include a 5-minute brand quickstart guide.'
  },
  {
    id: 'what-included',
    category: 'Buying',
    question: 'What exactly do I get in the download?',
    answer: 'You receive an instant .zip archive containing 7 pre-built HTML pages (Home, About, Work With Me, Book a Call, Free Guide, Thank You, 404), compiled production CSS, editable Tailwind source, theme.css variables, vanilla JS interactivity, documentation guides (customization, deployment, SEO checklist, copywriting prompts, forms), and a clean LICENSE file.'
  },
  {
    id: 'clients',
    category: 'Buying',
    question: 'Can I use this template for client projects?',
    answer: 'Yes! The Standard license ($59) covers 1 website for yourself or 1 client project. If you are a web designer or virtual assistant building sites for multiple coaching clients, choose our Freelancer license ($129), which grants unlimited client websites with no resale of the raw template files.'
  },
  {
    id: 'refund-policy',
    category: 'Buying',
    question: 'What is your refund policy?',
    answer: 'We want you to feel completely confident. If you find the code defective or unable to be set up as described within 14 days of purchase, email our support team and we will issue a full refund with no hard feelings.'
  },
  {
    id: 'custom-domain',
    category: 'Using',
    question: 'Can I use my own custom domain?',
    answer: 'Absolutely. You can connect your custom domain (e.g. yourname.com) on free static hosts like Netlify, Cloudflare Pages, Vercel, GitHub Pages, or traditional cPanel shared hosting. Our included deploy.md guide walks you through connecting your domain in under 5 minutes.'
  },
  {
    id: 'change-colors',
    category: 'Using',
    question: 'Can I change the colors and fonts to match my branding?',
    answer: 'Yes! All colors are configured in assets/css/theme.css using standard CSS variables (--color-primary, --color-bg, etc.). Update the hex codes and the entire 5-page site adapts immediately. For fonts, you can swap to any Google Font or local webfont in minutes.'
  },
  {
    id: 'how-deploy',
    category: 'Using',
    question: 'How do I put it online?',
    answer: 'The fastest method takes 60 seconds: open Netlify Drop (app.netlify.com/drop) and drag your unzipped template folder straight into the browser window. It goes live with free SSL immediately. You can also connect GitHub or push to Vercel/Cloudflare Pages.'
  },
  {
    id: 'wordpress-support',
    category: 'Using',
    question: 'Does this template work with WordPress?',
    answer: 'No. Clarity is built as pure, modern HTML5, Tailwind CSS, and vanilla JavaScript. WordPress PHP themes are not supported. However, you can host your marketing and booking site as fast static HTML and link out to any external blog, LMS, or booking tool.'
  },
  {
    id: 'setup-services',
    category: 'Support',
    question: 'Do you offer done-for-you setup services?',
    answer: 'Yes! If you prefer a completely hands-off experience, we offer professional customization packages ranging from quick install & deploy ($99) to full brand & copy population ($299) and Launch Ready domain setup ($499).'
  },
  {
    id: 'support-works',
    category: 'Support',
    question: 'How does support work after purchase?',
    answer: 'Every purchase includes dedicated email support (support@sagepage.co) with a guaranteed response time of 1 to 2 business days. We help with setup questions, styling guidance, and deployment issues.'
  }
];
