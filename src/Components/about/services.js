"use client";
import React, { useState } from "react";
import { FaPaintBrush, FaRegCheckCircle } from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";
import { MdOutlineWeb, MdArrowRightAlt, MdCancel } from "react-icons/md";

const Services = () => {
  return (
    <div className="ab_services ab_grid_item">
      <h1 className="ab_heading">Services</h1>
      <div className="services_grid">
        <ServiceItem
          icon={<MdOutlineWeb />}
          title="Ui/Ux Designer"
          modalTitle="Ui/Ux Designer"
          modalServices={[
            "Transforming ideas into captivating web interfaces.",
            "Shaping digital experiences that captivate and convert.",
            "Crafting intuitive interfaces that drive results.",
            "Bringing your brand to life through compelling UI/UX.",
          ]}
        />
        <ServiceItem
          icon={<BiCodeCurly />}
          title="Frontend Developer"
          modalTitle="Frontend Developer"
          modalServices={[
            "Transforming designs into dynamic and responsive web applications.",
            "Web page development. Bringing concepts to life through elegant and efficient frontend development.",
            "Building interactive web solutions that leave a lasting impression.",
            "Crafting code that speaks volumes, from concept to execution.",
          ]}
        />
        <ServiceItem
          icon={<BiCodeCurly />}
          title="Backend Developer"
          modalTitle="Backend Developer"
          modalServices={[
            "Transforming designs into dynamic and responsive web applications.",
            "Building secure and reliable backend systems with MySQL and Next.js.",
            "Optimizing backend processes for lightning-fast data retrieval and manipulation.",
            "Deploying resilient backend infrastructures with Next.js and MongoDB.",
          ]}
        />
        <ServiceItem
          icon={<FaPaintBrush />}
          title="Branding Designer"
          modalTitle="Graphics Designer"
          modalServices={[
            "Crafting visually stunning logos that speak volumes about your brand's identity.",
            "Bringing concepts to life with captivating 3D videos, powered by Blender.",
            "Editing seamless and captivating videos with finesse using Premiere Pro.",
            "Illustrating captivating graphics and artwork that resonate with your audience in Illustrator.",
            "Producing immersive 3D animations that captivate and engage viewers.",
            "Bringing imagination to life with vibrant illustrations in Illustrator.",
          ]}
        />
      </div>
      <div className="ab_ab_ending_line"></div>
    </div>
  );
};

const ServiceItem = ({ icon, title, modalTitle, modalServices }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="services_content" onClick={toggleModal}>
      <div>
        <i className="services_icon">{icon}</i>
        <h3 className="services_title">{title}</h3>
      </div>
      <span className="services_button">
        View More
        <i className="button_icon">
          <MdArrowRightAlt />
        </i>
      </span>
      {isModalOpen && (
        <Modal
          modalTitle={modalTitle}
          modalServices={modalServices}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
};

const Modal = ({ modalTitle, modalServices, toggleModal }) => {
  return (
    <div className="services_modal active-modal">
      <div className="services_modal_content">
        <div className="model_header" onClick={toggleModal}>
          <h4 className="services_modal_title">{modalTitle}</h4>
          <i className="services_modal_close" onClick={toggleModal}>
            <MdCancel />
          </i>
        </div>
        <ul className="services_modal_services">
          {modalServices.map((service, index) => (
            <li className="services_modal_service" key={index}>
              <i className="services_modal_icon">
                <FaRegCheckCircle />
              </i>
              <p>{service}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
