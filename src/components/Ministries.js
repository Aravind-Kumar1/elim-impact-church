import React from 'react';
import Link from 'next/link';
import styles from '../styles/Ministries.module.css';

const Ministries = () => {
  const ministries = [
    {
      title: 'Youth Ministry',
      image: '/youth.jpg',
      description: 'Bringing young people together through dynamic worship, discipleship, fun fellowship, and life-changing spiritual growth.'
    },
    {
      title: "Children's Ministry",
      image: '/kid.jpg',
      description: 'Nurturing the next generation in God’s Word with engaging Bible stories, songs, crafts, and interactive Sunday school.'
    },
    {
      title: "Women's Ministry",
      image: '/women.jpg',
      description: 'Empowering women of all ages to grow deeply in faith, pray together, encourage one another, and serve the church and community.'
    }
  ];

  return (
    <section className={styles.ministriesSection}>
      <h2 className={styles.sectionHeading}>Our Ministries</h2>

      <div className={styles.cardsContainer}>
        {ministries.map((min, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <img className={styles.cardImage} src={min.image} alt={min.title} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{min.title}</h3>
              <p className={styles.cardDescription}>{min.description}</p>
              <Link href="/get-involved" className={styles.cardButton}>
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ministries;
