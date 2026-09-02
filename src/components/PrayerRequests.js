import React from 'react';
import Link from 'next/link';
import styles from '../styles/PrayerRequests.module.css';

const PrayerRequests = () => {
  const prayerTopics = [
    { title: 'For Job & Career', imgSrc: '/job.png' },
    { title: 'For Family & Peace', imgSrc: '/famly.jpg' },
    { title: 'For Exams & Studies', imgSrc: '/exam.jpg' },
    { title: 'Financial Breakthrough', imgSrc: '/fin.jpg' },
    { title: 'For Marriage & Relationship', imgSrc: '/mar.jpg' },
    { title: 'For Business & Work', imgSrc: '/bus.jpg' },
    { title: 'For Divine Healing', imgSrc: '/hea.jpg' },
    { title: 'Spiritual Growth & Faith', imgSrc: '/spru.jpg' },
    { title: 'For Children & Youth', imgSrc: '/chil.png' },
    { title: 'Urgent / Emergency Need', imgSrc: '/emr.png' },
  ];

  return (
    <div className={styles.prayerPageWrapper}>
      {/* Hero Banner */}
      <section className={styles.heroSection}>
        <div className={styles.heroBannerWrapper}>
          <img
            src="/ban.png"
            alt="Prayer Banner"
            className={styles.heroImageDesktop}
          />
          <img
            src="/pray.jpg"
            alt="Prayer Banner"
            className={styles.heroImageMobile}
          />
        </div>
      </section>

      {/* Main Topic Selection */}
      <section className={styles.containerHero}>
        <h1 className={styles.heading}>Submit Your Prayer Request</h1>
        <p className={styles.description}>
          "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God." — Philippians 4:6
        </p>

        <div className={styles.cardGrid}>
          {prayerTopics.map((topic, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <img
                  src={topic.imgSrc}
                  alt={topic.title}
                  className={styles.cardImage}
                />
              </div>
              <h3 className={styles.cardTitle}>{topic.title}</h3>
              <Link href={`/submitPrayer?topic=${encodeURIComponent(topic.title)}`} className={styles.prayerButton}>
                Request Prayer
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PrayerRequests;
