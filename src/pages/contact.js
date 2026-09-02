import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const { name, email, phone, subject, message } = formData;

    const templateParams = {
      from_name: name,
      from_email: email,
      phone: phone,
      subject: subject,
      message: message,
      to_name: 'Church Support',
    };

    emailjs
      .send(
        'service_ry3oqbn',
        'template_gbups93',
        templateParams,
        'Kj6fxAM-8iMlZuVbd'
      )
      .then(
        () => {
          setSubmitting(false);
          toast.success('Message sent successfully! We will get in touch soon.', { autoClose: 3500 });
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setSubmitting(false);
          toast.error(`Failed to send message. Please try again or call us directly.`, { autoClose: 3500 });
        }
      );
  };

  return (
    <div className={styles.contactPageWrapper}>
      <Header />

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Get In Touch</span>
            <h1 className={styles.heroTitle}>We’d Love to Hear From You</h1>
            <p className={styles.heroSubtitle}>
              Whether you have questions, need spiritual counsel, or want to visit us, we are here for you.
            </p>
          </div>
        </section>

        {/* Contact Content Container */}
        <section className={styles.contactSection}>
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <div className={styles.formCard}>
              <h2 className={styles.cardHeading}>Send Us a Message</h2>
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    className={styles.inputField}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      className={styles.inputField}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.formLabel}>Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone number (+91)"
                      className={styles.inputField}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.formLabel}>Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject of your message"
                    className={styles.inputField}
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can we help or pray for you?"
                    className={styles.textArea}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className={styles.submitBtn} disabled={submitting}>
                  <FaPaperPlane />
                  <span>{submitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            </div>

            {/* Contact Information & Map */}
            <div className={styles.infoCard}>
              <h2 className={styles.cardHeading}>Church Information</h2>
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <strong>Church Address</strong>
                    <p>Film Nagar Rd Number 13, Tarakarama Nagar, Hakimpet, Hyderabad, Telangana 500096</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <strong>Phone Number</strong>
                    <p><a href="tel:+919908113279">+91 99081 13279</a></p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <FaEnvelope />
                  </div>
                  <div>
                    <strong>Email Address</strong>
                    <p><a href="mailto:emmanuellivingimpactmission@gmail.com">emmanuellivingimpactmission@gmail.com</a></p>
                  </div>
                </div>
              </div>

              <div className={styles.mapWrapper}>
                <iframe
                  title="ELIM Church Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2220782896834!2d78.4131484758267!3d17.41938728808785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973e6b5da9d3%3A0x71dd4843c0df926a!2sFilm%20Nagar%20Rd%20Number%2013%2C%20Tarakarama%20Nagar%2C%20Hakimpet%2C%20Hyderabad%2C%20Telangana%20500096!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className={styles.mapIframe}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Contact;
