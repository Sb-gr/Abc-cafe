
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MenuCategory } from '../types';
import { Flame } from 'lucide-react';

const Menu: React.FC = () => {
  const { menuItems, comboOffers } = useApp();
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'Combos'>('Coffee & Tea');

  const categories: (MenuCategory | 'Combos')[] = [
    'Coffee & Tea',
    'Cold Beverages',
    'Snacks & Fast Food',
    'Nepali Items',
    'Desserts',
    'Combos'
  ];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24">
      {/* Menu Header */}
      <div className="bg-coffee-900 text-white py-24 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Our Menu</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          From the finest brews to authentic local delights, explore our carefully curated selection.
        </p>
      </div>

      {/* Menu Navigation */}
      <div className="sticky top-20 z-30 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-coffee-200 py-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 flex space-x-4 md:justify-center min-w-max">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-coffee-900 text-white shadow-lg shadow-coffee-900/20'
                  : 'bg-white text-gray-600 hover:bg-coffee-100 hover:text-coffee-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-coffee-200">
          <div className="flex items-center justify-between mb-12 border-b border-coffee-200 pb-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-900">{activeCategory}</h2>
            <div className="text-coffee-600 font-bold uppercase tracking-widest text-sm">Prices in NPR</div>
          </div>

          {activeCategory === 'Combos' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {comboOffers.map((combo, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-100 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-4">
                    <Flame className="h-6 w-6 text-orange-500 fill-current opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-bold text-coffee-900 mb-2">{combo.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Items: {combo.items.join(' + ')}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-black text-coffee-900">Rs. {combo.price}</span>
                    <span className="bg-coffee-900 text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest">Special</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {filteredItems.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start group">
                  <div className="flex-1 mr-4">
                    <div className="flex items-baseline">
                      <h3 className="text-lg font-bold text-coffee-900 group-hover:text-coffee-600 transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex-grow border-b border-dotted border-gray-300 mx-2"></div>
                    </div>
                    {item.description && <p className="text-sm text-gray-500 mt-1">{item.description}</p>}
                  </div>
                  <div className="text-lg font-black text-coffee-900">
                    Rs. {item.price}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Footer Note */}
        <div className="mt-16 text-center">
          <div className="bg-coffee-900/5 p-8 rounded-3xl border border-dashed border-coffee-900/20">
            <h3 className="font-serif font-bold text-2xl text-coffee-900 mb-2">Want something customized?</h3>
            <p className="text-gray-600">Our baristas are happy to adjust the sweetness or milk type for you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
