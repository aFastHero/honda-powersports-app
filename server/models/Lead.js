// server/models/Lead.js
module.exports = (sequelize, DataTypes) => {
  const Lead = sequelize.define('Lead', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    leadSource: DataTypes.STRING,
    leadStatus: DataTypes.STRING,
    salesProcessStep: DataTypes.STRING,
    lastContactDate: DataTypes.DATE,
    desiredUnits: DataTypes.JSONB, // or DataTypes.JSONB if you are using PostgreSQL
    purchasedUnit: DataTypes.JSONB, // or DataTypes.JSONB if you are using PostgreSQL
    customerId: {
      type: DataTypes.UUID,
      references: {
        model: 'Customers',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    assignedEmployeeId: {
      type: DataTypes.UUID,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    deletedAt: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
  },
  {
    tableName: 'Leads',
    timestamps: true,
    paranoid: true,
  });

  Lead.associate = (models) => {
    Lead.belongsTo(models.Customer, { foreignKey: 'customerId' });
    Lead.belongsTo(models.Users, { foreignKey: 'assignedEmployeeId' });
  };

  return Lead;
};
