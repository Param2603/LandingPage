import React, { useState } from 'react';
import { Lightbulb, CheckCircle2, RotateCcw, Zap } from 'lucide-react';

const PuzzleTraining = () => {
  const [rookPos, setRookPos] = useState([7, 3]); // Starts at d1 (row 7, col 3)
  const [solved, setSolved] = useState(false);
  const [animating, setAnimating] = useState(false);

  // Setup puzzle pieces map
  // Black King at e8 [0, 4]
  // Black Pawns at f7 [1, 5], g7 [1, 6], h7 [1, 7]
  // White Rook starting at d1 [7, 3] or d8 [0, 3] on solve
  const getPiece = (row, col) => {
    if (row === 0 && col === 4) return { char: '♚', color: 'text-slate-900 dark:text-slate-400' };
    if (row === 1 && col === 5) return { char: '♟', color: 'text-slate-900 dark:text-slate-400' };
    if (row === 1 && col === 6) return { char: '♟', color: 'text-slate-900 dark:text-slate-400' };
    if (row === 1 && col === 7) return { char: '♟', color: 'text-slate-900 dark:text-slate-400' };
    if (row === rookPos[0] && col === rookPos[1]) return { char: '♖', color: 'text-amber-50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)] font-bold' };
    return null;
  };

  const handleSolve = () => {
    if (solved || animating) return;
    
    setAnimating(true);
    // Slide rook to d8 [0, 3]
    setTimeout(() => {
      setRookPos([0, 3]);
      setSolved(true);
      setAnimating(false);
    }, 800);
  };

  const handleReset = () => {
    setRookPos([7, 3]);
    setSolved(false);
    setAnimating(false);
  };

  return (
    <section id="puzzles" className="py-20 bg-lightBg dark:bg-darkBg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white">
            Daily Tactics & Puzzle Training
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Train your brain with interactive chess scenarios. Find the absolute best sequence to gain material or checkmate your opponent.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          {/* Left Column: Puzzle Board Card */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[380px] bg-white dark:bg-darkSurface rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-xl overflow-hidden p-6 relative">
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 dark:text-amber-400">
                  Rating: 1450
                </span>
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-450 flex items-center gap-1">
                  <Lightbulb className="w-4 h-4 text-accent" />
                  White to Move
                </span>
              </div>

              {/* 8x8 Board Container */}
              <div className="grid grid-cols-8 grid-rows-8 border-2 border-slate-350 dark:border-slate-800 rounded-lg overflow-hidden bg-slate-900 relative">
                {Array.from({ length: 64 }).map((_, i) => {
                  const r = Math.floor(i / 8);
                  const c = i % 8;
                  const isDark = (r + c) % 2 === 1;
                  const piece = getPiece(r, c);

                  // Highlights
                  const isCheckmateKing = solved && r === 0 && c === 4;
                  const isRookTarget = solved && r === 0 && c === 3;
                  const isRookStart = !solved && r === 7 && c === 3;

                  return (
                    <div
                      key={i}
                      className={`aspect-square flex items-center justify-center relative select-none transition-all duration-300 ${
                        isDark 
                          ? 'bg-secondary/75 dark:bg-secondary/40' 
                          : 'bg-amber-50 dark:bg-slate-750'
                      } ${
                        isCheckmateKing ? 'bg-red-500/50 animate-pulse ring-4 ring-red-500 ring-inset' : ''
                      } ${
                        isRookTarget ? 'bg-primary/30 ring-4 ring-primary ring-inset' : ''
                      } ${
                        isRookStart && animating ? 'bg-yellow-500/35' : ''
                      }`}
                    >
                      {piece && (
                        <span 
                          className={`text-2xl sm:text-3xl transition-all duration-700 ease-out ${piece.color} ${
                            animating && piece.char === '♖' ? 'scale-125 -translate-y-full opacity-60' : ''
                          }`}
                        >
                          {piece.char}
                        </span>
                      )}
                    </div>
                  );
                })}

                {/* Animated overlay on Solve */}
                {solved && (
                  <div className="absolute inset-0 bg-primary/10 backdrop-blur-[1px] flex items-center justify-center animate-fade-in">
                    <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-2xl border border-primary/20 flex flex-col items-center gap-2 transform animate-slide-up">
                      <CheckCircle2 className="w-12 h-12 text-primary animate-bounce" />
                      <div className="text-lg font-extrabold text-slate-800 dark:text-white">Puzzle Solved!</div>
                      <div className="text-xs font-semibold text-primary flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 fill-current" />
                        +15 Tactical Rating
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions & Action */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-2">
                Find the Best Move
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Black's king is locked behind their own wall of pawns on the back rank. Spot the crushing tactical blow that forces an immediate checkmate.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-darkSurface border border-slate-200/60 dark:border-slate-800/60 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-10 bg-primary rounded-full" />
                <div>
                  <div className="text-sm font-semibold text-slate-400">Puzzle Challenge</div>
                  <div className="font-bold text-slate-700 dark:text-slate-200">Back Rank Weakness</div>
                </div>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200/40 dark:border-slate-800/40">
                <strong>Clue:</strong> Look at your rook's open file. Is there a way to penetrate the 8th rank and block the king?
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleSolve}
                disabled={solved || animating}
                className="flex-1 bg-primary hover:bg-secondary disabled:opacity-50 text-white font-bold px-6 py-4 rounded-xl shadow-lg shadow-primary/30 hover:shadow-secondary/45 transition-all duration-300 hover:scale-105 cursor-pointer disabled:pointer-events-none"
              >
                {animating ? 'Solving...' : solved ? 'Solved!' : 'Solve Puzzle'}
              </button>
              
              {solved && (
                <button
                  onClick={handleReset}
                  className="bg-slate-200 hover:bg-slate-350 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold px-5 py-4 rounded-xl transition-all hover:scale-105 cursor-pointer"
                  title="Reset Puzzle"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PuzzleTraining;