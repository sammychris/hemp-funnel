import Image from "next/image";
import styles from "./Testimonial.module.css";
import { Rate } from "antd";
import React from "react";

interface Iprops {
  src: string;
  author: string;
  rating: number;
  title: string;
  description: string;
}

const Testimonial: React.FC<Iprops> = ({
  src,
  author,
  rating,
  title,
  description,
}) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.media}>
        <Image src={src} width={190} height={190} alt="" />
        <p>CBD Kush Berry Gummies - LIMITED EDITION</p>
      </div>
      <div className={styles.content}>
        <h3 className={styles.author}>{author}</h3>
        <Rate
          allowHalf
          disabled
          defaultValue={Number(rating) / 2}
          style={{ color: "#FFA41C" }}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Testimonial;
