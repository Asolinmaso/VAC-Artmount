"use client";
import React, { useState,useRef,useEffect } from 'react';
import Image from "next/image";
import styles from './Hero.module.css';
import CountUp from "react-countup";



const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const circleLeftRef = useRef<HTMLDivElement>(null);
  const circleRightRef = useRef<HTMLDivElement>(null);


  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 20);
  //   };
  //   window.addEventListener('scroll', handleScroll, { passive: true });
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !circleLeftRef.current || !circleRightRef.current) return;
      
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 60; 
      const yPos = (clientY / window.innerHeight - 0.5) * 60;
      
      requestAnimationFrame(() => {
        if (circleLeftRef.current) {
          circleLeftRef.current.style.transform = `translate(${xPos * 1.5}px, ${yPos * 1.5}px)`;
        }
        if (circleRightRef.current) {
          circleRightRef.current.style.transform = `translate(${xPos * -2}px, ${yPos * -2}px)`;
        }
      });
    };



    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section ref={heroRef} className={styles.heroSection}>
      <div ref={circleLeftRef} className={styles.parallaxWrapperLeft}>
        <div className={styles.bgEllipseLeft}></div>
      </div>
      <div ref={circleRightRef} className={styles.parallaxWrapperRight}>
        <div className={styles.bgEllipseRight}></div>
      </div>
      <div className={styles.bgStripes}></div>

      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/artmount-logo.png"
            alt="Artmount Academy"
            width={180}
            height={60}
            priority
          />
        </div>

        {/* Desktop nav */}
        <nav className={styles.nav}>
          <a href="#home" className={styles.navLink}>Home</a>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#courses" className={styles.navLink}>Courses</a>
          <a href="#benefits" className={styles.navLink}>Benefits</a>
        </nav>

        <a href="#contact" className={styles.contactBtn}>
          Contact Us
        </a>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile drawer */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <a href="#home" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>About</a>
        <a href="#courses" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Courses</a>
        <a href="#benefits" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Benefits</a>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div className={styles.menuBackdrop} onClick={() => setMenuOpen(false)} />
      )}

      <div className={styles.heroContent}>
        <span className={styles.subtitle}>Value Added Training Programs</span>
        <h1 className={styles.title}>Empowering Students<br/>with Future-Ready Skills</h1>
        <p className={styles.description}>
          Practical learning programs that help students build in-demand skills and prepare for tomorrow's careers.
        </p>
        <div className={styles.actionButtons}>
          <a href="#courses" className={styles.exploreBtn}>
            Explore Programs
          </a>

          <a href="#contact" className={styles.contactUsBtn}>
            Contact Us
          </a>
        </div>
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
   <h2 className={styles.statNumber}>
  <CountUp end={30} duration={2} />
  +
</h2>
  <p className={styles.statText}>Industry Programs</p>
        </div>
        <div className={styles.statDivider}></div>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>
  <CountUp
    end={7}
    duration={2}
    formattingFn={(value) =>
      value.toString().padStart(2, "0")
    }
  />
  +
</h2>
          <p className={styles.statText}>Academic Domains</p>
        </div>
        <div className={styles.statDivider}></div>
        <div className={styles.statItem}>
<h2 className={styles.statNumber}>
  <CountUp
    end={100000}
    duration={3}
    formattingFn={(value) =>
      Math.floor(value).toLocaleString("en-IN")
    }
  />
  +
</h2>
          <p className={styles.statText}>Students Empowered</p>
        </div>
        <div className={styles.statDivider}></div>
        <div className={styles.statItem}>
<h2 className={styles.statNumber}>
  <CountUp end={100} duration={2.5} />
  +
</h2>
          <p className={styles.statText}>Expert Mentors</p>
        </div>
      </div>

      <div className={styles.marqueeContainer}>
<div className={styles.marqueeTrack}>
  <span>Industry-Aligned Learning</span>
  <span className={styles.dot}>•</span>

  <span>Practical Skills</span>
  <span className={styles.dot}>•</span>

  <span>Emerging Technologies</span>
  <span className={styles.dot}>•</span>

  <span>Expert Mentorship</span>
  <span className={styles.dot}>•</span>

  <span>Real-World Learning</span>

  <span className={styles.dot}>•</span>

  <span>Industry-Aligned Learning</span>
  <span className={styles.dot}>•</span>

  <span>Practical Skills</span>
  <span className={styles.dot}>•</span>

  <span>Emerging Technologies</span>
  <span className={styles.dot}>•</span>

  <span>Expert Mentorship</span>
  <span className={styles.dot}>•</span>

  <span>Real-World Learning</span>
</div>
      </div>
    </section>
  );
};

export default Hero;
