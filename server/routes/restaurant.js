const Restaurant = require('../controllers/restaurant');
var router = require('express').Router();

router.get('/', Restaurant.showAll);
router.get('/:id', Restaurant.getOne);

module.exports = router;
