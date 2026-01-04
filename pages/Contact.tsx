
import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#FAF9F6] pb-24">
      {/* Header */}
      <div className="bg-coffee-900 text-white py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Visit Us</h1>
        <p className="text-xl text-gray-300">We'd love to see you at the cafe.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-coffee-200">
            <div className="bg-coffee-50 p-4 rounded-2xl inline-block mb-6 text-coffee-900">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Our Location</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {BUSINESS_INFO.location}
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coffee-900 font-bold hover:underline"
            >
              Get Directions →
            </a>
          </div>

          <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-coffee-200">
            <div className="bg-coffee-50 p-4 rounded-2xl inline-block mb-6 text-coffee-900">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Available daily during business hours.
            </p>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="text-2xl font-black text-coffee-900 hover:text-coffee-600 transition-colors"
            >
              {BUSINESS_INFO.phone}
            </a>
          </div>

          <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-coffee-200">
            <div className="bg-coffee-50 p-4 rounded-2xl inline-block mb-6 text-coffee-900">
              <MessageCircle className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Message us for quick queries or bookings.
            </p>
            <a
              href={BUSINESS_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-full font-bold inline-block hover:bg-green-600 transition-colors shadow-lg"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Embed Placeholder (as iframe isn't usually functional in these snippets, we use a beautiful placeholder) */}
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white h-[600px] relative">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <iframe 
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14253.25624192087!2d87.9866367!3d26.657574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5b7290117b483%3A0x6b2e35a60e0d5e18!2sBirtamode%20Jhapa!5e0!3m2!1sen!2snp!4v1715424564532!5m2!1sen!2snp" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl border border-coffee-200">
            <h2 className="text-3xl font-serif font-bold text-coffee-900 mb-8">Send us a Message</h2>
            {submitted ? (
              <div className="text-center py-10 animate-bounce">
                <CheckCircle2 className="h-20 w-20 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-coffee-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-[#FAF9F6] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coffee-900 focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-[#FAF9F6] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coffee-900 focus:border-transparent transition-all"
                    placeholder="98XXXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-6 py-4 rounded-2xl bg-[#FAF9F6] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coffee-900 focus:border-transparent transition-all"
                    placeholder="Tell us what's on your mind..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-coffee-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-coffee-800 transition-all shadow-xl shadow-coffee-900/20 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="h-5 w-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
