const Sequelize = require('sequelize');
const connection = require('../database/database');
const Category = require('../controllers/categorys');

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
//Games.sync({force: true});

module.exports = Games;