import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Church Info */}
        <div className={styles.footerSection}>
          <div className={styles.footerLogo}>
            <img src="/logo.jpg?v=2" alt="ELIM Church Logo" className={styles.footerLogoImg} />
            <h3 className={styles.footerChurchName}>ELIM CHURCH</h3>
          </div>
          <p className={styles.footerAboutText}>
            Emmanuel Living Impact Mission is a Christ-centered community dedicated to spreading God's love, hope, and salvation to all people.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionHeading}>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/prayer">Prayer Requests</Link></li>
            <li><Link href="/kids-youth">Kids & Youth</Link></li>
            <li><Link href="/up-events">Upcoming Events</Link></li>
            <li><Link href="/donate">Donate / Give</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionHeading}>Contact Info</h4>
          <ul className={styles.contactList}>
            <li>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <span>Patel Nagar, Film Nagar, Hyderabad, Telangana 500096</span>
            </li>
            <li>
              <FaEnvelope className={styles.contactIcon} />
              <a href="mailto:emmanuellivingimpactmission@gmail.com">emmanuellivingimpactmission@gmail.com</a>
            </li>
            <li>
              <FaPhoneAlt className={styles.contactIcon} />
              <a href="tel:+919908113279">+91 99081 13279</a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionHeading}>Follow Us</h4>
          <p className={styles.socialText}>Connect with us on our social media platforms to stay updated with sermons and events.</p>
          <div className={styles.footerSocialIcons}>
            <a href="https://www.facebook.com/elimimpact" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://x.com/elimimpact" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/elimimpact" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@elimimpact" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.footerCopyright}>
        <p>&copy; {new Date().getFullYear()} Emmanuel Living Impact Mission (ELIM). All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
