// server/routes/importData.js
const path = require('path');
const express = require('express');
const router = express.Router();
const { CurrentInventory, IncomingInventory, HondaModelCatalog } = require('../sequelize');
const csv = require('csv-parser');
const fs = require('fs');

const importCsvData = (csvPath, model) => {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, '..', '..', csvPath))
      .pipe(csv())
      .on('data', (row) => {
        model.create(row);
      })
      .on('end', () => {
        console.log(`CSV data imported for ${model.name}`);
        resolve();
      })
      .on('error', (error) => {
        console.error(`Error importing CSV data for ${model.name}: ${error.message}`);
        reject(error);
      });
  });
};

router.post('/import/current-inventory', async (req, res) => {
  try {
    const csvPath = req.body.csvPath;
    await importCsvData(csvPath, CurrentInventory);
    res.status(200).json({ message: 'Current Inventory data imported successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error importing Current Inventory data', error });
  }
});

router.post('/import/incoming-inventory', async (req, res) => {
  try {
    const csvPath = req.body.csvPath;
    await importCsvData(csvPath, IncomingInventory);
    res.status(200).json({ message: 'Incoming Inventory data imported successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error importing Incoming Inventory data', error });
  }
});

router.post('/import/honda-model-catalog', async (req, res) => {
  try {
    const csvPath = req.body.csvPath;
    await importCsvData(csvPath, HondaModelCatalog);
    res.status(200).json({ message: 'Honda Model Catalog data imported successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error importing Honda Model Catalog data', error });
  }
});

module.exports = router;
