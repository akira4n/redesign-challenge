import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Profil', path: '/profil' },
    { name: 'Game', path: '/game' },
    { name: 'Informasi Rating', path: '/informasi-rating' },
    { name: 'Kontak', path: '/kontak' }
  ];

  return (
    <nav className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-100 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Kiri */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* SVG Logo Stacked Cubes 3D */}
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:scale-105 transition-transform duration-300">
              {/* Cube 1 - Top (Red) */}
              <path d="M50 10 L75 22.5 L50 35 L25 22.5 Z" fill="#E63946" />
              <path d="M25 22.5 L50 35 L50 48 L25 35.5 Z" fill="#C12735" />
              <path d="M50 35 L75 22.5 L75 35.5 L50 48 Z" fill="#9A1D2A" />

              {/* Cube 2 - Middle (Green) */}
              <path d="M50 32 L75 44.5 L50 57 L25 44.5 Z" fill="#2A9D8F" />
              <path d="M25 44.5 L50 57 L50 70 L25 57.5 Z" fill="#1F7A6E" />
              <path d="M50 57 L75 44.5 L75 57.5 L50 70 Z" fill="#165950" />

              {/* Cube 3 - Bottom (Blue) */}
              <path d="M50 54 L75 66.5 L50 79 L25 66.5 Z" fill="#3A86FF" />
              <path d="M25 66.5 L50 79 L50 92 L25 79.5 Z" fill="#1C5ECA" />
              <path d="M50 79 L75 66.5 L75 79.5 L50 92 Z" fill="#13479B" />
            </svg>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-slate-800 tracking-tight leading-none group-hover:text-primary transition-colors">
                IGRS
              </span>
              <span className="text-[8px] font-medium text-slate-400 tracking-widest uppercase">
                Indonesia Game Rating
              </span>
            </div>
          </Link>

          {/* Menu Tengah (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-primary border-b-2 border-primary py-1.5'
                      : 'text-slate-500 hover:text-slate-800 py-1.5'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Tombol Masuk (Desktop) */}
          <div className="hidden md:block">
            <Button variant="primary" size="md">
              Masuk
            </Button>
          </div>

          {/* Hamburger Menu Button (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary p-2 rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 py-4 px-4 flex flex-col gap-3 shadow-inner">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-semibold px-3 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary/5 text-primary'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <hr className="border-slate-100 my-2" />
          <Button variant="primary" size="md" className="w-full" onClick={() => setIsOpen(false)}>
            Masuk
          </Button>
        </div>
      )}
    </nav>
  );
};
