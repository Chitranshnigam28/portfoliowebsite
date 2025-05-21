import React, { useState } from 'react';
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="header">
        <h3 className="logo">&lt;Chitransh /&gt;</h3>
        <div className={`nav-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          &#9776; {/* Unicode hamburger */}
        </div>
        <ul className={`nav-list ${menuOpen ? 'show-menu' : ''}`}>
          <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#projectWrapper" onClick={toggleMenu}>Work</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Header;
