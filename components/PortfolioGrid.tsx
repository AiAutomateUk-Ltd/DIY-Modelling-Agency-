
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useMemo } from 'react';
import { PORTFOLIO_WORKS } from '../constants';
import { PortfolioWork } from '../types';

const categories = ['All', 'Editorial', 'Commercial', 'Runway', 'Portrait'];

interface PortfolioGridProps {
  onWorkClick: (work: PortfolioWork) => void;
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onWorkClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredWorks = useMemo(() => {
    if (activeCategory === 'All') return PORTFOLIO_WORKS;
    return PORTFOLIO_WORKS.filter(w => w.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="work" className="py-32 px-6 md:px-16 bg-[#F9F9F9]">
      <div className="max-w-[1800px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 space-y-8">
          <div>
            <span className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Galleries</span>
            <h2 className="text-6xl font-serif text-black leading-none">The Work</h2>
          </div>
          
          <div className="flex flex-wrap gap-8 text-xs font-bold uppercase tracking-[0.2em]">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pb-1 border-b-2 transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'border-black text-black' 
                    : 'border-transparent text-gray-400 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {filteredWorks.map((work, idx) => (
            <div 
              key={work.id} 
              className="group cursor-pointer transition-transform duration-500 hover:scale-[1.02] hover:z-10"
              onClick={() => onWorkClick(work)}
              style={{
                transform: `rotate(${(idx % 2 === 0 ? 1 : -1) * (Math.random() * 1.5)}deg)`
              }}
            >
              {/* Polaroid Frame */}
              <div className="bg-white p-4 pb-16 shadow-2xl shadow-black/5 border border-gray-100 transition-all group-hover:shadow-black/10">
                <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                  <img 
                    src={work.imageUrl} 
                    alt={work.title} 
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                <div className="mt-8 px-2 flex justify-between items-baseline">
                  <h3 className="text-xl font-serif font-bold text-black">{work.title}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{work.year}</span>
                </div>
                <p className="px-2 mt-1 text-[10px] uppercase tracking-widest text-gray-500">{work.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
