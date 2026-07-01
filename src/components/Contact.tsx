"use client";
import React from 'react';
import styles from './Contact.module.css';
import { useScrollAnimation } from './useScrollAnimation';

const Contact = () => {
  useScrollAnimation();

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={`${styles.contactInfo} reveal-left`}>
        <div>
  <h2 className={styles.title}>
    Let's Build the<br/>Future Together
  </h2>

  <p className={styles.description}>
    Whether you're exploring value-added programs or looking to create customized learning experiences for your students, we're here to help.
  </p>
</div>

<div className={styles.contactBottom}>
  <h3 className={styles.subTitle}>Contact Us</h3>

  <div className={styles.infoList}>

    <div
      className={`${styles.infoItem} reveal`}
      style={{ transitionDelay: "0.05s" }}
    >
      <div className={styles.iconBox}>
        <img
          src="/mail.png"
          alt="mail"
          className={styles.contactIcon}
        />
      </div>

      <a
        href="mailto:Contact@artmountacademy.in"
        className={styles.infoText}
      >
        Contact@artmountacademy.in
      </a>
    </div>

    <div
      className={`${styles.infoItem} reveal`}
      style={{ transitionDelay: "0.12s" }}
    >
      <div className={styles.iconBox}>
        <img
          src="/phone.png"
          alt="phone"
          className={styles.contactIcon}
        />
      </div>

      <a
        href="tel:+918778359643"
        className={styles.infoText}
      >
        +91 8778359643
      </a>
    </div>

    <div
      className={`${styles.infoItem} reveal`}
      style={{ transitionDelay: "0.2s" }}
    >
      <div className={styles.iconBox}>
        <img
          src="/location.png"
          alt="location"
          className={styles.contactIcon}
        />
      </div>

      <span className={styles.infoText}>
        Chennai, Tamilnadu, India
      </span>
    </div>

  </div>
</div>
      </div>

      <div className={`${styles.contactFormWrapper} reveal-right`}>
        <div className={styles.formCard}>
          <h3 className={styles.formTitle}>Get In Touch</h3>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <input id="contact-name" type="text" placeholder="Name" className={styles.input} />
            </div>
            <div className={styles.inputGroupPhone}>
        <div className={styles.countryCode}>
          <select className={styles.countrySelect}>
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+61">+61</option>
            <option value="+971">+971</option>
          </select>
        </div>

        <input
          type="tel"
          placeholder="Contact"
          className={styles.inputPhone}
        />
      </div>
            <div className={styles.inputGroup}>
              <input id="contact-email" type="email" placeholder="E-mail" className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
              <input id="contact-institute" type="text" placeholder="Institute Name" className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
              <input id="contact-location" type="text" placeholder="Location" className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
              <textarea id="contact-message" placeholder="Message" className={styles.textarea}></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>
              <span>Submit</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
