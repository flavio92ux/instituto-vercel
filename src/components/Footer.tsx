import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-400 mb-4">
              Providing quality education and care for children aged 2-6 years. Our mission is to create a nurturing environment where children can learn, grow, and thrive.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors">Our Programs</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#news" className="text-gray-400 hover:text-white transition-colors">News & Events</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 School Street, Education City, ST 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-red-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-red-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@kidslearn.edu</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">School Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock size={20} className="text-red-500 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Monday - Friday</p>
                  <p className="text-gray-400">8:00 AM - 3:30 PM</p>
                </div>
              </li>
              <li className="flex items-center mt-4">
                <Clock size={20} className="text-red-500 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">After School Care</p>
                  <p className="text-gray-400">3:30 PM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} KidsLearn Academy. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;