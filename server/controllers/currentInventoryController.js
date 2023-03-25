// server/controllers/currentInventoryController.js
const { CurrentInventory } = require('../sequelize');
const { Op } = require('sequelize');

const getAll = async (req, res) => {
  try {
    const { search } = req.query;
    let where = {};

    if (search) {
      where = {
        [Op.or]: [
          {
            model: {
              [Op.iLike]: `%${search}%`,
            },
          },
          {
            stockNumber: {
              [Op.iLike]: `%${search}%`,
            },
          },
        ],
      };
    }

    const currentInventory = await CurrentInventory.findAll({ where });
    res.status(200).json(currentInventory);
  } catch (error) {
    console.error(error); // Add this line to log the error in the server console
    res.status(500).json({ message: 'Error retrieving current inventory', error: error.message });
  }
};

module.exports = {
  getAll,
};
