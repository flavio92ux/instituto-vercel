import React from 'react';
import { Heart, Brain, Users, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About KidsLearn Academy</h2>
          <div className="w-20 h-1 bg-red-500 mb-6"></div>
          <p className="max-w-3xl text-lg text-gray-700">
            Founded in 2010, KidsLearn Academy has been dedicated to providing exceptional early childhood education in a safe, nurturing environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/8613312/pexels-photo-8613312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Children in classroom" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Philosophy</h3>
            <p className="text-gray-700 mb-6">
              We believe that every child is unique and deserves an education tailored to their individual needs, interests, and learning style. Our play-based curriculum encourages curiosity, creativity, and critical thinking, laying the foundation for a lifelong love of learning.
            </p>
            <p className="text-gray-700 mb-8">
              Our dedicated teachers create a supportive environment where children feel safe to explore, make mistakes, and grow. We partner with families to ensure each child reaches their full potential.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Heart size={24} className="text-red-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Nurturing Care</h4>
                  <p className="text-gray-600 text-sm">Creating a loving, supportive environment</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Brain size={24} className="text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Creative Learning</h4>
                  <p className="text-gray-600 text-sm">Fostering imagination and critical thinking</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Users size={24} className="text-purple-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Social Skills</h4>
                  <p className="text-gray-600 text-sm">Building friendships and communication</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Award size={24} className="text-yellow-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Quality Education</h4>
                  <p className="text-gray-600 text-sm">Excellence in early childhood development</p>
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