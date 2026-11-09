import React from 'react';

export default function Sidebar() {
  return (
    <div 
      className="d-flex flex-column flex-shrink-0 p-3 text-white" 
      style={{ width: '280px', height: '100vh', backgroundColor: '#d63384', position: 'sticky', top: 0 }}
    >
      <a href="#" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4 fw-bold">🌸 PinkMarket Admin</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item mb-2">
          <a href="#" className="nav-link active" style={{ backgroundColor: '#f8d7da', color: '#b71c1c', fontWeight: 'bold' }}>
            📦 Manajemen Produk
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-white" style={{ transition: '0.3s' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#f76c6c'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
            📊 Ringkasan Penjualan
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-white" style={{ transition: '0.3s' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#f76c6c'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
            👥 Pelanggan
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <span className="fw-semibold">Toko Online Active</span>
      </div>
    </div>
  );
}