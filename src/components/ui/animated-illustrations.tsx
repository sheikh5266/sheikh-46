import React from 'react';

export const AnimatedHand = ({ className = "" }: { className?: string }) => (
  <div className={`${className} animate-float`}>
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <g className="animate-pulse">
        {/* Hand */}
        <path
          d="M80 120 C85 115, 95 115, 100 120 L110 130 C115 125, 125 125, 130 130 L140 140 C145 135, 155 135, 160 140 L170 150 C175 145, 185 145, 190 150 L190 170 C190 180, 180 190, 170 190 L100 190 C90 190, 80 180, 80 170 Z"
          fill="#FEB89A"
          className="animate-breathe"
        />
        {/* Thumb */}
        <path
          d="M70 140 C65 135, 65 125, 70 120 C75 115, 85 115, 90 120 L100 130 C95 135, 85 135, 80 140 Z"
          fill="#FEB89A"
        />
        {/* Wrist */}
        <rect x="70" y="180" width="40" height="20" rx="10" fill="#FEB89A" />
        
        {/* Animated pointing gesture */}
        <g className="animate-bounce" style={{ transformOrigin: '140px 140px', animationDelay: '0.5s' }}>
          <circle cx="140" cy="140" r="3" fill="#E29578" />
        </g>
      </g>
      
      {/* Sparkles around hand */}
      <g className="animate-pulse">
        <circle cx="60" cy="100" r="2" fill="#FFD700" className="animate-pulse" style={{ animationDelay: '0s' }} />
        <circle cx="180" cy="120" r="1.5" fill="#FFD700" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
        <circle cx="50" cy="160" r="1" fill="#FFD700" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
      </g>
    </svg>
  </div>
);

export const AnimatedDesk = ({ className = "" }: { className?: string }) => (
  <div className={`${className} animate-float`}>
    <svg viewBox="0 0 300 200" className="w-full h-full">
      {/* Desk */}
      <rect x="20" y="120" width="260" height="60" rx="8" fill="#8B4513" />
      <rect x="25" y="125" width="250" height="5" fill="#A0522D" />
      
      {/* Computer Monitor */}
      <rect x="80" y="60" width="140" height="80" rx="4" fill="#2C3E50" className="animate-breathe" />
      <rect x="85" y="65" width="130" height="70" rx="2" fill="#3498DB" />
      
      {/* Screen content (animated) */}
      <g className="animate-pulse">
        <rect x="90" y="70" width="120" height="8" fill="#E74C3C" />
        <rect x="90" y="85" width="80" height="6" fill="#F39C12" />
        <rect x="90" y="98" width="100" height="6" fill="#27AE60" />
        <rect x="90" y="111" width="90" height="6" fill="#9B59B6" />
      </g>
      
      {/* Monitor Stand */}
      <rect x="140" y="140" width="20" height="20" fill="#34495E" />
      <rect x="120" y="155" width="60" height="8" rx="4" fill="#34495E" />
      
      {/* Books */}
      <g className="animate-float" style={{ animationDelay: '1s' }}>
        <rect x="230" y="90" width="40" height="30" fill="#E74C3C" />
        <rect x="235" y="85" width="40" height="30" fill="#3498DB" />
        <rect x="240" y="80" width="40" height="30" fill="#27AE60" />
      </g>
      
      {/* Coffee cup with steam */}
      <g className="animate-bounce" style={{ animationDelay: '0.5s' }}>
        <ellipse cx="40" cy="105" rx="12" ry="8" fill="#8B4513" />
        <ellipse cx="40" cy="100" rx="10" ry="6" fill="#D2B48C" />
        <path d="M45 100 Q55 95, 50 110" stroke="#8B4513" strokeWidth="2" fill="none" />
        
        {/* Animated steam */}
        <g className="animate-pulse">
          <path d="M35 85 Q38 80, 35 75" stroke="#E6E6FA" strokeWidth="1.5" fill="none" opacity="0.7" />
          <path d="M40 85 Q43 80, 40 75" stroke="#E6E6FA" strokeWidth="1.5" fill="none" opacity="0.7" />
          <path d="M45 85 Q48 80, 45 75" stroke="#E6E6FA" strokeWidth="1.5" fill="none" opacity="0.7" />
        </g>
      </g>
      
      {/* Pen holder */}
      <rect x="250" y="100" width="20" height="20" fill="#95A5A6" />
      <rect x="255" y="85" width="2" height="20" fill="#2C3E50" className="icon-bounce" />
      <rect x="260" y="88" width="2" height="17" fill="#E74C3C" className="icon-bounce" style={{ animationDelay: '0.2s' }} />
      <rect x="265" y="90" width="2" height="15" fill="#3498DB" className="icon-bounce" style={{ animationDelay: '0.4s' }} />
    </svg>
  </div>
);

export const AnimatedLoader = ({ className = "" }: { className?: string }) => {
  // For areas where we need a compact loader, use the enhanced SVG version
  return (
    <div className={`${className} flex items-center justify-center relative`}>
      {/* Enhanced SVG loader with glow effects */}
      <div className="relative">
        <svg viewBox="0 0 100 100" className="w-16 h-16">
          {/* Outer ring */}
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="url(#gradient1)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="60 40"
            className="animate-spin"
            filter="url(#glow)"
          />
          {/* Inner ring */}
          <circle
            cx="50"
            cy="50"
            r="25"
            stroke="url(#gradient2)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="40 30"
            className="animate-spin"
            style={{ animationDirection: 'reverse', animationDuration: '1s' }}
            filter="url(#glow)"
          />
          {/* Center pulse */}
          <circle
            cx="50"
            cy="50"
            r="8"
            fill="url(#gradient3)"
            className="animate-pulse"
          />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64FFDA" />
              <stop offset="100%" stopColor="#FF6B9D" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B9D" />
              <stop offset="100%" stopColor="#FFE66D" />
            </linearGradient>
            <radialGradient id="gradient3">
              <stop offset="0%" stopColor="#64FFDA" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#64FFDA" stopOpacity="0.2" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>
        
        {/* Floating particles around loader */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-mint rounded-full animate-ping"
              style={{
                left: `${20 + Math.cos(i * 60 * Math.PI / 180) * 40}%`,
                top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 40}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const SuccessAnimation = ({ className = "" }: { className?: string }) => (
  <div className={`${className} success-animation`}>
    <svg viewBox="0 0 100 100" className="w-16 h-16 text-green-500">
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="currentColor"
        opacity="0.1"
      />
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M30 50 L45 65 L70 35"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export const ParticleBackground = ({ className = "" }: { className?: string }) => (
  <div className={`particles ${className}`}>
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="particle"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${6 + Math.random() * 4}s`
        }}
      />
    ))}
  </div>
);