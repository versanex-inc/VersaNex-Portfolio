"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillYoutube } from "react-icons/ai";
import Image from "next/image";

const Contact_Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "message") {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        console.log("Tha");
        // Reset the form
        setName("");
        setEmail("");
        setMessage("");
        toast.success("Thank you for your message", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("Something went wrong", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="cm_container">
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="cm_info">
          <div className="cm_info_cover"></div>
          <div className="cm_info_content">
            <div className="cm_img">
              <Image
                src={"/imgs/bgimg1.png"}
                alt={"fafd"}
                width={2000}
                height={2000}
              />
            </div>

            <div className="cm_data">
              <p>
                Interested in sharing your project details with us? We&rsquo;re
                all ears! Whether you have a new idea to discuss or need
                assistance with an ongoing project, we&rsquo;re here to help.
                Please feel free to send over your project details, and
                we&rsquo;ll get back to you promptly to discuss how we can best
                meet your needs. Looking forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
        <form className="cm_form" onSubmit={handleSubmit}>
          <div className="cm_form_cover"></div>
          <div className="cm_form_content">
            <h1 className="contact_heading">Contact us for project details.</h1>
            <div className="form">
              <div className="group">
                <input
                  value={name}
                  onChange={handleChange}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                />
                <span className="highlight"></span>
                <label className="label" htmlFor="name">
                  Name
                </label>
              </div>
              <div className="group">
                <input
                  value={email}
                  onChange={handleChange}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                  autoComplete="off"
                />
                <span className="highlight"></span>
                <label className="label" htmlFor="email">
                  Email
                </label>
              </div>
              <div className="group">
                <textarea
                  value={message}
                  onChange={handleChange}
                  name="message"
                  id="message"
                  rows={5}
                  placeholder="Message"
                  required
                  autoComplete="off"
                />
                <span className="highlight"></span>
                <label className="label" htmlFor="message"></label>
              </div>
              <div>
                <button type="submit" className="form_submit">
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact_Form;
