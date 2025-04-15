import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ctaData from '../data/ctaData.json';

const DynamicCTA = () => {
  const [visibleCTAs, setVisibleCTAs] = useState({});

  // Create a ref for each CTA
  const ctaRefs = ctaData.map(() => {
    const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.3,
    });
    return { ref, inView };
  });

  // Update visible CTAs when they come into view
  useEffect(() => {
    const newVisibleCTAs = {};
    ctaRefs.forEach((ref, index) => {
      if (ref.inView) {
        newVisibleCTAs[index] = true;
      }
    });
    setVisibleCTAs(newVisibleCTAs);
  }, [ctaRefs.map(ref => ref.inView)]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          Special Offers Just For You
        </h2>
        
        <div className="space-y-24">
          {ctaData.map((cta, index) => (
            <div 
              key={cta.id}
              ref={ctaRefs[index].ref}
              className={`flex flex-col ${cta.position === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} 
                items-center gap-8 md:gap-12`}
            >
              {/* Image */}
              <motion.div 
                className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: cta.position === 'right' ? -50 : 50 }}
                animate={visibleCTAs[index] ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img 
                  src={cta.image} 
                  alt={cta.title} 
                  className="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              
              {/* Content */}
              <motion.div 
                className="w-full md:w-1/2 p-6"
                initial={{ opacity: 0, x: cta.position === 'right' ? 50 : -50 }}
                animate={visibleCTAs[index] ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-dark">
                  {cta.title}
                </h3>
                <p className="text-lg mb-6 text-gray-700">
                  {cta.description}
                </p>
                <motion.button 
                  className="cta-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cta.buttonText}
                </motion.button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicCTA;
