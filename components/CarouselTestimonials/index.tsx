import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./CarouselTestimonials.module.css";
import TestimonialItem from "@/components/TestimonialItem";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { Rate } from "antd";

interface Testimonial {
  id: number;
  src: string;
  author: string;
  rating: number;
  title: string;
  description: string;
}

const testimonialData = [
  {
    id: 1,
    src: "/images/package-1.png",
    author: "Ebuka",
    title: "Quality CBD and fast shipping",
    rating: 5,
    description:
      "These are my husband’s favorite.  He likes the flavor.  They do have sugar all over them.",
  },
  {
    id: 2,
    src: "/images/package-1.png",
    author: "James",
    title: "Quality CBD and fast shipping",
    rating: 5,
    description:
      "These are my husband’s favorite.  He likes the flavor.  They do have sugar all over them.",
  },
  {
    id: 3,
    src: "/images/package-1.png",
    author: "sammy",
    title: "Quality CBD and fast shipping",
    rating: 5,
    description:
      "These are my husband’s favorite.  He likes the flavor.  They do have sugar all over them.",
  },
];

const CarouselTestimonials = () => {
  const items = testimonialData.map((data) => (
    <TestimonialItem key={data.id} data={data} />
  ));

  const responsive = {
    0: {
      items: 1,
    },
    1024: {
      items: 2,
      itemsFit: "contain",
    },
    1250: {
      items: 3,
      itemsFit: "contain",
    },
  };

  return (
    <div className={styles.testimonials}>
      <h3>What Our Customers Say</h3>
      <div className={styles.testimonialsCounts}>
        <div>Real Reviews from Real Costumers</div>
        <div>
          <Rate
            allowHalf
            disabled
            defaultValue={5}
            style={{ color: "#FFA41C" }}
          />{" "}
          {"1246 Reviews "} <FaLessThan />
          <FaGreaterThan />
        </div>
      </div>
      <div>
        <div className={styles.testimonialList}>
          <AliceCarousel mouseTracking items={items} responsive={responsive} />
        </div>
      </div>
    </div>
  );
};

export default CarouselTestimonials;
