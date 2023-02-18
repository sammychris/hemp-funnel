import styles from "./Button.module.css";

const Button = ({ text }: { text: string }) => {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>{text}</button>
    </div>
  );
};

export default Button;
