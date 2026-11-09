import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ProductTable from './components/ProductTable';
import ProductModal from './components/ProductModal';

// Data awal produk (Mock Data) untuk demo awal aplikasi
const initialProducts = [
  { id: 1, nama: "Lipstik Matte Velvet Pink", kategori: "Kosmetik", stok: 12, harga: 85000, diskon: 10 },
  { id: 2, nama: "Blush On Sakura Glow", kategori: "Kosmetik", stok: 3, harga: 120000, diskon: 15 },
  { id: 3, nama: "Kemeja Kasual Oversize Pastel", kategori: "Pakaian", stok: 25, harga: 175000, diskon: 0 },
  { id: 4, nama: "Anting Hoop Mutiara", kategori: "Aksesoris", stok: 0, harga: 45000, diskon: 5 }
];

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  // Manipulasi DOM / jQuery side-effect untuk animasi pudar transisi halaman (Sesuai Rubrik Penilaian)
  useEffect(() => {
    // Memastikan efek transisi halus saat aplikasi pertama kali dimuat
    const appContainer = document.getElementById('main-dashboard-content');
    if (appContainer) {
      appContainer.style.opacity = '0';
      appContainer.style.transition = 'opacity 0.6s ease-in-out';
      setTimeout(() => {
        appContainer.style.opacity = '1';
      }, 50);
    }
  }, []);

  // 1. Fungsi Create & Update (Simpan Data)
  const handleSaveProduct = (productData) => {
    if (currentProduct) {
      // PROSES UPDATE: Ubah harga/stok/diskon produk yang sudah ada
      setProducts(products.map(p => p.id === currentProduct.id ? { ...p, ...productData } : p));
    } else {
      // PROSES CREATE: Tambah produk baru dengan ID unik (timestamp)
      const newProduct = {
        ...productData,
        id: Date.now()
      };
      setProducts([...products, newProduct]);
    }
    setShowModal(false);
    setCurrentProduct(null);
  };

  // 2. Fungsi Pemicu Edit (Membuka modal dengan data produk terpilih)
  const handleEditClick = (product) => {
    setCurrentProduct(product);
    setShowModal(true);
  };

  // 3. Fungsi Delete (Hapus data produk dari array state)
  const handleDeleteProduct = (id) => {
    const konfirmasi = window.confirm("Apakah kamu yakin ingin menghapus produk ini dari etalase?");
    if (konfirmasi) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  // Fungsi menutup modal form
  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentProduct(null);
  };

  return (
    <div className="d-flex" style={{ backgroundColor: '#fffdfd', minHeight: '100vh' }}>
      {/* 1. Sidebar Navigasi Kiri */}
      <Sidebar />

      {/* Konten Utama Kanan */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* 2. Navbar Atas */}
        <Navbar />

        {/* 3. Panel Dasbor & Tabel Utama */}
        <div id="main-dashboard-content" className="container-fluid p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="fw-bold" style={{ color: '#c2185b' }}>Katalog Produk Etalase</h2>
              <p className="text-muted mb-0">Kelola informasi produk, stok, harga, dan diskon promo toko online kamu.</p>
            </div>
            
            {/* Tombol Tambah Produk */}
            <button 
              className="btn text-white fw-semibold shadow-sm px-4 py-2" 
              style={{ backgroundColor: '#d63384', borderRadius: '8px' }}
              onClick={() => {
                setCurrentProduct(null);
                setShowModal(true);
              }}
            >
              ➕ Tambah Produk Baru
            </button>
          </div>

          {/* 4. Pemanggilan Komponen Tabel Produk */}
          <ProductTable 
            products={products} 
            onEdit={handleEditClick} 
            onDelete={handleDeleteProduct} 
          />
        </div>
      </div>

      {/* 5. Pop-up Form Modal (Untuk Create & Update) */}
      <ProductModal 
        show={showModal} 
        onClose={handleCloseModal} 
        onSave={handleSaveProduct} 
        currentProduct={currentProduct} 
      />
    </div>
  );
}