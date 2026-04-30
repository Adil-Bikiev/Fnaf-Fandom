# 🎬 Five Nights at Freddy's Wiki | FNAF Fandom

## 🎯 Description
A meticulously crafted fan-made interactive wiki dedicated to the **Five Nights at Freddy's** universe.  
Built out of passion for the FNAF franchise and a desire to practice frontend skills through 
a themed, immersive project.

This project is a frontend-focused, immersive experience that prioritizes atmosphere, 
clean architecture, and subtle storytelling through pure HTML, CSS, and Vanilla JavaScript.
> *"It's been so long..."*

---

## 🎯 Project Vision

To build more than a static webpage — a **living digital exhibit** for FNAF enthusiasts. The site combines curated lore, character showcases, and interactive secrets to create an engaging, atmospheric journey into the franchise's deep lore and iconic horror.

**Core Principles:**
- **Performance First:** Zero frameworks, zero build tools.
- **Immersive UX:** Sound, animation, and visual design that serves the theme.
- **Scalable Structure:** Organized for clarity and easy future expansion.
- **Interactive Storytelling:** Easter eggs and discoveries reward exploration.

---

## 📁 Project Architecture

```md
FNAF-FANDOM/
│
├── index.html                  # Homepage / Landing
├── favicon.ico                 # Site icon
│
├── assets/                     # Static media
│   ├── audio/                  # SFX & ambient tracks
│   ├── icons/                  # SVG icons, logos, UI elements
│   ├── images/                 # Backgrounds, characters, gallery items
│   └── video/                  # (Reserved for future content)
│
├── css/                        # Modular stylesheets
│   ├── style.css               # Global styles, reset, layout system
│   ├── about.css               # About / Franchise page
│   ├── games.css               # Games catalog
│   ├── gallery.css             # Interactive media gallery
│   ├── lore.css                # Timeline & story deep-dive
│   └── secrets.css             # Easter eggs & hidden content
│
├── html/                       # Additional page templates
│   ├── about.html
│   ├── anim.html               # Gallery page
│   ├── games.html
│   ├── lore.html
│   └── secrets.html
│
└── js/                         # Vanilla JavaScript modules
    ├── script.js               # Core: navigation, global listeners
    ├── gallery.js              # Gallery: search, filter, tag system
    └── secrets.js              # Secrets: interactive easter eggs, audio cues
```

---

## 🛠 Tech Stack

### Core
- **HTML5** (Semantic markup, `<audio>`)
- **CSS3** (Flexbox, Custom Properties, Keyframe Animations)
- **Vanilla JavaScript** (ES6+, DOM API, Event Handling, Audio API)

### Typography
- **Google Fonts:** *Poppins* (UI), *Roboto* (Content), *Creepster* (Accents)

### Deployment
- **GitHub Pages** (Static hosting)

### ❌ Explicitly Not Used
- React / Vue / Angular
- jQuery
- CSS Frameworks (Bootstrap, Tailwind)
- Build Tools (Webpack, Vite)
- Package Managers

---

## ✨ Key Features

### 🏠 Homepage (`index.html`)
- **Atmospheric Hero Section** with layered visual effects
- **Interactive Character Grid** with hover bios
- **Infinite Game Slider** (Pure CSS animation)
- **Dynamic Horror Quote Rotator**
- **Responsive Hamburger Navigation**

### 🖼 Gallery System (`gallery.js`)
- **Real-time Search** by title or tags
- **Clickable Tag Filters**
- **"No Results" State** with thematic messaging
- **Smooth Card Transitions**

### 🔐 Hidden Interactions (`secrets.js`)
- **Contextual Easter Eggs** triggered by specific user actions
- **Atmospheric Sound Integration** (used sparingly)
- **Temporary UI Overrides** for dramatic effect
- **Progressive Discovery** mechanics

### 📱 Responsive Design
- **Mobile-First** approach
- **Fluid Layouts** (Flexbox/Grid)
- **Adaptive Navigation** (burger menu on mobile)
- **Touch-Optimized** interactive elements

