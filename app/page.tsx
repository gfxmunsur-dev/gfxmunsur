'use client';

import React, { useState, useEffect, useCallback } from 'react';

// Work items configuration
const WORK_ITEMS = [
  {
    id: '01',
    category: 'HOSPITALITY',
    period: '2025 — 26',
    tags: 'Brand communication · Campaign design · F&B',
    title: 'Golden Tulip\nThe Grandmark Dhaka',
    desc: 'Premium visual communication for hospitality, dining and guest experiences.',
    linkText: 'Explore featured project',
    linkHref: '#featured',
    className: 'wide',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1300&q=85',
    isGallery: false,
  },
  {
    id: '02',
    category: 'MOTION & VIDEO',
    period: 'SHOWREEL',
    tags: 'Animation · Editing · Storytelling',
    title: 'Motion with\nmeaning.',
    desc: 'From storyboards to final delivery — video built to move people.',
    linkText: 'Watch showreel',
    linkHref: '#reel',
    className: 'narrow',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=85',
    isGallery: false,
    isShowreel: true,
  },
  {
    id: '03',
    category: 'BRAND IDENTITY',
    period: 'IDENTITY',
    tags: 'Strategy · Logo · Visual systems',
    title: 'Brands built\nto be remembered.',
    desc: 'Distinctive identities made to work across every touchpoint.',
    linkText: 'View identity projects',
    className: 'narrow',
    image: '/images/identity-1.jpg',
    isGallery: true,
    galleryTitle: 'Brand identity',
    galleryImages: [
      '/images/identity-1.jpg',
      '/images/identity-2.jpg',
      '/images/identity-3.jpg',
      '/images/identity-4.jpg',
    ],
  },
  {
    id: '04',
    category: 'DIGITAL CAMPAIGNS',
    period: 'SOCIAL · DIGITAL',
    tags: 'Social media · Advertising · Content',
    title: 'Campaigns that\nconnect.',
    desc: 'Consistent creative for social platforms and digital advertising.',
    linkText: 'Explore campaigns',
    className: 'wide',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1300&q=85',
    isGallery: true,
    galleryTitle: 'Digital campaigns',
    galleryImages: [
      '/images/campaign-1.jpg',
      '/images/campaign-2.jpg',
      '/images/campaign-3.jpg',
      '/images/campaign-4.jpg',
    ],
  },
  {
    id: '05',
    category: 'PRINT & ADVERTISING',
    period: 'PRINT',
    tags: 'Editorial · Outdoor · Packaging',
    title: 'Made to make\nan impression.',
    desc: 'Thoughtful print communication backed by production knowledge.',
    linkText: 'View print projects',
    className: '',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1200&q=85',
    isGallery: true,
    galleryTitle: 'Print & advertising',
    galleryImages: [
      '/images/print-1.jpg',
      '/images/print-2.jpg',
      '/images/print-3.jpg',
      '/images/print-4.jpg',
    ],
  },
];

