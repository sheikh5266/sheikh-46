import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Home, Search, RefreshCw } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-animated relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-mint/10 rounded-full animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary/10 animate-swing" />
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-mint/5 animate-breathe" />
      </div>
      
      <div className="text-center max-w-md mx-auto px-6 relative z-10">
        {/* Animated 404 Illustration */}
        <div className="mb-8 animate-bounce-in">
          <svg 
            width="200" 
            height="150" 
            viewBox="0 0 200 150" 
            className="mx-auto animate-float"
          >
            {/* Lost Robot */}
            <g className="animate-breathe">
              {/* Robot Body */}
              <rect x="80" y="60" width="40" height="50" rx="8" fill="hsl(var(--charcoal))" />
              
              {/* Robot Head */}
              <rect x="85" y="30" width="30" height="35" rx="15" fill="hsl(var(--charcoal-light))" />
              
              {/* Eyes */}
              <circle cx="92" cy="42" r="3" fill="hsl(var(--mint))" className="animate-pulse-glow" />
              <circle cx="108" cy="42" r="3" fill="hsl(var(--mint))" className="animate-pulse-glow" />
              
              {/* Antenna */}
              <line x1="100" y1="30" x2="100" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" />
              <circle cx="100" cy="20" r="3" fill="hsl(var(--primary))" className="animate-pulse" />
              
              {/* Arms */}
              <rect x="65" y="70" width="12" height="25" rx="6" fill="hsl(var(--charcoal-light))" />
              <rect x="123" y="70" width="12" height="25" rx="6" fill="hsl(var(--charcoal-light))" />
              
              {/* Legs */}
              <rect x="87" y="110" width="8" height="20" rx="4" fill="hsl(var(--charcoal))" />
              <rect x="105" y="110" width="8" height="20" rx="4" fill="hsl(var(--charcoal))" />
            </g>
            
            {/* Flashlight Beam */}
            <path
              d="M 135 82 L 180 70 L 180 94 Z"
              fill="hsl(var(--mint) / 0.3)"
              className="animate-pulse"
            />
            
            {/* Question Marks */}
            <text x="60" y="40" fontSize="20" fill="hsl(var(--mint))" className="animate-bounce-in" style={{ animationDelay: '1s' }}>?</text>
            <text x="150" y="50" fontSize="16" fill="hsl(var(--primary))" className="animate-bounce-in" style={{ animationDelay: '1.5s' }}>?</text>
            <text x="40" y="90" fontSize="14" fill="hsl(var(--mint-light))" className="animate-bounce-in" style={{ animationDelay: '2s' }}>?</text>
          </svg>
        </div>
        
        {/* 404 Text with Glitch Effect */}
        <h1 className="text-8xl font-bold mb-4 gradient-text animate-scale-in">
          404
        </h1>
        
        {/* Animated Text */}
        <div className="space-y-4 mb-8">
          <p className="text-2xl font-semibold text-foreground animate-fade-in-up">
            Oops! Page not found
          </p>
          <p className="text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Looks like our robot friend got lost too! The page you're looking for doesn't exist.
          </p>
        </div>
        
        {/* Animated Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <EnhancedButton 
            variant="hero" 
            size="lg" 
            animation="bounce"
            icon={<Home />}
            onClick={() => window.location.href = '/'}
          >
            Return Home
          </EnhancedButton>
          
          <EnhancedButton 
            variant="outline" 
            size="lg" 
            animation="breathe"
            icon={<Search />}
            onClick={() => window.history.back()}
          >
            Go Back
          </EnhancedButton>
          
          <EnhancedButton 
            variant="ghost" 
            size="lg" 
            animation="float"
            icon={<RefreshCw />}
            onClick={() => window.location.reload()}
          >
            Refresh
          </EnhancedButton>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute -top-10 -left-10 w-5 h-5 bg-mint rounded-full animate-particle-drift opacity-60" />
        <div className="absolute -bottom-5 -right-5 w-3 h-3 bg-primary rounded-full animate-particle-drift opacity-40" style={{ animationDelay: '3s' }} />
      </div>
    </div>
  );
};

export default NotFound;
