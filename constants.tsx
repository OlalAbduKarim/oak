import React from 'react';
import type { NavLink, Product, TeamMember, Testimonial, Metric, BlogPost, Value, FAQ } from './types';

// Icons
export const AppStoreIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M24.84,13.23a.35.35,0,0,0-.22-.33.37.37,0,0,0-.33.1,3.42,3.42,0,0,1-3.4,2.39,3.37,3.37,0,0,1-3.29-2.4.36.36,0,0,0-.34-.26.36.36,0,0,0-.35.26,3.37,3.37,0,0,1-3.29,2.4,3.42,3.42,0,0,1-3.4-2.39.37.37,0,0,0-.33-.1.35.35,0,0,0-.22.33A5.41,5.41,0,0,0,8,16.2a5.1,5.1,0,0,0,2.12,4.28A5.4,5.4,0,0,0,15,22.21a5.4,5.4,0,0,0,4.88-1.73,5.1,5.1,0,0,0,2.12-4.28A5.41,5.41,0,0,0,24.84,13.23ZM15.05,4.19a4.88,4.88,0,0,0-4,2.5,4.72,4.72,0,0,0,3.7,1.8,4.6,4.6,0,0,0,3.6-1.7A4.82,4.82,0,0,0,15.05,4.19Z"/></svg>
);

export const GooglePlayIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.68,13.56,6.3,4.25a2.1,2.1,0,0,0-1.42.1A2.17,2.17,0,0,0,4,6.17V23.83a2.17,2.17,0,0,0,.88,1.82,2.1,2.1,0,0,0,1.42.1l16.38-9.31a2.19,2.19,0,0,0,0-3.88Zm-15.3,8.4V8L15,14.28Z"/></svg>
);

export const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
);

export const InnovationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);

export const IntegrityIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917L12 23l9-2.083A12.02 12.02 0 0021 7.917a11.955 11.955 0 01-2.382-3.933z" /></svg>
);

export const EmpowermentIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 12a4 4 0 110-8 4 4 0 010 8z" /></svg>
);

export const InfoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

export const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);

export const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
);

export const LocationMarkerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);

