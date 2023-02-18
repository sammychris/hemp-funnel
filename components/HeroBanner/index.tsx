import Button from "../Button";
import styles from "./HeroBanner.module.css";

const HeroBanner = () => {
  return (
    <div className={styles.container}>
      <Button text="CLAIM YOUR FREE SAMPLE" />
    </div>
  );
};

export default HeroBanner;
