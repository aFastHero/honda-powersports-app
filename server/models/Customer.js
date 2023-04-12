// server/models/Customer.js
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middleName: DataTypes.STRING,
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    alternateEmail: DataTypes.STRING,
    cellPhone: DataTypes.STRING,
    homePhone: DataTypes.STRING,
    workPhone: DataTypes.STRING,
    fax: DataTypes.STRING,
    addressLine1: DataTypes.STRING,
    addressLine2: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    county: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    dncStatus: DataTypes.BOOLEAN,
    dateOfBirth: DataTypes.DATE,
    gender: DataTypes.STRING,
    preferredLanguage: DataTypes.STRING,
    spouseFirstName: DataTypes.STRING,
    spouseLastName: DataTypes.STRING,
    spouseDateOfBirth: DataTypes.DATE,
    spouseEmail: DataTypes.STRING,
    spousePhone: DataTypes.STRING,
    relationship: DataTypes.STRING,
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
    tableName: 'Customers',
    timestamps: true,
    paranoid: true,
  });

  return Customer;
};
