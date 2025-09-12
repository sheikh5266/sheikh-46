import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Play, Sparkles, Star, Zap, Rocket, Heart } from "lucide-react";
import headshotImage from "@/assets/sheikh-momin-profile.png";
import headshotImagePng from "@/assets/sheikh-momin-profile.png";
import { AnimatedBackground } from "@/components/ui/flat-illustrations";
import { useScrollAnimation } from "@/hooks/useScrollAnimations";

const Hero = () => {
  const heroRef = useScrollAnimation('animate-fade-in-up');
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden cursor-follow"
    >
      {/* Enhanced Animated Background Elements with 3D effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-mint rounded-full mix-blend-multiply filter blur-xl animate-levitate"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-mint-light rounded-full mix-blend-multiply filter blur-xl animate-magnetic" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-primary rounded-full mix-blend-multiply filter blur-2xl animate-heartbeat opacity-30"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-32 right-1/4 w-16 h-16 bg-mint/10 animate-spiral-in" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-primary/15 rounded-full animate-wobble" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Flat Illustrations Background */}
      <AnimatedBackground />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4 stagger-child animate-slide-in-up">
              <div className="flex items-center gap-3 animate-rubber-band">
                <Sparkles className="h-6 w-6 text-mint animate-heartbeat" />
                <span className="text-mint font-medium animate-typewriter">Welcome to my digital universe</span>
                <Zap className="h-5 w-5 text-mint-light animate-pulse" />
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight animate-flip-in-x">
                Sheikh <span className="gradient-text animate-gradient-shift">Momin</span>
              </h1>
              
              <div className="relative animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
                <p className="text-xl lg:text-2xl text-gray-200 font-light animate-jello">
                  Digital Marketer • Web Developer • Video Editor • Motion & Graphic Designer
                </p>
                <div className="absolute -right-4 -top-2">
                  <Rocket className="h-6 w-6 text-mint animate-bounce-in" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-300 max-w-lg leading-relaxed stagger-child animate-fade-in-right" style={{ animationDelay: '0.8s' }}>
              Crafting conversion-focused digital experiences with <Heart className="inline h-5 w-5 text-mint animate-heartbeat" /> and precision. 
              Let's transform your vision into reality.
            </p>

            {/* Enhanced Micro Stats with advanced animations */}
            <div className="flex flex-wrap gap-4 stagger-child animate-zoom-in" style={{ animationDelay: '1.2s' }}>
              {[
                { skill: 'Web Dev', icon: '🚀' },
                { skill: 'Meta Ads', icon: '📈' },
                { skill: 'Video Edit', icon: '🎬' },
                { skill: 'Motion GFX', icon: '✨' }
              ].map((item, index) => (
                <span 
                  key={item.skill} 
                  className="skill-tag animate-tada cursor-follow hover:animate-pulse-glow transition-all duration-300 group animate-hover-tilt"
                  style={{ animationDelay: `${1.5 + index * 0.15}s` }}
                >
                  <span className="text-lg mr-2 animate-bounce-in group-hover:animate-heartbeat">{item.icon}</span>
                  {item.skill}
                </span>
              ))}
            </div>

            {/* Enhanced CTA Buttons with magnetic effect */}
            <div className="flex flex-col sm:flex-row gap-4 will-change-transform" style={{ minHeight: '96px', opacity: 0, animation: 'spiral-in 0.8s ease-out 2s forwards' }}>
              <Button 
                className="btn-hero btn-ripple animate-hover-glow group relative overflow-hidden animate-magnetic cursor-follow"
                onClick={() => scrollToSection('portfolio')}
              >
                <span className="relative z-10 flex items-center">
                  View Portfolio
                  <ArrowRight className="ml-2 h-5 w-5 animate-magnetic group-hover:animate-tada" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
              
              <Button 
                variant="outline"
                className="btn-hero-outline btn-ripple group animate-hover-lift cursor-follow"
                onClick={() => scrollToSection('contact')}
              >
                <Star className="mr-2 h-5 w-5 animate-heartbeat group-hover:animate-tada" />
                <span className="animate-wobble">Request a Quote</span>
              </Button>
            </div>
          </div>

          {/* Right Content - Enhanced Professional Image with 3D effects */}
          <div className="flex justify-center lg:justify-end animate-spiral-in" style={{ animationDelay: '1s' }}>
            <div className="relative group">
              {/* Main Image Container with advanced hover effects */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-strong animate-levitate group-hover:animate-rubber-band transition-all duration-500 cursor-follow animate-hover-tilt">
                <picture>
                  <source 
                    srcSet={headshotImage} 
                    type="image/webp"
                  />
                  <img 
                    src={headshotImagePng}
                    alt="Sheikh Momin - Professional Headshot"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:animate-jello"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width="384"
                    height="384"
                  />
                </picture>
              </div>
              
              {/* Enhanced Floating Elements with advanced animations */}
              <div className="absolute -top-4 -right-4 glass-card p-4 animate-magnetic hover:animate-tada transition-all duration-300 group cursor-pointer animate-hover-rotate">
                <Play className="h-6 w-6 text-mint group-hover:animate-heartbeat transition-transform" />
                <div className="absolute -inset-1 bg-mint/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity animate-pulse-glow"></div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass-card p-4 animate-wobble hover:animate-rubber-band transition-all duration-300 group cursor-pointer animate-hover-rotate" style={{ animationDelay: '1.5s' }}>
                <Download className="h-6 w-6 text-mint group-hover:animate-bounce-in transition-transform" />
                <div className="absolute -inset-1 bg-mint/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity animate-pulse-glow"></div>
              </div>

              {/* New floating particles */}
              <div className="absolute top-16 -left-8 w-4 h-4 bg-mint/30 rounded-full animate-particle-drift"></div>
              <div className="absolute bottom-16 -right-8 w-3 h-3 bg-primary/40 rounded-full animate-particle-drift" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator with magnetic effect */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-magnetic cursor-pointer group animate-hover-lift" onClick={() => scrollToSection('about')}>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/60 transition-colors animate-breathe">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-heartbeat group-hover:bg-white/80"></div>
        </div>
        <p className="text-white/60 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity animate-fade-in-up">Discover More</p>
        <div className="absolute inset-0 rounded-full bg-mint/10 opacity-0 group-hover:opacity-100 animate-pulse-glow transition-opacity"></div>
      </div>
    </section>
  );
};

export default Hero;