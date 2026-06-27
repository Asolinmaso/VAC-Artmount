"use client";
import React, { useState } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className={styles.heroSection}>
      <div className={styles.bgEllipseLeft}></div>
      <div className={styles.bgEllipseRight}></div>
      <div className={styles.bgStripes}></div>

      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoText}><span className={styles.logoA}>a</span>rtmount</span>
          <span className={styles.logoSubtext}>academy</span>
        </div>

        {/* Desktop nav */}
        <nav className={styles.nav}>
          <a href="#" className={`${styles.navLink} ${styles.navLinkActive}`}>Home</a>
          <a href="#" className={styles.navLink}>About</a>
          <a href="#" className={styles.navLink}>Courses</a>
          <a href="#" className={styles.navLink}>Benefits</a>
        </nav>

        <button className={styles.contactBtn}>Contact Us</button>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile drawer */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <a href="#" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>About</a>
        <a href="#" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Courses</a>
        <a href="#" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Benefits</a>
        <a href="#" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Contact Us</a>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div className={styles.menuBackdrop} onClick={() => setMenuOpen(false)} />
      )}

      <div className={styles.heroContent}>
        <span className={styles.subtitle}>Value Added Training Programs</span>
        <h1 className={styles.title}>Empowering Students<br/>with Future-Ready Skills</h1>
        <p className={styles.description}>
          Practical learning programs that help students build in-demand skills and prepare for tomorrow's careers.
        </p>
        <div className={styles.actionButtons}>
          <button className={styles.exploreBtn}>Explore Programs</button>
          <button className={styles.contactUsBtn}>Contact Us</button>
        </div>
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>30+</h2>
          <p className={styles.statText}>Industry Programs</p>
        </div>
        <div className={styles.statDivider}></div>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>07+</h2>
          <p className={styles.statText}>Academic Domains</p>
        </div>
        <div className={styles.statDivider}></div>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>1,00,000+</h2>
          <p className={styles.statText}>Students Empowered</p>
        </div>
        <div className={styles.statDivider}></div>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>100+</h2>
          <p className={styles.statText}>Expert Mentors</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
