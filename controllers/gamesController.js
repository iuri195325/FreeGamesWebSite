const express = require('express');
const router = express.Router();
const Games = require('../controllers/games');

router.get("/home", (req, res) => {
    Games.findAll().then((game) => {
        res.render("index", {game: game});
    });
});

router.get("/games", (req, res) => {
    Games.findAll().then((game) => {
        res.render("games", {game: game});
    });
});

router.get("/game/new", (req, res) =>{
    res.render('new');
});

router.get("/admin/games", (req, res) =>{
    Games.findAll().then((game) => {
        res.render("edit", {game: game});
    });
})

router.post("/admin/category/delete", (req, res) =>{
    var id = req.body.id;
    if(id != undefined){
        Games.destroy({
            where: {id: id}
            }).then(() =>{
            res.redirect("/admin/games");
        })
    }    
});

router.post("/games/new", (req, res) =>{

    var name = req.body.name;
    var links = req.body.links;
    var img = req.body.img;

    Games.create({
        name: name,
        links: links,
        img: img
    }).then(() =>{
        res.redirect('/admin/games');
    })
});

module.exports = router;