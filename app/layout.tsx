'use client'

import AuroraBox from '@/components/AuroraBox'
import './globals.css'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const inter = Inter({ subsets: ['latin'] })

const canUseDOM = typeof window !== 'undefined' && window.document;

if (canUseDOM) {
  AOS.init({
    // Global settings:
    offset: 10, // offset (in px) from the original trigger point
    duration: 500, // values from 0 to 3000, with step 50ms
    once: false, // whether animation should happen only once - while scrolling down
  });
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // header border logic: 
      const scrollY = window.scrollY;
      const scrollThreshold = 100;

      if (scrollY > scrollThreshold && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollY <= scrollThreshold && isScrolled) {
        setIsScrolled(false);
      }

      // smooth scroll logic :
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  // update hash in path
  useEffect(() => {
    history.replaceState(null, '', `#${activeSection}`);
  }, [activeSection])

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuroraBox />
        <Header activeSection={activeSection} isScrolled={isScrolled} />
        {children}</body>
    </html>
  )
}
