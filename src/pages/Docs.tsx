import React, { useState } from 'react';
import { Search, Copy, Check, Info, AlertTriangle, Lightbulb, ChevronRight, ChevronLeft, ChevronDown, BookOpen } from 'lucide-react';
import { DOCS_SECTIONS, DocSection } from '../data/docs';

interface DocsProps {
  navigate: (route: string) => void;
}

export const Docs: React.FC<DocsProps> = ({ navigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSectionId, setActiveSectionId] = useState<string>('getting-started');
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredSections = DOCS_SECTIONS.filter((sec) =>
    sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sec.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeIndex = DOCS_SECTIONS.findIndex((s) => s.id === activeSectionId);
  const currentSection: DocSection = DOCS_SECTIONS[activeIndex] || DOCS_SECTIONS[0];
  const prevSection = activeIndex > 0 ? DOCS_SECTIONS[activeIndex - 1] : null;
  const nextSection = activeIndex < DOCS_SECTIONS.length - 1 ? DOCS_SECTIONS[activeIndex + 1] : null;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippet(code);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  const handleSelectSection = (id: string) => {
    setActiveSectionId(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 160, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      {/* Top Banner */}
      <div className="pb-8 border-b border-[#E9E4D8] mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-[#A3B18A]">
          Documentation & Guides
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#344E41] mt-1 tracking-tight">
          Clarity Template Documentation
        </h1>
        <p className="text-sm sm:text-base text-[#2B2B2B]/75 mt-2 max-w-2xl leading-relaxed">
          Everything you need to customize colors, connect booking forms, and launch your coach site online in a single weekend.
        </p>
      </div>

      {/* Mobile Collapsible Sections Dropdown (< 1024px) */}
      <div className="lg:hidden mb-8">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-full bg-white p-4 rounded-2xl border border-[#E9E4D8] shadow-xs flex items-center justify-between min-h-[48px] touch-target text-left"
          aria-expanded={mobileMenuOpen}
        >
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-4 h-4 text-[#344E41]" />
            <span className="font-medium text-sm text-[#344E41]">
              Section: <strong className="font-semibold">{currentSection.title}</strong>
            </span>
          </div>
          <ChevronDown className={`w-4 h-4 text-[#344E41] transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} />
        </button>

        {mobileMenuOpen && (
          <div className="mt-2 bg-white rounded-2xl border border-[#E9E4D8] p-3 shadow-lg space-y-1 animate-in fade-in duration-150">
            <div className="relative mb-2">
              <Search className="w-4 h-4 text-[#2B2B2B]/50 absolute left-3 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search docs..."
                className="w-full pl-9 pr-3 py-2.5 text-base rounded-xl border border-[#E9E4D8] bg-[#FAF7F2] outline-none focus:border-[#344E41]"
              />
            </div>
            {filteredSections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => handleSelectSection(sec.id)}
                className={`w-full text-left px-3.5 py-3 rounded-xl text-sm font-medium transition-colors min-h-[44px] flex items-center justify-between ${
                  sec.id === currentSection.id
                    ? 'bg-[#344E41] text-white font-semibold'
                    : 'text-[#2B2B2B] hover:bg-[#FAF7F2]'
                }`}
              >
                <span>{sec.title}</span>
                {sec.badge && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                    sec.id === currentSection.id ? 'bg-white/20 text-white' : 'bg-[#E9E4D8] text-[#344E41]'
                  }`}>
                    {sec.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Desktop Left Sidebar (Col 3, visible >= 1024px): Search box & Section Links */}
        <aside className="hidden lg:block lg:col-span-3 space-y-4 sticky top-28">
          <div className="relative">
            <Search className="w-4 h-4 text-[#2B2B2B]/50 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search docs..."
              className="w-full pl-9 pr-3 py-2 text-base rounded-xl border border-[#E9E4D8] bg-white outline-none focus:border-[#344E41]"
            />
          </div>

          <nav className="space-y-1" aria-label="Documentation sections">
            {filteredSections.map((sec) => {
              const isActive = sec.id === currentSection.id;

              return (
                <button
                  key={sec.id}
                  onClick={() => handleSelectSection(sec.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between cursor-pointer min-h-[40px] ${
                    isActive
                      ? 'bg-[#344E41] text-white font-semibold shadow-xs'
                      : 'text-[#2B2B2B]/80 hover:bg-[#E9E4D8]/50'
                  }`}
                >
                  <span>{sec.title}</span>
                  {sec.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded ${
                        isActive ? 'bg-white/20 text-white' : 'bg-[#E9E4D8] text-[#344E41]'
                      }`}
                    >
                      {sec.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Center Content Area (Col 6 or 7 on Desktop, full width on phones) */}
        <main className="lg:col-span-6 space-y-8 bg-white p-5 sm:p-10 rounded-3xl border border-[#E9E4D8] shadow-xs max-w-full overflow-hidden">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#A3B18A]">
              Documentation Section
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#344E41] mt-1 break-words">
              {currentSection.title}
            </h2>
            <p className="text-sm sm:text-base text-[#2B2B2B]/80 mt-2 leading-relaxed">
              {currentSection.description}
            </p>
          </div>

          <div className="space-y-10 pt-4">
            {currentSection.content.map((block, idx) => (
              <div key={idx} id={block.heading.toLowerCase().replace(/\s+/g, '-')} className="space-y-3">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#344E41] break-words">
                  {block.heading}
                </h3>
                {block.subheading && (
                  <p className="text-xs text-[#2B2B2B]/60 font-semibold">{block.subheading}</p>
                )}
                <p className="text-sm sm:text-base text-[#2B2B2B]/85 leading-relaxed whitespace-pre-line">
                  {block.body}
                </p>

                {/* Code Block with Isolated Horizontal Scrolling */}
                {block.codeSnippet && (
                  <div className="relative rounded-2xl overflow-hidden bg-[#1E1E1E] border border-black/20 text-xs font-mono my-3 w-full max-w-full">
                    {block.codeSnippet.filename && (
                      <div className="bg-[#2D2D2D] px-4 py-2 border-b border-white/10 flex justify-between items-center text-white/60 text-[11px]">
                        <span className="truncate">{block.codeSnippet.filename}</span>
                        <span className="shrink-0 ml-2">{block.codeSnippet.language}</span>
                      </div>
                    )}
                    <pre className="p-4 text-[#FAF7F2] overflow-x-auto text-[11px] sm:text-xs leading-relaxed max-w-full">
                      <code>{block.codeSnippet.code}</code>
                    </pre>
                    <button
                      onClick={() => handleCopyCode(block.codeSnippet!.code)}
                      className="absolute top-2 right-2 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs transition-colors flex items-center gap-1 cursor-pointer min-h-[32px] min-w-[32px] justify-center"
                      title="Copy code"
                      aria-label="Copy code to clipboard"
                    >
                      {copiedSnippet === block.codeSnippet.code ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                )}

                {/* Callout Box */}
                {block.callout && (
                  <div
                    className={`p-4 rounded-xl border flex items-start gap-3 text-xs leading-relaxed ${
                      block.callout.type === 'tip'
                        ? 'bg-[#A3B18A]/15 border-[#A3B18A] text-[#344E41]'
                        : block.callout.type === 'warning'
                        ? 'bg-amber-50 border-amber-300 text-amber-900'
                        : 'bg-[#FAF7F2] border-[#E9E4D8] text-[#2B2B2B]'
                    }`}
                  >
                    {block.callout.type === 'tip' && <Lightbulb className="w-4 h-4 text-[#344E41] shrink-0 mt-0.5" />}
                    {block.callout.type === 'warning' && <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />}
                    {block.callout.type === 'note' && <Info className="w-4 h-4 text-[#344E41] shrink-0 mt-0.5" />}
                    <div>
                      <p className="font-semibold capitalize mb-0.5">{block.callout.type}</p>
                      <p>{block.callout.text}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Previous / Next Links */}
          <div className="pt-8 border-t border-[#E9E4D8] flex flex-wrap items-center justify-between gap-4">
            {prevSection ? (
              <button
                onClick={() => handleSelectSection(prevSection.id)}
                className="text-xs sm:text-sm font-semibold text-[#344E41] hover:text-[#D9A68B] flex items-center gap-1.5 p-2 rounded-lg hover:bg-[#FAF7F2] min-h-[44px] touch-target"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev: {prevSection.title}</span>
              </button>
            ) : <div />}

            {nextSection && (
              <button
                onClick={() => handleSelectSection(nextSection.id)}
                className="text-xs sm:text-sm font-semibold text-[#344E41] hover:text-[#D9A68B] flex items-center gap-1.5 p-2 rounded-lg hover:bg-[#FAF7F2] min-h-[44px] touch-target ml-auto"
              >
                <span>Next: {nextSection.title}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </main>

        {/* Right Column: 'On This Page' Links (visible on desktop) */}
        <aside className="lg:col-span-3 sticky top-28 space-y-3 bg-[#FAF7F2] p-5 rounded-2xl border border-[#E9E4D8] hidden lg:block">
          <p className="text-xs font-bold uppercase tracking-wider text-[#344E41]">
            On This Page
          </p>
          <ul className="space-y-2 text-xs text-[#2B2B2B]/75">
            {currentSection.toc.map((toc) => (
              <li key={toc.id}>
                <a
                  href={`#${toc.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-[#344E41] hover:underline block leading-tight py-1"
                >
                  {toc.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};
