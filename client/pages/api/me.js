// client/pages/api/me.js
require('dotenv').config();
import jwt from 'jsonwebtoken';
import { Users } from '../../../server/sequelize'; // Assuming you have a db connection setup

export default async (async (req, res) => {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await Users.findOne({ where: { id: decoded.id } });

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json({ user });
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized' });
  }
})();
