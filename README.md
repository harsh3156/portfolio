# ⚡ Harsh Prajapati — Portfolio Website

A **cinematic, futuristic, premium** personal portfolio built with React + Vite, Three.js, Framer Motion, and Tailwind CSS.

---

## 🗂 Folder Structure

```
client/
├── public/
│   └── resume.pdf          ← Place your resume PDF here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       ← Animated sticky navbar with scroll-spy
│   │   ├── Hero.jsx         ← 3D sphere, typing animation, stats counter
│   │   ├── About.jsx        ← Profile, strengths, language bars
│   │   ├── Skills.jsx       ← 3D orbit + animated progress bars
│   │   ├── Experience.jsx   ← Timeline-style experience cards
│   │   ├── Projects.jsx     ← Hover-animated project cards
│   │   ├── Education.jsx    ← Education + cert cards
│   │   ├── Contact.jsx      ← Contact info + animated form
│   │   ├── Footer.jsx       ← Footer with social links
│   │   ├── Loader.jsx       ← Cinematic loading screen
│   │   ├── Cursor.jsx       ← Custom cursor with ring follow
│   │   └── MouseGradient.jsx← Mouse-follow ambient glow
│   ├── data/
│   │   └── portfolioData.js ← All resume content (edit here)
│   ├── hooks/
│   │   └── useCursor.js     ← Cursor movement hook
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css            ← Global styles, CSS vars, animations
├── index.html               ← SEO meta tags, Google Fonts
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 Installation & Dev Setup

```bash
# 1. Navigate into the project
cd client

# 2. Install all dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:5173** in your browser.

---

## 📦 NPM Packages Used

| Package | Purpose |
|---|---|
| `react` + `react-dom` | UI framework |
| `framer-motion` | Animations, transitions, spring physics |
| `@react-three/fiber` | React renderer for Three.js |
| `@react-three/drei` | Three.js helpers (Float, Stars, Text, etc.) |
| `three` | 3D graphics engine |
| `react-type-animation` | Typing effect in hero |
| `react-intersection-observer` | Scroll-triggered animations |
| `react-countup` | Animated number counters |
| `react-icons` | Icon library (Fi, Si, Md sets) |
| `react-scroll` | Smooth scroll navigation |
| `tailwindcss` | Utility CSS framework |
| `vite` | Ultra-fast build tool |

---

## 🔧 Customization

All portfolio content lives in one file: **`src/data/portfolioData.js`**

Edit these exports to update your portfolio:
- `personalInfo` — name, email, socials, summary
- `skills` — skill name, level (0–100), category
- `experience` — roles, companies, highlights
- `projects` — titles, tech, descriptions
- `education` — degrees, institutions
- `stats` — animated counter numbers

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# From client/ directory
vercel

# Follow prompts — framework auto-detected as Vite
# Build command: npm run build
# Output directory: dist
```

### Netlify
```bash
# Build the project
npm run build

# Drag-and-drop the /dist folder at netlify.com/drop
# OR use Netlify CLI:
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist"

npm install --save-dev gh-pages
npm run deploy
```

---

## 🎨 Design System

### Color Palette
| Token | Value | Usage |
|---|---|---|
| `--void` | `#030712` | Page background |
| `--surface` | `#0d1117` | Section alternates |
| `--panel` | `#161b22` | Cards, inputs |
| `--cyan` | `#00f5ff` | Primary accent, glows |
| `--violet` | `#8b5cf6` | Secondary accent |
| `--gold` | `#f59e0b` | Tertiary highlight |

### Typography
- **Display/Headers**: `Syne` — bold, geometric, futuristic
- **Body/UI**: `DM Sans` — clean, readable, modern
- **Code/Mono**: `JetBrains Mono` — technical labels, tags

---

## ✨ Features Checklist

- [x] Cinematic loading screen with progress bar
- [x] Custom cursor dot + ring follower
- [x] Mouse-follow ambient gradient
- [x] Sticky navbar with scroll-spy active states
- [x] Animated hero with Three.js distort sphere + stars
- [x] Typing animation (multiple roles)
- [x] Animated stat counters
- [x] Glassmorphism cards throughout
- [x] 3D orbiting tech stack (Three.js)
- [x] Animated skill progress bars
- [x] Timeline experience section
- [x] Project cards with spotlight hover
- [x] Animated contact form with submit feedback
- [x] Smooth scroll navigation
- [x] Mobile responsive design
- [x] SEO meta tags in index.html
- [x] Dark luxury theme with cyan/violet/gold accents
- [x] Custom scrollbar
- [x] Scroll reveal animations on all sections

---

## 📄 Adding Your Resume PDF

Place your resume at: `client/public/resume.pdf`

The "Resume ↓" button in the navbar will then download it automatically.

---

## 🛠 Best Practices Applied

1. **Component separation** — each section is an isolated component
2. **Data-driven** — all content from `portfolioData.js`, easy to update
3. **Performance** — Suspense fallbacks for 3D canvas, lazy-friendly
4. **Accessibility** — semantic HTML, `aria` labels on links
5. **Responsive** — mobile-first Tailwind breakpoints
6. **Animation discipline** — `triggerOnce: true` on all scroll observers
7. **CSS variables** — consistent theming via `:root` custom properties
