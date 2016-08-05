var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var pokemonSchema = Schema({
  id: Number,
  name: String,
  nameFr: String,
  maxCP: Number,
  baseAtk: Number,
  baseDef: Number,
  baseStm: Number,
  captureRate: Number,
  fleeRate: Number,
  candiesRequired: Number,
  eggDistance: Number,
  possibleMove: [{ type: ObjectId, ref: 'moveSchema' }],
  possibleCharge: [{ type: ObjectId, ref: 'moveSchema' }],
  family: { type: ObjectId, ref: 'familySchema' },
  types: [{ type: ObjectId, ref: 'typeSchema' }],
  weight: Number,
  height: Number
});

module.exports = mongoose.model('pokemons', pokemonSchema);