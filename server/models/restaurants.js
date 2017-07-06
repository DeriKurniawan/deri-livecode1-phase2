var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
  name: String,
  owner: String,
  address: String
});

var Restaurant = mongoose.model('restaurant', restaurantSchema);

module.exports = Restaurant;
