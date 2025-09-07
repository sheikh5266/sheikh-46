import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Play, Sparkles, Star } from "lucide-react";
import headshotImage from "@/assets/sheikh-momin-profile.png";
import headshotImagePng from "@/assets/sheikh-momin-profile.png";
import { AnimatedBackground } from "@/components/ui/flat-illustrations";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-20 w-72 h-72 bg-mint rounded-full mix-blend-multiply filter blur-xl animate-float animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-mint-light rounded-full mix-blend-multiply filter blur-xl animate-float animate-breathe" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-primary rounded-full mix-blend-multiply filter blur-2xl animate-rotate-slow opacity-20"></div>
      </div>
      
      {/* Flat Illustrations Background */}
      <AnimatedBackground />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4 stagger-item animate-fade-in-left">
              <div className="flex items-center gap-2 animate-bounce-in">
                <Sparkles className="h-6 w-6 text-mint animate-pulse-glow" />
                <span className="text-mint font-medium animate-typewriter">Welcome to my digital world</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up">
                Sheikh <span className="gradient-text animate-gradient-shift">Momin</span>
              </h1>
              
              <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <p className="text-xl lg:text-2xl text-gray-200 font-light animate-breathe">
                  Digital Marketer • Web Developer • Video Editor • Motion & Graphic Designer
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-300 max-w-lg leading-relaxed stagger-item animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Delivering conversion-focused web experiences, high-impact ads, and polished video & motion assets for brands.
            </p>

            {/* Enhanced Micro Stats */}
            <div className="flex flex-wrap gap-4 stagger-item animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              {['Web Dev', 'Meta Ads', 'Video Editing', 'Motion Graphics'].map((skill, index) => (
                <span 
                  key={skill} 
                  className="skill-tag animate-scale-in hover:animate-pulse-glow transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 will-change-transform" style={{ minHeight: '96px', opacity: 0, animation: 'fade-in-up 0.5s ease-out 1.5s forwards' }}>
              <Button 
                className="btn-hero btn-ripple"
                onClick={() => scrollToSection('portfolio')}
              >
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5 animate-breathe" />
              </Button>
              
              <Button 
                variant="outline"
                className="btn-hero-outline btn-ripple"
                onClick={() => scrollToSection('contact')}
              >
                <Star className="mr-2 h-5 w-5 animate-pulse" />
                Request a Quote
              </Button>
            </div>
          </div>

          {/* Right Content - Enhanced Professional Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-strong animate-breathe">
                <picture>
                  <source 
                    srcSet={headshotImage} 
                    type="image/webp"
                  />
                  <img 
                    src={headshotImagePng}
                    alt="Sheikh Momin - Professional Headshot"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width="384"
                    height="384"
                  />
                </picture>
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-4 -right-4 glass-card p-4 animate-float hover:animate-pulse-glow transition-all duration-300 group cursor-pointer">
                <Play className="h-6 w-6 text-mint group-hover:scale-125 transition-transform" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass-card p-4 animate-float hover:animate-pulse-glow transition-all duration-300 group cursor-pointer" style={{ animationDelay: '1s' }}>
                <Download className="h-6 w-6 text-mint group-hover:scale-125 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group" onClick={() => scrollToSection('about')}>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/60 transition-colors">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse group-hover:bg-white/80"></div>
        </div>
        <p className="text-white/60 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Scroll down</p>
      </div>
    </section>
  );
};

export default Hero;