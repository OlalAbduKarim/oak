
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkStyle = {
    color: '#f59e0b', // accent-gold
    fontWeight: '600',
  };

  return (
    <header className="bg-cream/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-oak-brown">
              Oak Industries
            </NavLink>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className="text-gray-600 hover:text-accent-gold transition-colors duration-200"
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:block">
             <NavLink
                to="/investors"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-oak-brown hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500"
              >
                For Investors
              </NavLink>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-oak-brown focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-oak-brown"
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              >
                {link.label}
              </NavLink>
            ))}
             <NavLink
                to="/investors"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-3 py-3 mt-2 rounded-md text-base font-medium text-white bg-oak-brown hover:bg-stone-800"
              >
                For Investors
              </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
