import React from 'react';
import heroImage from '../../assets/hero-image.png';
import SocialMediaLinks from '../shared/SocialMediaLinks';
import { useTypingEffect } from '../../hooks/useTypingEffect';

const HeroSection = () => {
  const texts = ['Kayla', 'Doe'];
  const currentLetter = useTypingEffect(texts);
  return (
    <div className="flex justify-between items-center gap-10 md:gap-40 flex-wrap md:flex-nowrap mt-14 md:mt-40">
      {/* Content */}
      <div className="flex flex-col gap-6 min-w-3/5">
        <h1>Hi, I'm</h1>
        <h1 className="text-primary block">{currentLetter}</h1>
        <p>
          I am a passionate software engineer with a keen interest in web
          development. I love to build things for the web and I'm always looking
          for new challenges to solve.
        </p>

        <div className="flex items-center gap-10">
          <button className="btn-secondary">Latest blog</button>
          <button className="btn-primary">Join email list</button>
        </div>

        <div className="flex gap-4 items-center">
          <p className="text-white uppercase">Connect on social</p>
          <div className="h-[0.5px] w-20 bg-white"></div>
          <SocialMediaLinks />
        </div>
      </div>
      {/* Image */}
      <img
        src={heroImage}
        alt="Hero image"
        className="w-full md:w-2/5 md:rounded-full rounded-md"
      />
    </div>
  );
};

export default HeroSection;
