'use client'

import './globals.css'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

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
  },[activeSection])

  return (
    <html lang="en">
      <body className={inter.className}>
      <Header activeSection={activeSection} isScrolled={isScrolled}/>
        {children}</body>
    </html>
  )
}
