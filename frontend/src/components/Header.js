import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header className={isScrolled ? "active" : ""}>
      <Link to="/" className="logo" onClick={() => window.scrollTo(0, 0)}>
        <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="basket" /> Chef
        Basket
      </Link>
      <div
        className={`bx bx-menu ${isMenuActive ? "active" : ""}`}
        id="menu-icon"
        onClick={handleMenuClick}
        ref={menuRef}
      ></div>
      <ul className={`navbar ${isMenuActive ? "active" : ""}`} ref={navbarRef}>
        <li>
          <Link to="/" onClick={() => setIsMenuActive(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsMenuActive(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/shop" onClick={() => setIsMenuActive(false)}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsMenuActive(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
