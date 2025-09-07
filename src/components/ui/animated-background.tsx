import React from 'react';

// Floating Shape Component
const FloatingShape = ({ 
  className = "", 
  size = "w-16 h-16", 
  delay = "0s",
  duration = "20s"
}: {
  className?: string;
  size?: string;
  delay?: string;
  duration?: string;
}) => (
  <div 
    className={`absolute opacity-20 ${size} ${className}`}
    style={{
      animationDelay: delay,
      animationDuration: duration
    }}
  />
);

// Particle Component
const Particle = ({ 
  left = "10%", 
  delay = "0s",
  size = "w-2 h-2"
}: {
  left?: string;
  delay?: string;
  size?: string;
}) => (
  <div
    className={`absolute ${size} bg-primary rounded-full animate-particle-drift opacity-40`}
    style={{
      left,
      animationDelay: delay,
      animationDuration: `${15 + Math.random() * 10}s`
    }}
  />
);

// Geometric Blob Component
const GeometricBlob = ({ 
  className = "",
  size = "w-32 h-32",
  color = "bg-mint/10"
}: {
  className?: string;
  size?: string;
  color?: string;
}) => (
  <div 
    className={`absolute ${size} ${color} animate-blob animate-float-delayed ${className}`}
    style={{
      clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
    }}
  />
);

// Main Animated Background Component
export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden bg-animated">
      {/* Floating Geometric Shapes */}
      <FloatingShape 
        className="top-20 left-10 bg-mint/5 rounded-full animate-float"
        size="w-24 h-24"
        delay="0s"
      />
      
      <FloatingShape 
        className="top-40 right-20 bg-primary/5 animate-swing"
        size="w-16 h-16"
        delay="2s"
        duration="15s"
      />
      
      <FloatingShape 
        className="bottom-32 left-20 bg-mint/8 rounded-lg animate-rotate-slow"
        size="w-12 h-12"
        delay="4s"
      />
      
      <FloatingShape 
        className="top-1/2 right-10 bg-primary/6 animate-breathe"
        size="w-20 h-20"
        delay="1s"
      />
      
      {/* Geometric Blobs */}
      <GeometricBlob 
        className="top-10 right-1/4"
        size="w-40 h-40"
        color="bg-mint/5"
      />
      
      <GeometricBlob 
        className="bottom-20 left-1/4"
        size="w-28 h-28"
        color="bg-primary/5"
      />
      
      {/* Floating Triangles */}
      <div 
        className="absolute top-1/3 left-1/3 w-0 h-0 opacity-10 animate-swing"
        style={{
          borderLeft: '15px solid transparent',
          borderRight: '15px solid transparent',
          borderBottom: '25px solid hsl(var(--mint))',
          animationDelay: '3s'
        }}
      />
      
      <div 
        className="absolute bottom-1/4 right-1/3 w-0 h-0 opacity-15 animate-float"
        style={{
          borderLeft: '20px solid transparent',
          borderRight: '20px solid transparent',
          borderBottom: '35px solid hsl(var(--primary))',
          animationDelay: '5s'
        }}
      />
      
      {/* Floating Particles */}
      <Particle left="5%" delay="0s" />
      <Particle left="15%" delay="3s" size="w-1 h-1" />
      <Particle left="25%" delay="6s" />
      <Particle left="35%" delay="9s" size="w-3 h-3" />
      <Particle left="45%" delay="12s" />
      <Particle left="55%" delay="2s" size="w-1 h-1" />
      <Particle left="65%" delay="8s" />
      <Particle left="75%" delay="5s" size="w-2 h-2" />
      <Particle left="85%" delay="11s" />
      <Particle left="95%" delay="7s" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/50 to-transparent" />
    </div>
  );
};

// Page Transition Component
export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="page-enter page-enter-active">
      {children}
    </div>
  );
};

// Refresh Animation Component
export const RefreshAnimation = ({ isVisible }: { isVisible: boolean }) => {
  if (!isVisible) return null;
  
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-down">
      <div className="bg-white rounded-full p-4 shadow-lg animate-bounce-in">
        {/* Hand Illustration */}
        <svg 
          width="60" 
          height="80" 
          viewBox="0 0 60 80" 
          className="animate-swing"
          style={{ animationDuration: '1s' }}
        >
          {/* Hand */}
          <path
            d="M20 60 L20 35 Q20 30 25 30 L35 30 Q40 30 40 35 L40 60 Q40 65 35 65 L25 65 Q20 65 20 60"
            fill="hsl(var(--mint))"
            className="animate-breathe"
          />
          {/* Arm */}
          <rect x="25" y="60" width="10" height="15" fill="hsl(var(--mint-light))" />
          {/* String */}
          <line x1="30" y1="30" x2="30" y2="10" stroke="hsl(var(--primary))" strokeWidth="2" />
          {/* Lever */}
          <circle cx="30" cy="10" r="8" fill="hsl(var(--primary))" />
          
          {/* Sparkles */}
          <circle cx="15" cy="25" r="2" fill="hsl(var(--mint))" className="animate-pulse-glow" />
          <circle cx="45" cy="20" r="1.5" fill="hsl(var(--primary))" className="animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
          <circle cx="10" cy="45" r="1" fill="hsl(var(--mint-light))" className="animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </svg>
      </div>
    </div>
  );
};

export default AnimatedBackground;