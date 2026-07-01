"use client";

import React, { useState } from "react";
import styles from "./AboutUs.module.css";

type TabType = "Vision" | "Mission" | "Goals";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState<TabType>("Mission");

  const tabContent: Record<
    TabType,
    {
      image: string;
      text: string;
    }
  > = {
    Vision: {
      image: "/vision.png",
      text: "Empowering students with future-ready skills and bridging the gap between academic learning and industry expectations.",
    },

    Mission: {
      image: "/vision.png",
      text: "Delivering industry-aligned learning experiences that equip students with practical skills and future-ready capabilities.",
    },

    Goals: {
      image: "/vision.png",
      text: "Enhance employability, foster innovation, and prepare students for success in a rapidly evolving world.",
    },
  };

  return (
    <section className={styles.aboutWrapper}>
      <div className={styles.topSection}>
        <div className={styles.leftImage}>
          <img
            src="/about-building.png"
            alt="About Artmount Academy"
          />
        </div>

        <div className={styles.rightContent}>
          <span className={styles.aboutLabel}>About Us</span>

          <h2 className={styles.heading}>
            Bridging Academia with
            <br />
            <span>Industry</span>
          </h2>

          <p className={styles.description}>
            Artmont Academy empowers institutions with industry-aligned
            learning programs that help students develop practical skills,
            explore emerging technologies, and prepare for evolving career
            opportunities across diverse disciplines.
          </p>

          <div className={styles.tabsContainer}>
            {(["Vision", "Mission", "Goals"] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${styles.tab}
                  ${tab === "Vision" ? styles.visionTab : ""}
                  ${tab === "Mission" ? styles.missionTab : ""}
                  ${tab === "Goals" ? styles.goalsTab : ""}
                `}
              >
                {tab}

                {activeTab === tab && (
                  <div
                    className={styles.tabIndicator}
                    style={{
                      borderTop:
                        tab === "Mission"
                          ? "14px solid #8C2A92"
                          : "14px solid #36A8DF",
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className={styles.contentContainer}>
            <img
              src={tabContent[activeTab].image}
              alt={activeTab}
              className={styles.tabImage}
            />

            <div className={styles.textContent}>
              <p>{tabContent[activeTab].text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;