// server/models/Event.js
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    reminder: DataTypes.DATE,
    notificationType: DataTypes.STRING,
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
    tableName: 'Events',
    timestamps: true,
    paranoid: true,
  });

  Event.associate = (models) => {
    Event.belongsTo(models.Customer, { foreignKey: 'customerId' });
    Event.belongsTo(models.Users, { foreignKey: 'assignedEmployeeId' });
  };

  return Event;
};
