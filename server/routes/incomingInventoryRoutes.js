// server/routes/incomingInventoryRoutes.js
const express = require('express');
const router = express.Router();
const incomingInventoryController = require('../controllers/incomingInventoryController');
const passport = require('../middleware/passport');

router.get('/', (req, res, next) => {
  console.log('Before passport.authenticate'); // Add this log statement
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: 'Unauthorized' });
    req.user = user;
    next();
  })(req, res, next);
}, incomingInventoryController.getAll);

module.exports = router;
