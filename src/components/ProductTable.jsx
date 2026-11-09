import React from 'react';

export default function ProductTable({ products, onEdit, onDelete }) {
  // Helper format rupiah
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
  };

  return (
    <div className="table-responsive bg-white p-3 rounded shadow-sm">
      <table className="table table-hover align-middle">
        <thead style={{ backgroundColor: '#f8bbd0', color: '#c2185b' }}>
          <tr>
            <th>Nama Produk</th>
            <th>Kategori</th>
            <th>Stok</th>
            <th>Harga Awal</th>
            <th>Diskon</th>
            <th>Harga Akhir</th>
            <th className="text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center text-muted py-4">Belum ada produk di etalase.</td>
            </tr>
          ) : (
            products.map((product) => {
              const hargaAkhir = product.harga - (product.harga * (product.diskon / 100));
              return (
                <tr key={product.id}>
                  <td>
                    <strong>{product.nama}</strong>
                  </td>
                  <td><span className="badge text-dark" style={{ backgroundColor: '#fbc02d' }}>{product.kategori}</span></td>
                  <td>
                    <span className={`badge ${product.stok <= 5 ? 'bg-danger' : 'bg-success'}`}>
                      {product.stok} pcs
                    </span>
                  </td>
                  <td>{formatRupiah(product.harga)}</td>
                  <td>
                    <span className="badge bg-danger">{product.diskon}%</span>
                  </td>
                  <td className="fw-bold text-success">{formatRupiah(hargaAkhir)}</td>
                  <td className="text-center">
                    <button 
                      className="btn btn-sm btn-outline-warning me-2" 
                      onClick={() => onEdit(product)}
                    >
                      ✏️ Ubah Harga
                    </button>
                    <button 
                      className="btn btn-sm btn-danger" 
                      onClick={() => onDelete(product.id)}
                    >
                      🗑️ Hapus
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}