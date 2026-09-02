'use client';

import styles from '../styles/FaithfulServants.module.css';

const FaithfulServants = () => {
  return (
    <section className={styles.servantsSection}>
      <h2 className={styles.sectionTitle}>Faithful Servants of God</h2>
      <p className={styles.sectionTagline}>
        "Dedicated to spreading love, service, and faith through Christ’s teachings."
      </p>
      <div className={styles.contentWrapper}>
        {/* Text Card */}
        <div className={styles.textCard}>
          <h3 className={styles.heading}>Life of Faithful Service</h3>
          <p className={styles.text}>
            <span className={styles.nameHighlight}>Pastor Rev A Krupa Rao Garu</span> and <span className={styles.nameHighlight}>Kamala Garu</span> embody selfless love and spiritual leadership. Their lives of faith, prayer, and tireless service to the community reflect the profound love of Christ, guiding others with humility, grace, and compassion.
          </p>
        </div>

        {/* Image Card */}
        <div className={styles.imageCard}>
          <div className={styles.imageWrapper}>
            <img src="/both.jpg" alt="Faithful Servants of God" className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaithfulServants;
