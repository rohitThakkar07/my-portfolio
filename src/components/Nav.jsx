import React, { useState } from 'react';
import { FaMoon, FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <h2>Rohit Thakkar</h2>
      </div>

      {/* Hamburger for mobile */}
      <button className="menu-toggle" onClick={handleMenuToggle}>
        <FaBars />
      </button>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu} className="active">Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>

      <button className="theme-toggle">
        <FaMoon />
      </button>
    </header>
  );
};

export default Nav;
