"use client";
import React from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState,useEffect } from 'react';

const NavSmall = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navigator_small_device ${hasScrolled ? 'scrolled' : ''}`}>
        <div className="sm_nav_button" onClick={toggleNav}>
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`sm_nav ${isNavOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavSmall;
