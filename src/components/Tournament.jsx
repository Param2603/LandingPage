import React from 'react';
import { Trophy, Timer, Users, Award, ShieldAlert } from 'lucide-react';

const tournaments = [
  {
    title: 'Weekly Arena',
    status: 'Live',
    statusColor: 'bg-red-500 text-white animate-pulse',
    timeControl: '3 min + 2s',
    players: '12,450',
    prize: '$500 USD',
    iconColor: 'text-amber-500 bg-amber-500/10',
    leaderboard: [
      { rank: 1, name: 'HikaruN', rating: 2850, points: 42 },
      { rank: 2, name: 'ChessBrah', rating: 2710, points: 38 },
      { rank: 3, name: 'BotezLive', rating: 2420, points: 32 }
    ]
  },
  {
    title: 'Rapid Championship',
    status: 'Starts in 1h',
    statusColor: 'bg-primary text-white',
    timeControl: '10 min + 5s',
    players: '8,210',
    prize: '$1,200 USD',
    iconColor: 'text-blue-500 bg-blue-500/10',
    leaderboard: [
      { rank: 1, name: 'LevyRozman', rating: 2650, points: 0 },
      { rank: 2, name: 'AndreaB', rating: 2310, points: 0 },
      { rank: 3, name: 'AlexandraB', rating: 2400, points: 0 }
    ]
  },
  {
    title: 'Blitz Battle',
    status: 'Registering',
    statusColor: 'bg-slate-500 text-white dark:bg-slate-700',
    timeControl: '5 min',
    players: '4,890',
    prize: 'Custom Trophy',
    iconColor: 'text-purple-500 bg-purple-500/10',
    leaderboard: [
      { rank: 1, name: 'DanielNaroditsky', rating: 2790, points: 0 },
      { rank: 2, name: 'EricHansen', rating: 2690, points: 0 },
      { rank: 3, name: 'GingerGM', rating: 2510, points: 0 }
    ]
  }
];

const Tournament = () => {
  return (
    <section id="tournaments" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white">
            Compete in Worldwide Tournaments
          </h2>
          <p className="text-lg text-slate-650 dark:text-slate-400">
            Join hourly arenas, multi-round Swiss events, or weekly trophy tournaments. Climb the ranks and claim your prizes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tournaments.map((t, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between p-6 rounded-2xl bg-slate-50 dark:bg-darkSurface border border-slate-200/50 dark:border-slate-800/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-left"
            >
              {/* Card Header */}
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl ${t.iconColor}`}>
                    <Trophy className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${t.statusColor}`}>
                    {t.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-primary transition-colors">
                  {t.title}
                </h3>

                {/* Tournament Stats */}
                <div className="grid grid-cols-3 gap-4 border-b border-slate-200/70 dark:border-slate-800 pb-5 mb-5 text-sm">
                  <div>
                    <span className="text-slate-400 block text-xs font-medium mb-1">Format</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1">
                      <Timer className="w-3.5 h-3.5 text-primary" />
                      {t.timeControl}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs font-medium mb-1">Players</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-secondary" />
                      {t.players}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs font-medium mb-1">Prize Pool</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-accent-dark dark:text-accent" />
                      {t.prize}
                    </span>
                  </div>
                </div>

                {/* Leaderboard segment */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-2">Top Standing</h4>
                  {t.leaderboard.map((player) => (
                    <div
                      key={player.rank}
                      className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/40 text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-5 h-5 flex items-center justify-center font-bold rounded-md ${
                          player.rank === 1 ? 'bg-amber-400 text-slate-900' :
                          player.rank === 2 ? 'bg-slate-300 text-slate-900' :
                          'bg-amber-600 text-white'
                        }`}>
                          {player.rank}
                        </span>
                        <div>
                          <div className="font-bold text-slate-800 dark:text-slate-200">{player.name}</div>
                          <div className="text-xs text-slate-400">Rating: {player.rating}</div>
                        </div>
                      </div>
                      {t.status === 'Live' && (
                        <span className="font-mono font-bold text-primary">{player.points} pts</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full mt-6 bg-white hover:bg-primary hover:text-white dark:bg-slate-900 dark:hover:bg-primary border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-primary text-slate-700 dark:text-slate-250 font-bold py-2.5 rounded-xl transition-all duration-300 cursor-pointer">
                {t.status === 'Live' ? 'Join Arena' : 'Register Now'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tournament;