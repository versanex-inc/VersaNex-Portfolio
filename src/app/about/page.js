"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

// icons
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaDatabase,
  FaPaintBrush,
  FaRegCheckCircle,
} from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineWeb, MdArrowRightAlt, MdCancel } from "react-icons/md";
import LargeRight from "@/Components/navigaton/large_right";
import LargeLeft from "@/Components/navigaton/large_left";
import NavSmall from "@/Components/navigaton/nav_small";
import { CustomCursor } from "@/Components/customCursor";

const About = () => {
  const [dropdownOneVisible, setDropdownOneVisible] = useState(false);
  const [dropdownTwoVisible, setDropdownTwoVisible] = useState(false);
  const [dropdownThreeVisible, setDropdownThreeVisible] = useState(false);

  const toggleDropdownOne = () => {
    setDropdownOneVisible(!dropdownOneVisible);
    setDropdownTwoVisible(false); // Close the other dropdowns
    setDropdownThreeVisible(false);
  };

  const toggleDropdownTwo = () => {
    setDropdownTwoVisible(!dropdownTwoVisible);
    setDropdownOneVisible(false); // Close the other dropdowns
    setDropdownThreeVisible(false);
  };

  const toggleDropdownThree = () => {
    setDropdownThreeVisible(!dropdownThreeVisible);
    setDropdownOneVisible(false); // Close the other dropdowns
    setDropdownTwoVisible(false);
  };

  useEffect(() => {
    const modalViews = document.querySelectorAll(".services_modal"),
      modalBtns = document.querySelectorAll(".services_button"),
      modalClose = document.querySelectorAll(".services_modal_close");

    let modal = function (modalClick) {
      modalViews[modalClick].classList.add("active-modal");
    };

    modalBtns.forEach((modalBtn, i) => {
      modalBtn.addEventListener("click", () => {
        modal(i);
      });
    });

    modalClose.forEach((modalClose) => {
      modalClose.addEventListener("click", () => {
        modalViews.forEach((modalViews) => {
          modalViews.classList.remove("active-modal");
        });
      });
    });
  }, []);
  return (
    <div className="about">
      <LargeLeft />
      <LargeRight />
      <NavSmall />
      <CustomCursor/>
      <div className="about_grid">
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
              <Link
                href={"https://www.facebook.com/profile.php?id=61556108196210"}
              >
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
                <span className="ab_ab_exp_name ab_ab_exp_name_name">
                  Years
                </span>
              </div>
              <div className="ab_ab_exp_div">
                <span className="ab_ab_exp_num">50+</span>
                <span className="ab_ab_exp_name">Completed</span>
                <span className="ab_ab_exp_name ab_ab_exp_name_name">
                  Projects
                </span>
              </div>
              <div className="ab_ab_exp_div">
                <span className="ab_ab_exp_num">05+</span>
                <span className="ab_ab_exp_name">Companies</span>
                <span className="ab_ab_exp_name ab_ab_exp_name_name">
                  Worked
                </span>
              </div>
            </div>
            <div className="ab_ab_btn">
              <button>Contact us</button>
            </div>
          </div>
          <div className="ab_ending_line"></div>
        </div>
        <div className="ab_skills ab_grid_item">
          <h1 className="ab_heading">Skills</h1>
          <div className="ab_skills_grid">
            {/* skill one  */}
            <div className="ab_skill_one ab_skill">
              <div className="ab_skills_header" onClick={toggleDropdownOne}>
                <span className="ab_skills_icon">
                  <PiBracketsCurlyBold />
                </span>
                <div className="ab_skills_header_info">
                  <h2 className="ab_skills_title">Frontend Developer</h2>
                  <span className="ab_skills_subtitle">More then 4 years</span>
                </div>
                <span
                  className="ab_skills_arrow "
                  style={{
                    transform: dropdownOneVisible
                      ? "rotate(180deg)"
                      : "rotate(0)",
                  }}
                >
                  <IoIosArrowDown />
                </span>
              </div>
              <div
                className={`ab_skill_list ${dropdownOneVisible ? "show" : ""}`}
              >
                <div className="ab_skill_data">
                  <div className="ab_skill_title">
                    <h3 className="ab_skill_name">HTML</h3>
                    <span className="ab_skill_percenteage_number">90%</span>
                  </div>
                  <div className="ab_skill_percentage_bar">
                    <span className="ab_skill_percentage ab_skill_html"></span>
                  </div>
                </div>
                <div className="ab_skill_data">
                  <div className="ab_skill_title">
                    <h3 className="ab_skill_name">CSS</h3>
                    <span className="ab_skill_percenteage_number">90%</span>
                  </div>
                  <div className="ab_skill_percentage_bar">
                    <span className="ab_skill_percentage ab_skill_css"></span>
                  </div>
                </div>
                <div className="ab_skill_data">
                  <div className="ab_skill_title">
                    <h3 className="ab_skill_name">JAVASCRIPT</h3>
                    <span className="ab_skill_percenteage_number">80%</span>
                  </div>
                  <div className="ab_skill_percentage_bar">
                    <span className="ab_skill_percentage ab_skill_js"></span>
                  </div>
                </div>
                <div className="ab_skill_data">
                  <div className="ab_skill_title">
                    <h3 className="ab_skill_name">NEXT JS</h3>
                    <span className="ab_skill_percenteage_number">70%</span>
                  </div>
                  <div className="ab_skill_percentage_bar">
                    <span className="ab_skill_percentage ab_skill_nextjs"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* skill two  */}
            <div className="ab_skill_two ab_skill">
              <div className="ab_skills_header" onClick={toggleDropdownTwo}>
                <span className="ab_skills_icon">
                  <FaDatabase />
                </span>
                <div className="ab_skills_header_info">
                  <h2 className="ab_skills_title">Backend Developer</h2>
                  <span className="ab_skills_subtitle">More then 4 years</span>
                </div>
                <span
                  className="ab_skills_arrow "
                  style={{
                    transform: dropdownTwoVisible
                      ? "rotate(180deg)"
                      : "rotate(0)",
                  }}
                >
                  <IoIosArrowDown />
                </span>
              </div>
              <div
                className={`ab_skill_list ${dropdownTwoVisible ? "show" : ""}`}
              >
                <div className="ab_skill_data">
                  <div className="ab_skill_title">
                    <h3 className="ab_skill_name">Nodejs</h3>
                    <span className="ab_skill_percenteage_number">60%</span>
                  </div>
                  <div className="ab_skill_percentage_bar">
                    <span className="ab_skill_percentage ab_skill_nodejs"></span>
                  </div>
                </div>
                <div className="ab_skill_data">
                  <div className="ab_skill_title">
                    <h3 className="ab_skill_name">MONGODB</h3>
                    <span className="ab_skill_percenteage_number">70%</span>
                  </div>
                  <div className="ab_skill_percentage_bar">
                    <span className="ab_skill_percentage ab_skill_mongodb"></span>
                  </div>
                </div>
                <div className="ab_skill_data">
                  <div className="ab_skill_title">
                    <h3 className="ab_skill_name">MY SQL</h3>
                    <span className="ab_skill_percenteage_number">50%</span>
                  </div>
                  <div className="ab_skill_percentage_bar">
                    <span className="ab_skill_percentage ab_skill_mysql"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* skill three  */}
            <div className="ab_skill_three ab_skill">
              <div className="ab_skills_header" onClick={toggleDropdownThree}>
                <span className="ab_skills_icon">
                  <FaPaintBrush />
                </span>
                <div className="ab_skills_header_info">
                  <h2 className="ab_skills_title">Graphics Designing</h2>
                  <span className="ab_skills_subtitle">More then 4 years</span>
                </div>
                <span
                  className="ab_skills_arrow"
                  style={{
                    transform: dropdownThreeVisible
                      ? "rotate(180deg)"
                      : "rotate(0)",
                  }}
                >
                  <IoIosArrowDown />
                </span>
              </div>
              <div
                className={`ab_skill_list ${
                  dropdownThreeVisible ? "show" : ""
                }`}
              >
                <div className="ab_skill_data">
                  <div className="ab_skill_title">
                    <h3 className="ab_skill_name">Photoshop</h3>
                    <span className="ab_skill_percenteage_number">99%</span>
                  </div>
                  <div className="ab_skill_percentage_bar">
                    <span className="ab_skill_percentage ab_skill_photoshop"></span>
                  </div>
                </div>
                <div className="ab_skill_data">
                  <div className="ab_skill_title">
                    <h3 className="ab_skill_name">Illustrator</h3>
                    <span className="ab_skill_percenteage_number">98%</span>
                  </div>
                  <div className="ab_skill_percentage_bar">
                    <span className="ab_skill_percentage ab_skill_illustrator"></span>
                  </div>
                </div>
                <div className="ab_skill_data">
                  <div className="ab_skill_title">
                    <h3 className="ab_skill_name">PRIMIER PRO</h3>
                    <span className="ab_skill_percenteage_number">90%</span>
                  </div>
                  <div className="ab_skill_percentage_bar">
                    <span className="ab_skill_percentage ab_skill_pp"></span>
                  </div>
                </div>
                <div className="ab_skill_data">
                  <div className="ab_skill_title">
                    <h3 className="ab_skill_name">iN DESIGN</h3>
                    <span className="ab_skill_percenteage_number">70%</span>
                  </div>
                  <div className="ab_skill_percentage_bar">
                    <span className="ab_skill_percentage ab_skill_id"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ab_ending_line"></div>
        </div>
        <div className="ab_services ab_grid_item">
          <h1 className="ab_heading">Services</h1>
          <div className="services_grid">
            <div className="services_content">
              <div>
                <i className="services_icon">
                  <MdOutlineWeb />
                </i>
                <h3 className="services_title">
                  Ui/Ux <br /> Designer
                </h3>
              </div>

              <span className="services_button">
                View More
                <i className="button_icon">
                  <MdArrowRightAlt />
                </i>
              </span>

              <div className="services_modal">
                <div className="services_modal_content">
                  <h4 className="services_modal_title">
                    {" "}
                    Ui/Ux <br /> Designer
                  </h4>
                  <i className="services_modal_close">
                    <MdCancel />
                  </i>
                  <ul className="services_modal_services">
                    <li className="services_modal_service">
                      <i className="services_modal_icon">
                        <FaRegCheckCircle />
                      </i>
                      <p>Transforming ideas into captivating web interfaces.</p>
                    </li>
                    <li className="services_modal_service">
                      <i className="services_modal_icon">
                        <FaRegCheckCircle />
                      </i>
                      <p>Transforming ideas into captivating web interfaces.</p>
                    </li>
                    <li className="services_modal_service">
                      <i className="services_modal_icon">
                        <FaRegCheckCircle />
                      </i>
                      <p>
                        Shaping digital experiences that captivate and convert.
                      </p>
                    </li>
                    <li className="services_modal_service">
                      <i className="services_modal_icon">
                        <FaRegCheckCircle />
                      </i>
                      <p>Crafting intuitive interfaces that drive results.</p>
                    </li>
                    <li className="services_modal_service">
                      <i className="services_modal_icon">
                        <FaRegCheckCircle />
                      </i>
                      <p>
                        Bringing your brand to life through compelling UI/UX.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="services_content">
              <div>
                <i className="services_icon">
                  <BiCodeCurly />
                </i>
                <h3 className="services_title">
                  Frontend <br /> Developer
                </h3>
              </div>

              <span className="services_button">
                View More
                <i className="button_icon">
                  <MdArrowRightAlt />
                </i>
              </span>

              <div className="services_modal">
                <div className="services_modal_content">
                  <h4 className="services_modal_title">
                    {" "}
                    Frontend <br /> Developer
                  </h4>
                  <i className="services_modal_close">
                    <MdCancel />
                  </i>

                  <ul className="services_modal_services">
                    <li className="services_modal_service">
                      <i className="services_modal_icon">
                        <FaRegCheckCircle />
                      </i>
                      <p>
                        Transforming designs into dynamic and responsive web
                        applications.
                      </p>
                    </li>
                    <li className="services_modal_service">
                      <i className="services_modal_icon">
                        <FaRegCheckCircle />
                      </i>
                      <p>
                        Web page development.Bringing concepts to life through
                        elegant and efficient frontend development.
                      </p>
                    </li>
                    <li className="services_modal_service">
                      <i className="services_modal_icon">
                        <FaRegCheckCircle />
                      </i>
                      <p>
                        Building interactive web solutions that leave a lasting
                        impression.
                      </p>
                    </li>
                    <li className="services_modal_service">
                      <i className="services_modal_icon">
                        <FaRegCheckCircle />
                      </i>
                      <p>
                        Crafting code that speaks volumes, from concept to
                        execution.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="services_content">
              <div>
                <i className="services_icon">
                  <BiCodeCurly />
                </i>
                <h3 className="services_title">
                  Backend <br /> Developer
                </h3>
              </div>

              <span className="services_button">
                View More
                <i className="button_icon">
                  <MdArrowRightAlt />
                </i>
              </span>

              <div className="services_modal">
                <div className="services_modal_content">
                  <h4 className="services_modal_title">
                    {" "}
                    Backend <br /> Developer
                  </h4>
                  <i className="services_modal_close">
                    <MdCancel />
                  </i>

                  <ul className="services_modal_services">
                    <li className="services_modal_service">
                      <i className="services_modal_icon">
                        <FaRegCheckCircle />
                      </i>
                      <p>
                        Transforming designs into dynamic and responsive web
                        applications.
                      </p>
                    </li>
                    <li className="services_modal_service">
                      <i className="services_modal_icon">
                        <FaRegCheckCircle />
                      </i>
                      <p>
                        Building secure and reliable backend systems with MySQL
                        and Next.js.
                      </p>
                    </li>
                    <li className="services_modal_service">
                      <i className="services_modal_icon">
                        <FaRegCheckCircle />
                      </i>
                      <p>
                        Optimizing backend processes for lightning-fast data
                        retrieval and manipulation.
                      </p>
                    </li>
                    <li className="services_modal_service">
                      <i className="services_modal_icon">
                        <FaRegCheckCircle />
                      </i>
                      <p>
                        Deploying resilient backend infrastructures with Next.js
                        and MongoDB.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="services_content">
              <div>
                <i className="services_icon">
                  <FaPaintBrush />
                </i>
                <h3 className="services_title">
                  Branding <br /> Designer
                </h3>
              </div>

              <span className="services_button">
                View More
                <i className="button_icon">
                  <MdArrowRightAlt />
                </i>
              </span>

              <div className="services_modal">
                <div className="services_modal_content">
                  <h4 className="services_modal_title">
                    Graphics <br /> Designer
                  </h4>
                  <i className="services_modal_close">
                    <MdCancel />
                  </i>

                  <ul className="services_modal_services">
                    <li className="services_modal_service">
                      <i className="services_modal_icon">
                        <FaRegCheckCircle />
                      </i>
                      <p>
                        Crafting visually stunning logos that speak volumes
                        about your brands identity.
                      </p>
                    </li>
                    <li className="services_modal_service">
                      <i className="services_modal_icon">
                        <FaRegCheckCircle />
                      </i>
                      <p>
                        Bringing concepts to life with captivating 3D videos,
                        powered by Blender.
                      </p>
                    </li>
                    <li className="services_modal_service">
                      <i className="services_modal_icon">
                        <FaRegCheckCircle />
                      </i>
                      <p>
                        Editing seamless and captivating videos with finesse
                        using Premiere Pro.
                      </p>
                    </li>
                    <li className="services_modal_service">
                      <i className="services_modal_icon">
                        <FaRegCheckCircle />
                      </i>
                      <p>
                        Illustrating captivating graphics and artwork that
                        resonate with your audience in Illustrator.
                      </p>
                    </li>
                    <li className="services_modal_service">
                      <i className="services_modal_icon">
                        <FaRegCheckCircle />
                      </i>
                      <p>
                        Illustrating captivating graphics and artwork that
                        resonate with your audience in Illustrator.
                      </p>
                    </li>
                    <li className="services_modal_service">
                      <i className="services_modal_icon">
                        <FaRegCheckCircle />
                      </i>
                      <p>
                        Producing immersive 3D animations that captivate and
                        engage viewers.
                      </p>
                    </li>
                    <li className="services_modal_service">
                      <i className="services_modal_icon">
                        <FaRegCheckCircle />
                      </i>
                      <p>
                        Bringing imagination to life with vibrant illustrations
                        in Illustrator.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="ab_ab_ending_line"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
