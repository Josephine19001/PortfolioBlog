import React from 'react';
import { FaTwitter, FaMedium, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMediaLinks = () => {
  return (
    <div className="flex gap-4">
      <a
        href="www.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-secondary"
      >
        <FaGithub size={25} />
      </a>
      <a
        href="www.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-secondary"
      >
        <FaLinkedin size={25} />
      </a>
      <a
        href="www.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-secondary"
      >
        <FaMedium size={25} />
      </a>
      <a
        href="www.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-secondary"
      >
        <FaTwitter size={25} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
