'use client';

import React, { useState, useEffect, useCallback } from 'react';

// Work items configuration with high-res design galleries
const WORK_ITEMS = [
  {
    id: '01',
    category: 'HOSPITALITY & F&B',
    period: '2025 — 26',
    tags: 'Brand Communication · Campaign Design · Dining Experiences',
    title: 'Golden Tulip\nThe Grandmark Dhaka',
    desc: 'Comprehensive visual communication for 4-star hospitality, luxury suites, fine dining, and event promotions.',
    linkText: 'Explore project gallery',
    className: 'wide',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1300&q=85',
    isGallery: true,
    galleryTitle: 'Golden Tulip The Grandmark Dhaka',
    galleryImages: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85',
    ],
  },
  {
    id: '02',
    category: 'MOTION & VIDEO',
    period: 'SHOWREEL',
    tags: 'Animation · Video Editing · 2D Typography · Storytelling',
    title: 'Motion with\nmeaning.',
    desc: 'From storyboards to final sound & color grade — dynamic video edits crafted to engage audiences.',
    linkText: 'Watch showreel',
    className: 'narrow',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=85',
    isGallery: false,
    isShowreel: true,
  },
  {
    id: '03',
    category: 'BRAND IDENTITY',
    period: 'IDENTITY',
    tags: 'Visual Strategy · Logo Systems · Brand Guidelines',
    title: 'Brands built\nto be remembered.',
    desc: 'Cohesive visual systems and logo guidelines designed to stand out across print and digital media.',
    linkText: 'View identity gallery',
    className: 'narrow',
    image: '/images/identity-1.jpg',
    isGallery: true,
    galleryTitle: 'Brand Identity Systems',
    galleryImages: [
      '/images/identity-1.jpg',
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1634942536790-2536a6a5d8c4?auto=format&fit=crop&w=1400&q=85',
    ],
  },
  {
    id: '04',
    category: 'DIGITAL CAMPAIGNS',
    period: 'SOCIAL · PERFORMANCE',
    tags: 'Social Media · Paid Advertising · Content Creative',
    title: 'Campaigns that\nconnect.',
    desc: 'High-converting social graphics, promotional carousels, and seasonal campaign rollouts.',
    linkText: 'Explore campaigns',
    className: 'wide',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1300&q=85',
    isGallery: true,
    galleryTitle: 'Digital Campaigns & Social Creatives',
    galleryImages: [
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85',
    ],
  },
  {
    id: '05',
    category: 'PRINT & PACKAGING',
    period: 'PRODUCTION',
    tags: 'Prepress · Packaging · Editorial · Large Format',
    title: 'Made to make\nan impression.',
    desc: 'Precision print communication backed by industrial production and prepress manufacturing experience.',
    linkText: 'View print projects',
    className: '',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1200&q=85',
    isGallery: true,
    galleryTitle: 'Print & Packaging Production',
    galleryImages: [
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1507842229451-79b1be886a27?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1400&q=85',
    ],
  },
  {
    id: '06',
    category: 'BEHANCE PORTFOLIO',
    period: 'CASE STUDIES',
    tags: 'Curated Presentations · Brand Decks · Design Explorations',
    title: 'Curated Works\non Behance.',
    desc: 'Browse in-depth project case studies, client presentations, and creative explorations on my official Behance profile.',
    linkText: 'Explore on Behance',
    linkHref: 'https://www.behance.net/mdmunsurali20',
    className: '',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85',
    isGallery: false,
    isExternal: true,
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

// Showreel video URL (plays in modal)
const SHOWREEL_URL: string = 'https://www.youtube.com/watch?v=34Na4j8AVgA';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [lightbox, setLightbox] = useState<{
    open: boolean;
    title: string;
    images: string[];
    index: number;
  }>({
    open: false,
    title: '',
    images: [],
    index: 0,
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
      { threshold: 0.12 }
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

  const openLightbox = (title: string, images: string[]) => {
    if (!images || images.length === 0) return;
    setLightbox({
      open: true,
      title,
      images,
      index: 0,
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
                <span className="status-dot"></span> Available for creative projects · Dhaka, Bangladesh
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
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1300&q=85"
                alt="Creative portfolio visual, Md. Munsur Ali"
              />
              <span className="visual-index">CREATIVE PORTFOLIO · 2026</span>
              <div className="visual-note">
                <div>
                  <strong>Designing with purpose.</strong>
                  <br />
                  <span>Identity · Motion · Experience</span>
                </div>
                <span>01 / 06</span>
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
                <span className="eyebrow">Selected work · 01—06</span>
                <h2>
                  Ideas made
                  <br />
                  visible.
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
                <p>
                  A curated selection of brand identity, digital marketing, motion graphics and print production work.
                </p>
                <a
                  href="https://www.behance.net/mdmunsurali20"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light"
                >
                  Explore all works on Behance <span className="arrow">↗</span>
                </a>
              </div>
            </div>

            <div className="work-grid">
              {WORK_ITEMS.map((item) => {
                const handleClick = (e: React.MouseEvent) => {
                  if (item.isExternal && item.linkHref) {
                    window.open(item.linkHref, '_blank', 'noreferrer');
                    return;
                  }
                  if (item.isShowreel) {
                    e.preventDefault();
                    setShowreelOpen(true);
                  } else if (item.isGallery && item.galleryImages) {
                    e.preventDefault();
                    openLightbox(item.galleryTitle || '', item.galleryImages);
                  }
                };

                return (
                  <div
                    key={item.id}
                    className={`work-card ${item.className} reveal`}
                    onClick={handleClick}
                  >
                    <div className="work-image">
                      <img
                        src={item.image}
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
                        {item.linkText} <span>↗</span>
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
                  A hospitality brand,
                  <br />
                  one visual language.
                </h2>
              </div>
            </div>
            <article className="feature reveal">
              <div className="feature-visual">
                <img
                  src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1300&q=85"
                  alt="Golden Tulip The Grandmark Dhaka exterior"
                  loading="lazy"
                />
              </div>
              <div className="feature-copy">
                <span className="eyebrow">
                  Golden Tulip The Grandmark Dhaka
                </span>
                <h3>Creating a consistent visual language.</h3>
                <p className="subhead">
                  A premium hospitality experience, expressed across every touchpoint.
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
                    href="https://www.behance.net/mdmunsurali20"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Behance ↗
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
        <figure className="lb-fig">
          <img
            src={lightbox.images[lightbox.index]}
            alt={lightbox.title}
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
              <a
                href="https://www.behance.net/mdmunsurali20"
                target="_blank"
                rel="noreferrer"
                className="btn"
                style={{
                  padding: '8px 16px',
                  fontSize: '11px',
                  background: 'rgba(255,255,255,0.06)',
                }}
              >
                View on Behance ↗
              </a>
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