// Showreel video URL: Paste your YouTube or Vimeo link, or an mp4 video URL
const SHOWREEL_URL: string = '';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showreelOpen, setShowreelOpen] = useState(false);
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
                <span className="status-dot"></span> Independent creative ·
                Dhaka, Bangladesh
              </div>
              <h1>
                MD.
                <br />
                MUNSUR
                <br />
                <em>ALI.</em>
              </h1>
              <p className="hero-role">
                Graphic Designer · Motion Graphics Designer · Video Editor
              </p>
              <p className="hero-sub">
                10+ YEARS OF EXPERIENCE CREATING VISUAL STORIES, BRAND
                EXPERIENCES & DIGITAL CAMPAIGNS
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
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Selected work · 01—05</span>
                <h2>
                  Ideas made
                  <br />
                  visible.
                </h2>
              </div>
              <p>
                A selection of brand, campaign and motion work across
                hospitality, digital, print and video.
              </p>
            </div>
            <div className="work-grid">
              {WORK_ITEMS.map((item) => {
                const handleClick = (e: React.MouseEvent) => {
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
                          // Fallback to placeholder if local file is missing
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
                <strong>10+ years of experience</strong> in Graphic Design,
                Motion Graphics and Video Editing.
              </p>
              <p>
                My work combines{' '}
                <strong>
                  visual storytelling, branding, digital communication and
                  creative problem-solving
                </strong>{' '}
                to help organizations communicate their ideas with clarity and
                impact.
              </p>
              <p>
                Over the years, I have worked across hospitality, corporate
                communication, advertising, social media, food & beverage, print
                and digital media — developing creative solutions from concept
                to final execution.
              </p>
              <p>
                I believe great design is not only about making something look
                beautiful. It is about creating a visual experience that
                communicates the right message to the right audience.
              </p>
              <div className="about-bottom">
                <div>
                  <span>Based in</span>
                  <b>Dhaka, Bangladesh</b>
                </div>
                <div>
                  <span>Focus</span>
                  <b>Design · Motion · Film</b>
                </div>
                <div>
                  <span>Approach</span>
                  <b>Thoughtful by design</b>
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
                <h3>Graphic design</h3>
                <p>
                  Branding · Campaigns · Social media · Print · Editorial ·
                  Advertising
                </p>
              </article>
              <article className="service reveal">
                <span className="num">02 / 06</span>
                <h3>Motion graphics</h3>
                <p>
                  2D animation · Typography · Promotional graphics · Social reels ·
                  Visual effects
                </p>
              </article>
              <article className="service reveal">
                <span className="num">03 / 06</span>
                <h3>Video editing</h3>
                <p>
                  Promotional · Social content · Corporate · Reels · Events ·
                  Advertising
                </p>
              </article>
              <article className="service reveal">
                <span className="num">04 / 06</span>
                <h3>Branding</h3>
                <p>
                  Logo design · Visual identity · Brand systems · Campaign
                  identity · Guidelines
                </p>
              </article>
              <article className="service reveal">
                <span className="num">05 / 06</span>
                <h3>Digital design</h3>
                <p>
                  Social media · Digital campaigns · Web graphics · Email · Online
                  advertising
                </p>
              </article>
              <article className="service reveal">
                <span className="num">06 / 06</span>
                <h3>Art direction</h3>
                <p>
                  Creative concepts · Visual direction · Campaign development ·
                  Content direction
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
                A career spanning creative communication, marketing and
                commercial print production.
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
                    Leading and executing creative communication across
                    hospitality, branding, digital marketing, food & beverage
                    and promotional campaigns.
                  </p>
                </div>
                <div className="job-tags">
                  Campaigns
                  <br />
                  Hospitality
                  <br />
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
                    Managed creative communication, digital content and
                    promotional materials across multiple marketing activities.
                  </p>
                </div>
                <div className="job-tags">
                  Creative
                  <br />
                  Marketing
                  <br />
                  Team coordination
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
                    Developed practical expertise in commercial printing,
                    prepress, production and packaging design.
                  </p>
                </div>
                <div className="job-tags">
                  Prepress
                  <br />
                  Packaging
                  <br />
                  Print production
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
                A considered process helps every visual idea stay connected to
                its purpose.
              </p>
            </div>
            <div className="process-grid">
              <article className="step reveal">
                <span className="step-num">01 — DISCOVER</span>
                <h3>Understand</h3>
                <p>
                  The brand, audience, objective and communication challenge.
                </p>
              </article>
              <article className="step reveal">
                <span className="step-num">02 — CONCEPT</span>
                <h3>Find the idea</h3>
                <p>
                  Creative direction, visual language and the campaign thought.
                </p>
              </article>
              <article className="step reveal">
                <span className="step-num">03 — DESIGN</span>
                <h3>Make it clear</h3>
                <p>
                  Translate the concept into compelling visual communication.
                </p>
              </article>
              <article className="step reveal">
                <span className="step-num">04 — ANIMATE</span>
                <h3>Bring it to life</h3>
                <p>
                  Add movement, storytelling and visual rhythm where needed.
                </p>
              </article>
              <article className="step reveal">
                <span className="step-num">05 — REFINE</span>
                <h3>Get the details right</h3>
                <p>
                  Polish typography, composition, color, imagery and finish.
                </p>
              </article>
              <article className="step reveal">
                <span className="step-num">06 — DELIVER</span>
                <h3>Ready for the world</h3>
                <p>
                  Prepare assets for digital, social, print, video and
                  advertising.
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
                  alt="Hotel exterior used as illustrative project image"
                  loading="lazy"
                />
              </div>
              <div className="feature-copy">
                <span className="eyebrow">
                  Golden Tulip The Grandmark Dhaka
                </span>
                <h3>Creating a consistent visual language.</h3>
                <p className="subhead">
                  A premium hospitality experience, expressed across every
                  touchpoint.
                </p>
                <dl className="feature-meta">
                  <dt>Role</dt>
                  <dd>Graphic Designer · Motion Designer · Video Editor</dd>
                  <dt>Scope</dt>
                  <dd>
                    Brand communication · Social · F&B · Campaigns · Digital ·
                    Print · Video
                  </dd>
                </dl>
                <p>
                  <strong style={{ color: 'var(--text)' }}>
                    The challenge
                  </strong>
                  <br />
                  Create visually consistent communication across multiple
                  hospitality touchpoints while maintaining a premium and
                  recognizable brand presence.
                </p>
                <p>
                  <strong style={{ color: 'var(--text)' }}>
                    The approach
                  </strong>
                  <br />
                  Build a flexible visual system combining premium imagery,
                  refined typography, contemporary layouts and campaign-specific
                  creative concepts.
                </p>
                <div className="feature-steps">
                  <span>Social campaigns</span>
                  <span>Restaurant promotions</span>
                  <span>Seasonal campaigns</span>
                  <span>Digital ads</span>
                  <span>Menus & print</span>
                  <span>Motion & video</span>
                </div>
                <a className="btn" href="#contact">
                  Discuss a similar project <span className="arrow">↗</span>
                </a>
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
                  Graphic design · Motion graphics · Video editing · Branding ·
                  Advertising
                </p>
                <button
                  className="play-button"
                  aria-label="Open showreel preview"
                  onClick={() => setShowreelOpen(true)}
                >
                  ▶
                </button>
                <p style={{ marginTop: '14px' }}>Watch the showreel</p>
              </div>
            </div>
          </div>
        </section>

        {/* Toolkit & Beyond */}
        <section className="section">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Tools</span>
                <h2>
                  The tools behind
                  <br />
                  the ideas.
                </h2>
              </div>
              <p>
                A flexible toolkit for designing, animating and delivering work
                across platforms.
              </p>
            </div>
            <div className="tool-grid reveal">
              <div className="tool-box">
                <h3>Adobe Creative Cloud</h3>
                <div className="tool-list">
                  <span>Photoshop</span>
                  <span>Illustrator</span>
                  <span>After Effects</span>
                  <span>Premiere Pro</span>
                  <span>InDesign</span>
                </div>
              </div>
              <div className="tool-box">
                <h3>3D & other tools</h3>
                <div className="tool-list">
                  <span>3ds Max</span>
                  <span>QuarkXPress</span>
                  <span>AI creative tools</span>
                  <span>Digital marketing platforms</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap beyond reveal">
            <div>
              <span className="eyebrow">Beyond design</span>
              <h2>
                Curious by
                <br />
                nature.
              </h2>
            </div>
            <div>
              <p>
                I am interested in the intersection of{' '}
                <strong style={{ color: 'var(--text)' }}>
                  design, storytelling, technology and human experience.
                </strong>
              </p>
              <p>
                Outside of day-to-day design work, I explore new visual styles,
                motion techniques, creative technologies and emerging
                AI-assisted workflows to continuously expand my creative
                toolkit.
              </p>
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
                Have a project, campaign or creative challenge? Let&apos;s talk
                and make something that matters.
              </p>
              <a className="btn" href="mailto:contact@gfxmunsur.com">
                Start a conversation <span className="arrow">↗</span>
              </a>
            </div>
            <div className="contact-links">
              <div className="contact-row">
                <span>Name</span>
                <a href="#top">Md. Munsur Ali</a>
              </div>
              <div className="contact-row">
                <span>Based in</span>
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="contact-row">
                <span>Email</span>
                <a href="mailto:contact@gfxmunsur.com">
                  contact@gfxmunsur.com ↗
                </a>
              </div>
              <div className="contact-row">
                <span>Phone</span>
                <a href="tel:+880XXXXXXXXXX">+880 XXX XXX XXXX ↗</a>
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
                Graphic Designer · Motion Graphics Designer · Video Editor · GFX
                Munsur
              </div>
            </div>
            <div className="socials">
              <a
                href="https://www.behance.net/"
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
              © {currentYear} Md. Munsur Ali (gfxmunsur.com). All rights
              reserved.
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
          <h3 id="modal-title">
            {SHOWREEL_URL ? 'Showreel' : 'Showreel coming soon.'}
          </h3>
          <p>
            {SHOWREEL_URL
              ? 'Md. Munsur Ali — selected motion and video work.'
              : 'The showreel will appear here shortly.'}
          </p>
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
          <figcaption className="mono">
            {lightbox.title} — {lightbox.index + 1} / {lightbox.images.length}
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
