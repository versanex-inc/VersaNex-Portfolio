"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Admin_Add_project from "@/Components/admin/addProject";
import Admin_Signout from "@/Components/admin/adminSignout";
import Admin_View_messages from "./viewmessages/page";
import Admin_Viewmessage_btn from "@/Components/admin/viewmessages";

const Admin = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if user exists in localStorage
    const user = localStorage.getItem("user");
    if (!user) {
      // Redirect to /admin/adminLogin page if user doesn't exist
      router.push("/admin/adminLogin");
    }
  }, []);

  return (
    <>
      <div className="contactme_section">
        <Admin_Signout />
        <Admin_Viewmessage_btn/>
        <div className="contactme">
          <Admin_Add_project />
        </div>
      </div>
    </>
  );
};

export default Admin;
