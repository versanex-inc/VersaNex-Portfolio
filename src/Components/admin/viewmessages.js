import Link from "next/link";
import React from "react";

const Admin_Viewmessage_btn = () => {
  return (
    <button className="view_messages">
      <Link href={"/admin/viewmessages"}>View Messages</Link>
    </button>
  );
};

export default Admin_Viewmessage_btn;
