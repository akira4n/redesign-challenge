import React from 'react';
import { Link } from 'react-router-dom';
import type { IGame } from '../../types';
import { Badge } from './Badge';

interface GameCardProps {
  game: IGame;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 hover:shadow-md transition-all duration-300 flex flex-col h-full group">
      
      {/* Gambar Gim landscape */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-3">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Rating Badge Kanan Atas */}
        <div className="absolute top-2 right-2 shadow-sm">
          <Badge rating={game.ageRating} size="sm" />
        </div>
      </div>

      {/* Konten Judul & Genre */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="mb-4">
          <h3 className="text-sm font-bold text-slate-800 line-clamp-1 mb-0.5 group-hover:text-primary transition-colors">
            {game.title}
          </h3>
          <span className="text-[11px] text-slate-400 font-medium">
            {game.genre}
          </span>
        </div>

        {/* Tombol View Details Full Width */}
        <Link
          to={`/game/${game.id}`}
          className="w-full py-2 border border-slate-200 hover:border-slate-300 rounded-lg text-[11px] font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-50 text-center transition-all duration-200"
        >
          View Details
        </Link>
      </div>

    </div>
  );
};
