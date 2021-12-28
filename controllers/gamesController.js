const express = require('express');
const router = express.Router();
const Games = require('../controllers/games');

//pagina inicial

router.get("/home", (req, res) => {
    Games.findAll().then((game) => {
        res.render("index", {game: game});
    });
});

//pagina com todos games
router.get("/games", (req, res) => {
    Games.findAll().then((game) => {
        res.render("games", {game: game});
    });
});

router.get("/games/download/:id", (req, res) => {
    var id = req.params.id;
    
    Games.findOne({where: {id: id}}).then((game) => {
        res.render("download", {game: game});
    });
});


//Admin Pags

//pagina para adicionar novo game
router.get("/game/new", (req, res) =>{
    res.render('admin/new');
});

//pagina de Admin
router.get("/admin/games", (req, res) =>{
    Games.findAll().then((game) => {
        res.render("admin/admin", {game: game});
    });
})

router.get('/admin/edit/:id', (req, res) => {
    var id = req.params.id;
    Games.findOne({where: {id: id}}).then((game) => {
        if(game != undefined){
            res.render("admin/edit", {game: game});
        }else{
            res.send(404);
        }
    });
});



router.post('/admin/edit/save', (req, res) => {
     var id = req.body.id;
     var name = req.body.name;
     var links = req.body.links;
     var img = req.body.img;

     Games.update({
         name: name,
         links: links,
         img: img
     }, {
         where: {id: id}
     }).then(() => {
         res.redirect("/admin/games")
     })
})

/*router.get('/admin/edit', (req, res) => {
    res.render('admin/edit');
}); */


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