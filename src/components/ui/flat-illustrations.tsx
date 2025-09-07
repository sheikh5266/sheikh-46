import React from 'react';

export const CodeIcon = ({ className = "", style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="20" width="80" height="60" rx="8" fill="hsl(var(--mint) / 0.1)" stroke="hsl(var(--mint))" strokeWidth="2"/>
    <circle cx="20" cy="30" r="2" fill="hsl(var(--mint))"/>
    <circle cx="28" cy="30" r="2" fill="hsl(var(--mint-light))"/>
    <circle cx="36" cy="30" r="2" fill="hsl(var(--gray-400))"/>
    <rect x="15" y="40" width="30" height="2" rx="1" fill="hsl(var(--mint))"/>
    <rect x="20" y="45" width="40" height="2" rx="1" fill="hsl(var(--mint-light))"/>
    <rect x="15" y="50" width="25" height="2" rx="1" fill="hsl(var(--gray-400))"/>
    <rect x="15" y="55" width="35" height="2" rx="1" fill="hsl(var(--mint))"/>
  </svg>
);

export const VideoIcon = ({ className = "", style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="25" width="70" height="50" rx="6" fill="hsl(var(--mint) / 0.1)" stroke="hsl(var(--mint))" strokeWidth="2"/>
    <polygon points="40,40 40,60 60,50" fill="hsl(var(--mint))"/>
    <rect x="20" y="15" width="8" height="8" rx="2" fill="hsl(var(--mint-light))"/>
    <rect x="72" y="15" width="8" height="8" rx="2" fill="hsl(var(--mint-light))"/>
    <rect x="30" y="80" width="40" height="3" rx="1.5" fill="hsl(var(--gray-400))"/>
  </svg>
);

export const DesignIcon = ({ className = "", style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="15" fill="hsl(var(--mint) / 0.2)" stroke="hsl(var(--mint))" strokeWidth="2"/>
    <rect x="55" y="20" width="25" height="25" rx="4" fill="hsl(var(--mint-light) / 0.2)" stroke="hsl(var(--mint-light))" strokeWidth="2"/>
    <polygon points="25,60 45,60 35,80" fill="hsl(var(--mint) / 0.3)" stroke="hsl(var(--mint))" strokeWidth="2"/>
    <circle cx="75" cy="70" r="8" fill="hsl(var(--mint-dark) / 0.2)" stroke="hsl(var(--mint-dark))" strokeWidth="2"/>
  </svg>
);

export const MarketingIcon = ({ className = "", style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="40" r="20" fill="hsl(var(--mint) / 0.1)" stroke="hsl(var(--mint))" strokeWidth="2"/>
    <rect x="45" y="60" width="10" height="25" fill="hsl(var(--mint))"/>
    <rect x="40" y="80" width="20" height="5" rx="2" fill="hsl(var(--mint-light))"/>
    <circle cx="50" cy="40" r="8" fill="hsl(var(--mint))"/>
    <path d="M35 25 L40 30 L35 35" stroke="hsl(var(--mint-light))" strokeWidth="2" fill="none"/>
    <path d="M65 25 L60 30 L65 35" stroke="hsl(var(--mint-light))" strokeWidth="2" fill="none"/>
  </svg>
);

export const CreativeIcon = ({ className = "", style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 20 Q50 10 70 20 Q80 40 70 60 Q50 70 30 60 Q20 40 30 20 Z" fill="hsl(var(--mint) / 0.1)" stroke="hsl(var(--mint))" strokeWidth="2"/>
    <circle cx="45" cy="35" r="3" fill="hsl(var(--mint))"/>
    <circle cx="55" cy="45" r="4" fill="hsl(var(--mint-light))"/>
    <circle cx="40" cy="50" r="2" fill="hsl(var(--mint-dark))"/>
    <path d="M25 75 Q50 65 75 75" stroke="hsl(var(--mint))" strokeWidth="3" fill="none"/>
  </svg>
);

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top Section Illustrations */}
      <CodeIcon className="absolute top-20 left-10 w-16 h-16 opacity-20 animate-float" />
      <VideoIcon className="absolute top-40 right-16 w-12 h-12 opacity-15 animate-float" style={{ animationDelay: '1s' }} />
      <DesignIcon className="absolute top-60 left-1/4 w-14 h-14 opacity-10 animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Middle Section Illustrations */}
      <MarketingIcon className="absolute top-1/2 right-10 w-18 h-18 opacity-20 animate-float" style={{ animationDelay: '0.5s' }} />
      <CreativeIcon className="absolute top-1/2 left-16 w-20 h-20 opacity-15 animate-float" style={{ animationDelay: '1.5s' }} />
      
      {/* Bottom Section Illustrations */}
      <CodeIcon className="absolute bottom-40 right-1/4 w-12 h-12 opacity-10 animate-float" style={{ animationDelay: '3s' }} />
      <VideoIcon className="absolute bottom-60 left-20 w-16 h-16 opacity-15 animate-float" style={{ animationDelay: '2.5s' }} />
      <DesignIcon className="absolute bottom-20 right-20 w-14 h-14 opacity-20 animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Additional scattered elements */}
      <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-mint/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-mint-light/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 left-2/3 w-4 h-4 bg-mint-dark/15 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
    </div>
  );
};