import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import Brand from "@/components/Brand";
import { useState } from "react";
import Pricing from "@/components/Pricing";
import { ImPlus } from "react-icons/im";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import OrderFormContainer from "@/containers/OrderFormContainer";
import CarouselTestimonials from "@/components/CarouselTestimonials";

// import CarouselPricing from "@/components/CarouselPricing";

export default function Home() {
  const [viewItem, setViewItem] = useState(0);
  return (
    <>
      <main className={styles.main}>
        <Header />
        <HeroBanner />
        <div className={styles.brands}>
          <Brand
            src="/images/brand-1.png"
            text="All Products are grown, processed and shipped in the USA"
          />
          <Brand
            src="/images/brand-2.png"
            text="Our CBD Products are Hemp-Derived and contain <0.3% Delta-9 THC."
          />
          <Brand
            src="/images/brand-3.png"
            text="All Products from blazed hemp come with a Risk-Free
            100% Money-Back Guarantee"
          />
          <Brand
            src="/images/brand-4.png"
            text="Premium Ingredients make premium tasting flavors
            with no bad aftertaste."
          />
        </div>
        <div className={styles.emotions}>
          <div className={styles.heading2}>BLAZED HEMP IS USED FOR</div>
          <div className={styles.btnContainer}>
            <div className={styles.paragraph}>
              {`Millions of people trust our gummies to help them handle anything
              life throws their way. From pain to everyday stress or sleepless
              nights, we're here to help - with holistic hemp done right. Find
              the perfect product for you!`}
            </div>
            <Button text="CLAIM YOUR FREE SAMPLE" color="#000" />
          </div>
        </div>
        <div className={styles.emotions1}>
          <div className={styles.btnContainer}>
            <Button text="CLAIM YOUR FREE SAMPLE" color="#fff" />
          </div>
        </div>
        {/* <div className={styles.line}></div> */}
        <Pricing />
        <OrderFormContainer />

        <CarouselTestimonials />

        {/* <div id="payment-element"> */}

        <div className={styles.discount}>
          <Image src={"/images/barge.png"} alt="" width={221} height={216} />
          <div className={styles.discountContent}>
            <h2>100% SATISFACTION 60-DAYS MONEY BACK GUARANTEE</h2>
            <p>
              We make sure that every customer is 100% satisfied. If you don’t
              love it then at any time within 60 days let us know and we’ll
              refund every single penny of your investment. No question asked.
            </p>
            <div className={styles.icons}>
              <Image
                src={"/icons/icon-1.svg"}
                alt=""
                width={111}
                height={111}
              />
              <Image
                src={"/icons/icon-2.svg"}
                alt=""
                width={111}
                height={111}
              />
              <Image
                src={"/icons/icon-3.svg"}
                alt=""
                width={111}
                height={111}
              />
              <Image
                src={"/icons/icon-4.svg"}
                alt=""
                width={152}
                height={128}
              />
            </div>
          </div>
        </div>

        <div className={styles.faqSection}>
          <h3>CBD GUMMIES FAQS</h3>
          <div className={styles.faqList}>
            <div className={styles.faqHeader} onClick={() => setViewItem(0)}>
              <div className={styles.faqLeft}>
                <Image
                  src="/icons/question.svg"
                  height={35}
                  width={31}
                  alt=""
                />
                <h3>What are CBD Gummies?</h3>
              </div>
              <h3>
                <ImPlus />
              </h3>
            </div>
            {/* <div
              className={viewItem === 0 ? styles.display : styles.displayActive}
            >
              {`Our new giveaway promotion is LIVE...we giving away a
                2022 Ram 2500 CUMMINS DIESEL 4x4 + $10,000 CASH! With
                each purchase, you are automatically entered into our
                giveaway to WIN! Every $1 you spend gets you 1 entry
                into the giveaway...it's that easy!`}
            </div> */}
          </div>
          <div className={styles.faqList}>
            <div className={styles.faqHeader} onClick={() => setViewItem(0)}>
              <div className={styles.faqLeft}>
                <Image
                  src="/icons/teloscope.svg"
                  height={35}
                  width={31}
                  alt=""
                />
                <h3>What are the benefits of CBD?</h3>
              </div>
              <h3>
                <ImPlus />
              </h3>
            </div>
            {/* <div
              className={viewItem === 0 ? styles.display : styles.displayActive}
            >
              {`Our new giveaway promotion is LIVE...we giving away a
                2022 Ram 2500 CUMMINS DIESEL 4x4 + $10,000 CASH! With
                each purchase, you are automatically entered into our
                giveaway to WIN! Every $1 you spend gets you 1 entry
                into the giveaway...it's that easy!`}
            </div> */}
          </div>
          <div className={styles.faqList}>
            <div className={styles.faqHeader} onClick={() => setViewItem(0)}>
              <div className={styles.faqLeft}>
                <Image src="/icons/smilie.svg" height={35} width={31} alt="" />
                <h3>How does CBD Gummies make me feel?</h3>
              </div>
              <h3>
                <ImPlus />
              </h3>
            </div>
            {/* <div
              className={viewItem === 0 ? styles.display : styles.displayActive}
            >
              {`Our new giveaway promotion is LIVE...we giving away a
                2022 Ram 2500 CUMMINS DIESEL 4x4 + $10,000 CASH! With
                each purchase, you are automatically entered into our
                giveaway to WIN! Every $1 you spend gets you 1 entry
                into the giveaway...it's that easy!`}
            </div> */}
          </div>
          <div className={styles.faqList}>
            <div className={styles.faqHeader} onClick={() => setViewItem(0)}>
              <div className={styles.faqLeft}>
                <Image src="/icons/justice.svg" height={35} width={31} alt="" />
                <h3>Are CBD Gummies legal?</h3>
              </div>
              <h3>
                <ImPlus />
              </h3>
            </div>
            {/* <div
              className={viewItem === 0 ? styles.display : styles.displayActive}
            >
              {`Our new giveaway promotion is LIVE...we giving away a
                2022 Ram 2500 CUMMINS DIESEL 4x4 + $10,000 CASH! With
                each purchase, you are automatically entered into our
                giveaway to WIN! Every $1 you spend gets you 1 entry
                into the giveaway...it's that easy!`}
            </div> */}
          </div>
          <div className={styles.faqList}>
            <div className={styles.faqHeader} onClick={() => setViewItem(0)}>
              <div className={styles.faqLeft}>
                <Image src="/icons/person.svg" height={35} width={31} alt="" />
                <h3>Are there any CBD Gummie side effects?</h3>
              </div>
              <h3>
                <ImPlus />
              </h3>
            </div>
            {/* <div
              className={viewItem === 0 ? styles.display : styles.displayActive}
            >
              {`Our new giveaway promotion is LIVE...we giving away a
                2022 Ram 2500 CUMMINS DIESEL 4x4 + $10,000 CASH! With
                each purchase, you are automatically entered into our
                giveaway to WIN! Every $1 you spend gets you 1 entry
                into the giveaway...it's that easy!`}
            </div> */}
          </div>
          <div className={styles.btnContainer}>
            <Button text="CLAIM YOUR FREE SAMPLE" color="#000" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
