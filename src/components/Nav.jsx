import React from 'react'
import { FaMoon } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
     <header className="header">
      <div className="logo">
        <h2>Rohit Thakkar</h2>
      </div>

      <nav className="navbar">
        <ul>
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="theme-toggle">
        <FaMoon />
      </div>
    </header>
  )
}

export default Nav