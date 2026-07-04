import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';
import { GamesPage } from './pages/GamesPage';
import { GameDetailPage } from './pages/GameDetailPage';
import { RatingInfoPage } from './pages/RatingInfoPage';
import { ContactPage } from './pages/ContactPage';
import { BlogDetailPage } from './pages/BlogDetailPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Utama yang membungkus navigasi navbar & footer */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="profil" element={<ProfilePage />} />
          <Route path="game" element={<GamesPage />} />
          <Route path="game/:id" element={<GameDetailPage />} />
          <Route path="informasi-rating" element={<RatingInfoPage />} />
          <Route path="kontak" element={<ContactPage />} />
          <Route path="blog/:id" element={<BlogDetailPage />} />
          
          {/* Fallback routing */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
