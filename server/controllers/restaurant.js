const Restaurant = require('../models/restaurants');
var model = {}

model.showAll = function(req, res){
  Restaurant.find({}, (err, result)=>{
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

model.getOne = function(req, res){
  let id = req.params.id
  Restaurant.findById(id, (err, result)=>{
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

model.create = function(req, res){
  //console.log('ini req.body di food.create : ', req.body);
  let body = req.body;
  Restaurant.create(body, (err, result)=>{
    if(err){
      res.status(400).send({
        message: 'error on database',
        error: err
      })
    } else {
      res.send({
        msg: 'success create on database',
        data: result
      });
    }
  })
}

module.exports = model;
