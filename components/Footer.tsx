
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Coffee, Lock } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Footer: React.FC = () => {
  const { businessInfo, isAdmin, logout } = useApp();

  return (
    <footer className="bg-coffee-900 text-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Slogan */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Coffee className="h-7 w-7 text-white" />
              <span className="text-2xl font-serif font-bold text-white">{businessInfo.name}</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Serving the finest coffee and authentic Nepali flavors in Birtamod. Join us for a moment of relaxation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-coffee-200 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-coffee-200 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-coffee-200 transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-serif">Quick Links</h3>
            <ul className="space-y-4 text-gray-300">
              <li><Link to="/menu" className="hover:text-white transition-colors">Our Menu</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Visit Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-serif">Get in Touch</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-coffee-200" />
                <span>{businessInfo.location}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-coffee-200" />
                <a href={`tel:${businessInfo.phone}`} className="hover:text-white transition-colors">
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-coffee-200" />
                <span className="hover:text-white cursor-pointer">hello@abccafe.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-serif">Opening Hours</h3>
            <div className="space-y-2 text-gray-300">
              <p className="font-semibold text-white">Sunday - Saturday</p>
              <p>{businessInfo.hours}</p>
              <div className="mt-4 inline-block bg-coffee-800 px-3 py-1 rounded text-xs text-coffee-200 font-bold tracking-widest uppercase">
                {businessInfo.days}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-coffee-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {businessInfo.name} – Birtamod, Jhapa. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <p className="text-xs italic">स्वाद, स्नेह र सन्तुष्टि</p>
            {isAdmin ? (
              <div className="flex items-center space-x-4">
                <Link to="/admin" className="flex items-center space-x-1 hover:text-white text-coffee-200 font-bold transition-colors">
                  <Lock className="h-3 w-3" />
                  <span>Dashboard</span>
                </Link>
                <button onClick={logout} className="hover:text-red-400 transition-colors">Logout</button>
              </div>
            ) : (
              <Link to="/login" className="flex items-center space-x-1 hover:text-white transition-colors">
                <Lock className="h-3 w-3" />
                <span>Admin Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
