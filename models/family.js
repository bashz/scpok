var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var familySchema = Schema({
  id: Number,
  pokemons: [Number]
});

module.exports = mongoose.model('families', familySchema);