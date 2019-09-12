const { Router } = require('express');
const router = Router();
let { cars } = require('../store/cars.json');

router.get('/', (req, res) => {
    res.json({ cars });
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