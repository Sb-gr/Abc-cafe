
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const FloatingAction: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-40 md:hidden">
      <a
        href={BUSINESS_INFO.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="bg-coffee-900 text-white p-4 rounded-full shadow-2xl hover:bg-coffee-800 transition-all scale-110"
        aria-label="Call Now"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
};

export default FloatingAction;
