// server/models/CustomerNote.js
module.exports = (sequelize, DataTypes) => {
  const CustomerNote = sequelize.define('CustomerNote', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.UUID,
      references: {
        model: 'Customers',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
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
    tableName: 'CustomerNotes',
    timestamps: true,
    paranoid: true,
  });

  CustomerNote.associate = (models) => {
    CustomerNote.belongsTo(models.Customer, { foreignKey: 'customerId' });
  };

  return CustomerNote;
};
