import React, { useState } from 'react';
import { ArrowRight, Check, Layers, ChevronDown, Sparkles, Filter, Mail, CheckCircle2 } from 'lucide-react';
import { TEMPLATES, Template } from '../data/templates';
import { FAQ_ITEMS } from '../data/faq';

interface ShopProps {
  navigate: (route: string) => void;
  onOpenCheckout: (tier?: 'standard' | 'freelancer' | 'bundle') => void;
  onOpenNotify: (name: string) => void;
}

export const Shop: React.FC<ShopProps> = ({ navigate, onOpenCheckout, onOpenNotify }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Coaches' | 'Creatives' | 'Service business'>('All');
  const [bundleEmail, setBundleEmail] = useState('');
  const [bundleSubscribed, setBundleSubscribed] = useState(false);
  const [activeFaq, setActiveFaq] = useState<string | null>('run-it');

  const categories = ['All', 'Coaches', 'Creatives', 'Service business'] as const;

  const filteredTemplates = TEMPLATES.filter((tmpl) => {
    if (activeCategory === 'All') return true;
    return tmpl.category === activeCategory;
  });

  const shopFaqs = FAQ_ITEMS.slice(0, 4);

  const handleBundleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bundleEmail) return;
    setBundleSubscribed(true);
    /*
      COMMENT: MailerLite tag 'bundle-waitlist' hook
    */
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#E9E4D8] text-[#344E41] text-xs font-semibold uppercase tracking-wider">
          Template Shop
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#344E41] tracking-tight">
          Coach website templates, ready to edit
        </h1>
        <p className="text-lg text-[#2B2B2B]/80">
          Pick a template, add your words, publish. No framework setup, no monthly lock-in fees.
        </p>

        {/* Filter Chips */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all min-h-[40px] cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#344E41] text-white shadow-xs'
                  : 'bg-white text-[#2B2B2B] border border-[#E9E4D8] hover:bg-[#FAF7F2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Template Cards (3 columns desktop, 1 mobile) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {filteredTemplates.map((tmpl) => {
          const isClarity = tmpl.id === 'clarity';

          return (
            <div
              key={tmpl.id}
              className={`bg-white rounded-3xl border flex flex-col justify-between overflow-hidden transition-all ${
                isClarity
                  ? 'border-[#344E41] ring-2 ring-[#344E41]/10 shadow-lg'
                  : 'border-[#E9E4D8] shadow-sm hover:border-[#A3B18A]'
              }`}
            >
              {/* Card Header & Visual Preview */}
              <div className="p-6 bg-[#FAF7F2] border-b border-[#E9E4D8]">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#E9E4D8] text-[#344E41]">
                    {tmpl.category}
                  </span>
                  {tmpl.badge && (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        isClarity ? 'bg-[#D9A68B] text-white' : 'bg-[#E9E4D8] text-[#344E41]'
                      }`}
                    >
                      {tmpl.badge}
                    </span>
                  )}
                </div>

                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-white border border-[#E9E4D8] p-5 flex flex-col justify-between shadow-xs">
                  {isClarity ? (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-xs text-[#344E41] font-serif font-bold">
                        <span>Clarity Coaching</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#A3B18A]/20">5 Pages</span>
                      </div>
                      <div className="w-5/6 h-3.5 bg-[#344E41]/80 rounded" />
                      <div className="w-3/5 h-2 bg-[#A3B18A]/60 rounded" />
                      <div className="pt-3 flex gap-2">
                        <div className="w-24 h-6 bg-[#344E41] rounded-full" />
                        <div className="w-20 h-6 border border-[#344E41] rounded-full" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-4 bg-[#FAF7F2] rounded-lg">
                      <Layers className="w-8 h-8 text-[#A3B18A] mb-2 stroke-[1.5]" />
                      <span className="text-xs font-medium text-[#2B2B2B]/70">
                        {tmpl.name} Template Layout
                      </span>
                      <span className="text-[11px] text-[#D9A68B] font-semibold mt-1">Coming Soon</span>
                    </div>
                  )}

                  <div className="pt-2 border-t border-[#E9E4D8] flex justify-between items-center text-xs text-[#2B2B2B]/60 font-mono">
                    <span>{tmpl.pagesCount} pages</span>
                    <span>{tmpl.techStack.split('·')[0]}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h2 className="font-serif text-3xl font-bold text-[#344E41]">
                      {tmpl.name}
                    </h2>
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

                  <ul className="space-y-2 text-xs text-[#2B2B2B]/85">
                    {tmpl.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#A3B18A] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

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
                          <span>Gallery + Lightbox</span>
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

      {/* 'Bundle Coming Soon' Strip with Email Form ($149 waitlist) */}
      <section className="bg-[#FAF7F2] border-2 border-dashed border-[#A3B18A] rounded-3xl p-8 sm:p-12">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-[#A3B18A]/20 text-[#344E41] text-xs font-bold uppercase tracking-wider">
            All-In-One Studio Bundle ($149)
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#344E41]">
            Want all 3 templates? Bundle coming soon.
          </h2>
          <p className="text-sm sm:text-base text-[#2B2B2B]/80 max-w-xl mx-auto leading-relaxed">
            Get Clarity (Coaches), Folio (Creatives), and Studio (Consultants) with standard licenses for each ($207 value) bundled for just $149. Leave your email for early bird bundle access.
          </p>

          {bundleSubscribed ? (
            <div className="p-4 bg-white rounded-2xl border border-[#E9E4D8] text-center max-w-sm mx-auto flex items-center justify-center gap-2 text-sm text-[#344E41] font-medium">
              <CheckCircle2 className="w-5 h-5 text-[#A3B18A]" />
              <span>You are on the bundle waitlist!</span>
            </div>
          ) : (
            <form onSubmit={handleBundleSubmit} className="pt-2 max-w-md mx-auto flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={bundleEmail}
                onChange={(e) => setBundleEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white border border-[#E9E4D8] text-sm text-[#2B2B2B] outline-none focus:border-[#344E41] min-h-[44px]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#344E41] hover:bg-[#283d33] text-white font-medium text-sm transition-colors cursor-pointer min-h-[44px]"
              >
                Join Bundle Waitlist
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 4 FAQ Items About Code Templates & Licenses */}
      <section className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-[#344E41]">
            Common Questions About Templates & Hosting
          </h2>
        </div>

        <div className="space-y-3">
          {shopFaqs.map((faq) => {
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
    </div>
  );
};
