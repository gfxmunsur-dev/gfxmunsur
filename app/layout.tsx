import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://gfxmunsur.com'),
  title: 'GFX Munsur — Md. Munsur Ali · Designer & Visual Storyteller',
  description:
    'Md. Munsur Ali (GFX Munsur) — multidisciplinary graphic designer, motion graphics designer and video editor based in Dhaka, Bangladesh.',
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%2311120f'/%3E%3Ctext x='32' y='43' font-size='28' font-weight='800' text-anchor='middle' fill='%23d6ff65' font-family='Arial'%3EGM%3C/text%3E%3C/svg%3E",
  },
  alternates: {
    canonical: 'https://gfxmunsur.com',
  },
  openGraph: {
    title: 'GFX Munsur — Md. Munsur Ali',
    description:
      'Graphic design, motion graphics and video editing from Dhaka, Bangladesh.',
    url: 'https://gfxmunsur.com',
    siteName: 'GFX Munsur',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GFX Munsur — Md. Munsur Ali',
    description:
      'Graphic design, motion graphics and video editing from Dhaka, Bangladesh.',
  },
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
      </head>
      <body>{children}</body>
    </html>
  );
}
