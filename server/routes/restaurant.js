const Restaurant = require('../controllers/restaurant');
var router = require('express').Router();

router.get('/', Restaurant.showAll);
router.get('/:id', Restaurant.getOne);
router.post('/', Restaurant.create);
router.put('/:id', Restaurant.update);
router.delete('/:id', Restaurant.delete);

module.exports = router;
