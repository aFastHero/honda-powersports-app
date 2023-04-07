// server/routes/currentInventoryRoutes.js
const express = require('express');
const router = express.Router();
const currentInventoryController = require('../controllers/currentInventoryController');
const passport = require('../middleware/passport');

router.get('/', (req, res, next) => {
  // console.log('Before passport.authenticate'); // Add this log statement
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: 'Unauthorized' });
    req.user = user;
    next();
  })(req, res, next);
}, currentInventoryController.getAll);

module.exports = router;
