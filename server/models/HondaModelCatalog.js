// server/models/hondaModelCatalog.js
module.exports = (sequelize, DataTypes) => {
  const HondaModelCatalog = sequelize.define('HondaModelCatalog', {
    category: DataTypes.STRING,
    unitType: DataTypes.STRING,
    hondaCode: DataTypes.STRING,
    modelYear: DataTypes.INTEGER,
    model: DataTypes.STRING,
    modelName: DataTypes.STRING,
    color: DataTypes.STRING,
    unitsPerCrate: DataTypes.INTEGER,
    suggestedRetailPrice: DataTypes.FLOAT,
    freight: DataTypes.FLOAT,
    assembly: DataTypes.FLOAT,
    srpPlusFreightAndAssembly: DataTypes.FLOAT,
    surcharge: DataTypes.FLOAT,
    destinationCharge: DataTypes.FLOAT,
    srpPlusDestAndSurcharge: DataTypes.FLOAT,
    dealerNet: DataTypes.FLOAT,
    grossProfit: DataTypes.FLOAT,
    gpPercentage: DataTypes.FLOAT,
    retailSalesBonusAmount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
    },
    rsbPercentage: DataTypes.FLOAT,
    invoice: DataTypes.FLOAT,
    setupFlagRate: DataTypes.FLOAT,
    setupHours: DataTypes.FLOAT,
    setupPdi: DataTypes.FLOAT,
    dealerCost: DataTypes.FLOAT,
    invIncentive: DataTypes.FLOAT,
    pgmDealerInv: DataTypes.FLOAT,
    pgmDealerNet: DataTypes.FLOAT,
    programBulletin: DataTypes.STRING,
    registrationType: DataTypes.STRING,
  });

  return HondaModelCatalog;
};
