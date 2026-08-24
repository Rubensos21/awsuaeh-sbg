import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { MarqueeTags } from '../components/ui/MarqueeTags';
import { WhyJoinSection } from '../components/sections/WhyJoinSection';
import { EventsSection } from '../components/sections/EventsSection';
import { CtaSection } from '../components/sections/CtaSection';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const HomePage: React.FC = () => {
  useEffect(() => {
    // 1. Hero Entrance Animations
    gsap.fromTo(
      '.hero-animate',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      }
    );

    // 2. Why Join Section Entrance Animations
    gsap.fromTo(
      '.why-animate',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#why-join',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // 3. Events Section Entrance Animations
    gsap.fromTo(
      '.event-animate',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#events',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // 4. CTA Section Entrance Animations
    gsap.fromTo(
      '.cta-animate',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#cta',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      // Clean up ScrollTrigger instances on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-sbg-base text-white flex flex-col selection:bg-sbg-secondary/30 selection:text-sbg-secondary">
      {/* Header / Navbar */}
      <Navbar currentPath="/" />

      {/* Main Page Content */}
      <main className="grow pt-16">
        <HeroSection />
        <MarqueeTags />
        <WhyJoinSection />
        <EventsSection />
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
