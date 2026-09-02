import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/UpEvents.module.css';
import { FaCalendarAlt } from 'react-icons/fa';

const events = {
  previous: [
    {
      id: 1,
      title: 'Christmas Celebration',
      date: 'December 25, 2024',
      description: 'A joyous celebration of Christmas worship and choir with the whole church family.',
      image: '/fest1.jpg',
    },
    {
      id: 2,
      title: 'Watch Night Service',
      date: 'December 31, 2024',
      description: 'A heartfelt thanksgiving night service transitioning into the new year with blessings.',
      image: '/fest2.jpg',
    },
    {
      id: 3,
      title: 'New Year Praise Gathering',
      date: 'January 1, 2025',
      description: 'Starting the new year with prayer, vision casting, and family fellowship.',
      image: '/fam.jpg',
    },
    {
      id: 4,
      title: 'Love Fest Fellowship',
      date: 'February 14, 2025',
      description: 'Celebrating God’s unconditional agape love and strengthening bonds in Christ.',
      image: '/fest3.jpg',
    },
  ],
  upcoming: [
    {
      id: 5,
      title: 'Youth Revival Conference',
      date: 'March 20, 2025',
      description: 'An empowering conference for youth and young adults to connect, learn, and grow.',
      image: '/emmanuel church.jpg',
    },
    {
      id: 6,
      title: 'Easter Sunday Resurrection Service',
      date: 'April 20, 2025',
      description: 'Join us for a glorious Easter Sunday celebration honoring our risen King.',
      image: '/emmanuel church.jpg',
    },
    {
      id: 7,
      title: 'Annual Vacation Bible School (VBS)',
      date: 'May 10, 2025',
      description: 'A fun-filled week of learning, scripture memory, music, and games for children.',
      image: '/kid.jpg',
    },
    {
      id: 8,
      title: 'Mid-Year Fasting & Prayer Summit',
      date: 'June 15, 2025',
      description: 'A solemn gathering of believers seeking spiritual revival and church growth.',
      image: '/both.jpg',
    },
  ],
};

const UpEvents = () => {
  return (
    <div className={styles.upEventsPage}>
      <Header />

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Church Calendar</span>
            <h1 className={styles.heroTitle}>Church Events & Gatherings</h1>
            <p className={styles.heroSubtitle}>
              Stay connected with all our special services, conferences, holiday celebrations, and community events.
            </p>
          </div>
        </section>

        <div className={styles.eventsContainer}>
          {/* Upcoming Events Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Upcoming Events</h2>
            <div className={styles.cardsContainer}>
              {events.upcoming.map((event) => (
                <div key={event.id} className={styles.card}>
                  <div className={styles.cardImageWrapper}>
                    <img src={event.image} alt={event.title} className={styles.cardImage} />
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardDate}>
                      <FaCalendarAlt />
                      <span>{event.date}</span>
                    </div>
                    <h3 className={styles.cardTitle}>{event.title}</h3>
                    <p className={styles.cardDescription}>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Previous Events Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Previous Highlights</h2>
            <div className={styles.cardsContainer}>
              {events.previous.map((event) => (
                <div key={event.id} className={styles.card}>
                  <div className={styles.cardImageWrapper}>
                    <img src={event.image} alt={event.title} className={styles.cardImage} />
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardDate}>
                      <FaCalendarAlt />
                      <span>{event.date}</span>
                    </div>
                    <h3 className={styles.cardTitle}>{event.title}</h3>
                    <p className={styles.cardDescription}>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UpEvents;
