import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

/**
 * Navigation Component
 * Responsive navigation bar with mobile menu support
 */
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About', path: '/about', icon: '👤' },
    { name: 'Journey', path: '/journey', icon: '🌍' },
    { name: 'Education', path: '/education', icon: '🎓' },
    { name: 'Career', path: '/career', icon: '💼' },
    { name: 'Family', path: '/family', icon: '👨‍👩‍👧‍👦' },
  ];

  return (
    <nav className={`bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-xl' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="group flex-shrink-0 flex items-center gap-2">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                  AS
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-indigo-400 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <span className={`font-bold text-gray-800 transition-all duration-300 ${scrolled ? 'text-sm' : 'text-base'}`}>
                Ajeet Singh
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="group relative text-gray-700 hover:text-primary-600 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-primary-50 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-lg group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">{link.icon}</span>
                  {link.name}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-indigo-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative inline-flex items-center justify-center p-2 rounded-xl text-gray-700 hover:text-primary-600 hover:bg-primary-50 focus:outline-none transition-all duration-300 transform hover:scale-110 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-indigo-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg
                className={`h-6 w-6 relative z-10 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-4 space-y-2 bg-gradient-to-b from-white to-primary-50 border-t-2 border-primary-100">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="group flex items-center gap-3 text-gray-700 hover:text-primary-600 px-4 py-3 rounded-xl text-base font-medium bg-white hover:bg-gradient-to-r hover:from-primary-50 hover:to-indigo-50 transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:shadow-md transform hover:scale-105"
              style={{
                animation: isOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : 'none'
              }}
            >
              <span className="text-2xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                {link.icon}
              </span>
              <span className="flex-1">{link.name}</span>
              <span className="text-primary-400 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
