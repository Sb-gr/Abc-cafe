
import React from 'react';
import { useApp } from '../context/AppContext';

const Gallery: React.FC = () => {
  const { galleryImages } = useApp();

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24">
      <div className="bg-white py-24 px-4 text-center border-b border-coffee-200">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-coffee-900 mb-6">Our Aesthetic</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A glimpse into the warm atmosphere and mouth-watering treats at ABC Cafe.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="break-inside-avoid relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white text-lg font-bold font-serif">{img.caption}</p>
              </div>
            </div>
          ))}
          {galleryImages.length === 0 && (
            <div className="col-span-full py-20 text-center text-gray-400">
              <p>No images to display yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>

      {/* Instagram Promo */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-coffee-900 p-12 md:p-20 rounded-[3rem] text-white overflow-hidden relative group">
           <div className="absolute top-0 right-0 w-64 h-64 bg-coffee-800/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 relative z-10">Capture the Moment</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto relative z-10">
            Tag us in your photos for a chance to be featured on our wall of fame!
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 bg-white text-coffee-900 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1 relative z-10"
          >
            Follow @ABCCafeBirtamod
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
