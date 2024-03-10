"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSolidCheckSquare } from "react-icons/bi";
import { FaTools, FaCirclePlay } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Projects_header from "@/Components/projects/navigations/main_header";
import Side_nav from "@/Components/projects/navigations/side_navigation";
import All_Projects from "@/Components/projects/all_projects";

const Programming = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      let isMounted = true;
  
      async function fetchData() {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_HOST}/api/getProjects`
          );
          const data = await response.json();
  
          // Filter projects based on subcategory being "gfx"
          const gfxProjects = data.result.filter(
            (project) => project.category === "programming"
          );
  
          setProjects(gfxProjects);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      }
  
      fetchData();
  
      return () => {
        isMounted = false;
      };
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      // <div className="background_body">
      //   <div className="app">
      //     <Projects_header />
      //     <div className="wrapper">
      //       <div className="left-side">
      //         <Side_nav />
      //       </div>
            <All_Projects/>
      //     </div>
      //   </div>
      // </div>
    );
  };
  
export default Programming;

function formatDeadline(deadline) {
  const date = new Date(deadline);
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());
  return `${year}-${month}-${day}`;
}

function padZero(num) {
  return num.toString().padStart(2, "0");
}
