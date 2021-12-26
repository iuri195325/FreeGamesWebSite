const Sequelize = require('sequelize');
const connection = new Sequelize('games','root','2254aabb',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;