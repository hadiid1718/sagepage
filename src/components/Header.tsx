import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, BookOpen, Layers, CheckSquare, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentRoute: string;
  navigate: (route: string) => void;
  onOpenCheckout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, navigate, onOpenCheckout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { label: 'Templates', route: 'shop' },
    { label: 'Free checklist', route: 'free-checklist' },
    { label: 'Docs', route: 'docs' },
    { label: 'Blog', route: 'blog' },
    { label: 'Services', route: 'services' },
  ];

  const handleNav = (route: string) => {
    navigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Auto-focus the close button for accessibility
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* WCAG AA Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#344E41] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none min-h-[44px]"
      >
        Skip to main content
      </a>

      {/* Sticky Header on all screen sizes */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E9E4D8] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none cursor-pointer min-h-[44px]"
            aria-label="Sagepage Studio Home"
          >
            {/* Brand Icon */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#344E41] flex items-center justify-center shadow-xs overflow-hidden shrink-0 transition-transform group-hover:scale-105">
              <div className="w-5 h-6 bg-[#FAF7F2] rounded-[3px] p-1 flex flex-col gap-1 shadow-xs">
                <div className="w-full h-1 bg-[#344E41] rounded-[1px]" />
                <div className="w-3 h-0.5 bg-[#A3B18A] rounded-[1px]" />
                <div className="w-2 h-0.5 bg-[#A3B18A] rounded-[1px]" />
              </div>
              <div 
                className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#D9A68B] rounded-tl-full rounded-br-sm shadow-xs"
                title="Clay leaf"
              />
            </div>

            <div>
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-[#344E41] block leading-none">
                Sagepage Studio
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wider uppercase text-[#A3B18A] block mt-0.5">
                Templates for Coaches
              </span>
            </div>
          </button>

          {/* Desktop Navigation (visible 1024px and up) */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => handleNav(link.route)}
                  className={`text-[15px] font-medium transition-colors py-2 relative cursor-pointer min-h-[44px] flex items-center ${
                    isActive
                      ? 'text-[#344E41] font-semibold after:absolute after:bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-[#344E41]'
                      : 'text-[#2B2B2B]/80 hover:text-[#344E41]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Header Action Button (1024px and up) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNav('clarity-sales')}
              className="px-5 py-2.5 rounded-full bg-[#344E41] hover:bg-[#283d33] text-white text-[15px] font-medium transition-all shadow-xs flex items-center gap-2 min-h-[44px] cursor-pointer hover:shadow-sm active:scale-[0.98]"
            >
              <span>Get Clarity</span>
              <ArrowRight className="w-4 h-4 text-[#FAF7F2]" />
            </button>
          </div>

          {/* Mobile & Tablet Header Controls (< 1024px) */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            {/* Primary button visible in header on phones (44px min tap target) */}
            <button
              onClick={() => handleNav('clarity-sales')}
              className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-[#344E41] text-white text-xs sm:text-sm font-medium flex items-center gap-1.5 min-h-[44px] touch-target transition-transform active:scale-95 shadow-xs"
            >
              <span>Get Clarity</span>
              <ArrowRight className="w-3.5 h-3.5 hidden xs:inline" />
            </button>

            {/* Hamburger Toggle Button (< 1024px) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl text-[#2B2B2B] hover:bg-[#E9E4D8]/50 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#344E41] touch-target cursor-pointer"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Full-Height Collapsible Mobile & Tablet Panel (< 1024px) */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-panel"
            className="fixed inset-0 z-50 bg-[#FAF7F2] text-[#2B2B2B] flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-200 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between pb-6 border-b border-[#E9E4D8]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#344E41] flex items-center justify-center text-white">
                  <span className="font-serif font-bold text-sm">S</span>
                </div>
                <span className="font-serif text-xl font-bold text-[#344E41]">Sagepage Studio</span>
              </div>

              {/* Visible Close Button */}
              <button
                ref={closeButtonRef}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-full bg-[#E9E4D8]/60 hover:bg-[#E9E4D8] text-[#2B2B2B] min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#344E41] touch-target cursor-pointer transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links with 44px min tap target */}
            <nav className="my-auto py-8 flex flex-col gap-2" aria-label="Mobile Menu Links">
              {navLinks.map((link) => {
                const isActive = currentRoute === link.route;
                return (
                  <button
                    key={link.route}
                    onClick={() => handleNav(link.route)}
                    className={`text-left px-5 py-4 rounded-2xl text-lg sm:text-xl font-serif transition-colors min-h-[48px] flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-[#E9E4D8] text-[#344E41] font-bold'
                        : 'text-[#2B2B2B] hover:bg-[#E9E4D8]/50'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#A3B18A]" />
                  </button>
                );
              })}
            </nav>

            {/* Bottom Actions inside Full-Height Panel */}
            <div className="pt-6 border-t border-[#E9E4D8] flex flex-col gap-3">
              <button
                onClick={() => handleNav('live-demo')}
                className="w-full text-center py-3.5 rounded-full border border-[#344E41] text-[#344E41] font-medium text-sm flex items-center justify-center gap-2 min-h-[44px] touch-target cursor-pointer"
              >
                <Layers className="w-4 h-4" />
                <span>Preview Clarity Live Demo</span>
              </button>

              <button
                onClick={() => handleNav('clarity-sales')}
                className="w-full text-center py-3.5 rounded-full bg-[#344E41] text-white font-medium text-sm flex items-center justify-center gap-2 min-h-[44px] touch-target cursor-pointer shadow-sm"
              >
                <span>Get Clarity Template ($59)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-xs text-[#2B2B2B]/60 mt-1">
                One-time purchase · Instant zip delivery · 14-day refund guarantee
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
