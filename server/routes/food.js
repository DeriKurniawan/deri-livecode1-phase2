const Food = require('../controllers/food');
var router = require('express').Router();

router.get('/', Food.showAll);
router.get('/:id', Food.getOne);
router.post('/', Food.create);
router.put('/:id', Food.update);

module.exports = router;
