
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { BRAND_NAME } from '../constants';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColorClass = scrolled ? 'text-black' : 'text-white';
  const bgColorClass = scrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100' : 'bg-transparent';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out py-8 ${
        scrolled ? 'py-4 shadow-sm' : ''
      } ${bgColorClass}`}
    >
      <div className="max-w-[1800px] mx-auto px-8 md:px-16 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              onNavClick(e, '');
          }}
          className={`text-4xl font-serif font-black tracking-tighter transition-colors duration-500 ${textColorClass}`}
        >
          {BRAND_NAME}
        </a>
        
        <div className={`flex items-center gap-10 text-[10px] font-bold tracking-[0.4em] uppercase transition-colors duration-500 ${textColorClass}`}>
          <a href="#work" onClick={(e) => onNavClick(e, 'work')} className="hover:opacity-50 transition-opacity">Work</a>
          <a href="#starter-kit" onClick={(e) => onNavClick(e, 'starter-kit')} className="px-3 py-1 bg-white text-black font-black hover:bg-black hover:text-white transition-all shadow-lg shadow-black/5">Starter Kit</a>
          <a href="#about" onClick={(e) => onNavClick(e, 'about')} className="hover:opacity-50 transition-opacity">Agency</a>
          <a href="#contact" onClick={(e) => onNavClick(e, 'contact')} className="hover:opacity-50 transition-opacity">Bookings</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
