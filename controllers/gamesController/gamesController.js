const express = require('express');
const router = express.Router();
const Games = require('../gamesController/games');
const Category = require('../categoryController/categorys');

//pagina inicial

router.get("/home", (req, res) => {
    Games.findAll().then((game) => {
        Category.findAll().then(category=> {
            res.render("app/index", {game: game, category: category});
       });
    })
});

//pagina com todos games
router.get("/games", (req, res) => {
    Games.findAll().then((game) => {
        Category.findAll().then(category=> {
            res.render("app/index", {game: game, category: category});
       });
    })
});

router.get("/games/download/:id", (req, res) => {
    var id = req.params.id;
    
    Games.findOne({where: {id: id}}).then((game) => {
        Category.findAll().then(category => {
            res.render("app/download", {game: game, category: category});
        })
        
    });
});

router.get('/games/category/:id', (req, res) => {
    var id = req.params.id;
    Category.findOne({
        where: { id: id },
        include: [{model: Games}]
    }).then(category => {
        if(category != undefined){
           Category.findAll().then(categorys => {
               res.render('app/gamesCategory', { games: category.Games, category: categorys });
           });
        }else{
            res.send("deu erro mano kk");
        }
    })
});


//Admin Pags

//pagina para adicionar novo game
router.get("/game/new", (req, res) =>{
    Category.findAll().then(category =>{
        res.render('admin/gamesAdmin/new',{category: category});
    })
    
});

//pagina de Admin
router.get("/admin/games", (req, res) =>{
    Games.findAll().then((game) => {
        res.render("admin/gamesAdmin/admin", {game: game});
    });
})

router.get('/admin/edit/:id', (req, res) => {
    var id = req.params.id;
    Games.findOne({where: {id: id}}).then((game) => {
        if(game != undefined){
            res.render("admin/gamesAdmin/edit", {game: game});
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


router.post("/admin/game/delete", (req, res) =>{
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
    var category = req.body.category;
    Games.create({
        name: name,
        links: links,
        img: img,
        CategoryId: category
    }).then(() =>{
        res.redirect('/admin/games');
    })
});

module.exports = router;