// server/controllers/incomingInventoryController.js
const { IncomingInventory } = require('../sequelize');
const { Op } = require('sequelize');

const getAll = async (req, res) => {
  try {
    const { search } = req.query;
    let where = {};

    if (search) {
      where = {
        model: {
          [Op.iLike]: `%${search}%`,
        },
      };
    }

    const incomingInventory = await IncomingInventory.findAll({ where });
    res.status(200).json(incomingInventory);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving incoming inventory', error });
  }
};

module.exports = {
  getAll,
};
