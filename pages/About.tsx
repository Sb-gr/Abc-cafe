
import React from 'react';
import { Coffee, Heart, ShieldCheck, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6]">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000"
            alt="Cafe Interior"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-6">Our Story</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-medium">
            Rooted in Birtamod, Brewing for the community.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-coffee-600 font-bold uppercase tracking-widest text-sm mb-4 block">Welcome to ABC Cafe</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-900 mb-8 leading-tight">
              A Cozy Retreat in the Heart of Birtamod
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                ABC Cafe is a cozy Nepali café in Birtamod, Jhapa, serving fresh coffee, delicious snacks, and authentic local flavors. Born from a passion for quality beans and community spirit, we've become the go-to spot for locals and travelers alike.
              </p>
              <p>
                We focus on quality, cleanliness, and a friendly atmosphere where friends, families, and coffee lovers can relax and enjoy great moments together. Every cup we serve is a testament to our commitment to excellence.
              </p>
              <p>
                Whether you're looking for a quiet morning espresso, a bustling family lunch, or a cozy evening hangout with friends, ABC Cafe provides the perfect backdrop.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-coffee-200/50 rounded-[3rem] blur-xl"></div>
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200"
              alt="Our Vibe"
              className="relative rounded-[3rem] shadow-2xl z-10 w-full"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-coffee-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-400">What makes ABC Cafe special</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { icon: <Heart className="h-10 w-10" />, title: 'Passionate Service', text: 'We serve every guest with warmth and a smile.' },
              { icon: <ShieldCheck className="h-10 w-10" />, title: 'Quality First', text: 'Premium ingredients, from local farms to your table.' },
              { icon: <Users className="h-10 w-10" />, title: 'Community', text: 'A place where everyone feels at home and welcome.' },
              { icon: <Coffee className="h-10 w-10" />, title: 'Artisan Brewing', text: 'Expertly crafted beverages for real coffee lovers.' }
            ].map((v, i) => (
              <div key={i} className="text-center group">
                <div className="bg-coffee-800 p-6 rounded-3xl inline-block mb-6 group-hover:bg-coffee-700 transition-colors">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-gray-400 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-3xl md:text-4xl font-serif italic text-coffee-900 leading-relaxed">
            "Good Food. Great Coffee. Better Moments. That's the ABC Cafe promise."
          </p>
          <div className="w-16 h-1 bg-coffee-200 mx-auto mt-8 rounded-full"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
