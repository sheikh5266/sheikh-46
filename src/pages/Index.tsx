import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useCursorAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimations";

const Index = () => {
  const [showRefreshAnimation, setShowRefreshAnimation] = useState(false);
  const staggerRef = useStaggeredAnimation('.section-item', 200);

  // Enable cursor animation
  useCursorAnimation();

  useEffect(() => {
    // Enhanced scroll reveal animation with more varieties
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.add('revealed');
          
          // Add different animation types based on element
          if (element.id === 'about') {
            element.classList.add('animate-slide-in-up');
          } else if (element.id === 'services') {
            element.classList.add('animate-flip-in-x');
          } else if (element.id === 'portfolio') {
            element.classList.add('animate-zoom-in');
          } else if (element.id === 'contact') {
            element.classList.add('animate-fade-in-up');
          }
          
          // Add staggered animations to child elements
          const staggerElements = entry.target.querySelectorAll('.stagger-item, .stagger-child');
          staggerElements.forEach((el, index) => {
            const animationType = [
              'animate-fade-in-up',
              'animate-slide-in-up', 
              'animate-scale-in',
              'animate-flip-in-y'
            ][index % 4];
            
            setTimeout(() => {
              el.classList.add(animationType, 'revealed');
            }, index * 150);
          });

          // Add magnetic effect to interactive elements
          const interactiveElements = entry.target.querySelectorAll('.btn-hero, .portfolio-card, .skill-tag');
          interactiveElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate-magnetic', 'animate-hover-lift');
            }, index * 50);
          });
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .section-item');
    revealElements.forEach((el) => observer.observe(el));

    // Advanced pull-to-refresh with enhanced animation
    let startY = 0;
    let currentY = 0;
    let pullDistance = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      currentY = e.touches[0].clientY;
      pullDistance = currentY - startY;

      if (pullDistance > 120 && window.scrollY === 0) {
        setShowRefreshAnimation(true);
        // Add haptic feedback if available
        if ('vibrate' in navigator) {
          navigator.vibrate(50);
        }
      }
    };

    const handleTouchEnd = () => {
      if (pullDistance > 120 && window.scrollY === 0) {
        setTimeout(() => {
          setShowRefreshAnimation(false);
          // Enhanced page reload with fade effect
          document.body.style.opacity = '0';
          document.body.style.transition = 'opacity 0.5s ease';
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }, 2500);
      }
      startY = 0;
      currentY = 0;
      pullDistance = 0;
    };

    // Add touch event listeners for mobile refresh
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Page entrance animation
    document.body.classList.add('animate-fade-in-up');

    return () => {
      observer.disconnect();
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <main className="min-h-screen relative bg-animated" ref={staggerRef}>
      {/* Enhanced Pull-to-refresh animation */}
      {showRefreshAnimation && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 animate-bounce-in">
          <div className="bg-white rounded-full p-6 shadow-xl animate-levitate">
            <svg width="80" height="100" viewBox="0 0 80 100" className="animate-swing">
              <defs>
                <linearGradient id="handGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--mint))" />
                  <stop offset="100%" stopColor="hsl(var(--mint-light))" />
                </linearGradient>
              </defs>
              <path d="M30 80 L30 45 Q30 40 35 40 L45 40 Q50 40 50 45 L50 80 Q50 85 45 85 L35 85 Q30 85 30 80" 
                    fill="url(#handGradient)" className="animate-pulse-glow" />
              <rect x="35" y="80" width="10" height="15" fill="hsl(var(--mint-light))" className="animate-breathe" />
              <line x1="40" y1="40" x2="40" y2="15" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-pulse" />
              <circle cx="40" cy="15" r="10" fill="hsl(var(--primary))" className="animate-heartbeat" />
              
              {/* Enhanced sparkles */}
              <circle cx="20" cy="35" r="3" fill="hsl(var(--mint))" className="animate-pulse-glow" />
              <circle cx="60" cy="30" r="2" fill="hsl(var(--primary))" className="animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
              <circle cx="15" cy="55" r="2" fill="hsl(var(--mint-light))" className="animate-pulse-glow" style={{ animationDelay: '1s' }} />
              <circle cx="65" cy="50" r="3" fill="hsl(var(--mint))" className="animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
            </svg>
          </div>
        </div>
      )}
      
      <Navigation />
      
      <section id="hero" className="section-item animate-fade-in-up">
        <Hero />
      </section>
      
      <section id="about" className="section-item reveal animate-reveal">
        <About />
      </section>
      
      <section id="services" className="section-item reveal animate-reveal">
        <Services isHomepage={true} />
      </section>
      
      <section id="portfolio" className="section-item reveal animate-reveal">
        <Portfolio isHomepage={true} />
      </section>
      
      <section id="contact" className="section-item reveal animate-reveal">
        <Contact />
      </section>
      
      <Footer />
    </main>
  );
};

export default Index;