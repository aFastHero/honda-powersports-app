// client/components/Navbar.js
import React from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const token = Cookie.get('token');

  const handleLogout = () => {
    Cookie.remove('token');
    router.push('/login');
  };

  return (
    <nav>
      {token ? (
        <>
          <Link href="/">
            <span>Dashboard</span>
          </Link>
          <Link href="/inventory/current">
            <span>Current Inventory</span>
          </Link>
          <Link href="/inventory/incoming">
            <span>Incoming Inventory</span>
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link href="/">
            <span>Home</span>
          </Link>
          <Link href="/login">
            <span>Login</span>
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
