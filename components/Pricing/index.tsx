import styles from "./Pricing.module.css";
import Image from "next/image";
import { BsCheckLg } from "react-icons/bs";
import { IoIosLock } from "react-icons/io";

const Pricing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.priceContain}>
        <div className={styles.pricing}>
          <h4 className={styles.promo}>GET 1 SAMPLE</h4>
          <Image
            src={"/images/package-1.png"}
            height={232}
            width={159}
            alt=""
          />
          <h3 className={styles.price}>Free</h3>
          <div className={styles.freeLabel}>
            JUST PAY $6.99 SHIPPING+HANDLING
          </div>
          <button className={styles.btn}>ADD TO CART</button>
          <div className={styles.secure}>
            <span style={{ fontSize: 25 }}>
              <IoIosLock />
            </span>
            <span>Secure & Trusted Checkout</span>
          </div>
        </div>
      </div>

      <div className={styles.pricingBestValue}>
        <div className={styles.header}>
          <h3>Best Value</h3>
        </div>
        <h4 className={styles.promo}>
          BUY 6 SAMPLES - GET <span>{`50% OFF + FREE SHIPPING`}</span>
        </h4>
        <Image src={"/images/package-3.png"} width={379} height={247} alt="" />
        <ul>
          <li>
            <BsCheckLg /> All Natural Ingredients
          </li>
          <li>
            <BsCheckLg /> Premium Flavor
          </li>
          <li>
            <BsCheckLg /> Free Shipping
          </li>
        </ul>
        <h3 className={styles.price}>
          $4.99<span>/Sample</span>
        </h3>
        <p className={styles.save}>YOU SAVE $30.00</p>
        <button className={styles.btnBest}>ADD TO CART</button>
        <div className={styles.secure}>
          <span style={{ fontSize: 25 }}>
            <IoIosLock />
          </span>
          <span>Secure & Trusted Checkout</span>
        </div>
        <div className={styles.discount}>
          <span>$59.94</span>
          {" $29.94"}
        </div>
      </div>

      <div className={styles.priceContain}>
        <div className={styles.pricing}>
          <div className={styles.header} style={{ background: "#000" }}>
            <h3 style={{ color: "#fff" }}>Best Value</h3>
          </div>
          <h4 className={styles.promo}>
            BUY 3 SAMPLES - GET <span>{"35% OFF"}</span>
          </h4>
          <Image
            src={"/images/package-2.png"}
            width={379}
            height={247}
            alt=""
          />
          <h3 className={styles.price}>
            $6.50<span>/Sample</span>
          </h3>
          <p className={styles.save}>YOU SAVE $30.00</p>
          <button className={styles.btn}>ADD TO CART</button>
          <div className={styles.secure}>
            <span style={{ fontSize: 25 }}>
              <IoIosLock />
            </span>
            <span>Secure & Trusted Checkout</span>
          </div>
          <div className={styles.discount}>
            <span>$59.94</span>
            {" $29.94"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
