import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (
  animationClass: string = 'animate-reveal',
  options: ScrollAnimationOptions = {}
) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            
            // Add staggered animations to child elements
            const staggerElements = entry.target.querySelectorAll('.stagger-child');
            staggerElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in-up');
              }, index * 100);
            });

            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove('revealed');
          }
        });
      },
      { threshold, rootMargin }
    );

    // Add the animation class to the element
    element.classList.add(animationClass);
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [animationClass, options]);

  return elementRef;
};

export const useStaggeredAnimation = (
  selector: string = '.stagger-item',
  delay: number = 100
) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(selector);
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-fade-in-up', 'revealed');
              }, index * delay);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [selector, delay]);

  return containerRef;
};

export const useParallaxEffect = () => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = element.getBoundingClientRect().top;
      const speed = scrolled * 0.5;
      
      element.style.transform = `translateY(${speed}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return elementRef;
};

export const useCursorAnimation = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-glow');
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, rgba(45, 212, 191, 0.8) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;
    document.body.appendChild(cursor);

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX - 10}px`;
      cursor.style.top = `${e.clientY - 10}px`;
      cursor.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeChild(cursor);
    };
  }, []);
};