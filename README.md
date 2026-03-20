# valen.icu — Portfolio of Valentino Loverado Rinumpoko

A modern, minimalist monochrome portfolio built with **React**, **Framer Motion**, and **Tailwind CSS**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── data/
│   └── index.js          ← ✏️  All site content lives here — edit this file!
├── hooks/
│   ├── useMagneticEffect.js
│   └── useCounterAnimation.js
├── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
└── sections/
    ├── Hero.jsx
    ├── About.jsx
    ├── Skills.jsx
    ├── Certifications.jsx
    ├── Projects.jsx
    ├── Blog.jsx
    └── Contact.jsx
```

---

## ✏️ How to Customize

All content is centralized in **`src/data/index.js`**:

### Profile & Socials
```js
export const profile = {
  name: 'Valentino Loverado Rinumpoko',
  email: 'lrv94451@gmail.com',
  socials: {
    github: 'https://github.com/YOUR_USERNAME',
    linkedin: 'https://linkedin.com/in/YOUR_USERNAME',
    instagram: 'https://instagram.com/YOUR_USERNAME',
    twitter: 'https://twitter.com/YOUR_USERNAME',
  },
  // ...
}
```

### Certifications
Set `placeholder: false` and fill in the real data when you earn a cert:
```js
{ id: 1, name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', year: '2024', link: 'https://...', placeholder: false },
```

### Projects
Update the name, description, tech stack, and links for each project.

### Blog Posts
Replace the dummy posts with real articles. Each post has: `title`, `excerpt`, `date`, `readTime`, `tags`, and `link`.

---

## 🎨 Design Tokens

Colors are defined as CSS variables in `src/index.css` and mirrored in `tailwind.config.js`:

| Token             | Value      | Usage                    |
|-------------------|------------|--------------------------|
| `--bg`            | `#F2F0EB`  | Page background          |
| `--surface`       | `#E8E6E0`  | Alternate section bg     |
| `--border`        | `rgba(17,17,17,0.12)` | All borders     |
| `--ink`           | `#111111`  | Primary text             |
| `--ink-secondary` | `#4A4845`  | Secondary text           |
| `--ink-muted`     | `#8A8783`  | Muted/placeholder text   |

---

## 📦 Dependencies

| Package          | Purpose                        |
|------------------|--------------------------------|
| `framer-motion`  | Animations & transitions       |
| `tailwindcss`    | Utility-first CSS              |
| `lucide-react`   | Clean icon set                 |
| `vite`           | Lightning-fast build tool      |

**Fonts:** Syne (display/headings) + Barlow (body) via Google Fonts

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the `dist/` folder to Netlify
```

### Manual (VPS / cPanel)
```bash
npm run build
# Upload contents of `dist/` to your public_html or web root
```

---

## 📝 License
Personal use — built for **valen.icu**
