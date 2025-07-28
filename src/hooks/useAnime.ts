import { useEffect, useRef } from 'react';
import * as anime from 'animejs';

export const useAnime = (config: any, deps: any[] = []) => {
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.pause();
    }
    
    animationRef.current = (anime as any).default(config);
    
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
            (anime as any).default({
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
            (anime as any).default({
              targets: entry.target,
              delay: (anime as any).default.stagger(delay),
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