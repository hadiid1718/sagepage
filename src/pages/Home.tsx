import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  Sparkles, 
  Download, 
  Code2, 
  Video, 
  RefreshCw, 
  ExternalLink, 
  CheckCircle2, 
  Laptop, 
  Smartphone, 
  Layers,
  ChevronDown,
  ShieldCheck,
  FileCode2,
  Clock
} from 'lucide-react';
import { TEMPLATES } from '../data/templates';
import { FAQ_ITEMS } from '../data/faq';

interface HomeProps {
  navigate: (route: string) => void;
  onOpenCheckout: (tier?: 'standard' | 'freelancer' | 'bundle') => void;
  onOpenNotify: (name: string) => void;
}

export const Home: React.FC<HomeProps> = ({ navigate, onOpenCheckout, onOpenNotify }) => {
  const [checklistEmail, setChecklistEmail] = useState('');
  const [checklistName, setChecklistName] = useState('');
  const [checklistSubmitted, setChecklistSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<string | null>('run-it');
  const [previewTab, setPreviewTab] = useState<'desktop' | 'mobile'>('desktop');

  const handleChecklistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checklistEmail) return;
    setChecklistSubmitted(true);
    /*
      COMMENT: MailerLite lead magnet endpoint hook
    */
    setTimeout(() => {
      navigate('thank-you');
    }, 400);
  };

  const homeFaqs = FAQ_ITEMS.slice(0, 5);

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E4D8]/80 border border-[#E9E4D8] text-[#344E41] text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#D9A68B]" />
              <span>Code templates for coaches</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#344E41] tracking-tight leading-[1.08]">
              Look professional. <br />
              <span className="italic font-normal">Get booked.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#2B2B2B]/80 max-w-lg leading-relaxed">
              Edit in minutes. Launch in a weekend. No designer needed. Clean downloadable HTML & Tailwind website templates made for coaches.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => navigate('clarity-sales')}
                className="px-8 py-4 rounded-full bg-[#344E41] hover:bg-[#283d33] text-white font-medium text-base shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer min-h-[44px]"
              >
                <span>View the template</span>
                <ArrowRight className="w-4 h-4 text-[#FAF7F2]" />
              </button>
              
              <button
                onClick={() => navigate('free-checklist')}
                className="px-8 py-4 rounded-full border border-[#344E41] hover:bg-[#E9E4D8]/40 text-[#344E41] font-medium text-base transition-colors min-h-[44px] cursor-pointer"
              >
                Free checklist
              </button>
            </div>

            {/* Quick reassurance points */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#2B2B2B]/75 border-t border-[#E9E4D8]/60">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#A3B18A]" />
                Zero subscriptions
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#A3B18A]" />
                Double-click to open
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#A3B18A]" />
                14-Day refund policy
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Mockup (Laptop & Phone preview) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-xl">
              {/* Background ambient decorative card */}
              <div className="absolute inset-0 bg-[#E9E4D8]/60 rounded-3xl transform rotate-1 scale-[0.98]" />

              <div className="relative bg-[#FAF7F2] border border-[#E9E4D8] rounded-3xl p-5 sm:p-7 shadow-xl">
                {/* Mockup Top Header Switch */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E9E4D8]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono text-[#2B2B2B]/60 ml-2">clarity-coach-template/</span>
                  </div>

                  <div className="flex items-center gap-1 bg-[#E9E4D8]/60 p-1 rounded-xl text-xs">
                    <button
                      onClick={() => setPreviewTab('desktop')}
                      className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-colors ${
                        previewTab === 'desktop' ? 'bg-white text-[#344E41] font-semibold shadow-xs' : 'text-[#2B2B2B]/60'
                      }`}
                    >
                      <Laptop className="w-3.5 h-3.5" />
                      <span>Laptop</span>
                    </button>
                    <button
                      onClick={() => setPreviewTab('mobile')}
                      className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-colors ${
                        previewTab === 'mobile' ? 'bg-white text-[#344E41] font-semibold shadow-xs' : 'text-[#2B2B2B]/60'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Phone</span>
                    </button>
                  </div>
                </div>

                {/* Simulated live template frame preview */}
                <div className="mt-4 rounded-2xl overflow-hidden border border-[#E9E4D8] bg-white aspect-[16/10] relative flex flex-col shadow-inner">
                  {previewTab === 'desktop' ? (
                    <div className="p-5 flex-1 flex flex-col justify-between bg-gradient-to-br from-[#FAF7F2] to-white">
                      <div className="flex justify-between items-center pb-3 border-b border-[#E9E4D8]/80 text-[11px]">
                        <span className="font-serif font-bold text-[#344E41]">Clarity Coaching</span>
                        <div className="flex gap-3 text-[#2B2B2B]/70">
                          <span>About</span>
                          <span>Services</span>
                          <span className="font-semibold text-[#344E41]">Book Call</span>
                        </div>
                      </div>

                      <div className="my-auto py-3 space-y-2">
                        <span className="text-[10px] uppercase font-bold text-[#A3B18A] tracking-wider">
                          1:1 Executive Coaching
                        </span>
                        <h3 className="font-serif text-2xl text-[#344E41] font-bold leading-tight">
                          Stop second-guessing. <br />
                          Lead with calm clarity.
                        </h3>
                        <p className="text-xs text-[#2B2B2B]/70 line-clamp-2">
                          Help leaders eliminate burnout and build high-impact teams in 90 days.
                        </p>
                        <div className="flex gap-2 pt-2">
                          <span className="px-3 py-1.5 rounded-full bg-[#344E41] text-white text-[11px] font-medium">
                            Schedule Discovery Call
                          </span>
                          <span className="px-3 py-1.5 rounded-full border border-[#344E41] text-[#344E41] text-[11px]">
                            Free Guide
                          </span>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-[#E9E4D8]/60 flex justify-between items-center text-[10px] text-[#2B2B2B]/60">
                        <span>✓ Mobile-first</span>
                        <span>✓ Lighthouse 98+</span>
                        <span>✓ theme.css color switch</span>
                      </div>
                    </div>
                  ) : (
                    <div className="w-[200px] mx-auto my-auto p-4 bg-white rounded-2xl border-2 border-[#344E41] shadow-md space-y-3 text-center">
                      <div className="w-8 h-1 bg-[#2B2B2B]/20 rounded-full mx-auto" />
                      <span className="font-serif font-bold text-xs text-[#344E41] block">Clarity Coaching</span>
                      <h4 className="font-serif text-sm font-bold text-[#344E41]">
                        Stop second-guessing.
                      </h4>
                      <p className="text-[10px] text-[#2B2B2B]/70">
                        90-Day Executive Mentorship
                      </p>
                      <button className="w-full py-1.5 rounded-full bg-[#344E41] text-white text-[10px] font-medium">
                        Book a Call
                      </button>
                    </div>
                  )}

                  {/* Overlay button to test full live viewer */}
                  <div className="absolute inset-0 bg-[#344E41]/5 hover:bg-[#344E41]/15 transition-all flex items-end justify-end p-4">
                    <button
                      onClick={() => navigate('live-demo')}
                      className="px-4 py-2 rounded-full bg-[#344E41] text-white text-xs font-medium shadow-md flex items-center gap-1.5 hover:scale-105 transition-transform"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Open Interactive Live Demo</span>
                    </button>
                  </div>
                </div>

                {/* Subtitle badge */}
                <div className="mt-4 flex items-center justify-between text-xs text-[#2B2B2B]/70">
                  <span className="font-medium text-[#344E41]">Clarity Template v1.0.0</span>
                  <span className="text-[#D9A68B] font-semibold">Ready to download & edit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="border-y border-[#E9E4D8] bg-white/70 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center justify-center p-3">
              <div className="w-10 h-10 rounded-xl bg-[#E9E4D8]/60 flex items-center justify-center text-[#344E41] mb-2">
                <Layers className="w-5 h-5" />
              </div>
              <p className="font-serif text-xl font-bold text-[#344E41]">5 Core Pages</p>
              <p className="text-xs text-[#2B2B2B]/70 mt-0.5">Home, About, Services, Booking, Freebie</p>
            </div>

            <div className="flex flex-col items-center justify-center p-3">
              <div className="w-10 h-10 rounded-xl bg-[#E9E4D8]/60 flex items-center justify-center text-[#344E41] mb-2">
                <Code2 className="w-5 h-5" />
              </div>
              <p className="font-serif text-xl font-bold text-[#344E41]">Edit Without Code</p>
              <p className="text-xs text-[#2B2B2B]/70 mt-0.5">Clear [brackets] & centralized theme.css</p>
            </div>

            <div className="flex flex-col items-center justify-center p-3">
              <div className="w-10 h-10 rounded-xl bg-[#E9E4D8]/60 flex items-center justify-center text-[#344E41] mb-2">
                <Video className="w-5 h-5" />
              </div>
              <p className="font-serif text-xl font-bold text-[#344E41]">Setup Video Included</p>
              <p className="text-xs text-[#2B2B2B]/70 mt-0.5">10-Minute step-by-step walkthrough</p>
            </div>

            <div className="flex flex-col items-center justify-center p-3">
              <div className="w-10 h-10 rounded-xl bg-[#E9E4D8]/60 flex items-center justify-center text-[#344E41] mb-2">
                <RefreshCw className="w-5 h-5" />
              </div>
              <p className="font-serif text-xl font-bold text-[#344E41]">Free Updates</p>
              <p className="text-xs text-[#2B2B2B]/70 mt-0.5">Lifetime changelog access & bug fixes</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DOWNLOAD, EDIT, LAUNCH STEP ROW (From page 17 updates) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A3B18A]">
            Simple 3-Step Process
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#344E41] mt-2">
            How it works: Download, Edit, Launch
          </h2>
          <p className="text-base text-[#2B2B2B]/80 mt-2">
            You don't need a degree in web development or a $29/month page builder subscription.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-[#E9E4D8] relative hover:shadow-xs transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#E9E4D8] text-[#344E41] flex items-center justify-center font-serif text-xl font-bold mb-5">
              1
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#344E41] mb-2">Buy & Download</h3>
            <p className="text-sm text-[#2B2B2B]/80 leading-relaxed">
              Complete your secure order and receive your instant clarity-coach-template.zip file containing all 7 HTML pages, styles, scripts, and documentation.
            </p>
            <div className="mt-4 text-xs font-medium text-[#A3B18A]">Instant zip delivery in 5 seconds</div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#E9E4D8] relative hover:shadow-xs transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#E9E4D8] text-[#344E41] flex items-center justify-center font-serif text-xl font-bold mb-5">
              2
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#344E41] mb-2">Edit in Minutes</h3>
            <p className="text-sm text-[#2B2B2B]/80 leading-relaxed">
              Open the files in free VS Code or Notepad. Replace your name and booking link in config.js, swap your brand colors in theme.css, and fill in the bracketed text.
            </p>
            <div className="mt-4 text-xs font-medium text-[#344E41]">Zero complicated build steps required</div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#E9E4D8] relative hover:shadow-xs transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#E9E4D8] text-[#344E41] flex items-center justify-center font-serif text-xl font-bold mb-5">
              3
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#344E41] mb-2">Launch in a Weekend</h3>
            <p className="text-sm text-[#2B2B2B]/80 leading-relaxed">
              Drag and drop your folder straight onto Netlify Drop or Cloudflare Pages for free worldwide hosting with SSL, or use your existing cPanel. Start booking discovery calls!
            </p>
            <div className="mt-4 text-xs font-medium text-[#D9A68B]">Connect your custom domain for free</div>
          </div>
        </div>
      </section>

      {/* 4. TEMPLATE CARDS (Clarity active, Folio & Studio coming soon) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A3B18A]">
              Our Collection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#344E41] mt-1">
              Templates Built for Coaching Businesses
            </h2>
          </div>
          <button
            onClick={() => navigate('shop')}
            className="text-sm font-semibold text-[#344E41] hover:text-[#D9A68B] transition-colors flex items-center gap-1 self-start sm:self-auto"
          >
            <span>Browse all in shop</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TEMPLATES.map((tmpl) => {
            const isClarity = tmpl.id === 'clarity';

            return (
              <div
                key={tmpl.id}
                className={`bg-white rounded-3xl border transition-all flex flex-col justify-between overflow-hidden ${
                  isClarity
                    ? 'border-[#344E41] ring-2 ring-[#344E41]/10 shadow-lg'
                    : 'border-[#E9E4D8] hover:border-[#A3B18A] shadow-sm'
                }`}
              >
                {/* Template Card Visual Header */}
                <div className="relative p-6 bg-[#FAF7F2] border-b border-[#E9E4D8]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#E9E4D8] text-[#344E41]">
                      {tmpl.category}
                    </span>
                    {tmpl.badge && (
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          isClarity
                            ? 'bg-[#D9A68B] text-white'
                            : 'bg-[#E9E4D8] text-[#344E41]'
                        }`}
                      >
                        {tmpl.badge}
                      </span>
                    )}
                  </div>

                  {/* Card mockup preview illustration */}
                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-white border border-[#E9E4D8] p-4 flex flex-col justify-between shadow-xs">
                    {isClarity ? (
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-[10px] text-[#344E41] font-serif font-bold">
                          <span>Clarity Coaching</span>
                          <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#A3B18A]/20">5 Pages</span>
                        </div>
                        <div className="w-3/4 h-3 bg-[#344E41]/80 rounded" />
                        <div className="w-1/2 h-2 bg-[#A3B18A]/60 rounded" />
                        <div className="pt-2 flex gap-2">
                          <div className="w-20 h-5 bg-[#344E41] rounded-full" />
                          <div className="w-16 h-5 border border-[#344E41] rounded-full" />
                        </div>
                      </div>
                    ) : (
                      <div className="flex-1 flex flex-col items-center justify-center text-center p-4 bg-[#FAF7F2] rounded-lg">
                        <Layers className="w-8 h-8 text-[#A3B18A] mb-2 stroke-[1.5]" />
                        <span className="text-xs font-medium text-[#2B2B2B]/70">
                          {tmpl.name} Template Layout
                        </span>
                        <span className="text-[11px] text-[#D9A68B] font-semibold mt-1">In Development</span>
                      </div>
                    )}

                    <div className="pt-2 border-t border-[#E9E4D8] flex justify-between items-center text-[11px] text-[#2B2B2B]/60 font-mono">
                      <span>{tmpl.pagesCount} pages</span>
                      <span>HTML5 + Tailwind</span>
                    </div>
                  </div>
                </div>

                {/* Template Info Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="font-serif text-3xl font-bold text-[#344E41]">
                        {tmpl.name}
                      </h3>
                      <div className="text-right">
                        {tmpl.regularPrice && (
                          <span className="text-sm text-[#2B2B2B]/50 line-through mr-2 font-serif">
                            ${tmpl.regularPrice}
                          </span>
                        )}
                        <span className="font-serif text-2xl font-bold text-[#344E41]">
                          ${tmpl.price}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-[#2B2B2B]/80 leading-relaxed mb-4">
                      {tmpl.description}
                    </p>

                    {/* Highlights list */}
                    <ul className="space-y-2 text-xs text-[#2B2B2B]/85">
                      {tmpl.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#A3B18A] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buttons */}
                  <div className="space-y-2.5 pt-2">
                    {isClarity ? (
                      <>
                        <button
                          onClick={() => onOpenCheckout('standard')}
                          className="w-full py-3.5 rounded-full bg-[#344E41] hover:bg-[#283d33] text-white font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer min-h-[44px]"
                        >
                          <span>Buy Clarity Now ($59)</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => navigate('live-demo')}
                            className="py-2.5 px-3 rounded-full border border-[#344E41] text-[#344E41] hover:bg-[#FAF7F2] text-xs font-semibold flex items-center justify-center gap-1.5 min-h-[40px] cursor-pointer"
                          >
                            <Layers className="w-3.5 h-3.5" />
                            <span>Live Demo</span>
                          </button>
                          <button
                            onClick={() => navigate('clarity-sales')}
                            className="py-2.5 px-3 rounded-full bg-[#E9E4D8]/70 hover:bg-[#E9E4D8] text-[#344E41] text-xs font-semibold flex items-center justify-center min-h-[40px] cursor-pointer"
                          >
                            <span>Sales Page</span>
                          </button>
                        </div>
                      </>
                    ) : tmpl.id === 'folio' ? (
                      <>
                        <a
                          href="/folio/index.html"
                          target="_blank"
                          rel="noopener"
                          className="w-full py-3.5 rounded-full bg-[#111111] hover:bg-[#222222] text-white font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer min-h-[44px]"
                        >
                          <span>Preview Folio Live</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                        <div className="grid grid-cols-2 gap-2">
                          <a
                            href="/folio/portfolio.html"
                            target="_blank"
                            rel="noopener"
                            className="py-2.5 px-3 rounded-full border border-[#111111] text-[#111111] hover:bg-[#F5F3EF] text-xs font-semibold flex items-center justify-center gap-1.5 min-h-[40px] cursor-pointer text-center"
                          >
                            <span>Gallery</span>
                          </a>
                          <a
                            href="/folio/project.html"
                            target="_blank"
                            rel="noopener"
                            className="py-2.5 px-3 rounded-full bg-[#E4572E] hover:bg-[#d04922] text-white text-xs font-semibold flex items-center justify-center min-h-[40px] cursor-pointer text-center"
                          >
                            <span>Case Study</span>
                          </a>
                        </div>
                      </>
                    ) : (
                      <button
                        onClick={() => onOpenNotify(tmpl.name)}
                        className="w-full py-3.5 rounded-full border border-[#344E41] text-[#344E41] hover:bg-[#E9E4D8]/50 font-medium text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                      >
                        <span>Notify me when ready</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. FREE CHECKLIST BAND ON FOREST GREEN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#344E41] text-[#FAF7F2] rounded-3xl p-8 sm:p-16 relative overflow-hidden shadow-xl">
          {/* Subtle clay leaf decorative background */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#D9A68B]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#FAF7F2]/15 text-[#FAF7F2] text-xs font-semibold tracking-wide">
              Free Lead Magnet for Coaches
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Is your website costing you discovery calls?
            </h2>

            <p className="text-base sm:text-lg text-[#FAF7F2]/85 leading-relaxed max-w-2xl mx-auto">
              Get the free 27-point checklist coaches use to fix their website in one afternoon. Spot the 5 things that make visitors leave, know exactly what to put on your homepage, and get a layout you can copy today.
            </p>

            {checklistSubmitted ? (
              <div className="p-6 bg-white/10 rounded-2xl border border-white/20 text-center max-w-md mx-auto animate-in zoom-in-95">
                <CheckCircle2 className="w-10 h-10 text-[#A3B18A] mx-auto mb-2" />
                <h4 className="font-serif font-bold text-xl text-white">Checklist on the way!</h4>
                <p className="text-xs text-[#FAF7F2]/80 mt-1">
                  Redirecting to your delivery page...
                </p>
              </div>
            ) : (
              <form onSubmit={handleChecklistSubmit} className="pt-4 max-w-md mx-auto space-y-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    required
                    value={checklistName}
                    onChange={(e) => setChecklistName(e.target.value)}
                    placeholder="Your first name"
                    className="flex-1 px-4 py-3.5 rounded-full bg-white text-[#2B2B2B] text-sm focus:outline-none focus:ring-2 focus:ring-[#A3B18A] min-h-[44px]"
                  />
                  <input
                    type="email"
                    required
                    value={checklistEmail}
                    onChange={(e) => setChecklistEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3.5 rounded-full bg-white text-[#2B2B2B] text-sm focus:outline-none focus:ring-2 focus:ring-[#A3B18A] min-h-[44px]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#FAF7F2] hover:bg-white text-[#344E41] font-semibold text-base transition-colors shadow-md cursor-pointer min-h-[44px]"
                >
                  Send Me the Free Checklist
                </button>
                <p className="text-xs text-[#FAF7F2]/65">
                  Free. No spam. Unsubscribe any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 6. SHORT FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A3B18A]">
            Quick Answers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#344E41] mt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#2B2B2B]/80 mt-2">
            Everything you need to know about our downloadable code templates.
          </p>
        </div>

        <div className="space-y-3">
          {homeFaqs.map((faq) => {
            const isOpen = activeFaq === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#E9E4D8] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-serif text-lg font-bold text-[#344E41] hover:text-[#283d33] cursor-pointer"
                  aria-expanded={isOpen}
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

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('faq')}
            className="text-sm font-medium text-[#344E41] hover:text-[#D9A68B] transition-colors inline-flex items-center gap-1.5"
          >
            <span>Read all 11 questions on the FAQ page</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
