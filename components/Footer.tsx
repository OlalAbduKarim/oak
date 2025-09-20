
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-gold">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-oak-brown">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2">
            <h3 className="text-xl font-bold text-cream">Oak Industries</h3>
            <p className="text-gray-400 mt-2 max-w-sm">Empowering progress through innovative software solutions for the job market and agriculture.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold text-gray-200 tracking-wider uppercase">Navigate</h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.slice(1, 5).map(link => (
                 <li key={link.path}>
                    <Link to={link.path} className="text-gray-400 hover:text-white">{link.label}</Link>
                 </li> 
              ))}
            </ul>
          </div>
          <div>
             <h4 className="text-md font-semibold text-gray-200 tracking-wider uppercase">Connect</h4>
             <ul className="mt-4 space-y-2">
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
             </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-stone-600 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Oak Industries. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <SocialIcon href="#">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23,0H1.77A1.77,1.77,0,0,0,0,1.77V22.23A1.77,1.77,0,0,0,1.77,24H22.23A1.77,1.77,0,0,0,24,22.23V1.77A1.77,1.77,0,0,0,22.23,0ZM7.13,20.45H3.58V9H7.13ZM5.35,7.42A2.08,2.08,0,1,1,7.42,5.35,2.08,2.08,0,0,1,5.35,7.42ZM20.45,20.45H16.9v-6c0-1.42-.05-3.25-2-3.25s-2.3,1.55-2.3,3.15v6.1H9V9h3.43v1.57h.05a3.75,3.75,0,0,1,3.38-1.87c3.61,0,4.28,2.38,4.28,5.47Z"/></svg>
            </SocialIcon>
            <SocialIcon href="#">
               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.2C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6C22.5,6.4,23.3,5.5,24,4.6z"/></svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
