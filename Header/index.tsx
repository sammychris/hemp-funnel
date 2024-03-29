import React from "react";
import styles from "./Header.module.css";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import Image from "next/image";
import Link from 'next/link';

type Props = {
  isOpen: boolean;
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header: React.FC<Props> = ({ isOpen, toggleMenu }) => {
  return (
    <header>
      <div className={styles.container}>
        <div
          className={styles.mobileToggle}
          onClick={() => toggleMenu(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <Link href="/">
            <Image width={200} height={38} src="/images/logo.png" alt="logo" />
            </Link>
          </div>
          <div className={styles.navContainer}>
            <Menu />
          </div>
          <div className={styles.searchSection}>
            <form className={styles.searchContainer}>
              <input type="text" placeholder="Search for people" />
              <FaSearch size={16} />
            </form>
            <div>
              <a href="" className={styles.shopLink}>
                SHOP
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobile} style={{ height: isOpen ? "100vh" : 0 }}>
        <MobileMenu openState={isOpen} toggleMenu={toggleMenu} />
      </div>
      {isOpen && <div className={styles.overlay}></div>}
    </header>
  );
};

export default Header;
