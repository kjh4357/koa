const Sequelize = require('sequelize');
const sequelize = new Sequelize('dev', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})
sequelize
    .authenticate()
    .then(() => {
        console.log('MYSQL ......');
    })
    .catch(err => {
        console.error(':', err);
    });
//
sequelize.sync()
module.exports = sequelize
