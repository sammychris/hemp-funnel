import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navigation = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/icons/logo.svg" width={236} height={88} alt="" />
        </Link>
      </div>
      <div className={styles.mobileToggle} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={styles.navigationItems}>
        <li>
          <Link href="/">100% Legal</Link>
        </li>
        <li>
          <Link href="/">Guarantee</Link>
        </li>
        <li>
          <Link href="/">FAQS</Link>
        </li>
        <li>
          <Link href="/">Custom Reviews</Link>
        </li>
      </ul>
      <div className={styles.claimButton}>
        <button className={styles.btn}>CLAIM YOUR FREE SAMPLE</button>
      </div>
    </nav>
  );
};

export default Navigation;
