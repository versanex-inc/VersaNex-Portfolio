'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Admin_View_messages = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if user exists in localStorage
    const user = localStorage.getItem("user");
    if (!user) {
      // Redirect to /admin/adminLogin page if user doesn't exist
      router.push("/admin/adminLogin");
    }
  }, []);

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getContacts`);
            const data = await response.json();
            // console.log("Data from API:", data);
    
            setMessages(data.result); // Update this line
          } catch (error) {
            console.error(error);
          }
        }
    
        fetchData();
      }, []);

    return (
        <div className='a_view_messages'>
            <h1 className='aw_heading'>Messages</h1>
            <div className="a_msg_boxes">
                {messages.map(message => (
                    <div className="a_msg" key={message._id}>
                        <span className="a_name"><b>Name</b> : {message.name}</span>
                        <span className="a_email"><b>Email</b> : {message.email}</span>
                        <span className="message"><b>Message</b> : {message.message}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Admin_View_messages;