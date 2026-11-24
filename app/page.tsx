'use client';

import React, { useState, useEffect, useCallback } from 'react';

// All real Behance projects curated from https://www.behance.net/mdmunsurali20
const BEHANCE_PROJECTS = [
  {
    id: '01',
    category: 'HOSPITALITY',
    filterCat: 'hospitality',
    period: '2025 — 26',
    tags: 'Hospitality · Social Media · Golden Tulip',
    title: 'Skyline Tulip\nPromotional Social Media',
    desc: 'Visual communication and promotional social campaigns for Skyline Tulip at Golden Tulip The Grandmark Dhaka.',
    className: 'wide',
    cover: 'https://mir-s3-cdn-cf.behance.net/projects/404/0b8ea2256671241.Y3JvcCwxMzQyLDEwNTAsMjksMA.jpg',
    behanceUrl: 'https://www.behance.net/gallery/256671241/Skyline-Tulip-Promotional-Social-Media-Designs',
    images: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/921aa7256671241.6ac38ed16f4f3.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/a4a956256671241.6ac38ed1719b6.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/425092256671241.6ac38ed1705b3.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/188073256671241.6ac38ed1713ef.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/83c134256671241.6ac38ed170b5e.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/817902256671241.6ac38ed1723a8.jpg',
    ],
  },
  {
    id: '02',
    category: 'F&B & DINING',
    filterCat: 'hospitality',
    period: '2025 — 26',
    tags: 'F&B Branding · Menu Design · Photography',
    title: 'A Visual Journey\nof Dining Experiences',
    desc: 'Editorial food photography direction, breakfast, brunch, lunch and dinner promotional creatives for luxury hospitality.',
    className: 'narrow',
    cover: 'https://mir-s3-cdn-cf.behance.net/projects/404/895a32256940487.Y3JvcCwxMzA5LDEwMjQsMTE5LDA.png',
    behanceUrl: 'https://www.behance.net/gallery/256940487/A-Visual-Journey-of-Breakfast-Brunch-Lunch-Dinner',
    images: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/f83ac4256940487.6acb28f2d61f4.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/a0ce43256940487.6acb28f2d80bc.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/44dc28256940487.6acb28f2d793d.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/07eaf1256940487.6acb28f2d7d09.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/376658256940487.6acb28f2d6cd2.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/ec858f256940487.6acb28f2d8424.jpg',
    ],
  },
  {
    id: '03',
    category: 'DIGITAL CAMPAIGNS',
    filterCat: 'social',
    period: '2025 — 26',
    tags: 'Seasonal Campaigns · Advertising · Social Media',
    title: 'Christmas Campaign\nCreatives',
    desc: 'Festive branding suite, digital marketing creatives, and seasonal buffet promotions for Golden Tulip Dhaka.',
    className: 'narrow',
    cover: 'https://mir-s3-cdn-cf.behance.net/projects/404/42d169256948515.Y3JvcCw4MTUsNjM4LDQxNyww.jpg',
    behanceUrl: 'https://www.behance.net/gallery/256948515/Christmas-Campaign-Creatives',
    images: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/85c790256948515.6acb790c640dd.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/60f616256948515.6acb790c655ab.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/83f477256948515.6acb790c64c2f.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/13be3e256948515.6acb790c646d2.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/22bb9b256948515.6acb790c650da.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/4ef5c6256948515.6acb790c66087.jpg',
    ],
  },
  {
    id: '04',
    category: 'BEVERAGE & SUMMER',
    filterCat: 'hospitality',
    period: '2025',
    tags: 'Product Advertising · Color Palette · Summer Combo',
    title: 'Beat The Heat\nSummer Cooler Combo',
    desc: 'Vibrant, high-energy promotional campaign for seasonal beverages, mocktails, and dining specials.',
    className: 'wide',
    cover: 'https://mir-s3-cdn-cf.behance.net/projects/404/46e62e256721557.Y3JvcCw3NTAwLDU4NjYsMCwzNTQ1.jpg',
    behanceUrl: 'https://www.behance.net/gallery/256721557/Beat-The-Heat-Summer-Cooler-Combo',
    images: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/ca1653256721557.6ac4d4575c907.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/e7acb9256721557.6ac4d4575e8e9.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/5e0217256721557.6ac4d457602ef.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/9ff8bd256721557.6ac4d4575d0ad.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/e43613256721557.6ac4d4575f900.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/b48687256721557.6ac4d4575d8cc.jpg',
    ],
  },
  {
    id: '05',
    category: 'WELLNESS & POSTER',
    filterCat: 'print',
    period: '2025',
    tags: 'Poster Design · Typography · SPA Branding',
    title: 'Serenity & Style\nSPA Poster Design',
    desc: 'Minimalist luxury aesthetic designed for wellness spa promotions, in-hotel posters, and digital ads.',
    className: 'narrow',
    cover: 'https://mir-s3-cdn-cf.behance.net/projects/404/fc7b03256664935.Y3JvcCwzODMwLDI5OTUsMCw1Njg.jpg',
    behanceUrl: 'https://www.behance.net/gallery/256664935/Serenity-Style-SPA-Poster-Design',
    images: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/d57aeb256664935.6ac36e1f40d2b.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/3c24ef256664935.6ac36e1f41eb7.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/8e01ba256664935.6ac36e1f411fa.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/3109c4256664935.6ac36e1f4163b.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/afef98256664935.6ac36e1f41a93.jpg',
    ],
  },
  {
    id: '06',
    category: 'HOSPITALITY CAMPAIGNS',
    filterCat: 'social',
    period: '2025',
    tags: 'Staycation · Room Packages · Social Media',
    title: 'Staycation Campaigns\nSocial Media Rollout',
    desc: 'Targeted social media suite promoting luxury room packages, weekend staycations, and suite amenities.',
    className: 'narrow',
    cover: 'https://mir-s3-cdn-cf.behance.net/projects/404/70dcf9256597969.Y3JvcCwyODAwLDIxOTAsMCww.jpg',
    behanceUrl: 'https://www.behance.net/gallery/256597969/Staycation-Campaigns-(Social-Media-Post)',
    images: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/ed6d4c256597969.6ac0dea82db6b.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/641d7c256597969.6ac0dea82fa24.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/752a8d256597969.6ac0dea82eb97.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/b02acf256597969.6ac0dea82f2d0.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/ab9ac3256597969.6ac0dea82e389.jpg',
    ],
  },
  {
    id: '07',
    category: 'NATIONAL & CULTURAL',
    filterCat: 'social',
    period: '2025',
    tags: 'Cultural Campaigns · Bangladesh · Victory Day',
    title: 'National Day\nSocial Media Campaigns',
    desc: 'Patriotic and celebratory campaign creatives for Bangladesh Victory Day, Independence Day, and cultural festivals.',
    className: 'wide',
    cover: 'https://mir-s3-cdn-cf.behance.net/projects/404/e9091b256597139.Y3JvcCwzMDYyLDIzOTUsMCwxOTc.jpg',
    behanceUrl: 'https://www.behance.net/gallery/256597139/National-Day-Social-Media-Campaigns',
    images: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/685872256597139.6ac0d825ed5d8.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/a1c951256597139.6ac0d825ed9dc.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/3346a0256597139.6ac0d825f1298.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/9e4f18256597139.6ac0d825f19a1.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/d85783256597139.6ac0d825ee186.jpg',
    ],
  },
  {
    id: '08',
    category: 'CAFE & DINING',
    filterCat: 'hospitality',
    period: '2025',
    tags: 'Cafe Branding · Social Content · F&B',
    title: 'Cafe De Tulip\nBranding & Visuals',
    desc: 'Social content, signage, and coffee promotion designs crafted for Café De Tulip.',
    className: 'narrow',
    cover: 'https://mir-s3-cdn-cf.behance.net/projects/404/a5bbf3256176747.Y3JvcCwxNjA1LDEyNTUsMCwzNTM.jpg',
    behanceUrl: 'https://www.behance.net/gallery/256176747/Cafe-De-Tulip',
    images: [
      'https://mir-s3-cdn-cf.behance.net/projects/404/a5bbf3256176747.Y3JvcCwxNjA1LDEyNTUsMCwzNTM.jpg',
      'https://mir-s3-cdn-cf.behance.net/projects/404/92ad08256447477.Y3JvcCwxOTk5LDE1NjQsMCw1OTQ.jpg',
    ],
  },
  {
    id: '09',
    category: 'LOGO & IDENTITY',
    filterCat: 'branding',
    period: 'BRANDING',
    tags: 'Logo Design · Vector · Visual Identity',
    title: 'The Bachelor Show\nIdentity & Logo Design',
    desc: 'Bold, recognizable emblem and typography mark designed for media and entertainment production.',
    className: 'narrow',
    cover: 'https://mir-s3-cdn-cf.behance.net/projects/404/cf4a7192850359.Y3JvcCw1OTE2LDQ2MjcsMCw2MTU.jpg',
    behanceUrl: 'https://www.behance.net/gallery/92850359/The-Bachelor-Show-Logo',
    images: [
      'https://mir-s3-cdn-cf.behance.net/projects/404/cf4a7192850359.Y3JvcCw1OTE2LDQ2MjcsMCw2MTU.jpg',
      'https://mir-s3-cdn-cf.behance.net/projects/404/0d656b85528983.Y3JvcCwxMDgwLDg0NCwwLDExNw.png',
      'https://mir-s3-cdn-cf.behance.net/projects/404/015a65124734551.Y3JvcCwxNzgyLDEzOTMsMCwxOTQ.jpg',
    ],
  },
  {
    id: '10',
    category: 'EDITORIAL & PRINT',
    filterCat: 'print',
    period: 'PRINT',
    tags: 'Catalog · Company Profile · Prepress',
    title: 'Tri-Fold Company Profile\n& Catalog Design',
    desc: 'Structured multi-page corporate catalog and tri-fold brochure engineered with precision prepress specifications.',
    className: 'wide',
    cover: 'https://mir-s3-cdn-cf.behance.net/projects/404/9a08e277955335.Y3JvcCwyNjIzLDIwNTIsMjIzMyww.jpg',
    behanceUrl: 'https://www.behance.net/gallery/77955335/Tri-Fold-Company-ProfileCatalog-Design',
    images: [
      'https://mir-s3-cdn-cf.behance.net/projects/404/9a08e277955335.Y3JvcCwyNjIzLDIwNTIsMjIzMyww.jpg',
      'https://mir-s3-cdn-cf.behance.net/projects/404/302fab91010345.Y3JvcCwxMDM1LDgxMCwxMjUsNDg5.jpg',
      'https://mir-s3-cdn-cf.behance.net/projects/404/10023c86118403.Y3JvcCwzMDAwLDIzNDYsMCwyOQ.jpg',
      'https://mir-s3-cdn-cf.behance.net/projects/404/4478c8125370963.Y3JvcCwyNTU2LDIwMDAsMjIxLDA.jpg',
    ],
  },
  {
    id: '11',
    category: 'WEDDING PROMOTIONS',
    filterCat: 'social',
    period: '2025',
    tags: 'Hospitality Weddings · Social Media · Events',
    title: 'Wedding Social Media\nPromotions',
    desc: 'Elegant, luxury banquet and wedding reception social campaigns designed for luxury hotel clients.',
    className: 'narrow',
    cover: 'https://mir-s3-cdn-cf.behance.net/projects/404/91f84c256184297.Y3JvcCwxNDAwLDEwOTUsMCwxNTU.jpg',
    behanceUrl: 'https://www.behance.net/gallery/256184297/Wedding-Social-Media-Promotion',
    images: [
      'https://mir-s3-cdn-cf.behance.net/projects/404/91f84c256184297.Y3JvcCwxNDAwLDEwOTUsMCwxNTU.jpg',
    ],
  },
  {
    id: '12',
    category: 'BRAND IDENTITY',
    filterCat: 'branding',
    period: 'IDENTITY',
    tags: 'Brand Systems · Beyond Logo · Guidelines',
    title: 'Beyond Logo Mockup\n& Visual Identity',
    desc: 'Contemporary minimalist logo presentation and 3D brand mockup application.',
    className: 'narrow',
    cover: 'https://mir-s3-cdn-cf.behance.net/projects/404/0d656b85528983.Y3JvcCwxMDgwLDg0NCwwLDExNw.png',
    behanceUrl: 'https://www.behance.net/gallery/85528983/Beyond-Logo-Mockup',
    images: [
      'https://mir-s3-cdn-cf.behance.net/projects/404/0d656b85528983.Y3JvcCwxMDgwLDg0NCwwLDExNw.png',
      '/images/identity-1.jpg',
    ],
  },
];

