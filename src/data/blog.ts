export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: 'Homepage' | 'About page' | 'Launch checklist' | 'Copywriting' | 'SEO';
  readTime: string;
  date: string;
  author: string;
  imageAlt: string;
  toc: { id: string; title: string }[];
  keyTakeaway: string;
  content: {
    heading?: string;
    paragraph?: string;
    bullets?: string[];
  }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'what-pages-does-a-coach-website-need',
    title: 'What pages does a coach website need?',
    summary: 'Skip the 15-page bloat. Discover the exact 5 core pages high-converting coaches use to educate visitors and book discovery calls.',
    category: 'Homepage',
    readTime: '4 min read',
    date: 'October 8, 2026',
    author: 'Alex Carter · Web Developer & Designer',
    imageAlt: 'Top-down flat lay of a website wireframe sketch on paper with sticky notes and a pencil',
    toc: [
      { id: 'the-core-five', title: '1. The Core 5 Framework' },
      { id: 'why-less-is-more', title: '2. Why Fewer Pages Drive More Bookings' },
      { id: 'the-ideal-visitor-journey', title: '3. Mapping the Discovery Flow' }
    ],
    keyTakeaway: 'You do not need an overwhelming mega-site. High-earning coaches only require five deliberate pages: Home, About, Work With Me, Book a Call, and a high-value Free Guide opt-in.',
    content: [
      {
        paragraph: 'When most coaches begin planning their website, they assume they need a massive labyrinth of pages: multiple tiers of archives, lengthy philosophical mission pages, and endless blog categories. But every extra decision you place in front of a prospective client is another opportunity for them to hesitate.'
      },
      {
        heading: '1. The Core 5 Framework',
        paragraph: 'Through reviewing hundreds of coaching sites, the winning structure is surprisingly lean and purposeful:',
        bullets: [
          'Home: Immediate clarity on who you serve, what outcomes you produce, and how to get started.',
          'About: Your origin story and philosophy framed through how it benefits your ideal client.',
          'Work With Me: Specific packages, who they are for, timeline, and exact investment range.',
          'Book a Call: A distraction-free page with embedded booking calendar and pre-call expectations.',
          'Free Guide: A dedicated landing page for your lead magnet to capture warm prospects not yet ready to book.'
        ]
      },
      {
        heading: '2. Why Fewer Pages Drive More Bookings',
        paragraph: 'A clean five-page site reduces cognitive load. Prospective clients arrive with a pressing problem. When your navigation is transparent and your primary call-to-action is consistently visible, booking a discovery call feels natural rather than salesy.'
      },
      {
        heading: '3. Mapping the Discovery Flow',
        paragraph: 'Every secondary page should have one clear next step: guiding visitors toward the "Work With Me" page or your lead magnet. Keep your header uncluttered and let your value shine through calm typography.'
      }
    ]
  },
  {
    id: '2',
    slug: 'coach-homepage-layout-that-gets-booked',
    title: 'Coach homepage layout that gets booked',
    summary: 'A step-by-step breakdown of the visual hierarchy, headline formula, and button placements that turn casual readers into consultation calls.',
    category: 'Copywriting',
    readTime: '6 min read',
    date: 'October 3, 2026',
    author: 'Alex Carter · Web Developer & Designer',
    imageAlt: 'A coach writing notes in a notebook near a window with a laptop open',
    toc: [
      { id: 'above-the-fold', title: '1. Above the Fold: The 5-Second Test' },
      { id: 'problem-validation', title: '2. Problem Agitation & Empathy Strip' },
      { id: 'the-solution-method', title: '3. Your Signature Process' },
      { id: 'social-proof-placement', title: '4. Evidence & Strategic Call-to-Action' }
    ],
    keyTakeaway: 'A winning coach homepage is not a digital resume. It is a roadmap that answers three questions in under 5 seconds: Who are you? Can you solve my problem? What should I click next?',
    content: [
      {
        paragraph: 'Your homepage is the front porch of your practice. If visitors cannot grasp what you do within the first 5 seconds, they will bounce back to Instagram or Google search.'
      },
      {
        heading: '1. Above the Fold: The 5-Second Test',
        paragraph: 'Lead with an unmistakable value proposition. Avoid vague taglines like "Embrace your inner journey". Instead, speak to the tangible transformation: "Executive coaching for newly promoted technical directors". Provide two clear buttons: one primary (solid) for discovery calls and one secondary (outline) for your free guide.'
      },
      {
        heading: '2. Problem Agitation & Empathy Strip',
        paragraph: 'Directly beneath your hero, validate the exact struggles your client experiences. Listing three specific pain points demonstrates that you understand their reality far deeper than generic advisers.'
      },
      {
        heading: '3. Your Signature Process',
        paragraph: 'People do not buy abstract hours; they invest in structured outcomes. Break down your coaching into 3 simple milestones: Discover, Strategize, and Execute.'
      }
    ]
  },
  {
    id: '3',
    slug: 'how-to-write-your-about-page-as-a-coach',
    title: 'How to write your About page as a coach',
    summary: 'Stop writing your autobiography. Learn how to craft an About page that positions you as the trusted guide and your client as the hero of the story.',
    category: 'About page',
    readTime: '5 min read',
    date: 'September 28, 2026',
    author: 'Alex Carter · Web Developer & Designer',
    imageAlt: 'Colored paper cards arranged like website sections on a beige table',
    toc: [
      { id: 'the-mirror-technique', title: '1. The "Mirror" Technique' },
      { id: 'the-three-paragraph-formula', title: '2. The 3-Paragraph Formula' },
      { id: 'credentials-without-bragging', title: '3. Tasteful Credentials & Philosophy' }
    ],
    keyTakeaway: 'The greatest secret of an About page is that it is secretly about your client. Frame every detail of your background through how it equips you to support them.',
    content: [
      {
        paragraph: 'The About page is frequently the second most visited URL on any coach\'s website. Visitors click it because they want to know if they can trust you, relate to you, and feel safe opening up to you.'
      },
      {
        heading: '1. The "Mirror" Technique',
        paragraph: 'Start by acknowledging the client\'s current reality. When you describe the exact dilemma they face, they think, "She truly gets where I am right now."'
      },
      {
        heading: '2. The 3-Paragraph Formula',
        paragraph: 'Structure your narrative cleanly: (1) Why you founded your practice, (2) What core principles govern how you work, and (3) The tangible results and calm reassurance your clients can expect.'
      },
      {
        heading: '3. Tasteful Credentials & Philosophy',
        paragraph: 'List certifications and experience not as trophies, but as reassurance of safety and tested frameworks. Close with a warm invitation to connect.'
      }
    ]
  },
  {
    id: '4',
    slug: 'launch-checklist-coach-website-weekend',
    title: 'The 27-point checklist to launch your coaching site in a weekend',
    summary: 'A complete pre-launch rundown covering domain setup, DNS records, mobile testing, and calendar links before sharing your link with the world.',
    category: 'Launch checklist',
    readTime: '7 min read',
    date: 'September 20, 2026',
    author: 'Alex Carter · Web Developer & Designer',
    imageAlt: 'A clean desk setup with a tablet showing launch checklist items',
    toc: [
      { id: 'technical-hygiene', title: '1. Technical Hygiene & SSL' },
      { id: 'booking-flow-audit', title: '2. Booking Flow & Form Verification' },
      { id: 'mobile-readability', title: '3. Mobile Readability Checks' }
    ],
    keyTakeaway: 'Avoid launching blindly. Running through a systematic technical and conversion checklist prevents broken booking links and missed clients on launch day.',
    content: [
      {
        paragraph: 'Launching a new website doesn\'t need to be stressful. By systematically testing the links, forms, and mobile layouts before your public announcement, you can go live with complete peace of mind.'
      },
      {
        heading: '1. Technical Hygiene & SSL',
        paragraph: 'Verify your custom domain has a valid HTTPS certificate, that www and non-www versions redirect seamlessly, and that favicon files display crisply in browser tabs.'
      },
      {
        heading: '2. Booking Flow & Form Verification',
        paragraph: 'Perform a test booking yourself. Ensure confirmation emails are sent, calendar invites generate accurately, and notifications land in your inbox.'
      }
    ]
  },
  {
    id: '5',
    slug: 'seo-basics-for-solo-coaches',
    title: 'SEO basics for solo coaches: Get found on Google without burning out',
    summary: 'How to optimize your page titles, meta descriptions, and localized keywords to attract clients searching for your exact specialization.',
    category: 'SEO',
    readTime: '5 min read',
    date: 'September 14, 2026',
    author: 'Alex Carter · Web Developer & Designer',
    imageAlt: 'Editorial shot of open notebook and laptop analyzing search visibility',
    toc: [
      { id: 'intent-over-volume', title: '1. High Intent vs High Volume Keywords' },
      { id: 'meta-perfection', title: '2. Crafting Titles that Earn Clicks' },
      { id: 'schema-markup', title: '3. Adding ProfessionalService Schema' }
    ],
    keyTakeaway: 'You do not need to compete for broad terms like "life coach". Target long-tail phrases that match your exact niche and location to attract warm, high-intent clients.',
    content: [
      {
        paragraph: 'Search Engine Optimization for coaches is not about gaming algorithms with spammy keywords. It is about clearly communicating your specialization so Google understands who you can help.'
      },
      {
        heading: '1. High Intent vs High Volume Keywords',
        paragraph: 'Broad terms like "career coach" are saturated by major consulting firms. Instead, optimize for specific phrases like "career coach for mid-level software managers" or "burnout coach for creative agency founders".'
      },
      {
        heading: '2. Crafting Titles that Earn Clicks',
        paragraph: 'Ensure each of your 5 core pages has a distinct title and meta description. Keep titles under 60 characters and write compelling descriptions under 155 characters that highlight outcomes.'
      }
    ]
  },
  {
    id: '6',
    slug: 'high-converting-lead-magnet-for-coaches',
    title: 'How to design a 1-page lead magnet that attracts paying clients',
    summary: 'Why 40-page eBooks fail and how a concise, actionable checklist or 1-page roadmap turns cold visitors into loyal subscribers.',
    category: 'Copywriting',
    readTime: '4 min read',
    date: 'September 5, 2026',
    author: 'Alex Carter · Web Developer & Designer',
    imageAlt: 'Printed minimalist worksheet and pen on natural wood desk',
    toc: [
      { id: 'the-quick-win-rule', title: '1. The Quick-Win Rule' },
      { id: 'designing-the-opt-in', title: '2. Frictionless Opt-In Forms' },
      { id: 'nurture-email-series', title: '3. Connecting the Welcome Sequence' }
    ],
    keyTakeaway: 'Clients want immediate relief, not homework. A high-converting lead magnet solves one ultra-specific problem in under 15 minutes and positions your coaching as the ultimate next step.',
    content: [
      {
        paragraph: 'Most prospective clients will not book a $2,000 package on their very first visit to your website. Capturing their email address through an irresistible free guide gives you permission to stay in touch.'
      },
      {
        heading: '1. The Quick-Win Rule',
        paragraph: 'Give away your best specific framework in an easily digestible checklist. When a prospect experiences a quick win from your free material, their confidence in your paid guidance skyrockets.'
      },
      {
        heading: '2. Frictionless Opt-In Forms',
        paragraph: 'Keep your opt-in form as simple as possible: just first name and email address. Avoid multi-step questionnaires until they are ready to schedule a discovery call.'
      }
    ]
  }
];
