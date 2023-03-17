import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={styles.container}
      style={{ position: isOpen ? "fixed" : "relative" }}
    >
      <div className={styles.top}>
        <h3 className={styles.header}>SAVE UP TO 50% + FREE SHIPPING</h3>
      </div>
      <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className={styles.mobile} style={{ height: isOpen ? "100vh" : 0 }}>
        <MobileMenu openState={isOpen} toggleMenu={toggleMenu} />
      </div>
      {isOpen && <div className={styles.overlay}></div>}
    </header>
  );
};

export default Header;
