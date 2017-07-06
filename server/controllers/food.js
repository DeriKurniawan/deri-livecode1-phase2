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

model.getOne = function(req, res){
  let id = req.params.id
  Food.findById(id, (err, result)=>{
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
  Food.create(body, (err, result)=>{
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

model.update = function(req, res){
    Food.findById(req.params.id, (err, data)=>{
      if(err){
        res.status(500).send({
          message: 'something wrong in databse',
          error: err
        })
      } else {
        //console.log('ini req.body di food.update : ', req.body);
        //console.log('ini data di food.update : ', data);
        let body = req.body;
        data.name = body.name || data.name;
        data.price = body.price || data.price;

        data.save((err, result)=>{
          if(err){
            res.status(500).send({
              message: 'something wrong in databse',
              error: err
            })
          } else {
            res.send({
              msg: 'Update data food is success',
              data: result
            })
          }
        })
      }
    })
}



module.exports = model;
