import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>
        FREE SHIPPING ON U.S. ORDERS OVER 3 PACKS - LIMITED TIME ONLY
      </h3>
    </div>
  );
};

export default Header;
