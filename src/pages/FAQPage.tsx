import React, { useState } from 'react';
import { ChevronDown, Mail, ArrowRight, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS, FAQItem } from '../data/faq';

interface FAQPageProps {
  navigate: (route: string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ navigate }) => {
  const [activeGroup, setActiveGroup] = useState<'All' | 'Buying' | 'Using' | 'Support'>('All');
  const [openId, setOpenId] = useState<string | null>('run-it');

  const groups = ['All', 'Buying', 'Using', 'Support'] as const;

  const filteredItems = FAQ_ITEMS.filter((item) => {
    if (activeGroup === 'All') return true;
    return item.category === activeGroup;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Schema.org FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_ITEMS.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
              }
            }))
          })
        }}
      />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#E9E4D8] text-[#344E41] text-xs font-semibold uppercase tracking-wider">
          Knowledge Base
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#344E41] tracking-tight">
          Frequently asked questions
        </h1>
        <p className="text-lg text-[#2B2B2B]/80">
          Everything you need to know before you buy.
        </p>

        {/* Group Selector */}
        <div className="pt-4 flex justify-center gap-2">
          {groups.map((grp) => (
            <button
              key={grp}
              onClick={() => setActiveGroup(grp)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all min-h-[38px] cursor-pointer ${
                activeGroup === grp
                  ? 'bg-[#344E41] text-white shadow-xs'
                  : 'bg-white text-[#2B2B2B] border border-[#E9E4D8] hover:bg-[#FAF7F2]'
              }`}
            >
              {grp}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion list */}
      <div className="space-y-3">
        {filteredItems.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#E9E4D8] overflow-hidden transition-all shadow-xs"
            >
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-serif text-lg font-bold text-[#344E41] hover:text-[#283d33] cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-sans font-semibold uppercase px-2 py-0.5 rounded bg-[#FAF7F2] text-[#A3B18A] border border-[#E9E4D8]">
                    {item.category}
                  </span>
                  <span>{item.question}</span>
                </div>
                <span
                  className={`w-8 h-8 rounded-full bg-[#FAF7F2] flex items-center justify-center text-sm font-sans shrink-0 transition-transform ${
                    isOpen ? 'rotate-180 bg-[#E9E4D8]' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4 text-[#344E41]" />
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-sm text-[#2B2B2B]/80 leading-relaxed border-t border-[#FAF7F2]">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Button: 'Still unsure? Email me.' */}
      <div className="text-center pt-8 border-t border-[#E9E4D8] space-y-3">
        <p className="text-sm text-[#2B2B2B]/70">Have a specific question about your tech stack or domain?</p>
        <button
          onClick={() => navigate('contact')}
          className="px-7 py-3.5 rounded-full bg-[#344E41] hover:bg-[#283d33] text-white text-sm font-medium transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs min-h-[44px]"
        >
          <Mail className="w-4 h-4" />
          <span>Still unsure? Email me.</span>
        </button>
      </div>
    </div>
  );
};
