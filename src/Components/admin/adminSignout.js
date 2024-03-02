import React from 'react';
import { useRouter } from 'next/navigation';

const Admin_Signout = () => {
  const router = useRouter();

  const handleSignOut = () => {
    // Remove user from localStorage
    localStorage.removeItem('user');

    // Redirect to /admin/adminLogin page
    router.push('/admin/adminLogin');
  };

  return (
    <button className='admin_signout' onClick={handleSignOut}>
        Sign Out
    </button>
  );
};

export default Admin_Signout;