import React, { useState } from 'react';
import { X } from 'lucide-react';

const images = [
  {
    src: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Children painting together"
  },
  {
    src: "https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Child playing with blocks"
  },
  {
    src: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Outdoor playground activities"
  },
  {
    src: "https://images.pexels.com/photos/6393345/pexels-photo-6393345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Group reading time"
  },
  {
    src: "https://images.pexels.com/photos/8535104/pexels-photo-8535104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Science experiment for kids"
  },
  {
    src: "https://images.pexels.com/photos/8613353/pexels-photo-8613353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Music class with instruments"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our School Gallery</h2>
          <div className="w-20 h-1 bg-red-500 mb-6"></div>
          <p className="max-w-3xl text-lg text-gray-700">
            Take a peek inside our school and see our beautiful facilities and happy children engaged in learning and play.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeModal}
            >
              <X size={32} />
            </button>
            <img 
              src={images[selectedImage].src} 
              alt={images[selectedImage].alt} 
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;