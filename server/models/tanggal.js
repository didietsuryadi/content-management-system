`use strict`
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tanggalSchema = new Schema({
  date: { type: String, required: true },
  frequency: { type: String, required: true }
},{
  timestamps: true
});

var Tanggal = mongoose.model('Tanggal', tanggalSchema);

module.exports = Tanggal;
