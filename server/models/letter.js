`use strict`
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var letterSchema = new Schema({
  letter: { type: String, required: true },
  frequency: { type: String, required: true },
  email: {type: String, required: true}
});

var Letter = mongoose.model('Letter', letterSchema);

module.exports = Letter;
