import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
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

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home">Início</Link>
            <Link href="#about">Sobre nós</Link>
            <Link href="#programs">Programas</Link>
            <Link href="#gallery">Galeria</Link>
            <Link href="#testimonials">Depoimentos</Link>
            <Link href="#news">Notícias & Eventos</Link>
            <Link href="#contact">Contato</Link>
          </nav>

          {/* Botão de Contato - Desktop */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+1234567890" 
              className="flex items-center px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-full shadow-sm hover:bg-red-600 transition-colors duration-300"
            >
              <Phone size={16} className="mr-2" />
              Contate-nos
            </a>
          </div>

          {/* Botão do Menu Mobile */}
          <button
            className="md:hidden p-2 text-blue-500 hover:text-blue-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Navegação Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="#home" onClick={() => setIsMenuOpen(false)}>Início</Link>
              <Link href="#about" onClick={() => setIsMenuOpen(false)}>Sobre nós</Link>
              <Link href="#programs" onClick={() => setIsMenuOpen(false)}>Programas</Link>
              <Link href="#gallery" onClick={() => setIsMenuOpen(false)}>Galeria</Link>
              <Link href="#testimonials" onClick={() => setIsMenuOpen(false)}>Depoimentos</Link>
              <Link href="#news" onClick={() => setIsMenuOpen(false)}>Notícias & Eventos</Link>
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>Contato</Link>
              <a 
                href="tel:+1234567890" 
                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-full shadow-sm hover:bg-red-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={16} className="mr-2" />
                Contate-nos
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
