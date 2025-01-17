import React from 'react';
import { Twitter, Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Docs', href: 'https://toly.gitbook.io' },
    { label: 'Changelog', href: '/changelog' },
    { label: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { 
      icon: <Twitter className="w-5 h-5" />, 
      href: 'https://twitter.com/tolyai',
      label: 'Twitter'
    },
    { 
      icon: <Github className="w-5 h-5" />, 
      href: 'https://github.com/tolyai',
      label: 'GitHub'
    },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
        
        {/* Animated orbs */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl opacity-30 animate-pulse"
            style={{
              background: 'linear-gradient(to right, rgba(74, 222, 128, 0.1), rgba(34, 197, 94, 0.1))',
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s',
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand section */}
          <div className="space-y-6">
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
            <p className="text-gray-400 text-sm">
              Next-generation AI-powered analytics for the Solana blockchain.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/5 rounded-lg group"
                  aria-label={link.label}
                >
                  <div className="transform transition-transform duration-200 group-hover:scale-110">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute left-0 bottom-0 w-full h-px bg-green-500 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
                    </span>
                    {link.href.startsWith('https') && (
                      <ExternalLink className="w-4 h-4 ml-1 transform transition-transform duration-200 group-hover:rotate-45" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started button and newsletter */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-white font-semibold mb-6">Stay Updated</h3>
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-l-lg focus:outline-none focus:border-green-500 text-white placeholder-gray-500"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-gray-500 to-green-600 text-white rounded-r-lg transition-transform duration-200 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
            
            <div>
              <a
                href="/get-started"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-500 to-green-600 rounded-lg text-white font-medium transform hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Powered by</span>
              <a
                href="https://arcane.inc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400 transition-colors duration-200 flex items-center group"
              >
                <span className="relative">
                  Arcane Inc
                  <span className="absolute left-0 bottom-0 w-full h-px bg-green-500 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
                </span>
                <ExternalLink className="w-3 h-3 ml-1 transform transition-transform duration-200 group-hover:rotate-45" />
              </a>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</a>
              <span>© 2024 Toly AI. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;