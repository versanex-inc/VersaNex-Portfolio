// 'use client'
import Projects_header from "@/Components/projects/navigations/main_header";
import Side_nav from "@/Components/projects/navigations/side_navigation";

export const metadata = {
  title: "VersaNex - Projects",
  description:
    "Unlock your digital potential with VersaNex inc. We excel in graphic design and website development, delivering impactful solutions tailored to you. Elevate your brand online with our expertise.",
};

export default function ProjectsLayout({ children }) {
  return (
    <>
      <div className="background_body">
        <div className="app">
          <Projects_header />
          <div className="wrapper">
            <div className="left-side">
              <Side_nav />
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
