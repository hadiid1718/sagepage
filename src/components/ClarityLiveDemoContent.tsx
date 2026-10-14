import React, { useState } from 'react';
import { Calendar, CheckCircle2, ArrowRight, Star, Clock, Shield, Sparkles, ChevronDown, Check, User, Heart, MessageSquare } from 'lucide-react';

interface ClarityProps {
  initialPage?: 'home' | 'about' | 'work-with-me' | 'book-a-call' | 'free-guide' | 'thank-you';
  onNavigateParentPage?: (page: string) => void;
}

export const ClarityLiveDemoContent: React.FC<ClarityProps> = ({ initialPage = 'home' }) => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'work-with-me' | 'book-a-call' | 'free-guide' | 'thank-you'>(initialPage);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [leadEmail, setLeadEmail] = useState('');
  const [leadName, setLeadName] = useState('');
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookedCall, setBookedCall] = useState(false);

  const handleNav = (p: typeof currentPage) => {
    setCurrentPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2B2B2B] font-sans selection:bg-[#A3B18A]/30">
      {/* Template Demo Notice Header */}
      <div className="bg-[#344E41] text-[#FAF7F2] text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#D9A68B]" />
        <span>Live Interactive Preview: Clarity Coach Template by Sagepage Studio</span>
      </div>

      {/* Clarity Sticky Navigation */}
      <header className="sticky top-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E9E4D8] px-4 sm:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 text-left group"
          >
            <div className="w-7 h-7 rounded-lg bg-[#344E41] flex items-center justify-center relative">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D9A68B]" />
            </div>
            <span className="font-serif text-lg font-bold text-[#344E41]">
              Clarity Coaching
            </span>
          </button>

          <nav className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm">
            <button
              onClick={() => handleNav('about')}
              className={`hover:text-[#344E41] transition-colors ${currentPage === 'about' ? 'font-bold text-[#344E41]' : 'text-[#2B2B2B]/80'}`}
            >
              About
            </button>
            <button
              onClick={() => handleNav('work-with-me')}
              className={`hover:text-[#344E41] transition-colors ${currentPage === 'work-with-me' ? 'font-bold text-[#344E41]' : 'text-[#2B2B2B]/80'}`}
            >
              Work With Me
            </button>
            <button
              onClick={() => handleNav('free-guide')}
              className={`hover:text-[#344E41] transition-colors ${currentPage === 'free-guide' ? 'font-bold text-[#344E41]' : 'text-[#2B2B2B]/80'}`}
            >
              Free Guide
            </button>
            <button
              onClick={() => handleNav('book-a-call')}
              className="px-4 py-2 rounded-full bg-[#344E41] text-white text-xs font-medium hover:bg-[#283d33] transition-all min-h-[38px] flex items-center"
            >
              Book a Call
            </button>
          </nav>
        </div>
      </header>

      {/* PAGE 1: CLARITY HOME */}
      {currentPage === 'home' && (
        <main className="animate-in fade-in duration-200">
          {/* Hero Section */}
          <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E9E4D8] text-[#344E41] text-xs font-semibold tracking-wide">
                  1:1 Executive & Leadership Mentorship
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#344E41] leading-[1.12]">
                  Stop second-guessing. Start leading with calm clarity.
                </h1>
                <p className="text-base sm:text-lg text-[#2B2B2B]/80 leading-relaxed max-w-xl">
                  I help mid-career leaders, directors, and ambitious founders eliminate burnout, master decisive communication, and build high-impact teams in 90 days.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => handleNav('book-a-call')}
                    className="px-7 py-3.5 rounded-full bg-[#344E41] hover:bg-[#283d33] text-white font-medium text-sm sm:text-base flex items-center gap-2 shadow-sm min-h-[44px]"
                  >
                    <span>Schedule Discovery Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleNav('free-guide')}
                    className="px-7 py-3.5 rounded-full border border-[#344E41] text-[#344E41] hover:bg-[#E9E4D8]/40 font-medium text-sm sm:text-base min-h-[44px]"
                  >
                    Get Free 27-Point Guide
                  </button>
                </div>
                <div className="flex items-center gap-3 pt-4 text-xs text-[#2B2B2B]/70">
                  <div className="flex -space-x-2">
                    {['#344E41', '#A3B18A', '#D9A68B'].map((color, idx) => (
                      <div
                        key={idx}
                        className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] text-white font-bold"
                        style={{ backgroundColor: color }}
                      >
                        {['EK', 'MR', 'TC'][idx]}
                      </div>
                    ))}
                  </div>
                  <span>Trusted by 140+ executive leaders across creative & tech industries</span>
                </div>
              </div>

              {/* Hero Image Mockup (Warm editorial portrait) */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md bg-[#E9E4D8] rounded-3xl p-3 shadow-md border border-[#E9E4D8]">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-b from-[#FAF7F2] to-[#E9E4D8] flex flex-col justify-between p-6">
                    {/* Editorial photo placeholder styling */}
                    <div className="flex justify-between items-start">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-xs rounded-full text-[11px] font-semibold text-[#344E41]">
                        Elena Vance, PCC
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#344E41] text-white flex items-center justify-center text-xs">
                        ★ 5.0
                      </div>
                    </div>
                    
                    <div className="my-auto py-8 text-center space-y-3">
                      <div className="w-24 h-24 rounded-full bg-[#A3B18A]/30 mx-auto flex items-center justify-center text-[#344E41]">
                        <User className="w-12 h-12 stroke-[1.5]" />
                      </div>
                      <p className="font-serif text-2xl text-[#344E41] font-bold">
                        "Your leadership should feel purposeful, not exhausting."
                      </p>
                      <p className="text-xs text-[#2B2B2B]/70">
                        Certified Executive Coach & Former VP of Operations
                      </p>
                    </div>

                    <div className="bg-white/95 rounded-xl p-3 border border-[#E9E4D8] flex items-center justify-between text-xs">
                      <span className="font-medium text-[#344E41]">Next Available Intake:</span>
                      <span className="font-bold text-[#D9A68B]">November Cohort (2 spots)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trust Strip */}
          <section className="border-y border-[#E9E4D8] bg-white py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="font-serif text-3xl font-bold text-[#344E41]">140+</p>
                <p className="text-xs text-[#2B2B2B]/70 mt-1 uppercase tracking-wider">Executives Mentored</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-[#344E41]">90 Days</p>
                <p className="text-xs text-[#2B2B2B]/70 mt-1 uppercase tracking-wider">Transformation Sprint</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-[#344E41]">100%</p>
                <p className="text-xs text-[#2B2B2B]/70 mt-1 uppercase tracking-wider">Confidential Space</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-[#344E41]">4.95 / 5</p>
                <p className="text-xs text-[#2B2B2B]/70 mt-1 uppercase tracking-wider">Client Rating</p>
              </div>
            </div>
          </section>

          {/* Problem Strip (Your website should help people say yes) */}
          <section className="max-w-6xl mx-auto px-4 sm:px-8 py-20">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D9A68B]">
                The Bottleneck
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#344E41] mt-2">
                Your leadership should empower you, not deplete you.
              </h2>
              <p className="text-[#2B2B2B]/80 text-base mt-3">
                Most senior professionals hit an invisible ceiling when they try to carry their entire organization on willpower alone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-[#E9E4D8] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#344E41] flex items-center justify-center font-serif font-bold text-lg">
                  01
                </div>
                <h3 className="font-serif text-xl font-bold text-[#344E41]">Chronic Decision Fatigue</h3>
                <p className="text-sm text-[#2B2B2B]/80 leading-relaxed">
                  Every meeting requires your input. You spend your weekends catching up on Slack instead of recharging or driving high-level strategy.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-[#E9E4D8] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#344E41] flex items-center justify-center font-serif font-bold text-lg">
                  02
                </div>
                <h3 className="font-serif text-xl font-bold text-[#344E41]">Imposter Syndrome at Scale</h3>
                <p className="text-sm text-[#2B2B2B]/80 leading-relaxed">
                  As your team grows, the stakes heighten. You worry that one wrong move will undermine the credibility you spent a decade building.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-[#E9E4D8] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#344E41] flex items-center justify-center font-serif font-bold text-lg">
                  03
                </div>
                <h3 className="font-serif text-xl font-bold text-[#344E41]">Reactive Firefighting</h3>
                <p className="text-sm text-[#2B2B2B]/80 leading-relaxed">
                  You start Monday with clear intentions, but by noon you are extinguishing someone else’s crisis. Your long-term vision gets postponed again.
                </p>
              </div>
            </div>
          </section>

          {/* 3-Step Method */}
          <section className="bg-[#E9E4D8]/30 border-y border-[#E9E4D8] py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-8">
              <div className="text-center max-w-xl mx-auto mb-14">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#A3B18A]">
                  Our Framework
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#344E41] mt-2">
                  The 3-Stage Clarity Methodology
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-[#E9E4D8] relative">
                  <span className="text-xs font-bold text-[#A3B18A] tracking-wider uppercase">Stage 1</span>
                  <h3 className="font-serif text-2xl font-bold text-[#344E41] mt-2 mb-3">Audit & Untangle</h3>
                  <p className="text-sm text-[#2B2B2B]/80 leading-relaxed">
                    We map your energy drains, analyze recurring operational frictions, and isolate the top 3 highest-leverage priorities for your role.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-[#E9E4D8] relative">
                  <span className="text-xs font-bold text-[#344E41] tracking-wider uppercase">Stage 2</span>
                  <h3 className="font-serif text-2xl font-bold text-[#344E41] mt-2 mb-3">Systematize Delegation</h3>
                  <p className="text-sm text-[#2B2B2B]/80 leading-relaxed">
                    Build autonomous decision frameworks so your direct reports make confident choices without requiring your stamp of approval on every detail.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-[#E9E4D8] relative">
                  <span className="text-xs font-bold text-[#D9A68B] tracking-wider uppercase">Stage 3</span>
                  <h3 className="font-serif text-2xl font-bold text-[#344E41] mt-2 mb-3">Sustained Execution</h3>
                  <p className="text-sm text-[#2B2B2B]/80 leading-relaxed">
                    Establish resilient weekly rhythms, boundary scripts, and calm leadership habits that sustain high performance without personal sacrifice.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial Box */}
          <section className="max-w-4xl mx-auto px-4 sm:px-8 py-20 text-center">
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E9E4D8] shadow-sm">
              <div className="flex justify-center text-[#D9A68B] gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <blockquote className="font-serif text-xl sm:text-2xl text-[#344E41] leading-relaxed italic">
                "Working with Elena shifted me from working 65 hours a week down to 42, while my engineering division doubled its shipping velocity. I finally have mental space to think ahead instead of panicking."
              </blockquote>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#344E41] text-white flex items-center justify-center font-bold text-xs">
                  MJ
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-[#344E41]">Marcus Jennings</p>
                  <p className="text-xs text-[#2B2B2B]/60">Chief Product Officer, Stripe Partner Labs</p>
                </div>
              </div>
            </div>
          </section>

          {/* Lead Magnet Freebie Box */}
          <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-20">
            <div className="bg-[#344E41] text-[#FAF7F2] rounded-3xl p-8 sm:p-14 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[#A3B18A]/25 text-[#FAF7F2] text-xs font-semibold">
                  Complimentary 1-Hour Recovery Guide
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-white">
                  The 27-Point Executive Clarity Checklist
                </h3>
                <p className="text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed">
                  Download the exact self-assessment checklist our private 1:1 clients use on day one to spot calendar waste and reclaim 10 hours every week.
                </p>
              </div>
              <div className="md:col-span-5">
                <button
                  onClick={() => handleNav('free-guide')}
                  className="w-full py-4 rounded-full bg-[#FAF7F2] text-[#344E41] hover:bg-white font-medium text-base transition-colors shadow-md min-h-[44px]"
                >
                  Download Free Checklist →
                </button>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* PAGE 2: CLARITY ABOUT */}
      {currentPage === 'about' && (
        <main className="max-w-4xl mx-auto px-4 sm:px-8 py-16 animate-in fade-in duration-200">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D9A68B]">
              Meet Elena Vance
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#344E41]">
              Hi, I am Elena. I help leaders lead with calm conviction.
            </h1>
            
            <div className="p-8 bg-white rounded-3xl border border-[#E9E4D8] space-y-6 text-[#2B2B2B]/85 text-base sm:text-lg leading-relaxed">
              <p>
                Ten years ago, I was running operations for a 200-person tech company. On paper, everything was thriving: we hit every quarterly target and raised Series B. In reality, my nervous system was fried. I checked Slack at 3:00 AM, agonized over difficult feedback conversations, and felt like an imposter.
              </p>
              <p>
                I realized that conventional management training teaches you tactics and spreadsheets, but nobody teaches you how to maintain emotional regulation, quiet your self-doubt, and make hard calls without collapsing into exhaustion.
              </p>
              <p>
                Today, I dedicate my practice to coaching founders, technical directors, and high-impact leaders. My methodology isn’t about fluffy affirmations—it is about rigorous systems, compassionate candor, and sustainable boundaries that unlock your best work.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-6 bg-[#FAF7F2] rounded-2xl border border-[#E9E4D8]">
                <h3 className="font-serif text-lg font-bold text-[#344E41]">PCC Certified</h3>
                <p className="text-xs text-[#2B2B2B]/70 mt-1">International Coaching Federation accredited with 1,200+ logged hours.</p>
              </div>
              <div className="p-6 bg-[#FAF7F2] rounded-2xl border border-[#E9E4D8]">
                <h3 className="font-serif text-lg font-bold text-[#344E41]">Former VP Ops</h3>
                <p className="text-xs text-[#2B2B2B]/70 mt-1">Real-world executive experience scaling teams from 15 to 200 employees.</p>
              </div>
              <div className="p-6 bg-[#FAF7F2] rounded-2xl border border-[#E9E4D8]">
                <h3 className="font-serif text-lg font-bold text-[#344E41]">Evidence-Based</h3>
                <p className="text-xs text-[#2B2B2B]/70 mt-1">Grounding frameworks in cognitive psychology and organizational design.</p>
              </div>
            </div>

            <div className="pt-6 text-center">
              <button
                onClick={() => handleNav('book-a-call')}
                className="px-8 py-4 rounded-full bg-[#344E41] text-white font-medium text-base hover:bg-[#283d33]"
              >
                Schedule an Introductory Call →
              </button>
            </div>
          </div>
        </main>
      )}

      {/* PAGE 3: CLARITY WORK WITH ME */}
      {currentPage === 'work-with-me' && (
        <main className="max-w-5xl mx-auto px-4 sm:px-8 py-16 animate-in fade-in duration-200">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A3B18A]">
              Coaching Programs
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#344E41] mt-2">
              Structured Guidance for Intentional Leaders
            </h1>
            <p className="text-[#2B2B2B]/80 text-base mt-3">
              Transparent packages tailored to where you are right now. No hidden up-sells.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Package 1 */}
            <div className="bg-white rounded-3xl p-8 border-2 border-[#344E41] relative flex flex-col justify-between shadow-sm">
              <div className="absolute -top-3 right-6 bg-[#344E41] text-white text-[11px] uppercase tracking-wider font-bold py-1 px-3 rounded-full">
                Most Popular
              </div>
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#A3B18A] uppercase tracking-wider">3-Month Private Mentorship</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#344E41]">
                  Executive 1:1 Intensive
                </h3>
                <p className="text-sm text-[#2B2B2B]/80">
                  Comprehensive partnership designed to overhaul your leadership style, build executive presence, and safeguard your mental stamina.
                </p>
                <div className="py-4 border-y border-[#E9E4D8]">
                  <span className="font-serif text-3xl font-bold text-[#344E41]">$2,400</span>
                  <span className="text-xs text-[#2B2B2B]/60 ml-2">or 3 payments of $850</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#2B2B2B]/85">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A3B18A] shrink-0" />
                    <span>6 x 60-Minute Bi-Weekly Video Deep Dives</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A3B18A] shrink-0" />
                    <span>Unlimited Asynchronous Voice & Text (Voxer / Slack)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A3B18A] shrink-0" />
                    <span>Custom Notion Workspace & Milestone Tracker</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A3B18A] shrink-0" />
                    <span>Delegation & 1:1 Framework Templates</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => handleNav('book-a-call')}
                className="mt-8 w-full py-3.5 rounded-full bg-[#344E41] text-white font-medium text-sm hover:bg-[#283d33]"
              >
                Apply for 1:1 Intensive
              </button>
            </div>

            {/* Package 2 */}
            <div className="bg-white rounded-3xl p-8 border border-[#E9E4D8] flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#D9A68B] uppercase tracking-wider">Focused Half-Day</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#344E41]">
                  Strategic Roadmap Deep Dive
                </h3>
                <p className="text-sm text-[#2B2B2B]/80">
                  A high-velocity half-day intensive to solve one pressing organizational bottleneck, restructure your calendar, or prepare for a major transition.
                </p>
                <div className="py-4 border-y border-[#E9E4D8]">
                  <span className="font-serif text-3xl font-bold text-[#344E41]">$950</span>
                  <span className="text-xs text-[#2B2B2B]/60 ml-2">one-time investment</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#2B2B2B]/85">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A3B18A] shrink-0" />
                    <span>1 x 3.5-Hour Interactive Working Session</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A3B18A] shrink-0" />
                    <span>Pre-session 360-degree intake assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A3B18A] shrink-0" />
                    <span>30-Day Follow-Up Check-in Call (45 mins)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A3B18A] shrink-0" />
                    <span>Complete session recording & action transcript</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => handleNav('book-a-call')}
                className="mt-8 w-full py-3.5 rounded-full border border-[#344E41] text-[#344E41] font-medium text-sm hover:bg-[#E9E4D8]/40"
              >
                Book Roadmap Session
              </button>
            </div>
          </div>
        </main>
      )}

      {/* PAGE 4: CLARITY BOOK A CALL */}
      {currentPage === 'book-a-call' && (
        <main className="max-w-4xl mx-auto px-4 sm:px-8 py-16 animate-in fade-in duration-200">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A3B18A]">
              Discovery Session
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#344E41] mt-1">
              Schedule Your 30-Minute Discovery Call
            </h1>
            <p className="text-sm text-[#2B2B2B]/80 mt-2">
              A relaxed, zero-pressure conversation to discuss your goals, answer questions, and ensure we are the right mutual fit.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E9E4D8] shadow-sm">
            {!bookedCall ? (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-5 space-y-4">
                  <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#E9E4D8]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#344E41]">
                      <Clock className="w-4 h-4 text-[#A3B18A]" />
                      <span>30 Minutes · Zoom Video</span>
                    </div>
                    <p className="text-xs text-[#2B2B2B]/70 mt-2">
                      Please pick a time that allows you to be in a quiet space without distractions.
                    </p>
                  </div>

                  <div className="text-xs text-[#2B2B2B]/80 space-y-2">
                    <p className="font-semibold text-[#344E41]">What we will cover:</p>
                    <p>• Where you are spending the majority of your weekly energy</p>
                    <p>• What success looks like 90 days from now</p>
                    <p>• Whether 1:1 mentorship or the roadmap session fits best</p>
                  </div>
                </div>

                <div className="md:col-span-7">
                  <h4 className="font-serif font-bold text-[#344E41] text-base mb-3">
                    Select an Available Date & Time
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    {[
                      'Thu, Oct 15 · 10:00 AM',
                      'Thu, Oct 15 · 2:30 PM',
                      'Fri, Oct 16 · 11:00 AM',
                      'Fri, Oct 16 · 3:00 PM',
                      'Mon, Oct 19 · 9:30 AM',
                      'Mon, Oct 19 · 1:00 PM'
                    ].map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          selectedSlot === slot
                            ? 'bg-[#344E41] text-white border-[#344E41]'
                            : 'bg-[#FAF7F2] border-[#E9E4D8] hover:border-[#344E41] text-[#2B2B2B]'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>

                  {selectedSlot && (
                    <div className="mt-6 pt-4 border-t border-[#E9E4D8] space-y-3">
                      <p className="text-xs text-[#344E41] font-semibold">
                        Selected: {selectedSlot}
                      </p>
                      <button
                        onClick={() => setBookedCall(true)}
                        className="w-full py-3.5 rounded-full bg-[#344E41] text-white font-medium text-sm hover:bg-[#283d33]"
                      >
                        Confirm Booking ({selectedSlot})
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#A3B18A]/30 text-[#344E41] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#344E41]">Discovery Call Confirmed!</h3>
                <p className="text-sm text-[#2B2B2B]/80 max-w-md mx-auto">
                  A calendar invite and Zoom link have been scheduled for {selectedSlot}. Elena looks forward to connecting with you.
                </p>
                <button
                  onClick={() => setBookedCall(false)}
                  className="px-6 py-2.5 rounded-full border border-[#344E41] text-[#344E41] text-xs font-medium"
                >
                  Reschedule / Test again
                </button>
              </div>
            )}
          </div>
        </main>
      )}

      {/* PAGE 5: CLARITY FREE GUIDE */}
      {currentPage === 'free-guide' && (
        <main className="max-w-4xl mx-auto px-4 sm:px-8 py-16 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D9A68B]">
                Free Downloadable Tool
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl text-[#344E41]">
                The 27-Point Executive Clarity Checklist
              </h1>
              <p className="text-base text-[#2B2B2B]/80 leading-relaxed">
                Learn the exact 5 warning signs that lead to calendar burnout, audit your commitments in under 20 minutes, and implement our 1-page delegation matrix.
              </p>

              <ul className="space-y-2 text-sm text-[#2B2B2B]/85 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#A3B18A] shrink-0" />
                  <span>Spot the 5 hidden energy vampires draining your weekly schedule</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#A3B18A] shrink-0" />
                  <span>The 3 polite boundary scripts to decline non-essential meetings</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#A3B18A] shrink-0" />
                  <span>Printable 1-page delegation framework you can share with your team</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-5">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E9E4D8] shadow-sm">
                {!leadSubmitted ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setLeadSubmitted(true);
                      handleNav('thank-you');
                    }}
                    className="space-y-3"
                  >
                    <h3 className="font-serif text-xl font-bold text-[#344E41]">
                      Get Instant Access
                    </h3>
                    <p className="text-xs text-[#2B2B2B]/70">
                      Delivered immediately to your inbox as a printable PDF.
                    </p>
                    <div>
                      <label className="block text-[11px] text-[#2B2B2B]/70 mb-1">First Name</label>
                      <input
                        type="text"
                        required
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                        placeholder="Elena"
                        className="w-full px-3 py-2 text-xs rounded-xl border border-[#E9E4D8] outline-none focus:border-[#344E41]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-[#2B2B2B]/70 mb-1">Work Email</label>
                      <input
                        type="email"
                        required
                        value={leadEmail}
                        onChange={(e) => setLeadEmail(e.target.value)}
                        placeholder="elena@company.com"
                        className="w-full px-3 py-2 text-xs rounded-xl border border-[#E9E4D8] outline-none focus:border-[#344E41]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-full bg-[#344E41] text-white font-medium text-xs hover:bg-[#283d33] transition-colors"
                    >
                      Send Me the Checklist →
                    </button>
                    <p className="text-[10px] text-center text-[#2B2B2B]/50">
                      Zero spam. Unsubscribe at any time.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-6">
                    <CheckCircle2 className="w-10 h-10 text-[#344E41] mx-auto mb-2" />
                    <h4 className="font-serif font-bold text-lg text-[#344E41]">Checklist Sent!</h4>
                    <p className="text-xs text-[#2B2B2B]/70 mt-1">
                      Check your inbox in 2 minutes.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      )}

      {/* PAGE 6: CLARITY THANK YOU */}
      {currentPage === 'thank-you' && (
        <main className="max-w-xl mx-auto px-4 py-20 text-center animate-in fade-in duration-200">
          <div className="w-16 h-16 rounded-full bg-[#A3B18A]/30 text-[#344E41] flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-[#344E41]">
            Your Checklist Is On Its Way
          </h1>
          <p className="text-sm text-[#2B2B2B]/80 mt-2 max-w-md mx-auto">
            Please check your inbox in the next few minutes (and your promotions tab, just in case).
          </p>
          <div className="mt-8 p-6 bg-white rounded-2xl border border-[#E9E4D8] text-left">
            <p className="text-xs font-bold text-[#A3B18A] uppercase tracking-wider">While you wait:</p>
            <h4 className="font-serif text-lg font-bold text-[#344E41] mt-1">Ready to solve the root problem?</h4>
            <p className="text-xs text-[#2B2B2B]/70 mt-1">
              Read how our 90-day 1:1 Executive Intensive creates lasting freedom for leaders.
            </p>
            <button
              onClick={() => handleNav('work-with-me')}
              className="mt-4 px-5 py-2.5 rounded-full bg-[#344E41] text-white text-xs font-medium"
            >
              Explore 1:1 Coaching →
            </button>
          </div>
        </main>
      )}

      {/* Clarity Footer */}
      <footer className="border-t border-[#E9E4D8] py-10 px-4 sm:px-8 bg-[#FAF7F2] text-xs text-[#2B2B2B]/70">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Clarity Coaching · Built with Clarity Template by Sagepage Studio</p>
          <div className="flex gap-4">
            <button onClick={() => handleNav('home')} className="hover:text-[#344E41]">Home</button>
            <button onClick={() => handleNav('about')} className="hover:text-[#344E41]">About</button>
            <button onClick={() => handleNav('work-with-me')} className="hover:text-[#344E41]">Programs</button>
            <button onClick={() => handleNav('free-guide')} className="hover:text-[#344E41]">Free Guide</button>
            <button onClick={() => handleNav('book-a-call')} className="hover:text-[#344E41]">Book Call</button>
          </div>
        </div>
      </footer>
    </div>
  );
};
