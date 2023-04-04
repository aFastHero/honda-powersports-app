// client/pages/api/register.js
import bcrypt from 'bcryptjs';
import db from '../../../server/sequelize';

export default (async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { email, password } = req.body;

  // Check if there are any existing admin accounts
  const existingAdmin = await db.Users.findOne({ where: { isAdmin: true } });

  if (existingAdmin) {
    res.status(403).json({ message: 'Admin account already exists' });
    return;
  }

  // Create a new admin account
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await db.Users.create({
    email,
    password: hashedPassword,
    isAdmin: true,
  });

  res.status(201).json({ message: 'Admin account created', user: newUser });
})();
