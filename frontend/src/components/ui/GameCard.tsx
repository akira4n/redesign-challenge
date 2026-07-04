import React from 'react';
import { Link } from 'react-router-dom';
import type { IGame } from '../../types';
import { Badge } from './Badge';
import { Card } from './Card';
import { ArrowRight } from 'lucide-react';

interface GameCardProps {
  game: IGame;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden group">
      {/* Container Image */}
      <div className="relative w-full h-48 -mx-6 -mt-6 mb-4 overflow-hidden bg-slate-100">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Rating Badge Kanan Atas */}
        <div className="absolute top-3 right-3 shadow-md">
          <Badge rating={game.ageRating} size="sm" />
        </div>
      </div>

      {/* Konten */}
      <div className="flex-1 flex flex-col">
        <span className="text-xs font-semibold text-primary/70 tracking-wider uppercase mb-1">
          {game.genre}
        </span>
        <h3 className="text-lg font-bold text-slate-800 line-clamp-1 mb-2 group-hover:text-primary transition-colors duration-200">
          {game.title}
        </h3>
        <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 mb-4 flex-1">
          {game.description}
        </p>
        
        {/* Footer Card */}
        <div className="pt-3 border-t border-slate-50 flex items-center justify-between">
          <span className="text-[10px] font-medium text-slate-400">
            Platform: {game.platforms.slice(0, 2).join(', ')}
            {game.platforms.length > 2 ? '...' : ''}
          </span>
          <Link
            to={`/game/${game.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark group/btn transition-colors duration-200"
          >
            Lihat Detail
            <ArrowRight size={14} className="transform group-hover/btn:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </Card>
  );
};
