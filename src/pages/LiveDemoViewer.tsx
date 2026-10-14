import React, { useState } from 'react';
import { ArrowLeft, Monitor, Tablet, Smartphone, ExternalLink, ShoppingBag, ShieldCheck, Download } from 'lucide-react';
import { ClarityLiveDemoContent } from '../components/ClarityLiveDemoContent';

interface LiveDemoViewerProps {
  navigate: (route: string) => void;
  onOpenCheckout: () => void;
}

export const LiveDemoViewer: React.FC<LiveDemoViewerProps> = ({ navigate, onOpenCheckout }) => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const deviceWidths = {
    desktop: 'w-full max-w-[1280px]',
    tablet: 'w-[768px] max-w-full',
    mobile: 'w-[390px] max-w-full'
  };

  return (
    <div className="min-h-screen bg-[#2B2B2B] flex flex-col">
      {/* Slim Sticky Top Bar */}
      <header className="sticky top-0 z-50 bg-[#1E1E1E] text-white border-b border-white/10 px-4 sm:px-6 h-14 flex items-center justify-between shadow-md">
        {/* Left: Back link and Template Name */}
        <div className="flex items-center gap-3 sm:gap-5">
          <button
            onClick={() => navigate('clarity-sales')}
            className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80 hover:text-white transition-colors py-1 px-2 rounded-lg hover:bg-white/10 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Sagepage</span>
          </button>
          
          <div className="h-4 w-px bg-white/20 hidden sm:block" />
          
          <div className="flex items-center gap-2">
            <span className="font-serif text-sm sm:text-base font-bold text-[#FAF7F2]">
              Clarity Coach Template
            </span>
            <span className="hidden md:inline-block px-2 py-0.5 rounded-full bg-[#A3B18A]/20 text-[#A3B18A] text-[10px] font-semibold">
              Live Preview
            </span>
          </div>
        </div>

        {/* Center: Device Switcher (Desktop 1280, Tablet 768, Phone 390) */}
        <div className="flex items-center bg-[#2B2B2B] p-1 rounded-xl border border-white/10">
          <button
            onClick={() => setDevice('desktop')}
            className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition-all ${
              device === 'desktop'
                ? 'bg-[#344E41] text-white shadow-xs'
                : 'text-white/60 hover:text-white'
            }`}
            title="Desktop view (1280px)"
          >
            <Monitor className="w-4 h-4" />
            <span className="hidden md:inline text-[11px]">1280px</span>
          </button>
          
          <button
            onClick={() => setDevice('tablet')}
            className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition-all ${
              device === 'tablet'
                ? 'bg-[#344E41] text-white shadow-xs'
                : 'text-white/60 hover:text-white'
            }`}
            title="Tablet view (768px)"
          >
            <Tablet className="w-4 h-4" />
            <span className="hidden md:inline text-[11px]">768px</span>
          </button>
          
          <button
            onClick={() => setDevice('mobile')}
            className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition-all ${
              device === 'mobile'
                ? 'bg-[#344E41] text-white shadow-xs'
                : 'text-white/60 hover:text-white'
            }`}
            title="Mobile phone view (390px)"
          >
            <Smartphone className="w-4 h-4" />
            <span className="hidden md:inline text-[11px]">390px</span>
          </button>
        </div>

        {/* Right: Buy Button & Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              // Open standalone view in full screen
              setDevice('desktop');
            }}
            className="hidden lg:flex items-center gap-1 text-xs text-white/70 hover:text-white transition-colors"
          >
            <span>Reset zoom</span>
          </button>

          <button
            onClick={onOpenCheckout}
            className="px-4 py-2 rounded-full bg-[#A3B18A] hover:bg-[#8f9d78] text-[#2B2B2B] font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-xs cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Buy for $59</span>
          </button>
        </div>
      </header>

      {/* Main Device Viewport Container */}
      <main className="flex-1 overflow-auto p-4 sm:p-8 flex items-start justify-center bg-[#171717]">
        <div
          className={`transition-all duration-300 ease-out mx-auto ${deviceWidths[device]} ${
            device !== 'desktop'
              ? 'rounded-[32px] ring-[12px] ring-[#333333] shadow-2xl overflow-hidden my-4 border border-white/10'
              : 'rounded-xl shadow-2xl overflow-hidden border border-white/5'
          }`}
        >
          {/* Subtle phone notch indicator for mobile */}
          {device === 'mobile' && (
            <div className="bg-[#333333] h-5 w-full flex items-center justify-center">
              <div className="w-20 h-3.5 bg-black rounded-b-xl" />
            </div>
          )}

          {/* Rendered Live Clarity Template Content */}
          <div className="bg-[#FAF7F2] min-h-[85vh] overflow-y-auto">
            <ClarityLiveDemoContent />
          </div>
        </div>
      </main>
    </div>
  );
};
