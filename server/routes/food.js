const Food = require('../controllers/food');
var router = require('express').Router();

router.get('/', Food.showAll);
router.get('/:id', Food.getOne);
router.post('/', Food.create);
router.put('/:id', Food.update);
router.delete('/:id', Food.delete);

module.exports = router;
