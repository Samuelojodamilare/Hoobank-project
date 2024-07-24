import React, { useEffect, useState } from "react";
import styles from "./style";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  Footer,
  FeedbackCard,
  CTA,
  Button,
} from "./components";

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const heroTop = document
        .getElementById("home")
        .getBoundingClientRect().top;
      if (heroTop <= 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // overflow-hidden
    <div className={`bg-primary w-full overflow-x-clip`}>
      <div
        className={`sticky z-50 top-0 transition-colors duration-300 ${
          scrolled ? "bg-primary/70 backdrop-blur-lg" : "bg-transparent"
        }`}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={` ${styles.boxWidth} `}>
            <Navbar />
          </div>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />{" "}
          <Clients /> <CTA /> <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
