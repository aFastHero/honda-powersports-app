// server/controllers/customerController.js
// server/controllers/customerController.js
const { Customer } = require('../sequelize');
const { Op } = require('sequelize');

const getAll = async (req, res) => {
  try {
    const { search } = req.query;
    let where = {};

    if (search) {
      where = {
        [Op.or]: [
          { firstName: { [Op.iLike]: `%${search}%` } },
          { lastName: { [Op.iLike]: `%${search}%` } },
          { email: { [Op.iLike]: `%${search}%` } },
        ],
      };
    }

    const customers = await Customer.findAll({ where });
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving customers', error });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByPk(id);

    if (customer) {
      res.status(200).json(customer);
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving customer', error });
  }
};

const create = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ message: 'Error creating customer', error });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Customer.update(req.body, { where: { id } });

    if (updated) {
      const updatedCustomer = await Customer.findByPk(id);
      res.status(200).json(updatedCustomer);
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating customer', error });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Customer.destroy({ where: { id } });

    if (deleted) {
      res.status(204).json({ message: 'Customer deleted' });
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting customer', error });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
