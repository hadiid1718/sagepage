import React, { useState } from 'react';
import { DollarSign, Share2, Award, Clock, Users, ChevronDown, CheckCircle2 } from 'lucide-react';

interface AffiliatesProps {
  navigate: (route: string) => void;
}

export const Affiliates: React.FC<AffiliatesProps> = ({ navigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [audienceChannel, setAudienceChannel] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openTerms, setOpenTerms] = useState<number | null>(null);

  const steps = [
    {
      step: '01',
      title: 'Join',
      desc: 'Fill out our quick 1-minute application form to receive your personal referral link and marketing kit.'
    },
    {
      step: '02',
      title: 'Share your link',
      desc: 'Recommend Sagepage templates on your blog, Pinterest boards, client onboarding docs, or social channels.'
    },
    {
      step: '03',
      title: 'Get paid',
      desc: 'Earn a generous 25% cash commission on every single template license sold through your link.'
    }
  ];

  const whoItIsFor = [
    { title: 'Coaches & Mentors', desc: 'Share what works with coaching peers and students launching their practices.' },
    { title: 'Web Designers & VAs', desc: 'Recommend clean code foundations to clients who want full ownership without recurring fees.' },
    { title: 'Bloggers & Curators', desc: 'Feature our templates in roundups of top coach website tools and productivity guides.' },
    { title: 'Pinterest Creators', desc: 'Pin editorial mockups and aesthetic web design inspiration to our active community.' }
  ];

  const affiliateTerms = [
    {
      q: 'Commission rate & payout schedule',
      a: 'You earn 25% on every purchase. Payouts are made monthly on the 1st for all sales that have passed our 14-day refund window, via PayPal or direct Wise transfer.'
    },
    {
      q: 'Cookie length & tracking',
      a: 'We provide a generous 60-day tracking cookie. If someone clicks your link and purchases anytime within 60 days, you get credited.'
    },
    {
      q: 'Self-referral policy',
      a: 'Affiliate links may not be used for purchasing personal licenses. Self-referrals are automatically disqualified.'
    },
    {
      q: 'Paid advertising rules',
      a: 'You may not bid on branded search terms like "Sagepage" or "Sagepage Studio" in Google Ads or Bing Ads.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#E9E4D8] text-[#344E41] text-xs font-semibold uppercase tracking-wider">
          Partner Program
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#344E41] tracking-tight">
          Share Sagepage templates. Earn 25 percent.
        </h1>
        <p className="text-lg text-[#2B2B2B]/80 leading-relaxed">
          Help coaches and creatives build calm, fast websites while earning recurring passive income.
        </p>
      </div>

      {/* 3 Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((st) => (
          <div key={st.step} className="p-8 bg-white rounded-3xl border border-[#E9E4D8] space-y-3 shadow-xs">
            <span className="w-10 h-10 rounded-2xl bg-[#E9E4D8]/60 text-[#344E41] flex items-center justify-center font-serif text-lg font-bold">
              {st.step}
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#344E41]">{st.title}</h3>
            <p className="text-xs sm:text-sm text-[#2B2B2B]/80 leading-relaxed">{st.desc}</p>
          </div>
        ))}
      </div>

      {/* Program Details Strip */}
      <div className="bg-[#344E41] text-white p-8 sm:p-12 rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="font-serif text-3xl sm:text-4xl font-bold text-[#D9A68B]">25%</p>
          <p className="text-xs text-white/80 mt-1 uppercase tracking-wider">Commission per Sale</p>
        </div>
        <div>
          <p className="font-serif text-3xl sm:text-4xl font-bold text-[#FAF7F2]">60 Days</p>
          <p className="text-xs text-white/80 mt-1 uppercase tracking-wider">Cookie Duration</p>
        </div>
        <div>
          <p className="font-serif text-3xl sm:text-4xl font-bold text-[#FAF7F2]">Monthly</p>
          <p className="text-xs text-white/80 mt-1 uppercase tracking-wider">Automated Payouts</p>
        </div>
        <div>
          <p className="font-serif text-3xl sm:text-4xl font-bold text-[#FAF7F2]">PayPal / Wise</p>
          <p className="text-xs text-white/80 mt-1 uppercase tracking-wider">Direct Payout Methods</p>
        </div>
      </div>

      {/* Who It Is For */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A3B18A]">
            Ideal Partners
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#344E41]">
            Who the Program is For
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whoItIsFor.map((item, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl border border-[#E9E4D8] space-y-2">
              <h4 className="font-serif text-lg font-bold text-[#344E41]">{item.title}</h4>
              <p className="text-xs text-[#2B2B2B]/75 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sign-up Form & Terms Accordion */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Sign-Up Form */}
        <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-[#E9E4D8] shadow-sm">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#344E41]">
                Apply for Affiliate Partnership
              </h3>
              <p className="text-xs text-[#2B2B2B]/70 leading-relaxed">
                Receive instant link activation and download access to high-res promotional mockups.
              </p>

              <div>
                <label className="block text-xs font-medium text-[#2B2B2B]/80 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Elena Vance"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E9E4D8] text-sm focus:border-[#344E41] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#2B2B2B]/80 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="elena@yourdomain.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E9E4D8] text-sm focus:border-[#344E41] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#2B2B2B]/80 mb-1">Where will you share Sagepage? (Website, Pinterest, Newsletter)</label>
                <input
                  type="text"
                  required
                  value={audienceChannel}
                  onChange={(e) => setAudienceChannel(e.target.value)}
                  placeholder="e.g. Pinterest @elenacoach or blog newsletter"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E9E4D8] text-sm focus:border-[#344E41] outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#344E41] hover:bg-[#283d33] text-white text-sm font-semibold transition-colors cursor-pointer min-h-[44px]"
              >
                Join the Affiliate Program
              </button>
            </form>
          ) : (
            <div className="text-center py-10 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#344E41] mx-auto" />
              <h4 className="font-serif text-2xl font-bold text-[#344E41]">Welcome to the Team!</h4>
              <p className="text-xs text-[#2B2B2B]/80 max-w-sm mx-auto">
                Thank you, {name}! Your unique referral link and brand asset pack have been emailed to <strong>{email}</strong>.
              </p>
            </div>
          )}
        </div>

        {/* Affiliate Terms in an Accordion */}
        <div className="lg:col-span-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A3B18A]">
            Terms & Guidelines
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#344E41]">
            Affiliate Policy & Terms
          </h3>

          <div className="space-y-3">
            {affiliateTerms.map((term, i) => {
              const isOpen = openTerms === i;

              return (
                <div key={i} className="bg-white rounded-2xl border border-[#E9E4D8] overflow-hidden">
                  <button
                    onClick={() => setOpenTerms(isOpen ? null : i)}
                    className="w-full py-3.5 px-4 text-left flex items-center justify-between gap-3 text-xs font-bold text-[#344E41]"
                  >
                    <span>{term.q}</span>
                    <span className={`w-5 h-5 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-[#2B2B2B]/80 leading-relaxed border-t border-[#FAF7F2]">
                      <p>{term.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
