import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ParallaxHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="parallax-container">
      {/* Sky layer - moves slowest */}
      <div 
        className="parallax-layer" 
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />
      
      {/* Mountains layer - moves a bit faster */}
      <div 
        className="parallax-layer" 
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.2}px)`,
          opacity: 0.8,
        }}
      />
      
      {/* Foreground layer - moves fastest */}
      <div 
        className="parallax-layer" 
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: 0.6,
        }}
      />
      
      {/* Content layer - fixed position */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover Your Next Adventure
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore breathtaking destinations and create unforgettable memories with Wanderlust Travels
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/destinations" className="cta-button mr-4 inline-block">Explore Destinations</Link>
            <button className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
              View Packages
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <p className="mb-2 text-sm font-medium">Scroll to Explore</p>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 mx-auto" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default ParallaxHero;
