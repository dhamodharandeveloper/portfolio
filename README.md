# Dhamodharan S — Portfolio

A cyber-blue developer portfolio built with React, Three.js and Framer Motion.
Single-page layout with a live WebGL hero scene, scroll-reveal sections and a
fully responsive grid system (desktop, laptop, tablet and mobile).

**Live sections:** Home · About · Skills · Projects · Education · Certifications · Contact

## Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | React 19 + Vite 8 |
| 3D / WebGL | Three.js, @react-three/fiber, @react-three/drei |
| Animation | Framer Motion |
| Styling | Hand-written CSS (Tailwind available) |
| Icons | react-icons |

## Features

- Interactive Three.js hero scene with a graceful 2D fallback when WebGL is unavailable.
- Terminal-style intro panel above the canvas, stacked cleanly on mobile.
- Scroll-spy navigation with a mobile drawer menu.
- Tilt-reactive project cards with live screenshot previews.
- Reduced-motion friendly reveal animations.
- Zero horizontal overflow from 320 px to 1440 px+.

## Projects

1. **Hostel Management System** — web app for student registration, room booking and hostel operations.
2. **Online Library Management System** — web app for book browsing and library operations.
3. **Coco Elite – E-Commerce Website** — responsive storefront for desiccated coconut products. [Live site](https://csfood.in/)

## Getting Started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the production build
```

## Project Structure

```
public/            resume PDF, profile photo, project previews, favicon
src/
  components/      section components, Three.js scene, shared UI primitives
  data/            resume, skills and project content
  styles/          per-section stylesheets and responsive breakpoints
  index.css        design tokens, layout helpers, typography
```

## Breakpoints

| Range | Target |
| --- | --- |
| ≥ 1200 px | Desktop |
| 992 – 1199 px | Laptop |
| 768 – 991 px | Tablet |
| 320 – 767 px | Mobile |

## Author

**Dhamodharan S** — Full Stack Developer, Villupuram, Tamil Nadu.
