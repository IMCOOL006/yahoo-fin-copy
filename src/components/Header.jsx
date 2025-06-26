import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Bell, Mail, Menu, X } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { topSegments, navItems } from '@/data/headerData';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const [hoveredNav, setHoveredNav] = useState(null);
  const [hoveredMore, setHoveredMore] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hoverTimeout = useRef(null);

  const handleNavMouseEnter = (idx) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHoveredNav(idx);
  };
  const handleNavMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setHoveredNav(null), 120);
  };
  const handleDropdownMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
  };
  const handleDropdownMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setHoveredNav(null), 120);
  };
  const handleMoreMouseEnter = () => {
    setHoveredMore(true);
  };
  const handleMoreMouseLeave = () => {
    setHoveredMore(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 w-full">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
       
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-purple-600 font-bold text-xl">yahoo!</span>
              <span className="text-green-600 font-bold text-xl">finance</span>
            </Link>
     
            <button
              className="ml-2 p-2 rounded md:hidden text-gray-700 hover:bg-gray-100 focus:outline-none"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        
          <div className="flex-1 flex justify-center md:justify-center">
            <form className="w-full max-w-xl flex items-center bg-gray-100 rounded-full px-2 py-1">
              <input
                type="text"
                placeholder="Search for news, symbols or companies"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none px-4 py-2 text-gray-900 rounded-full"
              />
              <button type="submit" className="bg-emerald-700 hover:bg-emerald-800 text-white rounded-full p-2 ml-2 flex items-center justify-center">
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {topSegments.map((item, idx) =>
              item.menu ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={handleMoreMouseEnter}
                  onMouseLeave={handleMoreMouseLeave}
                >
                  <span className="px-3 py-1 text-base font-medium cursor-pointer hover:text-emerald-700 transition-colors rounded {item.active ? 'text-emerald-700 underline' : 'text-gray-800'}">
                    {item.name}
                  </span>
                  {hoveredMore && (
                    <div className="dropdown-menu absolute left-0 top-full mt-2 w-48 bg-white rounded shadow-lg z-20">
                      {item.menu.map((menuItem) => (
                        <div key={menuItem} className="dropdown-item px-4 py-2 hover:bg-gray-50 cursor-pointer text-gray-800">
                          {menuItem}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-1 text-base font-medium transition-colors rounded ${item.active ? 'text-emerald-700 underline' : 'text-gray-800'} hover:text-emerald-700`}
                >
                  {item.name}
                </Link>
              )
            )}
            <Bell className="h-5 w-5 text-gray-500 cursor-pointer" />
            <Button variant="outline" className="px-3 py-1 border-blue-600 text-blue-600 hover:bg-blue-50">
              <Mail className="h-4 w-4 mr-1" /> Mail
            </Button>
            <Button variant="outline" className="px-3 py-1 border-gray-400 text-gray-700 hover:bg-gray-100">
              Sign in
            </Button>
          </div>
        </div>
      </div>
     
      <div className="w-full bg-gray-50 border-b border-gray-200 hidden md:block">
        <nav className="flex justify-center">
          <ul className="flex flex-row gap-8 py-2">
            {navItems.map((item, idx) => (
              <li
                key={item.name}
                className="relative"
                onMouseEnter={() => handleNavMouseEnter(idx)}
                onMouseLeave={handleNavMouseLeave}
              >
                <Link
                  to={item.href}
                  className={`px-2 py-1 text-base font-medium transition-colors rounded hover:bg-gray-100 hover:text-blue-700 ${
                    location.pathname === item.href ? 'text-blue-700 border-b-2 border-blue-700 bg-gray-100' : 'text-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
                {hoveredNav === idx && (
                  <div
                    className="dropdown-menu absolute left-0 top-full mt-2 w-48 bg-white rounded shadow-lg z-20"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    {item.menu.map((menuItem) => (
                      <div key={menuItem} className="dropdown-item px-4 py-2 hover:bg-gray-50 cursor-pointer text-gray-800">
                        {menuItem}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex md:hidden">
          <div className="bg-white w-4/5 max-w-xs h-full shadow-lg p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <span className="text-purple-600 font-bold text-xl">yahoo!</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded hover:bg-gray-100 focus:outline-none" aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col gap-2">
              {topSegments.map((item) =>
                item.menu ? (
                  <div key={item.name} className="mb-2">
                    <div className="font-medium text-gray-800 mb-1">{item.name}</div>
                    <div className="flex flex-col gap-1 pl-2">
                      {item.menu.map((menuItem) => (
                        <Link key={menuItem} to="#" className="text-gray-600 py-1 hover:text-emerald-700" onClick={() => setMobileMenuOpen(false)}>
                          {menuItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link key={item.name} to={item.href} className="py-2 text-gray-800 font-medium hover:text-emerald-700" onClick={() => setMobileMenuOpen(false)}>
                    {item.name}
                  </Link>
                )
              )}
            </nav>
            <div className="mt-6 flex flex-col gap-2">
              <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                <Mail className="h-4 w-4 mr-1" /> Mail
              </Button>
              <Button variant="outline" className="w-full border-gray-400 text-gray-700 hover:bg-gray-100">
                Sign in
              </Button>
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;

