import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CgGirl } from 'react-icons/cg';
import { GiJourney } from 'react-icons/gi';
import { LiaBlogSolid } from 'react-icons/lia';
import { CiMenuFries } from 'react-icons/ci';
import { IoCloseOutline } from 'react-icons/io5';

import logo from '../../assets/logo-main.png';

const NavItems = ({ className }) => {
  return (
    <ul className={className}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'active-link-underline' : 'hover-underline'
          }
        >
          <CgGirl className="text-yellow inline mr-2" />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive ? 'active-link-underline' : 'hover-underline'
          }
        >
          <GiJourney className="text-secondary inline mr-2" />
          Resume
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? 'active-link-underline' : 'hover-underline'
          }
        >
          <LiaBlogSolid className="text-purple inline mr-2" />
          Blogs
        </NavLink>
      </li>
    </ul>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between">
      <Link to="/" className="w-24">
        <img src={logo} alto="Logo image" />
      </Link>

      <NavItems className="hidden md:flex items-center space-x-8" />

      <Link to="/#contact">
        <button className="hidden md:block btn-secondary">Let's talk</button>
      </Link>

      {/* Mobile Navigation */}
      <div className="block md:hidden z-10" onClick={toggleMenuOpen}>
        {isOpen ? <IoCloseOutline size={30} /> : <CiMenuFries size={30} />}
      </div>

      <div
        className={
          isOpen
            ? 'fixed h-full left-0 top-0 w-full bg-black  px-2 py-5 duration-500 flex flex-col gap-10 justify-center items-center'
            : 'fixed left-[-100%]'
        }
      >
        <NavItems className="flex flex-col items-center justify-between gap-12 text-4xl p-2" />
        <Link to="/#contact">
          <button className="block mt-3 btn-secondary">Let's talk</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
