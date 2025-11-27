# New Life Welding Training Center - Premium Website

A breathtaking, modern, and highly animated website for New Life Welding Training Center built with Next.js 14, React, TypeScript, Framer Motion, and cutting-edge web technologies.

## 🔥 Features

### **Insane-Level Animations**
- Custom cursor effects with smooth following
- Particle background system with interactive particles
- Scroll-triggered animations throughout
- Page transitions with Framer Motion
- Parallax effects with 3D tilt interactions
- Smooth scroll with Lenis
- Magnetic button effects
- Text reveal animations
- Staggered container animations
- Hover effects with scale, rotate, and glow
- Progress scroll indicator

### **Premium Design**
- Glassmorphism effects
- Mesh gradients and noise textures
- Custom color palette with primary/accent colors
- Dark mode support with next-themes
- Responsive design (mobile, tablet, desktop)
- Custom typography with clash-display and inter fonts
- Premium shadows and lighting effects

### **Comprehensive Sections**
1. **Hero** - Cinematic hero with particle system, animated text, floating elements
2. **Stats** - Animated statistics with CountUp, 3D cards
3. **About** - Timeline, 3D tilt cards, core values showcase
4. **Programs** - 6 detailed programs with tabs, filtering, full curriculum
5. **Process** - 6-step journey with animated workflow
6. **Certifications** - Industry certifications with detailed info
7. **Facilities** - State-of-the-art facility showcase with equipment list
8. **Gallery** - Filterable image gallery with lightbox
9. **Testimonials** - Student success stories with ratings
10. **Partners** - Industry partner logos
11. **FAQ** - Accordion-style questions
12. **CTA** - Eye-catching call-to-action with contact options

### **Navigation**
- Animated navbar with blur backdrop on scroll
- Mega menu with submenu dropdowns
- Mobile-responsive hamburger menu
- Smooth scroll to sections

### **Footer**
- Comprehensive footer with multiple link columns
- Newsletter subscription
- Social media links
- Contact information

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, GSAP
- **UI Components:** Lucide React (icons)
- **Smooth Scroll:** Lenis
- **Particles:** tsparticles
- **3D Effects:** @react-three/fiber, @react-three/drei
- **Tilt Effects:** react-parallax-tilt
- **Forms:** React Hook Form + Zod
- **Notifications:** React Hot Toast
- **Theme:** next-themes
- **Date:** date-fns
- **Typography:** Inter, Clash Display, JetBrains Mono

## 📦 Installation

1. **Install dependencies:**
```powershell
npm install
```

2. **Run development server:**
```powershell
npm run dev
```

3. **Open browser:**
Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
welding-demo 2/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page with all sections
│   └── globals.css         # Global styles and animations
├── components/
│   ├── navigation/
│   │   ├── Navbar.tsx      # Animated navigation bar
│   │   └── Footer.tsx      # Comprehensive footer
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Stats.tsx       # Statistics section
│   │   ├── About.tsx       # About section
│   │   ├── Programs.tsx    # Programs section
│   │   ├── Process.tsx     # Process workflow
│   │   ├── Certifications.tsx
│   │   ├── Facilities.tsx
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Partners.tsx
│   │   ├── FAQ.tsx
│   │   └── CTA.tsx
│   ├── ui/
│   │   ├── AnimatedSection.tsx    # Reusable animation wrapper
│   │   ├── AnimatedText.tsx       # Text animation component
│   │   ├── ParticleBackground.tsx # Particle system
│   │   ├── CustomCursor.tsx       # Custom cursor effect
│   │   ├── ScrollProgress.tsx     # Scroll progress bar
│   │   ├── PageTransition.tsx     # Page transitions
│   │   └── SmoothScroll.tsx       # Smooth scrolling
│   └── Providers.tsx       # Theme and toast providers
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:
```typescript
colors: {
  primary: { ... },  // Orange theme
  accent: { ... },   // Red accent
  dark: { ... },     // Dark theme colors
}
```

### Content
Each section is self-contained in `components/sections/`. Edit the data arrays within each component to customize:
- Programs and courses
- Certifications
- Testimonials
- FAQ items
- Partner logos

### Images
Replace placeholder images in components with actual images:
- Use Unsplash URLs or local images in `/public`
- Update `next.config.js` for external image domains

### Animations
Customize animation variants in:
- `components/ui/AnimatedSection.tsx` - Base animations
- `app/globals.css` - Keyframe animations
- Individual components - Framer Motion variants

## 🎯 Key Features Breakdown

### Programs Section
- 6 comprehensive welding programs
- Tabbed interface (Overview, Curriculum, Outcomes)
- Interactive cards with hover effects
- Detailed curriculum breakdown
- Certification information
- Career path details

### Certifications
- Industry-recognized certifications
- Certification journey timeline
- Requirements and benefits
- Level indicators
- Interactive cards

### Process
- 6-step enrollment process
- Alternating layout design
- Animated connectors
- Detailed subsections for each step
- Duration indicators

### Facilities
- 6 facility areas
- Equipment showcase
- Virtual tour CTA
- 3D tilt effects
- Detailed specifications

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## ⚡ Performance

- Server-side rendering with Next.js 14
- Optimized images with Next/Image
- Code splitting and lazy loading
- CSS optimization with Tailwind
- Smooth animations at 60fps

## 🌙 Dark Mode

Implemented with `next-themes`:
- Toggle in navbar (optional)
- System preference detection
- Smooth transitions
- All components styled for both modes

## 📄 License

This project is for portfolio/demonstration purposes.

## 🙏 Acknowledgments

- Design inspiration from modern SaaS websites
- Animations inspired by Awwwards winners
- Icon library: Lucide React
- Fonts: Google Fonts, Fontshare

---

**Built with ❤️ and insane attention to detail**

For questions or customization requests, please contact the developer.
