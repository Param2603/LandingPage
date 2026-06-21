import React from 'react';
import { Globe, Calendar, Cpu, Zap, Trophy, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Play Online',
    description: 'Get paired with chess players of your skill level around the globe in seconds.',
    color: 'text-primary bg-primary/10 border-primary/20'
  },
  {
    icon: Calendar,
    title: 'Daily Matches',
    description: 'Take your time with casual correspondence games that fit perfectly into your busy routine.',
    color: 'text-blue-500 bg-blue-500/10 border-blue-500/20'
  },
  {
    icon: Cpu,
    title: 'AI Analysis',
    description: 'Review your matches instantly with stockfish engine feedback and customized game advice.',
    color: 'text-purple-500 bg-purple-500/10 border-purple-500/20'
  },
  {
    icon: Zap,
    title: 'Chess Puzzles',
    description: 'Sharpen your tactics and pattern recognition with millions of interactive, adaptive puzzles.',
    color: 'text-accent-dark bg-accent/15 border-accent/20'
  },
  {
    icon: Trophy,
    title: 'Tournaments',
    description: 'Join daily arena leagues, Swiss brackets, and special championship events to win trophies.',
    color: 'text-amber-500 bg-amber-500/10 border-amber-500/20'
  },
  {
    icon: BarChart3,
    title: 'Global Rankings',
    description: 'Climb the competitive ladders, compare statistics, and see how you stack up against the best.',
    color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-lightBg dark:bg-darkBg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white">
            Everything You Need To Master Chess
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Whether you are a casual beginner or a seasoned grandmaster, our premium tools and game modes will help you level up fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white dark:bg-darkSurface border border-slate-200/50 dark:border-slate-800/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-left"
              >
                <div className={`inline-flex p-3 rounded-xl border mb-5 transition-transform duration-300 group-hover:scale-110 ${feature.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-550 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;