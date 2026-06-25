import React from 'react';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Programs from '@/components/Programs';
import WhyChooseUs from '@/components/WhyChooseUs';
import Banner from '@/components/Banner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <AboutUs />
      <Programs />
      <WhyChooseUs />
      <Banner />
      <Contact />
      <Footer />
    </main>
  );
}
