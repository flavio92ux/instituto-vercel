import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Elementos de Fundo */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-blue-100 opacity-70"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-red-100 opacity-70"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
        <div className="absolute -top-20 left-10 w-20 h-20 rounded-full bg-blue-400 opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 rounded-full bg-red-400 opacity-20 animate-float-delay"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 rounded-full bg-yellow-400 opacity-20 animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              <span className="text-blue-500">Nutrir</span> Mentes Jovens,
              <span className="text-red-500"> Construir </span> Futuros Brilhantes
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
            No Instituto Ser Feliz, criamos um ambiente acolhedor onde crianças e famílias em situação de vulnerabilidade podem crescer e se desenvolver por meio de atividades educativas e sociais.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Inscreva-se
                <ArrowRight size={20} className="ml-2" />
              </a>
              <a 
                href="#programs" 
                className="inline-flex items-center px-6 py-3 text-blue-500 border-2 border-blue-500 rounded-full hover:bg-blue-50 transition-colors duration-300"
              >
                Explorar
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-red-500 rounded-3xl transform rotate-3"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-500 rounded-3xl transform -rotate-3"></div>
              <div className="relative z-10 overflow-hidden rounded-3xl shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/8535214/pexels-photo-8535214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Crianças brincando e aprendendo" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
