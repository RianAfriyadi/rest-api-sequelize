const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('training-nodejs', 'postgres', 'Erajaya2022', {
  host: '192.168.3.250',
  dialect: 'postgres',
  port: '5432'
});

// const test = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// test()


module.exports = sequelize