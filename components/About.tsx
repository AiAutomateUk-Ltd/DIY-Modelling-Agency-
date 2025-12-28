
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { MODEL_DETAILS, BRAND_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-black text-white py-32 px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row gap-24 items-start">
        
        <div className="lg:w-1/2 relative group">
          <div className="aspect-[3/4] w-full bg-zinc-900 overflow-hidden grayscale contrast-110">
            <img 
              src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&q=80&w=1000" 
              alt="Talent Representation" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-white text-black p-10 flex flex-col justify-center hidden md:flex">
             <span className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Talent Call</span>
             <p className="text-sm font-light leading-tight">DIY Agency is currently scouting new faces for our FW25 editorial roster.</p>
          </div>
        </div>

        <div className="lg:w-1/2">
          <span className="block text-xs font-bold uppercase tracking-[0.4em] text-white/40 mb-8">About the Agency</span>
          <h2 className="text-6xl md:text-8xl font-serif mb-12 leading-tight">{BRAND_NAME}: <br/> Redefining Talent.</h2>
          
          <p className="text-xl font-light text-white/70 leading-relaxed mb-16 max-w-xl">
            DIY Modelling Agency is a curated management firm dedicated to talent that transcends traditional boundaries. We represent visionaries, chameleons, and high-fashion icons.
          </p>

          <div className="border-t border-white/10 pt-12">
            <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-white/40 mb-8">Featured Talent Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
              {Object.entries(MODEL_DETAILS.measurements).map(([key, value]) => (
                <div key={key}>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">{key}</span>
                  <span className="text-2xl font-serif italic">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 flex flex-wrap gap-12 text-xs font-bold uppercase tracking-[0.4em] text-white/60">
             <div className="flex flex-col gap-2">
                <span>Agency Status</span>
                <span className="text-white">Independent / Global</span>
             </div>
             <div className="flex flex-col gap-2">
                <span>Roster</span>
                <span className="text-white">Elite Editorial & Runway</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
