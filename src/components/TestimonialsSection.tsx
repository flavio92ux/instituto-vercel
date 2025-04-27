import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "A KidsLearn Academy tem sido uma experiência incrível para minha filha. Ela aprendeu muito e adora ir para a escola todos os dias. Os professores são maravilhosos e realmente se importam com cada criança.",
    name: "Sarah Johnson",
    role: "Mãe da Lily, 4 anos",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "Não poderíamos estar mais felizes com a nossa escolha de matricular nosso filho na KidsLearn. O currículo é excelente e vimos um enorme crescimento nas habilidades sociais e acadêmicas dele.",
    name: "Michael Rodriguez",
    role: "Pai do Lucas, 5 anos",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "A equipe da KidsLearn vai além das expectativas. Eles criam um ambiente positivo e acolhedor onde as crianças prosperam. Meus gêmeos desenvolveram confiança e independência desde que começaram.",
    name: "Emily Chen",
    role: "Mãe da Sophia & Oliver, 3 anos",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "Fiquei impressionado com a rapidez com que meu filho aprendeu a ler na KidsLearn. Os professores tornam o aprendizado divertido, e ele sempre fica empolgado para me contar sobre seu dia quando eu o busco.",
    name: "David Williams",
    role: "Pai do James, 6 anos",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-blue-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O que os pais dizem</h2>
          <div className="w-20 h-1 bg-red-500 mb-6"></div>
          <p className="max-w-3xl text-lg text-blue-100">
            Ouça de nossas famílias maravilhosas sobre suas experiências sobre o Instituto.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-xl p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-300">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="#FFC107" color="#FFC107" size={20} />
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl text-gray-700 italic mb-4">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <button 
                onClick={prevTestimonial}
                className="bg-white text-blue-500 rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-white text-blue-500 rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors"
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-blue-300'
                }`}
                aria-label={`Ir para o depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
