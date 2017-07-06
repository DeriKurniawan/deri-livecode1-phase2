const Restaurant = require('../controllers/restaurant');
var router = require('express').Router();

router.get('/', Restaurant.showAll);

module.exports = router;
