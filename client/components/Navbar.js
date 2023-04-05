// client/components/Navbar.js
import React from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';
import styles from '@/styles/Navbar.module.css';

const Navbar = () => {
  const router = useRouter();
  const token = Cookie.get('token');

  const handleLogout = () => {
    Cookie.remove('token');
    router.push('/login');
  };

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container">
        <Link href="/">
          <span className={`navbar-brand ${styles.brand}`}>PowerSportsPro</span>
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {token ? (
              <>
                <li className="nav-item">
                  <Link href="/dashboard">
                    <span className={`nav-link ${styles.navLink} ${router.pathname === '/dashboard' ? styles.active : ''}`}>Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/inventory/current">
                    <span className={`nav-link ${styles.navLink} ${router.pathname === '/inventory/current' ? styles.active : ''}`}>Current Inventory</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/inventory/incoming">
                    <span className={`nav-link ${styles.navLink} ${router.pathname === '/inventory/incoming' ? styles.active : ''}`}>Incoming Inventory</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <button onClick={handleLogout} className={`nav-link ${styles.navbarButton}`} style={{ border: 'none', background: 'transparent' }}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link href="/">
                    <span className={`nav-link ${styles.navLink} ${router.pathname === '/' ? styles.active : ''}`}>Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/login">
                    <span className={`nav-link ${styles.navLink} ${router.pathname === '/login' ? styles.active : ''}`}>Login</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
