import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    title: "Inscrições para o Acampamento de Verão Abertas",
    date: "15 de maio de 2025",
    excerpt: "Nosso empolgante programa de acampamento de verão está com as inscrições abertas. As vagas são limitadas, então inscreva-se cedo!",
    image: "https://images.pexels.com/photos/296302/pexels-photo-296302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Anúncio"
  },
  {
    title: "Novo Programa de Arte Começando Neste Outono",
    date: "28 de abril de 2025",
    excerpt: "Estamos empolgados em anunciar nosso novo programa de arte liderado pela artista profissional Sra. Garcia, começando neste semestre de outono.",
    image: "https://images.pexels.com/photos/159579/crayons-coloring-book-coloring-book-159579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Programas"
  },
  {
    title: "Agenda da Conferência de Pais e Professores",
    date: "10 de abril de 2025",
    excerpt: "As conferências de pais e professores da primavera serão realizadas no próximo mês. Por favor, consulte a agenda e reserve o seu horário preferido.",
    image: "https://images.pexels.com/photos/7683802/pexels-photo-7683802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Eventos"
  }
];

const upcomingEvents = [
  {
    title: "Dia de Portas Abertas",
    date: "10 de junho de 2025",
    time: "9:00 AM - 12:00 PM",
    location: "Campus Principal"
  },
  {
    title: "Celebração de Fim de Ano",
    date: "25 de junho de 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Auditório da Escola"
  },
  {
    title: "Oficina para Pais: Alfabetização Precoce",
    date: "5 de julho de 2025",
    time: "6:30 PM - 8:00 PM",
    location: "Biblioteca"
  }
];

const NewsEventsSection = () => {
  return (
    <section id="news" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notícias & Eventos Futuros</h2>
          <div className="w-20 h-1 bg-blue-500 mb-6"></div>
          <p className="max-w-3xl text-lg text-gray-700">
            Fique atualizado com as últimas notícias e eventos acontecendo na KidsLearn Academy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Últimas Notícias</h3>
            <div className="space-y-8">
              {newsItems.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:translate-y-[-5px]">
                  <div className="md:w-1/3">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center mb-2">
                      <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-500 ml-2">{item.date}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-700 mb-4">{item.excerpt}</p>
                    <a href="#" className="text-blue-500 font-medium flex items-center hover:text-blue-700 transition-colors">
                      Leia mais <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Eventos Futuros</h3>
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <h4 className="font-semibold text-lg text-gray-900 mb-3">{event.title}</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-700">
                        <Calendar size={16} className="text-red-500 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Clock size={16} className="text-blue-500 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <MapPin size={16} className="text-green-500 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <a 
                  href="#" 
                  className="inline-block px-4 py-2 bg-blue-500 text-white font-medium rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300"
                >
                  Ver Todos os Eventos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
