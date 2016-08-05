var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var moveSchema = Schema({
  id: Number,
  charge: Boolean,
  name: String,
  type: { type: ObjectId, ref: 'typeSchema' },
  charges: Number,
  dmg: Number,
  cd: Number,
  eps: Number,
  dodge: Number,
  ddps: Number
});

module.exports = mongoose.model('moves', moveSchema);