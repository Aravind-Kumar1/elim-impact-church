'use client';
import React, { useState } from 'react';
import styles from '../styles/ContactUs.module.css';
import { FaMapMarkerAlt, FaShareAlt, FaWhatsapp, FaInstagram, FaYoutube, FaTwitter, FaEnvelope, FaFacebook } from 'react-icons/fa';

const ContactUs = () => {
  const [showShareOptions, setShowShareOptions] = useState(false);

  const handleGetDirections = () => {
    const destination = 'Emmanuel Living Integrity Mission, Film Nagar, Hyderabad, India';
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
    window.open(directionsUrl, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'ELIM Church',
        text: 'Join us at Emmanuel Living Integrity Mission (ELIM)!',
        url: window.location.origin
      }).catch(() => {
        setShowShareOptions(true);
      });
    } else {
      setShowShareOptions(true);
    }
  };

  const handleCloseShareOptions = () => {
    setShowShareOptions(false);
  };

  const handleCloseOnClickOutside = (e) => {
    if (e.target.classList.contains(styles.shareModal)) {
      setShowShareOptions(false);
    }
  };

  return (
    <section className={styles.contactWrapper}>
      <div className={styles.contactContainer}>
        <div className={styles.contactCard}>
          <h2 className={styles.contactHeading}>Be a Part of Our Family</h2>
          <p className={styles.contactDescription}>
            Stay connected with us throughout the week. Join us for fellowship, worship, and spiritual growth.
          </p>

          {/* Social Media Icons */}
          <div className={styles.socialIcons}>
            <a href="https://wa.me/919908113279" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.socialLink}>
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/elimimpact/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialLink}>
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@elimimpact" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={styles.socialLink}>
              <FaYoutube />
            </a>
            <a href="https://x.com/elimimpact" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialLink}>
              <FaTwitter />
            </a>
          </div>

          {/* Action Buttons */}
          <div className={styles.contactButtons}>
            <button className={`${styles.contactButton} ${styles.directionsBtn}`} onClick={handleGetDirections}>
              <FaMapMarkerAlt />
              <span>Get Directions</span>
            </button>
            <button className={`${styles.contactButton} ${styles.shareBtn}`} onClick={handleShare}>
              <FaShareAlt />
              <span>Share Church</span>
            </button>
          </div>
        </div>

        {/* Share Options Modal */}
        {showShareOptions && (
          <div className={styles.shareModal} onClick={handleCloseOnClickOutside}>
            <div className={styles.shareContent}>
              <button className={styles.closeButton} onClick={handleCloseShareOptions}>
                &times;
              </button>
              <h3 className={styles.shareHeading}>Share via</h3>
              <div className={styles.shareIcons}>
                <a href="mailto:?subject=Join%20us%20at%20ELIM%20Church&body=Be%20a%20part%20of%20our%20family%20at%20ELIM%20Church!" target="_blank" rel="noopener noreferrer" aria-label="Email">
                  <FaEnvelope />
                </a>
                <a href="https://wa.me/?text=Be%20a%20part%20of%20our%20family%20at%20ELIM%20Church!" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://elimchurch.org" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com/intent/tweet?text=Join%20us%20at%20ELIM%20Church" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
