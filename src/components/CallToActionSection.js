import React from 'react';
import { useRouter } from 'next/router'; // Import useRouter
import styles from '../styles/CallToActionSection.module.css';

const CallToActionSection = () => {
    const router = useRouter(); // Initialize useRouter

    const handleGetInvolvedClick = () => {
        router.push('/get-involved'); // Navigate to /get-involved when "Get Involved" button is clicked
    };

    const handleContactUsClick = () => {
        router.push('/contact'); // Navigate to /contact when "Contact Us" button is clicked
    };

    return (
        <section className={styles.callToActionSection}>
            <h2 className={styles.callToActionTitle}>Join Us Today!</h2>
            <p className={styles.callToActionTagline}>
                Be part of our journey as we grow together in faith, love, and community.
            </p>
            <div className={styles.buttonWrapper}>
                <button 
                    className={styles.ctaButton} 
                    onClick={handleGetInvolvedClick} // Attach click handler to "Get Involved" button
                >
                    Get Involved
                </button>
                <button 
                    className={`${styles.ctaButton} ${styles.secondary}`} 
                    onClick={handleContactUsClick} // Attach click handler to "Contact Us" button
                >
                    Contact Us
                </button>
            </div>
        </section>
    );
};

export default CallToActionSection;
