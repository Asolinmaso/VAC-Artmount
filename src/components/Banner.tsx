import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Preparing graduates not just for<br/>jobs, but for meaningful careers.
        </h2>
        <p className={styles.description}>
          Equip students with practical skills and industry-focused programs designed for tomorrow's careers.
        </p>
        <div className={styles.actions}>
          <button className={styles.exploreBtn}>Explore Programs</button>
          <button className={styles.contactBtn}>Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
