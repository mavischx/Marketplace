const Sequelize = require('sequelize');

const sequelize = new Sequelize('marketplace', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3307     
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });


module.exports = sequelize;