"use client";
import React from 'react';
import styles from './Contact.module.css';
import { useScrollAnimation } from './useScrollAnimation';

const Contact = () => {
  useScrollAnimation();

  return (
    <section className={styles.contactSection}>
      <div className={`${styles.contactInfo} reveal-left`}>
        <h2 className={styles.title}>Let's Build the<br/>Future Together</h2>
        <p className={styles.description}>
          Whether you're exploring value-added programs or looking to create customized learning experiences for your students, we're here to help.
        </p>

        <h3 className={styles.subTitle}>Contact Us</h3>

        <div className={styles.infoList}>
          <div className={`${styles.infoItem} reveal`} style={{ transitionDelay: '0.05s' }}>
            <div className={`${styles.iconBox} ${styles.iconEmail}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <a href="mailto:Contact@artmountacademy.in" className={styles.infoText}>Contact@artmountacademy.in</a>
          </div>
          <div className={`${styles.infoItem} reveal`} style={{ transitionDelay: '0.12s' }}>
            <div className={`${styles.iconBox} ${styles.iconPhone}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
              </svg>
            </div>
            <a href="tel:+918778359643" className={styles.infoText}>+91 8778359643</a>
          </div>
          <div className={`${styles.infoItem} reveal`} style={{ transitionDelay: '0.2s' }}>
            <div className={`${styles.iconBox} ${styles.iconLocation}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <span className={styles.infoText}>Chennai, Tamilnadu, India</span>
          </div>
        </div>
      </div>

      <div className={`${styles.contactFormWrapper} reveal-right`}>
        <div className={styles.formCard}>
          <h3 className={styles.formTitle}>Get In Touch</h3>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="contact-name">Name</label>
              <input id="contact-name" type="text" placeholder="Your full name" className={styles.input} />
            </div>
            <div className={styles.inputGroupPhone}>
              <div className={styles.countryCode}>
                <span>+91</span>
                <span className={styles.arrowDown}>▼</span>
              </div>
              <input type="tel" placeholder="Contact number" className={styles.inputPhone} />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="contact-email">Email</label>
              <input id="contact-email" type="email" placeholder="your@email.com" className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="contact-institute">Institute Name</label>
              <input id="contact-institute" type="text" placeholder="Your institution" className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="contact-location">Location</label>
              <input id="contact-location" type="text" placeholder="City, State" className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="contact-message">Message</label>
              <textarea id="contact-message" placeholder="Tell us about your requirements..." className={styles.textarea}></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>
              <span>Submit</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
