# Raju Gupta — Premium Portfolio Website

A modern, fully responsive, animation-rich personal portfolio built with **pure HTML, CSS, and Vanilla JavaScript**. No frameworks, no build tools — just open `index.html` in a browser.

---

## 🗂 File Structure

```
raju-portfolio/
├── index.html      ← Complete single-page portfolio
├── style.css       ← All styles (CSS variables, glassmorphism, animations)
├── script.js       ← All interactivity (typewriter, particles, scroll effects)
└── README.md       ← This file
```

---

## 🚀 Running Locally

### Option 1 — Just open it (easiest)
Double-click `index.html` — it opens directly in your browser.

### Option 2 — Local server (recommended for form testing)
```bash
# Python (if installed)
python -m http.server 5500

# Node.js (if installed)
npx serve .

# VS Code → Right-click index.html → "Open with Live Server"
```
Then open: `http://localhost:5500`

---

## ✏️ Customisation Guide

### Personal Info
Edit `index.html` — search for the relevant section heading (e.g., `<!-- HERO SECTION -->`) and update text directly.

### Profile / Workspace Image
The hero and about sections use inline SVG illustrations. To replace with a real photo:
1. Add your photo to the project folder (e.g., `photo.jpg`)
2. In `index.html`, replace the `<svg>` block inside `.hero-illustration` or `.about-img-frame` with:
   ```html
   <img src="photo.jpg" alt="Raju Gupta" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;" />
   ```

### Project Screenshots
Each project card has a placeholder SVG. To add a real screenshot:
1. Save the screenshot (e.g., `sangam-preview.jpg`)
2. Replace the `<svg>` inside `.project-preview` with:
   ```html
   <img src="sangam-preview.jpg" alt="Sangam Eye Hospital website" loading="lazy" />
   ```

### Resume Download
Replace the `href="#"` on the "Download Resume" button with the path to your PDF:
```html
<a href="Raju_Gupta_Resume.pdf" class="btn btn-outline" download>
```
Place the PDF in the same folder as `index.html`.

### Contact Form
The form uses [FormSubmit.co](https://formsubmit.co/) — no backend needed.
- **First submission**: You'll receive an activation email at `rajugupta77724@gmail.com`.
- **After activation**: All messages go directly to your inbox.
- To change the email, update the `action` attribute in the `<form>` tag.

### Colours / Theme
Edit the CSS variables in `style.css` under `:root { }`:
```css
--accent-blue:   #3b82f6;
--accent-violet: #8b5cf6;
--accent-cyan:   #06b6d4;
```

### GitHub Link
Replace `https://github.com/` with your actual GitHub profile URL in the social links (search for `github.com` in `index.html`).

---

## 🌐 Deployment

### GitHub Pages (free)
1. Create a repository (e.g., `raju-portfolio`)
2. Push all three files (`index.html`, `style.css`, `script.js`)
3. Go to **Settings → Pages → Branch: main → Save**
4. Your site will be live at `https://<username>.github.io/raju-portfolio/`

### Netlify (free, drag & drop)
1. Go to [netlify.com](https://netlify.com) → Log in
2. Drag the `raju-portfolio` folder onto the deploy area
3. Done — you get a live URL instantly

### Vercel (free)
```bash
npx vercel
```

---

## ✅ Features Checklist

| Feature | Status |
|---|---|
| Premium dark glassmorphism design | ✅ |
| Light / dark theme toggle | ✅ |
| Sticky navbar + glass scroll effect | ✅ |
| Mobile hamburger menu | ✅ |
| Active nav link highlighting | ✅ |
| Hero typewriter animation | ✅ |
| Animated gradient orbs | ✅ |
| Floating particles canvas | ✅ |
| Mouse-follow glow effect | ✅ |
| Custom cursor (desktop) | ✅ |
| Scroll progress bar | ✅ |
| Scroll-reveal animations | ✅ |
| Staggered card animations | ✅ |
| Card tilt effect on hover | ✅ |
| Loading / intro screen | ✅ |
| Inline SVG illustrations | ✅ |
| Skills category filter | ✅ |
| Animated experience timeline | ✅ |
| Project image zoom on hover | ✅ |
| Gradient animated borders | ✅ |
| Contact form with validation | ✅ |
| Copy-email button | ✅ |
| FormSubmit.co email delivery | ✅ |
| Back-to-top button | ✅ |
| prefers-reduced-motion | ✅ |
| Full mobile responsiveness | ✅ |
| SEO meta tags + Open Graph | ✅ |
| Accessible ARIA labels | ✅ |
| Semantic HTML5 | ✅ |
| Zero external dependencies | ✅ |

---

## 📬 Contact

**Raju Gupta**
📧 rajugupta77724@gmail.com
📞 +91-8795898504
🔗 [LinkedIn](https://www.linkedin.com/in/raju-gupta-1067b2268/)
