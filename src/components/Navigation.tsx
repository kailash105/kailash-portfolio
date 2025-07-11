import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const resumeLink = 'https://docs.google.com/document/d/1w4D0hfszwdzpvnPcLBIDOA_qQcXDJmQAiBcckSn1Tt4/edit?usp=sharing';

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* ✅ Left: Name */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Kailash Khadarabad
            </span>
          </div>

          {/* ✅ Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}

            {/* ✅ Resume Button */}
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg text-sm font-medium"
            >
              Resume
            </a>
          </div>

          {/* ✅ Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-blue-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ✅ Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {/* ✅ Mobile Resume link */}
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 mt-2 text-white text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-4 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
