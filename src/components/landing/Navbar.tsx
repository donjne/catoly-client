"use client"
import React, { useState, useEffect } from 'react';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
    { label: 'About Us', href: '/about' },
    { label: 'Docs', href: 'https://toly.gitbook.io' },
    { label: 'Changelog', href: '/changelog' },
    { label: 'Contact', href: '/contact' },
  ];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [hoveredLink, setHoveredLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const NavLink = ({ href, label }: NavLink) => {
    const isActive = activeSection === href.slice(1);
    const isHovered = hoveredLink === label;

    return (
      <a
        href={href}
        className="relative group"
        onMouseEnter={() => setHoveredLink(label)}
        onMouseLeave={() => setHoveredLink('')}
      >
        <span className={`text-sm font-medium transition-colors duration-200 ${
          isActive ? 'text-white' : 'text-gray-300 hover:text-white'
        }`}>
          {label}
        </span>
        <span className={`absolute -bottom-1 left-0 w-full h-0.5 transform origin-left transition-all duration-300 ease-out ${
          isActive || isHovered ? 'scale-x-100 bg-green-500' : 'scale-x-0 bg-white'
        }`} />
      </a>
    );
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/80 backdrop-blur-md translate-y-0 shadow-lg' : 'bg-transparent -translate-y-1'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="Toly AI Logo" 
                className="w-8 h-8 object-contain rounded-full"
              />
              <span className="text-white text-xl font-bold bg-gradient-to-r from-gray-500 to-green-600 bg-clip-text text-transparent">
                Toly AI
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink key={link.label} {...link} />
              ))}
              <button className="relative overflow-hidden group bg-gradient-to-r from-gray-500 to-green-600 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 h-full w-full transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out bg-gradient-to-r from-gray-600 to-green-500" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`} />
                <span className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? '-rotate-45' : 'translate-y-0'
                }`} />
                <span className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'opacity-0 translate-x-3' : 'translate-y-2'
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-black/90 backdrop-blur-lg rounded-b-lg`}>
          <div className="px-4 py-3 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`block transition-all duration-200 transform ${
                  activeSection === link.href.slice(1)
                    ? 'text-white translate-x-2'
                    : 'text-gray-300 hover:text-white hover:translate-x-2'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button 
              className="w-full bg-gradient-to-r from-gray-500 to-green-600 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;