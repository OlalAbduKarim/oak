
import React from 'react';
import { ArrowRightIcon, CheckCircleIcon } from '../constants';

const StatCard: React.FC<{ value: string; label: string; description: string }> = ({ value, label, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <p className="text-4xl font-extrabold text-accent-gold">{value}</p>
        <p className="mt-1 text-lg font-bold text-oak-brown">{label}</p>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
);

const InvestorsPage: React.FC = () => {
  return (
    <div className="bg-stone-50">
      <section className="py-20 md:py-28 text-center bg-oak-brown text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold">Investing in the Future of Progress</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-stone-300">
            Oak Industries is at the forefront of technological innovation in key global sectors. We invite you to be a part of our journey to create lasting, scalable impact.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-oak-brown">The Oak Industries Advantage</h2>
            <p className="mt-2 text-lg text-gray-600">A clear vision, proven markets, and a team built to execute.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-oak-brown">Our Story & Mission</h3>
                <p className="mt-4 text-gray-600">Founded to solve tangible problems, our mission is to empower individuals and industries through technology. We build tools that not only create efficiency but also foster growth and opportunity.</p>
            </div>
             <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-oak-brown">Market Opportunity</h3>
                <p className="mt-4 text-gray-600">We operate in two vast, underserved markets: global recruitment and agricultural technology. Both are ripe for disruption and offer significant potential for growth and positive impact.</p>
            </div>
             <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-oak-brown">Our Business Model</h3>
                <p className="mt-4 text-gray-600">Our dual B2B and B2C SaaS models provide diversified revenue streams, high scalability, and strong customer retention, ensuring a robust and resilient financial future.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-oak-brown">Traction &amp; Roadmap</h2>
                <p className="mt-2 text-lg text-gray-600">Our progress to date and where we're headed next.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <StatCard value="15k+" label="Active Users" description="Across both Synergy and Agrismart platforms." />
                <StatCard value="200%" label="YoY Growth" description="Demonstrating strong product-market fit." />
                <StatCard value="$100B+" label="Addressable Market" description="Combined market size for Ag-tech and HR-tech." />
            </div>
            <div className="mt-16 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-center text-oak-brown mb-8">Future Roadmap</h3>
                <ul className="space-y-4">
                    <li className="flex items-start bg-stone-50 p-4 rounded-lg">
                        <CheckCircleIcon className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                        <div><span className="font-bold">Q4 2023:</span> International Beta Launch for Agrismart in emerging markets.</div>
                    </li>
                    <li className="flex items-start bg-stone-50 p-4 rounded-lg">
                        <CheckCircleIcon className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                        <div><span className="font-bold">Q1 2024:</span> Launch Synergy Enterprise Tier with advanced analytics for large corporations.</div>
                    </li>
                    <li className="flex items-start bg-stone-50 p-4 rounded-lg">
                        <CheckCircleIcon className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                        <div><span className="font-bold">Q2 2024:</span> Secure Series A funding to accelerate growth and product development.</div>
                    </li>
                </ul>
            </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-stone-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
           <h2 className="text-3xl md:text-4xl font-bold text-oak-brown">Become a Part of Our Growth Story</h2>
           <p className="mt-4 text-lg text-gray-600">We are currently seeking strategic partners to help us scale our vision. For detailed financial information and to discuss investment opportunities, please get in touch.</p>
           <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <a href="mailto:invest@oakindustries.com" className="inline-flex items-center bg-accent-gold text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-amber-600 transition-transform transform hover:-translate-y-1">
                Contact for Investment Inquiries
              </a>
              <a href="#" className="inline-flex items-center bg-oak-brown text-white font-bold py-3 px-8 rounded-lg hover:bg-stone-800">
                Download Investor Deck
              </a>
            </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorsPage;
