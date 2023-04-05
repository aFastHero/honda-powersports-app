// client/pages/dashboard.js
import React from 'react';
import withAuth from '../hocs/withAuth';

const Dashboard = () => {
  return (
    <div>
      <h1>Main Dashboard</h1>
      <p>Welcome to the dashboard! You can use the navigation bar to access Current Inventory and Incoming Inventory pages.</p>
    </div>
  );
};

export default withAuth(Dashboard);
