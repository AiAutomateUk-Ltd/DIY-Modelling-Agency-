
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-24 px-8 md:px-16 border-t border-gray-100">
      <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-4xl font-serif font-black tracking-tighter text-black">
          DIY AGENCY
        </div>
        
        <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
          <a href="#" className="hover:text-black">Instagram</a>
          <a href="#" className="hover:text-black">Models.com</a>
          <a href="#" className="hover:text-black">LinkedIn</a>
        </div>

        <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 text-center md:text-right">
          © 2024 DIY MODELLING AGENCY. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
