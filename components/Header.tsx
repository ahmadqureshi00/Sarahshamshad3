"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-off-white/90 dark:bg-charcoal/90 backdrop-blur-sm py-3 shadow-sm" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <Link href="/" className="text-xl font-lora font-bold text-charcoal dark:text-off-white">
            Sarah Shamshad
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-charcoal dark:text-off-white hover:text-teal dark:hover:text-teal transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-charcoal dark:text-off-white hover:text-teal dark:hover:text-teal transition-colors">
              About
            </Link>
            <Link href="/portfolio" className="text-charcoal dark:text-off-white hover:text-teal dark:hover:text-teal transition-colors">
              Portfolio
            </Link>
            <Link href="/certifications" className="text-charcoal dark:text-off-white hover:text-teal dark:hover:text-teal transition-colors">
              Certifications
            </Link>
            <Link href="/services" className="text-charcoal dark:text-off-white hover:text-teal dark:hover:text-teal transition-colors">
              Services
            </Link>
            <Link href="/blog" className="text-charcoal dark:text-off-white hover:text-teal dark:hover:text-teal transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-charcoal dark:text-off-white hover:text-teal dark:hover:text-teal transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-charcoal dark:text-off-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-charcoal dark:text-off-white hover:text-teal dark:hover:text-teal transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-charcoal dark:text-off-white hover:text-teal dark:hover:text-teal transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/portfolio" 
                className="text-charcoal dark:text-off-white hover:text-teal dark:hover:text-teal transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                href="/certifications" 
                className="text-charcoal dark:text-off-white hover:text-teal dark:hover:text-teal transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Certifications
              </Link>
              <Link 
                href="/services" 
                className="text-charcoal dark:text-off-white hover:text-teal dark:hover:text-teal transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/blog" 
                className="text-charcoal dark:text-off-white hover:text-teal dark:hover:text-teal transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="text-charcoal dark:text-off-white hover:text-teal dark:hover:text-teal transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}