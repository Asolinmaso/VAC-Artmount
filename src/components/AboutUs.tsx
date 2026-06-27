"use client";
import React, { useState } from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('Mission');
  const [contentKey, setContentKey] = useState(0);

  const tabs = ['Vision', 'Mission', 'Goals'];

  const tabContent = {
    Vision: "To be the leading platform empowering institutions with industry-aligned programs that help students develop practical skills and prepare for tomorrow's careers.",
    Mission: "Delivering industry-aligned learning experiences that equip students with practical skills and future-ready capabilities.",
    Goals: "To bridge the gap between academia and industry by continuously evolving our curriculum and providing hands-on practical learning."
  };

  const handleTabChange = (tab: string) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
    setContentKey((k) => k + 1); // re-trigger animation
  };

  return (
    <section className={styles.aboutSection}>
      <div className={styles.tabsContainer}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.activeTab : styles.inactiveTab}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
            {activeTab === tab && <div className={styles.tabIndicator}></div>}
          </button>
        ))}
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.imageWrapper}>
          <div className={styles.placeholderImage}></div>
        </div>
        <div className={styles.textContent} key={contentKey}>
          <p>{tabContent[activeTab as keyof typeof tabContent]}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
