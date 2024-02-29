"use client";
import React, { useState, useEffect } from "react";
import { FaFolderOpen } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

import { BsCameraFill, BsFillBoxFill, BsHeartFill } from "react-icons/bs";
import { FaPaintBrush } from "react-icons/fa";
import { RiVideoLine } from "react-icons/ri";

const Side_nav = () => {
  const [dropdownOneVisible, setDropdownOneVisible] = useState(false); // Initially false

  // Function to toggle dropdown visibility
  const toggleDropdownOne = () => {
    setDropdownOneVisible(!dropdownOneVisible);
  };
  const [dropdownTwoVisible, setDropdownTwoVisible] = useState(false); // Initially false

  // Function to toggle dropdown visibility
  const toggleDropdownTwo = () => {
    setDropdownTwoVisible(!dropdownTwoVisible);
  };

  // Effect to update dropdown visibility based on viewport width
  useEffect(() => {
    const handleResize = () => {
      // Check viewport width
      if (window.innerWidth <= 1024) {
        setDropdownOneVisible(false); // Set to false if width is less than or equal to 778px
        setDropdownTwoVisible(false);
      } else {
        setDropdownOneVisible(true); // Set to true if width is greater than 778px
        setDropdownTwoVisible(true);
      }
    };

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="side-wrappers">
      <div className="side-wrapper">
        <div className="side-category-link" onClick={toggleDropdownOne}>
          <span className="skill_icon_folder">
            <FaFolderOpen />
          </span>
          <Link className="side-title" href={"/projects/gfxdesigning"}>
            Graphics Designing
          </Link>
          <span
            className="side-icon"
            style={{
              transform: dropdownOneVisible ? "rotate(180deg)" : "rotate(0)",
            }}
          >
            <IoIosArrowDown />
          </span>
        </div>
        <div className={`side-menu ${dropdownOneVisible ? "show" : ""}`}>
          <Link href={"/projects/gfxdesigning/gfxdesign"}>
            <span className="icon">
              <FaPaintBrush />
            </span>
            Graphics Design
          </Link>
          <Link href={"/projects/gfxdesigning/illustrations"}>
            <span className="icon">
              <FaPaintBrush />
            </span>
            Illustrations
          </Link>
          <Link href={"/projects/gfxdesigning/3d"}>
            <span className="icon">
              <BsFillBoxFill />
            </span>
            3D/AR
          </Link>
          <Link href={"/projects/gfxdesigning/video"}>
            <span className="icon">
              <RiVideoLine />
            </span>
            Video
          </Link>
        </div>
      </div>
      <div className="side-wrapper side-wrapper-two">
        <div className="side-category-link" onClick={toggleDropdownTwo}>
          <span className="skill_icon_folder">
            <FaFolderOpen />
          </span>
          <Link className="side-title" href={"/projects/programming"}>
            Programming
          </Link>
          <span
            className="side-icon"
            style={{
              transform: dropdownTwoVisible ? "rotate(180deg)" : "rotate(0)",
            }}
          >
            <IoIosArrowDown />
          </span>
        </div>
        <div className={`side-menu ${dropdownTwoVisible ? "show" : ""}`}>
          <Link href={"/projects/programming/eshop"}>
            <span className="icon">
              <BsCameraFill />
            </span>
            E Shop
          </Link>
          <Link href={"/projects/programming/portfolio"}>
            <span className="icon">
              <FaPaintBrush />
            </span>
            Portfolio
          </Link>
          <Link href={"/projects/programming/buisness"}>
            <span className="icon">
              <BsFillBoxFill />
            </span>
            Buisness
          </Link>
          <Link href={"/projects/programming/video"}>
            <span className="icon">
              <RiVideoLine />
            </span>
            Video
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Side_nav;
