import type { IGame } from '../types';

export const mockGames: IGame[] = [
  {
    id: 'genshin-impact',
    title: 'Genshin Impact',
    genre: 'Adventure RPG',
    ageRating: '18',
    image: 'https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?q=80&w=600&auto=format&fit=crop',
    description: 'merupakan gim petualangan peran dunia terbuka (Open-World Action RPG) yang berfokus pada eksplorasi, penyelesaian teka-teki, dan kerja sama tim. Gim ini menampilkan mekanik pertempuran fantasi dengan efek visual elemen, fitur interaksi daring antarpemain (multiplayer co-op), serta sistem mikrotransaksi di dalam gim yang memerlukan pengawasan orang tua sesuai dengan kategori klasifikasi usianya.',
    platforms: ['PC/Windows', 'iOS/Android', 'PS4/PS5'],
    contentDescriptors: ['Interaksi Pengguna', 'Kekerasan'],
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop'
    ],
    ratingAnalysis: [
      {
        title: 'Kekerasan Fantasi',
        description: 'Pertarungan melawan monster dengan efek elemen tanpa darah, dikemas dalam gaya visual anime yang estetik.'
      },
      {
        title: 'Interaksi Pengguna',
        description: 'Fitur chat dan co-op mode memungkinkan pemain untuk menjelajah dan menyelesaikan tantangan bersama pemain lain.'
      },
      {
        title: 'Pembelian dalam Game',
        description: 'Sistem Wish (gacha) untuk mendapatkan karakter dan senjata langka menggunakan mata uang dalam game atau uang sungguhan.'
      },
      {
        title: 'Dunia Terbuka',
        description: 'Eksplorasi luas di dunia Teyvat yang sangat adiktif dapat memicu penggunaan waktu bermain yang signifikan.'
      }
    ]
  },
  {
    id: 'super-mario-odyssey',
    title: 'Super Mario Odyssey',
    genre: 'Platformer',
    ageRating: '3',
    image: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=600&auto=format&fit=crop',
    description: 'Petualangan 3D Mario melintasi berbagai kerajaan menarik untuk menyelamatkan Princess Peach dari Bowser. Menggunakan mekanik topi ajaib Cappy untuk merasuki objek dan musuh.',
    platforms: ['Nintendo Switch'],
    contentDescriptors: ['Kekerasan Ringan'],
    screenshots: [
      'https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=600&auto=format&fit=crop'
    ],
    ratingAnalysis: [
      {
        title: 'Aksi Komedi Ringan',
        description: 'Karakter terlempar atau jatuh secara kartun tanpa efek cedera fisik yang nyata.'
      },
      {
        title: 'Visual Ramah Anak',
        description: 'Desain lingkungan dan karakter yang penuh warna, imut, dan tidak memicu ketakutan.'
      }
    ]
  },
  {
    id: 'minecraft',
    title: 'Minecraft',
    genre: 'Sandbox / Survival',
    ageRating: '7',
    image: 'https://images.unsplash.com/photo-1607988795691-3d0147b43231?q=80&w=600&auto=format&fit=crop',
    description: 'Gim kotak pasir kreatif yang membebaskan pemain membangun dunia apa pun dari balok 3D. Menjelajah, mengumpulkan sumber daya, membuat barang, dan bertahan hidup dari monster malam.',
    platforms: ['PC/Windows', 'macOS', 'Xbox', 'PlayStation', 'Nintendo Switch', 'iOS/Android'],
    contentDescriptors: ['Kekerasan Fantasi Ringan', 'Ketakutan'],
    screenshots: [
      'https://images.unsplash.com/photo-1607988795691-3d0147b43231?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=600&auto=format&fit=crop'
    ],
    ratingAnalysis: [
      {
        title: 'Kekerasan Piksel',
        description: 'Pertarungan melawan makhluk piksel seperti zombie, laba-laba, dan skeleton dengan efek visual yang sangat minimal.'
      },
      {
        title: 'Elemen Ketakutan Ringan',
        description: 'Suasana gua yang gelap dan kemunculan musuh secara tiba-tiba dapat memicu keterkejutan ringan bagi anak kecil.'
      }
    ]
  },
  {
    id: 'zelda-totk',
    title: 'The Legend of Zelda: Tears of the Kingdom',
    genre: 'Action Adventure',
    ageRating: '13',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop',
    description: 'Menjelajahi daratan dan langit Hyrule dalam sekuel petualangan epik. Gunakan kemampuan kreasi baru untuk merakit kendaraan, senjata, dan menyelesaikan teka-teki lingkungan yang kompleks.',
    platforms: ['Nintendo Switch'],
    contentDescriptors: ['Kekerasan Animasi', 'Tema Sugestif'],
    screenshots: [
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=600&auto=format&fit=crop'
    ],
    ratingAnalysis: [
      {
        title: 'Kekerasan Fantasi Sedang',
        description: 'Pertarungan menggunakan pedang, panah, dan sihir melawan monster fantasi dengan visualisasi tumbukan yang tampak nyata namun tanpa darah.'
      },
      {
        title: 'Ketegangan Atmosferik',
        description: 'Beberapa area bawah tanah memiliki atmosfer yang tegang dan musuh berpenampilan menyeramkan.'
      }
    ]
  },
  {
    id: 'valorant',
    title: 'Valorant',
    genre: 'Tactical Shooter',
    ageRating: '15',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop',
    description: 'Gim tembak-menembak taktis orang pertama 5v5 di mana ketepatan menembak berpadu dengan kemampuan unik para Agen. Kompetisi intens yang menuntut strategi matang dan kerja sama tim.',
    platforms: ['PC/Windows'],
    contentDescriptors: ['Kekerasan Militer', 'Darah', 'Interaksi Daring'],
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop'
    ],
    ratingAnalysis: [
      {
        title: 'Kekerasan Senjata Api',
        description: 'Tembak-menembak intens menggunakan replika senjata api dunia nyata dengan visualisasi percikan darah saat peluru mengenai sasaran.'
      },
      {
        title: 'Interaksi Sosial Daring',
        description: 'Komunikasi suara dan teks secara langsung dengan pemain lain dapat mengekspos pemain pada perilaku tidak pantas atau toksisitas.'
      }
    ]
  },
  {
    id: 'ea-sports-fc-26',
    title: 'EA Sports FC 26',
    genre: 'Sports Simulation',
    ageRating: '3',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop',
    description: 'Simulasi sepak bola paling otentik di dunia dengan klub, liga, dan pemain berlisensi penuh. Bermain secara solo, tim, atau kelola klub sepak bola Anda sendiri.',
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
    contentDescriptors: ['Interaksi Daring', 'Pembelian Dalam Game'],
    screenshots: [
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=600&auto=format&fit=crop'
    ],
    ratingAnalysis: [
      {
        title: 'Konten Olahraga Bersih',
        description: 'Gim ini sepenuhnya menyimulasikan pertandingan sepak bola tanpa unsur kekerasan atau perilaku berbahaya.'
      },
      {
        title: 'Pembelian Paket Pemain',
        description: 'Fitur pembelian paket kartu pemain (Ultimate Team) menggunakan poin atau mata uang nyata memerlukan kontrol ketat dari orang tua.'
      }
    ]
  },
  {
    id: 'mobile-legends',
    title: 'Mobile Legends: Bang Bang',
    genre: 'MOBA',
    ageRating: '13',
    image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=600&auto=format&fit=crop',
    description: 'Pertarungan arena 5v5 di ponsel. Pilih hero favorit Anda dan bangun tim yang sempurna dengan rekan satu tim untuk menghancurkan menara musuh dalam pertempuran 10 menit.',
    platforms: ['iOS/Android'],
    contentDescriptors: ['Kekerasan Ringan', 'Interaksi Sosial'],
    screenshots: [
      'https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop'
    ],
    ratingAnalysis: [
      {
        title: 'Kekerasan Animasi Fantasi',
        description: 'Pertempuran konstan antar hero menggunakan senjata fantasi dan sihir. Karakter yang mati langsung muncul kembali (respawn) tanpa visualisasi darah.'
      },
      {
        title: 'Pembelian Kosmetik',
        description: 'Sistem pembelian kostum hero (skin) menggunakan berlian (diamonds) dalam gim.'
      }
    ]
  },
  {
    id: 'cyberpunk-2077',
    title: 'Cyberpunk 2077',
    genre: 'Action Sci-Fi RPG',
    ageRating: '18',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop',
    description: 'Petualangan RPG aksi dunia terbuka yang berlatar di megapolis Night City, di mana Anda bermain sebagai tentara bayaran cyberpunk yang terlibat dalam pertarungan hidup mati untuk bertahan hidup.',
    platforms: ['PC/Windows', 'PS5', 'Xbox Series X/S'],
    contentDescriptors: ['Kekerasan Sadis', 'Darah & Mutilasi', 'Seksualitas', 'Bahasa Kasar', 'Obat-obatan'],
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=600&auto=format&fit=crop'
    ],
    ratingAnalysis: [
      {
        title: 'Kekerasan Sangat Kuat',
        description: 'Pertarungan brutal menggunakan senjata api, pisau, dan implan siber yang memperlihatkan decapitation (pemenggalan), mutilasi, dan genangan darah.'
      },
      {
        title: 'Ketelanjangan dan Seksualitas',
        description: 'Menampilkan adegan seksual yang jelas, konten sugestif, dan ketelanjangan karakter secara penuh baik dalam cerita maupun kustomisasi.'
      },
      {
        title: 'Narkotika & Alkohol',
        description: 'Pemain dapat mengonsumsi zat terlarang fiksi dan alkohol yang memengaruhi penglihatan serta pergerakan karakter.'
      },
      {
        title: 'Bahasa Kasar & Kotor',
        description: 'Dialog karakter sering kali menggunakan kata-kata makian tingkat tinggi yang sangat tidak cocok untuk anak di bawah umur.'
      }
    ]
  }
];
