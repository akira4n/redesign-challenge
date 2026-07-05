const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const publishersData = [
  { name: 'HoYoverse' },
  { name: 'Nintendo' },
  { name: 'Mojang Studios' },
  { name: 'Riot Games' },
  { name: 'Electronic Arts' },
  { name: 'Moonton' },
  { name: 'CD Projekt Red' }
];

const mockGames = [
  {
    id: 'genshin-impact',
    title: 'Genshin Impact',
    genre: 'Adventure RPG',
    ageRating: '18',
    image: 'http://localhost:5000/images/games/genshin-impact.jpg',
    description: 'merupakan gim petualangan peran dunia terbuka (Open-World Action RPG) yang berfokus pada eksplorasi, penyelesaian teka-teki, dan kerja sama tim. Gim ini menampilkan mekanik pertempuran fantasi dengan efek visual elemen, fitur interaksi daring antarpemain (multiplayer co-op), serta sistem mikrotransaksi di dalam gim yang memerlukan pengawasan orang tua sesuai dengan kategori klasifikasi usianya.',
    platforms: ['PC/Windows', 'iOS/Android', 'PS4/PS5'],
    contentDescriptors: ['Interaksi Pengguna', 'Kekerasan'],
    screenshots: [
      'http://localhost:5000/images/games/screenshots/genshin-impact-1.jpg',
      'http://localhost:5000/images/games/screenshots/genshin-impact-2.jpg',
      'http://localhost:5000/images/games/screenshots/genshin-impact-3.jpg'
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
    ],
    publisherName: 'HoYoverse'
  },
  {
    id: 'super-mario-odyssey',
    title: 'Super Mario Odyssey',
    genre: 'Platformer',
    ageRating: '3',
    image: 'http://localhost:5000/images/games/super-mario-odyssey.jpg',
    description: 'Petualangan 3D Mario melintasi berbagai kerajaan menarik untuk menyelamatkan Princess Peach dari Bowser. Menggunakan mekanik topi ajaib Cappy untuk merasuki objek dan musuh.',
    platforms: ['Nintendo Switch'],
    contentDescriptors: ['Kekerasan Ringan'],
    screenshots: [
      'http://localhost:5000/images/games/screenshots/super-mario-odyssey-1.jpg',
      'http://localhost:5000/images/games/screenshots/super-mario-odyssey-2.jpg'
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
    ],
    publisherName: 'Nintendo'
  },
  {
    id: 'minecraft',
    title: 'Minecraft',
    genre: 'Sandbox / Survival',
    ageRating: '7',
    image: 'http://localhost:5000/images/games/minecraft.jpg',
    description: 'Gim kotak pasir kreatif yang membebaskan pemain membangun dunia apa pun dari balok 3D. Menjelajah, mengumpulkan sumber daya, membuat barang, dan bertahan hidup dari monster malam.',
    platforms: ['PC/Windows', 'macOS', 'Xbox', 'PlayStation', 'Nintendo Switch', 'iOS/Android'],
    contentDescriptors: ['Kekerasan Fantasi Ringan', 'Ketakutan'],
    screenshots: [
      'http://localhost:5000/images/games/screenshots/minecraft-1.jpg',
      'http://localhost:5000/images/games/screenshots/minecraft-2.jpg'
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
    ],
    publisherName: 'Mojang Studios'
  },
  {
    id: 'zelda-totk',
    title: 'The Legend of Zelda: Tears of the Kingdom',
    genre: 'Action Adventure',
    ageRating: '13',
    image: 'http://localhost:5000/images/games/zelda-totk.jpg',
    description: 'Menjelajahi daratan dan langit Hyrule dalam sekuel petualangan epik. Gunakan kemampuan kreasi baru untuk merakit kendaraan, senjata, dan menyelesaikan teka-teki lingkungan yang kompleks.',
    platforms: ['Nintendo Switch'],
    contentDescriptors: ['Kekerasan Animasi', 'Tema Sugestif'],
    screenshots: [
      'http://localhost:5000/images/games/screenshots/zelda-totk-1.jpg',
      'http://localhost:5000/images/games/screenshots/zelda-totk-2.jpg'
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
    ],
    publisherName: 'Nintendo'
  },
  {
    id: 'valorant',
    title: 'Valorant',
    genre: 'Tactical Shooter',
    ageRating: '15',
    image: 'http://localhost:5000/images/games/valorant.jpg',
    description: 'Gim tembak-menembak taktis orang pertama 5v5 di mana ketepatan menembak berpadu dengan kemampuan unik para Agen. Kompetisi intens yang menuntut strategi matang dan kerja sama tim.',
    platforms: ['PC/Windows'],
    contentDescriptors: ['Kekerasan Senjata Api', 'Darah', 'Interaksi Daring'],
    screenshots: [
      'http://localhost:5000/images/games/screenshots/valorant-1.jpg',
      'http://localhost:5000/images/games/screenshots/valorant-2.jpg'
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
    ],
    publisherName: 'Riot Games'
  },
  {
    id: 'ea-sports-fc-26',
    title: 'EA Sports FC 26',
    genre: 'Sports Simulation',
    ageRating: '3',
    image: 'http://localhost:5000/images/games/ea-sports-fc-26.jpg',
    description: 'Simulasi sepak bola paling otentik di dunia dengan klub, liga, dan pemain berlisensi penuh. Bermain secara solo, tim, atau kelola klub sepak bola Anda sendiri.',
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
    contentDescriptors: ['Interaksi Daring', 'Pembelian Dalam Game'],
    screenshots: [
      'http://localhost:5000/images/games/screenshots/ea-sports-fc-26-1.jpg',
      'http://localhost:5000/images/games/screenshots/ea-sports-fc-26-2.jpg'
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
    ],
    publisherName: 'Electronic Arts'
  },
  {
    id: 'mobile-legends',
    title: 'Mobile Legends: Bang Bang',
    genre: 'MOBA',
    ageRating: '13',
    image: 'http://localhost:5000/images/games/mobile-legends.jpg',
    description: 'Pertarungan arena 5v5 di ponsel. Pilih hero favorit Anda dan bangun tim yang sempurna dengan rekan satu tim untuk menghancurkan menara musuh dalam pertempuran 10 menit.',
    platforms: ['iOS/Android'],
    contentDescriptors: ['Kekerasan Ringan', 'Interaksi Sosial'],
    screenshots: [
      'http://localhost:5000/images/games/screenshots/mobile-legends-1.jpg',
      'http://localhost:5000/images/games/screenshots/mobile-legends-2.jpg'
    ],
    ratingAnalysis: [
      {
        title: 'Kekerasan Animasi Fantasi',
        description: 'Pertempuran konstan antar hero menggunakan senjata fantasi dan sihir. Karakter yang mati langsung muncul kembali (respawn) tanpa visualisasi darah.'
      },
      {
        title: 'Pembelian Kosmetik',
        description: 'Sistem pembelian kosmetik (skin) menggunakan berlian (diamonds) dalam gim.'
      }
    ],
    publisherName: 'Moonton'
  },
  {
    id: 'cyberpunk-2077',
    title: 'Cyberpunk 2077',
    genre: 'Action Sci-Fi RPG',
    ageRating: '18',
    image: 'http://localhost:5000/images/games/cyberpunk-2077.jpg',
    description: 'Petualangan RPG aksi dunia terbuka yang berlatar di megapolis Night City, di mana Anda bermain sebagai tentara bayaran cyberpunk yang terlibat dalam pertarungan hidup mati untuk bertahan hidup.',
    platforms: ['PC/Windows', 'PS5', 'Xbox Series X/S'],
    contentDescriptors: ['Kekerasan Sadis', 'Darah & Mutilasi', 'Seksualitas', 'Bahasa Kasar', 'Obat-obatan'],
    screenshots: [
      'http://localhost:5000/images/games/screenshots/cyberpunk-2077-1.jpg',
      'http://localhost:5000/images/games/screenshots/cyberpunk-2077-2.jpg',
      'http://localhost:5000/images/games/screenshots/cyberpunk-2077-3.jpg'
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
    ],
    publisherName: 'CD Projekt Red'
  }
];