---

## 🎨 Design Philosophy

### Visual Language
- **Color Palette:** Dark blues, desaturated reds, and stark whites for contrast
- **Typography:** Clear hierarchy with occasional horror accents
- **Spacing:** Intentional use of negative space to build tension

### UX Patterns
- **Predictable Navigation:** Persistent header with clear section labels
- **Subtle Feedback:** Hover states, gentle transitions, and audio confirms
- **Thematic Consistency:** Every UI element reinforces the FNAF atmosphere

### Performance
- **Optimized Assets:** Compressed images, SVG where possible
- **Efficient CSS:** Minimal nesting, reused utility classes
- **Lazy Execution:** JavaScript only loads when needed

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Adil-Bikiev/Fnaf-Fandom.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd Fnaf-Fandom
   ```

3. **Open in your browser**
   - Simply open `index.html` in any modern browser
   - Or use a local server (e.g., VS Code Live Server)

**No installation, no dependencies, no build steps.**

You can check site here: [Link](https://adil-bikiev.github.io/Fnaf-Fandom/)

---

## 📸 Preview

![screen](/screens/screen1.png)
![screen](/screens/screen2.png)
![screen](/screens/screen3.png)
![screen](/screens/screen4.png)
![screen](/screens/screen5.png)
![screen](/screens/screen6.png)
![screen](/screens/screen7.png)
![screen](/screens/screen8.png)

---

## 🧠 Code Highlights

### CSS: Infinite Slider
```css
@keyframes slide {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-250px * 6)); }
}
.slider-track { animation: slide 20s linear infinite; }
```

### JavaScript: Gallery Search
```js
function filterGallery(searchTerm) {
  const cards = document.querySelectorAll('.gallery-card');
  let visibleCount = 0;
  
  cards.forEach(card => {
    const matches = card.dataset.tags.includes(searchTerm.toLowerCase());
    card.style.display = matches ? 'block' : 'none';
    if (matches) visibleCount++;
  });
  
  document.getElementById('no-results').style.display = 
    visibleCount ? 'none' : 'block';
}
```

### JavaScript: Easter Egg Handler
```js
function triggerEasterEgg(code) {
  if (code === '1987') {
    const audio = new Audio('assets/audio/secret.mp3');
    audio.volume = 0.3;
    audio.play();
    
    document.body.style.filter = 'invert(1)';
    setTimeout(() => document.body.style.filter = '', 2000);
  }
}
```

---

## Challenges & Learning

**Challenges:**
- JavaScript was the most difficult part — implementing interactivity and dynamic behavior required significant effort
- Responsive design (adaptive layout) was tricky to get right across different screen sizes
- Even in HTML/CSS, centering elements sometimes behaved unexpectedly and required debugging

**What We Learned:**
- Responsive layout
- Working with JavaScript and making pages interactive
- Team collaboration

---

## 📄 Pages Overview

| Page | Description | Key Feature |
|------|-------------|-------------|
| **Home** | Franchise introduction & character showcase | Infinite game slider |
| **About** | FNAF universe overview & timeline | Story progression timeline |
| **Games** | Catalog of all main series games | Interactive release timeline |
| **Gallery** | Media archive (art, screenshots) | Real-time search & filter |
| **Lore** | Deep dive into story mysteries | Expandable story nodes |
| **Secrets** | Easter eggs & hidden content | Interactive puzzle elements |

---

## ⚠️ Legal Disclaimer

This is an **unofficial fan project**. Five Nights at Freddy's and related characters are trademarks of Scott Cawthon. This site is not affiliated with, endorsed by, or connected to the official franchise.

All content is used under **fair use** for non-commercial, educational, and fan appreciation purposes.

---

## 👨‍💻 Team Members

**Adil Bikiev - Team Lead, Frontend Development**  
- **GitHub:** [Adil-Bikiev](https://github.com/Adil-Bikiev)

**Beknur Berdibaev Frontend Development**
- **GitHub:** [bekuuu1](https://github.com/bekuuu1)
