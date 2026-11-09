# Dokumentasi Pembuatan Dashboard E-Commerce

### 1. Membuat Project React Menggunakan Vite

Tahap pertama dilakukan dengan membuka terminal pada Visual Studio Code, kemudian menjalankan perintah berikut untuk membuat project React baru:

```bash
npm create vite@latest responsi1 -- --template react
```

Perintah tersebut berfungsi untuk membuat project React menggunakan Vite dengan nama folder `responsi1`.

### 2. Menyiapkan Folder dan Library yang Dibutuhkan

Setelah project berhasil dibuat, masuk ke dalam folder project dengan perintah:

```bash
cd responsi1
```

Kemudian, lakukan instalasi library yang akan digunakan dalam pembuatan aplikasi:

```bash
npm install
npm install bootstrap react-bootstrap
npm install jquery
npm install bootstrap-icons
```

Bootstrap dan React Bootstrap digunakan untuk mempermudah proses pembuatan tampilan serta komponen dashboard. Sementara itu, jQuery berfungsi sebagai library pendukung untuk manipulasi elemen, dan Bootstrap Icons digunakan untuk menambahkan ikon pada aplikasi.

### 3. Membuat Susunan File Komponen Aplikasi

Langkah selanjutnya yaitu membuka folder project melalui Visual Studio Code. Pada folder `src`, dibuat folder baru bernama `components` sebagai tempat penyimpanan komponen aplikasi.

Di dalam folder tersebut, dibuat beberapa file berikut:

- Sidebar.jsx
- Navbar.jsx
- ProductTable.jsx
- ProductModal.jsx

Masing-masing file memiliki tugas yang berbeda dalam membangun tampilan dashboard. Pembagian komponen ini bertujuan agar kode program lebih terstruktur, rapi, dan mudah diperbaiki apabila terjadi kesalahan.

### 4. Memasukkan Kode Program dan Menjalankan Aplikasi

Setelah struktur folder selesai dibuat, tahap berikutnya adalah memasukkan kode program ke setiap file sesuai dengan fungsi komponennya. Seluruh komponen kemudian dihubungkan melalui file utama `App.jsx` agar dapat ditampilkan sebagai satu aplikasi yang utuh.

Jika semua kode sudah dimasukkan, jalankan aplikasi melalui terminal menggunakan perintah:

```bash
npm run dev
```

Apabila proses berhasil, Vite akan menjalankan server lokal dan menampilkan alamat berikut:

```text
http://localhost:5173/
```

Alamat tersebut selanjutnya dibuka melalui browser untuk melihat hasil tampilan dashboard yang telah dibuat.

### 5. Hasil Akhir Dashboard E-Commerce

Pada tahap akhir, aplikasi Dashboard E-Commerce ditampilkan melalui browser menggunakan alamat localhost. Tampilan ini merupakan hasil dari seluruh proses pembuatan project, penyusunan komponen, serta penerapan kode program yang telah dilakukan sebelumnya.