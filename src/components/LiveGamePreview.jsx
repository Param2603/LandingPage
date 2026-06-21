import React, { useState, useEffect } from 'react';
import { Eye, Users, ChevronRight, Trophy } from 'lucide-react';

const initialMatches = [
  {
    id: 1,
    tournament: "FIDE World Championship Final",
    white: { name: "Magnus Carlsen", title: "GM", rating: 2882 },
    black: { name: "Hikaru Nakamura", title: "GM", rating: 2875 },
    timeControl: "3+2 Blitz",
    moves: 38,
    spectators: "14.2K",
    baseEval: 54, // percentage representing white's advantage
  },
  {
    id: 2,
    tournament: "Champions Chess Tour Grand Final",
    white: { name: "Alireza Firouzja", title: "GM", rating: 2805 },
    black: { name: "Fabiano Caruana", title: "GM", rating: 2804 },
    timeControl: "15+10 Rapid",
    moves: 24,
    spectators: "8.4K",
    baseEval: 50,
  },
  {
    id: 3,
    tournament: "Candidates Tournament 2026",
    white: { name: "Gukesh D", title: "GM", rating: 2764 },
    black: { name: "Ian Nepomniachtchi", title: "GM", rating: 2758 },
    timeControl: "90+30 Classical",
    moves: 42,
    spectators: "11.1K",
    baseEval: 42,
  }
];

const LiveGamePreview = () => {
  const [matches, setMatches] = useState(initialMatches);

  // Fluctuates evaluations slightly in real-time to represent engine analysis updating (math for changing bar)
  useEffect(() => {
    const interval = setInterval(() => {
      setMatches(prevMatches =>
        prevMatches.map(match => {
          // Fluctuate the evaluation by -3% to +3%
          const change = Math.floor(Math.random() * 7) - 3;
          let newEval = match.baseEval + change;
          // Constrain between 10% and 90%
          newEval = Math.max(15, Math.min(85, newEval));
          
          // Randomly increment moves by 0 or 1
          const moveIncrement = Math.random() > 0.7 ? 1 : 0;

          return {
            ...match,
            baseEval: newEval,
            moves: match.moves + moveIncrement
          };
        })
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const getEvalText = (percentage) => {
    const score = ((percentage - 50) / 10).toFixed(1);
    if (score > 0) return `+${score}`;
    if (score < 0) return `${score}`;
    return "Even";
  };

  return (
    <section id="live-preview" className="py-20 bg-lightBg dark:bg-darkBg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-500 dark:text-red-400 font-bold text-xs uppercase tracking-wider border border-red-500/20">
            <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-ping" />
            Live Arena
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white">
            Spectate Grandmaster Matches
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Watch real-time tactical battles, track computer engine evaluation, and learn from top-tier chess games currently in progress.
          </p>
        </div>

        {/* Live Match Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {matches.map((match) => {
            const isWhiteLeading = match.baseEval > 50;
            const isBlackLeading = match.baseEval < 50;
            const evalText = getEvalText(match.baseEval);

            return (
              <div 
                key={match.id}
                className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-darkSurface border border-slate-200/60 dark:border-slate-800/60 shadow-lg hover:shadow-xl dark:shadow-slate-950/20 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-3 mb-4">
                  <span className="text-xs font-semibold text-slate-450 dark:text-slate-450 truncate max-w-[150px] flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-amber-500" />
                    {match.tournament}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-450 bg-slate-50 dark:bg-slate-900 px-2 py-1 rounded-md border border-slate-100 dark:border-slate-800">
                    <Eye className="w-3.5 h-3.5 text-primary" />
                    {match.spectators}
                  </div>
                </div>

                {/* Players */}
                <div className="space-y-3 mb-5">
                  {/* White */}
                  <div className="flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/30 p-2.5 rounded-lg border border-slate-100/50 dark:border-slate-800/30">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-white border border-slate-400 shadow-sm" />
                      <span className="font-bold text-slate-800 dark:text-white text-sm sm:text-base">{match.white.name}</span>
                      <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-primary/10 text-primary uppercase">{match.white.title}</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 font-mono">{match.white.rating}</span>
                  </div>

                  {/* VS Divider */}
                  <div className="flex items-center justify-center text-[10px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-widest">
                    <span className="h-px bg-slate-100 dark:bg-slate-800/50 flex-grow mr-2" />
                    VS
                    <span className="h-px bg-slate-100 dark:bg-slate-800/50 flex-grow ml-2" />
                  </div>

                  {/* Black */}
                  <div className="flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/30 p-2.5 rounded-lg border border-slate-100/50 dark:border-slate-800/30">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700 shadow-sm" />
                      <span className="font-bold text-slate-800 dark:text-white text-sm sm:text-base">{match.black.name}</span>
                      <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-primary/10 text-primary uppercase">{match.black.title}</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 font-mono">{match.black.rating}</span>
                  </div>
                </div>

                {/* Engine Evaluation Bar */}
                <div className="space-y-1.5 mb-5">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-400 dark:text-slate-500">Engine Eval</span>
                    <span className={`font-mono text-xs px-2 py-0.5 rounded font-extrabold ${
                      isWhiteLeading 
                        ? 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300' 
                        : isBlackLeading 
                        ? 'bg-slate-900 text-white dark:bg-slate-950 dark:text-slate-200 border border-slate-800' 
                        : 'bg-primary/10 text-primary'
                    }`}>
                      {evalText}
                    </span>
                  </div>
                  {/* Evaluation Split Bar */}
                  <div className="relative w-full h-3 rounded-full overflow-hidden flex border border-slate-200/50 dark:border-slate-800 bg-slate-900 shadow-inner">
                    <div 
                      className="bg-slate-100 dark:bg-slate-250 transition-all duration-1000 ease-out border-r border-slate-300 dark:border-slate-600"
                      style={{ width: `${match.baseEval}%` }}
                    />
                    <div className="flex-grow bg-slate-800 dark:bg-slate-950" />
                  </div>
                </div>

                <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/60 text-xs text-slate-450 dark:text-slate-450">
                  <span className="font-semibold">Move {match.moves} • {match.timeControl}</span>
                  <button className="inline-flex items-center gap-0.5 text-primary hover:text-secondary font-bold transition-all cursor-pointer hover:translate-x-0.5">
                    Watch Live
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LiveGamePreview;
