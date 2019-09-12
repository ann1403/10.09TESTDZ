//пагинация
const { Router } = require('express');
const router = Router();
let { cars } = require('../store/cars.json');
// let cars = JSON.parse('../store/cars.json');
router.get('/', (req, res) => {
    res.render('index.pug'); //about
});

module.exports = router;