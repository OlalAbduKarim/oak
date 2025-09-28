import React from 'react';
import type { Product } from '../types';
import { PRODUCTS, TESTIMONIALS } from '../constants';
import { AppStoreIcon, GooglePlayIcon, CheckCircleIcon, ArrowRightIcon, InfoIcon } from '../constants';

const ProductSection: React.FC<{ product: Product; reverse?: boolean }> = ({ product, reverse = false }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}>
        <div className="lg:w-1/2">
          <img src={product.image} alt={product.name} className="rounded-lg shadow-2xl w-full" />
        </div>
        <div className="lg:w-1/2">
          <h2 className={`text-3xl md:text-4xl font-bold ${product.accentColor === 'accent-teal' ? 'text-accent-teal' : 'text-forest-green'}`}>{product.name}</h2>
          <p className="mt-2 text-xl font-semibold text-oak-brown">{product.tagline}</p>
          <p className="mt-4 text-gray-600 leading-relaxed">{product.description}</p>
          
          <div className="mt-8">
            <h4 className="text-lg font-bold text-oak-brown mb-3">Key Features:</h4>
            <ul className="space-y-2">
              {product.features.map(feature => (
                <li key={feature} className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-8">
            {product.webAppLink ? (
              <a
                href={product.webAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center ${
                  product.accentColor === 'accent-teal' ? 'bg-accent-teal' : 'bg-forest-green'
                } text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:opacity-90 transition-transform transform hover:-translate-y-1`}
              >
                Launch Web App
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </a>
            ) : (
              <div className="flex items-center space-x-4">
                <a href="#" className="inline-flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                  <AppStoreIcon className="w-6 h-6 mr-2" />
                  <div>
                    <span className="text-xs">Download on the</span>
                    <span className="block font-semibold">App Store</span>
                  </div>
                </a>
                <a href="#" className="inline-flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                  <GooglePlayIcon className="w-6 h-6 mr-2" />
                  <div>
                    <span className="text-xs">GET IT ON</span>
                    <span className="block font-semibold">Google Play</span>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsPage: React.FC = () => {
  const synergyTestimonials = TESTIMONIALS.filter(t => t.product === 'Synergy');
  const agrismartTestimonials = TESTIMONIALS.filter(t => t.product === 'Agrismart');

  return (
    <div>
      <section className="py-20 text-center bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-oak-brown">Our Solutions</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Technology designed with purpose. Explore our platforms that are transforming industries and creating new opportunities.
          </p>
           <div className="mt-8 max-w-3xl mx-auto bg-stone-100 border-l-4 border-accent-gold text-stone-700 p-4 text-left rounded-r-lg" role="alert">
              <div className="flex">
                <div className="py-1">
                  <InfoIcon className="w-6 h-6 text-accent-gold mr-4 flex-shrink-0"/>
                </div>
                <div>
                  <p className="font-bold">Public Beta Notice</p>
                  <p className="text-sm">Our platforms are state-of-the-art and currently in a public beta as we continue to build our advanced algorithms. The app previews showcase our current design and core functionalities, which will become fully functional in the near future.</p>
                </div>
              </div>
            </div>
        </div>
      </section>
      
      <div id="synergy" className="bg-stone-50"><ProductSection product={PRODUCTS.synergy} /></div>
      
       {/* Synergy Testimonials */}
      <section className="py-20 bg-stone-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {synergyTestimonials.map(t => (
                      <blockquote key={t.author} className="p-6 bg-white rounded-lg shadow-md">
                          <p className="text-lg italic text-gray-700">"{t.quote}"</p>
                          <footer className="mt-4">
                              <p className="font-bold text-oak-brown">{t.author}</p>
                              <p className="text-sm text-gray-500">{t.role}</p>
                          </footer>
                      </blockquote>
                  ))}
              </div>
          </div>
      </section>

      <div id="agrismart" className="bg-white"><ProductSection product={PRODUCTS.agrismart} reverse={true} /></div>

       {/* Agrismart Testimonials */}
       <section className="py-20 bg-stone-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {agrismartTestimonials.map(t => (
                      <blockquote key={t.author} className="p-6 bg-white rounded-lg shadow-md">
                          <p className="text-lg italic text-gray-700">"{t.quote}"</p>
                          <footer className="mt-4">
                              <p className="font-bold text-oak-brown">{t.author}</p>
                              <p className="text-sm text-gray-500">{t.role}</p>
                          </footer>
                      </blockquote>
                  ))}
              </div>
          </div>
      </section>
    </div>
  );
};

export default ProductsPage;