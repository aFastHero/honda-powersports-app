const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config/config.json');
const CurrentInventoryModel = require('./models/CurrentInventory');
const IncomingInventoryModel = require('./models/IncomingInventory');
const HondaModelCatalogModel = require('./models/HondaModelCatalog');

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
    define: {
      freezeTableName: true, // Prevent Sequelize from pluralizing table names
    },
  }
);

const CurrentInventory = CurrentInventoryModel(sequelize, DataTypes);
const IncomingInventory = IncomingInventoryModel(sequelize, DataTypes);
const HondaModelCatalog = HondaModelCatalogModel(sequelize, DataTypes);

sequelize.sync();

module.exports = {
  sequelize, // Add this line to export the sequelize object
  DataTypes, // Add this line to export the DataTypes object
  CurrentInventory,
  IncomingInventory,
  HondaModelCatalog,
};
