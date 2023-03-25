// client/pages/index.js

import React from 'react';
import Link from 'next/link';

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

export default HomePage;
