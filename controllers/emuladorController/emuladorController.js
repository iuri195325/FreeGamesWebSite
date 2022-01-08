const express = require('express');
const router = express.Router();
const Games = require('../gamesController/games');
const Category = require('../categoryController/categorys');



router.get("/emulador", (req, res) => {
        Category.findAll().then(category=> {
            res.render("app/emulador", {category: category});
       });
    
});

module.exports = router;