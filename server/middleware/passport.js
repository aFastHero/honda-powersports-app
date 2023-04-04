// server/middleware/passport.js
require('dotenv').config();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcryptjs');
const { Users } = require('../sequelize'); // Import the Users model

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-here';

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email', // Use the email field for authentication
    },
    async (email, password, done) => {
      try {
        const user = await Users.findOne({ where: { email } });

        if (!user) {
          console.error('User not found during authentication:', email);
          return done(null, false, { message: 'Incorrect email.' });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
          console.error('Incorrect password for user:', email);
          return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, user);
      } catch (err) {
        console.error('Error during authentication:', err);
        return done(err);
      }
    }
  )
);

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
};

const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const user = await Users.findByPk(payload.id);

    if (user) {
      done(null, user);
    } else {
      // console.log('User not found in JWT strategy, payload:', payload);
      done(null, false);
    }
  } catch (err) {
    // console.log('Error in JWT strategy:', err);
    done(err, false);
  }
});

passport.use(jwtLogin);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await Users.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;