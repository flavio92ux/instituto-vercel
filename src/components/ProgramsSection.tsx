import React from 'react';
import { Baby, AlarmClock, Palette, Music, BookOpen, Calculator } from 'lucide-react';

const programs = [
  {
    icon: <Baby size={32} className="text-blue-500" />,
    title: "Programa para Bebês",
    age: "Idades 1-3 anos",
    description: "Uma introdução suave ao ambiente escolar com muitas brincadeiras, histórias e atividades que desenvolvem habilidades motoras finas e grossas.",
    color: "bg-blue-50 border-blue-200"
  },
  {
    icon: <Palette size={32} className="text-red-500" />,
    title: "Educação Infantil",
    age: "Idades 2-3 anos",
    description: "Foco na criatividade, desenvolvimento da linguagem e habilidades sociais através de arte, música, contação de histórias e atividades em grupo.",
    color: "bg-red-50 border-red-200"
  },
  {
    icon: <BookOpen size={32} className="text-green-500" />,
    title: "Pré-alfabetização",
    age: "Idade 3 anos",
    description: "Preparação para o jardim de infância com atividades de alfabetização inicial, matemática, exploração científica e desenvolvimento social aprimorado.",
    color: "bg-green-50 border-green-200"
  }
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Programas Educacionais</h2>
          <div className="w-20 h-1 bg-blue-500 mb-6"></div>
          <p className="max-w-3xl text-lg text-gray-700">
            Oferecemos uma variedade de programas projetados para atender às necessidades de desenvolvimento das crianças em diferentes idades, promovendo o crescimento cognitivo, social, emocional e físico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className={`rounded-lg border p-6 transition-all duration-300 hover:shadow-lg ${program.color}`}
            >
              <div className="mb-4">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{program.title}</h3>
              <p className="text-sm font-medium text-gray-500 mb-4">{program.age}</p>
              <p className="text-gray-700">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-red-500 text-white font-medium rounded-full shadow-md hover:bg-red-600 transition-colors duration-300"
          >
            Matricule seu Filho
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
