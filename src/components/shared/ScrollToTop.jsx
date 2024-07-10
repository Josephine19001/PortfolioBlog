import React from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const ScrollToTop = () => {
  const { showScroll, scrollToTop } = useScrollToTop();

  return (
    <div
      className={`fixed bottom-10 right-10 z-9 ${
        showScroll ? 'block' : 'hidden'
      }`}
    >
      <FaArrowCircleUp
        className="text-secondary cursor-pointer hover:text-white"
        size={50}
        onClick={scrollToTop}
      />
    </div>
  );
};

export default ScrollToTop;
