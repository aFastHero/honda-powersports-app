// client/pages/inventory/incoming.js
import React from 'react';
import { useQuery } from 'react-query';
import apiClient from '../../lib/apiClient';
import styles from '../../styles/Incoming.module.css';

const fetchIncomingInventory = async () => {
  const response = await apiClient.get('/api/incomingInventory');
  return response.data;
};

const IncomingInventory = () => {
  const { data: incomingInventory, isLoading } = useQuery('incomingInventory', fetchIncomingInventory);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const filteredInventory = incomingInventory.filter(item => item.statusCode <= 5);

  return (
    <div className={styles.incomingContainer}>
      <h1>Incoming Inventory</h1>
      <ul>
        {filteredInventory && filteredInventory.map((item) => (
          <li key={item.id} className={styles.listItem}>
          ({item.estimatedShipDate}) {item.model} - {item.quantity} ({item.hondaCode})
          </li>
        ))}
      </ul>
    </div>
  );
};

IncomingInventory.publicRoute = true;
export default IncomingInventory;
