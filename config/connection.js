const Sequelize = require('sequelize');

require('dotenv').config();



// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize('just_tech_news_db', 'root', 'Linksys235769!', {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
//   });
// }

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('just_tech_news_db', 'root', 'Linksys235769!', {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;
