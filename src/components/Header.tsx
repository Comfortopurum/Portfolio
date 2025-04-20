import React, { useState, useEffect } from 'react';
import { SocialLink } from '../types';
import logo from "/favicon-32x32.png";


interface HeaderProps {
  socialLinks: SocialLink[];
}

const Header: React.FC<HeaderProps> = ({ socialLinks }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-gray-800 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-2 flex justify-between items-center">
        
        <a href="#" >
        <img 
          src={logo}
          alt="logo"
          />
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
                aria-label={link.platform}
              >
                <i className={`fab fa-${link.icon}`}></i>
              </a>
            ))}
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 px-4 py-3 shadow-lg">
          <div className="flex flex-col space-y-3">
            <a 
              href="#about" 
              className="hover:text-blue-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="hover:text-blue-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="hover:text-blue-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="hover:text-blue-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex space-x-4 py-2">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                  aria-label={link.platform}
                >
                  <i className={`fab fa-${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
