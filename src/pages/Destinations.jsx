import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import destinationsData from '../data/destinationsData.json';

const Destinations = () => {
  const [filter, setFilter] = useState('all');
  const [filteredDestinations, setFilteredDestinations] = useState(destinationsData);
  
  // Create a ref for each destination card
  const destinationRefs = destinationsData.map(() => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
    return { ref, inView };
  });

  // Filter destinations based on selected filter
  useEffect(() => {
    if (filter === 'all') {
      setFilteredDestinations(destinationsData);
    } else if (filter === 'popular') {
      // Filter destinations with rating >= 4.5
      setFilteredDestinations(destinationsData.filter(dest => parseFloat(dest.rating) >= 4.5));
    } else if (filter === 'beach') {
      // Filter destinations with beach-related activities
      setFilteredDestinations(destinationsData.filter(dest => 
        dest.activities.some(activity => 
          activity.toLowerCase().includes('beach') || 
          activity.toLowerCase().includes('ocean') || 
          activity.toLowerCase().includes('swim') ||
          activity.toLowerCase().includes('snorkel') ||
          activity.toLowerCase().includes('diving')
        )
      ));
    } else if (filter === 'adventure') {
      // Filter destinations with adventure-related activities
      setFilteredDestinations(destinationsData.filter(dest => 
        dest.activities.some(activity => 
          activity.toLowerCase().includes('hike') || 
          activity.toLowerCase().includes('trek') || 
          activity.toLowerCase().includes('climb') ||
          activity.toLowerCase().includes('adventure') ||
          activity.toLowerCase().includes('safari') ||
          activity.toLowerCase().includes('expedition')
        )
      ));
    } else if (filter === 'cultural') {
      // Filter destinations with cultural-related activities
      setFilteredDestinations(destinationsData.filter(dest => 
        dest.activities.some(activity => 
          activity.toLowerCase().includes('museum') || 
          activity.toLowerCase().includes('history') || 
          activity.toLowerCase().includes('temple') ||
          activity.toLowerCase().includes('culture') ||
          activity.toLowerCase().includes('heritage') ||
          activity.toLowerCase().includes('art')
        )
      ));
    }
  }, [filter]);

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section with Parallax */}
      <div 
        className="h-[50vh] relative flex items-center justify-center bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-dark bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Explore Destinations
          </motion.h1>
          <motion.p 
            className="text-xl text-white max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover breathtaking locations around the world and plan your next adventure
          </motion.p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            className={`px-6 py-2 rounded-full ${filter === 'all' ? 'bg-accent text-white' : 'bg-gray-200 text-gray-700'} transition-colors`}
            onClick={() => setFilter('all')}
          >
            All Destinations
          </button>
          <button 
            className={`px-6 py-2 rounded-full ${filter === 'popular' ? 'bg-accent text-white' : 'bg-gray-200 text-gray-700'} transition-colors`}
            onClick={() => setFilter('popular')}
          >
            Popular
          </button>
          <button 
            className={`px-6 py-2 rounded-full ${filter === 'beach' ? 'bg-accent text-white' : 'bg-gray-200 text-gray-700'} transition-colors`}
            onClick={() => setFilter('beach')}
          >
            Beach Getaways
          </button>
          <button 
            className={`px-6 py-2 rounded-full ${filter === 'adventure' ? 'bg-accent text-white' : 'bg-gray-200 text-gray-700'} transition-colors`}
            onClick={() => setFilter('adventure')}
          >
            Adventure
          </button>
          <button 
            className={`px-6 py-2 rounded-full ${filter === 'cultural' ? 'bg-accent text-white' : 'bg-gray-200 text-gray-700'} transition-colors`}
            onClick={() => setFilter('cultural')}
          >
            Cultural
          </button>
        </div>

        {/* Destinations Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              ref={destinationRefs[index].ref}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={destinationRefs[index].inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                  {destination.price}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-display font-bold text-dark">{destination.name}</h3>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="ml-1 text-gray-700">{destination.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">{destination.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{destination.duration}</span>
                  <Link 
                    to={`/destinations/${destination.id}`} 
                    className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    View Details
                  </Link>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {destination.activities.slice(0, 3).map((activity, i) => (
                    <span 
                      key={i} 
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      {activity}
                    </span>
                  ))}
                  {destination.activities.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      +{destination.activities.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-display font-bold text-gray-700 mb-4">No destinations found</h3>
            <p className="text-gray-600 mb-6">Try selecting a different filter category</p>
            <button 
              onClick={() => setFilter('all')}
              className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              View All Destinations
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;
