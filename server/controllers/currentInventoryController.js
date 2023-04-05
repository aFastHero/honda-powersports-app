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
            make: {
              [Op.iLike]: `%${search}%`,
            },
          },
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
    res.status(500).json({ message: 'Error retrieving current inventory', error: error.message });
  }
};

module.exports = {
  getAll,
};
