import React from 'react';
import { Link } from 'react-router-dom';
import type { IBlog } from '../../types';
import { Card } from './Card';
import { Calendar, User } from 'lucide-react';

interface BlogCardProps {
  blog: IBlog;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden group">
      {/* Container Image */}
      <div className="relative w-full h-44 -mx-6 -mt-6 mb-4 overflow-hidden bg-gradient-to-tr from-amber-100 to-rose-100 flex items-center justify-center">
        {/* Desain Tanda "WORK IN PROGRESS" Gantung */}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300 z-10" />
        
        {/* Tanda Papan Kuning WIP */}
        <div className="relative flex flex-col items-center justify-center bg-amber-400 border-[3px] border-amber-600 rounded-xl p-3 shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300 w-3/4 max-w-[200px] z-20">
          {/* Tali Gantung */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-6 border-t-2 border-x-2 border-slate-600 rounded-t-full pointer-events-none"></div>
          {/* Bulatan Gantungan */}
          <div className="w-1.5 h-1.5 bg-slate-700 rounded-full absolute -top-1 left-2"></div>
          <div className="w-1.5 h-1.5 bg-slate-700 rounded-full absolute -top-1 right-2"></div>
          
          <span className="text-[10px] font-black uppercase tracking-widest text-amber-950 mb-0.5">IGRS</span>
          <span className="text-sm font-black text-amber-950 text-center leading-none tracking-tight">WORK IN PROGRESS</span>
        </div>
      </div>

      {/* Konten */}
      <div className="flex-1 flex flex-col">
        {/* Badge Pengumuman */}
        <div className="mb-2">
          <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold text-primary bg-primary/10 rounded-full uppercase tracking-wider">
            {blog.badge}
          </span>
        </div>

        {/* Judul */}
        <h3 className="text-base font-bold text-slate-800 line-clamp-2 mb-3 group-hover:text-primary transition-colors duration-200">
          <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
        </h3>

        {/* Metadata */}
        <div className="mt-auto pt-3 border-t border-slate-50 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User size={12} />
            <span>{blog.author}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
