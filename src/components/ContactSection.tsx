import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-red-500 mb-6"></div>
          <p className="max-w-3xl text-lg text-gray-700">
            Tem perguntas ou deseja agendar uma visita? Adoraríamos ouvir de você!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie-nos uma Mensagem</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo *</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                    placeholder="Seu e-mail"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Número de Telefone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                  placeholder="Seu número de telefone"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto *</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                  placeholder="Assunto da mensagem"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem *</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                  placeholder="Sua mensagem"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-red-500 text-white font-medium rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300 flex items-center justify-center"
              >
                Enviar Mensagem
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-blue-500 text-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Endereço</h4>
                    <p className="text-blue-100">Rua Coronel Américo Teixeira Guimarães, 401, Bairro Industrial, Contagem – MG, CEP 32235-130</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefone</h4>
                    <p className="text-blue-100">(31) 3321-8224</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <FaWhatsapp size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <p className="text-blue-100">(31) 99585-2001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">E-mail</h4>
                    <p className="text-blue-100">iinstituto.serfeliz@yahoo.com.br</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Agende uma Visita</h3>
              <p className="text-gray-700 mb-6">
                Adoraríamos mostrar nossas instalações e responder a quaisquer perguntas que você tenha. Agende uma visita para ver nossa escola em ação!
              </p>
              <a 
                href="#" 
                className="block w-full px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 text-center"
              >
                Agendar uma Visita
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
