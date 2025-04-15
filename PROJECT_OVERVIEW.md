# Wanderlust Travels - Project Overview

## Purpose
This project is a travel agency website that uses parallax scrolling effects to create an immersive experience for users. The design aims to simulate a journey through different destinations, enticing visitors to explore travel packages and book trips.

## Implemented Features
- **Responsive Navbar**: A navigation bar that changes appearance on scroll and includes a mobile-friendly menu
- **Parallax Hero Section**: A visually striking hero area with multiple background layers that move at different speeds when scrolling
- **Animated Content**: Text and button elements that animate into view using Framer Motion
- **Scroll Indicator**: A subtle animation encouraging users to scroll down and explore more content
- **Dynamic CTAs**: Call-to-action sections that animate into view as the user scrolls down the page, highlighting special offers and experiences
- **Multi-page Navigation**: React Router implementation for navigating between different pages
- **Destinations Page**: A dedicated page showcasing various travel destinations with filtering options
- **Animated Card Grid**: Destination cards that animate into view as the user scrolls down the page

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
│   │   ├── ctaData.json
│   │   └── destinationsData.json
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Destinations.jsx
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
- **React Router**: Implemented for multi-page navigation
- **Tailwind CSS + DaisyUI**: For rapid styling and consistent UI components
- **Framer Motion**: Implemented for smooth animations and transitions
- **React Intersection Observer**: Used to detect when elements enter the viewport to trigger animations
- **Parallax Effect**: Created using CSS transforms and JavaScript to track scroll position
- **Responsive Design**: Ensured the site works well on all device sizes
- **Custom Fonts**: Using Montserrat for body text and Playfair Display for headings
- **Data Separation**: Content is stored in separate JSON files for easy management
- **Component Structure**: Organized components into logical folders for better maintainability
- **Explicit React Imports**: Added explicit React imports to all components to ensure proper hook functionality

## Current State
The project now includes a multi-page structure with a home page and a destinations page. The destinations page features a grid of travel destinations with details like price, duration, rating, and activities. Each destination card animates into view as the user scrolls down the page, and the page includes filter buttons for different types of travel experiences. The navigation has been updated to support routing between pages.
