import React from 'react';
import { trending, exploreMore, aboutLinks } from '@/data/footerData';

const Footer = () => {

  return (
    <footer className="bg-gray-100 py-8 mt-8 border-t">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start md:flex-row md:justify-between gap-8 px-4">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-2">
            <span className="text-purple-600 font-bold text-xl">yahoo!</span>
            <span className="text-green-600 font-bold text-xl ml-1">finance</span>
          </div>
          <div className="text-xs text-gray-500 mb-2 text-center md:text-left">Copyright © 2025 Yahoo. All rights reserved.</div>
          <div className="flex gap-3">
            <a href="#" aria-label="X" className="text-gray-500 hover:text-gray-700"><svg width="20" height="20" fill="currentColor"><circle cx="10" cy="10" r="10" /></svg></a>
            <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-gray-700"><svg width="20" height="20" fill="currentColor"><circle cx="10" cy="10" r="10" /></svg></a>
            <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-gray-700"><svg width="20" height="20" fill="currentColor"><circle cx="10" cy="10" r="10" /></svg></a>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-bold mb-2">What's trending</div>
            <ul className="space-y-1">
              {trending.map((item) => (
                <li key={item}><a href="#" className="hover:underline">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Explore more</div>
            <ul className="space-y-1">
              {exploreMore.map((item) => (
                <li key={item}><a href="#" className="hover:underline">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">About</div>
            <ul className="space-y-1">
              {aboutLinks.map((item) => (
                <li key={item}><a href="#" className="hover:underline">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 