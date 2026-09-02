'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/Header.module.css';

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuIconRef = useRef(null);

  const isActive = (path) => {
    return pathname === path ? styles.active : '';
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        menuIconRef.current && !menuIconRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink} onClick={closeMenu}>
            <img src="/logo.jpg" alt="Church Logo" className={styles.logoImage} />
            <div className={styles.logoTextContainer}>
              <span className={styles.logoText}>ELIM</span>
              <span className={styles.subtitle}>Emmanuel Living Impact Mission</span>
            </div>
          </Link>
        </div>

        <nav ref={menuRef} className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/" className={`${styles.navLink} ${isActive('/')}`} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={`${styles.navLink} ${isActive('/about')}`} onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/prayer" className={`${styles.navLink} ${isActive('/prayer')}`} onClick={closeMenu}>
                Prayer Requests
              </Link>
            </li>
            <li>
              <Link href="/kids-youth" className={`${styles.navLink} ${isActive('/kids-youth')}`} onClick={closeMenu}>
                Kids & Youth
              </Link>
            </li>
            <li>
              <Link href="/contact" className={`${styles.navLink} ${isActive('/contact')}`} onClick={closeMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/donate" className={`${styles.navLink} ${isActive('/donate')}`} onClick={closeMenu}>
                Donate
              </Link>
            </li>
          </ul>

          <div className={styles.mobileCtaContainer}>
            <Link href="/get-involved" onClick={closeMenu}>
              <button className={styles.ctaButton}>Get Involved</button>
            </Link>
          </div>
        </nav>

        <div className={styles.desktopCtaContainer}>
          <Link href="/get-involved">
            <button className={styles.ctaButton}>Get Involved</button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={`${styles.menuIcon} ${menuOpen ? styles.menuIconActive : ''}`}
          onClick={toggleMenu}
          ref={menuIconRef}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
