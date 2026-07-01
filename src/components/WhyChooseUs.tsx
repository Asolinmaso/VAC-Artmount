"use client";
import React from 'react';
import styles from './WhyChooseUs.module.css';
import { useScrollAnimation } from './useScrollAnimation';

const features = [
  {
    title: 'Industry Programs',
    desc: 'Aligning academics with industry and career needs.',
    
  },
  {
    title: 'Expert Training',
    desc: 'Delivered by experts with practical experience.',
    
  },
  {
    title: 'Flexible Delivery',
    desc: 'Supporting online, offline, and hybrid learning.',
    
  },
  {
    title: 'Complete Support',
    desc: 'From planning to seamless program execution.',
   
  },
];

const WhyChooseUs = () => {
  useScrollAnimation();

  return (
    <section className={styles.whySection}>
      <span className={`${styles.label} reveal`}>Why Institutions Choose Us</span>
      <h2 className={`${styles.title} reveal`}>A Trusted Partner for <span>Student Success</span></h2>
      <p className={`${styles.description} reveal`}>
        We work closely with institutions to deliver industry-aligned learning experiences that empower students with practical skills and future-ready capabilities.
      </p>

      <div className={styles.featuresContainer}>
        {features.map((feature, index) => (
          <React.Fragment key={feature.title}>
            <div
              className={`${styles.featureItem} reveal`}
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
            
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.desc}</p>
            </div>
            {index < features.length - 1 && (
              <div className={styles.divider}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
