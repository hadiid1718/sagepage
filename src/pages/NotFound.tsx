import React, { useState } from 'react';
import { Search, ArrowRight, Home, Sparkles, BookOpen } from 'lucide-react';

interface NotFoundProps {
  navigate: (route: string) => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ navigate }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.toLowerCase().includes('doc') || searchTerm.toLowerCase().includes('guide')) {
      navigate('docs');
    } else if (searchTerm.toLowerCase().includes('blog') || searchTerm.toLowerCase().includes('tip')) {
      navigate('blog');
    } else {
      navigate('shop');
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-8 animate-in fade-in duration-200">
      {/* Large serif '404' */}
      <div className="font-serif text-8xl sm:text-9xl font-bold text-[#D9A68B] tracking-tight select-none">
        404
      </div>

      {/* Text 'This page took a day off.' */}
      <div className="space-y-2">
        <h1 className="font-serif text-3xl sm:text-4xl text-[#344E41]">
          This page took a day off.
        </h1>
        <p className="text-base text-[#2B2B2B]/75 max-w-md mx-auto">
          The link you clicked may have moved or doesn't exist anymore. Let’s get you back on track.
        </p>
      </div>

      {/* Buttons 'Go home' and 'See templates' */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => navigate('home')}
          className="px-6 py-3 rounded-full bg-[#344E41] hover:bg-[#283d33] text-white text-sm font-medium transition-colors inline-flex items-center gap-2 cursor-pointer min-h-[44px]"
        >
          <Home className="w-4 h-4" />
          <span>Go home</span>
        </button>
        <button
          onClick={() => navigate('shop')}
          className="px-6 py-3 rounded-full border border-[#344E41] text-[#344E41] hover:bg-[#FAF7F2] text-sm font-medium transition-colors inline-flex items-center gap-2 cursor-pointer min-h-[44px]"
        >
          <Sparkles className="w-4 h-4" />
          <span>See templates</span>
        </button>
      </div>

      {/* Search box */}
      <form onSubmit={handleSearch} className="max-w-md mx-auto relative pt-4">
        <Search className="w-4 h-4 text-[#2B2B2B]/50 absolute left-4 top-7" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search templates, docs, or guides..."
          className="w-full pl-10 pr-24 py-3 rounded-full border border-[#E9E4D8] bg-white text-xs outline-none focus:border-[#344E41]"
        />
        <button
          type="submit"
          className="absolute right-1.5 top-5 px-4 py-2 rounded-full bg-[#344E41] text-white text-xs font-semibold cursor-pointer"
        >
          Search
        </button>
      </form>

      {/* 3 Popular Links */}
      <div className="pt-6 border-t border-[#E9E4D8] space-y-2">
        <p className="text-xs uppercase font-semibold tracking-wider text-[#A3B18A]">
          Popular Destinations
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs">
          <button
            onClick={() => navigate('clarity-sales')}
            className="text-[#344E41] hover:underline font-medium"
          >
            • Clarity Coach Template ($59)
          </button>
          <button
            onClick={() => navigate('free-checklist')}
            className="text-[#344E41] hover:underline font-medium"
          >
            • Free 27-Point Checklist
          </button>
          <button
            onClick={() => navigate('live-demo')}
            className="text-[#344E41] hover:underline font-medium"
          >
            • Interactive Live Demo
          </button>
        </div>
      </div>
    </div>
  );
};
