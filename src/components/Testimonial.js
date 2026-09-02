'use client';
import React, { useState } from 'react';
import styles from '../styles/Testimonial.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Willson',
      role: 'Youth Mentor',
      image: '/w.png',
      text: 'After attending ELIM, my faith was restored, and I experienced healing in my life. I feel closer to God than ever before.',
    },
    {
      name: 'Shiva',
      role: 'Youth Leader',
      image: '/shiva.jpg',
      text: 'God has shown me a new purpose and direction through this community. It has been a truly transformative journey.',
    },
    {
      name: 'Raj Paul',
      role: 'Assistant Youth Leader',
      image: '/raj.jpg',
      text: 'I found a family here and witnessed God’s work in ways I never imagined. Every prayer session brings divine strength.',
    },
    {
      name: 'Mathews',
      role: 'Worship Leader',
      image: '/nani.jpg',
      text: 'The worship sessions here transformed my relationship with God. I’ve developed a deep sense of peace and divine purpose.',
    },
    {
      name: 'Uday Kiran',
      role: 'Sound Technician',
      image: '/u.jpg',
      text: 'I’ve witnessed countless miracles in this community. The atmosphere is filled with hope, love, and divine intervention.',
    },
    {
      name: 'Praveen',
      role: 'Youth Volunteer Coordinator',
      image: '/pra.jpg',
      text: 'Serving in this community has brought immense fulfillment. Seeing lives transformed by grace has been a true blessing.',
    },
    {
      name: 'Issac',
      role: 'Prayer Coordinator',
      image: '/is.jpg',
      text: 'Leading prayers here has been an honor. I’ve seen God answer prayers faithfully in the most remarkable ways.',
    },
    {
      name: 'Jeevan Kumar',
      role: 'Youth Event Coordinator',
      image: '/jeevan.jpg',
      text: 'Organizing events has shown me the power of unity and faith. It’s been an inspiring and joyous journey.',
    }
  ];

  const [startIndex, setStartIndex] = useState(0);

  const nextTestimonials = () => {
    if (startIndex + 1 < testimonials.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const prevTestimonials = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionHeading}>Miracles & Testimonies</h2>
        <p className={styles.sectionSubtitle}>Hear how God is moving in the lives of our church family</p>
      </div>

      <div className={styles.testimonialWrapper}>
        <button
          className={`${styles.arrowButton} ${styles.leftBtn}`}
          onClick={prevTestimonials}
          disabled={startIndex === 0}
          aria-label="Previous Testimonial"
        >
          <FaChevronLeft />
        </button>

        <div className={styles.testimonialsContainer}>
          {testimonials.slice(startIndex, startIndex + 3).map((item, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.avatarWrapper}>
                <img src={item.image} alt={item.name} className={styles.avatar} />
              </div>
              <p className={styles.testimonialText}>"{item.text}"</p>
              <h4 className={styles.testimonialAuthor}>{item.name}</h4>
              <span className={styles.testimonialRole}>{item.role}</span>
            </div>
          ))}
        </div>

        <button
          className={`${styles.arrowButton} ${styles.rightBtn}`}
          onClick={nextTestimonials}
          disabled={startIndex + 3 >= testimonials.length}
          aria-label="Next Testimonial"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Mobile Indicator Dots */}
      <div className={styles.dotsContainer}>
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index >= startIndex && index < startIndex + 3 ? styles.activeDot : ''}`}
            onClick={() => setStartIndex(Math.min(index, testimonials.length - 3))}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