const mockBlogs = [
  {
    id: 'notice-regarding-verification-process',
    title: 'Notice Regarding the IGRS Verification Process',
    date: '2 Februari 2026',
    author: 'Sekretariat IGRS',
    badge: 'Pengumuman Penting',
    image: 'http://localhost:5000/images/blogs/notice-regarding-verification-process.jpg',
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
    image: 'http://localhost:5000/images/blogs/permen-kominfo-no-2-2024.jpg',
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
    image: 'http://localhost:5000/images/blogs/igrs-mobile-app-release.jpg',
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

async function main() {
  console.log('Clearing old database records...');
  // Delete games first due to relation
  await prisma.game.deleteMany({});
  await prisma.publisher.deleteMany({});
  await prisma.blog.deleteMany({});
  await prisma.contactMessage.deleteMany({});

  console.log('Seeding publishers...');
  const seededPublishers = {};
  for (const pub of publishersData) {
    const created = await prisma.publisher.create({
      data: pub
    });
    seededPublishers[pub.name] = created.id;
  }

  console.log('Seeding mock games...');
  for (const gameData of mockGames) {
    const { publisherName, ...game } = gameData;
    const publisherId = seededPublishers[publisherName];
    if (!publisherId) {
      throw new Error(`Publisher ${publisherName} not found for game ${game.title}`);
    }
    await prisma.game.create({
      data: {
        ...game,
        publisherId
      }
    });
  }

  console.log('Seeding mock blogs...');
  for (const blog of mockBlogs) {
    await prisma.blog.create({
      data: blog
    });
  }

  console.log('Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error during database seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
