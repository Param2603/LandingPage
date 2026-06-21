import React from 'react';
import { UserPlus, Sword, Search, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Create Account',
    description: 'Register a free profile in seconds. Customize your board layout, select your initial skill rating, and set your preferences.',
    badge: 'Step 1'
  },
  {
    icon: Sword,
    title: 'Play Match',
    description: 'Get matched instantly with a player at your level, or start a match with friends. We support Blitz, Bullet, Rapid, and Daily.',
    badge: 'Step 2'
  },
  {
    icon: Search,
    title: 'Analyze Games',
    description: 'Use our robust AI analysis engine to go through your games move-by-move. Learn where you blundered and find the best alternatives.',
    badge: 'Step 3'
  },
  {
    icon: TrendingUp,
    title: 'Improve Rating',
    description: 'Watch your rating grow! Track your statistics, earn custom achievements, and unlock new puzzle levels as your game improves.',
    badge: 'Step 4'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white">
            Your Journey To Chess Mastery
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Getting started is incredibly quick. Follow these four simple phases to build your skill and climb the global ladder.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 md:border-l-0 border-slate-200 dark:border-slate-800 max-w-4xl mx-auto pl-8 md:pl-0">
          
          {/* Vertical Center Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

          <div className="space-y-16 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative flex flex-col md:flex-row md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node Icon */}
                  <div className="absolute -left-[50px] md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-primary border-4 border-white dark:border-slate-900 flex items-center justify-center text-white shadow-lg shadow-primary/30 z-10">
                    <Icon className="w-4 h-4 fill-current" />
                  </div>

                  {/* Step Card Content Container */}
                  <div className="w-full md:w-[45%]">
                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-darkSurface border border-slate-200/50 dark:border-slate-800/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] text-left">
                      <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary dark:text-primary mb-3">
                        {step.badge}
                      </span>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-450 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop Alignment */}
                  <div className="hidden md:block w-[10%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;