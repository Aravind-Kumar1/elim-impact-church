"use client";

import styles from '../styles/MissionVision.module.css';

const MissionVision = () => {
  return (
    <section className={styles.missionVisionSection}>
      <h2 className={styles.sectionTitle}>Our Mission and Vision</h2>
      <p className={styles.sectionTagline}>
        "Building faith, spreading love, and transforming lives through Christ."
      </p>
      <div className={styles.contentWrapper}>
        <div className={styles.box}>
          <h3 className={styles.boxHeading}>Our Mission</h3>
          <p className={styles.boxText}>
            To inspire and nurture faith by living the teachings of Christ, empowering individuals, 
            and building a compassionate community rooted in love and service.
          </p>
        </div>
        <div className={styles.box}>
          <h3 className={styles.boxHeading}>Our Vision</h3>
          <p className={styles.boxText}>
            To create a world where every soul experiences the transformative power of grace, hope, 
            and faith through a life lived in Christ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
