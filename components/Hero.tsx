
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-black flex items-center">
      <div className="absolute inset-0 w-full h-full">
        <img 
            src="https://images.unsplash.com/photo-1529139513055-07f9d27e9550?auto=format&fit=crop&q=80&w=2000" 
            alt="DIY Modelling Agency Showcase" 
            className="w-full h-full object-cover grayscale brightness-90 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-8 md:px-16">
        <div className="animate-fade-in-up">
          <span className="block text-xs font-bold uppercase tracking-[0.4em] text-white/70 mb-4">
            DIY Modelling Agency / Portfolio 2024
          </span>
          <h1 className="text-[15vw] leading-[0.8] font-serif font-black text-white tracking-tighter mb-8 opacity-90">
            DIY <br/> <span className="italic font-light">AGENCY</span>
          </h1>
          <p className="max-w-md text-lg text-white/80 font-light leading-relaxed mb-10 uppercase tracking-widest text-sm">
            Elite talent representation. <br/> Global reach, Boutique attention.
          </p>
          <a 
            href="#work" 
            className="group relative px-10 py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-500 overflow-hidden inline-block"
          >
            Our Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
