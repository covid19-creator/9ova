"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center transition-all duration-300">
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[85%] xl:w-[70%] flex h-24 items-center justify-start transition-all duration-300">
        <Link href="/" className="flex items-center">
          <img 
            src="/Logo-9-White.svg" 
            alt="Logo" 
            className={`transition-all duration-300 ${
              isScrolled ? 'h-24 w-24 -ml-1' : 'h-40 w-40 -ml-2'
            }`} 
          />
        </Link>
        {/* Future navigation items can go here */}
        {/* <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <Link
            href="/#projects"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Contact
          </Link>
        </nav> */}
      </div>
    </header>
  );
}
