// client/pages/inventory/incoming.js

import React from 'react';
import { useQuery } from 'react-query';
import apiClient from '../../lib/apiClient';

const fetchIncomingInventory = async () => {
  const response = await apiClient.get('/api/incomingInventory');
  return response.data;
};

const IncomingInventory = () => {
  const { data: incomingInventory, isLoading } = useQuery('incomingInventory', fetchIncomingInventory);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Incoming Inventory</h1>
      <ul>
        {incomingInventory && incomingInventory.map((item) => (
          <li key={item.id}>
            {item.model} ({item.estimatedShipDate}) - {item.quantity} ({item.hondaCode})
          </li>
        ))}
      </ul>
    </div>
  );
};

IncomingInventory.publicRoute = true;
export default IncomingInventory;
