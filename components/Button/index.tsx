import styles from "./Button.module.css";

const Button = ({ text, color }: { text: string; color: string }) => {
  return (
    <>
      <button className={styles.btn}>{text}</button>
      <div className={styles.txtContainer}>
        <span className={styles.line} style={{ background: color }}></span>
        <span className={styles.txt} style={{ color }}>
          LIMITED TIME
        </span>{" "}
        <span className={styles.line} style={{ background: color }}></span>
      </div>
    </>
  );
};

export default Button;
