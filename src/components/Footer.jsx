import React from 'react';
import { Crown, Twitter, Youtube, Github, MessageSquare, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and Brand description */}
          <div className="lg:col-span-2 space-y-6 text-left">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="p-2 bg-primary rounded-lg text-white shadow-md shadow-primary/30">
                <Crown className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xl font-bold text-white tracking-wide">
                ChessMaster
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              The ultimate online arena to play, learn, analyze, and master the game of chess. Join a global community of millions of chess enthusiasts.
            </p>
            {/* Social Sharing Icons */}
            <div className="flex gap-4 pt-2">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: MessageSquare, href: '#', label: 'Discord' },
                { icon: Youtube, href: '#', label: 'YouTube' },
                { icon: Github, href: '#', label: 'GitHub' }
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="p-2.5 bg-slate-850 hover:bg-primary rounded-xl text-slate-400 hover:text-white transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column 1: Play */}
          <div className="space-y-4 text-left">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase">Play</h4>
            <ul className="space-y-2.5 text-sm">
              {['Play Online', 'Daily Matches', 'Tournaments', 'Leaderboards', 'Live Stream'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column 2: Learn */}
          <div className="space-y-4 text-left">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase">Learn</h4>
            <ul className="space-y-2.5 text-sm">
              {['Chess Rules', 'Solve Puzzles', 'Video Lessons', 'AI Analysis', 'Articles'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4 text-left">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase">Newsletter</h4>
            <p className="text-xs leading-relaxed text-slate-400">
              Subscribe to get chess puzzles, tactics, articles, and tournament notifications weekly.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-slate-850 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-secondary text-white p-2.5 rounded-xl transition-all hover:scale-105 shadow-md shadow-primary/20 cursor-pointer"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom segment */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} ChessMaster Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;