const express = require('express');
const router = express.Router();
const Category = require('../controllers/categorys');

router.get('/categorys', (req, res) => {
    Category.findAll().then(category =>{
        res.render('admin/adminCategory',{category: category});
    })
});

router.get('/new/category', (req, res) => {
    res.render('admin/newCategory');
});

router.post('/categrys/new', (req, res) => {
    var title = req.body.title;
    Category.create({
        title: title
    }).then(() =>{
        res.redirect('/categorys');
    })
});

router.post("/admin/category/delete", (req, res) =>{
    var id = req.body.id;
    if(id != undefined){
        Category.destroy({
            where: {id: id}
            }).then(() =>{
            res.redirect("/categorys");
        })
    }    
});

module.exports = router;