import React from 'react';
import SocialMediaLinks from './SocialMediaLinks';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-4 mb-4 mt-auto">
      <SocialMediaLinks />
      <p>2024 Portfolio. ©All right reserved.</p>
    </footer>
  );
};

export default Footer;
