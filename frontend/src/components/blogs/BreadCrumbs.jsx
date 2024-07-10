import React from 'react';
import { FaHome, FaChevronRight } from 'react-icons/fa';

const BreadCrumbs = ({ blogLink }) => {
  return (
    <nav className="flex mt-16" arial-label="Bread crumbs">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer text-secondary hover:text-primary"
          >
            <FaHome />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer text-secondary hover:text-primary"
          >
            <FaChevronRight />
            <span>Blogs</span>
          </a>
        </li>
        <li className="inline-flex items-center gap-2 text-sm font-medium text-primary">
          <FaChevronRight />
          <span>{blogLink}</span>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
