import type { IBlog } from '../types';

export const mockBlogs: IBlog[] = [
  {
    id: 'notice-regarding-verification-process',
    title: 'Notice Regarding the IGRS Verification Process',
    date: '2 Februari 2026',
    author: 'Sekretariat IGRS',
    badge: 'Pengumuman Penting',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop',
    content: 'Due to the increasing number of game classification submissions, we would like to convey the following:',
    points: [
      'The Indonesia Game Rating System (IGRS) is currently adjusting its verification process management to maintain accuracy and ensure service certainty.',
      'During this adjustment period, the verification process for some games may take additional time.',
      'Game publishers who have conducted self-assessment of their games through the IGRS system will still be processed in accordance with the provisions of the applicable laws and regulations.',
      'IGRS is committed to continuously optimizing its services and ensuring the responsible continuity of the game classification process.'
    ],
    signature: 'Sonny Hendra Sudaryana - Acting Director of Digital Ecosystem Development'
  },
  {
    id: 'permen-kominfo-no-2-2024',
    title: 'Sosialisasi Peraturan Menteri Kominfo Nomor 2 Tahun 2024 tentang Klasifikasi Gim',
    date: '25 Januari 2026',
    author: 'Sekretariat IGRS',
    badge: 'Sosialisasi Regulasi',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=600&auto=format&fit=crop',
    content: 'Kementerian Komunikasi dan Digital Republik Indonesia menyelenggarakan sosialisasi intensif mengenai Peraturan Menteri Komunikasi dan Informatika Nomor 2 Tahun 2024 tentang Klasifikasi Gim. Regulasi baru ini menekankan beberapa poin penting berikut:',
    points: [
      'Setiap penerbit gim yang mendistribusikan produknya secara resmi di Indonesia wajib mengajukan permohonan klasifikasi gim.',
      'Proses penilaian mandiri (self-assessment) harus mencerminkan konten gim secara akurat, termasuk kekerasan, seksualitas, dan transaksi mikro.',
      'Sanksi administratif akan diberlakukan secara bertahap bagi penerbit gim yang tidak mematuhi kewajiban klasifikasi ini.',
      'Kolaborasi dengan komunitas gim lokal diperkuat untuk membantu dewan penilai dalam proses pengawasan secara berkala.'
    ],
    signature: 'Sekretariat IGRS - Direktorat Jenderal Aplikasi Informatika'
  },
  {
    id: 'igrs-mobile-app-release',
    title: 'Rencana Peluncuran Aplikasi Mobile Asisten IGRS untuk Orang Tua',
    date: '10 Januari 2026',
    author: 'Tim Humas IGRS',
    badge: 'Fitur Baru',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop',
    content: 'Sebagai bagian dari upaya berkelanjutan untuk mendidik masyarakat mengenai konsumsi gim yang sehat, IGRS mengumumkan rencana pengembangan aplikasi mobile asisten khusus orang tua:',
    points: [
      'Aplikasi akan menyediakan fitur pemindaian cepat rating gim melalui barcode atau pencarian teks cepat.',
      'Rekomendasi gim edukatif sesuai kelompok usia anak (3+, 7+, dan 13+) yang telah diverifikasi oleh IGRS.',
      'Panduan langkah demi langkah bagi orang tua untuk mengaktifkan fitur parental control di berbagai platform seperti PC, PlayStation, dan Nintendo Switch.',
      'Kanal aduan langsung jika orang tua menemukan gim yang beredar di pasar lokal dengan rating klasifikasi yang tidak akurat.'
    ],
    signature: 'Tim Humas IGRS - Kementerian Komunikasi dan Digital RI'
  }
];
