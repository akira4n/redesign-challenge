import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-slate-100 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Kolom Kiri: Logo & Deskripsi */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              {/* SVG Logo Kominfo (Representasi) & IGRS */}
              <div className="flex items-center gap-2">
                {/* SVG Lambang Kominfo Sederhana */}
                <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#1E3A8A" />
                  <path d="M50 15 C30 15 20 35 20 50 C20 65 30 85 50 85 C70 85 80 65 80 50 C80 35 70 15 50 15 Z" fill="#3B82F6" opacity="0.3" />
                  <path d="M50 25 L70 50 L50 75 L30 50 Z" fill="#3B82F6" />
                  <circle cx="50" cy="50" r="8" fill="#FFFFFF" />
                </svg>
                {/* SVG IGRS Cubes */}
                <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 10 L75 22.5 L50 35 L25 22.5 Z" fill="#E63946" />
                  <path d="M50 32 L75 44.5 L50 57 L25 44.5 Z" fill="#2A9D8F" />
                  <path d="M50 54 L75 66.5 L50 79 L25 66.5 Z" fill="#3A86FF" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight leading-none">IGRS</span>
                <span className="text-[7px] text-slate-300 font-semibold tracking-wider uppercase">INDONESIA GAME RATING SYSTEM</span>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Membangun ekosistem industri game nasional yang aman, sehat, dan berdaya saing melalui sistem klasifikasi yang transparan.
            </p>
          </div>

          {/* Kolom Tengah: Informasi Kontak */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
              Sekretariat IGRS
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-300">
              <li className="flex gap-3 items-start">
                <MapPin className="text-accent-blue shrink-0 mt-0.5" size={18} />
                <span>
                  Jl. Medan Merdeka Barat No.9, RT.002/RW.003, Gambir, Jakarta Pusat, DKI Jakarta 10110
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="text-accent-blue shrink-0" size={18} />
                <a href="tel:+62811806860" className="hover:text-white transition-colors">
                  +62811806860
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="text-accent-blue shrink-0" size={18} />
                <a href="mailto:helpdesk@igrs.id" className="hover:text-white transition-colors">
                  helpdesk@igrs.id
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom Kanan: Kebijakan / Navigasi Cepat */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
              Tautan Hukum
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-300">
              <li>
                <Link to="/syarat-ketentuan" className="hover:text-white transition-colors">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link to="/kebijakan-privasi" className="hover:text-white transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="hover:text-white transition-colors">
                  Bantuan / Pengaduan
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Hak Cipta */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© IGRS 2026 - Direktorat Jenderal Ekosistem Digital | Kementerian Komunikasi dan Digital RI</p>
          <div className="flex gap-6">
            <a href="https://kominfo.go.id" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              KOMDIGI RI
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Ke Atas
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
