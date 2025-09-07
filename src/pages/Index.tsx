import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [showRefreshAnimation, setShowRefreshAnimation] = useState(false);

  useEffect(() => {
    // Enhanced scroll reveal animation with staggered delays
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          
          // Add staggered animations to child elements
          const staggerElements = entry.target.querySelectorAll('.stagger-item');
          staggerElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate-fade-in-up');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Pull-to-refresh detection
    let startY = 0;
    let currentY = 0;
    let pullDistance = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      currentY = e.touches[0].clientY;
      pullDistance = currentY - startY;

      if (pullDistance > 100 && window.scrollY === 0) {
        setShowRefreshAnimation(true);
      }
    };

    const handleTouchEnd = () => {
      if (pullDistance > 100 && window.scrollY === 0) {
        setTimeout(() => {
          setShowRefreshAnimation(false);
          window.location.reload();
        }, 2000);
      }
      startY = 0;
      currentY = 0;
      pullDistance = 0;
    };

    // Add touch event listeners for mobile refresh
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      observer.disconnect();
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <main className="min-h-screen relative bg-animated">
      {/* Pull-to-refresh animation */}
      {showRefreshAnimation && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-down">
          <div className="bg-white rounded-full p-4 shadow-lg animate-bounce-in">
            <svg width="60" height="80" viewBox="0 0 60 80" className="animate-swing">
              <path d="M20 60 L20 35 Q20 30 25 30 L35 30 Q40 30 40 35 L40 60 Q40 65 35 65 L25 65 Q20 65 20 60" fill="hsl(var(--mint))" />
              <rect x="25" y="60" width="10" height="15" fill="hsl(var(--mint-light))" />
              <line x1="30" y1="30" x2="30" y2="10" stroke="hsl(var(--primary))" strokeWidth="2" />
              <circle cx="30" cy="10" r="8" fill="hsl(var(--primary))" />
            </svg>
          </div>
        </div>
      )}
      
      <Navigation />
      
      <section id="hero" className="animate-fade-in-up">
        <Hero />
      </section>
      
      <section id="about" className="reveal">
        <About />
      </section>
      
      <section id="services" className="reveal">
        <Services />
      </section>
      
      <section id="portfolio" className="reveal">
        <Portfolio />
      </section>
      
      <section id="contact" className="reveal">
        <Contact />
      </section>
      
      <Footer />
    </main>
  );
};

export default Index;