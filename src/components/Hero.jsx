import React from 'react';
import { Play, Tv, Users, Flame, Globe } from 'lucide-react';

// Premium Custom Inline Chess Piece SVGs
const KingSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v3M10.5 3.5h3" />
    <path d="M5 21h14M6 18h12M18 18l-1.5-7.5L12 14.5l-4.5-4L6 18" />
    <path d="M12 14.5V18" />
  </svg>
);

const QueenSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 21h14M6 18h12" />
    <path d="M18 18.5l-1-10.5L12 13 7 8 6 18.5" />
    <circle cx="5" cy="8" r="1" fill="currentColor" />
    <circle cx="12" cy="8" r="1" fill="currentColor" />
    <circle cx="19" cy="8" r="1" fill="currentColor" />
  </svg>
);

const KnightSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 21h14M6 18h12" />
    <path d="M6 18c0-5 3.5-9.5 8-9.5s7.5 3 6.5 8C20 17 19 18 19 18H6z" />
    <path d="M14 8.5C14 6 12.5 3 9 3c-2.5 0-4 2.5-4 4.5S6.5 13 8.5 13.5l1.5.5M8 9.5a1 1 0 100-2 1 1 0 000 2z" />
  </svg>
);

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between bg-lightBg dark:bg-darkBg transition-colors duration-300 overflow-hidden pt-12 pb-8">
      {/* Background blobs for premium glow */}
      <div className="absolute top-20 left-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="md:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary dark:text-primary font-semibold text-sm border border-primary/20">
              <span className="flex h-2.5 w-2.5 rounded-full bg-primary animate-ping" />
              Over 1,000,000 matches active now
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-800 dark:text-white leading-[1.1]">
              Play Chess. <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Improve Faster.
              </span> <br />
              Win More Games.
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-350 max-w-xl leading-relaxed">
              Challenge players worldwide, solve chess puzzles, get engine-powered AI analysis, and boost your rating. Join the ultimate online chess battleground.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                onClick={() => document.getElementById('live-preview')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-secondary text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-primary/30 hover:shadow-secondary/45 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <Play className="w-5 h-5 fill-current" />
                Play Free
              </button>
              
              <button 
                onClick={() => document.getElementById('tournaments')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-bold text-lg px-8 py-4 rounded-xl shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <Tv className="w-5 h-5" />
                Watch Live Match
              </button>
            </div>
          </div>

          {/* Right Graphical Column (Animated Chess Board) */}
          <div className="md:col-span-5 relative flex justify-center items-center">
            {/* The Chess Board Graphic */}
            <div className="w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-300 dark:border-slate-800 bg-slate-900 grid grid-cols-8 grid-rows-8 relative group">
              {Array.from({ length: 64 }).map((_, i) => {
                const row = Math.floor(i / 8);
                const col = i % 8;
                const isDark = (row + col) % 2 === 1;
                return (
                  <div
                    key={i}
                    className={`w-full h-full transition-colors duration-500 ${
                      isDark 
                        ? 'bg-secondary/70 dark:bg-secondary/40' 
                        : 'bg-amber-50 dark:bg-slate-700/30'
                    }`}
                  />
                );
              })}

              {/* Floating Pieces Overlay */}
              
              {/* King - Floating on Left side */}
              <div className="absolute top-[20%] left-[15%] w-16 h-16 bg-white/10 dark:bg-slate-900/40 backdrop-blur-md rounded-xl border border-white/20 dark:border-slate-700/30 flex items-center justify-center shadow-lg animate-float text-accent drop-shadow-[0_4px_12px_rgba(255,213,74,0.3)]">
                <KingSVG className="w-10 h-10" />
              </div>

              {/* Queen - Floating in Middle right */}
              <div className="absolute top-[35%] right-[10%] w-16 h-16 bg-white/10 dark:bg-slate-900/40 backdrop-blur-md rounded-xl border border-white/20 dark:border-slate-700/30 flex items-center justify-center shadow-lg animate-bounce-slow text-primary drop-shadow-[0_4px_12px_rgba(129,182,76,0.3)]">
                <QueenSVG className="w-10 h-10" />
              </div>

              {/* Knight - Floating in Lower Left center */}
              <div className="absolute bottom-[20%] left-[30%] w-16 h-16 bg-white/10 dark:bg-slate-900/40 backdrop-blur-md rounded-xl border border-white/20 dark:border-slate-700/30 flex items-center justify-center shadow-lg animate-pulse-slow text-white dark:text-slate-200 drop-shadow-[0_4px_12px_rgba(255,255,255,0.25)]">
                <KnightSVG className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-darkSurface shadow-md dark:shadow-slate-950/30 border border-slate-200/40 dark:border-slate-800/40 transition-all duration-300 hover:scale-[1.03]">
            <div className="p-3.5 bg-primary/10 rounded-xl text-primary">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <div className="text-3xl font-black text-slate-800 dark:text-white">50M+</div>
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Players Registered</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-darkSurface shadow-md dark:shadow-slate-950/30 border border-slate-200/40 dark:border-slate-800/40 transition-all duration-300 hover:scale-[1.03]">
            <div className="p-3.5 bg-accent/10 rounded-xl text-accent-dark dark:text-accent">
              <Flame className="w-8 h-8" />
            </div>
            <div>
              <div className="text-3xl font-black text-slate-800 dark:text-white">200M+</div>
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Games Played Monthly</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-darkSurface shadow-md dark:shadow-slate-950/30 border border-slate-200/40 dark:border-slate-800/40 transition-all duration-300 hover:scale-[1.03]">
            <div className="p-3.5 bg-secondary/10 rounded-xl text-secondary">
              <Globe className="w-8 h-8" />
            </div>
            <div>
              <div className="text-3xl font-black text-slate-800 dark:text-white">150+</div>
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Countries Represented</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;