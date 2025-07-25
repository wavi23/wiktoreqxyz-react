import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import { FiArrowLeft, FiExternalLink, FiGithub, FiChevronRight } from "react-icons/fi";

import portfolioPreview from "./image.png";
import website1 from "./portfolio/image.png";
import website2 from "./portfolio/image.png";
import website3 from "./portfolio/image.png";
import bot1 from "./portfolio/image.png";
import bot2 from "./portfolio/image.png";

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('strony');
  const [showGallery, setShowGallery] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const portfolioData = {
    strony: [
      { 
        id: 1, 
        image: website1, 
        title: 'Strona pod portfolio #1', 
        description: 'Strona tworzona pod moje portfolio, aby był wgląd na moje inne projekty.', 
        tags: ['React', 'Tailwind Css', 'Vite'],
        link: '#',
        github: '#'
      },
      { 
        id: 2, 
        image: website2, 
        title: 'Strona pod portfolio #2', 
        description: 'Strona tworzona pod moje portfolio, aby był wgląd na moje inne projekty.', 
        tags: ['Next.js', 'Tailwind Css', 'MongoDB'],
        link: '#',
        github: '#'
      },
      { 
        id: 3, 
        image: website3, 
        title: 'Strona pod portfolio #3', 
        description: 'Strona tworzona pod moje portfolio, aby był wgląd na moje inne projekty.', 
        tags: ['React', 'Node.js', 'Express.js'],
        link: '#',
        github: '#'
      },
    ],
    boty: [
      { 
        id: 4, 
        image: bot1, 
        title: 'Bot Discord pod portfolio #1', 
        description: 'Zaawansowany bot z systemem poziomów i moderacji', 
        tags: ['Python', 'Discord.Py', 'Sqlite'],
        link: '#',
        github: '#'
      },
      { 
        id: 5, 
        image: bot2, 
        title: 'Bot Discord pod portfolio #2',
        description: 'Bot do automatyzacji zadań', 
        tags: ['Python', 'Discord.Py', 'Sqlite'],
        link: '#',
        github: '#'
      },
    ]
  };

  const handleGalleryToggle = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShowGallery(!showGallery);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <section id="portfolio" className="min-h-screen flex items-center justify-center relative px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-cyan-500 blur-3xl animate-pulse mt-25"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-emerald-500 blur-3xl opacity-70 animate-pulse mb-25"></div>
      </div>

      <AnimatePresence mode="wait">
        {!showGallery ? (
          <motion.div
            key="main-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <RevealOnScroll>
              <div className="w-full max-w-6xl mx-auto px-4 relative z-10">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                      <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                        Moje Projekty
                      </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
                      Przejrzyj moje portfolio i zobacz przykłady wykonanych prac
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative group cursor-pointer overflow-hidden rounded-2xl border border-gray-800 hover:border-emerald-500/30 transition-all duration-500"
                  onClick={handleGalleryToggle}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img 
                    src={portfolioPreview} 
                    alt="Podgląd portfolio" 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-between p-8">
                    <div>
                      <motion.span 
                        className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        Portfolio
                      </motion.span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Zobacz moje prace</h3>
                      <p className="text-gray-300 max-w-md">Kliknij, aby zobaczyć pełną galerię projektów</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <span className="inline-block w-3 h-3 rounded-full bg-emerald-500"></span>
                        <span className="inline-block w-3 h-3 rounded-full bg-cyan-500"></span>
                        <span className="inline-block w-3 h-3 rounded-full bg-gray-600"></span>
                      </div>
                      
                      <div className="flex items-center text-emerald-400 group-hover:text-white transition-colors">
                        <span className="mr-2">Przeglądaj</span>
                        <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="mt-12 text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <button 
                    onClick={handleGalleryToggle}
                    className="inline-flex items-center px-8 py-4 border border-gray-800 rounded-full bg-gray-900/50 text-gray-300 hover:text-white hover:border-emerald-500/30 hover:bg-gray-900 transition-all group"
                  >
                    <span className="mr-3">Zobacz wszystkie projekty</span>
                    <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
            </RevealOnScroll>
          </motion.div>
        ) : (
          <motion.div
            key="gallery-view"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full max-w-7xl mx-auto px-4 py-12 relative z-10"
          >
            <motion.button 
              onClick={handleGalleryToggle} 
              className="mb-8 text-gray-400 hover:text-emerald-400 transition-colors flex items-center group"
              whileHover={{ x: -5 }}
            >
              <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Powrót do strony głównej
            </motion.button>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                  Moje Projekty
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                  Poniżej znajdziesz wybrane projekty, nad którymi pracowałem. Każdy z nich to nowe wyzwanie i doświadczenie.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {Object.keys(portfolioData).map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-600 text-white shadow-lg shadow-emerald-500/20'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {portfolioData[activeCategory].map((item, index) => (
                <motion.div 
                  key={item.id} 
                  className="bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 group"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-60 overflow-hidden">
                    <motion.img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div className="flex space-x-3">
                        {item.link && (
                          <motion.a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-all"
                            title="Zobacz live"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FiExternalLink />
                          </motion.a>
                        )}
                        {item.github && (
                          <motion.a 
                            href={item.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
                            title="Kod źródłowy"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FiGithub />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 mb-4">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <motion.span 
                          key={tagIndex} 
                          className="text-xs px-3 py-1 rounded-full bg-gray-800 text-emerald-400 border border-gray-700"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};