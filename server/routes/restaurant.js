const Restaurant = require('../controllers/restaurant');
var router = require('express').Router();

router.get('/', Restaurant.showAll);
router.get('/:id', Restaurant.getOne);
router.post('/', Restaurant.create);

module.exports = router;
