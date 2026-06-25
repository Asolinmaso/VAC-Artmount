import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoText}>artmount</span>
          <span className={styles.logoSubtext}>academy</span>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>Home</a>
          <a href="#" className={styles.navLink}>About</a>
          <a href="#" className={styles.navLink}>Courses</a>
          <a href="#" className={styles.navLink}>Benefits</a>
        </nav>
        <button className={styles.contactBtn}>Contact Us</button>
      </header>

      <div className={styles.heroContent}>
        <span className={styles.subtitle}>Value-Added Training Programs</span>
        <h1 className={styles.title}>Empowering Students<br/>with Future-Ready Skills</h1>
        <p className={styles.description}>
          Best learning platform that help students build in-demand skills and prepare for tomorrow's careers.
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
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>07+</h2>
          <p className={styles.statText}>Innovation Hubs</p>
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>1,00,000+</h2>
          <p className={styles.statText}>Students Impacted</p>
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>100+</h2>
          <p className={styles.statText}>Placement Partners</p>
        </div>
      </div>
      
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          <span>Empowering Learning</span>
          <span>•</span>
          <span>Practical Skills</span>
          <span>•</span>
          <span>Bridging Technologies</span>
          <span>•</span>
          <span>Future Ready</span>
          <span>•</span>
          <span>Value Added Programs</span>
          <span>•</span>
          <span>Empowering Learning</span>
          <span>•</span>
          <span>Practical Skills</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
