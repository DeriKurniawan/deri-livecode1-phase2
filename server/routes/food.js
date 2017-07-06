const Food = require('../controllers/food');
var router = require('express').Router();

router.get('/', Food.showAll);
router.get('/:id', Food.getOne);

module.exports = router;
