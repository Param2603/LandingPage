import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    rating: '1850 Elo',
    avatarText: 'SJ',
    avatarBg: 'from-green-400 to-emerald-600',
    stars: 5,
    text: 'This platform is incredible! The interactive puzzles adapt to my weak spots, and the stockfish AI analysis helps me understand mistakes instantly. My rating went from 1400 to 1850 in six months!'
  },
  {
    name: 'David Miller',
    rating: '2100 Elo',
    avatarText: 'DM',
    avatarBg: 'from-amber-400 to-orange-500',
    stars: 5,
    text: 'Weekly Arena tournaments are extremely competitive. Pairing is lightning-fast, and the site runs lag-free on both my desktop and phone. I highly recommend the Grandmaster tier for coaching!'
  },
  {
    name: 'Elena Rostova',
    rating: '1200 Elo',
    avatarText: 'ER',
    avatarBg: 'from-purple-400 to-indigo-600',
    stars: 5,
    text: 'As a beginner, I was intimidated by online chess. But ChessMaster feels so welcoming! The how-it-works roadmap and daily challenges helped me learn the basics without stress. Best chess site ever.'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-lightBg dark:bg-darkBg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white">
            Loved By Chess Players Worldwide
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Hear from members of our active community. From amateur chess fans to serious tournament competitors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl bg-white dark:bg-darkSurface border border-slate-200/50 dark:border-slate-800/50 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100 dark:text-slate-800/50 group-hover:text-primary/10 transition-colors pointer-events-none" />

              <div className="space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-accent" />
                  ))}
                </div>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm italic relative z-10">
                  "{t.text}"
                </p>
              </div>

              {/* User Metadata */}
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-200/60 dark:border-slate-800/60">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.avatarBg} flex items-center justify-center text-white font-extrabold shadow-md`}>
                  {t.avatarText}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white">{t.name}</h4>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-primary/15 text-primary">
                    {t.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;