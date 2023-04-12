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
      <table className={styles.inventoryTable}>
        <thead>
          <tr>
            <th className={styles.inventoryHeader}>Estimated Ship Date</th>
            <th className={styles.inventoryHeader}>Order Number</th>
            <th className={styles.inventoryHeader}>Honda Code</th>
            <th className={styles.inventoryHeader}>Model</th>
            <th className={styles.inventoryHeader}>Year</th>
            <th className={styles.inventoryHeader}>Model Name</th>
            <th className={styles.inventoryHeader}>Color</th>
            <th className={styles.inventoryHeader}>MSRP</th>
            <th className={styles.inventoryHeader}>Status Code</th>
            <th className={styles.inventoryHeader}>Status Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredInventory && filteredInventory.map((item) => (
            <tr key={item.id} className={styles.inventoryRow}>
              <td className={styles.inventoryCell}>{item.estimatedShipDate}</td>
              <td className={styles.inventoryCell}>{item.orderNumber}</td>
              <td className={styles.inventoryCell}>{item.hondaCode}</td>
              <td className={styles.inventoryCell}>{item.model}</td>
              <td className={styles.inventoryCell}>20{item.year}</td>
              <td className={styles.inventoryCell}>{item.modelName}</td>
              <td className={styles.inventoryCell}>{item.color}</td>
              <td className={styles.inventoryCell}>${item.msrp}</td>
              <td className={styles.inventoryCell}>{item.statusCode}</td>
              <td className={styles.inventoryCell}>{item.statusDescription}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

IncomingInventory.publicRoute = true;
export default IncomingInventory;
