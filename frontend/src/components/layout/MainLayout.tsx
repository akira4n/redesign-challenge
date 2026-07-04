import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const MainLayout: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Navigasi */}
      <Navbar />

      {/* Konten Halaman Utama */}
      <main className="flex-1 bg-slate-50">
        <Outlet />
      </main>

      {/* Kaki Halaman */}
      <Footer />
    </div>
  );
};
