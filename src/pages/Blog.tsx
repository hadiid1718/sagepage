import React, { useState } from 'react';
import { ArrowRight, Clock, User, Share2, Tag, BookOpen, CheckCircle2 } from 'lucide-react';
import { BLOG_POSTS, BlogPost as BlogPostType } from '../data/blog';

interface BlogProps {
  navigate: (route: string) => void;
  onSelectPost: (post: BlogPostType) => void;
}

export const Blog: React.FC<BlogProps> = ({ navigate, onSelectPost }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [leadEmail, setLeadEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = ['All', 'Homepage', 'About page', 'Launch checklist', 'Copywriting', 'SEO'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (selectedCategory === 'All') return true;
    return post.category === selectedCategory;
  });

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail) return;
    setSubscribed(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#E9E4D8] text-[#344E41] text-xs font-semibold uppercase tracking-wider">
          Resources & Guides
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#344E41] tracking-tight">
          Website tips for coaches
        </h1>
        <p className="text-lg text-[#2B2B2B]/80">
          Simple guides to look professional online.
        </p>

        {/* Category Chips */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all min-h-[40px] cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#344E41] text-white shadow-xs'
                  : 'bg-white text-[#2B2B2B] border border-[#E9E4D8] hover:bg-[#FAF7F2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of 6 Post Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => onSelectPost(post)}
            className="bg-white rounded-3xl border border-[#E9E4D8] overflow-hidden hover:border-[#344E41] shadow-xs hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
          >
            <div>
              {/* Post Visual Header / Editorial Card representation */}
              <div className="aspect-[16/10] bg-[#FAF7F2] border-b border-[#E9E4D8] p-6 flex flex-col justify-between relative overflow-hidden group-hover:bg-[#FAF7F2]/80 transition-colors">
                <div className="flex justify-between items-center text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-white border border-[#E9E4D8] text-[#344E41] font-semibold text-[11px]">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[#2B2B2B]/60 text-[11px]">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <div className="my-auto py-2">
                  <p className="font-serif text-lg font-bold text-[#344E41] line-clamp-2 group-hover:text-[#D9A68B] transition-colors">
                    {post.title}
                  </p>
                </div>

                <div className="text-[10px] text-[#2B2B2B]/50 font-mono flex items-center justify-between">
                  <span>Sagepage Editorial</span>
                  <span>{post.date}</span>
                </div>
              </div>

              {/* Summary Body */}
              <div className="p-6 space-y-3">
                <p className="text-sm text-[#2B2B2B]/80 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2 border-t border-[#FAF7F2] flex items-center justify-between text-xs text-[#344E41] font-semibold">
              <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                <span>Read guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <span className="text-[11px] text-[#2B2B2B]/50 font-normal">By {post.author.split('·')[0]}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Email box at the bottom: 'Get the free checklist' */}
      <section className="bg-[#344E41] text-[#FAF7F2] rounded-3xl p-8 sm:p-14 text-center space-y-4 max-w-4xl mx-auto shadow-xl">
        <span className="inline-block px-3 py-1 rounded-full bg-[#FAF7F2]/15 text-[#FAF7F2] text-xs font-semibold">
          Free Growth Resource
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-white">
          Get the free checklist
        </h2>
        <p className="text-sm sm:text-base text-[#FAF7F2]/80 max-w-lg mx-auto">
          The exact 27-point website checklist coaches use to spot blind spots and book more discovery calls.
        </p>

        {subscribed ? (
          <div className="p-4 bg-white/10 rounded-2xl max-w-md mx-auto text-sm text-white flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#A3B18A]" />
            <span>Checklist on its way! Check your inbox.</span>
          </div>
        ) : (
          <form onSubmit={handleLeadSubmit} className="pt-2 max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              value={leadEmail}
              onChange={(e) => setLeadEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-full bg-white text-[#2B2B2B] text-sm outline-none focus:ring-2 focus:ring-[#A3B18A] min-h-[44px]"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-[#FAF7F2] hover:bg-white text-[#344E41] font-semibold text-sm transition-colors cursor-pointer min-h-[44px]"
            >
              Get Checklist
            </button>
          </form>
        )}
      </section>
    </div>
  );
};
