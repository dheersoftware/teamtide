import React, { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for toggle
import { MdOutlineEmail } from "react-icons/md";
import Logo from "./LogoTeamTide.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo */}
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="Logo" />
            </Link>

            {/* Toggle Button for Mobile View */}
            <button className="navbar-toggler" onClick={toggleMenu}>
              {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>

            {/* Navbar Items */}
            <div className={`navbar-collapse main-menu ${menuOpen ? "active" : ""}`}>
            <div className="nav-menu-wrapper">
              <ul className="navbar-nav mr-auto" id="menu">
              <li className="nav-item submenu">
                <li className="nav-item"><Link className="nav-link" to="/" onClick={toggleMenu}>Home</Link></li></li>
                <li className="nav-item"><Link className="nav-link" to="/about" onClick={toggleMenu}>About Us</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/services" onClick={toggleMenu}>Services</Link></li>

                {/* Dropdown Menu */}
                <li className="nav-item submenu">
                  <Link className="nav-link" to="#">VISA</Link>
                  <ul>
                    <li className="nav-item"><Link className="nav-link" to="/studyvisa" onClick={toggleMenu}>Study Visa</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/touristvisa" onClick={toggleMenu}>Tourist Visa</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/jobvisa" onClick={toggleMenu}>Job Visa</Link></li>
                  </ul>
                </li>

                <li className="nav-item"><Link className="nav-link" to="/contactus" onClick={toggleMenu}>Contact Us</Link></li>
              </ul>
</div>
              {/* Contact Info */}
              <div className="contact-now-box d-inline-flex">
                <div className="icon-box">
                  <MdOutlineEmail style={{color: "#FFF",height:"50px"}}/>
                </div>
                <div className="contact-now-box-content">
                  <p>Drop Us an Email</p>
                  <h3><a href=""> info@teamtide.com</a></h3>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;


