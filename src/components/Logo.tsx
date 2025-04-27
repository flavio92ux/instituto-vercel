import React from 'react';
import { BookOpen } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="relative h-10 w-10 bg-blue-400 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500"></div>
        <BookOpen size={24} className="text-white relative z-10" />
      </div>
      <div className="ml-2">
        <div className="text-xl font-bold text-blue-500">Instituto Ser Feliz</div>
        <div className="text-xs font-medium text-red-500">Industrial Contagem</div>
      </div>
    </div>
  );
};

export default Logo;