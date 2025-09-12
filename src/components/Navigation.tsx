import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

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
      navigate(item.path);
    } else if (location.pathname === '/') {
      const element = document.getElementById(item.id);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-slide-in-down ${
      isScrolled ? 'glass-card backdrop-blur-md animate-pulse-glow' : 'bg-transparent'
    }`}>
      <div className="container mx-auto mobile-container">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div 
            className={`text-xl sm:text-2xl font-bold cursor-pointer transition-all duration-500 touch-target flex items-center justify-center animate-heartbeat cursor-follow ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
            onClick={() => navigate('/')}
          >
            <Sparkles className="mr-2 h-5 w-5 animate-pulse-glow" />
            SM
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className={`transition-all duration-300 font-medium text-sm lg:text-base animate-hover-lift cursor-follow ${
                  isScrolled 
                    ? 'text-primary/80 hover:text-primary' 
                    : 'text-white/80 hover:text-white'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </button>
            ))}
            <Button 
              className="btn-hero text-sm lg:text-base px-4 py-2 lg:px-6 lg:py-3 animate-magnetic cursor-follow animate-hover-glow"
              onClick={() => handleNavigation({ name: 'Contact', id: 'contact' })}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-all duration-300 touch-target flex items-center justify-center animate-hover-rotate cursor-follow ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 
              <X className="h-6 w-6 animate-spin" /> : 
              <Menu className="h-6 w-6 animate-pulse" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-charcoal/95 backdrop-blur-md rounded-lg mt-2 p-4 animate-zoom-in border border-white/10 shadow-xl">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className="text-white/80 hover:text-white transition-all duration-300 font-medium text-left py-3 px-2 rounded-lg hover:bg-white/10 animate-fade-in-up cursor-follow animate-hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </button>
              ))}
              <Button 
                className="btn-hero mt-4 w-full animate-bounce-in cursor-follow"
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