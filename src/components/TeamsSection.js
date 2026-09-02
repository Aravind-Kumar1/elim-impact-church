'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/TeamsSection.module.css';

const teams = [
  { 
    name: 'Healing & Intercession Team', 
    image: '/heal.jpg', 
    summary: 'The Healing & Intercession Team is dedicated to nurturing the spiritual and physical well-being of individuals. Through earnest prayer, counseling, and hospital visits, they create a safe space for people to find peace, overcome struggles, and experience God’s miraculous restoration.' 
  },
  { 
    name: 'Helping & Charity Team', 
    image: '/help.jpg', 
    summary: 'The Helping Team provides assistance and essential resources to those in need, organizing food drives, clothing distribution, and community aid. Through their tireless love, they ensure no one in our community feels forgotten.' 
  },
  { 
    name: 'Worship & Music Team', 
    image: '/wor.jpg', 
    summary: 'The Worship Team leads our congregation in heartfelt praise and reverence, creating an atmosphere where hearts are lifted to God. Through songs, instruments, and prayer, they usher the church into deep spiritual encounters.' 
  },
  { 
    name: 'Youth Leadership Team', 
    image: '/pas_you.jpg', 
    summary: 'The Youth Team is committed to empowering the younger generation, organizing dynamic events, mentorship, and camps to equip youth with faith, wisdom, and strong leadership skills for the future.' 
  },
  { 
    name: 'Elders & Pastoral Council', 
    image: '/elders.jpg', 
    summary: 'The Elders provide invaluable guidance, wisdom, and spiritual support to the congregation. Drawing from years of faithful walk with the Lord, they counsel families and preserve biblical foundations.' 
  }
];

const TeamsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teams.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.teamsSection}>
      <h2 className={styles.sectionTitle}>Introducing Our Church Teams</h2>
      <p className={styles.sectionTagline}>
        "Empowering our community through dedicated and passionate servant teams."
      </p>

      <div className={styles.carouselWrapper}>
        <div className={styles.carouselContainer}>
          <div className={styles.imageWrapper}>
            {teams.map((team, index) => (
              <div 
                key={team.name}
                className={`${styles.carouselImageCard} ${index === currentIndex ? styles.active : ''}`}
              >
                <img src={team.image} alt={team.name} className={styles.carouselImageItem} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.teamInfoWrapper}>
          <h3 className={styles.teamHeading}>{teams[currentIndex].name}</h3>
          <div className={styles.teamSummary}>
            <p>{teams[currentIndex].summary}</p>
          </div>
          <div className={styles.teamIndicators}>
            {teams.map((_, idx) => (
              <span
                key={idx}
                className={`${styles.indicator} ${idx === currentIndex ? styles.activeIndicator : ''}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
