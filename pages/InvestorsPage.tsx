import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckCircleIcon, INVESTOR_FAQS } from '../constants';
import { ResponsiveContainer, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const StatCard: React.FC<{ value: string; label: string; description: string }> = ({ value, label, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <p className="text-4xl font-extrabold text-accent-gold">{value}</p>
        <p className="mt-1 text-lg font-bold text-oak-brown">{label}</p>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
);

// Data for charts
const userGrowthData = [
  { name: '2022 H1', users: 2000 },
  { name: '2022 H2', users: 5000 },
  { name: '2023 H1', users: 11000 },
  { name: '2023 H2', users: 15000 },
];

const revenueData = [
  { year: '2022', revenue: 0.5 },
  { year: '2023', revenue: 1.5 },
  { year: '2024 (Proj.)', revenue: 5.0 },
  { year: '2025 (Proj.)', revenue: 12.0 },
];

const marketData = [
  { name: 'HR-Tech', value: 65, color: '#0d9488' }, // accent-teal
  { name: 'Ag-Tech', value: 35, color: '#166534' }, // forest-green
];


const InvestorsPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
                <h2 className="text-3xl md:text-4xl font-bold text-oak-brown">Traction, Growth &amp; Projections</h2>
                <p className="mt-2 text-lg text-gray-600">Our progress, market position, and future outlook presented through key data points.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                <StatCard value="15k+" label="Active Users" description="Across both Synergy and Agrismart platforms." />
                <StatCard value="200%" label="YoY Growth" description="Demonstrating strong product-market fit." />
                <StatCard value="$100B+" label="Addressable Market" description="Combined market size for Ag-tech and HR-tech." />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className="bg-stone-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-oak-brown mb-4">User Base Growth</h3>
                  <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                      <BarChart data={userGrowthData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip wrapperClassName="rounded-md border-stone-200 shadow-sm" />
                        <Legend />
                        <Bar dataKey="users" fill="#f59e0b" name="Active Users" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-stone-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-oak-brown mb-4">Revenue Projections (USD)</h3>
                  <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                      <LineChart data={revenueData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis tickFormatter={(value) => `$${value}M`}/>
                        <Tooltip formatter={(value: number) => `$${value}M`} wrapperClassName="rounded-md border-stone-200 shadow-sm" />
                        <Legend />
                        <Line type="monotone" dataKey="revenue" stroke="#44403c" strokeWidth={2} name="Revenue (Millions)" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div className="bg-stone-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-oak-brown mb-4">Addressable Market Focus</h3>
                  <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                      <PieChart>
                        <Pie
                          data={marketData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={100}
                          innerRadius={60}
                          fill="#8884d8"
                          dataKey="value"
                          nameKey="name"
                          // FIX: Add nullish coalescing operator to handle cases where `percent` might be undefined.
                          label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                        >
                          {marketData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value: number) => `${value}%`} wrapperClassName="rounded-md border-stone-200 shadow-sm" />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-stone-50 p-6 rounded-lg shadow-lg flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-oak-brown mb-4">Future Roadmap</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <CheckCircleIcon className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                            <div><span className="font-bold">Q4 2023:</span> International Beta Launch for Agrismart in emerging markets.</div>
                        </li>
                        <li className="flex items-start">
                            <CheckCircleIcon className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                            <div><span className="font-bold">Q1 2024:</span> Launch Synergy Enterprise Tier with advanced analytics for large corporations.</div>
                        </li>
                        <li className="flex items-start">
                            <CheckCircleIcon className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                            <div><span className="font-bold">Q2 2024:</span> Secure Series A funding to accelerate growth and product development.</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-oak-brown">Frequently Asked Questions</h2>
                <p className="mt-2 text-lg text-gray-600">Clear answers to your key questions.</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {INVESTOR_FAQS.map((faq, index) => (
                <div key={index} className="border border-stone-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-5 text-left font-semibold text-oak-brown hover:bg-stone-100 focus:outline-none"
                    aria-expanded={openFaq === index}
                  >
                    <span>{faq.question}</span>
                    <span className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : 'rotate-0'}`}>
                       <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="p-5 bg-white text-gray-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-stone-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
           <h2 className="text-3xl md:text-4xl font-bold text-oak-brown">Become a Part of Our Growth Story</h2>
           <p className="mt-4 text-lg text-gray-600">We are currently seeking strategic partners to help us scale our vision. For detailed financial information and to discuss this opportunity further, please contact our investor relations team.</p>
           <div className="mt-8">
              <Link to="/contact" className="inline-flex items-center bg-accent-gold text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-amber-600 transition-transform transform hover:-translate-y-1">
                Contact Investor Relations <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorsPage;
