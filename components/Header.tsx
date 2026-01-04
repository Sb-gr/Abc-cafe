
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Coffee } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-coffee-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-coffee-900 p-2 rounded-lg group-hover:bg-coffee-800 transition-colors">
              <Coffee className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight text-coffee-900">
              ABC <span className="text-coffee-600">Cafe</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'text-coffee-900 font-semibold'
                    : 'text-gray-600 hover:text-coffee-900'
                } transition-colors text-sm uppercase tracking-widest font-medium`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/menu"
              className="bg-coffee-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-coffee-800 transition-colors shadow-lg shadow-coffee-900/10"
            >
              ORDER NOW
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-coffee-900 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive(link.path)
                    ? 'bg-coffee-50 text-coffee-900'
                    : 'text-gray-600 hover:bg-coffee-50 hover:text-coffee-900'
                } block px-3 py-4 rounded-md text-base font-medium transition-all`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3 pb-6">
              <Link
                to="/menu"
                onClick={() => setIsOpen(false)}
                className="w-full block text-center bg-coffee-900 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-coffee-900/20"
              >
                VIEW FULL MENU
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
