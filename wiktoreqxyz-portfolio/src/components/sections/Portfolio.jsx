import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";


import portfolioPreview from "./image.png";import website1 from "./portfolio/image.png";
import website2 from "./portfolio/image.png";
import website3 from "./portfolio/image.png";
import bot1 from "./portfolio/image.png";
import bot2 from "./portfolio/image.png";

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('strony');
  const [showGallery, setShowGallery] = useState(false);

  const portfolioData = {
    strony: [
      { id: 1, image: website1, title: 'Cwel', description: 'Cwel' },
      { id: 2, image: website2, title: 'Cwel', description: 'Cwel' },
      { id: 3, image: website3, title: 'Cwel', description: 'Cwel' },
    ],
    boty: [
      { id: 4, image: bot1, title: 'Cwel', description: 'Cwel' },
      { id: 5, image: bot2, title: 'Cwel', description: 'Cwel' },
    ]
  };

  return (
    <section id="portfolio" className="min-h-screen flex items-center justify-center relative">
      {!showGallery ? (
        <RevealOnScroll>
          <div className="text-center z-10 px-4 cursor-pointer" onClick={() => setShowGallery(true)}>
            <div className="relative group max-w-4xl mx-auto">
              <img 
                src={portfolioPreview} 
                alt="Podgląd portfolio" 
                className="rounded-xl shadow-2xl group-hover:opacity-90 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-all duration-500 rounded-xl">
                <button className="bg-gradient-to-r from-emerald-500 to-cyan-600 text-white text-xl md:text-2xl font-bold py-4 px-8 rounded-full transform group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  Zobacz portfolio
                </button>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      ) : (
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
          <button 
            onClick={() => setShowGallery(false)} 
            className="mb-8 text-gray-400 hover:text-white transition-colors flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Powrót
          </button>

          <h2 className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent text-center">
            Moje Portfolio
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(portfolioData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full capitalize transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData[activeCategory].map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-xl border-1 border-gray-500/50 hover:shadow-emerald-500/20 transition-all duration-300">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-gray-300 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};