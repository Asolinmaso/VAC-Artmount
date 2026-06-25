import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactInfo}>
        <h2 className={styles.title}>Let's Build the<br/>Future Together</h2>
        <p className={styles.description}>
          Whether you're exploring value-added programs or looking to create customized learning experiences for your students, we're here to help.
        </p>
        
        <h3 className={styles.subTitle}>Contact Us</h3>
        
        <div className={styles.infoList}>
          <div className={styles.infoItem}>
            <div className={styles.iconBox}></div>
            <span className={styles.infoText}>Contact@artmountacademy.in</span>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.iconBox}></div>
            <span className={styles.infoText}>+91 8778359643</span>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.iconBox}></div>
            <span className={styles.infoText}>Chennai, Tamilnadu, India</span>
          </div>
        </div>
      </div>
      
      <div className={styles.contactFormWrapper}>
        <div className={styles.formCard}>
          <h3 className={styles.formTitle}>Get In Touch</h3>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Name" className={styles.input} />
            </div>
            <div className={styles.inputGroupPhone}>
              <div className={styles.countryCode}>
                <span>+91</span>
                <span className={styles.arrowDown}>▼</span>
              </div>
              <input type="text" placeholder="Contact" className={styles.inputPhone} />
            </div>
            <div className={styles.inputGroup}>
              <input type="email" placeholder="E-mail" className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Institute Name" className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Location" className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
              <textarea placeholder="Message" className={styles.textarea}></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
