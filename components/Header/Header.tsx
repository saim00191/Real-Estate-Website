'use client';

import React, { useState } from 'react';
import { PiBuildingApartmentFill } from 'react-icons/pi';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import { Urbanist } from 'next/font/google';
import Link from 'next/link';

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Properties', href: '/properties' },
    { name: 'Services', href: '/services' },
  ];

  return (
    <header className="flex items-center justify-between h-[99px] bg-[#1a1a1a] w-full relative z-50">
      <div className="max-w-[1440px] w-full mx-auto px-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <PiBuildingApartmentFill size={46} className="text-[#703BF7]" />
            <h1 className={`${urbanist.className} text-[14px] text-white font-bold`}>
              Real Estate
            </h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden smx:flex items-center gap-2 sm:gap-3 md:gap-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${urbanist.className} text-white text-[18px] font-medium`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <button className="bg-[#141414] cursor-pointer w-[136px] h-[59px] text-white rounded-[10px] text-center xsm:block hidden">
            <p className={urbanist.className}>Contact Us</p>
          </button>

          {/* Mobile Toggle Icon */}
          <div className="flex smx:hidden">
            {menuOpen ? (
              <RxCross2
                className="text-white text-[36px] cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <RxHamburgerMenu
                className="text-white text-[36px] cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[99px] h-fit left-0 w-full bg-[#1a1a1a] flex flex-col items-center py-6 smx:hidden gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${urbanist.className} text-white text-[18px] font-medium`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button
            className="bg-[#141414] w-[136px] h-[59px] text-white rounded-[10px] text-center xsm:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <p className={urbanist.className}>Contact Us</p>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
