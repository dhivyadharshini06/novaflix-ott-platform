
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: isLoggedIn ? '/home' : '/' },
    { name: 'Movies', path: '/home' },
    { name: 'TV Shows', path: '/home' },
    { name: 'Plans', path: '/plans' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8 md:gap-12">
          <Link to="/" className="text-3xl font-extrabold tracking-tighter text-glow flex items-center gap-2">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">NOVA</span>
            <span className="text-white">FLIX</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                  location.pathname === link.path ? 'text-purple-500' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-300 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
          
          {isLoggedIn ? (
            <Link to="/profile" className="w-10 h-10 rounded-full border-2 border-purple-500 overflow-hidden hover:scale-105 transition-transform">
              <img src="https://picsum.photos/seed/user123/100" alt="Profile" className="w-full h-full object-cover" />
            </Link>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login" className="text-sm font-semibold hover:text-purple-400 transition-colors">Sign In</Link>
              <Link to="/signup" className="px-5 py-2 rounded-full bg-purple-600 text-sm font-bold purple-glow hover:bg-purple-700 transition-all">
                Join Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
