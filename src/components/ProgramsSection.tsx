import React from 'react';
import { Baby, AlarmClock, Palette, Music, BookOpen, Calculator } from 'lucide-react';

const programs = [
  {
    icon: <Baby size={32} className="text-blue-500" />,
    title: "Toddler Program",
    age: "Ages 2-3",
    description: "A gentle introduction to the school environment with plenty of play, stories, and activities that develop fine and gross motor skills.",
    color: "bg-blue-50 border-blue-200"
  },
  {
    icon: <Palette size={32} className="text-red-500" />,
    title: "Preschool",
    age: "Ages 3-4",
    description: "Focused on creativity, language development, and social skills through art, music, storytelling, and group activities.",
    color: "bg-red-50 border-red-200"
  },
  {
    icon: <BookOpen size={32} className="text-green-500" />,
    title: "Pre-Kindergarten",
    age: "Ages 4-5",
    description: "Preparing children for kindergarten with early literacy, numeracy, science exploration, and enhanced social abilities.",
    color: "bg-green-50 border-green-200"
  },
  {
    icon: <Calculator size={32} className="text-purple-500" />,
    title: "Kindergarten",
    age: "Ages 5-6",
    description: "Building a strong foundation in reading, writing, and mathematics while fostering independence and problem-solving skills.",
    color: "bg-purple-50 border-purple-200"
  },
  {
    icon: <Music size={32} className="text-yellow-500" />,
    title: "Arts Enrichment",
    age: "All ages",
    description: "Specialized classes in music, dance, and visual arts to nurture creativity and self-expression.",
    color: "bg-yellow-50 border-yellow-200"
  },
  {
    icon: <AlarmClock size={32} className="text-pink-500" />,
    title: "After School Care",
    age: "Ages 3-6",
    description: "Extended care with supervised activities, homework help, and recreation for working parents.",
    color: "bg-pink-50 border-pink-200"
  }
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Educational Programs</h2>
          <div className="w-20 h-1 bg-blue-500 mb-6"></div>
          <p className="max-w-3xl text-lg text-gray-700">
            We offer a variety of programs designed to meet the developmental needs of children at different ages, fostering growth in cognitive, social, emotional, and physical domains.
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
            Enroll Your Child
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;