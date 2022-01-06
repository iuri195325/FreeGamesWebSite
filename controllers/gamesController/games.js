const Sequelize = require('sequelize');
const connection = require('../../database/database');
const Category = require('../categoryController/categorys');

const Games = connection.define('Game',{
    name:{
        type: Sequelize.STRING
        
    },
    links:{
        type: Sequelize.TEXT,
        
    },
    img:{
        type: Sequelize.TEXT
    }
});


Category.hasMany(Games);
Games.belongsTo(Category);
//Games.sync({force: true});

module.exports = Games;