// client/pages/inventory/current.js

import React from 'react';
import { useQuery } from 'react-query';
import apiClient from '../../lib/apiClient';

const fetchCurrentInventory = async () => {
  const response = await apiClient.get('/api/currentInventory');
  return response.data;
};

const CurrentInventory = () => {
  const { data: currentInventory, isLoading } = useQuery('currentInventory', fetchCurrentInventory);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Current Inventory</h1>
      <ul>
        {currentInventory && currentInventory.map((item) => (
          <li key={item.id}>
            {item.model} ({item.stockNumber})
          </li>
        ))}
      </ul>
    </div>
  );
};

CurrentInventory.publicRoute = true;
export default CurrentInventory;
