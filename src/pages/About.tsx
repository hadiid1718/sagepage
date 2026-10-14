import React from 'react';
import { ArrowRight, Check, Code, Zap, HeartHandshake, User, Sparkles } from 'lucide-react';

interface AboutProps {
  navigate: (route: string) => void;
}

export const About: React.FC<AboutProps> = ({ navigate }) => {
  const valueCards = [
    {
      title: 'Simple',
      icon: <Code className="w-5 h-5 text-[#344E41]" />,
      desc: 'No confusing dashboards, locked-in monthly fees, or fragile page-builder plugins. Clean code you own permanently.'
    },
    {
      title: 'Fast',
      icon: <Zap className="w-5 h-5 text-[#344E41]" />,
      desc: 'Static HTML and Tailwind CSS loads in milliseconds. High Lighthouse scores keep search engines and mobile visitors happy.'
    },
    {
      title: 'Supported',
      icon: <HeartHandshake className="w-5 h-5 text-[#344E41]" />,
      desc: 'Real email support within 1 to 2 business days. Plus video guides, copy prompts, and step-by-step documentation.'
    }
  ];

  const expectations = [
    'Clean, commented HTML code with bracketed text placeholders',
    'A central theme.css stylesheet so all colors change in one spot',
    'Zero mandatory framework builds—double-click index.html to preview',
    'Free lifetime template updates delivered directly to your email',
    'Honest, patient support if you ever get stuck with deployment'
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20">
      {/* Split Hero: Portrait on Left, Story on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Portrait Photo Container (4:5 aspect ratio, warm light, plants) */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm bg-[#E9E4D8]/60 p-4 rounded-3xl border border-[#E9E4D8] shadow-md">
            <div className="aspect-[4/5] bg-gradient-to-b from-[#FAF7F2] to-[#E9E4D8] rounded-2xl overflow-hidden flex flex-col justify-between p-6 relative">
              <div className="flex justify-between items-center text-xs">
                <span className="px-3 py-1 bg-white/90 rounded-full font-medium text-[#344E41]">
                  Web Designer & Founder
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#A3B18A]" />
              </div>

              {/* Stylized Developer Portrait */}
              <div className="my-auto text-center space-y-3">
                <div className="w-28 h-28 rounded-full bg-[#A3B18A]/30 mx-auto flex items-center justify-center text-[#344E41] shadow-inner">
                  <User className="w-14 h-14 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#344E41]">Alex Carter</h3>
                  <p className="text-xs text-[#2B2B2B]/70 mt-0.5">Founder & Lead Engineer, Sagepage Studio</p>
                </div>
              </div>

              <div className="bg-white/95 rounded-xl p-3 border border-[#E9E4D8] text-center text-xs text-[#2B2B2B]/80 font-mono">
                "Crafting calm, accessible code since 2016."
              </div>
            </div>
          </div>
        </div>

        {/* Right: Story */}
        <div className="lg:col-span-7 space-y-6">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#E9E4D8] text-[#344E41] text-xs font-semibold uppercase tracking-wider">
            Behind Sagepage Studio
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl text-[#344E41] leading-tight">
            Hi, I am Alex. I build websites so you do not have to.
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-[#2B2B2B]/85 leading-relaxed">
            <p>
              <strong>Why I make templates for coaches:</strong> Over the past eight years, I watched brilliant coaches, therapists, and mentors get trapped in tech purgatory. They spent thousands on custom agencies or spent entire months wrestling with convoluted page builders, only to end up with a slow website that broke on mobile.
            </p>
            <p>
              <strong>What I believe in:</strong> I believe coaches should spend their energy coaching, not fixing broken WordPress plugins or paying $40 every month for software they barely use. A website should be fast, quiet, beautiful, and get straight to the point: helping a visitor understand your gift and book a call.
            </p>
            <p>
              <strong>How I work:</strong> I build everything in standard, clean HTML5, Tailwind CSS, and lightweight JavaScript. Every template is rigorously tested, mobile-first, and pre-organized so you can literally double-click it, change your words, and launch in a single relaxed weekend.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => navigate('shop')}
              className="px-8 py-3.5 rounded-full bg-[#344E41] hover:bg-[#283d33] text-white font-medium text-sm transition-colors flex items-center gap-2 cursor-pointer shadow-xs min-h-[44px]"
            >
              <span>Browse Templates</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 3 Value Cards: Simple, Fast, Supported */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {valueCards.map((v, i) => (
          <div key={i} className="p-8 bg-white rounded-3xl border border-[#E9E4D8] space-y-3 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#E9E4D8]/60 flex items-center justify-center">
              {v.icon}
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#344E41]">{v.title}</h3>
            <p className="text-sm text-[#2B2B2B]/80 leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>

      {/* 'What You Can Expect' List */}
      <div className="bg-[#FAF7F2] border border-[#E9E4D8] rounded-3xl p-8 sm:p-12 space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A3B18A]">
            The Sagepage Standard
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#344E41] mt-1">
            What You Can Expect
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#2B2B2B]/85">
          {expectations.map((exp, idx) => (
            <li key={idx} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#E9E4D8]/70">
              <span className="w-5 h-5 rounded-full bg-[#A3B18A]/25 text-[#344E41] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </span>
              <span>{exp}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
