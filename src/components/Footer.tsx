import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContent}>
        <div className={styles.columnLogo}>
          <div className={styles.logo}>
            <span className={styles.logoText}>artmount</span>
            <span className={styles.logoSubtext}>academy</span>
          </div>
          <p className={styles.description}>
            Empowering institutions with industry-aligned programs that help students develop practical skills and prepare for tomorrow's careers.
          </p>
          <div className={styles.socialSection}>
            <span className={styles.socialLabel}>Follow Us</span>
            <div className={styles.socialIcons}>
              <div className={styles.socialIcon}></div>
              <div className={styles.socialIcon}></div>
              <div className={styles.socialIcon}></div>
              <div className={styles.socialIcon}></div>
            </div>
          </div>
        </div>
        
        <div className={styles.columnLinks}>
          <h3 className={styles.columnTitle}>Quick Links</h3>
          <ul className={styles.linkList}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Programs</a></li>
            <li><a href="#">Why Choose Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        
        <div className={styles.columnAddress}>
          <h3 className={styles.columnTitle}>Office Address</h3>
          <p className={styles.addressText}>
            No.4, Alamathi main road, New Vellanur, Avadi, Chennai-600062
          </p>
          <p className={styles.addressText}>
            c201a, 19th St, Periyar nagar West, Perambur, Chennai-600082
          </p>
        </div>
      </div>
      
      <div className={styles.largeTextBg}>
        ARTMOUNT
      </div>
    </footer>
  );
};

export default Footer;
