import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Award, Shield, Timer } from 'lucide-react';

const unicodePieces = {
  r: '♜', n: '♞', b: '♝', q: '♛', k: '♚', p: '♟',
  R: '♖', N: '♘', B: '♗', Q: '♕', K: '♔', P: '♙'
};

const pieceColors = {
  r: 'text-slate-900 dark:text-slate-400', n: 'text-slate-900 dark:text-slate-400', b: 'text-slate-900 dark:text-slate-400',
  q: 'text-slate-900 dark:text-slate-400', k: 'text-slate-900 dark:text-slate-400', p: 'text-slate-900 dark:text-slate-400',
  R: 'text-amber-50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]', N: 'text-amber-50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]', 
  B: 'text-amber-50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]', Q: 'text-amber-50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]', 
  K: 'text-amber-50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]', P: 'text-amber-50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]'
};

const initialBoard = [
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
];

const moves = [
  { from: [6, 4], to: [4, 4], piece: 'P', notation: '1. e4' },
  { from: [1, 4], to: [3, 4], piece: 'p', notation: '1... e5' },
  { from: [7, 6], to: [5, 5], piece: 'N', notation: '2. Nf3' },
  { from: [0, 1], to: [2, 2], piece: 'n', notation: '2... Nc6' },
  { from: [7, 5], to: [3, 1], piece: 'B', notation: '3. Bb5' },
  { from: [0, 6], to: [2, 5], piece: 'n', notation: '3... Nf6' },
  { from: [6, 3], to: [5, 3], piece: 'P', notation: '4. d3' },
  { from: [0, 5], to: [3, 2], piece: 'b', notation: '4... Bc5' },
  { from: [3, 1], to: [2, 2], piece: 'B', capture: true, notation: '5. Bxc6' },
  { from: [1, 3], to: [2, 2], piece: 'p', capture: true, notation: '5... dxc6' },
  { from: [5, 5], to: [3, 4], piece: 'N', capture: true, notation: '6. Nxe5' },
  { from: [2, 5], to: [3, 4], piece: 'n', capture: true, notation: '6... Nxe4' }
];

const LiveGamePreview = () => {
  const [board, setBoard] = useState(initialBoard);
  const [currentMoveIndex, setCurrentMoveIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lastMove, setLastMove] = useState(null);
  const [moveHistory, setMoveHistory] = useState([]);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentMoveIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        
        if (nextIndex >= moves.length) {
          // Reset game loop
          setBoard(initialBoard);
          setLastMove(null);
          setMoveHistory([]);
          return -1;
        }

        const move = moves[nextIndex];
        setBoard((prevBoard) => {
          const newBoard = prevBoard.map(row => [...row]);
          const [fromRow, fromCol] = move.from;
          const [toRow, toCol] = move.to;
          
          newBoard[toRow][toCol] = move.piece;
          newBoard[fromRow][fromCol] = null;
          return newBoard;
        });

        setLastMove(move);
        setMoveHistory(prev => [...prev, move.notation]);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleRestart = () => {
    setBoard(initialBoard);
    setCurrentMoveIndex(-1);
    setLastMove(null);
    setMoveHistory([]);
  };

  return (
    <section id="live-preview" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white">
            Watch Matches Play in Real-Time
          </h2>
          <p className="text-lg text-slate-650 dark:text-slate-400">
            Get a taste of high-level chess matches with our real-time board engine display. Watch strategies unfold move by move.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: The Chessboard */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
              {/* Coordinates: Files (a-h) */}
              <div className="absolute bottom-1 left-16 right-4 flex justify-between text-xs font-bold text-slate-400 select-none">
                {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map(f => <span key={f} className="w-8 sm:w-12 text-center">{f}</span>)}
              </div>
              {/* Coordinates: Ranks (1-8) */}
              <div className="absolute left-2.5 top-8 bottom-12 flex flex-col justify-between text-xs font-bold text-slate-400 select-none">
                {['8', '7', '6', '5', '4', '3', '2', '1'].map(r => <span key={r} className="h-8 sm:h-12 flex items-center">{r}</span>)}
              </div>

              {/* Grid 8x8 */}
              <div className="pl-6 pb-6 grid grid-cols-8 grid-rows-8 border border-slate-300 dark:border-slate-700 rounded-lg overflow-hidden bg-slate-900">
                {board.map((row, rowIndex) =>
                  row.map((piece, colIndex) => {
                    const isDarkSquare = (rowIndex + colIndex) % 2 === 1;
                    const isLastFrom = lastMove && lastMove.from[0] === rowIndex && lastMove.from[1] === colIndex;
                    const isLastTo = lastMove && lastMove.to[0] === rowIndex && lastMove.to[1] === colIndex;

                    return (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center relative select-none transition-colors duration-300 ${
                          isDarkSquare 
                            ? 'bg-secondary/70 dark:bg-secondary/40' 
                            : 'bg-amber-50 dark:bg-slate-750'
                        } ${
                          isLastFrom ? 'ring-4 ring-accent/60 ring-inset bg-accent/20' : ''
                        } ${
                          isLastTo ? 'ring-4 ring-primary/80 ring-inset bg-primary/20' : ''
                        }`}
                      >
                        {piece && (
                          <span className={`text-3xl sm:text-4xl font-semibold transform hover:scale-115 transition-transform duration-200 cursor-grab active:cursor-grabbing ${pieceColors[piece]}`}>
                            {unicodePieces[piece]}
                          </span>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Game Stats and Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-darkSurface border border-slate-200/60 dark:border-slate-800/60 shadow-lg space-y-5">
              {/* Opponent Metadata */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg text-slate-800 dark:text-slate-200">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white">Magnus Carlsen</h4>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400">GM (2882)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-mono text-sm bg-slate-100 dark:bg-slate-850 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-750">
                    <Timer className="w-4 h-4 text-primary" />
                    <span>02:45</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white">Chess Engine AI</h4>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-primary/15 text-primary">Stockfish 16 (3500)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-mono text-sm bg-slate-100 dark:bg-slate-850 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-750">
                    <Timer className="w-4 h-4 text-primary" />
                    <span>03:12</span>
                  </div>
                </div>
              </div>

              {/* Move Log */}
              <div className="space-y-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">Move Log</h5>
                <div className="h-44 overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 font-mono text-sm space-y-1.5 scrollbar-thin scrollbar-thumb-slate-350 dark:scrollbar-thumb-slate-700 scrollbar-track-transparent">
                  {moveHistory.length === 0 ? (
                    <span className="text-slate-400 text-xs italic">Waiting for white to move...</span>
                  ) : (
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {moveHistory.reduce((acc, move, index) => {
                        if (index % 2 === 0) {
                          acc.push({ white: move, black: moveHistory[index + 1] || '' });
                        }
                        return acc;
                      }, []).map((turn, i) => (
                        <React.Fragment key={i}>
                          <span className="text-slate-800 dark:text-slate-200">{turn.white}</span>
                          <span className="text-slate-400 dark:text-slate-500">{turn.black}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-bold py-3 rounded-xl transition-all cursor-pointer"
                >
                  <Play className={`w-4 h-4 ${isPlaying ? 'fill-current' : ''}`} />
                  {isPlaying ? 'Pause Sim' : 'Resume Sim'}
                </button>
                <button
                  onClick={handleRestart}
                  className="inline-flex items-center justify-center gap-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 p-3 rounded-xl transition-all cursor-pointer"
                  title="Reset Game"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveGamePreview;
