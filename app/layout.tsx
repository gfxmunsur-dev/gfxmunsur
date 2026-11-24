import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://gfxmunsur.com'),
  title: 'GFX Munsur — Md. Munsur Ali · Senior Designer & Visual Storyteller',
  description:
    'Md. Munsur Ali (GFX Munsur) — 10+ years experienced multidisciplinary graphic designer, motion graphics artist, and video editor based in Dhaka, Bangladesh.',
  keywords: [
    'GFX Munsur',
    'Md Munsur Ali',
    'Graphic Designer Dhaka',
    'Motion Graphics Bangladesh',
    'Video Editor Bangladesh',
    'Golden Tulip Dhaka Designer',
    'Brand Identity Design',
    'Digital Campaigns',
    'Print Prepress Expert',
    'Hospitality Branding',
  ],
  authors: [{ name: 'Md. Munsur Ali', url: 'https://gfxmunsur.com' }],
  creator: 'Md. Munsur Ali',
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%2311120f'/%3E%3Ctext x='32' y='43' font-size='28' font-weight='800' text-anchor='middle' fill='%23d6ff65' font-family='Arial'%3EGM%3C/text%3E%3C/svg%3E",
  },
  alternates: {
    canonical: 'https://gfxmunsur.com',
  },
  openGraph: {
    title: 'GFX Munsur — Md. Munsur Ali · Designer & Visual Storyteller',
    description:
      'Graphic design, motion graphics and video editing portfolio of Md. Munsur Ali from Dhaka, Bangladesh.',
    url: 'https://gfxmunsur.com',
    siteName: 'GFX Munsur',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GFX Munsur — Md. Munsur Ali · Designer & Visual Storyteller',
    description:
      'Graphic design, motion graphics and video editing portfolio of Md. Munsur Ali from Dhaka, Bangladesh.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Md. Munsur Ali',
  alternateName: ['GFX Munsur', 'Munsur Ali'],
  url: 'https://gfxmunsur.com',
  jobTitle: 'Senior Graphic Designer & Motion Graphics Artist',
  worksFor: {
    '@type': 'Organization',
    name: 'Golden Tulip The Grandmark Dhaka',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dhaka',
    addressCountry: 'Bangladesh',
  },
  sameAs: [
    'https://www.behance.net/mdmunsurali20',
    'https://www.linkedin.com/',
    'https://www.instagram.com/',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#11120f" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
