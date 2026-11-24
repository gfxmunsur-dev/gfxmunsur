# GFX Munsur (gfxmunsur.com) — Website Setup & Edit Guide

আপনার ওয়েবসাইটটি সম্পূর্ণ তৈরি এবং কনফিগার করা হয়েছে আপনার ডোমেইন **gfxmunsur.com**-এর জন্য।

## ফোল্ডার স্ট্রাকচার
- `index.html` — আপনার মূল ওয়েবসাইট (ব্রাউজারে ডাবল ক্লিক করলেই প্রিভিউ দেখতে পারবেন)।
- `images/` — আপনার সব পোর্টফোলিও ডিজাইন, প্রজেক্টের ছবি এবং ভিডিও এখানে থাকবে।
- `CNAME` — আপনার ডোমেইন `gfxmunsur.com` বাইন্ডিং ফাইল।
- `robots.txt` ও `sitemap.xml` — গুগল সার্চ ও SEO-এর জন্য।

---

## ১. gfxmunsur.com ডোমেইনে ফ্রি লাইভ করার উপায় (Hosting)

সবচেয়ে সহজ এবং ফ্রি পদ্ধতি হলো **Netlify** বা **Cloudflare Pages** অথবা **GitHub Pages**:

### অপশন ক: Netlify Drop (সবচেয়ে সহজ — ১ মিনিট)
1. ব্রাউজারে যান: [app.netlify.com/drop](https://app.netlify.com/drop) (একটি ফ্রি একাউন্ট খুলে নিন)।
2. সম্পূর্ণ `E:\Munsur_Ali` ফোল্ডারটি ড্র্যাগ অ্যান্ড ড্রপ (Drag & Drop) করে ছেড়ে দিন।
3. আপনার ওয়েবসাইট সাথে সাথে লাইভ হয়ে যাবে।
4. এরপর Netlify-তে **Domain management** > **Add custom domain**-এ গিয়ে `gfxmunsur.com` লিখে সেভ করুন।
5. আপনার ডোমেইন প্রোভাইডারে (যেখান থেকে gfxmunsur.com কিনেছেন: Namecheap / Cloudflare / GoDaddy ইত্যাদি) গিয়ে DNS সেটিংস আপডেট করুন:
   - **A Record**: Netlify-র দেওয়া IP এড্রেস
   - অথবা **CNAME Record**: `www` -> আপনার netlify সাবডোমেইন

### অপশন খ: cPanel হোস্টিং থাকলে
যদি আপনার অলরেডি কোনো সিপ্যানেল বা হোস্টিং প্যাকেজ থাকে:
1. cPanel-এ লগইন করুন।
2. **File Manager** > **public_html**-এ যান।
3. `E:\Munsur_Ali` ফোল্ডারের ভেতরের সব ফাইল ও `images` ফোল্ডার আপলোড করে দিন।

---

## ২. নিজের কাজের ছবি (Works & Gallery) যোগ করার নিয়ম

1. আপনার ডিজাইনগুলো JPG ফরম্যাটে এক্সপোর্ট করুন (১৬০০ পিক্সেল চওড়া, ৫০০ KB-এর নিচে রাখলে দ্রুত লোড হবে)।
2. ছবিগুলো `images/` ফোল্ডারে এই নামে সেভ করুন:
   - `identity-1.jpg`, `identity-2.jpg`, `identity-3.jpg`, `identity-4.jpg` (ব্র্যান্ড আইডেন্টিটি)
   - `campaign-1.jpg`, `campaign-2.jpg`, `campaign-3.jpg`, `campaign-4.jpg` (ডিজিটাল ক্যাম্পেইন)
   - `print-1.jpg`, `print-2.jpg`, `print-3.jpg`, `print-4.jpg` (প্রিন্ট ও অ্যাডভার্টাইজিং)
3. ইতিমধ্যে আপনার আগের `identity-1.jpg` ফাইলটি `images/` ফোল্ডারে যুক্ত করে দেওয়া হয়েছে।

---

## ৩. শো-রিল (Showreel Video) যোগ করা
`index.html` ফাইলটি VS Code বা Notepad দিয়ে খুলুন:
- `SHOWREEL_URL` খুঁজুন (লাইন ১৫৭-এর কাছাকাছি)।
- কোটেশনের ভেতরে আপনার YouTube বা Vimeo লিংক বসিয়ে দিন:
  `const SHOWREEL_URL='https://www.youtube.com/watch?v=YOUR_VIDEO_ID';`

---

## ৪. ফোন নাম্বার ও সোশ্যাল মিডিয়া লিংক পরিবর্তন
`index.html`-এ এই জিনিসগুলো সহজে পরিবর্তন করতে পারবেন:
- `contact@gfxmunsur.com` (যদি আপাতত জিমেইল ব্যবহার করতে চান, তবে আপনার জিমেইল বসিয়ে দিতে পারেন)।
- `+880XXXXXXXXXX` — আপনার আসল ফোন নাম্বার।
- ফুটারের লিংক:
  - Behance: `https://www.behance.net/yourprofile`
  - LinkedIn: `https://www.linkedin.com/in/yourprofile`
  - Instagram: `https://www.instagram.com/yourprofile`
