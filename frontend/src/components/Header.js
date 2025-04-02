import React, { useEffect, useRef, useState } from "react";

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
      <button className="logo" onClick={() => window.scrollTo(0, 0)}>
        <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="basket" /> Chef
        Basket
      </button>
      <div
        className={`bx bx-menu ${isMenuActive ? "active" : ""}`}
        id="menu-icon"
        onClick={handleMenuClick}
        ref={menuRef}
      ></div>
      <ul className={`navbar ${isMenuActive ? "active" : ""}`} ref={navbarRef}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#shop">Shop</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
