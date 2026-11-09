import React, { useState, useEffect } from 'react';

export default function ProductModal({ show, onClose, onSave, currentProduct }) {
  const [formData, setFormData] = useState({
    nama: '',
    kategori: '',
    stok: 0,
    harga: 0,
    diskon: 0
  });

  useEffect(() => {
    if (currentProduct) {
      setFormData(currentProduct);
    } else {
      setFormData({ nama: '', kategori: 'Pakaian', stok: 0, harga: 0, diskon: 0 });
    }
  }, [currentProduct, show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'stok' || name === 'harga' || name === 'diskon' ? Number(value) : value
    });
  };

  const handleSubmit = (e) => {
    e.startTransition ? e.startTransition(() => {}) : null; // Dukungan transisi React 19 jika diperlukan
    e.preventDefault();
    onSave(formData);
  };

  if (!show) return null;

  return (
    <div className="modal d-block show" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0">
          <div className="modal-header text-white" style={{ backgroundColor: '#d63384' }}>
            <h5 className="modal-title fw-bold">
              {currentProduct ? '🌸 Ubah Data Harga & Produk' : '🌸 Tambah Produk Baru'}
            </h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body" style={{ backgroundColor: '#fff5f8' }}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Nama Produk</label>
                <input type="text" name="nama" className="form-control" value={formData.nama} onChange={handleChange} required disabled={!!currentProduct} />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Kategori</label>
                <select name="kategori" className="form-select" value={formData.kategori} onChange={handleChange}>
                  <option value="Pakaian">Pakaian</option>
                  <option value="Kosmetik">Kosmetik</option>
                  <option value="Aksesoris">Aksesoris</option>
                  <option value="Sepatu">Sepatu</option>
                </select>
              </div>
              <div className="row">
                <div className="col-6 mb-3">
                  <label className="form-label fw-semibold">Jumlah Stok</label>
                  <input type="number" name="stok" className="form-control" min="0" value={formData.stok} onChange={handleChange} required />
                </div>
                <div className="col-6 mb-3">
                  <label className="form-label fw-semibold">Diskon (%)</label>
                  <input type="number" name="diskon" className="form-control" min="0" max="100" value={formData.diskon} onChange={handleChange} required />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Harga Jual (Rp)</label>
                <input type="number" name="harga" className="form-control" min="0" value={formData.harga} onChange={handleChange} required />
              </div>
            </div>
            <div className="modal-footer" style={{ backgroundColor: '#fff5f8' }}>
              <button type="button" className="btn btn-outline-secondary" onClick={onClose}>Batal</button>
              <button type="submit" className="btn text-white px-4" style={{ backgroundColor: '#d63384' }}>Simpan</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
