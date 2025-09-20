
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, CEO_PROFILE, KEY_METRICS } from '../constants';
import { ArrowRightIcon } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="relative text-center py-24 md:py-32 lg:py-40 bg-white">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-oak-brown tracking-tight">
              Empowering Progress.
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
              Oak Industries builds innovative software solutions that bridge gaps in the job market and revolutionize agriculture through technology.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Link to="/products" className="inline-block bg-accent-gold text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-amber-600 transition-transform transform hover:-translate-y-1">
                Explore Our Products
              </Link>
              <Link to="/investors" className="inline-block bg-transparent border-2 border-oak-brown text-oak-brown font-bold py-3 px-8 rounded-lg hover:bg-oak-brown hover:text-white transition-colors">
                Investor Information
              </Link>
            </div>
         </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-oak-brown">Our Flagship Solutions</h2>
                <p className="mt-2 text-lg text-gray-600">Two products, one mission: to drive meaningful change.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {Object.values(PRODUCTS).map(product => (
                <div key={product.name} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                    <img src={product.image} alt={product.name} className="w-full h-64 object-cover"/>
                    <div className="p-8">
                      <h3 className={`text-2xl font-bold text-${product.accentColor === 'accent-teal' ? 'accent-teal' : 'forest-green'}`}>{product.name}</h3>
                      <p className="mt-2 text-lg font-semibold text-oak-brown">{product.tagline}</p>
                      <p className="mt-4 text-gray-600">{product.description}</p>
                      <Link to="/products" className="mt-6 inline-flex items-center text-accent-gold font-semibold group-hover:underline">
                        Learn more <ArrowRightIcon className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-20 md:py-24 bg-stone-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-oak-brown">From the CEO</h2>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl mx-auto">
                <img src={CEO_PROFILE.photoUrl} alt={CEO_PROFILE.name} className="w-40 h-40 rounded-full object-cover shadow-lg flex-shrink-0" />
                <div className="text-center md:text-left">
                    <blockquote className="text-xl md:text-2xl italic text-gray-700">
                        "{CEO_PROFILE.vision}"
                    </blockquote>
                    <p className="mt-4 font-bold text-oak-brown">{CEO_PROFILE.name}</p>
                    <p className="text-gray-600">{CEO_PROFILE.title}</p>
                </div>
            </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                 {KEY_METRICS.map(metric => (
                     <div key={metric.label} className="p-4">
                         <p className="text-4xl md:text-5xl font-extrabold text-accent-gold">{metric.value}</p>
                         <p className="mt-2 text-lg text-gray-600">{metric.label}</p>
                     </div>
                 ))}
             </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
