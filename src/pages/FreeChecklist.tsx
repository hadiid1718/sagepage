import React, { useState } from 'react';
import { ArrowLeft, Check, ShieldCheck, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

interface FreeChecklistProps {
  navigate: (route: string) => void;
}

export const FreeChecklist: React.FC<FreeChecklistProps> = ({ navigate }) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    /*
      COMMENT: MailerLite / Formspree lead magnet subscriber endpoint
      // fetch('https://connect.mailerlite.com/api/subscribers', {
      //   method: 'POST',
      //   body: JSON.stringify({ email, fields: { name: firstName }, groups: ['checklist-lead-magnet'] })
      // })
    */
    setTimeout(() => {
      navigate('thank-you');
    }, 600);
  };

  return (
    <div className="min-h-[85vh] flex flex-col justify-between py-8 px-4 sm:px-6 lg:px-8">
      {/* Minimal Top Brand Bar without distracting navigation menus */}
      <header className="max-w-5xl mx-auto w-full flex items-center justify-between pb-8 border-b border-[#E9E4D8]/60">
        <button
          onClick={() => navigate('home')}
          className="flex items-center gap-2 group text-left cursor-pointer"
        >
          <div className="relative w-8 h-8 rounded-lg bg-[#344E41] flex items-center justify-center">
            <div className="w-4 h-5 bg-[#FAF7F2] rounded-[2px] p-0.5 flex flex-col gap-0.5">
              <div className="w-full h-0.5 bg-[#344E41]" />
              <div className="w-2.5 h-0.5 bg-[#A3B18A]" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#D9A68B] rounded-tl-full" />
          </div>
          <span className="font-serif text-lg font-bold text-[#344E41]">Sagepage Studio</span>
        </button>

        <button
          onClick={() => navigate('home')}
          className="text-xs text-[#2B2B2B]/70 hover:text-[#344E41] flex items-center gap-1 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to main site</span>
        </button>
      </header>

      {/* Main Opt-In Split Content */}
      <main className="max-w-5xl mx-auto w-full my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Focused Copy & Form */}
        <div className="lg:col-span-7 space-y-6">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#E9E4D8] text-[#344E41] text-xs font-semibold tracking-wide uppercase">
            Free 27-Point Action Guide
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl text-[#344E41] leading-tight tracking-tight">
            Is your website costing you clients?
          </h1>

          <p className="text-base sm:text-lg text-[#2B2B2B]/80 leading-relaxed">
            Get the free 27-point checklist coaches use to fix their website in one afternoon.
          </p>

          {/* 3 Core Bullets from PDF */}
          <ul className="space-y-3.5 text-sm sm:text-base text-[#2B2B2B]/85 pt-2">
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#A3B18A]/30 text-[#344E41] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </span>
              <span><strong>Spot the 5 things that make visitors leave</strong> before they even read your coaching packages.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#A3B18A]/30 text-[#344E41] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </span>
              <span><strong>Know exactly what to put on your homepage</strong> with our 5-second clarity formula.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#A3B18A]/30 text-[#344E41] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </span>
              <span><strong>Get a one-page layout you can copy today</strong> to guide warm readers directly into Calendly.</span>
            </li>
          </ul>

          {/* Form */}
          <form onSubmit={handleSubmit} className="pt-4 space-y-3 max-w-md">
            <div>
              <label className="block text-xs font-medium text-[#2B2B2B]/80 mb-1">First Name</label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Sarah"
                className="w-full px-4 py-3 rounded-xl border border-[#E9E4D8] bg-white text-sm focus:border-[#344E41] focus:ring-1 focus:ring-[#344E41] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#2B2B2B]/80 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sarah@coachingpractice.com"
                className="w-full px-4 py-3 rounded-xl border border-[#E9E4D8] bg-white text-sm focus:border-[#344E41] focus:ring-1 focus:ring-[#344E41] outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-full bg-[#344E41] hover:bg-[#283d33] text-white font-medium text-base transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 min-h-[44px]"
            >
              {isSubmitting ? (
                <span>Generating your checklist link...</span>
              ) : (
                <>
                  <span>Send Me the Checklist</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-xs text-[#2B2B2B]/60 text-center">
              Free. No spam. Unsubscribe any time.
            </p>
          </form>
        </div>

        {/* Right Column: PDF Cover Mockup on Beige Card */}
        <div className="lg:col-span-5">
          <div className="bg-[#E9E4D8]/50 border border-[#E9E4D8] rounded-3xl p-6 sm:p-8 text-center space-y-6 shadow-sm">
            {/* The PDF Book Mockup (forest green cover, title 'Coach Website Checklist', clay checkmark icon) */}
            <div className="mx-auto w-56 sm:w-64 aspect-[3/4] bg-[#344E41] rounded-2xl shadow-xl p-6 flex flex-col justify-between text-left text-white border-4 border-white/20 transform -rotate-1 hover:rotate-0 transition-transform">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#A3B18A] block">
                  Sagepage Studio · Guide
                </span>
                <div className="mt-6 w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#D9A68B] flex items-center justify-center shadow-md">
                  {/* Clay checkmark icon */}
                  <Check className="w-6 h-6 stroke-[3] text-[#D9A68B]" />
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold leading-tight text-[#FAF7F2]">
                  Coach Website Checklist
                </h3>
                <p className="text-[11px] text-[#A3B18A] mt-2">
                  27 actionable fixes to book more discovery calls in one afternoon.
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex justify-between items-center text-[9px] text-white/60 font-mono">
                <span>Printable PDF</span>
                <span>v1.0</span>
              </div>
            </div>

            {/* Small line from PDF */}
            <p className="text-xs text-[#2B2B2B]/70 italic">
              Made by a web developer who builds website templates for coaches.
            </p>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="max-w-5xl mx-auto w-full pt-8 border-t border-[#E9E4D8]/60 text-center text-xs text-[#2B2B2B]/60">
        © {new Date().getFullYear()} Sagepage Studio. All rights reserved.
      </footer>
    </div>
  );
};
