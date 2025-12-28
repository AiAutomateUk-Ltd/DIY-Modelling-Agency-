
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { PortfolioWork } from '../types';

interface WorkDetailProps {
  work: PortfolioWork;
  onBack: () => void;
}

const WorkDetail: React.FC<WorkDetailProps> = ({ work, onBack }) => {
  return (
    <div className="min-h-screen bg-black text-white py-32 animate-fade-in-up">
      <div className="max-w-[1800px] mx-auto px-8 md:px-16">
        
        <button 
          onClick={onBack}
          className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors mb-20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-2 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Work
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          
          <div className="lg:col-span-8">
            <div className="w-full bg-zinc-900 grayscale">
              <img 
                src={work.imageUrl} 
                alt={work.title} 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="lg:col-span-4 sticky top-32">
             <span className="block text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-4">{work.category} / {work.year}</span>
             <h1 className="text-6xl font-serif leading-none mb-12">{work.title}</h1>
             
             <div className="space-y-12">
               <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-2">Description</label>
                  <p className="text-xl font-light text-white/70 leading-relaxed">{work.description}</p>
               </div>

               <div className="grid grid-cols-2 gap-8 pt-12 border-t border-white/10">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-2">Location</label>
                    <span className="text-sm font-bold tracking-widest">{work.location || 'N/A'}</span>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-2">Photographer</label>
                    <span className="text-sm font-bold tracking-widest italic">{work.photographer || 'N/A'}</span>
                  </div>
               </div>

               <button className="w-full border border-white/20 py-5 text-xs font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all">
                  Inquire about this look
               </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
