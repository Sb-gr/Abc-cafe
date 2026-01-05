
import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Utensils, Zap, Clock, ChevronRight, Star } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Home: React.FC = () => {
  const { businessInfo, comboOffers } = useApp();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=2000"
            alt="Cafe Background"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="inline-block bg-coffee-900/40 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-8 text-white text-sm font-semibold tracking-widest uppercase animate-fade-in">
            Premium Nepali Cafe & Hangout Spot
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 font-bold leading-tight drop-shadow-2xl">
            Fresh Coffee,<br/><span className="italic text-coffee-200">Local Taste.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Relax, sip, and enjoy quality food with a cozy vibe at {businessInfo.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="bg-coffee-900 hover:bg-coffee-800 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-2xl shadow-black/50 flex items-center justify-center group"
            >
              View Menu
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-coffee-900 px-10 py-5 rounded-full text-lg font-bold transition-all shadow-xl flex items-center justify-center"
            >
              Visit Us
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-900 mb-4">Crafted for Your Moments</h2>
            <div className="w-24 h-1 bg-coffee-200 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <Coffee className="h-10 w-10" />, title: 'Fresh Coffee', text: 'Locally sourced beans roasted to perfection for that rich, bold aroma.' },
              { icon: <Utensils className="h-10 w-10" />, title: 'Tasty Snacks', text: 'From classic sandwiches to crispy fries, we have it all.' },
              { icon: <Zap className="h-10 w-10" />, title: 'Nepali Flavors', text: 'Authentic Momos and local treats that taste like home.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#FAF9F6] p-10 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2 group">
                <div className="bg-coffee-900 text-white p-4 rounded-2xl inline-block mb-6 group-hover:bg-coffee-800">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-coffee-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Promo Section */}
      <section className="bg-coffee-900 py-20 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-coffee-800/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="max-w-xl">
            <div className="flex items-center space-x-2 text-coffee-200 mb-4 uppercase tracking-widest font-bold text-sm">
              <Star className="h-4 w-4 fill-current" />
              <span>Limited Time Offer</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Combo Offers You'll Love</h2>
            <p className="text-xl text-gray-300 mb-8">
              Why pick one when you can have the perfect pair? Check out our specially curated combos for the best value.
            </p>
            <Link to="/menu" className="inline-flex items-center text-coffee-200 font-bold text-lg hover:text-white transition-colors group">
              Explore All Offers
              <ChevronRight className="ml-1 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
            {comboOffers.slice(0, 4).map((offer, idx) => (
              <div key={idx} className="bg-coffee-800/40 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:bg-coffee-800 transition-colors">
                <h4 className="font-bold text-lg mb-2">{offer.title}</h4>
                <p className="text-coffee-200 font-bold text-2xl">Rs. {offer.price}</p>
                <div className="mt-3 text-xs text-gray-400 uppercase tracking-tighter">Available Daily</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours Banner */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl border border-coffee-200 flex flex-col md:flex-row items-center gap-10 md:gap-20">
            <div className="bg-coffee-900 p-8 rounded-full">
              <Clock className="h-20 w-20 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-900 mb-4">We're Open Today!</h2>
              <p className="text-xl text-gray-600 mb-6">
                Start your day with a perfect cup or end your evening with a cozy dinner.
              </p>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium">Everyday</span>
                  <span className="font-bold text-coffee-900">{businessInfo.hours}</span>
                </div>
                <div className="pt-2 text-coffee-600 font-medium">{businessInfo.location} – See you soon!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Touch Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-6xl md:text-8xl font-serif text-gray-100 font-bold mb-[-2rem] md:mb-[-4rem] select-none uppercase">{businessInfo.name}</p>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-900 mb-6">स्वाद, स्नेह र सन्तुष्टि</h2>
            <p className="text-xl text-gray-600 italic">Welcome to {businessInfo.name} - Where memories are made over coffee.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
