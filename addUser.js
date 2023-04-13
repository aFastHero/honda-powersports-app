// addUser.js is a script that can be used to add a new user to the database
require('dotenv').config();
const { Client } = require('pg');
const bcrypt = require('bcryptjs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter email: ', (email) => {
  rl.question('Enter password: ', (password) => {
    rl.question('Enter first name: ', (firstName) => {
      rl.question('Enter last name: ', (lastName) => {
        rl.question('Enter role (optional): ', (role) => {
          rl.question('Is user an admin? (y/n): ', (isAdmin) => {
            isAdmin = isAdmin.toLowerCase() === 'y';
            
            const client = new Client({
              user: process.env.DB_USER,
              host: process.env.DB_HOST,
              database: process.env.DB_DATABASE,
              password: process.env.DB_PASSWORD,
              port: process.env.DB_PORT
            });

            client.connect()
              .then(() => {
                const saltRounds = 10;
                bcrypt.hash(password, saltRounds)
                  .then(hash => {
                    const query = {
                      text: 'INSERT INTO "Users" (email, password, "firstName", "lastName", role, "isAdmin") VALUES ($1, $2, $3, $4, $5, $6)',
                      values: [email, hash, firstName, lastName, role, isAdmin]
                    };
                    return client.query(query);
                  })
                  .then(() => {
                    console.log('User added successfully!');
                    client.end();
                    rl.close();
                  })
                  .catch((err) => {
                    console.error('Error adding user:', err);
                    client.end();
                    rl.close();
                  });
              })
              .catch((err) => {
                console.error('Error connecting to database:', err);
                client.end();
                rl.close();
              });
            
            client.on('error', (err) => {
              console.error('Database error:', err);
              rl.close();
            });
          });
        });
      });
    });
  });
});