// Navigation
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Products', path: '/products' },
  { label: 'Investors', path: '/investors' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

// Data
export const PRODUCTS: { [key: string]: Product } = {
  synergy: {
    name: 'Synergy',
    tagline: 'Connecting Talent with Opportunity.',
    description: 'Synergy is an intelligent platform designed to bridge the gap between job seekers and employers. Using smart matching algorithms, it streamlines the hiring process, making it faster, more efficient, and more effective for everyone.',
    features: ['AI-Powered Job Matching', 'Streamlined Application Process', 'Comprehensive Employer Dashboard', 'Real-time Communication Tools'],
    benefits: [
      { target: 'For Job Seekers', points: ['Discover relevant opportunities faster.', 'Apply with a single click.', 'Track application status seamlessly.'] },
      { target: 'For Employers', points: ['Access a curated pool of qualified candidates.', 'Reduce time-to-hire significantly.', 'Manage recruitment workflow in one place.'] }
    ],
    image: 'https://picsum.photos/seed/synergy/800/600',
    accentColor: 'accent-teal',
    webAppLink: 'https://synergy-app-demo.vercel.app'
  },
  agrismart: {
    name: 'Agrismart',
    tagline: 'Smarter Farming, Bigger Yields.',
    description: 'Agrismart is a comprehensive mobile solution that empowers farmers with the data and tools they need to make informed decisions. From crop management to market insights, Agrismart is revolutionizing agriculture for a sustainable future.',
    features: ['Advanced Crop Monitoring Guides', 'Efficient Resource Planning', 'Real-time Market Price Insights', 'Supportive Farmer Community Forum'],
    benefits: [
      { target: 'For Individual Farmers', points: ['Optimize crop yields and reduce waste.', 'Gain access to expert advice and data.', 'Connect with a network of fellow farmers.'] },
      { target: 'For Agricultural Cooperatives', points: ['Standardize best practices across members.', 'Improve supply chain management.', 'Aggregate data for better regional forecasting.'] }
    ],
    image: 'https://picsum.photos/seed/agrismart/800/600',
    accentColor: 'forest-green',
    webAppLink: 'https://agrismart-five.vercel.app'
  }
};

export const CEO_PROFILE: TeamMember = {
    name: 'Olal Abdu Karim',
    title: 'Founder & CEO, Oak Industries',
    photoUrl: 'https://picsum.photos/seed/ceo/400/400',
    bio: 'Olal Abdu Karim is a visionary entrepreneur with a passion for leveraging technology to solve critical real-world challenges. With a background in software engineering and a keen eye for market gaps, Olal founded Oak Industries to create solutions that empower individuals and industries. His leadership is driven by a commitment to innovation, integrity, and building a better future.',
    vision: 'My vision for Oak Industries is to be a beacon of progress. We are not just building apps; we are building ecosystems that foster growth, create opportunities, and drive sustainable change. Whether it\'s connecting the right person to their dream job or helping a farmer achieve a record harvest, our technology serves a single purpose: to empower.'
};

export const COMPANY_VALUES: Value[] = [
    { icon: <InnovationIcon className="w-12 h-12 text-accent-gold" />, title: 'Innovation', description: 'We are relentless in our pursuit of new ideas and better ways to solve problems, pushing the boundaries of what\'s possible.'},
    { icon: <IntegrityIcon className="w-12 h-12 text-accent-gold" />, title: 'Integrity', description: 'We operate with unwavering honesty and transparency, building trust with our users, partners, and investors.'},
    { icon: <EmpowermentIcon className="w-12 h-12 text-accent-gold" />, title: 'Empowerment', description: 'Our success is measured by the success of those we serve. We build tools that enable others to achieve their full potential.'},
];

export const TESTIMONIALS: Testimonial[] = [
    { quote: 'Synergy cut our hiring time in half. The quality of candidates we\'re seeing is outstanding.', author: 'Jane Doe', role: 'HR Manager, TechCorp', product: 'Synergy'},
    { quote: 'Thanks to Agrismart, I\'ve increased my crop yield by 20% this season. The market price alerts are a game-changer.', author: 'John Smith', role: 'Farm Owner, Green Valley', product: 'Agrismart'},
    { quote: 'The streamlined application process on Synergy is incredible. I found my dream job in just two weeks.', author: 'Emily White', role: 'Software Developer', product: 'Synergy'},
];

export const KEY_METRICS: Metric[] = [
    { value: '10,000+', label: 'Jobs Matched' },
    { value: '5,000+', label: 'Farms Empowered' },
    { value: '2', label: 'Innovative Products' },
    { value: '100%', label: 'Commitment to Progress' },
];

export const BLOG_POSTS: BlogPost[] = [
    { id: 1, title: 'The Future of Recruitment: How AI is Changing the Game', excerpt: 'Explore how platforms like Synergy are using artificial intelligence to create more efficient and equitable hiring processes for everyone...', fullText: 'Explore how platforms like Synergy are using artificial intelligence to create more efficient and equitable hiring processes for everyone. Traditional recruitment is often fraught with unconscious bias and time-consuming manual screening. AI-powered matching algorithms analyze skills, experience, and career goals to connect candidates with roles where they can truly thrive. This not only speeds up the hiring process for companies but also opens up a wider range of opportunities for job seekers, ensuring a better fit for both sides. At Oak Industries, we are committed to refining these technologies to build a fairer and more productive job market.', author: 'Oak Industries', date: 'October 26, 2023', imageUrl: 'https://picsum.photos/seed/blog1/400/300' },
    { id: 2, title: 'Data-Driven Agriculture: 5 Ways Agrismart is Helping Farmers Thrive', excerpt: 'From soil health to market trends, discover the key features in Agrismart that are empowering farmers to make smarter decisions...', fullText: 'From soil health to market trends, discover the key features in Agrismart that are empowering farmers to make smarter decisions. Our platform provides real-time data on weather patterns, soil moisture levels, and crop health, allowing for precision agriculture that maximizes yield and minimizes waste. Farmers can access up-to-the-minute market pricing to sell their produce at the optimal time. Furthermore, our community forum connects farmers from across the region, fostering a network of shared knowledge and support. Agrismart isn\'t just an app; it\'s a partner in sustainable and profitable farming.', author: 'Oak Industries', date: 'October 22, 2023', imageUrl: 'https://picsum.photos/seed/blog2/400/300' },
    { id: 3, title: 'A Message from our CEO: Why We Build', excerpt: 'Olal Abdu Karim shares his vision for the future of Oak Industries and the core mission that drives our team every day...', fullText: 'Olal Abdu Karim shares his vision for the future of Oak Industries and the core mission that drives our team every day. "We founded Oak Industries not just to build software, but to build solutions," says Olal. "Our goal is to look at fundamental sectors like employment and agriculture and ask: how can technology create a tangible, positive impact? For us, success is measured by the opportunities we create for job seekers, the yields we help farmers increase, and the overall progress we empower. Our commitment is to our users and to building a better, more connected future through technology."', author: 'Olal Abdu Karim', date: 'October 18, 2023', imageUrl: 'https://picsum.photos/seed/blog3/400/300' },
];

export const INVESTOR_FAQS: FAQ[] = [
    {
        question: "What is your primary revenue model?",
        answer: "Our revenue is generated through a hybrid SaaS model. For Synergy, we offer tiered subscription plans for employers (B2B) and premium features for job seekers (B2C). Agrismart operates on a subscription basis for individual farmers and offers customized enterprise solutions for agricultural cooperatives."
    },
    {
        question: "Who are your main competitors?",
        answer: "In the HR-Tech space, we compete with established job boards and newer AI-driven platforms. Our key differentiator is our focus on creating a holistic ecosystem for both employers and candidates. In Ag-Tech, we compete with various farm management software, but our unique combination of data analytics, market insights, and community features sets us apart."
    },
    {
        question: "What is your customer acquisition strategy?",
        answer: "Our strategy is multi-pronged, focusing on digital marketing, strategic partnerships with industry bodies, and a freemium model that allows users to experience the core value of our products. Word-of-mouth and user referrals have also been significant drivers of growth, validating our product-market fit."
    },
    {
        question: "How will the funds from this investment round be used?",
        answer: "Funds will be allocated to three key areas: 1) Accelerating product development, particularly in AI and machine learning capabilities. 2) Expanding our sales and marketing efforts to enter new international markets. 3) Scaling our infrastructure to support our growing user base and ensure platform stability."
    }
];