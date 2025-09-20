
import React from 'react';
import { CEO_PROFILE, COMPANY_VALUES } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Mission & Vision Section */}
      <section className="py-20 md:py-28 text-center bg-stone-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-oak-brown">About Oak Industries</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            We are a forward-thinking technology company focused on building innovative software solutions that solve real-world problems. We are not just a tech company; we are a company that empowers progress.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-oak-brown">Our Leadership</h2>
            <p className="mt-2 text-lg text-gray-600">Guided by vision and a passion for impact.</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-6xl mx-auto">
            <div className="flex-shrink-0">
              <img
                className="h-64 w-64 rounded-full object-cover shadow-2xl mx-auto"
                src={CEO_PROFILE.photoUrl}
                alt={CEO_PROFILE.name}
              />
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <h3 className="text-3xl font-bold text-oak-brown">{CEO_PROFILE.name}</h3>
              <p className="mt-1 text-xl font-medium text-accent-gold">{CEO_PROFILE.title}</p>
              <p className="mt-6 text-gray-700 leading-relaxed">
                {CEO_PROFILE.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* Our Values Section */}
       <section className="py-20 md:py-24 bg-stone-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-oak-brown">Our Core Values</h2>
            <p className="mt-2 text-lg text-gray-600">The principles that guide everything we do.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {COMPANY_VALUES.map(value => (
              <div key={value.title} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-center items-center mb-4">
                    {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-oak-brown">{value.title}</h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History/Milestones Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-oak-brown">Our Journey</h2>
                <p className="mt-2 text-lg text-gray-600">A brief history of our progress.</p>
            </div>
            <div className="max-w-3xl mx-auto">
                <div className="relative border-l-2 border-accent-gold pl-8 space-y-12">
                     <div className="relative">
                        <div className="absolute -left-10 top-1.5 w-5 h-5 bg-accent-gold rounded-full border-4 border-white"></div>
                        <h4 className="text-xl font-bold text-oak-brown">2021 - The Idea</h4>
                        <p className="mt-1 text-gray-600">Oak Industries is founded by Olal Abdu Karim with a mission to tackle inefficiencies in the job market and agriculture.</p>
                    </div>
                     <div className="relative">
                        <div className="absolute -left-10 top-1.5 w-5 h-5 bg-accent-gold rounded-full border-4 border-white"></div>
                        <h4 className="text-xl font-bold text-oak-brown">2022 - Building the Foundation</h4>
                        <p className="mt-1 text-gray-600">Initial seed funding secured. Development begins on Synergy and Agrismart with a small, dedicated team.</p>
                    </div>
                     <div className="relative">
                        <div className="absolute -left-10 top-1.5 w-5 h-5 bg-accent-gold rounded-full border-4 border-white"></div>
                        <h4 className="text-xl font-bold text-oak-brown">2023 - Product Launch</h4>
                        <p className="mt-1 text-gray-600">Beta versions of Synergy and Agrismart are launched, gaining early traction and valuable user feedback.</p>
                    </div>
                     <div className="relative">
                        <div className="absolute -left-10 top-1.5 w-5 h-5 bg-accent-gold rounded-full border-4 border-white"></div>
                        <h4 className="text-xl font-bold text-oak-brown">Today - Scaling for Impact</h4>
                        <p className="mt-1 text-gray-600">With thousands of users, we are focused on scaling our platforms and expanding our impact globally.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
