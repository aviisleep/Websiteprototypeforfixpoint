import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function SmoothScroll() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  return null;
}
