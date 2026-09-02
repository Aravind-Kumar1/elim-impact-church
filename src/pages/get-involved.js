import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import emailjs from 'emailjs-com';
import styles from '../styles/GetInvolved.module.css';
import { ToastContainer, toast } from 'react-toastify';
import { FaHandsHelping, FaUserCheck } from 'react-icons/fa';

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    involvementType: '',
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

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      involvement_type: formData.involvementType,
      message: formData.message,
      to_name: 'Church Admin'
    };

    emailjs
      .send(
        'service_ry3oqbn',
        'template_a2rk4tp',
        templateParams,
        'Kj6fxAM-8iMlZuVbd'
      )
      .then(
        () => {
          setSubmitting(false);
          toast.success('Thank you for your willingness to serve! We will connect with you soon.', { autoClose: 3500 });
          setFormData({
            name: '',
            email: '',
            phone: '',
            involvementType: '',
            message: ''
          });
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setSubmitting(false);
          toast.error('There was an error submitting the form. Please try again later.', { autoClose: 3500 });
        }
      );
  };

  return (
    <div className={styles.getInvolvedPage}>
      <Header />

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Join the Mission</span>
            <h1 className={styles.heroTitle}>Get Involved at ELIM</h1>
            <p className={styles.heroSubtitle}>
              God has uniquely gifted you to make an impact. Whether you'd like to volunteer, sing, organize, or serve the community, there is a place for you here.
            </p>
          </div>
        </section>

        {/* Form Container Section */}
        <section className={styles.formSection}>
          <div className={styles.formCard}>
            <div className={styles.formCardHeader}>
              <div className={styles.iconCircle}>
                <FaHandsHelping />
              </div>
              <h2 className={styles.formTitle}>Volunteer & Service Sign-Up</h2>
              <p className={styles.formSubtitle}>Fill out this brief form and our team will guide you on the next steps.</p>
            </div>

            <form className={styles.involvedForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.formInput}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.formInput}
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.formLabel}>Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.formInput}
                    placeholder="+91 99999 99999"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="involvementType" className={styles.formLabel}>Area of Interest *</label>
                  <select
                    id="involvementType"
                    name="involvementType"
                    value={formData.involvementType}
                    onChange={handleChange}
                    className={styles.formSelect}
                    required
                  >
                    <option value="">Select a ministry or role...</option>
                    <option value="Worship & Music Team">Worship & Music Team</option>
                    <option value="Youth Mentorship">Youth Mentorship</option>
                    <option value="Children's Sunday School">Children's Sunday School</option>
                    <option value="Community Outreach & Charity">Community Outreach & Charity</option>
                    <option value="Intercessory Prayer Team">Intercessory Prayer Team</option>
                    <option value="Media & Sound Tech">Media & Sound Tech</option>
                    <option value="Event Planning & Hospitality">Event Planning & Hospitality</option>
                    <option value="Other Service">Other Talents / General Volunteer</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Message or Skills (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.formTextArea}
                  placeholder="Tell us a little about your experience, interests, or any questions you have."
                />
              </div>

              <button type="submit" className={styles.submitBtn} disabled={submitting}>
                <FaUserCheck />
                <span>{submitting ? 'Submitting...' : 'Submit Application'}</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default GetInvolved;
