import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gameService } from '../services/gameService';
import type { IGame } from '../types';
import { Card } from '../components/ui/Card';
import { RatingBadgeLarge } from '../components/ui/Badge';
import { Monitor, Smartphone, Gamepad2, AlertTriangle, ArrowLeft, Swords, MessageSquare, ShoppingCart, HelpCircle } from 'lucide-react';

export const GameDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<IGame | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setLoading(true);
      gameService.getGameById(id).then((data) => {
        setGame(data || null);
        setLoading(false);
      });
    }
  }, [id]);

  // Helper untuk merender ikon platform
  const getPlatformIcon = (platform: string) => {
    const platLower = platform.toLowerCase();
    if (platLower.includes('pc') || platLower.includes('windows') || platLower.includes('mac')) {
      return <Monitor size={18} className="text-slate-600" />;
    } else if (platLower.includes('ios') || platLower.includes('android') || platLower.includes('phone') || platLower.includes('mobile')) {
      return <Smartphone size={18} className="text-slate-600" />;
    } else {
      return <Gamepad2 size={18} className="text-slate-600" />;
    }
  };

  // Helper untuk merender ikon deskriptor
  const getDescriptorIcon = (descriptor: string) => {
    const descLower = descriptor.toLowerCase();
    if (descLower.includes('kekerasan') || descLower.includes('sadis')) {
      return <Swords size={28} className="text-rose-600" />;
    } else if (descLower.includes('interaksi') || descLower.includes('daring')) {
      return <MessageSquare size={28} className="text-sky-600" />;
    } else if (descLower.includes('pembelian') || descLower.includes('gacha') || descLower.includes('transaksi')) {
      return <ShoppingCart size={28} className="text-amber-600" />;
    } else {
      return <AlertTriangle size={28} className="text-slate-600" />;
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[600px] gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 font-semibold">Memuat detail gim...</p>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[600px] gap-6 text-center max-w-md mx-auto px-4">
        <HelpCircle size={64} className="text-slate-300" />
        <h2 className="text-xl font-bold text-slate-800">Gim Tidak Terdaftar</h2>
        <p className="text-slate-500 text-sm">
          Maaf, data gim dengan identitas tersebut tidak ditemukan dalam basis data IGRS.
        </p>
        <Link to="/game" className="text-primary hover:underline font-bold inline-flex items-center gap-2">
          <ArrowLeft size={16} />
          Kembali ke Daftar Game
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section (Navy) */}
      <section className="bg-navy-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Link */}
          <Link
            to="/game"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={14} />
            KEMBALI KE DAFTAR GIM
          </Link>

          {/* Grid Layout Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Teks Deskripsi */}
            <div className="lg:col-span-8 flex flex-col gap-5">
              <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase self-start text-accent-yellow">
                {game.genre}
              </span>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight">
                {game.title}
              </h1>
              <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-3xl">
                {game.description}
              </p>
            </div>

            {/* Ilustrasi Karakter Kanan (Anime/Manga) */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 drop-shadow-2xl">
                {/* SVG Ilustrasi Karakter Anime Premium */}
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Aura/Glow */}
                  <circle cx="50" cy="50" r="30" fill="#3B82F6" opacity="0.3" filter="blur(10px)" />
                  {/* Hair Back */}
                  <path d="M35 30 C30 20 70 20 65 30 Z" fill="#2E1065" />
                  {/* Face */}
                  <path d="M40 30 C40 28 60 28 60 30 L58 45 C58 52 42 52 42 45 Z" fill="#FED7AA" />
                  {/* Eyes */}
                  <ellipse cx="46" cy="38" rx="2" ry="3" fill="#1E1B4B" />
                  <ellipse cx="54" cy="38" rx="2" ry="3" fill="#1E1B4B" />
                  <circle cx="47" cy="37" r="0.6" fill="#FFFFFF" />
                  <circle cx="55" cy="37" r="0.6" fill="#FFFFFF" />
                  {/* Mouth */}
                  <path d="M47 44 Q50 46 53 44" stroke="#1E1B4B" strokeWidth="1" strokeLinecap="round" />
                  {/* Hair Front */}
                  <path d="M33 28 Q45 22 50 32 Q55 22 67 28 Q50 16 33 28 Z" fill="#4C1D95" />
                  <path d="M48 24 L52 35 L45 35 Z" fill="#4C1D95" />
                  {/* Body & Clothes */}
                  <path d="M45 49 L30 80 L70 80 L55 49 Z" fill="#0369A1" />
                  {/* Scarf / Cape */}
                  <path d="M45 49 C40 49 35 60 30 70 L35 75 Z" fill="#0D9488" />
                  <path d="M55 49 C60 49 65 60 70 70 L65 75 Z" fill="#0D9488" />
                  {/* Detail Armor/Accessories */}
                  <circle cx="50" cy="53" r="3" fill="#FBBF24" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Info Klasifikasi (3 Cards Berdampingan) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Klasifikasi Rating */}
          <Card className="flex flex-col items-center text-center p-6 bg-white border border-slate-100 shadow-md">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Klasifikasi Rating
            </h3>
            <RatingBadgeLarge rating={game.ageRating} />
            <p className="text-xs text-slate-500 mt-4 max-w-[200px]">
              Konten hanya untuk pengguna berusia {game.ageRating} tahun ke atas.
            </p>
          </Card>

          {/* Card 2: Deskriptor Konten */}
          <Card className="flex flex-col items-center text-center p-6 bg-white border border-slate-100 shadow-md">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Deskriptor Konten
            </h3>
            <div className="flex flex-wrap gap-3 items-center justify-center flex-1 my-2">
              {game.contentDescriptors.map((desc, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5 border border-slate-100 p-2.5 rounded-xl bg-slate-50 w-24">
                  {getDescriptorIcon(desc)}
                  <span className="text-[9px] font-bold text-slate-600 uppercase tracking-tight text-center leading-none">
                    {desc}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Pemicu klasifikasi rating usia di atas.
            </p>
          </Card>

          {/* Card 3: Platform */}
          <Card className="flex flex-col items-center p-6 bg-white border border-slate-100 shadow-md">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 text-center">
              Platform Tersedia
            </h3>
            <div className="flex flex-col gap-2.5 w-full flex-1 justify-center">
              {game.platforms.map((plat, idx) => (
                <div key={idx} className="flex items-center gap-3 px-3 py-2 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700">
                  {getPlatformIcon(plat)}
                  <span>{plat}</span>
                </div>
              ))}
            </div>
          </Card>

        </div>
      </section>

      {/* 3. Analisis Detail Deskriptor Konten (2x2 Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-12">
        <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight mb-8">
          Analisis Detail Deskriptor Konten
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {game.ratingAnalysis.map((item, idx) => (
            <Card key={idx} className="border-l-4 border-l-primary p-6 shadow-sm flex flex-col gap-2 bg-white">
              <h3 className="text-base font-bold text-slate-800">
                {item.title}
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. Cuplikan Gameplay (3 Screens) */}
      {game.screenshots && game.screenshots.length > 0 && (
        <section className="bg-slate-100 py-16 px-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight mb-8">
              Cuplikan Gameplay
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {game.screenshots.map((screen, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200/50 aspect-video bg-slate-200">
                  <img
                    src={screen}
                    alt={`Cuplikan ${game.title} ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
};
