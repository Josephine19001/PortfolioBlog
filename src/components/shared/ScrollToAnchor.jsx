import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
  const location = useLocation();
  const lastHash = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const hash = location.hash.slice(1);
    console.log(hash);
    if (hash && hash !== lastHash.current) {
      const element = document.getElementById(hash);

      if (element) {
        timeoutRef.current = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);
};

export default ScrollToAnchor;
