
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import StarterKit from './components/StarterKit';
import About from './components/About';
import Contact from './components/Contact';
import Assistant from './components/Assistant';
import Footer from './components/Footer';
import WorkDetail from './components/WorkDetail';
import { ViewState } from './types';

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (view.type !== 'home') {
      setView({ type: 'home' });
      setTimeout(() => scrollToSection(targetId), 0);
    } else {
      scrollToSection(targetId);
    }
  };

  const scrollToSection = (targetId: string) => {
    if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-[#050505] selection:bg-[#050505] selection:text-white">
      <Navbar onNavClick={handleNavClick} />
      
      <main>
        {view.type === 'home' && (
          <>
            <Hero />
            <PortfolioGrid onWorkClick={(w) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'work', work: w });
            }} />
            <StarterKit />
            <About />
            <Contact />
          </>
        )}

        {view.type === 'work' && (
          <WorkDetail 
            work={view.work} 
            onBack={() => {
              setView({ type: 'home' });
              setTimeout(() => scrollToSection('work'), 50);
            }}
          />
        )}
      </main>

      <Footer />
      <Assistant />
    </div>
  );
}

export default App;
