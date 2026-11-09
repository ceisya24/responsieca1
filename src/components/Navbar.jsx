import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm px-4" style={{ backgroundColor: '#fff0f5', borderBottom: '2px solid #f8bbd0' }}>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1" style={{ color: '#d63384', fontWeight: 'bold' }}>
          Dashboard Katalog E-Commerce
        </span>
        <div className="d-flex align-items-center">
          <div className="me-3 text-end d-none d-sm-block">
            <small className="text-muted d-block">Selamat Datang,</small>
            <strong style={{ color: '#c2185b' }}>Admin Cantik/Ganteng</strong>
          </div>
          <img 
            src="https://unsplash.com" 
            alt="Profile" 
            className="rounded-circle border border-2 border-danger" 
            style={{ width: '40px', height: '40px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </nav>
  );
}