import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Success.module.css';
import { FaCheckCircle, FaHome, FaHeart } from 'react-icons/fa';

const Success = () => {
  return (
    <div className={styles.successPage}>
      <Header />

      <main className={styles.mainContent}>
        <div className={styles.successCard}>
          <div className={styles.iconCircle}>
            <FaCheckCircle />
          </div>
          <h1 className={styles.successHeading}>Prayer Request Received!</h1>
          <p className={styles.successMessage}>
            "The prayer of a righteous person is powerful and effective." — James 5:16
          </p>
          <p className={styles.subText}>
            Our pastor and prayer team have received your request and will be lifting your need before God in earnest prayer. May His grace and peace surround you.
          </p>

          <div className={styles.buttonGroup}>
            <Link href="/" className={styles.homeBtn}>
              <FaHome />
              <span>Back to Home</span>
            </Link>
            <Link href="/prayer" className={styles.prayerBtn}>
              <FaHeart />
              <span>More Topics</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Success;
