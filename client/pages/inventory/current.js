// client/pages/inventory/current.js
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import apiClient from '../../lib/apiClient';

const fetchCurrentInventory = async (search) => {
  const response = await apiClient.get('/api/currentInventory', { params: { search } });
  return response.data;
};

const CurrentInventory = () => {
  const [search, setSearch] = useState('');
  const { data: currentInventory, isLoading, refetch } = useQuery(['currentInventory', search], () => fetchCurrentInventory(search), { initialData: [] });

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    refetch();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Current Inventory</h1>
      <form onSubmit={handleSearchSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          value={search}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {currentInventory && currentInventory.map((item) => (
          <li key={item.id}>
            {item.make} {item.model} ({item.stockNumber})
          </li>
        ))}
      </ul>
    </div>
  );
};

CurrentInventory.publicRoute = true;
export default CurrentInventory;
