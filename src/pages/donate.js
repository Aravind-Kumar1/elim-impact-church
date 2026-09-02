import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Donate.module.css';
import { FaHeart, FaHandsHelping, FaChurch, FaChild, FaUniversity, FaCopy, FaCheck } from 'react-icons/fa';

const Donate = () => {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const causes = [
    {
      icon: <FaChurch />,
      title: 'Church Ministry & Worship',
      description: 'Supporting Sunday services, gospel spreading, worship teams, and church operational needs.'
    },
    {
      icon: <FaHandsHelping />,
      title: 'Community Outreach',
      description: 'Providing food, clothing, and vital support to widows, the poor, and families in need.'
    },
    {
      icon: <FaChild />,
      title: 'Kids & Youth Programs',
      description: 'Equipping the younger generation with Bible education, camps, mentoring, and moral guidance.'
    },
    {
      icon: <FaHeart />,
      title: 'Missions & Relief',
      description: 'Supporting missionary pastors in rural villages and bringing aid during difficult times.'
    }
  ];

  return (
    <div className={styles.donatePage}>
      <Header />

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Generosity & Faith</span>
            <h1 className={styles.heading}>Make a Meaningful Difference</h1>
            <p className={styles.message}>
              Your faithful giving enables Emmanuel Living Impact Mission to serve our community,
              strengthen families, and bring the transformational love of Christ to everyone.
            </p>
            <div className={styles.verseBox}>
              <p className={styles.verseText}>
                “Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap.”
              </p>
              <span className={styles.verseRef}>— Luke 6:38</span>
            </div>
          </div>
        </section>

        {/* Causes Grid */}
        <section className={styles.causesSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Where Your Giving Goes</h2>
            <p className={styles.sectionSubtitle}>Every contribution is stewarded with integrity to make a lasting eternal impact.</p>
          </div>
          <div className={styles.causesGrid}>
            {causes.map((cause, index) => (
              <div key={index} className={styles.causeCard}>
                <div className={styles.causeIconWrapper}>
                  {cause.icon}
                </div>
                <h3 className={styles.causeTitle}>{cause.title}</h3>
                <p className={styles.causeDescription}>{cause.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bank & Giving Details Section */}
        <section className={styles.givingDetailsSection}>
          <div className={styles.detailsCard}>
            <div className={styles.detailsHeader}>
              <div className={styles.bankIconWrapper}>
                <FaUniversity />
              </div>
              <div>
                <h2 className={styles.detailsTitle}>Bank Transfer & Giving Details</h2>
                <p className={styles.detailsSubtitle}>You can transfer directly to the church official bank account</p>
              </div>
            </div>

            <div className={styles.bankInfoGrid}>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Account Name</span>
                <div className={styles.infoValueWrap}>
                  <strong className={styles.infoValue}>Emmanuel Living Impact Mission</strong>
                  <button
                    className={styles.copyBtn}
                    onClick={() => handleCopy('Emmanuel Living Impact Mission', 'name')}
                    title="Copy Account Name"
                  >
                    {copiedField === 'name' ? <FaCheck className={styles.copiedIcon} /> : <FaCopy />}
                    <span>{copiedField === 'name' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Account Type</span>
                <span className={styles.infoValue}>Savings Account</span>
              </div>

              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>Patel Nagar, Film Nagar, Hyderabad</span>
              </div>

              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Contact for Support & Receipts</span>
                <div className={styles.infoValueWrap}>
                  <strong className={styles.infoValue}>+91 99081 13279</strong>
                  <button
                    className={styles.copyBtn}
                    onClick={() => handleCopy('+919908113279', 'phone')}
                    title="Copy Phone Number"
                  >
                    {copiedField === 'phone' ? <FaCheck className={styles.copiedIcon} /> : <FaCopy />}
                    <span>{copiedField === 'phone' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.noteBox}>
              <p>
                <strong>Thank you for your generous heart!</strong> After making a donation, please share the transaction details with our office so we can issue an acknowledgment and receipt.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;
