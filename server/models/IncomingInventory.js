// server/models/incomingInventory.js
module.exports = (sequelize, DataTypes) => {
  const IncomingInventory = sequelize.define('IncomingInventory', {
    estimatedShipDate: DataTypes.DATE,
    orderNumber: DataTypes.STRING,
    hondaCode: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.INTEGER,
    color: DataTypes.STRING,
    msrp: DataTypes.FLOAT,
    dealerInvoice: DataTypes.FLOAT,
    orderType: DataTypes.STRING,
    orderDate: DataTypes.DATE,
    wh: DataTypes.STRING,
    statusCode: DataTypes.INTEGER,
    statusDescription: DataTypes.STRING,
    index: DataTypes.STRING,
    unitType: DataTypes.STRING,
    modelName: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Set defaultValue for createdAt
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Set defaultValue for updatedAt
    },
    deletedAt: {
      type: DataTypes.DATE,
      defaultValue: null, // Set defaultValue for updatedAt
    },
  },
  {
    timestamps: true, // Enable timestamps management by Sequelize
    paranoid: true, // Enable soft delete (paranoid mode)
  });

  return IncomingInventory;
};