import React, { useState } from 'react';
import { BookOpen, Video, Mail, Clock, ShieldCheck, Upload, CheckCircle2, ChevronDown, AlertCircle } from 'lucide-react';

interface SupportProps {
  navigate: (route: string) => void;
}

export const Support: React.FC<SupportProps> = ({ navigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [orderEmail, setOrderEmail] = useState('');
  const [template, setTemplate] = useState('Clarity Coach Template');
  const [message, setMessage] = useState('');
  const [fileName, setFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openProblem, setOpenProblem] = useState<number | null>(0);

  const commonProblems = [
    {
      problem: '1. My images look broken or show a placeholder.',
      fix: 'Make sure your image files exist in assets/img/ and match the exact case of the file name (e.g. portrait.webp vs Portrait.webp). In HTML, use relative paths like assets/img/your-photo.webp.'
    },
    {
      problem: '2. I updated the colors in theme.css, but nothing changed.',
      fix: 'Your browser may have cached the previous style. Do a hard refresh by holding Shift and clicking Reload (Cmd+Shift+R on Mac, Ctrl+F5 on Windows).'
    },
    {
      problem: '3. How do I hook up my Calendly link?',
      fix: 'Open assets/js/config.js and paste your scheduler link into bookingUrl. All "Book a Call" buttons across the site will automatically link to your calendar.'
    },
    {
      problem: '4. The contact form or lead magnet is not sending emails.',
      fix: 'Ensure you have set up a free Formspree or MailerLite endpoint URL in assets/js/config.js. Test with your own email first to verify receipt.'
    },
    {
      problem: '5. How do I connect my custom domain on Netlify?',
      fix: 'Go to your Netlify site dashboard, click "Domain management" > "Add custom domain", and add your CNAME record pointing to your Netlify subdomain.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#E9E4D8] text-[#344E41] text-xs font-semibold uppercase tracking-wider">
          Help Desk
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#344E41] tracking-tight">
          Need help?
        </h1>
        <p className="text-base text-[#2B2B2B]/80">
          We’re here to ensure your template setup is effortless and calm.
        </p>
      </div>

      {/* 3 Quick Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          onClick={() => navigate('docs')}
          className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E9E4D8] hover:border-[#344E41] transition-all cursor-pointer shadow-xs space-y-3"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#E9E4D8]/60 text-[#344E41] flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-[#344E41]">Read the docs</h3>
          <p className="text-xs text-[#2B2B2B]/80 leading-relaxed">
            Search step-by-step guides for styling, typography, forms, and zero-code deployment.
          </p>
          <span className="text-xs font-semibold text-[#344E41] block pt-1">Open Documentation →</span>
        </div>

        <div
          onClick={() => navigate('docs')}
          className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E9E4D8] hover:border-[#344E41] transition-all cursor-pointer shadow-xs space-y-3"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#E9E4D8]/60 text-[#344E41] flex items-center justify-center">
            <Video className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-[#344E41]">Watch setup video</h3>
          <p className="text-xs text-[#2B2B2B]/80 leading-relaxed">
            Follow our 10-minute visual tutorial showing how to unzip, edit, and launch live.
          </p>
          <span className="text-xs font-semibold text-[#344E41] block pt-1">Watch Video Guide →</span>
        </div>

        <div
          onClick={() => {
            const formElem = document.getElementById('support-ticket-form');
            formElem?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E9E4D8] hover:border-[#344E41] transition-all cursor-pointer shadow-xs space-y-3"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#E9E4D8]/60 text-[#344E41] flex items-center justify-center">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-[#344E41]">Email support</h3>
          <p className="text-xs text-[#2B2B2B]/80 leading-relaxed">
            Get personalized assistance directly from the developer within 1 to 2 business days.
          </p>
          <span className="text-xs font-semibold text-[#344E41] block pt-1">Submit Ticket Below ↓</span>
        </div>
      </div>

      {/* Reply Time Banner & Scope */}
      <div className="p-6 bg-[#FAF7F2] rounded-3xl border border-[#E9E4D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-[#344E41] shrink-0" />
          <div>
            <span className="font-serif font-bold text-base text-[#344E41]">Reply Time: 1 to 2 Business Days</span>
            <p className="text-xs text-[#2B2B2B]/70 mt-0.5">
              Support covers template setup, included code questions, and hosting guidance. Does not cover custom feature programming or bespoke re-designs.
            </p>
          </div>
        </div>
      </div>

      {/* Support Form & 5 Common Problems */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="support-ticket-form">
        {/* Support Form */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E9E4D8] shadow-sm">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#344E41]">
                Submit a Support Request
              </h3>
              <p className="text-xs text-[#2B2B2B]/70 leading-relaxed">
                Provide as much detail as possible so we can diagnose and resolve the issue quickly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#2B2B2B]/80 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Elena Vance"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9E4D8] text-xs focus:border-[#344E41] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2B2B2B]/80 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="elena@yourpractice.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9E4D8] text-xs focus:border-[#344E41] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#2B2B2B]/80 mb-1">Order Email (if different)</label>
                  <input
                    type="email"
                    value={orderEmail}
                    onChange={(e) => setOrderEmail(e.target.value)}
                    placeholder="purchased@lemon.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9E4D8] text-xs focus:border-[#344E41] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2B2B2B]/80 mb-1">Template</label>
                  <select
                    value={template}
                    onChange={(e) => setTemplate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9E4D8] text-xs focus:border-[#344E41] outline-none bg-white"
                  >
                    <option value="Clarity Coach Template">Clarity Coach Template</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#2B2B2B]/80 mb-1">Describe the problem</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What step are you on, and what error or unexpected behavior are you seeing?"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9E4D8] text-xs focus:border-[#344E41] outline-none"
                />
              </div>

              {/* File upload simulation for screenshot */}
              <div>
                <label className="block text-xs font-medium text-[#2B2B2B]/80 mb-1">Attach a Screenshot (optional)</label>
                <div className="border border-dashed border-[#E9E4D8] rounded-xl p-3 text-center bg-[#FAF7F2]">
                  <input
                    type="file"
                    id="screenshot-upload"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFileName(e.target.files[0].name);
                      }
                    }}
                  />
                  <label htmlFor="screenshot-upload" className="cursor-pointer text-xs flex items-center justify-center gap-2 text-[#344E41]">
                    <Upload className="w-4 h-4 text-[#A3B18A]" />
                    <span>{fileName ? `Attached: ${fileName}` : 'Click to select screenshot (PNG/JPEG)'}</span>
                  </label>
                </div>
              </div>

              {/* Cloudflare Turnstile Spam Protection Badge Simulation */}
              <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E9E4D8] flex items-center justify-between text-[11px] text-[#2B2B2B]/70">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Cloudflare Turnstile Verified (Spam Protection Active)</span>
                </div>
                <span className="font-mono text-emerald-700 font-bold">✓ Secure</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#344E41] hover:bg-[#283d33] text-white text-xs font-semibold transition-colors cursor-pointer min-h-[44px]"
              >
                Send Support Ticket
              </button>
            </form>
          ) : (
            <div className="text-center py-10 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#344E41] mx-auto" />
              <h4 className="font-serif text-2xl font-bold text-[#344E41]">Ticket Submitted!</h4>
              <p className="text-xs text-[#2B2B2B]/80 max-w-sm mx-auto">
                Thank you, {name}. A ticket has been created and Alex will personally review your details and respond to <strong>{email}</strong> within 1 to 2 business days.
              </p>
            </div>
          )}
        </div>

        {/* 5 Most Common Problems with Fixes */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A3B18A]">
            Quick Troubleshooting
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#344E41]">
            5 Most Common Problems & Fixes
          </h3>

          <div className="space-y-3">
            {commonProblems.map((cp, idx) => {
              const isOpen = openProblem === idx;

              return (
                <div key={idx} className="bg-white rounded-2xl border border-[#E9E4D8] overflow-hidden">
                  <button
                    onClick={() => setOpenProblem(isOpen ? null : idx)}
                    className="w-full py-3.5 px-4 text-left flex items-center justify-between gap-3 text-xs font-bold text-[#344E41]"
                  >
                    <span>{cp.problem}</span>
                    <span className={`w-5 h-5 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-3 h-3 text-[#344E41]" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-[#2B2B2B]/80 leading-relaxed border-t border-[#FAF7F2]">
                      <p>{cp.fix}</p>
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
