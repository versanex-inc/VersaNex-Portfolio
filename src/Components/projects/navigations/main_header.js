'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import Side_nav from "./side_navigation";

const Projects_header = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggleButton = () => {
    document.body.classList.toggle("light-mode");
    setIsLightMode(!isLightMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`projects_header ${isLightMode ? "light-mode" : ""} ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="work_logo">
        <Link href={"/"}>
          <Image
            src={"/imgs/bgimg1.png"}
            alt="logo"
            width={1000}
            height={1000}
          />
        </Link>
      </div>
      <div className="header-menu">
        <Link className="menu-link" href={"/"}>
          HOME
        </Link>
        <Link className="menu-link" href={"/about"}>
          ABOUT
        </Link>
        <Link className="menu-link" href={"/contact"}>
          CONTACT
        </Link>
        <Link className="menu-link optional-link" href={"/projects/gfxdesigning"}>
          GFX DESIGNING
        </Link>
        <Link className="menu-link optional-link" href={"/projects/programming"}>
          PROGRAMMING
        </Link>
      </div>
      <div className="dark-light" onClick={handleToggleButton}>
        <span
          className="moon"
          style={{ display: isLightMode ? "none" : "block" }}
        >
          <FaMoon />
        </span>
        <span
          className="sun"
          style={{ display: isLightMode ? "block" : "none" }}
        >
          <MdSunny />
        </span>
      </div>
      <div className="categories_small">
        <Side_nav />
      </div>
    </div>
  );
};

export default Projects_header;
