import Link from 'next/link';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Building a <span className={styles.bold}>Community</span>
            <br />
            of <span className={styles.bold}>Grace</span> and{' '}
            <span className={styles.bold}>Hope</span>
          </h1>
          <p className={styles.heroSubtitle}>
            “Let the message of Christ dwell among you richly as you teach and admonish one another with all wisdom” — Colossians 3:16
          </p>
          <p className={styles.heroDescription}>
            Join a vibrant community rooted in love, faith, and service. Together, let’s worship, grow, and make a difference with purpose.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/up-events" className={`${styles.button} ${styles.primaryBtn}`}>
              Upcoming Events
            </Link>
            <Link href="/donate" className={`${styles.button} ${styles.secondaryBtn}`}>
              Donate / Give
            </Link>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <img
            src="/emmanuel church.jpg"
            alt="Church Community"
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
