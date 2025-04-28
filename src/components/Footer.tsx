import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
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
              Oferecendo educação de qualidade e cuidados para crianças de 1 a 3 anos. Nossa missão é criar um ambiente acolhedor onde as crianças possam aprender, crescer e prosperar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors">Nossos Programas</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Galeria</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Depoimentos</a></li>
              {/* <li><a href="#news" className="text-gray-400 hover:text-white transition-colors">Notícias & Eventos</a></li> */}
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">R. Cel. Américo Teixeira Guimarães, 401 - Industrial, Contagem - MG, 32235-130</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-red-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">(31) 3321-8224</span>
              </li>
              <li className="flex items-center">
                <FaWhatsapp size={20} className="text-red-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">(31) 99585-2001</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-red-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">instituto.serfeliz@yahoo.com.br</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Horário de Funcionamento</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock size={20} className="text-red-500 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Segunda a Sexta</p>
                  <p className="text-gray-400">07h - 17h</p>
                </div>
              </li>
              {/* <li className="flex items-center mt-4">
                <Clock size={20} className="text-red-500 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Cuidado Pós-Escola</p>
                  <p className="text-gray-400">3:30 PM - 6:00 PM</p>
                </div>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Instituto Ser Feliz. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Política de Privacidade</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Termos de Serviço</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Política de Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
