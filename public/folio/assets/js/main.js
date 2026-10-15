/**
 * FOLIO - INTERACTIVE VANILLA JAVASCRIPT
 * Zero dependencies, accessible (WCAG AA), fast.
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initGalleryFilter();
  initLightbox();
  initFaqAccordion();
  initContactForm();
  initScrollAnimations();
  injectConfigDetails();
});

/* -------------------------------------------------------------------------- */
/* 1. STICKY HEADER TRANSITION                                                */
/* -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.getElementById('folio-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('header-scrolled');
      header.classList.remove('header-transparent');
    } else {
      // If hero is dark, return to transparent
      if (header.dataset.transparentHero === 'true') {
        header.classList.remove('header-scrolled');
        header.classList.add('header-transparent');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* -------------------------------------------------------------------------- */
/* 2. MOBILE MENU DRAWER                                                      */
/* -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-menu-drawer');
  const closeBtn = document.getElementById('mobile-menu-close');

  if (!toggleBtn || !drawer) return;

  const openMenu = () => {
    drawer.classList.remove('hidden');
    drawer.classList.add('flex');
    document.body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    drawer.classList.add('hidden');
    drawer.classList.remove('flex');
    document.body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  // Close when clicking any menu link
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* -------------------------------------------------------------------------- */
/* 3. PORTFOLIO CATEGORY FILTERING                                            */
/* -------------------------------------------------------------------------- */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.folio-filter-btn');
  const items = document.querySelectorAll('.folio-gallery-item');

  if (!filterBtns.length || !items.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');

      // Update button active state
      filterBtns.forEach(b => {
        b.classList.remove('text-[#111111]', 'border-[#111111]', 'font-semibold');
        b.classList.add('text-[#8C857B]', 'border-transparent');
      });
      btn.classList.add('text-[#111111]', 'border-[#111111]', 'font-semibold');
      btn.classList.remove('text-[#8C857B]', 'border-transparent');

      // Filter gallery items
      items.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (category === 'all' || itemCat === category) {
          item.style.display = 'block';
          item.classList.add('fade-in-element', 'is-visible');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* -------------------------------------------------------------------------- */
/* 4. LIGHTBOX MODAL (PhotoSwipe-caliber vanilla JS lightbox)                */
/* -------------------------------------------------------------------------- */
function initLightbox() {
  const lightbox = document.getElementById('folio-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxBadge = document.getElementById('lightbox-badge');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const zoomBtn = document.getElementById('lightbox-zoom');
  const fsBtn = document.getElementById('lightbox-fs');

  if (!lightbox || !lightboxImg) return;

  let activeItems = [];
  let currentIndex = 0;
  let isZoomed = false;
  let previousFocusedElement = null;

  // Refresh active items in the gallery, respecting active filters and visibility
  const refreshActiveItems = () => {
    const allTriggers = Array.from(document.querySelectorAll('.js-lightbox-trigger'));
    activeItems = allTriggers.filter(el => {
      // Check if parent gallery item is hidden by filter
      const galleryItem = el.closest('.folio-gallery-item');
      if (galleryItem && galleryItem.style.display === 'none') {
        return false;
      }
      return el.offsetParent !== null; // Element is visible on page
    });

    if (activeItems.length === 0) {
      activeItems = allTriggers;
    }
  };

  const updateLightboxContent = () => {
    if (!activeItems.length) return;
    const currentItem = activeItems[currentIndex];
    if (!currentItem) return;

    const imgEl = currentItem.tagName === 'IMG' ? currentItem : currentItem.querySelector('img') || currentItem;
    const fullSrc = currentItem.getAttribute('data-full') || imgEl.getAttribute('data-full') || imgEl.getAttribute('src');
    const title = currentItem.getAttribute('data-title') || imgEl.getAttribute('data-title') || imgEl.getAttribute('alt') || 'Artwork';
    const category = currentItem.getAttribute('data-category') || imgEl.getAttribute('data-category') || '';
    const desc = currentItem.getAttribute('data-desc') || imgEl.getAttribute('data-desc') || '';

    // Smooth image transition
    lightboxImg.style.opacity = '0';
    setTimeout(() => {
      lightboxImg.src = fullSrc;
      lightboxImg.alt = title;
      lightboxImg.onload = () => {
        lightboxImg.style.opacity = '1';
      };
      if (lightboxImg.complete) {
        lightboxImg.style.opacity = '1';
      }
    }, 80);

    if (lightboxCaption) {
      lightboxCaption.textContent = title;
    }
    if (lightboxDesc) {
      lightboxDesc.textContent = desc;
      lightboxDesc.style.display = desc ? 'block' : 'none';
    }
    if (lightboxBadge) {
      if (category) {
        lightboxBadge.textContent = category;
        lightboxBadge.style.display = 'inline-block';
      } else {
        lightboxBadge.style.display = 'none';
      }
    }
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentIndex + 1} / ${activeItems.length}`;
    }

    if (isZoomed) {
      toggleZoom(false);
    }

    // Preload next and previous images for instant viewing
    preloadImage((currentIndex + 1) % activeItems.length);
    preloadImage((currentIndex - 1 + activeItems.length) % activeItems.length);
  };

  const preloadImage = (index) => {
    if (!activeItems[index]) return;
    const el = activeItems[index];
    const img = el.tagName === 'IMG' ? el : el.querySelector('img') || el;
    const src = el.getAttribute('data-full') || img.getAttribute('data-full') || img.getAttribute('src');
    if (src) {
      const preloader = new Image();
      preloader.src = src;
    }
  };

  const openLightbox = (index, triggerEl) => {
    previousFocusedElement = triggerEl || document.activeElement;
    refreshActiveItems();
    currentIndex = Math.max(0, Math.min(index, activeItems.length - 1));
    updateLightboxContent();

    lightbox.classList.remove('hidden');
    void lightbox.offsetWidth; // Force CSS reflow for smooth transition
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    lightbox.setAttribute('aria-hidden', 'false');

    if (closeBtn) closeBtn.focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (isZoomed) toggleZoom(false);

    setTimeout(() => {
      lightbox.classList.add('hidden');
      if (previousFocusedElement && typeof previousFocusedElement.focus === 'function') {
        previousFocusedElement.focus();
      }
    }, 250);
  };

  const showNext = () => {
    if (activeItems.length <= 1) return;
    currentIndex = (currentIndex + 1) % activeItems.length;
    updateLightboxContent();
  };

  const showPrev = () => {
    if (activeItems.length <= 1) return;
    currentIndex = (currentIndex - 1 + activeItems.length) % activeItems.length;
    updateLightboxContent();
  };

  const toggleZoom = (forceState) => {
    isZoomed = typeof forceState === 'boolean' ? forceState : !isZoomed;
    if (isZoomed) {
      lightboxImg.style.maxHeight = 'none';
      lightboxImg.style.maxWidth = 'none';
      lightboxImg.style.cursor = 'zoom-out';
      if (zoomBtn) zoomBtn.classList.add('text-[#E4572E]');
    } else {
      lightboxImg.style.maxHeight = '72vh';
      lightboxImg.style.maxWidth = '88vw';
      lightboxImg.style.cursor = 'zoom-in';
      if (zoomBtn) zoomBtn.classList.remove('text-[#E4572E]');
    }
  };

  // Event delegation: clicking any element with .js-lightbox-trigger opens the lightbox
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.js-lightbox-trigger');
    if (!trigger) return;
    e.preventDefault();
    refreshActiveItems();
    const idx = activeItems.indexOf(trigger);
    openLightbox(idx !== -1 ? idx : 0, trigger);
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);
  if (zoomBtn) zoomBtn.addEventListener('click', () => toggleZoom());

  // Fullscreen support
  if (fsBtn) {
    fsBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        lightbox.requestFullscreen?.().catch(() => {});
      } else {
        document.exitFullscreen?.().catch(() => {});
      }
    });
  }

  // Click directly on image toggles zoom
  lightboxImg.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleZoom();
  });

  // Click outside image closes lightbox
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-img-wrapper')) {
      closeLightbox();
    }
  });

  // Keyboard accessibility
  window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'Home') { currentIndex = 0; updateLightboxContent(); }
    if (e.key === 'End') { currentIndex = activeItems.length - 1; updateLightboxContent(); }
  });

  // Mobile Touch Gestures (Swipe left/right to navigate, swipe down to dismiss)
  let touchStartX = 0;
  let touchStartY = 0;
  lightbox.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    if (e.changedTouches.length === 1) {
      const deltaX = e.changedTouches[0].clientX - touchStartX;
      const deltaY = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) showNext();
        else showPrev();
      } else if (deltaY > 80 && Math.abs(deltaY) > Math.abs(deltaX)) {
        closeLightbox();
      }
    }
  }, { passive: true });
}

/* -------------------------------------------------------------------------- */
/* 5. FAQ ACCORDION                                                           */
/* -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const toggles = document.querySelectorAll('.folio-faq-toggle');
  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      btn.setAttribute('aria-expanded', !isExpanded);
      if (body) {
        body.classList.toggle('hidden');
      }
      if (icon) {
        icon.textContent = isExpanded ? '+' : '−';
      }
    });
  });
}

/* -------------------------------------------------------------------------- */
/* 6. CONTACT FORM VALIDATION & HONEYPOT                                      */
/* -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('folio-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Check honeypot field (bots fill this in)
    const honeypot = form.querySelector('input[name="_gotcha"]');
    if (honeypot && honeypot.value.trim() !== '') {
      console.warn('Spam submission detected by honeypot.');
      return;
    }

    const email = form.querySelector('input[type="email"]');
    if (email && !email.value.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = 'Sending Inquiry...';
    }

    // Simulate direct endpoint submission or redirect to thank-you.html
    setTimeout(() => {
      window.location.href = 'thank-you.html';
    }, 400);
  });
}

/* -------------------------------------------------------------------------- */
/* 7. SCROLL FADE-IN ANIMATION (Reduced motion aware)                         */
/* -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const elements = document.querySelectorAll('.fade-in-element');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

/* -------------------------------------------------------------------------- */
/* 8. DYNAMIC CONFIG INJECTION                                                */
/* -------------------------------------------------------------------------- */
function injectConfigDetails() {
  const cfg = window.FolioConfig;
  if (!cfg) return;

  document.querySelectorAll('.js-brand-name').forEach(el => el.textContent = cfg.brandName);
  document.querySelectorAll('.js-brand-role').forEach(el => el.textContent = cfg.role);
  document.querySelectorAll('.js-brand-location').forEach(el => el.textContent = cfg.location);

  document.querySelectorAll('.js-brand-email').forEach(el => {
    el.textContent = cfg.email;
    if (el.tagName === 'A') el.href = `mailto:${cfg.email}`;
  });

  document.querySelectorAll('.js-brand-phone').forEach(el => {
    el.textContent = cfg.phone;
    if (el.tagName === 'A') el.href = `tel:${cfg.phone.replace(/[^0-9+]/g, '')}`;
  });

  document.querySelectorAll('.js-brand-instagram').forEach(el => {
    if (el.tagName === 'A') el.href = cfg.instagramUrl;
  });

  document.querySelectorAll('.js-brand-booking').forEach(el => {
    if (el.tagName === 'A') el.href = cfg.bookingUrl;
  });
}
