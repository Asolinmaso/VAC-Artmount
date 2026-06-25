import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.bgEllipseLeft}></div>
      <div className={styles.bgEllipseRight}></div>
      <div className={styles.bgStripes}></div>

      <header className={styles.header}>
        <div className={styles.logo}>
          {/* using text for logo as placeholder for artmount white.png */}
          <span className={styles.logoText}><span className={styles.logoA}>a</span>rtmount</span>
          <span className={styles.logoSubtext}>academy</span>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={`${styles.navLink} ${styles.navLinkActive}`}>Home</a>
          <a href="#" className={styles.navLink}>About</a>
          <a href="#" className={styles.navLink}>Courses</a>
          <a href="#" className={styles.navLink}>Benefits</a>
        </nav>
        <button className={styles.contactBtn}>Contact Us</button>
      </header>

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
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>07+</h2>
          <p className={styles.statText}>Academic Domains</p>
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>1,00,000+</h2>
          <p className={styles.statText}>Students Empowered</p>
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>100+</h2>
          <p className={styles.statText}>Expert Mentors</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

