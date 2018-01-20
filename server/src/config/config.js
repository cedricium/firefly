const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'vue-webapp',
    user: process.env.DB_USER || 'vue-webapp',
    password: process.env.DB_PASS || 'vue-webapp',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './vue-webapp.sqlite',
      operatorsAliases: Op
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
};
