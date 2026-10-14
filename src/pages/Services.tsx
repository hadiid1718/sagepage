import React, { useState } from 'react';
import { 
  Check, 
  Clock, 
  ArrowRight, 
  Upload, 
  Layers, 
  Eye, 
  Rocket, 
  ChevronDown, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';

interface ServicesProps {
  navigate: (route: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ navigate }) => {
  const [selectedPackage, setSelectedPackage] = useState<string>('Full Setup ($299)');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const packages = [
    {
      id: 'install-deploy',
      name: 'Install & Deploy',
      price: 99,
      deliveryTime: '24 to 48 Hours',
      description: 'Zero technical headache. We connect your domain and deploy your template live to Netlify or Cloudflare Pages with SSL.',
      features: [
        'Domain DNS configuration',
        'Netlify or Cloudflare setup',
        'Free automated SSL certificate',
        'Contact form endpoint connection',
        'Lighthouse performance verification'
      ]
    },
    {
      id: 'quick-setup',
      name: 'Quick Setup',
      price: 149,
      deliveryTime: '2 Business Days',
      description: 'Your brand assets and palette injected cleanly into the template by the developer.',
      features: [
        'Your brand colors updated in theme.css',
        'Custom typography & Google Fonts pairing',
        'High-resolution logo & favicon placement',
        'Booking calendar link hooked up',
        '1 round of styling adjustments'
      ]
    },
    {
      id: 'full-setup',
      name: 'Full Setup',
      price: 299,
      badge: 'Most Popular',
      deliveryTime: '4 Business Days',
      description: 'Everything in Quick Setup plus your photos and personalized copy placed across all 5 core pages.',
      features: [
        'Everything in Quick Setup',
        'Your custom text populated on all 5 pages',
        'WebP image compression & placement',
        'Contact & freebie forms wired to MailerLite',
        'SEO title and meta descriptions inserted',
        '2 rounds of revisions included'
      ]
    },
    {
      id: 'launch-ready',
      name: 'Launch Ready',
      price: 499,
      deliveryTime: '5 Business Days',
      description: 'The white-glove VIP experience. We handle complete page population, domain DNS, and one custom page build.',
      features: [
        'Everything in Full Setup',
        'One extra custom page built from scratch',
        'Full domain connection & live deployment',
        'Custom cookie notice & analytics integration',
        '30-minute 1:1 post-launch walkthrough call',
        '30 days of direct post-launch email support'
      ]
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Share your brand',
      description: 'Fill out our simple intake questionnaire with your logo, colors, copy doc, and headshots.',
      icon: <Upload className="w-6 h-6 text-[#344E41]" />
    },
    {
      step: '02',
      title: 'I build',
      description: 'I customize the template code, compress your assets, and tune styles for desktop and mobile.',
      icon: <Layers className="w-6 h-6 text-[#344E41]" />
    },
    {
      step: '03',
      title: 'You review',
      description: 'You receive a private staging URL to test links, check text, and provide your feedback.',
      icon: <Eye className="w-6 h-6 text-[#344E41]" />
    },
    {
      step: '04',
      title: 'Launch',
      description: 'We point your custom domain, confirm SSL, test forms live, and hand over the keys!',
      icon: <Rocket className="w-6 h-6 text-[#344E41]" />
    }
  ];

  const servicesFaqs = [
    {
      q: 'Do I need to purchase the template separately?',
      a: 'Yes, please purchase your Clarity license ($59) first, then request the customization package that matches your timeline.'
    },
    {
      q: 'What do I need to prepare before we start?',
      a: 'Your logo (vector SVG or transparent PNG), brand hex codes (if you have them), photos/headshots, and your page copy in a Google Doc or Word file.'
    },
    {
      q: 'What if I do not have finished copy yet?',
      a: 'No problem! Our included copy-prompts.md guide provides fill-in-the-blank frameworks for every single section.'
    },
    {
      q: 'Can you connect my existing domain registrar (GoDaddy, Namecheap, Google)?',
      a: 'Yes! We configure your DNS records directly on any registrar or provide copy-paste instructions for your records.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-24">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#E9E4D8] text-[#344E41] text-xs font-semibold uppercase tracking-wider">
          Done-For-You Implementation
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#344E41] tracking-tight">
          Want it set up for you?
        </h1>
        <p className="text-lg text-[#2B2B2B]/80 leading-relaxed">
          I customize your template with your brand, photos and words.
        </p>
      </div>

      {/* 4 Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg) => {
          const isHighlight = pkg.id === 'full-setup';

          return (
            <div
              key={pkg.id}
              className={`bg-white rounded-3xl p-6 sm:p-8 border flex flex-col justify-between transition-all ${
                isHighlight
                  ? 'border-[#344E41] ring-2 ring-[#344E41]/10 shadow-lg relative'
                  : 'border-[#E9E4D8] hover:border-[#A3B18A] shadow-xs'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 right-6 bg-[#344E41] text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">
                  {pkg.badge}
                </div>
              )}

              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A3B18A]">
                  Package
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#344E41]">
                  {pkg.name}
                </h3>
                
                <div className="py-2 border-y border-[#E9E4D8]">
                  <span className="font-serif text-4xl font-bold text-[#344E41]">${pkg.price}</span>
                  <span className="text-xs text-[#2B2B2B]/60 ml-1.5">one-time</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#2B2B2B]/70">
                  <Clock className="w-3.5 h-3.5 text-[#344E41]" />
                  <span>Turnaround: {pkg.deliveryTime}</span>
                </div>

                <p className="text-xs text-[#2B2B2B]/80 leading-relaxed pt-1">
                  {pkg.description}
                </p>

                <ul className="space-y-2 text-xs text-[#2B2B2B]/85 pt-2">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#A3B18A] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => {
                    setSelectedPackage(`${pkg.name} ($${pkg.price})`);
                    const formElem = document.getElementById('customization-form');
                    formElem?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full py-3 rounded-full text-xs font-semibold transition-colors cursor-pointer min-h-[44px] ${
                    isHighlight
                      ? 'bg-[#344E41] hover:bg-[#283d33] text-white'
                      : 'border border-[#344E41] text-[#344E41] hover:bg-[#FAF7F2]'
                  }`}
                >
                  Request Customization
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4-Step Process Strip */}
      <section className="bg-white rounded-3xl border border-[#E9E4D8] p-8 sm:p-14 space-y-12 shadow-xs">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A3B18A]">
            Stress-Free Workflow
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#344E41]">
            Our 4-Step Process
          </h2>
          <p className="text-sm text-[#2B2B2B]/80">
            From raw materials to a launched website in under a week.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div key={step.step} className="space-y-3 relative">
              <div className="w-12 h-12 rounded-2xl bg-[#E9E4D8]/60 flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <span className="text-xs font-mono font-bold text-[#A3B18A]">{step.step}</span>
              <h3 className="font-serif text-xl font-bold text-[#344E41]">{step.title}</h3>
              <p className="text-xs text-[#2B2B2B]/80 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services FAQ & Form Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="customization-form">
        
        {/* Left: Services FAQ */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A3B18A]">
            Answers & Clarity
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#344E41]">
            Customization FAQ
          </h2>
          
          <div className="space-y-3">
            {servicesFaqs.map((faq, i) => {
              const isOpen = activeFaq === i;

              return (
                <div key={i} className="bg-white rounded-2xl border border-[#E9E4D8] overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-3 font-serif font-bold text-base text-[#344E41]"
                  >
                    <span>{faq.q}</span>
                    <span className={`w-6 h-6 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-[#2B2B2B]/80 leading-relaxed border-t border-[#FAF7F2]">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Customization Request Form */}
        <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-[#E9E4D8] shadow-sm">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D9A68B]">
                Start Your Project
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#344E41]">
                Request Setup Service
              </h3>
              <p className="text-xs text-[#2B2B2B]/70 leading-relaxed">
                Fill out your details below and I will reply within 1 to 2 business days with onboarding instructions.
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
                  placeholder="elena@yourpractice.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E9E4D8] text-sm focus:border-[#344E41] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#2B2B2B]/80 mb-1">Selected Package</label>
                <select
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E9E4D8] text-sm focus:border-[#344E41] outline-none bg-white"
                >
                  <option value="Install & Deploy ($99)">Install & Deploy ($99)</option>
                  <option value="Quick Setup ($149)">Quick Setup ($149)</option>
                  <option value="Full Setup ($299)">Full Setup ($299)</option>
                  <option value="Launch Ready ($499)">Launch Ready ($499)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#2B2B2B]/80 mb-1">Project Details / Notes</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me a bit about your coaching niche and timeline..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E9E4D8] text-sm focus:border-[#344E41] outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#344E41] hover:bg-[#283d33] text-white text-sm font-semibold transition-colors cursor-pointer min-h-[44px]"
              >
                Send Request
              </button>
            </form>
          ) : (
            <div className="text-center py-10 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#344E41] mx-auto" />
              <h4 className="font-serif text-2xl font-bold text-[#344E41]">Request Received!</h4>
              <p className="text-xs text-[#2B2B2B]/80 max-w-sm mx-auto leading-relaxed">
                Thank you, {name}! I will personally review your package request and reply to <strong>{email}</strong> within 1 to 2 business days.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-5 py-2 rounded-full border border-[#344E41] text-xs font-medium text-[#344E41]"
              >
                Send another message
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
