import React, { useState } from 'react';
import { Menu, X, ArrowRight, BookOpen, Layers, CheckSquare, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentRoute: string;
  navigate: (route: string) => void;
  onOpenCheckout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, navigate, onOpenCheckout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <>
      {/* WCAG AA Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#344E41] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E9E4D8] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            aria-label="Sagepage Studio Home"
          >
            {/* Brand Icon: forest green rounded square, white page with header bar and lines, clay leaf at bottom right */}
            <div className="relative w-10 h-10 rounded-xl bg-[#344E41] flex items-center justify-center shadow-xs overflow-hidden transition-transform group-hover:scale-105">
              {/* White page */}
              <div className="w-5 h-6 bg-[#FAF7F2] rounded-[3px] p-1 flex flex-col gap-1 shadow-xs">
                <div className="w-full h-1 bg-[#344E41] rounded-[1px]" />
                <div className="w-3 h-0.5 bg-[#A3B18A] rounded-[1px]" />
                <div className="w-2 h-0.5 bg-[#A3B18A] rounded-[1px]" />
              </div>
              {/* Clay leaf bottom right */}
              <div 
                className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#D9A68B] rounded-tl-full rounded-br-sm shadow-xs"
                title="Clay leaf"
              />
            </div>

            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#344E41] block leading-none">
                Sagepage Studio
              </span>
              <span className="text-[11px] font-medium tracking-wider uppercase text-[#A3B18A] block mt-0.5">
                Templates for Coaches
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => handleNav(link.route)}
                  className={`text-[15px] font-medium transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#344E41] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#344E41]'
                      : 'text-[#2B2B2B]/80 hover:text-[#344E41]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNav('clarity-sales')}
              className="px-5 py-2.5 rounded-full bg-[#344E41] hover:bg-[#283d33] text-white text-[15px] font-medium transition-all shadow-xs flex items-center gap-2 min-h-[44px] cursor-pointer hover:shadow-sm active:scale-[0.98]"
            >
              <span>Get Clarity</span>
              <ArrowRight className="w-4 h-4 text-[#FAF7F2]" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNav('clarity-sales')}
              className="px-3.5 py-2 rounded-full bg-[#344E41] text-white text-xs font-medium"
            >
              Get Clarity
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#2B2B2B] hover:bg-[#E9E4D8]/50 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#E9E4D8] bg-[#FAF7F2] px-4 pt-3 pb-6 shadow-md animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.route}
                  onClick={() => handleNav(link.route)}
                  className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    currentRoute === link.route
                      ? 'bg-[#E9E4D8]/70 text-[#344E41] font-semibold'
                      : 'text-[#2B2B2B] hover:bg-[#E9E4D8]/40'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 border-t border-[#E9E4D8] mt-2 flex flex-col gap-2">
                <button
                  onClick={() => handleNav('live-demo')}
                  className="w-full text-center py-3 rounded-full border border-[#344E41] text-[#344E41] font-medium text-sm flex items-center justify-center gap-2"
                >
                  <Layers className="w-4 h-4" />
                  <span>Preview Live Demo</span>
                </button>
                <button
                  onClick={() => handleNav('clarity-sales')}
                  className="w-full text-center py-3 rounded-full bg-[#344E41] text-white font-medium text-sm flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <span>Get Clarity Template ($59)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
