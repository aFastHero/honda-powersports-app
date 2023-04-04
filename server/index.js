// server/index.js
require('dotenv').config();
const express = require('express');
const app = express();
const port = 3001;
const { sequelize } = require('./sequelize');
const importDataRoutes = require('./routes/importData');
const currentInventoryRoutes = require('./routes/currentInventoryRoutes');
const incomingInventoryRoutes = require('./routes/incomingInventoryRoutes');
const passport = require('./middleware/passport');
const session = require('express-session');
const authRoutes = require('./routes/auth');
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    // secret: 's%ZgrkzI7KEO%Hqe2z3478H4zfq%3Ovb@JPZzjjqVO%^XyCNM707B0F', // Replace this with a strong secret
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', authRoutes);

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Not authenticated' });
};

app.use('/api', importDataRoutes);
app.use('/api/currentInventory', ensureAuthenticated, currentInventoryRoutes);
app.use('/api/incomingInventory', ensureAuthenticated, incomingInventoryRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
