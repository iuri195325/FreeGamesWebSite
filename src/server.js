const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const gamesController = require('../controllers/gamesController/gamesController');
const emuladorController = require('../controllers/emuladorController/emuladorController');
const categorysController = require('../controllers/categoryController/categorysController');
const Categorys = require('../controllers/categoryController/categorys');
const Games = require('../controllers/gamesController/games');

app.set('views', '../views');
app.set('view engine','ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.send("Salve desgraça");
})


app.use('/', gamesController);
app.use('/', emuladorController);
app.use('/', categorysController);

app.listen(8181, () => {
    console.log('servidor iniciado');
});