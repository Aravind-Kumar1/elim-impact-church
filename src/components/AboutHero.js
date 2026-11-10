'use client';

import styles from '../styles/AboutHero.module.css';
import '../styles/global.css';

const AboutHero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div> {/* Overlay for visual depth */}
      <div className={styles.contentWrapper}>
        <h1 className={styles.mainHeading}>
          Welcome to ELIM
        </h1>
        <p className={styles.subAbbreviation}>
          Emmanuel Living Integrity Mission
        </p>
        <p className={styles.subHeading}>
          We are more than just a church; we are a community united in faith, love, and service.
        </p>
        <blockquote className={styles.bibleVerse}>
          “Let us consider how we may spur one another on toward love and good deeds.” 
          <span className={styles.reference}>– Hebrews 10:24</span>
        </blockquote>
      </div>
    </section>
  );
};

export default AboutHero;
