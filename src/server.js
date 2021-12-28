const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const gamesController = require('../controllers/gamesController');
const emuladorController = require('../controllers/emuladorController');

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

app.listen(8181, () => {
    console.log('servidor iniciado')
});