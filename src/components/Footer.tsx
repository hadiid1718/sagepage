import React, { useState } from 'react';
import { ArrowUpRight, Heart, ShieldCheck, Mail, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  navigate: (route: string) => void;
  openLegalModal: (docType: 'license' | 'privacy' | 'terms' | 'refunds') => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate, openLegalModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    /*
      COMMENT: MailerLite integration endpoint connection point
      // Example payload sent to MailerLite Subscriber API:
      // fetch('https://connect.mailerlite.com/api/subscribers', {
      //   method: 'POST',
      //   headers: { 'Authorization': 'Bearer YOUR_MAILERLITE_KEY' },
      //   body: JSON.stringify({ email: newsletterEmail, groups: ['coaches-newsletter'] })
      // })
    */
    setSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-[#FAF7F2] border-t border-[#E9E4D8] mt-24 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#E9E4D8]/80">
          
          {/* Brand info (2 columns) */}
          <div className="lg:col-span-2 pr-0 lg:pr-8">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg bg-[#344E41] flex items-center justify-center overflow-hidden">
                <div className="w-4 h-5 bg-[#FAF7F2] rounded-[2px] p-0.5 flex flex-col gap-0.5">
                  <div className="w-full h-0.5 bg-[#344E41]" />
                  <div className="w-2.5 h-0.5 bg-[#A3B18A]" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#D9A68B] rounded-tl-full" />
              </div>
              <span className="font-serif text-2xl font-bold text-[#344E41]">Sagepage Studio</span>
            </div>

            <p className="mt-4 text-[#2B2B2B]/80 text-[15px] leading-relaxed max-w-sm">
              We craft clean, downloadable HTML & Tailwind website templates for coaches, creatives, and independent service businesses. Edit in minutes. Launch in a weekend.
            </p>

            {/* Merchant of record note */}
            <div className="mt-6 flex items-center gap-2 text-xs text-[#2B2B2B]/60 bg-[#E9E4D8]/40 px-3.5 py-2 rounded-lg border border-[#E9E4D8]">
              <ShieldCheck className="w-4 h-4 text-[#344E41] shrink-0" />
              <span>Payments securely processed via Lemon Squeezy (Merchant of Record). Global taxes & VAT handled automatically.</span>
            </div>

            {/* Pinterest Social */}
            <div className="mt-5 flex items-center gap-3 text-sm">
              <span className="text-[#2B2B2B]/70">Find inspiration:</span>
              <a
                href="https://pinterest.com/sagepagestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-[#344E41] hover:text-[#D9A68B] transition-colors"
              >
                <span>Pinterest @sagepagestudio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column: Products & Docs */}
          <div>
            <h3 className="font-serif text-base font-semibold text-[#344E41] tracking-wide">Templates & Docs</h3>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              <li>
                <button
                  onClick={() => navigate('shop')}
                  className="text-[#2B2B2B]/80 hover:text-[#344E41] transition-colors text-left"
                >
                  All Templates
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('clarity-sales')}
                  className="text-[#2B2B2B]/80 hover:text-[#344E41] transition-colors flex items-center gap-1.5"
                >
                  <span>Clarity for Coaches</span>
                  <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-[#A3B18A]/20 text-[#344E41]">Hot</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('live-demo')}
                  className="text-[#2B2B2B]/80 hover:text-[#344E41] transition-colors text-left"
                >
                  Interactive Live Demo
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('docs')}
                  className="text-[#2B2B2B]/80 hover:text-[#344E41] transition-colors text-left"
                >
                  Documentation
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('changelog')}
                  className="text-[#2B2B2B]/80 hover:text-[#344E41] transition-colors text-left"
                >
                  Changelog & Releases
                </button>
              </li>
            </ul>
          </div>

          {/* Column: Company & Services */}
          <div>
            <h3 className="font-serif text-base font-semibold text-[#344E41] tracking-wide">Studio & Services</h3>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              <li>
                <button
                  onClick={() => navigate('services')}
                  className="text-[#2B2B2B]/80 hover:text-[#344E41] transition-colors text-left"
                >
                  Setup & Customization
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('free-checklist')}
                  className="text-[#2B2B2B]/80 hover:text-[#344E41] transition-colors text-left"
                >
                  Free 27-Point Checklist
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('about')}
                  className="text-[#2B2B2B]/80 hover:text-[#344E41] transition-colors text-left"
                >
                  About the Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('blog')}
                  className="text-[#2B2B2B]/80 hover:text-[#344E41] transition-colors text-left"
                >
                  Blog & Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('affiliates')}
                  className="text-[#2B2B2B]/80 hover:text-[#344E41] transition-colors flex items-center gap-1.5"
                >
                  <span>Affiliate Program</span>
                  <span className="text-[10px] font-semibold text-[#D9A68B] bg-[#D9A68B]/15 px-1.5 py-0.5 rounded">25%</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column: Support & Newsletter */}
          <div>
            <h3 className="font-serif text-base font-semibold text-[#344E41] tracking-wide">Support & Updates</h3>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              <li>
                <button
                  onClick={() => navigate('support')}
                  className="text-[#2B2B2B]/80 hover:text-[#344E41] transition-colors text-left"
                >
                  Support Center
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('faq')}
                  className="text-[#2B2B2B]/80 hover:text-[#344E41] transition-colors text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('contact')}
                  className="text-[#2B2B2B]/80 hover:text-[#344E41] transition-colors text-left"
                >
                  Contact Alex
                </button>
              </li>
            </ul>

            {/* Newsletter email capture */}
            <div className="mt-6">
              <p className="text-xs font-semibold text-[#344E41] uppercase tracking-wider">Coach Growth Notes</p>
              {subscribed ? (
                <div className="mt-2 text-xs flex items-center gap-1.5 text-[#344E41] bg-[#A3B18A]/20 p-2.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-[#344E41]" />
                  <span>You're on the list! Welcome.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="mt-2 flex flex-col gap-2">
                  <div className="relative">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-[#E9E4D8] text-[#2B2B2B] focus:border-[#344E41] focus:ring-1 focus:ring-[#344E41] outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 px-3 text-xs font-medium text-white bg-[#344E41] hover:bg-[#283d33] rounded-lg transition-colors cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#2B2B2B]/70">
          <div>
            © {new Date().getFullYear()} Sagepage Studio. All rights reserved. Built with calm craftsmanship.
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => openLegalModal('license')}
              className="hover:text-[#344E41] transition-colors underline-offset-4 hover:underline"
            >
              License
            </button>
            <button
              onClick={() => openLegalModal('privacy')}
              className="hover:text-[#344E41] transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => openLegalModal('terms')}
              className="hover:text-[#344E41] transition-colors underline-offset-4 hover:underline"
            >
              Terms of Service
            </button>
            <button
              onClick={() => openLegalModal('refunds')}
              className="hover:text-[#344E41] transition-colors underline-offset-4 hover:underline"
            >
              Refund Policy
            </button>
            <button
              onClick={() => navigate('contact')}
              className="hover:text-[#344E41] transition-colors underline-offset-4 hover:underline"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
