"use client"; // components/Header.js

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-transparent">
      <div className="mx-auto">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-white text-4xl font-bold pt-4 pl-8 hover:text-orange-300 duration-75 drop-shadow-2xl leading-relaxed"
          >
            PortFolio
          </Link>
          <div className="flex items-center">
            <button
              className="md:hidden text-white text-2xl pr-4 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 3a1 1 0 0 1 1-1h18a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1zm0 8a1 1 0 0 1 1-1h18a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1zm0 8a1 1 0 0 1 1-1h18a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
            <ul
              className={`md:flex ${
                isOpen ? "block top-20 w-1/2 h-full" : "hidden"
              } fixed right-0 pl-8 bg-black bg-opacity-70 md:bg-transparent md:relative md:flex-row md:space-x-4 md:pt-0 pt-4`}
            >
              <li>
                <Link
                  onClick={closeMenu}
                  className="block text-white text-2xl pr-8 font-semibold hover:text-orange-300 duration-75 drop-shadow-2xl leading-relaxed"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  className="block text-white text-2xl pr-8 font-semibold hover:text-orange-300 duration-75 drop-shadow-2xl leading-relaxed"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  className="block text-white text-2xl pr-8 font-semibold hover:text-orange-300 duration-75 drop-shadow-2xl leading-relaxed "
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
