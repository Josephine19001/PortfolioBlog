import { useEffect, useState } from 'react';

export const useTypingEffect = (texts, speed = 400) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCount, setCurrentCount] = useState(0);
  const [currentLetter, setCurrentLetter] = useState('');

  useEffect(() => {
    const typeLetter = () => {
      const currentText = texts[currentIndex];
      if (currentText.length > currentCount) {
        const letter = currentText.slice(0, currentCount + 1);
        setCurrentLetter(letter);
        setCurrentCount((prevCount) => prevCount + 1);
      } else {
        setTimeout(() => {
          setCurrentCount(0);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, speed);
      }
    };

    const timer = setTimeout(typeLetter, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, currentCount]);

  return currentLetter;
};
