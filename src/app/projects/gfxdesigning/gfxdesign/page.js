"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSolidCheckSquare } from "react-icons/bi";
import { FaTools, FaCirclePlay } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Projects_header from "@/Components/projects/navigations/main_header";
import Side_nav from "@/Components/projects/navigations/side_navigation";

const Gfx_design_gfx = () => {
  const [projects, setFilteredProjects] = useState([]);
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
        const filteredProjects = data.result.filter(
          (project) => project.subCategory === "gfx"
        );

        setFilteredProjects(filteredProjects);
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
    <div className="background_body">
      <div className="app">
        <Projects_header />
        <div className="wrapper">
          <div className="left-side">
            <Side_nav />
          </div>
          <div className="content-wrapper">
            {projects && projects.length === 0 ? (
              <div>No works yet</div>
            ) : (
              <div className="content_boxes">
                {projects.map((item) => (
                  <Link
                    href={`/projects/${item.slug}`}
                    className="content_box"
                    key={item._id}
                  >
                    <div className="content_img">
                      <Image
                        className="sp_p_image"
                        src={item.images[0]?.url} // Use optional chaining to safely access the URL of the first image
                        alt="project"
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <div className="content_detail">
                      <Link
                        href={`/projects/${item.slug}`}
                        className="content_title"
                      >
                        <p>{item.title}</p>
                      </Link>
                      <p className="content_disc">{item.description}</p>
                      <div className="content_date">
                        <span>Uploaded </span>:{" "}
                        {item.deadline && formatDeadline(item.deadline)}
                      </div>
                      <div className="content_status">
                        {item.status === "completed" && (
                          <div className="status_completed statys_type">
                            Status : {item.status}
                            <span>
                              <BiSolidCheckSquare />
                            </span>
                          </div>
                        )}
                        {item.status === "in progress" && (
                          <div className="status_progress statys_type">
                            Status : {item.status}
                            <span>
                              <FaTools />
                            </span>
                          </div>
                        )}
                        {item.status === "on hold" && (
                          <div className="status_hold statys_type">
                            Status : {item.status}
                            <span>
                              <FaCirclePlay />
                            </span>
                          </div>
                        )}
                        {item.status === "cancelled" && (
                          <div className="status_canceled statys_type">
                            Status : {item.status}
                            <span>
                              <MdCancel />
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="read_more">
                      <button className="content_button">
                        <Link href={`/projects/${item.slug}`}>Read More</Link>
                      </button>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gfx_design_gfx;

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
