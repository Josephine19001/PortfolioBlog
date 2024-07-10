import { useEffect, useState } from 'react';

const useScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    const scroll = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.onscroll = () => scroll();
  }, []);

  return { showScroll, scrollToTop };
};

export { useScrollToTop };
