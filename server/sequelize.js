// server/sequelize.js
const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config/config.json');
const CurrentInventoryModel = require('./models/CurrentInventory');
const IncomingInventoryModel = require('./models/IncomingInventory');
const HondaModelCatalogModel = require('./models/HondaModelCatalog');
const UsersModel = require('./models/Users');
const CustomerModel = require('./models/Customer');
const LeadModel = require('./models/Lead');
const CustomerNoteModel = require('./models/CustomerNote');
const EventModel = require('./models/Event');

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
const Users = UsersModel(sequelize, DataTypes);
const Customer = CustomerModel(sequelize, DataTypes);
const Lead = LeadModel(sequelize, DataTypes);
const CustomerNote = CustomerNoteModel(sequelize, DataTypes);
const Event = EventModel(sequelize, DataTypes);

sequelize.sync();

module.exports = {
  sequelize, // Add this line to export the sequelize object
  DataTypes, // Add this line to export the DataTypes object
  CurrentInventory,
  IncomingInventory,
  HondaModelCatalog,
  Users,
  Customer,
  Lead,
  CustomerNote,
  Event,
};
