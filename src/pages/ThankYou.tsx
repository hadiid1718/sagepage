import React from 'react';
import { Check, ArrowRight, Download, ExternalLink, ArrowUpRight } from 'lucide-react';

interface ThankYouProps {
  navigate: (route: string) => void;
}

export const ThankYou: React.FC<ThankYouProps> = ({ navigate }) => {
  const handleDownloadSampleChecklist = () => {
    // Generate simple printable text/markdown checklist
    const checklistText = `SAGEPAGE STUDIO: 27-POINT COACH WEBSITE CHECKLIST
==================================================

1. HOMEPAGE BASICS
[ ] 5-Second Test: Can a new visitor state your specific coaching niche in 5 seconds?
[ ] Visible primary button: Single high-contrast "Book Discovery Call" above the fold.
[ ] Problem Agitation: 3 specific pain points your ideal client currently experiences.
[ ] Method Breakdown: Your signature 3-step transformation framework.
[ ] Evidence: Real testimonials or metrics with client photos/titles.

2. ABOUT PAGE
[ ] The "Mirror" Technique: Is the story framed around how your journey helps them?
[ ] Credentials: Valid certifications (ICF, PCC) and real experience clearly noted.
[ ] Clear next step: "Work With Me" button at the bottom of the story.

3. SERVICES & PRICING
[ ] Clear deliverables: Transparent list of what each coaching package includes.
[ ] Transparent rates: Investment listed upfront to filter unqualified inquiries.

4. BOOKING FLOW
[ ] Embedded or 1-click scheduler: Connected directly to Calendly/Acuity.
[ ] Pre-call expectations: 3 bullet points clarifying what happens on the call.

5. TECHNICAL HYGIENE & SPEED
[ ] Mobile responsive: Buttons at least 44px tall and easy to tap with one thumb.
[ ] SSL Certificate: Secure lock visible in browser address bar.
[ ] Fast loading: Static HTML & optimized WebP images (Lighthouse 95+).

Made by Sagepage Studio (https://sagepage.co)
`;
    const blob = new Blob([checklistText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '27-point-coach-website-checklist.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center animate-in fade-in duration-200">
      {/* Icon: check mark in a sage circle */}
      <div className="w-16 h-16 rounded-full bg-[#A3B18A] text-white flex items-center justify-center mx-auto mb-6 shadow-sm">
        <Check className="w-8 h-8 stroke-[2.5]" />
      </div>

      {/* H1 */}
      <h1 className="font-serif text-3xl sm:text-4xl text-[#344E41] tracking-tight">
        Your checklist is on its way.
      </h1>

      {/* Text */}
      <p className="mt-3 text-base text-[#2B2B2B]/80 max-w-md mx-auto leading-relaxed">
        Check your inbox in the next few minutes (and your promotions folder).
      </p>

      {/* Direct download fallback button */}
      <div className="mt-4">
        <button
          onClick={handleDownloadSampleChecklist}
          className="text-xs font-medium text-[#344E41] hover:text-[#D9A68B] inline-flex items-center gap-1.5 underline underline-offset-4"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Need it immediately? Click to download text copy</span>
        </button>
      </div>

      {/* Card below: 'While you wait: see the Clarity template' with thumbnail and button */}
      <div className="mt-12 bg-white rounded-3xl border border-[#E9E4D8] p-6 sm:p-8 text-left shadow-sm">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#A3B18A] block mb-2">
          While you wait:
        </span>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Clarity Thumbnail */}
          <div className="w-full sm:w-44 aspect-[4/3] bg-[#FAF7F2] rounded-xl border border-[#E9E4D8] p-3 flex flex-col justify-between shrink-0 shadow-inner">
            <span className="font-serif text-[11px] font-bold text-[#344E41]">Clarity Template</span>
            <div className="space-y-1.5">
              <div className="w-full h-2 bg-[#344E41]/70 rounded" />
              <div className="w-2/3 h-1.5 bg-[#A3B18A]/60 rounded" />
            </div>
            <div className="flex justify-between items-center text-[9px] text-[#2B2B2B]/60">
              <span>5 Pages</span>
              <span className="font-bold text-[#344E41]">$59</span>
            </div>
          </div>

          <div className="flex-1 space-y-3 text-center sm:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#344E41]">
              See the Clarity template
            </h3>
            <p className="text-xs sm:text-sm text-[#2B2B2B]/80 leading-relaxed">
              Skip days of manual web building. Clarity is pre-wired with the exact 27 checklist fixes already applied.
            </p>
            <button
              onClick={() => navigate('clarity-sales')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#344E41] hover:bg-[#283d33] text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer min-h-[44px]"
            >
              <span>See the Clarity Template</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Small Pinterest follow button (Page 4 requirement) */}
      <div className="mt-8 pt-6 border-t border-[#E9E4D8]/80 flex items-center justify-center gap-3 text-xs text-[#2B2B2B]/70">
        <span>Follow our coach layout pins:</span>
        <a
          href="https://pinterest.com/sagepagestudio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold text-[#344E41] hover:text-[#D9A68B] transition-colors"
        >
          <span>Pinterest @sagepagestudio</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
