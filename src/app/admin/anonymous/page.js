'use client'
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const Anonymous = () => {
  const router = useRouter();
  const [key, setKey] = useState("");

  const handleChange = (e) => {
    setKey(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { key };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/anonymousGet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const response = await res.json();

      if (response.success) {
        localStorage.setItem("haveToken", "true");
        toast.success("Key verified. You can now sign up.", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          router.push(`${process.env.NEXT_PUBLIC_HOST}/admin/adminSignup`);
        }, 2000);
      } else {
        toast.error("Invalid Key. Please try again.", {
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
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.", {
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
        <form className="cm_form" onSubmit={handleSubmit}>
          <div className="form">
            <h1 className="anonymous_heading">Enter the secret key</h1>
            <div className="group">
              <input
                value={key}
                onChange={handleChange}
                type="password"
                name="key"
                id="key"
                placeholder="Key"
                required
              />
              <span className="highlight"></span>
              <label className="label" htmlFor="key">Key</label>
            </div>
            <div>
              <button type="submit" className="form_submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Anonymous;