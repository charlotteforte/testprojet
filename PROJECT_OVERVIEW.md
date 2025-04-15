# Wanderlust Travels - Project Overview

## Purpose
This project is a landing page for a travel agency that uses parallax scrolling effects to create an immersive experience for users. The design aims to simulate a journey through different destinations, enticing visitors to explore travel packages and book trips.

## Implemented Features
- **Responsive Navbar**: A navigation bar that changes appearance on scroll and includes a mobile-friendly menu
- **Parallax Hero Section**: A visually striking hero area with multiple background layers that move at different speeds when scrolling
- **Animated Content**: Text and button elements that animate into view using Framer Motion
- **Scroll Indicator**: A subtle animation encouraging users to scroll down and explore more content
- **Dynamic CTAs**: Call-to-action sections that animate into view as the user scrolls down the page, highlighting special offers and experiences

## Folder Structure
```
wanderlust-travels/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── DynamicCTA.jsx
│   │   ├── Navbar.jsx
│   │   └── ParallaxHero.jsx
│   ├── data/
│   │   └── ctaData.json
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Technical Decisions
- **Vite + React**: Used for fast development and optimized production builds
- **Tailwind CSS + DaisyUI**: For rapid styling and consistent UI components
- **Framer Motion**: Implemented for smooth animations and transitions
- **React Intersection Observer**: Used to detect when elements enter the viewport to trigger animations
- **Parallax Effect**: Created using CSS transforms and JavaScript to track scroll position
- **Responsive Design**: Ensured the site works well on all device sizes
- **Custom Fonts**: Using Montserrat for body text and Playfair Display for headings
- **Data Separation**: CTA content is stored in a separate JSON file for easy management

## Current State
The project now includes a dynamic CTA section that appears as users scroll through the page. Each CTA features an image and descriptive text that animate into view when they enter the viewport. The CTAs alternate between left and right layouts for visual interest and highlight special offers, guided tours, and luxury experiences.
