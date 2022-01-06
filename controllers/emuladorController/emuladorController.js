const express = require('express');
const router = express.Router();


router.get('/emulador', (req, res) => {
    res.render('app/emulador');
})


module.exports = router;