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
      <div className="relative h-44 -mx-6 -mt-6 mb-4 overflow-hidden bg-slate-100">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
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
