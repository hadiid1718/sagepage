import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  X as XIcon, 
  Layers, 
  Sparkles, 
  Download, 
  Code2, 
  Clock, 
  ExternalLink, 
  ShieldCheck, 
  ChevronDown, 
  FileText, 
  FolderTree, 
  CheckCircle2, 
  Smartphone, 
  Palette, 
  Globe, 
  HelpCircle 
} from 'lucide-react';
import { FAQ_ITEMS } from '../data/faq';
import { triggerZipDownload } from '../data/clarityTemplateZip';

interface ClaritySalesProps {
  navigate: (route: string) => void;
  onOpenCheckout: (tier?: 'standard' | 'freelancer' | 'bundle') => void;
}

export const ClaritySales: React.FC<ClaritySalesProps> = ({ navigate, onOpenCheckout }) => {
  const [activeFaq, setActiveFaq] = useState<string | null>('run-it');
  const [activePagePreview, setActivePagePreview] = useState<'home' | 'about' | 'work' | 'book' | 'free'>('home');

  const salesFaqs = FAQ_ITEMS.slice(0, 6);

  return (
    <div className="space-y-16 sm:space-y-24 lg:space-y-32 pb-36 sm:pb-40">
      {/* 1. HERO */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E4D8] text-[#344E41] text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#D9A68B]" />
            <span>Launch Edition · Save $20 Today</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#344E41] tracking-tight leading-[1.1]">
            Clarity: the coach website template that gets you booked.
          </h1>

          <p className="text-lg sm:text-xl text-[#2B2B2B]/80 max-w-2xl mx-auto leading-relaxed">
            A 5-page downloadable HTML + Tailwind CSS template with a clear booking flow. Edit in minutes. Launch in a weekend.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenCheckout('standard')}
              className="px-8 py-4 rounded-full bg-[#344E41] hover:bg-[#283d33] text-white font-medium text-base shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer min-h-[44px]"
            >
              <span>Get Clarity for $59</span>
              <ArrowRight className="w-4 h-4 text-[#FAF7F2]" />
            </button>
            <button
              onClick={() => navigate('live-demo')}
              className="px-8 py-4 rounded-full border border-[#344E41] text-[#344E41] hover:bg-[#E9E4D8]/40 font-medium text-base transition-colors flex items-center gap-2 cursor-pointer min-h-[44px]"
            >
              <Layers className="w-4 h-4" />
              <span>View the live demo</span>
            </button>
          </div>

          <p className="text-xs text-[#2B2B2B]/60 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#344E41]" />
            <span>Instant access. Works with any static host. 14-day refund guarantee.</span>
          </p>
        </div>

        {/* Hero Visual Mockup */}
        <div className="mt-12 bg-[#FAF7F2] border border-[#E9E4D8] rounded-3xl p-4 sm:p-8 shadow-xl max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#E9E4D8] overflow-hidden shadow-inner">
            <div className="px-4 py-3 bg-[#FAF7F2] border-b border-[#E9E4D8] flex items-center justify-between text-xs text-[#2B2B2B]/60">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="font-mono text-[11px] ml-2">demo.sagepage.co/clarity</span>
              </div>
              <button
                onClick={() => navigate('live-demo')}
                className="text-[#344E41] font-semibold flex items-center gap-1 hover:underline"
              >
                <span>Interactive Preview</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
            
            <div className="p-8 sm:p-12 bg-gradient-to-br from-[#FAF7F2] via-white to-[#FAF7F2] text-center space-y-4">
              <span className="text-xs uppercase font-bold text-[#A3B18A] tracking-wider">
                1:1 Executive & Leadership Mentorship
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#344E41] font-bold max-w-2xl mx-auto leading-tight">
                Stop second-guessing. Start leading with calm clarity.
              </h2>
              <p className="text-sm sm:text-base text-[#2B2B2B]/70 max-w-lg mx-auto">
                Help leaders eliminate burnout and build high-impact teams in 90 days.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <span className="px-5 py-2.5 rounded-full bg-[#344E41] text-white text-xs font-semibold">
                  Book a Discovery Call
                </span>
                <span className="px-5 py-2.5 rounded-full border border-[#344E41] text-[#344E41] text-xs font-semibold">
                  Free 27-Point Guide
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM STRIP: 'Your website should help people say yes' */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#E9E4D8] shadow-xs">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D9A68B]">
              The Core Problem
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#344E41] mt-1">
              Your website should help people say yes.
            </h2>
            <p className="text-base text-[#2B2B2B]/80 mt-2">
              Instead, most coach websites unintentionally create friction and lost discovery calls:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2 p-4 bg-[#FAF7F2] rounded-2xl border border-[#E9E4D8]/60">
              <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-sm">
                ✕
              </div>
              <h3 className="font-serif text-lg font-bold text-[#344E41]">Vague, Philosophical Copy</h3>
              <p className="text-xs text-[#2B2B2B]/75 leading-relaxed">
                Taglines like "Step into your sacred potential" confuse prospective clients. If they can’t tell what specific problem you solve, they bounce.
              </p>
            </div>

            <div className="space-y-2 p-4 bg-[#FAF7F2] rounded-2xl border border-[#E9E4D8]/60">
              <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-sm">
                ✕
              </div>
              <h3 className="font-serif text-lg font-bold text-[#344E41]">Cluttered DIY Layouts</h3>
              <p className="text-xs text-[#2B2B2B]/75 leading-relaxed">
                Bloated WordPress plugins, broken mobile buttons, and mismatched fonts make seasoned experts look like amateurs before the first call.
              </p>
            </div>

            <div className="space-y-2 p-4 bg-[#FAF7F2] rounded-2xl border border-[#E9E4D8]/60">
              <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-sm">
                ✕
              </div>
              <h3 className="font-serif text-lg font-bold text-[#344E41]">Buried Booking Calendar</h3>
              <p className="text-xs text-[#2B2B2B]/75 leading-relaxed">
                When scheduling a call requires navigating a labyrinth of menus and lengthy forms, high-intent prospects give up and look elsewhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT YOU GET: 5 Page Screenshots & Previews */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A3B18A]">
            Complete 5-Page Suite
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#344E41] mt-1">
            What You Get in the Clarity Package
          </h2>
          <p className="text-base text-[#2B2B2B]/80 mt-2">
            Five deliberate pages engineered for the complete client discovery cycle.
          </p>

          {/* Interactive tab selector for previewing pages */}
          <div className="pt-6 flex flex-wrap justify-center gap-2">
            {[
              { id: 'home', label: '1. Home Page' },
              { id: 'about', label: '2. About Page' },
              { id: 'work', label: '3. Work With Me' },
              { id: 'book', label: '4. Book a Call' },
              { id: 'free', label: '5. Free Guide' }
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePagePreview(p.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activePagePreview === p.id
                    ? 'bg-[#344E41] text-white shadow-xs'
                    : 'bg-white border border-[#E9E4D8] text-[#2B2B2B]/80 hover:bg-[#FAF7F2]'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Display Current Selected Page Feature */}
        <div className="bg-white rounded-3xl border border-[#E9E4D8] p-6 sm:p-10 shadow-sm">
          {activePagePreview === 'home' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#A3B18A] uppercase tracking-wider">Page 01</span>
                <h3 className="font-serif text-3xl font-bold text-[#344E41]">Home (index.html)</h3>
                <p className="text-sm text-[#2B2B2B]/80 leading-relaxed">
                  Passes the 5-second test with high-impact value proposition, trust stats, 3-point problem agitation, your 3-step signature methodology, and client testimonial proof.
                </p>
                <ul className="space-y-2 text-xs text-[#2B2B2B]/80">
                  <li className="flex items-center gap-2">✓ Two-column hero with image container</li>
                  <li className="flex items-center gap-2">✓ 4-metric trust reassurance strip</li>
                  <li className="flex items-center gap-2">✓ Built-in Freebie lead capture container</li>
                </ul>
              </div>
              <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E9E4D8] space-y-3">
                <div className="w-1/3 h-2 bg-[#A3B18A] rounded" />
                <div className="w-3/4 h-5 bg-[#344E41] rounded" />
                <div className="w-full h-12 bg-white rounded-lg border border-[#E9E4D8] p-3 text-[11px] text-[#2B2B2B]/70">
                  "Stop second-guessing. Start leading with calm clarity."
                </div>
                <div className="flex gap-2">
                  <div className="w-24 h-6 bg-[#344E41] rounded-full" />
                  <div className="w-20 h-6 border border-[#344E41] rounded-full" />
                </div>
              </div>
            </div>
          )}

          {activePagePreview === 'about' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#D9A68B] uppercase tracking-wider">Page 02</span>
                <h3 className="font-serif text-3xl font-bold text-[#344E41]">About (about.html)</h3>
                <p className="text-sm text-[#2B2B2B]/80 leading-relaxed">
                  Structured using the "Mirror" technique. Connects your personal journey directly to how it empowers your clients, with 3 credential value cards and expectations list.
                </p>
                <ul className="space-y-2 text-xs text-[#2B2B2B]/80">
                  <li className="flex items-center gap-2">✓ 3-Paragraph narrative formula</li>
                  <li className="flex items-center gap-2">✓ Certification & credential highlight cards</li>
                  <li className="flex items-center gap-2">✓ Direct path to booking</li>
                </ul>
              </div>
              <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E9E4D8] space-y-3">
                <div className="w-24 h-4 bg-[#344E41] rounded" />
                <div className="p-4 bg-white rounded-xl border border-[#E9E4D8] text-xs text-[#2B2B2B]/70 space-y-2">
                  <p className="font-semibold text-[#344E41]">"Your leadership should feel purposeful, not exhausting."</p>
                  <p>Paragraph 1: Why I became a coach...</p>
                  <p>Paragraph 2: The philosophy of sustainable growth...</p>
                </div>
              </div>
            </div>
          )}

          {activePagePreview === 'work' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#344E41] uppercase tracking-wider">Page 03</span>
                <h3 className="font-serif text-3xl font-bold text-[#344E41]">Work With Me (work-with-me.html)</h3>
                <p className="text-sm text-[#2B2B2B]/80 leading-relaxed">
                  Eliminates awkward pricing conversations. Clean card comparisons for private 1:1 mentorship and intensive roadmap sessions with deliverables checklist.
                </p>
                <ul className="space-y-2 text-xs text-[#2B2B2B]/80">
                  <li className="flex items-center gap-2">✓ Side-by-side package tiers</li>
                  <li className="flex items-center gap-2">✓ Transparent investment figures ($)</li>
                  <li className="flex items-center gap-2">✓ Direct application buttons</li>
                </ul>
              </div>
              <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E9E4D8] grid grid-cols-2 gap-3">
                <div className="p-3 bg-white rounded-xl border border-[#344E41]">
                  <p className="font-serif font-bold text-xs text-[#344E41]">1:1 Intensive</p>
                  <p className="font-serif text-base font-bold text-[#344E41] mt-1">$2,400</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E9E4D8]">
                  <p className="font-serif font-bold text-xs text-[#344E41]">Roadmap Day</p>
                  <p className="font-serif text-base font-bold text-[#344E41] mt-1">$950</p>
                </div>
              </div>
            </div>
          )}

          {activePagePreview === 'book' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#A3B18A] uppercase tracking-wider">Page 04</span>
                <h3 className="font-serif text-3xl font-bold text-[#344E41]">Book a Call (book-a-call.html)</h3>
                <p className="text-sm text-[#2B2B2B]/80 leading-relaxed">
                  A dedicated conversion landing page. Connects to Calendly, Acuity, SavvyCal, or tidycal with pre-call guidelines and zero distracting menus.
                </p>
                <ul className="space-y-2 text-xs text-[#2B2B2B]/80">
                  <li className="flex items-center gap-2">✓ Clean calendar embed container</li>
                  <li className="flex items-center gap-2">✓ "What to expect" 3-point agenda</li>
                  <li className="flex items-center gap-2">✓ Connects via single line in config.js</li>
                </ul>
              </div>
              <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E9E4D8] text-center space-y-2">
                <Clock className="w-8 h-8 text-[#A3B18A] mx-auto" />
                <p className="font-serif font-bold text-sm text-[#344E41]">Schedule Your 30-Minute Call</p>
                <div className="p-3 bg-white rounded-lg border border-[#E9E4D8] text-[11px] text-[#2B2B2B]/70">
                  [Calendly / Scheduler Embed Container]
                </div>
              </div>
            </div>
          )}

          {activePagePreview === 'free' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#D9A68B] uppercase tracking-wider">Page 05</span>
                <h3 className="font-serif text-3xl font-bold text-[#344E41]">Free Guide (free-guide.html)</h3>
                <p className="text-sm text-[#2B2B2B]/80 leading-relaxed">
                  Turn cold visitors into subscribers. Features a 3-bullet outcome promise, frictionless 2-field form with honeypot spam protection, and auto-redirect to thank-you.html.
                </p>
                <ul className="space-y-2 text-xs text-[#2B2B2B]/80">
                  <li className="flex items-center gap-2">✓ MailerLite, Formspree, or Netlify forms ready</li>
                  <li className="flex items-center gap-2">✓ Honeypot spam filtering built-in</li>
                  <li className="flex items-center gap-2">✓ Pairs with thank-you.html delivery page</li>
                </ul>
              </div>
              <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E9E4D8] text-center space-y-2">
                <FileText className="w-8 h-8 text-[#D9A68B] mx-auto" />
                <p className="font-serif font-bold text-sm text-[#344E41]">27-Point Executive Checklist</p>
                <div className="p-3 bg-white rounded-lg border border-[#E9E4D8] text-[11px] text-[#2B2B2B]/70">
                  [First Name + Email Opt-In Form]
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. TECH SPEC BOX & FILE TREE PREVIEW */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Tech Spec Box */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-[#E9E4D8] space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#344E41]">
              <Code2 className="w-4 h-4 text-[#A3B18A]" />
              <span>Technical Specification</span>
            </div>
            
            <h3 className="font-serif text-2xl font-bold text-[#344E41]">
              Built for Speed & Clean Longevity
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-[#E9E4D8]">
                <span className="text-[#2B2B2B]/70">Stack:</span>
                <span className="font-mono font-medium text-[#344E41]">HTML5 + Tailwind CSS + Vanilla JS</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#E9E4D8]">
                <span className="text-[#2B2B2B]/70">Dependencies:</span>
                <span className="font-mono font-medium text-[#344E41]">Zero (No jQuery, No React required)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#E9E4D8]">
                <span className="text-[#2B2B2B]/70">Lighthouse Performance:</span>
                <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">98 - 100 Mobile</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#E9E4D8]">
                <span className="text-[#2B2B2B]/70">Bundle Size:</span>
                <span className="font-mono font-medium text-[#344E41]">~180 KB total package</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#E9E4D8]">
                <span className="text-[#2B2B2B]/70">Accessibility:</span>
                <span className="font-mono font-medium text-[#344E41]">WCAG AA Compliant</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-[#2B2B2B]/70">File Count:</span>
                <span className="font-mono font-medium text-[#344E41]">22 curated source files</span>
              </div>
            </div>

            <button
              onClick={() => triggerZipDownload()}
              className="w-full py-3 rounded-full border border-[#344E41] hover:bg-[#FAF7F2] text-[#344E41] text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Free Package Sample (.zip)</span>
            </button>
          </div>

          {/* File Tree Preview */}
          <div className="lg:col-span-7 bg-[#1E1E1E] text-[#FAF7F2] p-8 rounded-3xl border border-black/20 font-mono text-xs overflow-x-auto shadow-lg">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <span className="text-white/60 flex items-center gap-2">
                <FolderTree className="w-4 h-4 text-[#A3B18A]" />
                clarity-coach-template/ (Exact Package Contents)
              </span>
              <span className="text-[11px] text-[#A3B18A] bg-[#A3B18A]/20 px-2 py-0.5 rounded">
                Standard Structure
              </span>
            </div>

            <pre className="text-white/80 leading-relaxed text-[11px] sm:text-xs">
{`clarity-coach-template/
├── README.md               # Quickstart guide (run in 3 steps)
├── LICENSE.txt             # License terms & usage rights
├── CHANGELOG.md           # Version release notes
├── package.json            # Scripts: dev, build, preview
├── tailwind.config.js      # Color & font token registry
├── index.html              # Core Home page
├── about.html              # About story & credentials
├── work-with-me.html       # Coaching programs & rates
├── book-a-call.html        # Embedded booking calendar
├── free-guide.html         # Lead magnet opt-in page
├── thank-you.html          # Confirmation & download
├── 404.html                # Branded error page
├── sitemap.xml             # Search engine index
├── robots.txt              # Search crawler directives
├── site.webmanifest        # PWA & mobile bookmarking
├── assets/
│   ├── css/
│   │   ├── style.css       # Compiled CSS (works with no build!)
│   │   └── theme.css       # Brand colors as CSS variables
│   ├── js/
│   │   ├── main.js         # Mobile drawer, FAQ, validation
│   │   └── config.js       # Central brand name, email, booking URL
│   └── img/                # WebP images & favicon set
└── docs/
    ├── customization.md    # 5-minute brand change guide
    ├── deploy.md           # Netlify, Cloudflare, Vercel, cPanel
    ├── seo-checklist.md    # Meta tags & schema checklist
    ├── copy-prompts.md     # Fill-in prompts for every section
    └── forms.md            # Connect MailerLite, Formspree, Netlify`}
            </pre>
          </div>
        </div>
      </section>

      {/* 5. 'WORKS WITH' STRIP */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] border border-[#E9E4D8] rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A3B18A]">
            Hosting Flexibility
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#344E41]">
            Works with any modern static web host
          </h3>
          <p className="text-sm text-[#2B2B2B]/80 max-w-xl mx-auto">
            Deploy for $0 on Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any traditional cPanel Apache/Nginx web hosting.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-semibold text-[#344E41]">
            <span className="px-4 py-2 bg-white rounded-full border border-[#E9E4D8]">✓ Netlify Drop (60 sec)</span>
            <span className="px-4 py-2 bg-white rounded-full border border-[#E9E4D8]">✓ Cloudflare Pages</span>
            <span className="px-4 py-2 bg-white rounded-full border border-[#E9E4D8]">✓ Vercel</span>
            <span className="px-4 py-2 bg-white rounded-full border border-[#E9E4D8]">✓ cPanel / Shared Hosting</span>
          </div>

          <p className="text-[11px] text-[#2B2B2B]/60 pt-2">
            *Note: As clean static HTML, WordPress PHP themes are not supported. Host your static marketing pages directly for 10x speed.
          </p>
        </div>
      </section>

      {/* 6. BEFORE & AFTER COMPARISON (messy DIY site next to Clarity) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#D9A68B]">
            Transformation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#344E41] mt-1">
            Before & After Clarity
          </h2>
          <p className="text-sm text-[#2B2B2B]/80 mt-2">
            See the tangible difference between a cobbled-together DIY site and an intentional coach template.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Before: Messy DIY Site */}
          <div className="bg-white p-8 rounded-3xl border border-rose-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">Before</span>
              <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold">Messy DIY Site</span>
            </div>

            <h4 className="font-serif text-xl font-bold text-[#2B2B2B]">
              The Frustrating DIY Dilemma
            </h4>

            <ul className="space-y-3 text-xs text-[#2B2B2B]/80">
              <li className="flex items-start gap-2">
                <XIcon className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>$29 to $49 monthly builder subscription recurring forever</span>
              </li>
              <li className="flex items-start gap-2">
                <XIcon className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Heavy bloated scripts that take 4+ seconds to load on mobile</span>
              </li>
              <li className="flex items-start gap-2">
                <XIcon className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Vague headlines that leave prospective clients wondering what you do</span>
              </li>
              <li className="flex items-start gap-2">
                <XIcon className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Spending weeks tweaking margins and wrestling with broken plugins</span>
              </li>
            </ul>
          </div>

          {/* After: Clarity */}
          <div className="bg-[#FAF7F2] p-8 rounded-3xl border-2 border-[#344E41] shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#344E41] uppercase tracking-wider">After</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#344E41] text-white text-xs font-semibold">With Clarity</span>
            </div>

            <h4 className="font-serif text-xl font-bold text-[#344E41]">
              Calm, Professional Authority
            </h4>

            <ul className="space-y-3 text-xs text-[#2B2B2B]/85">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#A3B18A] shrink-0 mt-0.5" />
                <span>One-time purchase ($59). Zero monthly software rent. You own your code.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#A3B18A] shrink-0 mt-0.5" />
                <span>Lighthouse 98+ speed: instant page flips that keep visitors engaged.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#A3B18A] shrink-0 mt-0.5" />
                <span>Clear 5-page conversion funnel designed specifically for coaches.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#A3B18A] shrink-0 mt-0.5" />
                <span>Launch in one weekend with our 10-minute quickstart video guide.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. LICENSE TIERS TABLE & PRICING BOX */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A3B18A]">
            Transparent Pricing
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#344E41] mt-1">
            Choose Your License
          </h2>
          <p className="text-sm text-[#2B2B2B]/80 mt-2">
            One-time purchase with instant zip delivery and free lifetime updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Standard License */}
          <div className="bg-white rounded-3xl p-8 border-2 border-[#344E41] shadow-xl relative flex flex-col justify-between">
            <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#D9A68B] text-white text-xs font-bold uppercase tracking-wider">
              Launch Deal ($20 off)
            </div>

            <div className="space-y-4">
              <span className="text-xs font-bold text-[#344E41] uppercase tracking-wider">Standard License</span>
              <h3 className="font-serif text-3xl font-bold text-[#344E41]">Single Site</h3>
              <p className="text-xs text-[#2B2B2B]/70">
                Perfect for solo coaches, therapists, and consultants launching their own brand.
              </p>

              <div className="py-4 border-y border-[#E9E4D8] flex items-baseline gap-2">
                <span className="text-base text-[#2B2B2B]/50 line-through font-serif">$79</span>
                <span className="font-serif text-4xl font-bold text-[#344E41]">$59</span>
                <span className="text-xs text-[#2B2B2B]/60">one-time</span>
              </div>

              <ul className="space-y-2.5 text-xs text-[#2B2B2B]/85">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#A3B18A] shrink-0" />
                  <span>1 Website for yourself or 1 client</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#A3B18A] shrink-0" />
                  <span>All 5 Core Pages + Thank You & 404</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#A3B18A] shrink-0" />
                  <span>Editable theme.css & config.js</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#A3B18A] shrink-0" />
                  <span>10-Minute Setup Video Masterclass</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#A3B18A] shrink-0" />
                  <span>Email support (1 to 2 business days)</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenCheckout('standard')}
              className="mt-8 w-full py-4 rounded-full bg-[#344E41] hover:bg-[#283d33] text-white font-medium text-sm transition-colors cursor-pointer min-h-[44px]"
            >
              Get Clarity Standard ($59)
            </button>
          </div>

          {/* Freelancer License */}
          <div className="bg-white rounded-3xl p-8 border border-[#E9E4D8] shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#A3B18A] uppercase tracking-wider">Freelancer License</span>
              <h3 className="font-serif text-3xl font-bold text-[#344E41]">Unlimited Clients</h3>
              <p className="text-xs text-[#2B2B2B]/70">
                For web designers, copywriters, and VAs creating sites for paying clients.
              </p>

              <div className="py-4 border-y border-[#E9E4D8]">
                <span className="font-serif text-4xl font-bold text-[#344E41]">$129</span>
                <span className="text-xs text-[#2B2B2B]/60 ml-2">one-time</span>
              </div>

              <ul className="space-y-2.5 text-xs text-[#2B2B2B]/85">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#A3B18A] shrink-0" />
                  <span>Unlimited client websites</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#A3B18A] shrink-0" />
                  <span>No resale of raw template files</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#A3B18A] shrink-0" />
                  <span>Client handoff documentation guide</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#A3B18A] shrink-0" />
                  <span>Priority developer support</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenCheckout('freelancer')}
              className="mt-8 w-full py-4 rounded-full border border-[#344E41] text-[#344E41] hover:bg-[#FAF7F2] font-medium text-sm transition-colors cursor-pointer min-h-[44px]"
            >
              Get Freelancer License ($129)
            </button>
          </div>

          {/* Bundle */}
          <div className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#E9E4D8] shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#D9A68B] uppercase tracking-wider">Studio Suite</span>
              <h3 className="font-serif text-3xl font-bold text-[#344E41]">3 Templates</h3>
              <p className="text-xs text-[#2B2B2B]/70">
                Get Clarity (Coaches) now + Folio (Creatives) and Studio (Agencies) on release.
              </p>

              <div className="py-4 border-y border-[#E9E4D8]">
                <span className="font-serif text-4xl font-bold text-[#344E41]">$149</span>
                <span className="text-xs text-[#2B2B2B]/60 ml-2">save $58</span>
              </div>

              <ul className="space-y-2.5 text-xs text-[#2B2B2B]/85">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#A3B18A] shrink-0" />
                  <span>Standard licenses for all 3 templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#A3B18A] shrink-0" />
                  <span>Immediate access to Clarity today</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#A3B18A] shrink-0" />
                  <span>VIP early drops of Folio & Studio</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenCheckout('bundle')}
              className="mt-8 w-full py-4 rounded-full border border-[#344E41] text-[#344E41] hover:bg-white font-medium text-sm transition-colors cursor-pointer min-h-[44px]"
            >
              Get Bundle Pass ($149)
            </button>
          </div>
        </div>
      </section>

      {/* 8. FAQ WITH 6 QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A3B18A]">
            Questions Answered
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#344E41] mt-1">
            Clarity Template FAQ
          </h2>
        </div>

        <div className="space-y-3">
          {salesFaqs.map((faq) => {
            const isOpen = activeFaq === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#E9E4D8] overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-serif text-lg font-bold text-[#344E41] hover:text-[#283d33] cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span className={`w-8 h-8 rounded-full bg-[#FAF7F2] flex items-center justify-center text-sm font-sans shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-[#E9E4D8]' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-[#344E41]" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#2B2B2B]/80 leading-relaxed border-t border-[#FAF7F2]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. FINAL CTA: 'Launch your coach website this weekend.' */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#344E41] text-[#FAF7F2] rounded-3xl p-10 sm:p-16 text-center space-y-6 shadow-xl">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#FAF7F2] text-xs font-semibold">
            One Weekend Away From Launch
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white max-w-2xl mx-auto leading-tight">
            Launch your coach website this weekend.
          </h2>
          <p className="text-base sm:text-lg text-[#FAF7F2]/80 max-w-xl mx-auto">
            Stop putting it off. Download Clarity now, add your words, hook up your calendar, and share your new site with pride.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenCheckout('standard')}
              className="px-8 py-4 rounded-full bg-[#FAF7F2] hover:bg-white text-[#344E41] font-semibold text-base transition-all shadow-md min-h-[44px] cursor-pointer"
            >
              Get Clarity for $59 (Instant Zip)
            </button>
            <button
              onClick={() => navigate('live-demo')}
              className="px-8 py-4 rounded-full border border-white/50 hover:bg-white/10 text-white font-medium text-base transition-colors min-h-[44px] cursor-pointer"
            >
              Test Live Demo First
            </button>
          </div>
        </div>
      </section>

      {/* 10. STICKY MOBILE BUY BAR (with safe area support & no overlap) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E9E4D8] px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom,0px))] shadow-lg flex items-center justify-between">
        <div>
          <span className="font-serif font-bold text-sm text-[#344E41]">Clarity Template</span>
          <div className="flex items-center gap-1.5 text-xs text-[#2B2B2B]/70">
            <span className="line-through text-[11px]">$79</span>
            <span className="font-bold text-[#344E41]">$59 Launch</span>
          </div>
        </div>
        <button
          onClick={() => onOpenCheckout('standard')}
          className="px-5 py-2.5 rounded-full bg-[#344E41] text-white text-xs font-semibold shadow-xs flex items-center gap-1 min-h-[44px] touch-target active:scale-95"
        >
          <span>Get Clarity ($59)</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
