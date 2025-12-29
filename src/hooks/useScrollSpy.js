import { useState, useEffect } from 'react';

export const useScrollSpy = (selectors, options) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const elements = selectors.map(selector => document.querySelector(selector));
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.getAttribute('id'));
        }
      });
    }, options || { threshold: 0.5 });

    elements.forEach((el) => el && observer.observe(el));

    return () => elements.forEach((el) => el && observer.unobserve(el));
  }, [selectors, options]);

  return activeId;
};
