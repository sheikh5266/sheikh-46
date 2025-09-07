import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item: { name: string; id: string; path?: string }) => {
    if (item.path) {
      // Navigate to dedicated page
      navigate(item.path);
    } else if (location.pathname === '/') {
      // Scroll to section on homepage
      const element = document.getElementById(item.id);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to homepage then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(item.id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services', path: '/services' },
    { name: 'Portfolio', id: 'portfolio', path: '/portfolio' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div 
            className={`text-2xl font-bold cursor-pointer transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
            onClick={() => navigate('/')}
          >
            SM
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className={`transition-colors duration-300 font-medium ${
                  isScrolled 
                    ? 'text-primary/80 hover:text-primary' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button 
              className="btn-hero"
              onClick={() => handleNavigation({ name: 'Contact', id: 'contact' })}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-charcoal/95 backdrop-blur-md rounded-lg mt-2 p-4 animate-scale-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium text-left py-2"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                className="btn-hero mt-4"
                onClick={() => handleNavigation({ name: 'Contact', id: 'contact' })}
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;