import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.sectionHeading}>About Our Church</h2>

      <div className={styles.container}>
        {/* Image on the Left */}
        <div className={styles.imageWrapper}>
          <img
            className={styles.aboutImage}
            src="/fam.jpg"
            alt="ELIM Church Family"
          />
        </div>

        {/* Text Box on the Right */}
        <div className={styles.aboutText}>
          <div className={styles.aboutBox}>
            <h3 className={styles.boxHeading}>Welcome to ELIM Family</h3>
            <p className={styles.aboutPara}>
              At Emmanuel Living Impact Mission (ELIM), we are a vibrant family committed to spreading God's love, hope, and faith to our community. We believe in living with purpose, integrity, and active service, creating a welcoming spiritual home for everyone.
            </p>
            <div className={styles.memberBadge}>
              <span className={styles.memberText}>We are a growing family of</span>
              <span className={styles.number}>800+ Members</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
