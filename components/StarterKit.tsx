
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { STARTER_KIT_ASSETS, ROADMAP_STEPS } from '../constants';
import { AccessState, PaymentTier } from '../types';
import StripeSim from './StripeSim';

const StarterKit: React.FC = () => {
  const [access, setAccess] = useState<AccessState>({ hasAccess: false, tier: null });
  const [checkout, setCheckout] = useState<{ active: boolean; tier: PaymentTier; price: string } | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('diy_agency_access');
    if (saved) setAccess(JSON.parse(saved));
  }, []);

  const handleSuccess = (tier: PaymentTier) => {
    const newState = { hasAccess: true, tier };
    setAccess(newState);
    localStorage.setItem('diy_agency_access', JSON.stringify(newState));
    setCheckout(null);
    window.scrollTo({ top: document.getElementById('starter-kit')?.offsetTop, behavior: 'smooth' });
  };

  return (
    <section id="starter-kit" className="bg-white py-32 px-6 md:px-16 border-t border-gray-100 relative">
      {checkout && (
        <StripeSim 
          tier={checkout.tier} 
          price={checkout.price} 
          onSuccess={() => handleSuccess(checkout.tier)}
          onCancel={() => setCheckout(null)}
        />
      )}

      <div className="max-w-[1800px] mx-auto">
        
        {/* Header Hook */}
        <div className="mb-24 text-center">
          <span className="inline-block bg-black text-white px-4 py-1 text-[10px] font-bold uppercase tracking-[0.4em] mb-8">
            The Solo Model Starter Kit
          </span>
          <h2 className="text-6xl md:text-8xl font-serif leading-none mb-8">
            Launch from your <br/> bedroom in <span className="italic font-light">30 days.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl font-light text-gray-500 leading-relaxed">
            POV: You're broke, but still want to get paid £250 to model... without an agency gate-keeping your career. 
            A 100% solo, AI-powered workflow for less than £30.
          </p>
        </div>

        {/* Product Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 border-gray-200 bg-gray-200 mb-24 shadow-2xl relative">
          {!access.hasAccess && (
            <div className="absolute inset-0 z-10 backdrop-blur-[2px] bg-white/10 flex items-center justify-center">
               <div className="bg-black text-white px-8 py-4 flex items-center gap-4 shadow-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Purchase to Unlock Assets</span>
               </div>
            </div>
          )}
          
          {STARTER_KIT_ASSETS.map((asset, i) => (
            <div key={i} className="bg-white p-10 flex flex-col justify-between group hover:bg-black transition-all duration-500">
              <div>
                <span className="text-4xl mb-6 block">{asset.emoji}</span>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-4 group-hover:text-white transition-colors">{asset.title}</h3>
                <p className="text-sm font-light text-gray-400 leading-relaxed group-hover:text-gray-500 transition-colors">{asset.desc}</p>
              </div>
              <div className="mt-8 border-t border-gray-100 pt-4 group-hover:border-white/10 flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 group-hover:text-white transition-colors">Asset 0{i+1}</span>
                {access.hasAccess && (
                  <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-black group-hover:text-white underline underline-offset-4">Download</a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start py-24 border-t border-gray-100">
          <div className="lg:col-span-4">
             <h3 className="text-4xl font-serif mb-8">30-Day Notion <br/> Roadmap</h3>
             <p className="text-gray-500 font-light mb-12">Follow the ten steps sequentially and you'll move from "curious beginner" to "working model with taxable income" inside 12 months.</p>
             <div className="space-y-6 relative">
                {!access.hasAccess && (
                  <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-white/80 to-white flex items-end justify-center pb-12">
                     <button 
                      onClick={() => setCheckout({ active: true, tier: 'KIT', price: '£12' })}
                      className="text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:opacity-50"
                     >
                       Unlock Full Roadmap
                     </button>
                  </div>
                )}
                {ROADMAP_STEPS.map((step, i) => (
                  <div key={i} className={`flex gap-6 items-center border-b border-gray-100 pb-4 ${!access.hasAccess && i > 1 ? 'opacity-20' : ''}`}>
                    <span className="text-xs font-bold text-gray-300">Day {step.day}</span>
                    <div className="flex-1">
                       <p className="text-sm font-bold uppercase tracking-widest">{step.task}</p>
                       <span className="text-[10px] text-gray-400 uppercase tracking-widest italic">{step.tool}</span>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="lg:col-span-8 bg-[#F9F9F9] p-12 md:p-24 relative overflow-hidden">
             {access.hasAccess && (
               <div className="absolute top-0 left-0 w-full h-full bg-black/90 z-20 flex flex-col items-center justify-center text-white text-center p-12 animate-fade-in">
                  <div className="mb-8 p-6 border border-white/20 rounded-full">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                  </div>
                  <h4 className="text-5xl font-serif mb-4 italic">Welcome to the Agency.</h4>
                  <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/40 mb-12">Access Granted: {access.tier === 'KIT' ? 'Starter Kit' : 'Big-Sis VIP'}</p>
                  <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
                     <a href="#" className="flex-1 bg-white text-black py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:invert transition-all">Notion Dashboard</a>
                     <a href="#" className="flex-1 border border-white/20 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white/10 transition-all">Download Assets (.ZIP)</a>
                  </div>
                  <button 
                    onClick={() => {
                      localStorage.removeItem('diy_agency_access');
                      setAccess({ hasAccess: false, tier: null });
                    }}
                    className="mt-12 text-[8px] uppercase tracking-[0.5em] text-white/20 hover:text-white transition-colors"
                  >
                    Reset Simulated Access
                  </button>
               </div>
             )}

             <div className="relative z-10 max-w-lg">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-6 block">Pricing & Membership</span>
                <h4 className="text-6xl font-serif mb-12">Big-Sis <br/> Back-Up.</h4>
                
                <div className="space-y-8 mb-16">
                   <div className="flex items-start gap-4 p-8 bg-white border border-gray-200 cursor-pointer hover:border-black transition-all group" onClick={() => setCheckout({ active: true, tier: 'KIT', price: '£12' })}>
                      <div className="w-6 h-6 bg-gray-100 group-hover:bg-black flex-shrink-0 mt-1 transition-colors"></div>
                      <div>
                         <p className="text-xl font-bold">Starter Kit Only — £12</p>
                         <p className="text-gray-400 font-light text-sm">Instant download. DIY forever.</p>
                      </div>
                   </div>
                   
                   <div className="flex items-start gap-4 p-8 bg-black text-white shadow-2xl scale-105 cursor-pointer hover:scale-110 transition-all group" onClick={() => setCheckout({ active: true, tier: 'BIG_SIS', price: '£12 + £9/mo' })}>
                      <div className="w-6 h-6 bg-white flex-shrink-0 mt-1"></div>
                      <div className="flex-1">
                         <div className="flex justify-between items-center mb-2">
                           <p className="text-xl font-bold italic">Big-Sis Back-Up</p>
                           <span className="bg-white text-black px-2 py-0.5 text-[8px] font-black uppercase">Popular</span>
                         </div>
                         <p className="text-3xl font-serif mb-4">£12 today, then £9/mo</p>
                         <ul className="text-xs space-y-2 text-gray-400 uppercase tracking-widest">
                            <li>• Weekly "Model Monday" Zooms</li>
                            <li>• Private Discord "Locker Room"</li>
                            <li>• Pitch-Proof Service</li>
                            <li>• Rate-Negotiation Voice Notes</li>
                         </ul>
                      </div>
                   </div>
                </div>

                <button 
                  onClick={() => setCheckout({ active: true, tier: 'BIG_SIS', price: '£12 + £9/mo' })}
                  className="w-full py-6 bg-black text-white text-xs font-bold uppercase tracking-[0.4em] hover:bg-zinc-800 transition-colors"
                >
                   Get Instant Access
                </button>
                <p className="mt-8 text-center text-[10px] text-gray-400 uppercase tracking-widest">
                  Secure Checkout via Simulated Stripe • Cancel Anytime
                </p>
             </div>

             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none select-none">
                <h1 className="text-[30vw] font-serif italic -rotate-90 origin-top-right text-black leading-none">CEO</h1>
             </div>
          </div>
        </div>

        {/* Safety Callout */}
        <div className="mt-24 p-12 border border-black flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
           <div>
              <h5 className="text-xl font-bold uppercase tracking-widest mb-2 italic">Solo Model Safety Rules</h5>
              <p className="text-sm text-gray-500 max-w-xl">You must be 13+ and have parental permission if under 18. Always meet clients in public spaces and tell an adult. This product is educational; results depend on effort.</p>
           </div>
           <div className="flex gap-4">
              <span className="w-12 h-12 border border-black flex items-center justify-center text-xl">🛡️</span>
              <span className="w-12 h-12 border border-black flex items-center justify-center text-xl">🔒</span>
           </div>
        </div>

      </div>
    </section>
  );
};

export default StarterKit;
