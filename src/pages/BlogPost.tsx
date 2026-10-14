import React from 'react';
import { ArrowLeft, Clock, User, Share2, Sparkles, ArrowRight, Bookmark, Check } from 'lucide-react';
import { BlogPost as BlogPostType, BLOG_POSTS } from '../data/blog';

interface BlogPostProps {
  post: BlogPostType;
  navigate: (route: string) => void;
  onSelectPost: (post: BlogPostType) => void;
}

export const BlogPostView: React.FC<BlogPostProps> = ({ post, navigate, onSelectPost }) => {
  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Back button */}
      <div>
        <button
          onClick={() => navigate('blog')}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#2B2B2B]/70 hover:text-[#344E41] transition-colors py-1 px-2 -ml-2 rounded-lg hover:bg-[#E9E4D8]/40"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </button>
      </div>

      {/* Article Header */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="px-3 py-1 rounded-full bg-[#E9E4D8] text-[#344E41] font-semibold">
            {post.category}
          </span>
          <span className="text-[#2B2B2B]/60 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
          <span>·</span>
          <span className="text-[#2B2B2B]/60">{post.date}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-[#344E41] leading-tight">
          {post.title}
        </h1>

        <p className="text-sm sm:text-base text-[#2B2B2B]/70 font-medium">
          {post.author}
        </p>

        {/* Pinterest Share Button */}
        <div className="pt-2 flex items-center gap-3">
          <a
            href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&description=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E9E4D8]/70 hover:bg-[#E9E4D8] text-[#344E41] text-xs font-semibold transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Save to Pinterest</span>
          </a>
        </div>
      </header>

      {/* Table of Contents */}
      {post.toc && post.toc.length > 0 && (
        <div className="p-6 bg-white rounded-2xl border border-[#E9E4D8] space-y-3">
          <h4 className="font-serif font-bold text-[#344E41] text-base">
            Table of Contents
          </h4>
          <ul className="space-y-1.5 text-xs sm:text-sm text-[#2B2B2B]/80">
            {post.toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="hover:text-[#344E41] hover:underline underline-offset-2"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Key-Takeaway Box (From PDF requirement) */}
      <div className="p-6 sm:p-8 bg-[#E9E4D8]/50 rounded-3xl border border-[#E9E4D8] space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#344E41] flex items-center gap-1.5">
          <Bookmark className="w-4 h-4 text-[#D9A68B]" />
          Key Takeaway
        </span>
        <p className="font-serif text-lg sm:text-xl text-[#344E41] font-semibold leading-relaxed">
          "{post.keyTakeaway}"
        </p>
      </div>

      {/* Article Content Area */}
      <div className="space-y-8 text-base text-[#2B2B2B]/85 leading-relaxed">
        {post.content.map((block, idx) => (
          <div key={idx} className="space-y-3">
            {block.heading && (
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#344E41] pt-4">
                {block.heading}
              </h2>
            )}
            {block.paragraph && <p>{block.paragraph}</p>}
            {block.bullets && (
              <ul className="space-y-2 pl-4 text-sm sm:text-base">
                {block.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="text-[#A3B18A] font-bold mt-0.5">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Template CTA Box (From PDF requirement) */}
      <div className="p-8 sm:p-10 bg-white rounded-3xl border-2 border-[#344E41] shadow-md space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#A3B18A]">
          Ready to launch faster?
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#344E41]">
          Get the Clarity Coach Template
        </h3>
        <p className="text-sm text-[#2B2B2B]/80 max-w-xl leading-relaxed">
          Skip weeks of trial-and-error wireframing. Clarity incorporates this exact layout blueprint, pre-built and ready to customize in 10 minutes.
        </p>
        <div className="pt-2 flex flex-wrap gap-3">
          <button
            onClick={() => navigate('clarity-sales')}
            className="px-6 py-3 rounded-full bg-[#344E41] hover:bg-[#283d33] text-white text-xs sm:text-sm font-medium transition-colors"
          >
            Explore Clarity Template ($59)
          </button>
          <button
            onClick={() => navigate('live-demo')}
            className="px-6 py-3 rounded-full border border-[#344E41] text-[#344E41] text-xs sm:text-sm font-medium hover:bg-[#FAF7F2]"
          >
            Preview Interactive Demo
          </button>
        </div>
      </div>

      {/* Related Posts */}
      <div className="pt-12 border-t border-[#E9E4D8] space-y-6">
        <h3 className="font-serif text-2xl font-bold text-[#344E41]">
          Related Articles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {relatedPosts.map((rel) => (
            <div
              key={rel.id}
              onClick={() => onSelectPost(rel)}
              className="p-6 bg-white rounded-2xl border border-[#E9E4D8] hover:border-[#344E41] cursor-pointer transition-all space-y-2"
            >
              <span className="text-[11px] font-semibold text-[#A3B18A] uppercase">{rel.category}</span>
              <h4 className="font-serif text-lg font-bold text-[#344E41]">{rel.title}</h4>
              <p className="text-xs text-[#2B2B2B]/70 line-clamp-2">{rel.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
