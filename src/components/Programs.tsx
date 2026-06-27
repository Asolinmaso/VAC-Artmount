"use client";
import React, { useState } from 'react';
import styles from './Programs.module.css';
import { useScrollAnimation } from './useScrollAnimation';

const Programs = () => {
  useScrollAnimation();
  const [activeProgram, setActiveProgram] = useState('CS_IT');
  const [detailKey, setDetailKey] = useState(0);

  const programsData = {
    CS_IT: {
      name: 'Computer Science & IT',
      desc: 'From coding to cloud, explore programs that build in-demand technology skills and empower digital innovation.',
      courses: [
        'Full Stack Development',
        'Blockchain Technology',
        'Cyber Security',
        'Data Science',
        'Artificial Intelligence & Machine Learning (AI/ML)'
      ]
    },
    DESIGN: {
      name: 'Design & Creative Media',
      desc: 'Transform ideas into impactful visual experiences through industry-focused programs in design, storytelling, digital content, and creative communication.',
      courses: [
        'UI/UX Design',
        'Graphic Design',
        'Video Editing',
        'Digital Marketing',
        'Content Creation'
      ]
    },
    MGMT: {
      name: 'Management & Commerce',
      desc: "Develop business, leadership, and communication skills through industry-focused programs designed for today's dynamic professional landscape.",
      courses: [
        'Business Communication',
        'Business Development (Sales & Marketing)',
        'Human Resource Management (HR)',
        'Finance'
      ]
    },
    HEALTH: {
      name: 'Healthcare & Life Sciences',
      desc: 'Discover the future of healthcare through programs that combine life sciences, technology, innovation, and sustainable healthcare practices.',
      courses: [
        'Medical Coding',
        'Sustainability & ESG in Healthcare',
        'AI for Life Sciences',
        'Bioinformatics & Computational Biology',
        'Nutraceuticals & Food Brand Development'
      ]
    },
    ELEC: {
      name: 'Electrical, Electronics & Emerging Technologies',
      desc: 'Explore next-generation technologies through industry-focused programs in electronics, automation, robotics, connected systems, and sustainable mobility.',
      courses: [
        'EEE & ECE Industry Applications',
        'Robotics',
        'IoT & Embedded Systems',
        'EV Technology'
      ]
    },
    MECH: {
      name: 'Mechanical & Manufacturing Engineering',
      desc: 'Build industry-ready engineering skills through programs focused on design, manufacturing, automation, and next-generation industrial technologies.',
      courses: [
        'CAD/CAM',
        '3D Design',
        'AI & Automation Tools for Engineers'
      ]
    },
    SUSTAIN: {
      name: 'Sustainability & Green Technologies',
      desc: 'Explore innovative solutions for a sustainable future through programs focused on renewable energy, environmental responsibility, and green technologies.',
      courses: [
        'Circular Economy & Green Technology',
        'Renewable Energy Systems'
      ]
    }
  };

  const programs = [
    { id: 'CS_IT', name: 'Computer Science & IT' },
    { id: 'DESIGN', name: 'Design & Creative Media' },
    { id: 'MGMT', name: 'Management & Commerce' },
    { id: 'HEALTH', name: 'Healthcare & Life Sciences' },
    { id: 'ELEC', name: 'Electrical, Electronics & Emerging Technologies' },
    { id: 'MECH', name: 'Mechanical & Manufacturing Engineering' },
    { id: 'SUSTAIN', name: 'Sustainability & Green Technologies' },
  ];

  const handleProgramChange = (id: string) => {
    if (id === activeProgram) return;
    setActiveProgram(id);
    setDetailKey((k) => k + 1);
  };

  const activeData = programsData[activeProgram as keyof typeof programsData];

  return (
    <section className={styles.programsSection}>
      <div className={`${styles.programsHeader} reveal`}>
        <div className={styles.headerLeft}>
          <span className={styles.label}>Our Programs</span>
          <h2 className={styles.title}>Explore Programs Across<br/>Diverse Disciplines</h2>
        </div>
        <div className={styles.headerRight}>
          <p className={styles.description}>
            Industry-aligned programs designed to build practical skills and prepare students for future-ready careers.
          </p>
        </div>
      </div>

      {/* Mobile: horizontal pill tabs */}
      <div className={styles.mobilePillTabs}>
        {programs.map((prog) => (
          <button
            key={prog.id}
            className={`${styles.pillTab} ${activeProgram === prog.id ? styles.pillTabActive : ''}`}
            onClick={() => handleProgramChange(prog.id)}
          >
            {prog.name}
          </button>
        ))}
      </div>

      <div className={styles.programsContent}>
        {/* Desktop: vertical list */}
        <div className={styles.programList}>
          {programs.map((prog) => (
            <button
              key={prog.id}
              className={`${styles.programItem} ${activeProgram === prog.id ? styles.active : ''}`}
              onClick={() => handleProgramChange(prog.id)}
            >
              <div className={styles.programIcon}></div>
              <span className={styles.programName}>{prog.name}</span>
              <span className={styles.programArrow}>›</span>
            </button>
          ))}
        </div>

        <div className={styles.programDetails}>
          {activeData && (
            <div className={styles.detailsPane} key={detailKey}>
              <div className={styles.detailsHeader}>
                <div className={styles.detailsIcon}></div>
                <h3 className={styles.detailsTitle}>{activeData.name}</h3>
              </div>
              <p className={styles.detailsDesc}>
                {activeData.desc}
              </p>

              <ul className={styles.courseList}>
                {activeData.courses.map((course, index) => (
                  <li
                    key={index}
                    className={styles.courseItem}
                    style={{ animationDelay: `${0.08 * index}s` }}
                  >
                    <div className={styles.courseLeft}>
                      <span className={styles.bullet}></span>
                      <span className={styles.courseName}>{course}</span>
                    </div>
                    <span className={styles.arrow}>→</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Programs;
