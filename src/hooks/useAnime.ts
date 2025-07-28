import { useEffect, useRef } from 'react';
const anime = require('animejs');

export const useAnime = (config: any, deps: any[] = []) => {
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.pause();
    }
    
    animationRef.current = anime(config);
    
    return () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, deps);

  return animationRef;
};

export const useScrollAnimation = (
  selector: string,
  config: any,
  threshold = 0.1
) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: entry.target,
              ...config,
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, config, threshold]);
};

export const useStaggerAnimation = (
  selector: string,
  config: any,
  delay = 100
) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: entry.target,
              delay: anime.stagger(delay),
              ...config,
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, config, delay]);
};