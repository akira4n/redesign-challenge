# Indonesia Game Rating System (IGRS) - Redesign Challenge

Repositori ini berisi proyek redesign challenge website **Indonesia Game Rating System (IGRS)** yang dibangun secara kolaboratif oleh 1 Tim (UI/UX, Frontend, dan Backend). 

---

## 🛠️ Tech Stack & Arsitektur Sistem

### 1. Frontend
*   **Framework**: React.js
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS & Lucide Icons
*   **HTTP Client**: Axios

### 2. Backend
*   **Runtime**: Node.js
*   **Framework**: Express.js
*   **ORM Database**: Prisma Client
*   **Arsitektur**: Layered Architecture

### 3. Database & Infrastructure
*   **Database**: PostgreSQL
*   **Containerization**: Docker Compose (untuk menjalankan PostgreSQL secara lokal)

---

## 🚀 Cara Menjalankan Seluruh Proyek secara Lokal

Ikuti langkah-langkah di bawah ini secara berurutan untuk menyalakan database, backend, dan frontend.

### Langkah 1: Konfigurasi Environment & Database (Docker)
1.  Pastikan **Docker** Anda sudah dalam keadaan aktif.
2.  Buka terminal/command prompt di root folder proyek ini.
3.  Masuk ke direktori backend:
    ```bash
    cd backend
    ```
4.  Buat file `.env` dengan menyalin `.env.example`:
    *   Di Windows:
        ```cmd
        copy .env.example .env
        ```
    *   Di Linux/macOS:
        ```bash
        cp .env.example .env
        ```
5.  Jalankan PostgreSQL container di background:
    ```bash
    docker compose up -d
    ```

### Langkah 2: Menjalankan Backend Server (Express + Prisma)
1.  Di terminal backend tersebut, lakukan instalasi dependensi:
    ```bash
    npm install
    ```
2.  Jalankan migrasi database agar tabel dibuat di PostgreSQL:
    ```bash
    npx prisma migrate dev --name init
    ```
3.  Jalankan proses seeding untuk mengisi data awal game, blog, dan statistik bawaan:
    ```bash
    npx prisma db seed
    ```
4.  Jalankan server backend dalam mode pengembangan:
    ```bash
    npm run dev
    ```
    *Server backend sekarang aktif di `http://localhost:5000`. Endpoint API utama berada di `http://localhost:5000/api`.*

### Langkah 3: Menjalankan Frontend Server (React + Vite)
1.  Buka **terminal baru** (pisahkan dengan terminal backend di atas).
2.  Masuk ke folder frontend:
    ```bash
    cd frontend
    ```
3.  Install dependensi frontend:
    ```bash
    npm install
    ```
4.  Jalankan server pengembangan Vite:
    ```bash
    npm run dev
    ```
5.  Buka browser Anda dan akses alamat local server yang tertera di terminal (biasanya **`http://localhost:5173`**).

---
