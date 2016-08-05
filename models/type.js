var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var typeSchema = Schema({
  name: String,
  strength: [{ type: ObjectId, ref: 'typeSchema' }],
  weakness: [{ type: ObjectId, ref: 'typeSchema' }]
});

module.exports = mongoose.model('types', typeSchema);