import React, { useEffect, useRef } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveGamePreview from './components/LiveGamePreview';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import PuzzleTraining from './components/PuzzleTraining';
import Tournament from './components/Tournament';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

// Scroll reveal component utilizing Intersection Observer
const ScrollReveal = ({ children }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Animate only once
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is in view
        rootMargin: '0px 0px -60px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className="reveal-on-scroll">
      {children}
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-lightBg dark:bg-darkBg text-slate-800 dark:text-slate-200 transition-colors duration-300 font-sans antialiased">
        <Navbar />
        
        <main>
          {/* Hero contains Section 1 (Hero) and Section 2 (Trust Bar) */}
          <Hero />

          <ScrollReveal>
            <LiveGamePreview />
          </ScrollReveal>

          <ScrollReveal>
            <Features />
          </ScrollReveal>

          <ScrollReveal>
            <HowItWorks />
          </ScrollReveal>

          <ScrollReveal>
            <PuzzleTraining />
          </ScrollReveal>

          <ScrollReveal>
            <Tournament />
          </ScrollReveal>

          <ScrollReveal>
            <Testimonials />
          </ScrollReveal>

          <ScrollReveal>
            <Pricing />
          </ScrollReveal>

          <ScrollReveal>
            <FAQ />
          </ScrollReveal>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;