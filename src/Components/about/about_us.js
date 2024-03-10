'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";

// icons
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";

const About_US = () => {
  return (
    <div className="ab_about_us ab_grid_item">
      <h1 className="ab_heading">About Us</h1>
      <div className="ab_ab_inner_grid">
        <div className="ab_ab_socials">
          <Link href={"https://github.com/versanex-inc"}>
            <FaGithub />
          </Link>
          <Link href={"https://www.linkedin.com/"}>
            <FaLinkedinIn />
          </Link>
          <Link href={"https://www.facebook.com/profile.php?id=61556108196210"}>
            <FaFacebookF />
          </Link>
        </div>
        <div className="ab_ab_img">
          <Image
            src={"/imgs/bgimg1.png"}
            alt="logo"
            width={1000}
            height={1000}
          />
        </div>
        <div className="ab_ab_blob_img">
          <svg
            className="ab_ab_blob"
            viewBox="0 0 200 187"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <mask id="mask0" mask-type="alpha">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
-0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
              <g transform="translate(45, 0)">
                {" "}
                {/* Adjust the values for centering */}
                <image
                  className="ab_ab_blob_img"
                  xlinkHref="/imgs/bgimg1.png"
                  width="100%"
                  height="100%"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="ab_ab_para">
          <span>Embarking from VersaNex,</span>
          <p>
            revolutionizing digital landscapes through our unrivaled graphic
            design and web development expertise.
          </p>
        </div>
        <div className="ab_ab_exp">
          <div className="ab_ab_exp_div">
            <span className="ab_ab_exp_num">08+</span>
            <span className="ab_ab_exp_name">Experienced</span>
            <span className="ab_ab_exp_name ab_ab_exp_name_name">Years</span>
          </div>
          <div className="ab_ab_exp_div">
            <span className="ab_ab_exp_num">50+</span>
            <span className="ab_ab_exp_name">Completed</span>
            <span className="ab_ab_exp_name ab_ab_exp_name_name">Projects</span>
          </div>
          <div className="ab_ab_exp_div">
            <span className="ab_ab_exp_num">05+</span>
            <span className="ab_ab_exp_name">Companies</span>
            <span className="ab_ab_exp_name ab_ab_exp_name_name">Worked</span>
          </div>
        </div>
        <div className="ab_ab_btn">
          <Link href={"/contact"}>
          <button>Contact us</button>
          </Link>
        </div>
      </div>
      <div className="ab_ending_line"></div>
    </div>
  );
};

export default About_US;
