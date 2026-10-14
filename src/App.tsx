import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieNotice } from './components/CookieNotice';
import { CheckoutModal } from './components/CheckoutModal';
import { NotifyModal } from './components/NotifyModal';
import { LegalModal } from './components/LegalModal';

import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ClaritySales } from './pages/ClaritySales';
import { LiveDemoViewer } from './pages/LiveDemoViewer';
import { FreeChecklist } from './pages/FreeChecklist';
import { ThankYou } from './pages/ThankYou';
import { Blog } from './pages/Blog';
import { BlogPostView } from './pages/BlogPost';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { FAQPage } from './pages/FAQPage';
import { Docs } from './pages/Docs';
import { OrderSuccess } from './pages/OrderSuccess';
import { Changelog } from './pages/Changelog';
import { Support } from './pages/Support';
import { Affiliates } from './pages/Affiliates';
import { NotFound } from './pages/NotFound';

import { BlogPost as BlogPostType, BLOG_POSTS } from './data/blog';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [activeBlogPost, setActiveBlogPost] = useState<BlogPostType | null>(null);

  // Modals state
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutTier, setCheckoutTier] = useState<'standard' | 'freelancer' | 'bundle'>('standard');
  const [notifyOpen, setNotifyOpen] = useState(false);
  const [notifyName, setNotifyName] = useState('Upcoming Templates');
  const [legalOpen, setLegalOpen] = useState(false);
  const [legalDocType, setLegalDocType] = useState<'license' | 'privacy' | 'terms' | 'refunds'>('license');

  // Completed order data state
  const [completedOrder, setCompletedOrder] = useState<any>(null);

  // Dynamic document title update per route matching PDF
  useEffect(() => {
    const titles: Record<string, string> = {
      home: 'Coach Website Templates | Sagepage Studio',
      shop: 'Website Templates for Coaches | Shop | Sagepage Studio',
      'clarity-sales': 'Clarity Coach Website Template (HTML + Tailwind) | Sagepage Studio',
      'live-demo': 'Clarity Live Demo | Sagepage Studio',
      'free-checklist': 'Free Coach Website Checklist | Sagepage Studio',
      'thank-you': 'Thank You | Sagepage Studio',
      blog: 'Website Tips for Coaches | Sagepage Studio Blog',
      'blog-post': activeBlogPost ? `${activeBlogPost.title} | Sagepage Studio` : 'Article | Sagepage Studio',
      services: 'Website Template Customization for Coaches | Sagepage Studio',
      about: 'About Sagepage Studio | Web Developer for Coaches',
      contact: 'Contact | Sagepage Studio',
      faq: 'FAQ | Coach Website Templates | Sagepage Studio',
      docs: 'Docs | Sagepage Studio',
      'order-success': 'Order Success & Downloads | Sagepage Studio',
      changelog: 'Changelog | Sagepage Studio',
      support: 'Support Center | Sagepage Studio',
      affiliates: 'Share Sagepage Templates & Earn 25% | Sagepage Studio',
      '404': 'Page Not Found | Sagepage Studio'
    };

    if (titles[currentRoute]) {
      document.title = titles[currentRoute];
    }
  }, [currentRoute, activeBlogPost]);

  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCheckout = (tier: 'standard' | 'freelancer' | 'bundle' = 'standard') => {
    setCheckoutTier(tier);
    setCheckoutOpen(true);
  };

  const handleOpenNotify = (name: string) => {
    setNotifyName(name);
    setNotifyOpen(true);
  };

  const handleOpenLegal = (doc: 'license' | 'privacy' | 'terms' | 'refunds') => {
    setLegalDocType(doc);
    setLegalOpen(true);
  };

  const handleSelectBlogPost = (post: BlogPostType) => {
    setActiveBlogPost(post);
    setCurrentRoute('blog-post');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderCompleted = (orderInfo: any) => {
    setCompletedOrder(orderInfo);
    setCurrentRoute('order-success');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Standalone routes that do not need default site header/footer
  const isDemoViewer = currentRoute === 'live-demo';
  const isFreeChecklistLanding = currentRoute === 'free-checklist';

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2B2B2B] flex flex-col font-sans selection:bg-[#A3B18A]/30 selection:text-[#344E41]">
      {/* Shared Site Header */}
      {!isDemoViewer && !isFreeChecklistLanding && (
        <Header
          currentRoute={currentRoute}
          navigate={handleNavigate}
          onOpenCheckout={() => handleOpenCheckout('standard')}
        />
      )}

      {/* Main Content Area with accessible landmark */}
      <main id="main-content" className="flex-1">
        {currentRoute === 'home' && (
          <Home
            navigate={handleNavigate}
            onOpenCheckout={handleOpenCheckout}
            onOpenNotify={handleOpenNotify}
          />
        )}

        {currentRoute === 'shop' && (
          <Shop
            navigate={handleNavigate}
            onOpenCheckout={handleOpenCheckout}
            onOpenNotify={handleOpenNotify}
          />
        )}

        {currentRoute === 'clarity-sales' && (
          <ClaritySales
            navigate={handleNavigate}
            onOpenCheckout={handleOpenCheckout}
          />
        )}

        {currentRoute === 'live-demo' && (
          <LiveDemoViewer
            navigate={handleNavigate}
            onOpenCheckout={() => handleOpenCheckout('standard')}
          />
        )}

        {currentRoute === 'free-checklist' && (
          <FreeChecklist navigate={handleNavigate} />
        )}

        {currentRoute === 'thank-you' && (
          <ThankYou navigate={handleNavigate} />
        )}

        {currentRoute === 'blog' && (
          <Blog
            navigate={handleNavigate}
            onSelectPost={handleSelectBlogPost}
          />
        )}

        {currentRoute === 'blog-post' && (
          <BlogPostView
            post={activeBlogPost || BLOG_POSTS[0]}
            navigate={handleNavigate}
            onSelectPost={handleSelectBlogPost}
          />
        )}

        {currentRoute === 'services' && (
          <Services navigate={handleNavigate} />
        )}

        {currentRoute === 'about' && (
          <About navigate={handleNavigate} />
        )}

        {currentRoute === 'contact' && (
          <Contact navigate={handleNavigate} />
        )}

        {currentRoute === 'faq' && (
          <FAQPage navigate={handleNavigate} />
        )}

        {currentRoute === 'docs' && (
          <Docs navigate={handleNavigate} />
        )}

        {currentRoute === 'order-success' && (
          <OrderSuccess
            orderInfo={completedOrder}
            navigate={handleNavigate}
          />
        )}

        {currentRoute === 'changelog' && (
          <Changelog navigate={handleNavigate} />
        )}

        {currentRoute === 'support' && (
          <Support navigate={handleNavigate} />
        )}

        {currentRoute === 'affiliates' && (
          <Affiliates navigate={handleNavigate} />
        )}

        {currentRoute === '404' && (
          <NotFound navigate={handleNavigate} />
        )}
      </main>

      {/* Shared Site Footer */}
      {!isDemoViewer && !isFreeChecklistLanding && (
        <Footer
          navigate={handleNavigate}
          openLegalModal={handleOpenLegal}
        />
      )}

      {/* Persistent Cookie Notice */}
      <CookieNotice />

      {/* Global Interactive Modals */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        initialLicense={checkoutTier}
        onSuccess={handleOrderCompleted}
      />

      <NotifyModal
        isOpen={notifyOpen}
        onClose={() => setNotifyOpen(false)}
        templateName={notifyName}
      />

      <LegalModal
        isOpen={legalOpen}
        onClose={() => setLegalOpen(false)}
        docType={legalDocType}
      />
    </div>
  );
}
