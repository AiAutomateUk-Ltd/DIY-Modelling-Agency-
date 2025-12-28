
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-[#F9F9F9] py-32 px-6 md:px-16">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <div>
            <span className="block text-xs font-bold uppercase tracking-[0.4em] text-gray-400 mb-8">Get in Touch</span>
            <h2 className="text-7xl font-serif text-black leading-none mb-12">Bookings & <br/> Inquiries</h2>
            <div className="space-y-6 text-lg font-light text-gray-600">
               <p>For runway, editorial, or commercial inquiries, please reach out via the form or through my primary representation.</p>
               <div className="pt-8 space-y-4 text-black font-bold uppercase tracking-widest text-sm">
                  <p className="hover:underline cursor-pointer">bookings@elaravane.com</p>
                  <p className="hover:underline cursor-pointer">@elaravane_official</p>
               </div>
            </div>
          </div>

          <form className="space-y-12 bg-white p-12 shadow-xl shadow-black/5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Your Name</label>
                  <input type="text" className="bg-transparent border-b border-gray-200 py-4 outline-none focus:border-black transition-colors" placeholder="Full name" />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                  <input type="email" className="bg-transparent border-b border-gray-200 py-4 outline-none focus:border-black transition-colors" placeholder="email@address.com" />
               </div>
            </div>
            
            <div className="flex flex-col gap-2">
               <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Subject / Agency</label>
               <input type="text" className="bg-transparent border-b border-gray-200 py-4 outline-none focus:border-black transition-colors" placeholder="e.g. Editorial Booking - Paris" />
            </div>

            <div className="flex flex-col gap-2">
               <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Project Details</label>
               <textarea rows={4} className="bg-transparent border-b border-gray-200 py-4 outline-none focus:border-black transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
            </div>

            <button className="w-full bg-black text-white py-6 uppercase tracking-[0.4em] text-xs font-bold hover:bg-zinc-800 transition-colors">
               Send Inquiry
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
