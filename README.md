# GFX Munsur — Next.js Portfolio Website

A modern, high-performance portfolio website built with **Next.js (App Router)**, **TypeScript**, and pure CSS for **Md. Munsur Ali** (GFX Munsur), configured for **gfxmunsur.com**.

---

## 🚀 Features

- **Framework**: Next.js 14 App Router + TypeScript
- **Styling**: Sleek dark luxury aesthetic with CSS custom properties
- **SEO Ready**: Dynamic OpenGraph, Twitter Cards, Canonical URL (`https://gfxmunsur.com`), Google Fonts preconnect, `robots.txt`, and `sitemap.xml`
- **Interactive Lightbox**: Fullscreen gallery modal for brand identity, digital campaigns, and print projects with keyboard navigation (Esc, Left/Right arrows)
- **Showreel Modal**: Built-in support for YouTube, Vimeo, or HTML5 MP4 video
- **Responsive**: Fully optimized for mobile, tablet, and desktop screens

---

## 🛠️ Local Development

To run the project locally on your computer:

```bash
# 1. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

To create an optimized production build:

```bash
npm run build
npm start
```

---

## 🌐 Deploy to Vercel (100% Free)

Vercel is the creator of Next.js and provides the best free hosting experience with zero-configuration deployments and free SSL certificates.

### Method 1: Deploy via GitHub (Recommended)

1. Create a new repository on your [GitHub](https://github.com) account (e.g., `gfxmunsur`).
2. Run these commands in terminal:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/gfxmunsur.git
   git branch -M main
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com) and log in with GitHub.
4. Click **"Add New..."** > **"Project"**.
5. Select your `gfxmunsur` repository and click **"Deploy"**.
6. Vercel will build and deploy your site in less than a minute!

### Method 2: Deploy using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Run deploy command
vercel
```

---

## 🔗 Connect Your Domain: `gfxmunsur.com`

After deploying on Vercel:

1. In your Vercel project dashboard, go to **Settings** > **Domains**.
2. Enter `gfxmunsur.com` and click **Add**.
3. Choose the recommended option (`gfxmunsur.com` redirects to `www.gfxmunsur.com` or vice versa).
4. Vercel will show you the exact DNS records to add at your domain registrar:
   - **A Record**:
     - Name: `@`
     - Value: `76.76.21.21`
   - **CNAME Record**:
     - Name: `www`
     - Value: `cname.vercel-dns.com`
5. Once added, Vercel verifies the domain within a few minutes and generates a free SSL/HTTPS certificate automatically.

---

## 📁 How to Update Content & Images

- **Page content**: Edit `app/page.tsx` (Services, About, Experience, Contact links).
- **Showreel Video**: In `app/page.tsx`, search `SHOWREEL_URL` and paste your YouTube or Vimeo link:
  ```typescript
  const SHOWREEL_URL: string = 'https://www.youtube.com/watch?v=YOUR_ID';
  ```
- **Portfolio Images**: Place your project images in `public/images/`:
  - `public/images/identity-1.jpg` ... `identity-4.jpg`
  - `public/images/campaign-1.jpg` ... `campaign-4.jpg`
  - `public/images/print-1.jpg` ... `print-4.jpg`
