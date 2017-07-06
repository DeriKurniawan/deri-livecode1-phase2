const Food = require('../models/foods');
var model = {}

model.showAll = function(req, res){
  Food.find({}, (err, result)=>{
    if(err){
      res.status(400).send({
        message: 'error on database',
        error: err
      })
    } else {
      res.send(result);
    }
  })
}

module.exports = model;
