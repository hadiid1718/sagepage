import React, { useState } from 'react';
import { Mail, CheckCircle2, Tag, Calendar, Sparkles } from 'lucide-react';

interface ChangelogProps {
  navigate: (route: string) => void;
}

export const Changelog: React.FC<ChangelogProps> = ({ navigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const releases = [
    {
      version: 'v1.0.1',
      date: 'October 12, 2026',
      tags: [
        { label: 'Improved', type: 'improved' },
        { label: 'Fixed', type: 'fixed' }
      ],
      notes: [
        'Improved: Added pre-configured honeypot field in free-guide.html to automatically prevent spam submissions without CAPTCHA friction.',
        'Improved: Included step-by-step Netlify Drop guide in docs/deploy.md for 60-second drag-and-drop hosting.',
        'Fixed: Refined mobile tap targets on Calendly scheduling button to strictly exceed 44px minimum for accessibility.'
      ]
    },
    {
      version: 'v1.0.0',
      date: 'October 5, 2026',
      tags: [
        { label: 'New', type: 'new' }
      ],
      notes: [
        'New: Initial launch release of Clarity coach website template.',
        'New: 7 fully coded pages: Home, About, Work With Me, Book a Call, Free Guide, Thank You, and 404.',
        'New: Unified theme.css with custom properties for instant 60-second color switching.',
        'New: Centralized config.js containing booking link, brand title, and support email.',
        'New: Accessible WCAG AA compliance with visible focus styles and skip links.',
        'New: Zero-build setup mode allows double-clicking index.html to preview locally in any web browser.'
      ]
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#E9E4D8] text-[#344E41] text-xs font-semibold uppercase tracking-wider">
          Releases & Maintenance
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#344E41] tracking-tight">
          Changelog
        </h1>
        <p className="text-base text-[#2B2B2B]/80">
          Continuous improvements, bug fixes, and feature additions for all template owners.
        </p>
      </div>

      {/* Subscribe to Updates Form */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E9E4D8] shadow-xs text-center space-y-3 max-w-xl mx-auto">
        <h3 className="font-serif text-xl font-bold text-[#344E41]">
          Subscribe to release notifications
        </h3>
        <p className="text-xs text-[#2B2B2B]/70 max-w-sm mx-auto">
          Get an email whenever an update, bug fix, or new layout pattern is shipped.
        </p>
        {subscribed ? (
          <div className="p-3 bg-[#A3B18A]/20 text-[#344E41] rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#344E41]" />
            <span>Subscribed to template update alerts!</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 pt-1 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-2.5 rounded-full border border-[#E9E4D8] text-xs outline-none focus:border-[#344E41]"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-full bg-[#344E41] hover:bg-[#283d33] text-white text-xs font-semibold cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>

      {/* List of Releases, newest first */}
      <div className="space-y-8">
        {releases.map((rel) => (
          <div
            key={rel.version}
            className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E9E4D8] space-y-4 shadow-xs"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E9E4D8]">
              <div className="flex items-center gap-3">
                <span className="font-serif text-2xl font-bold text-[#344E41]">
                  {rel.version}
                </span>
                <div className="flex gap-1.5">
                  {rel.tags.map((t, i) => (
                    <span
                      key={i}
                      className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-md ${
                        t.type === 'new'
                          ? 'bg-[#344E41] text-white'
                          : t.type === 'improved'
                          ? 'bg-[#A3B18A]/30 text-[#344E41]'
                          : 'bg-[#D9A68B]/30 text-[#2B2B2B]'
                      }`}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-xs text-[#2B2B2B]/60 font-mono flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {rel.date}
              </span>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-[#2B2B2B]/85">
              {rel.notes.map((note, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#A3B18A] font-bold mt-0.5">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
