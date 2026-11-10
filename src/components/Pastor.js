import React from 'react';
import styles from '../styles/Pastor.module.css';

const Pastor = () => {
  return (
    <section className={styles.pastorSection}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.sectionHeading}>Meet Our Pastor</h2>
      </div>

      <div className={styles.container}>
        <div className={styles.pastorImageWrapper}>
          <img
            className={styles.pastorImage}
            src="/pastor.jpg"
            alt="Pastor Rev A Krupa Rao Garu"
          />
        </div>

        <div className={styles.pastorSummary}>
          <span className={styles.pastorTag}>Man of God</span>
          <h3 className={styles.name}>Pastor Rev A Krupa Rao Garu</h3>
          <p className={styles.pastorPosition}>
            Founder & Senior Pastor, Emmanuel Living Integrity Mission
          </p>

          <div className={styles.pastorBox}>
            <h4>Pastor's Vision</h4>
            <p>
              Pastor Rev A Krupa Rao Garu is a dedicated and anointed servant of God, known for his passionate teachings of Christ's unconditional love, faith, hope, and spiritual transformation. He has committed his life to shepherding believers, raising disciple leaders, and serving the community with humility and integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pastor;
