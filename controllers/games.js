const Sequelize = require('sequelize');
const connection = require('../database/database');

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

//Games.sync({force: true});

module.exports = Games;