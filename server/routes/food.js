const Food = require('../controllers/food');
var router = require('express').Router();

router.get('/', Food.showAll);

module.exports = router;
