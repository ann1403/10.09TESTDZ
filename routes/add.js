const { Router } = require('express');
const router = Router();
const fs = require('fs');
const bodyParser = require('body-parser');

let { cars } = require('../store/cars.json');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
router.get('/', (req, res) => {
    res.render('add')
})

router.post("/", urlencodedParser, function(request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);
    cars.push((request.body));
    // fs.appendFileSync('./store/cars.json', JSON.stringify((request.body)));
    // response.send(`${request.body.car_id} - ${request.body.name} - ${request.body.price}  Your answer wrote down, check the road 'all' `);
    response.send('OK')
});



module.exports = router;