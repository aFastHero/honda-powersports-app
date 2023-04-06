// client/pages/inventory/current.js
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import apiClient from '../../lib/apiClient';

const fetchCurrentInventory = async ({search, make, modelName, stockNumber}) => {
  const response = await apiClient.get('/api/currentInventory', {
    params: { search, make, modelName, stockNumber },
  });
  return response.data;
};

const CurrentInventory = () => {
  const [search, setSearch] = useState('');
  const [make, setMake] = useState('');
  const [modelName, setModelName] = useState('');
  const [stockNumber, setStockNumber] = useState('');

  const { data: currentInventory, isLoading, refetch } = useQuery(
    ['currentInventory', search, make, modelName, stockNumber],
    () => fetchCurrentInventory({search, make, modelName, stockNumber}),
    { initialData: [] }
  );

  const [uniqueMakes, setUniqueMakes] = useState([]);
  const [uniqueModels, setUniqueModels] = useState([]);
  const [uniqueStockNumbers, setUniqueStockNumbers] = useState([]);

  React.useEffect(() => {
    if (currentInventory && currentInventory.length > 0) {
      setUniqueMakes([...new Set(currentInventory.map((item) => item.make))]);
      if (make) {
        setUniqueModels([
          ...new Set(
            currentInventory
              .filter((item) => item.make === make)
              .map((item) => item.model)
          ),
        ]);
      }
      if (make && model) {
        setUniqueStockNumbers(
          currentInventory
            .filter((item) => item.make === make && item.model === model)
            .map((item) => item.stockNumber)
        );
      }
    }
  }, [currentInventory, make, modelName]);

  React.useEffect(() => {
    refetch();
  }, [make, modelName, stockNumber, search]);

  const handleMakeChange = (e) => {
    setMake(e.target.value);
    setModelName('');
    setStockNumber('');
    setSearch('');
  };
  
  const handleModelChange = (e) => {
    setModelName(e.target.value);
    setStockNumber('');
    setSearch('');
  };
  
  const handleStockNumberChange = (e) => {
    setStockNumber(e.target.value);
    setSearch('');
  };
  

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const resetFilters = () => {
    setSearch('');
    setMake('');
    setModelName('');
    setStockNumber('');
  };

  // const handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   refetch();
  // };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Current Inventory</h1>
      <form>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          value={search}
          onChange={handleSearchChange}
        />
        {/* <button type="submit">Search</button> */}
      </form>
      <div>
        <label htmlFor="make">Make:</label>
        <select id="make" value={make} onChange={handleMakeChange}>
          <option value="">All</option>
          {uniqueMakes.map((uniqueMake, index) => (
            <option key={index} value={uniqueMake}>
              {uniqueMake}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="model">Model Name:</label>
        <select id="model" value={modelName} onChange={handleModelChange}>
          <option value="">All</option>
          {uniqueModels.map((uniqueModel, index) => (
            <option key={index} value={uniqueModel}>
              {uniqueModel}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="stockNumber">Stock Number:</label>
        <select
          id="stockNumber"
          value={stockNumber}
          onChange={handleStockNumberChange}
        >
          <option value="">All</option>
          {uniqueStockNumbers.map((uniqueStockNumber, index) => (
            <option key={index} value={uniqueStockNumber}>
              {uniqueStockNumber}
            </option>
          ))}
        </select>
      </div>
      <button onClick={resetFilters}>Reset Filters</button>
      <ul>
        {currentInventory && currentInventory.map((item) => (
          <li key={item.id}>
            {item.stockNumber} - {item.unitType} - {item.model} ({item.age}) - {item.vin} | {item.year} {item.make} {item.modelName} - {item.color} | ${item.msrp}
          </li>
        ))}
      </ul>
    </div>
  );
};

CurrentInventory.publicRoute = true;
export default CurrentInventory;
