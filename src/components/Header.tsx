import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Phone } from 'lucide-react';
import { Link } from './Link';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home">Home</Link>
            <Link href="#about">About Us</Link>
            <Link href="#programs">Programs</Link>
            <Link href="#gallery">Gallery</Link>
            <Link href="#testimonials">Testimonials</Link>
            <Link href="#news">News & Events</Link>
            <Link href="#contact">Contact</Link>
          </nav>

          {/* Contact Button - Desktop */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+1234567890" 
              className="flex items-center px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-full shadow-sm hover:bg-red-600 transition-colors duration-300"
            >
              <Phone size={16} className="mr-2" />
              Call Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-blue-500 hover:text-blue-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="#home" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="#about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link href="#programs" onClick={() => setIsMenuOpen(false)}>Programs</Link>
              <Link href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
              <Link href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
              <Link href="#news" onClick={() => setIsMenuOpen(false)}>News & Events</Link>
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <a 
                href="tel:+1234567890" 
                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-full shadow-sm hover:bg-red-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={16} className="mr-2" />
                Call Us
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;