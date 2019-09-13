const { Router } = require('express');
const router = Router();
const fs = require('fs');
let { cars } = require('../store/cars.json');

router.get('/', (req, res) => {
    fs.readFile('./store/cars.json', function(err, content) {
        let parsejson = JSON.parse(content);
        if (err) throw err;
        res.json(JSON.stringify(parsejson));
    })

})
router.get('/:id', (req, res) => {
    for (let k = 0; k < cars.length; k++) {
        if (req.params.id == cars[k].car_id) {
            console.log(cars[k])
            console.log(cars[k].name)
            res.json(cars[k]);
            //, text: article.articlewith[k].text, author: article.articlewith[k].author, link: `/blog/${article.articleswith[k].article_id}` });
            break;
        }
    }
})

module.exports = router;