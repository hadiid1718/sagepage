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
/* 4. LIGHTBOX MODAL (Click to open, Prev, Next, Close, Keyboard support)     */
/* -------------------------------------------------------------------------- */
function initLightbox() {
  const lightbox = document.getElementById('folio-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (!lightbox || !lightboxImg) return;

  const galleryItems = Array.from(document.querySelectorAll('.js-lightbox-trigger'));
  let currentIndex = 0;

  const openLightbox = (index) => {
    currentIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    lightbox.setAttribute('aria-hidden', 'false');
    if (closeBtn) closeBtn.focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    lightbox.setAttribute('aria-hidden', 'true');
  };

  const showNext = () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    updateLightboxContent();
  };

  const showPrev = () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateLightboxContent();
  };

  const updateLightboxContent = () => {
    const currentItem = galleryItems[currentIndex];
    if (!currentItem) return;

    const fullSrc = currentItem.getAttribute('data-full') || currentItem.getAttribute('src');
    const title = currentItem.getAttribute('data-title') || currentItem.getAttribute('alt') || 'Artwork';
    const category = currentItem.getAttribute('data-category') || '';

    lightboxImg.src = fullSrc;
    lightboxImg.alt = title;

    if (lightboxCaption) {
      lightboxCaption.innerHTML = `<span class="font-serif font-bold text-lg">${title}</span> ${category ? `<span class="text-xs uppercase text-[#8C857B] ml-2">/ ${category}</span>` : ''}`;
    }
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentIndex + 1} / ${galleryItems.length}`;
    }
  };

  galleryItems.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox(idx);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  // Close on outside overlay click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard accessibility: Left, Right, Escape
  window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
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
