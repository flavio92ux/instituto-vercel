import React from 'react';
import { Heart, Brain, Users, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sobre o Instituto Ser Feliz</h2>
          <div className="w-20 h-1 bg-red-500 mb-6"></div>
          <p className="max-w-3xl text-lg text-gray-700">
          O Instituto Ser Feliz é uma instituição filantrópica localizada no bairro Industrial, em Contagem, Minas Gerais. Fundado em 7 de julho de 1980 por um grupo de mães com o objetivo de oferecer apoio às famílias carentes da região, a instituição inicialmente era conhecida como Creche Criança Feliz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/8613312/pexels-photo-8613312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Crianças em sala de aula" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className='hidden lg:block'>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Filosofia</h3>
            <p className="text-gray-700 mb-6">
              Acreditamos que cada criança é única e merece uma educação adaptada às suas necessidades, interesses e estilo de aprendizado. Nosso currículo baseado em brincadeiras estimula a curiosidade, criatividade e pensamento crítico, construindo as bases para um amor pela aprendizagem que dura toda a vida.
            </p>
            <p className="text-gray-700 mb-8">
              Nossos professores dedicados criam um ambiente de apoio onde as crianças se sentem seguras para explorar, cometer erros e crescer. Trabalhamos em parceria com as famílias para garantir que cada criança alcance seu pleno potencial.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Heart size={24} className="text-red-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Cuidado Afetivo</h4>
                  <p className="text-gray-600 text-sm">Criando um ambiente amoroso e de apoio</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Brain size={24} className="text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Aprendizado Criativo</h4>
                  <p className="text-gray-600 text-sm">Estimular a imaginação e o pensamento crítico</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Users size={24} className="text-purple-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Habilidades Sociais</h4>
                  <p className="text-gray-600 text-sm">Construindo amizades e comunicação</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Award size={24} className="text-yellow-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Educação de Qualidade</h4>
                  <p className="text-gray-600 text-sm">Excelência no desenvolvimento infantil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
