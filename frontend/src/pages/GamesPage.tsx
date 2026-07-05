import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from '../components/ui/SearchBar';
import { AgeFilterPills } from '../components/ui/AgeFilterPills';
import { GameCard } from '../components/ui/GameCard';
import { gameService } from '../services/gameService';
import type { IGame } from '../types';
import { HelpCircle } from 'lucide-react';

export const GamesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [games, setGames] = useState<IGame[]>([]);
  const [filteredGames, setFilteredGames] = useState<IGame[]>([]);
  
  // State pencarian dan penyaringan
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
  const [activeAgeFilter, setActiveAgeFilter] = useState('Semua');

  // Muat semua game pada awal perintisan
  useEffect(() => {
    gameService.getGames().then((data) => {
      setGames(data);
    });
  }, []);

  // Update nilai input pencarian ketika URL berubah
  useEffect(() => {
    setSearchTerm(searchParams.get('q') || '');
  }, [searchParams]);

  // Efek penyaringan real-time
  useEffect(() => {
    let result = games;

    // Filter berdasarkan teks pencarian (case-insensitive)
    if (searchTerm.trim()) {
      result = result.filter(
        (game) =>
          game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          game.genre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter berdasarkan rating usia
    if (activeAgeFilter !== 'Semua') {
      result = result.filter((game) => game.ageRating === activeAgeFilter);
    }

    // COMMENTED OUT: Kode mock replikasi Genshin Impact
    // Jika ingin menampilkan data real dari database, biarkan bagian ini dinonaktifkan.
    /*
    if (activeAgeFilter === 'Semua' && !searchTerm.trim() && games.length > 0) {
      const genshin = games.find(g => g.id === 'genshin-impact');
      if (genshin) {
        const replicated: IGame[] = Array(16).fill(genshin).map((item, index) => ({
          ...item,
          id: `${item.id}-page-dup-${index}`
        }));
        setFilteredGames(replicated);
        return;
      }
    }
    */

    setFilteredGames(result);
  }, [games, searchTerm, activeAgeFilter]);

  // Handler ketika pencarian disubmit
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    if (value.trim()) {
      setSearchParams({ q: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Header Banner Halaman Game (Latar Putih Bersih) */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-6">
          <div className="w-full max-w-2xl mx-auto">
            <SearchBar
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Periksa rating gim disini..."
            />
          </div>
          
          {/* Pills Filter Usia */}
          <div className="flex justify-center">
            <AgeFilterPills
              activeFilter={activeAgeFilter}
              onFilterChange={setActiveAgeFilter}
            />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 mb-16">
        
        {/* Grid Responsive */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredGames.map((game, idx) => (
              <div key={`${game.id}-${idx}`}>
                <GameCard game={game} />
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-16 text-center max-w-lg mx-auto flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
              <HelpCircle size={32} />
            </div>
            <h3 className="text-lg font-bold text-slate-800">Gim Tidak Ditemukan</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Kami tidak dapat menemukan hasil untuk pencarian Anda. Silakan coba kata kunci lain atau pilih filter usia yang berbeda.
            </p>
          </div>
        )}

      </section>

    </div>
  );
};
