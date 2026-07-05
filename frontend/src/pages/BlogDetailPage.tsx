import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gameService } from '../services/gameService';
import type { IBlog } from '../types';
import { Card } from '../components/ui/Card';
import { Calendar, User, ArrowLeft, AlertCircle, FileText } from 'lucide-react';

export const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setLoading(true);
      gameService.getBlogById(id).then((data) => {
        setBlog(data || null);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[600px] gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 font-semibold">Memuat pengumuman...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[600px] gap-6 text-center max-w-md mx-auto px-4">
        <AlertCircle size={64} className="text-slate-300" />
        <h2 className="text-xl font-bold text-slate-800">Pengumuman Tidak Ditemukan</h2>
        <p className="text-slate-500 text-sm">
          Maaf, artikel pengumuman dengan identitas tersebut tidak ditemukan atau sudah dihapus.
        </p>
        <Link to="/" className="text-primary hover:underline font-bold inline-flex items-center gap-2">
          <ArrowLeft size={16} />
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header Halaman Detail */}
      <section className="bg-slate-100 border-b border-slate-200 py-10 px-4">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-800 self-start transition-colors"
          >
            <ArrowLeft size={14} />
            KEMBALI KE BERANDA
          </Link>
          
          {/* Badge Pengumuman */}
          <div>
            <span className="inline-block px-3 py-1 text-xs font-bold text-primary bg-primary/10 rounded-full uppercase tracking-wider">
              {blog.badge}
            </span>
          </div>

          {/* Judul Besar */}
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-800 leading-tight">
            {blog.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-medium pt-2">
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-slate-400" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={14} className="text-slate-400" />
              <span>{blog.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
        
        {/* Gambar Blog Utama */}
        <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200/50 mb-10 bg-slate-100">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto block"
          />
        </div>

        {/* Teks Paragraf dan Poin-poin */}
        <Card className="p-8 md:p-10 bg-white border border-slate-100 shadow-sm flex flex-col gap-6 text-slate-700">
          <p className="text-sm md:text-base leading-relaxed text-slate-800 font-medium">
            {blog.content}
          </p>

          {/* List Poin 1-4 */}
          <ol className="flex flex-col gap-4 list-decimal pl-5 text-sm md:text-base text-slate-600 leading-relaxed">
            {blog.points.map((point, index) => (
              <li key={index} className="pl-2">
                {point}
              </li>
            ))}
          </ol>

          <p className="text-sm md:text-base leading-relaxed mt-4">
            We hereby convey this notification. Thank you for your attention and cooperation.
          </p>

          {/* Signature */}
          <div className="border-t border-slate-100 pt-8 mt-4 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
              <FileText size={24} />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Penandatangan Dokumen</div>
              <div className="text-sm md:text-base font-extrabold text-slate-800 mt-1">
                {blog.signature}
              </div>
              <div className="text-xs text-primary font-medium mt-0.5">
                Kementerian Komunikasi dan Digital RI
              </div>
            </div>
          </div>

        </Card>

      </section>

    </div>
  );
};
