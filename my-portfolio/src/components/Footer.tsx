import React from 'react';
import { SocialLink } from '../types';
import logo from "/favicon-32x32.png";


interface FooterProps {
  socialLinks: SocialLink[];
}

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2 ">
              <span><img src={logo} alt='logo' className='mb-2'/></span>
              Comfort Opurum Chinenye 
            </h2>
            <p className="text-sm text-gray-400">Software Engineer</p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={link.platform}
              >
                <i className={`fab fa-${link.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Opurum Comfort Chinenye. All rights reserved.
          </p>
          
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;