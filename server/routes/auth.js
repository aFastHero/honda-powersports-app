// server/routes/auth.js
// This file contains the routes for authentication
require('dotenv').config();
const express = require('express');
const router = express.Router();
const passport = require('../middleware/passport');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-here'; // Ideally, store the secret in an environment variable

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Not authenticated' });
};

const generateToken = (user) => {
  const payload = {
    id: user.id,
    username: user.email,
    role: user.role,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
  return token;
};

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error('Authentication error:', err);
      return next(err);
    }
    if (!user) {
      console.error('Authentication failed:', info.message);
      return res.status(401).json({ message: 'Authentication failed' });
    }
    req.logIn(user, (err) => {
      if (err) {
        console.error('Error logging in:', err);
        return next(err);
      }
      const token = generateToken(user);
      return res.json({ user, token });
    });
  })(req, res, next);
});

router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
