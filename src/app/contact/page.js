import React from "react";
import NavSmall from "@/Components/navigaton/nav_small";
import LargeLeft from "@/Components/navigaton/large_left";
import LargeRight from "@/Components/navigaton/large_right";
import Contact_Form from "@/Components/contact/contact_Form";
import { CustomCursor } from "@/Components/customCursor";
export const metadata = {
  title: "VersaNex - Contact",
};
const ContactMe = () => {
  return (
    <>
      <div className="contactme_section">
        <NavSmall />
        <LargeLeft />
        <LargeRight />
        <CustomCursor />
        <div className="contactme">
          <Contact_Form />
        </div>
      </div>
    </>
  );
};

export default ContactMe;
