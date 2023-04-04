// client/pages/index.js
import React from 'react';
import Link from 'next/link';
import withAuth from '../hocs/withAuth';

const HomePage = () => {
  return (
    <div>
      <h1>Main Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link href="/inventory/current">
              <span>Current Inventory</span>
            </Link>
          </li>
          <li>
            <Link href="/inventory/incoming">
              <span>Incoming Inventory</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

HomePage.publicRoute = true;
export default withAuth(HomePage);
