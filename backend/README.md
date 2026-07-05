# IGRS Backend - API Server

Server backend untuk Redesign Challenge website **Indonesia Game Rating System (IGRS)**. Server ini dibangun menggunakan **Node.js, Express.js, dan Prisma ORM** dengan database **PostgreSQL** yang berjalan dalam Docker Container.

Struktur proyek ini mengikuti **Layered Architecture dengan Repository Pattern**.

---

## 🛠️ Tech Stack

*   **Runtime**: Node.js (v18+)
*   **Framework**: Express.js
*   **Database ORM**: Prisma Client
*   **Database**: PostgreSQL (Dockerized)

---

## 📁 Struktur Folder Proyek

```text
backend/
├── prisma/
│   ├── migrations/         # Log migrasi skema database Prisma
│   ├── schema.prisma       # Skema database Prisma (definisi tabel & relasi)
│   └── seed.js             # Script untuk populasikan data awal (seeding)
├── public/
│   └── images/             # Folder aset statis gambar (game, screenshots, blogs)
├── src/
│   ├── config/
│   │   └── database.js     # Inisialisasi dan export instance Prisma Client
│   ├── controllers/        # Layer Controller: Menangani request, validasi, & HTTP response
│   ├── repositories/       # Layer Repository: Isolasi query langsung ke database (Prisma)
│   ├── services/           # Layer Service: Logika bisnis inti aplikasi
│   ├── routes/             # Layer Routing: Definisi endpoint API Express
│   └── app.js              # Entry point utama (Konfigurasi Express, routes, & HTTP listener)
├── docker-compose.yml      # Konfigurasi PostgreSQL menggunakan Docker Compose
├── package.json            # Daftar dependensi & npm scripts
└── .env                    # Variabel lingkungan (port, database URL)
```

## ⚙️ Env

Konfigurasi koneksi database disimpan di dalam file `.env`:
```env
PORT=5000
DATABASE_URL="postgresql://postgres:password@localhost:5432/igrs_db?schema=public"
```

## 🛣️ API Endpoints / Routes

Berikut adalah daftar endpoint API yang tersedia pada server backend ini:

*   **Health Check**: `GET /health` -> Memverifikasi status server backend.
*   **Games**:
    *   `GET /api/games` -> Mendapatkan seluruh daftar data game sampel.
    *   `GET /api/games/:id` -> Mendapatkan detail game berdasarkan ID-nya.
*   **Blogs / Pengumuman**:
    *   `GET /api/blogs` -> Mendapatkan seluruh daftar pengumuman.
    *   `GET /api/blogs/:id` -> Mendapatkan detail pengumuman berdasarkan ID-nya.
*   **Statistik**:
    *   `GET /api/stats` -> Mendapatkan statistik dinamis (total game, total publisher, dan rating usia).
*   **Formulir Kontak**:
    *   `POST /api/contact` -> Menyimpan pesan/pengaduan formulir kontak baru ke database PostgreSQL.

---

## 🚀 Perintah Pemasangan & Pengembangan

1.  **Install Dependensi**:
    ```bash
    npm install
    ```
2.  **Jalankan Database PostgreSQL**:
    Pastikan aplikasi Docker Anda sudah menyala, lalu jalankan:
    ```bash
    docker compose up -d
    ```
3.  **Jalankan Migrasi & Sinkronisasi Skema**:
    ```bash
    npx prisma migrate dev
    ```
4.  **Jalankan Seeding Data**:
    ```bash
    npx prisma db seed
    ```
5.  **Jalankan Server dalam Mode Development (Nodemon)**:
    ```bash
    npm run dev
    ```
    *Server akan aktif di `http://localhost:5000/api` dan otomatis merestart saat ada perubahan kode.*
