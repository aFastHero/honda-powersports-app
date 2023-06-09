// server/models/CurrentInventory.js
module.exports = (sequelize, DataTypes) => {
  const CurrentInventory = sequelize.define('CurrentInventory', {
    unitType: DataTypes.STRING,
    make: DataTypes.STRING,
    stockNumber: DataTypes.STRING,
    year: DataTypes.STRING,
    model: DataTypes.STRING,
    color: DataTypes.STRING,
    msrp: DataTypes.FLOAT,
    unitId: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    modelName: DataTypes.STRING,
    invoice: DataTypes.FLOAT,
    holdback: DataTypes.FLOAT,
    rebate: DataTypes.FLOAT,
    age: DataTypes.INTEGER,
    advertisedPrice: DataTypes.FLOAT,
    structure: DataTypes.STRING,
    hondaCode: {
      type: DataTypes.STRING,
    },
    vin: {
      type: DataTypes.STRING,
    },
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

  return CurrentInventory;
};