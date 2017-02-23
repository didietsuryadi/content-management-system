const Letter = require('../models/letter.js');

module.exports = {

  createData: function (req, res, next) {
    let newData = Letter({
      letter: req.body.letter,
      frequency: req.body.frequency
    })

    newData.save().then(function(data){
      res.send(data)
    })
  },
  updateData: function (req, res, next) {
    Letter.findOneAndUpdate({_id: req.params.id})
    .then(function(data){
      res.send(data)
    })
  },
  deleteData: function (req, res, next) {
    Letter.findOneAndRemove({_id: req.params.id})
    .then(function(data){
      res.send('Data Deleted')
    })
  },
  readData: function (req, res, next) {
    Letter.find({}).then(function (data) {
      res.send(data);
    })
  },
  searchData: function (req, res, next) {
    Letter.find({$and:[{letter:{$regex:req.query.q, $options:'i'}},{frequency:{$regex:req.query.p, $options:'i'}}]}).then(function (data) {
      res.send(data);
    })
  }
}
