const express = require('express');
const router = express.Router();

router.get('/emulador', (req, res) => {
    res.render('emulador');
})


module.exports = router;