const FAQ_ITEMS = [
  {
    question: 'What creative services do you offer?',
    answer:
      'I specialize in multidisciplinary visual design: Brand Identity & Logo Systems, 2D Motion Graphics & Animation, Promotional & Corporate Video Editing, Digital Advertising & Social Media Campaigns, and Prepress Commercial Print & Packaging Production.',
  },
  {
    question: 'What is your typical project timeline?',
    answer:
      'Timelines vary by scope. Social media creatives and promotional reels are typically delivered within 24 to 48 hours. Comprehensive brand identity systems and full marketing campaign packages take 1 to 3 weeks with iterative feedback rounds.',
  },
  {
    question: 'Do you prepare files for commercial offset print & packaging?',
    answer:
      'Yes. Having worked at Akij Printing & Packaging Ltd., I possess hands-on expertise in prepress requirements, CMYK/Pantone color separation, die-lines, bleed margins, spot UV, and plate-making specifications.',
  },
  {
    question: 'Are you available for freelance projects or contract roles?',
    answer:
      'Yes, I am currently available for select freelance projects, retainer creative direction, and remote design collaborations worldwide.',
  },
];

const SHOWREEL_URL: string = 'https://www.youtube.com/watch?v=34Na4j8AVgA';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState<{
    open: boolean;
    title: string;
    images: string[];
    index: number;
    behanceUrl: string;
  }>({
    open: false,
    title: '',
    images: [],
    index: 0,
    behanceUrl: '',
  });

  const [currentYear, setCurrentYear] = useState('2026');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  // Intersection Observer for scroll reveal and active nav
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => observer.observe(el));

    const sections = document.querySelectorAll('main section[id]');
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    sections.forEach((s) => navObserver.observe(s));

    return () => {
      observer.disconnect();
      navObserver.disconnect();
    };
  }, []);

  // Keyboard navigation for modals
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowreelOpen(false);
        setLightbox((prev) => ({ ...prev, open: false }));
      } else if (lightbox.open) {
        if (e.key === 'ArrowRight') {
          setLightbox((prev) => ({
            ...prev,
            index: (prev.index + 1) % prev.images.length,
          }));
        } else if (e.key === 'ArrowLeft') {
          setLightbox((prev) => ({
            ...prev,
            index: (prev.index - 1 + prev.images.length) % prev.images.length,
          }));
        }
      }
    },
    [lightbox.open]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Preload adjacent images in lightbox for instant switching
  useEffect(() => {
    if (lightbox.open && lightbox.images.length > 1) {
      const nextIdx = (lightbox.index + 1) % lightbox.images.length;
      const prevIdx = (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length;
      const imgNext = new Image();
      imgNext.src = lightbox.images[nextIdx];
      const imgPrev = new Image();
      imgPrev.src = lightbox.images[prevIdx];
    }
  }, [lightbox.open, lightbox.index, lightbox.images]);

  const openLightbox = (title: string, images: string[], behanceUrl: string) => {
    if (!images || images.length === 0) return;
    setLightbox({
      open: true,
      title,
      images,
      index: 0,
      behanceUrl,
    });
  };

  const nextLightboxImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length,
    }));
  };

  const prevLightboxImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length,
    }));
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('contact@gfxmunsur.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const filteredProjects =
    activeFilter === 'all'
      ? BEHANCE_PROJECTS
      : BEHANCE_PROJECTS.filter((p) => p.filterCat === activeFilter);

  // Helper to render showreel embed
  const renderShowreelEmbed = () => {
    if (!SHOWREEL_URL) {
      return (
        <div className="embed-placeholder">
          <span>Showreel Coming Soon</span>
        </div>
      );
    }
    const ytMatch = SHOWREEL_URL.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
    const vmMatch = SHOWREEL_URL.match(/vimeo\.com\/(?:video\/)?(\d+)/);

    if (ytMatch) {
      return (
        <div className="embed-placeholder">
          <iframe
            src={`https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`}
            title="Showreel"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      );
    }
    if (vmMatch) {
      return (
        <div className="embed-placeholder">
          <iframe
            src={`https://player.vimeo.com/video/${vmMatch[1]}?autoplay=1`}
            title="Showreel"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      );
    }
    return (
      <div className="embed-placeholder">
        <video src={SHOWREEL_URL} controls autoPlay playsInline />
      </div>
    );
  };

  return (
    <>
      {/* Header */}
      <header className="header">
        <nav className="nav wrap" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="GFX Munsur home">
            GFX <span>MUNSUR</span>
          </a>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '×' : '☰'}
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a
              href="#work"
              className={activeSection === 'work' ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Selected work
            </a>
            <a
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className={activeSection === 'services' ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Expertise
            </a>
            <a
              href="#experience"
              className={activeSection === 'experience' ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#reel"
              className={activeSection === 'reel' ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Showreel
            </a>
            <a
              href="#faq"
              className={activeSection === 'faq' ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              className="nav-cta"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s talk ↗
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero wrap">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-kicker">
                <span className="status-dot"></span> Senior Designer & Visual Storyteller · Dhaka, Bangladesh
              </div>
              <h1>
                MD.
                <br />
                MUNSUR
                <br />
                <em>ALI.</em>
              </h1>
              <p className="hero-role">
                Senior Graphic Designer · Motion Graphics Artist · Video Editor
              </p>
              <p className="hero-sub">
                10+ YEARS CRAFTING VISUAL STORIES, HOSPITALITY BRANDING & DIGITAL MARKETING CAMPAIGNS
              </p>
              <div className="hero-actions">
                <a className="btn btn-light" href="#work">
                  View selected work <span className="arrow">↘</span>
                </a>
                <button
                  className="btn"
                  onClick={() => setShowreelOpen(true)}
                >
                  Watch showreel <span className="arrow">↗</span>
                </button>
                <a
                  className="btn"
                  href="https://www.behance.net/mdmunsurali20"
                  target="_blank"
                  rel="noreferrer"
                  style={{ borderColor: 'rgba(214, 255, 101, 0.4)' }}
                >
                  Behance Profile ↗
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <img
                src="https://mir-s3-cdn-cf.behance.net/projects/404/0b8ea2256671241.Y3JvcCwxMzQyLDEwNTAsMjksMA.jpg"
                alt="Skyline Tulip at Golden Tulip The Grandmark Dhaka by Md. Munsur Ali"
              />
              <span className="visual-index">BEHANCE PORTFOLIO · 2026</span>
              <div className="visual-note">
                <div>
                  <strong>Designing with purpose.</strong>
                  <br />
                  <span>Hospitality · Motion · Identity</span>
                </div>
                <span>01 / 12</span>
              </div>
              <div className="hero-stamp">
                <b>10+</b>
                <br />
                years of
                <br />
                making
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section className="section" id="work">
          <div className="wrap">
            <div className="section-head reveal" style={{ alignItems: 'flex-start' }}>
              <div>
                <span className="eyebrow">Real Works from Behance · 01—12</span>
                <h2>
                  Selected works
                  <br />
                  & campaigns.
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
                <p>
                  Directly showcasing client projects from Golden Tulip, Neways International, Café De Tulip, and commercial brands.
                </p>
                <a
                  href="https://www.behance.net/mdmunsurali20"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light"
                >
                  Visit full Behance (36+ Projects) <span className="arrow">↗</span>
                </a>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div
              className="reveal"
              style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
                marginBottom: '32px',
              }}
            >
              {[
                { label: 'All Projects (12)', key: 'all' },
                { label: 'Hospitality & F&B', key: 'hospitality' },
                { label: 'Social & Digital Campaigns', key: 'social' },
                { label: 'Brand & Logo Identity', key: 'branding' },
                { label: 'Print & Packaging', key: 'print' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key)}
                  style={{
                    padding: '8px 16px',
                    fontFamily: 'var(--mono)',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    borderRadius: '2px',
                    border: '1px solid',
                    borderColor:
                      activeFilter === tab.key ? 'var(--acid)' : 'var(--line)',
                    background:
                      activeFilter === tab.key
                        ? 'var(--acid)'
                        : 'rgba(255,255,255,0.02)',
                    color: activeFilter === tab.key ? 'var(--bg)' : 'var(--muted)',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="work-grid">
              {filteredProjects.map((item) => {
                const handleClick = (e: React.MouseEvent) => {
                  e.preventDefault();
                  openLightbox(item.title.replace('\n', ' — '), item.images, item.behanceUrl);
                };

                return (
                  <div
                    key={item.id}
                    className={`work-card ${item.className} reveal`}
                    onClick={handleClick}
                  >
                    <div className="work-image">
                      <img
                        src={item.cover}
                        alt={item.title}
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1634942536790-2536a6a5d8c4?auto=format&fit=crop&w=1200&q=85';
                        }}
                      />
                    </div>
                    <div className="work-top">
                      <span>{`${item.id} — ${item.category}`}</span>
                      <span>{item.period}</span>
                    </div>
                    <div className="work-content">
                      <div className="work-tags">{item.tags}</div>
                      <h3 style={{ whiteSpace: 'pre-line' }}>{item.title}</h3>
                      <p>{item.desc}</p>
                      <span className="work-link">
                        View project gallery ({item.images.length} images) <span>↗</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="section" id="about">
          <div className="wrap about-grid">
            <div className="about-aside reveal">
              <span>About me</span>
              <span className="big-number">
                10<span style={{ color: 'var(--text)' }}>+</span>
              </span>
              <span>years in the making</span>
            </div>
            <div className="about-copy reveal">
              <h2>
                I turn ideas into
                <br />
                <em>visual experiences.</em>
              </h2>
              <p>
                I am a multidisciplinary creative professional with{' '}
                <strong>10+ years of professional experience</strong> across Graphic Design,
                Motion Graphics, and Video Editing.
              </p>
              <p>
                My work combines{' '}
                <strong>
                  visual storytelling, strategic branding, digital marketing communication and
                  creative problem-solving
                </strong>{' '}
                to help organizations communicate their vision with elegance, clarity, and authority.
              </p>
              <p>
                Over the years, I have spearheaded creative campaigns across hospitality (Golden Tulip The Grandmark Dhaka),
                corporate marketing (Neways International), commercial offset printing & packaging (Akij Printing & Packaging),
                and food & beverage brands.
              </p>
              <p>
                I believe great design is not simply making something visually pleasing. It is about crafting an intentional
                visual experience that resonates emotionally and drives tangible outcomes.
              </p>
              <div className="about-bottom">
                <div>
                  <span>Based in</span>
                  <b>Dhaka, Bangladesh</b>
                </div>
                <div>
                  <span>Focus</span>
                  <b>Design · Motion · Prepress</b>
                </div>
                <div>
                  <span>Approach</span>
                  <b>Thoughtful & Purposeful</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise / Services */}
        <section className="section" id="services">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">What I do</span>
                <h2>
                  Creative, from
                  <br />
                  every angle.
                </h2>
              </div>
              <p>
                Bringing the right mix of craft, clarity and creative thinking
                to every brief — from the first idea to the final asset.
              </p>
            </div>
            <div className="services-grid">
              <article className="service reveal">
                <span className="num">01 / 06</span>
                <h3>Graphic Design</h3>
                <p>
                  Brand identities, visual systems, marketing collaterals, social creatives, editorial, and advertising.
                </p>
              </article>
              <article className="service reveal">
                <span className="num">02 / 06</span>
                <h3>Motion Graphics</h3>
                <p>
                  2D animation, kinetic typography, promotional graphics, social reels, logo reveals, and visual effects.
                </p>
              </article>
              <article className="service reveal">
                <span className="num">03 / 06</span>
                <h3>Video Editing</h3>
                <p>
                  Commercial spots, social video content, corporate showreels, hospitality showcases, and audio-visual syncing.
                </p>
              </article>
              <article className="service reveal">
                <span className="num">04 / 06</span>
                <h3>Branding Systems</h3>
                <p>
                  Logo design, comprehensive brand guidelines, color palettes, typography hierarchies, and stationery suites.
                </p>
              </article>
              <article className="service reveal">
                <span className="num">05 / 06</span>
                <h3>Digital & Ads</h3>
                <p>
                  High-converting performance marketing banners, Instagram/Facebook campaigns, web graphics, and email layouts.
                </p>
              </article>
              <article className="service reveal">
                <span className="num">06 / 06</span>
                <h3>Print & Prepress</h3>
                <p>
                  Production-ready offset files, color separations (CMYK/Pantone), packaging die-lines, spot UV, and embossing.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="section" id="experience">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Experience</span>
                <h2>
                  Experience that
                  <br />
                  shapes the work.
                </h2>
              </div>
              <p>
                A career spanning luxury hospitality, corporate marketing, and commercial print manufacturing.
              </p>
            </div>
            <div className="experience-list">
              <article className="job reveal">
                <div className="job-date">2025 — Present</div>
                <div>
                  <h3>Senior Graphic Designer</h3>
                  <div className="job-company">
                    Golden Tulip The Grandmark Dhaka
                  </div>
                  <p>
                    Directing and executing visual communication across luxury hospitality, dining promotions, seasonal festivals,
                    digital marketing, and corporate guest experiences.
                  </p>
                </div>
                <div className="job-tags">
                  Hospitality<br />
                  Campaigns<br />
                  Digital · Motion
                </div>
              </article>
              <article className="job reveal">
                <div className="job-date">2019 — 2024</div>
                <div>
                  <h3>Assistant Manager — Creative & Marketing</h3>
                  <div className="job-company">
                    Neways International Company Limited
                  </div>
                  <p>
                    Led creative teams in formulating digital campaign assets, promotional publications, brand materials, and multimedia content.
                  </p>
                </div>
                <div className="job-tags">
                  Creative Direction<br />
                  Brand Marketing<br />
                  Team Leadership
                </div>
              </article>
              <article className="job reveal">
                <div className="job-date">Earlier career</div>
                <div>
                  <h3>Assistant Officer — Production</h3>
                  <div className="job-company">
                    Akij Printing & Packaging Ltd.
                  </div>
                  <p>
                    Mastered industrial offset printing processes, prepress plate-making, quality assurance, and commercial packaging fabrication.
                  </p>
                </div>
                <div className="job-tags">
                  Prepress<br />
                  Offset Printing<br />
                  Packaging
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="section">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Selected clients & brands</span>
                <h2>
                  Good work is
                  <br />
                  always a team effort.
                </h2>
              </div>
            </div>
            <div className="clients reveal">
              <div className="client">GOLDEN TULIP</div>
              <div className="client">THE GRANDMARK</div>
              <div className="client">
                NEWAYS<small>INTERNATIONAL</small>
              </div>
              <div className="client">AKIJ</div>
              <div className="client">Café De Tulip</div>
              <div className="client">
                HOSPITALITY<small>& F&B BRANDS</small>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">My creative process</span>
                <h2>
                  Good work,
                  <br />
                  step by step.
                </h2>
              </div>
              <p>
                A considered process helps every visual idea stay connected to its strategic purpose.
              </p>
            </div>
            <div className="process-grid">
              <article className="step reveal">
                <span className="step-num">01 — DISCOVER</span>
                <h3>Understand</h3>
                <p>
                  Analyze brand values, target demographic, campaign goals, and competitive landscape.
                </p>
              </article>
              <article className="step reveal">
                <span className="step-num">02 — CONCEPT</span>
                <h3>Find the idea</h3>
                <p>
                  Develop visual moodboards, typography directions, and overarching campaign themes.
                </p>
              </article>
              <article className="step reveal">
                <span className="step-num">03 — DESIGN</span>
                <h3>Make it clear</h3>
                <p>
                  Execute polished vector graphics, grid-aligned layouts, and engaging visual hierarchy.
                </p>
              </article>
              <article className="step reveal">
                <span className="step-num">04 — ANIMATE</span>
                <h3>Bring it to life</h3>
                <p>
                  Introduce fluid motion, transitions, sound effects, and rhythm to captivate viewers.
                </p>
              </article>
              <article className="step reveal">
                <span className="step-num">05 — REFINE</span>
                <h3>Get details right</h3>
                <p>
                  Fine-tune kerning, color calibration, asset compression, and visual balance.
                </p>
              </article>
              <article className="step reveal">
                <span className="step-num">06 — DELIVER</span>
                <h3>Production ready</h3>
                <p>
                  Deliver cross-platform assets optimized for web, social, broadcast, and industrial print.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <section className="section" id="featured">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Featured project</span>
                <h2>
                  Golden Tulip The Grandmark,
                  <br />
                  one visual language.
                </h2>
              </div>
            </div>
            <article className="feature reveal">
              <div className="feature-visual">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/a0ce43256940487.6acb28f2d80bc.jpg"
                  alt="Golden Tulip The Grandmark Dhaka dining experience by Md. Munsur Ali"
                  loading="lazy"
                />
              </div>
              <div className="feature-copy">
                <span className="eyebrow">
                  Golden Tulip The Grandmark Dhaka
                </span>
                <h3>Creating a consistent visual language.</h3>
                <p className="subhead">
                  A premium hospitality experience, expressed across every guest touchpoint.
                </p>
                <dl className="feature-meta">
                  <dt>Role</dt>
                  <dd>Lead Graphic Designer · Motion Designer · Video Editor</dd>
                  <dt>Scope</dt>
                  <dd>
                    Brand Communication · Social Marketing · F&B Menus · Seasonal Campaigns · Print & Video
                  </dd>
                </dl>
                <p>
                  <strong style={{ color: 'var(--text)' }}>
                    The challenge:
                  </strong>
                  <br />
                  Establish visually coherent, luxurious brand communication across dining outlets, suite promotions,
                  corporate conferences, and festive campaigns while upholding international brand standards.
                </p>
                <p>
                  <strong style={{ color: 'var(--text)' }}>
                    The approach:
                  </strong>
                  <br />
                  Engineered an adaptable modular design system combining elegant typography, warm atmospheric photography,
                  minimalist layout frameworks, and responsive digital ads.
                </p>
                <div className="feature-steps">
                  <span>Social campaigns</span>
                  <span>Restaurant promotions</span>
                  <span>Seasonal campaigns</span>
                  <span>Digital ads</span>
                  <span>Menus & print</span>
                  <span>Motion & video</span>
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a className="btn btn-light" href="#contact">
                    Discuss a project <span className="arrow">↗</span>
                  </a>
                  <a
                    className="btn"
                    href="https://www.behance.net/gallery/256940487/A-Visual-Journey-of-Breakfast-Brunch-Lunch-Dinner"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Case Study on Behance ↗
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Showreel Section */}
        <section className="section" id="reel">
          <div className="wrap">
            <div className="reel reveal">
              <div className="reel-content">
                <span className="eyebrow">Selected work · Moving image</span>
                <h2>
                  10+ years.
                  <br />
                  <em>One creative journey.</em>
                </h2>
                <p>
                  Graphic design · Motion graphics · Video editing · Branding · Advertising
                </p>
                <button
                  className="play-button"
                  aria-label="Open showreel preview"
                  onClick={() => setShowreelOpen(true)}
                >
                  ▶
                </button>
                <p style={{ marginTop: '14px' }}>Click to watch showreel</p>
              </div>
            </div>
          </div>
        </section>

        {/* Toolkit & Beyond */}
        <section className="section">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Tools & Mastery</span>
                <h2>
                  The tools behind
                  <br />
                  the ideas.
                </h2>
              </div>
              <p>
                An industry-standard creative toolkit for producing pristine static and moving visuals.
              </p>
            </div>
            <div className="tool-grid reveal">
              <div className="tool-box">
                <h3>Adobe Creative Suite</h3>
                <div className="tool-list">
                  <span>Photoshop</span>
                  <span>Illustrator</span>
                  <span>After Effects</span>
                  <span>Premiere Pro</span>
                  <span>InDesign</span>
                  <span>Audition</span>
                </div>
              </div>
              <div className="tool-box">
                <h3>3D & Production Tools</h3>
                <div className="tool-list">
                  <span>3ds Max</span>
                  <span>QuarkXPress</span>
                  <span>AI Creative Tools</span>
                  <span>Prepress Plate Prep</span>
                  <span>Digital Marketing Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section" id="faq">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Frequently Asked Questions</span>
                <h2>
                  Clear answers to
                  <br />
                  common questions.
                </h2>
              </div>
              <p>Everything you need to know about starting a creative collaboration.</p>
            </div>
            <div style={{ maxWidth: '820px', margin: '0 auto' }}>
              {FAQ_ITEMS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="reveal"
                    style={{
                      borderBottom: '1px solid var(--line)',
                      padding: '22px 0',
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        textAlign: 'left',
                        fontSize: '18px',
                        fontWeight: 600,
                        color: isOpen ? 'var(--acid)' : 'var(--text)',
                        transition: 'color 0.2s',
                      }}
                    >
                      <span>{faq.question}</span>
                      <span style={{ fontSize: '24px', marginLeft: '16px' }}>
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <p
                        style={{
                          marginTop: '12px',
                          color: 'var(--muted)',
                          fontSize: '14px',
                          lineHeight: '1.7',
                        }}
                      >
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="contact" id="contact">
          <div className="wrap contact-grid">
            <div>
              <span className="eyebrow">Have a project in mind?</span>
              <h2>
                Let&apos;s create
                <br />
                something
                <br />
                <em>meaningful.</em>
              </h2>
              <p className="contact-intro">
                Looking for brand identity, motion design, video editing or creative direction?
                Let&apos;s discuss your next project.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '24px' }}>
                <a className="btn" href="mailto:contact@gfxmunsur.com">
                  Start a conversation <span className="arrow">↗</span>
                </a>
                <button
                  className="btn"
                  onClick={copyEmailToClipboard}
                  style={{
                    background: 'transparent',
                    borderColor: 'var(--bg)',
                    color: 'var(--bg)',
                  }}
                >
                  {copiedEmail ? '✓ Copied to clipboard!' : 'Copy Email 📋'}
                </button>
              </div>
            </div>
            <div className="contact-links">
              <div className="contact-row">
                <span>Name</span>
                <a href="#top">Md. Munsur Ali</a>
              </div>
              <div className="contact-row">
                <span>Location</span>
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="contact-row">
                <span>Email</span>
                <a href="mailto:contact@gfxmunsur.com">
                  contact@gfxmunsur.com ↗
                </a>
              </div>
              <div className="contact-row">
                <span>Behance</span>
                <a
                  href="https://www.behance.net/mdmunsurali20"
                  target="_blank"
                  rel="noreferrer"
                >
                  mdmunsurali20 ↗
                </a>
              </div>
              <div className="contact-row">
                <span>Domain</span>
                <a href="https://gfxmunsur.com">gfxmunsur.com ↗</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="wrap">
          <div className="footer-top">
            <div>
              <div className="footer-name">MD. MUNSUR ALI</div>
              <div className="footer-role">
                Senior Graphic Designer · Motion Graphics Artist · Video Editor · GFX Munsur
              </div>
            </div>
            <div className="socials">
              <a
                href="https://www.behance.net/mdmunsurali20"
                target="_blank"
                rel="noreferrer"
              >
                Behance ↗
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram ↗
              </a>
              <a href="https://vimeo.com/" target="_blank" rel="noreferrer">
                Vimeo ↗
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {currentYear} Md. Munsur Ali (gfxmunsur.com). All rights reserved.
            </span>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>

      {/* Showreel Modal */}
      <div
        className={`modal ${showreelOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) setShowreelOpen(false);
        }}
      >
        <div className="modal-card">
          <button
            className="modal-close"
            aria-label="Close showreel preview"
            onClick={() => setShowreelOpen(false)}
          >
            ×
          </button>
          <h3 id="modal-title">Selected Motion & Showreel</h3>
          <p>Md. Munsur Ali — 2D motion graphics, kinetic typography, and video editing reel.</p>
          {renderShowreelEmbed()}
        </div>
      </div>

      {/* Lightbox Modal */}
      <div
        className={`modal ${lightbox.open ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Project gallery"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setLightbox((prev) => ({ ...prev, open: false }));
          }
        }}
      >
        {lightbox.images.length > 1 && (
          <button
            className="lb-nav lb-prev"
            aria-label="Previous image"
            onClick={prevLightboxImage}
          >
            ‹
          </button>
        )}
          <figure className="lb-fig" style={{ position: 'relative' }}>
            <img
              key={lightbox.images[lightbox.index]}
              src={lightbox.images[lightbox.index]}
              alt={lightbox.title}
              decoding="async"
              style={{
                minHeight: '220px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '2px',
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1634942536790-2536a6a5d8c4?auto=format&fit=crop&w=1200&q=85';
              }}
            />
            <figcaption
              className="mono"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                marginTop: '16px',
              }}
            >
              <span>
                {lightbox.title} — {lightbox.index + 1} / {lightbox.images.length}
              </span>
              <div style={{ display: 'flex', gap: '10px' }}>
                {lightbox.behanceUrl && (
                  <a
                    href={lightbox.behanceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    style={{
                      padding: '8px 16px',
                      fontSize: '11px',
                      background: 'rgba(255,255,255,0.06)',
                    }}
                  >
                    View Case Study on Behance ↗
                  </a>
                )}
                <a
                  href="#contact"
                  onClick={() => setLightbox((prev) => ({ ...prev, open: false }))}
                  className="btn btn-light"
                  style={{ padding: '8px 16px', fontSize: '11px' }}
                >
                  Hire for this ↗
                </a>
              </div>
            </figcaption>
          </figure>
          {lightbox.images.length > 1 && (
            <button
              className="lb-nav lb-next"
              aria-label="Next image"
              onClick={nextLightboxImage}
            >
              ›
            </button>
          )}
          <button
            className="modal-close"
            aria-label="Close gallery"
            onClick={() => setLightbox((prev) => ({ ...prev, open: false }))}
          >
            ×
          </button>
      </div>
    </>
  );
}
