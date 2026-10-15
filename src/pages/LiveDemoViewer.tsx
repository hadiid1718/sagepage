import React, { useState, useEffect } from 'react';
import { ArrowLeft, Monitor, Tablet, Smartphone, ExternalLink, ShoppingBag, ShieldCheck, Download } from 'lucide-react';
import { ClarityLiveDemoContent } from '../components/ClarityLiveDemoContent';

interface LiveDemoViewerProps {
  navigate: (route: string) => void;
  onOpenCheckout: () => void;
}

export const LiveDemoViewer: React.FC<LiveDemoViewerProps> = ({ navigate, onOpenCheckout }) => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Target base widths for each simulated device
  const deviceBaseWidths = {
    desktop: 1280,
    tablet: 768,
    mobile: 390
  };

  const targetWidth = deviceBaseWidths[device];
  // Calculate responsive scale factor so the frame never overflows the screen width
  const paddingMargin = windowWidth < 640 ? 24 : 64;
  const maxAllowedWidth = Math.max(280, windowWidth - paddingMargin);
  const scale = targetWidth > maxAllowedWidth ? maxAllowedWidth / targetWidth : 1;

  return (
    <div className="min-h-screen bg-[#1E1E1E] flex flex-col overflow-x-hidden max-w-full">
      {/* Slim Responsive Sticky Top Bar */}
      <header className="sticky top-0 z-50 bg-[#141414] text-white border-b border-white/10 px-3 sm:px-6 h-14 flex items-center justify-between shadow-md max-w-full overflow-hidden">
        {/* Left: Back button and Template Moniker */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <button
            onClick={() => navigate('clarity-sales')}
            className="flex items-center gap-1 text-xs text-white/80 hover:text-white transition-colors py-1.5 px-2 rounded-lg hover:bg-white/10 cursor-pointer min-h-[44px] touch-target"
            aria-label="Back to Sagepage Studio"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline font-medium">Back to Sagepage</span>
          </button>
          
          <div className="h-4 w-px bg-white/20 hidden md:block" />
          
          <div className="flex items-center gap-1.5">
            <span className="font-serif text-xs sm:text-sm font-bold text-[#FAF7F2] truncate max-w-[110px] sm:max-w-none">
              Clarity Coach
            </span>
            <span className="hidden lg:inline-block px-2 py-0.5 rounded-full bg-[#A3B18A]/20 text-[#A3B18A] text-[10px] font-semibold">
              Live Preview
            </span>
          </div>
        </div>

        {/* Center: Device Switcher (Desktop 1280, Tablet 768, Phone 390) */}
        <div className="flex items-center bg-[#2B2B2B] p-1 rounded-xl border border-white/10 shrink-0">
          <button
            onClick={() => setDevice('desktop')}
            className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition-all min-h-[36px] min-w-[36px] justify-center cursor-pointer ${
              device === 'desktop'
                ? 'bg-[#344E41] text-white shadow-xs'
                : 'text-white/60 hover:text-white'
            }`}
            title="Desktop view (1280px)"
            aria-label="Desktop view"
          >
            <Monitor className="w-4 h-4" />
            <span className="hidden md:inline text-[11px]">1280px</span>
          </button>
          
          <button
            onClick={() => setDevice('tablet')}
            className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition-all min-h-[36px] min-w-[36px] justify-center cursor-pointer ${
              device === 'tablet'
                ? 'bg-[#344E41] text-white shadow-xs'
                : 'text-white/60 hover:text-white'
            }`}
            title="Tablet view (768px)"
            aria-label="Tablet view"
          >
            <Tablet className="w-4 h-4" />
            <span className="hidden md:inline text-[11px]">768px</span>
          </button>
          
          <button
            onClick={() => setDevice('mobile')}
            className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition-all min-h-[36px] min-w-[36px] justify-center cursor-pointer ${
              device === 'mobile'
                ? 'bg-[#344E41] text-white shadow-xs'
                : 'text-white/60 hover:text-white'
            }`}
            title="Mobile phone view (390px)"
            aria-label="Mobile phone view"
          >
            <Smartphone className="w-4 h-4" />
            <span className="hidden md:inline text-[11px]">390px</span>
          </button>
        </div>

        {/* Right: Buy Button */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenCheckout}
            className="px-3 sm:px-4 py-2 rounded-full bg-[#A3B18A] hover:bg-[#8f9d78] text-[#2B2B2B] font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-xs cursor-pointer min-h-[44px] touch-target hover:scale-[1.02] active:scale-[0.98]"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Buy $59</span>
          </button>
        </div>
      </header>

      {/* Main Viewport Container with CSS Transform Scale fitting */}
      <main className="flex-1 overflow-auto p-2 sm:p-6 lg:p-8 flex items-start justify-center bg-[#171717] w-full max-w-full">
        {/* Outer wrapper sized to scaled bounding box */}
        <div
          style={{
            width: `${targetWidth * scale}px`,
            maxWidth: '100%',
            transition: 'width 0.25s ease'
          }}
          className="mx-auto flex justify-center"
        >
          {/* Inner frame transformed with transform: scale(...) */}
          <div
            style={{
              width: `${targetWidth}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'top center',
              transition: 'transform 0.25s ease'
            }}
            className={`bg-[#FAF7F2] text-[#2B2B2B] shadow-2xl ${
              device === 'mobile'
                ? 'rounded-[36px] ring-[10px] ring-[#333333] border-4 border-[#222222] overflow-hidden my-2'
                : device === 'tablet'
                ? 'rounded-[24px] ring-[8px] ring-[#333333] border-2 border-[#222222] overflow-hidden my-2'
                : 'rounded-xl border border-white/10 overflow-hidden'
            }`}
          >
            {/* Phone Notch indicator for mobile */}
            {device === 'mobile' && (
              <div className="bg-[#222222] h-6 w-full flex items-center justify-center">
                <div className="w-24 h-4 bg-black rounded-b-xl" />
              </div>
            )}

            {/* Live Clarity Template Component Content */}
            <div className="min-h-[85vh] overflow-y-auto">
              <ClarityLiveDemoContent />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
