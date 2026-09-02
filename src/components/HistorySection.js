// React Component: HistorySection.jsx
"use client";

import { useEffect, useState } from "react";
import styles from "../styles/HistorySection.module.css";

const HistorySection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    "/fir.jpg", // Image 1
    "/sec.jpg", // Image 2
    "/thir.JPG", // Image 3
    "/emmanuel church.jpg", // Image 3
    "/old.jpg", // Image 1
    "/last.jpg",
    "/pas_you.jpg", // Image 2
   
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className={styles.historySection}>
      <h2 className={styles.historySectionTitle}>Our History</h2>
      <p className={styles.historySectionSubtitle}>
        "Building a legacy of faith and community since 1996."
      </p>
      <div className={styles.historyContentWrapper}>
        {/* Image Slider */}
        <div className={styles.imageCard}>
          <div className={styles.imageSlider}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`${styles.slide} ${index === activeSlide ? styles.active : ""}`}
              >
                <img
                  src={image}
                  alt={`History Slide ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Text Summary */}
        <div className={styles.textCard}>
          <h3>Our Journey</h3>
          <p>
            The journey of Emmanuel Living Impact Mission (ELIM) began in 1996
            at Film Nagar with a small but determined group of believers. Through
            unwavering dedication, hard work, and prayer, we built a strong community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
