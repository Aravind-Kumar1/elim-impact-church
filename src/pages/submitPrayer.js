import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/SubmitPrayer.module.css';
import { useRouter } from 'next/router';
import emailjs from 'emailjs-com';
import { FaPray, FaPaperPlane } from 'react-icons/fa';

const SubmitPrayer = () => {
  const [fullName, setFullName] = useState('');
  const [prayerFor, setPrayerFor] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [prayerRequest, setPrayerRequest] = useState('');
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const router = useRouter();
  const { topic: queryTopic } = router.query;

  useEffect(() => {
    if (queryTopic) {
      setTopic(queryTopic);
    }
  }, [queryTopic]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const emailData = {
      fullName,
      prayerFor,
      city,
      phone,
      prayerRequest,
      topic: topic || 'General Prayer Need',
    };

    try {
      const response = await emailjs.send(
        'service_hk4bk58',
        'template_i26yacp',
        emailData,
        'MikydQenH8f_SH65S'
      );

      if (response.status === 200) {
        setMessage('Prayer request sent successfully!');
        router.push('/success');
      } else {
        setMessage(`Error: ${response.text}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage('Failed to send prayer request. Please try again or call our prayer line.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.prayerSubmitPage}>
      <Header />

      <main className={styles.mainContent}>
        {/* Hero Banner */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Confidential & Dedicated Prayer</span>
            <h1 className={styles.heroHeading}>
              Prayer Request {topic ? `: ${topic}` : ''}
            </h1>
            <p className={styles.heroDescription}>
              Tell us your prayer burden. Our dedicated pastor and intercession team will pray earnestly over your request.
            </p>
          </div>
        </section>

        {/* Form Container */}
        <section className={styles.formSection}>
          <div className={styles.formCard}>
            <div className={styles.formCardHeader}>
              <div className={styles.iconCircle}>
                <FaPray />
              </div>
              <h2 className={styles.formTitle}>Enter Your Details</h2>
              <p className={styles.formSubtitle}>All requests are treated with strict confidentiality and love.</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.formContainer}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="fullName" className={styles.formLabel}>Your Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    placeholder="Enter your full name"
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="prayerFor" className={styles.formLabel}>Prayer For *</label>
                  <select
                    id="prayerFor"
                    value={prayerFor}
                    onChange={(e) => setPrayerFor(e.target.value)}
                    required
                    className={styles.formSelect}
                  >
                    <option value="">Select Recipient...</option>
                    <option value="myself">Myself</option>
                    <option value="parents">Parents</option>
                    <option value="sister">Sister</option>
                    <option value="brother">Brother</option>
                    <option value="friends">Friends</option>
                    <option value="children">Children</option>
                    <option value="spouse">Spouse</option>
                    <option value="family">Family</option>
                    <option value="community">Community</option>
                    <option value="church">Church</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="city" className={styles.formLabel}>City / Location *</label>
                  <select
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    className={styles.formSelect}
                  >
                    <option value="">Select Your City...</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Pune">Pune</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Others">Other Cities / International</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.formLabel}>Phone Number (+91) *</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="Enter your contact number"
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formGroupFull}>
                <label htmlFor="prayerRequest" className={styles.formLabel}>
                  Detailed Prayer Request *
                </label>
                <textarea
                  id="prayerRequest"
                  value={prayerRequest}
                  onChange={(e) => setPrayerRequest(e.target.value)}
                  required
                  maxLength={1500}
                  placeholder="Please describe your prayer need or health condition in detail..."
                  className={styles.formTextarea}
                />
              </div>

              {message && <div className={styles.statusMessage}>{message}</div>}

              <button type="submit" className={styles.submitButton} disabled={loading}>
                <FaPaperPlane />
                <span>{loading ? 'Submitting Prayer...' : 'Submit Prayer Request'}</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SubmitPrayer;
