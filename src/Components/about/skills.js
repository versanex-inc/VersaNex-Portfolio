"use client";
import React from "react";
import { useState, useEffect } from "react";

// icons
import { FaDatabase, FaPaintBrush } from "react-icons/fa";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";

const Skills = () => {
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

  return (
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
              <h2 className="ab_skills_title">Frontend Developers</h2>
              <span className="ab_skills_subtitle">More then 4 years of Exp.</span>
            </div>
            <span
              className="ab_skills_arrow "
              style={{
                transform: dropdownOneVisible ? "rotate(180deg)" : "rotate(0)",
              }}
            >
              <IoIosArrowDown />
            </span>
          </div>
          <div className={`ab_skill_list ${dropdownOneVisible ? "show" : ""}`}>
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
              <h2 className="ab_skills_title">Backend Developers</h2>
              <span className="ab_skills_subtitle">More then 3 years of Exp.</span>
            </div>
            <span
              className="ab_skills_arrow "
              style={{
                transform: dropdownTwoVisible ? "rotate(180deg)" : "rotate(0)",
              }}
            >
              <IoIosArrowDown />
            </span>
          </div>
          <div className={`ab_skill_list ${dropdownTwoVisible ? "show" : ""}`}>
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
              <h2 className="ab_skills_title">Graphics Designers</h2>
              <span className="ab_skills_subtitle">More then 6 years of Exp.</span>
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
            className={`ab_skill_list ${dropdownThreeVisible ? "show" : ""}`}
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
  );
};

export default Skills;
