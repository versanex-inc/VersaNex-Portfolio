"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BiSolidCheckSquare } from "react-icons/bi";
import { FaTools, FaCirclePlay } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

import Projects_header from "@/Components/projects/navigations/main_header";
import Side_nav from "@/Components/projects/navigations/side_navigation";
import Link from "next/link";

const Project_page = ({ params }) => {
  const [projectData, setProjectData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/getProjects`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch project data");
        }
        const projectsResponse = await response.json();
        const project = projectsResponse.result.find(
          (project) => project.slug === params.slug
        );
        if (project) {
          setProjectData(project);
        } else {
          setError(`Project with slug ${params.slug} not found.`);
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
        setError("Error fetching project data");
      }
    };

    fetchData();
  }, [params]);

  if (!projectData && !error) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
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
            <div className="slug_content_box">
              <div className="slug_heading">
                <h1>Details about project</h1>
                <span className="slug_title">
                  <p>
                    <b>Title</b> : {projectData.title}
                  </p>
                </span>
              </div>
              <div className="slug_content_img">
                {projectData.type === "iframe" ? (
                  <iframe
                    width="100%"
                    height="300"
                    src={projectData.images}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ) : (
                  projectData.images.map((image, index) => (
                    <div className="slug_image" key={index}>
                      <Image
                        className=""
                        src={image.url} // Remove `.images[0]` from here
                        width={1000}
                        height={1000}
                        alt={`Image ${index + 1}`}
                      />
                    </div>
                  ))
                )}
              </div>
              <div className="slug_content_detail">
                <div className="slug_creator">
                  <Link href={projectData.creatorProfile}>
                    <span className="slug_creator_name">
                      Created By :&nbsp;{projectData.creator}
                    </span>
                  </Link>
                  <span className="slug_content_date">
                    {projectData.deadline &&
                      formatDeadline(projectData.deadline)}
                  </span>
                </div>
                <div className="slug_content_disc">
                  {projectData.description}
                </div>
                <div className="content_status">
                  {projectData.status === "completed" && (
                    <div className="status_completed statys_type">
                      Status : {projectData.status}
                      <span>
                        <BiSolidCheckSquare />
                      </span>
                    </div>
                  )}
                  {projectData.status === "in progress" && (
                    <div className="status_progress statys_type">
                      Status : {projectData.status}
                      <span>
                        <FaTools />
                      </span>
                    </div>
                  )}
                  {projectData.status === "on hold" && (
                    <div className="status_hold statys_type">
                      Status : {projectData.status}
                      <span>
                        <FaCirclePlay />
                      </span>
                    </div>
                  )}
                  {projectData.status === "cancelled" && (
                    <div className="status_canceled statys_type">
                      Status : {projectData.status}
                      <span>
                        <MdCancel />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project_page;
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
