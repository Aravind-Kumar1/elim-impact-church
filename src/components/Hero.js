'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import styles from '../styles/Hero.module.css';

const slides = [
  {
    src: '/church.jpeg',
    alt: 'ELIM Church Building and Sanctuary',
    caption: 'House of Worship & Grace',
  },
  {
    src: '/family.jpeg',
    alt: 'ELIM Church Family and Fellowship',
    caption: 'One Family in Christ',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Building a <span className={styles.bold}>Community</span>
            <br />
            of <span className={styles.bold}>Grace</span> and{' '}
            <span className={styles.bold}>Hope</span>
          </h1>
          <p className={styles.heroSubtitle}>
            “Let the message of Christ dwell among you richly as you teach and admonish one another with all wisdom” — Colossians 3:16
          </p>
          <p className={styles.heroDescription}>
            Join a vibrant community rooted in love, faith, and service. Together, let’s worship, grow, and make a difference with purpose.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/up-events" className={`${styles.button} ${styles.primaryBtn}`}>
              Upcoming Events
            </Link>
            <Link href="/donate" className={`${styles.button} ${styles.secondaryBtn}`}>
              Donate / Give
            </Link>
          </div>
        </div>

        {/* Sliding Image Carousel */}
        <div className={styles.heroImageWrapper}>
          <div
            className={styles.sliderContainer}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {slides.map((slide, index) => {
              let slidePosClass = styles.slideNext;
              if (index === currentSlide) {
                slidePosClass = styles.slideActive;
              } else if (index < currentSlide) {
                slidePosClass = styles.slidePrev;
              }

              return (
                <div
                  key={index}
                  className={`${styles.slide} ${slidePosClass}`}
                  aria-hidden={index !== currentSlide}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className={styles.heroSlideImage}
                  />
                  <div className={styles.slideBadge}>
                    <span>{slide.caption}</span>
                  </div>
                </div>
              );
            })}

            {/* Navigation Arrows */}
            <button
              type="button"
              className={`${styles.navArrow} ${styles.prevArrow}`}
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              &#10094;
            </button>
            <button
              type="button"
              className={`${styles.navArrow} ${styles.nextArrow}`}
              onClick={nextSlide}
              aria-label="Next slide"
            >
              &#10095;
            </button>

            {/* Slide Indicators / Dots */}
            <div className={styles.indicators}>
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
