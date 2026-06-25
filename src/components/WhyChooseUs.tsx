import React from 'react';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
  return (
    <section className={styles.whySection}>
      <span className={styles.label}>Why Institutions Choose Us</span>
      <h2 className={styles.title}>A Trusted Partner for Student Success</h2>
      <p className={styles.description}>
        We work closely with institutions to deliver industry-aligned learning experiences that empower students with practical skills and future-ready capabilities.
      </p>

      <div className={styles.featuresContainer}>
        <div className={styles.featureItem}>
          <h3 className={styles.featureTitle}>Industry Programs</h3>
          <p className={styles.featureDesc}>Aligning academics with industry and career needs.</p>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.featureItem}>
          <h3 className={styles.featureTitle}>Expert Training</h3>
          <p className={styles.featureDesc}>Delivered by experts with practical experience.</p>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.featureItem}>
          <h3 className={styles.featureTitle}>Flexible Delivery</h3>
          <p className={styles.featureDesc}>Supporting online, offline, and hybrid learning</p>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.featureItem}>
          <h3 className={styles.featureTitle}>Complete Support</h3>
          <p className={styles.featureDesc}>From planning to seamless program execution.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
