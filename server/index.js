// server/index.js
const express = require('express');
const app = express();
const port = 3001;
const { sequelize } = require('./sequelize');
const importDataRoutes = require('./routes/importData');
const currentInventoryRoutes = require('./routes/currentInventoryRoutes');
const incomingInventoryRoutes = require('./routes/incomingInventoryRoutes');

app.use(express.json());

app.use('/api', importDataRoutes);
app.use('/api/currentInventory', currentInventoryRoutes);
app.use('/api/incomingInventory', incomingInventoryRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
