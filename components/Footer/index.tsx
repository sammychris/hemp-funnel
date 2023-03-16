import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerContent}>
        <p>
          FDA DISCLAIMER: The statements made regarding these products have not
          been evaluated by the Food and Drug Administration. The efficacy of
          these products has not been confirmed by FDA-approved research. These
          products are not intended to diagnose, treat, cure or prevent any
          disease. All information presented here is not meant as a substitute
          for or alternative to information from health care practitioners.
          Please consult your health care professional about potential
          interactions or other possible complications before using any product.
          The Federal Food, Drug, and Cosmetic Act require this notice. THC
          Warning: These gummies contain 3MG of THC per 3.1G Gummy. Each Gummy
          is 0.1% THC by dry weight, in compliance with the 2018 Farm Bill.
        </p>
        <div>
          Ingredients | Terms & Conditions | Privacy Policy | Contact Us
        </div>
      </div>

      <div className={styles.copy}>BLAZEDHEMPS, LLC. ALL RIGHTS RESERVED</div>
    </div>
  );
};

export default Footer;
