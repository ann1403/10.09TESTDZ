const { Router } = require('express');
const router = Router();
const fs = require('fs');


let { cars } = require('../store/cars.json');


router.get('/', (req, res) => {
    res.render('add')
})

router.post("/", function(request, response) {
    if (!request.body) return response.sendStatus(400);
    let data = request.body;
    fs.readFile('./store/cars.json', function(err, content) {
        if (err) throw err;
        let parsejson = JSON.parse(content);
        for (let i = 0; i < cars.length; i++) {
            if (i != cars[i].car_id) {
                parsejson.cars.push(data)
                break;
            }

        }
        fs.writeFile('./store/cars.json', JSON.stringify(parsejson), function(err) {
            if (err) throw err;
        })
    });

    console.log(request.body);
    // cars.push((request.body));
    // fs.appendFileSync('./store/cars.json', JSON.stringify((request.body)));
    // response.send(`${request.body.car_id} - ${request.body.name} - ${request.body.price}  Your answer wrote down, check the road 'all' `);
    response.send('OK')
});



module.exports = router;