"use client";
import React from "react";

// icons
import LargeRight from "@/Components/navigaton/large_right";
import LargeLeft from "@/Components/navigaton/large_left";
import NavSmall from "@/Components/navigaton/nav_small";
import { CustomCursor } from "@/Components/customCursor";
import About_US from "@/Components/about/about_us";
import Skills from "@/Components/about/skills";
import Services from "@/Components/about/services";

const About = () => {
  return (
    <>
      <LargeLeft />
      <LargeRight />
      <NavSmall />
      <CustomCursor />

      <div className="about">
        <div className="about_grid">
          <About_US />
          <Skills />
          <Services />
        </div>
      </div>
    </>
  );
};

export default About;
