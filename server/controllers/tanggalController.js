const Tanggal = require('../models/tanggal.js');

module.exports = {

  createData: function (req, res, next) {
    let newData = Letter({
      tanggal: req.body.tanggal,
      frequency: req.body.frequency
    })

    newData.save().then(function(data){
      res.send(data)
    })
  },
  updateData: function (req, res, next) {
    Tanggal.findOneAndUpdate({_id: req.params.id},{tanggal: req.body.tanggal, frequency: req.body.frequency})
    .then(function(data){
      res.send(data)
    })
  },
  deleteData: function (req, res, next) {
    Tanggal.findOneAndRemove({_id: req.params.id})
    .then(function(data){
      res.send('Data Deleted')
    })
  },
  readData: function (req, res, next) {
    Tanggal.find({}).then(function (data) {
      res.send(data);
    })
  },
  readDataById: function (req, res, next) {
    Letter.find({_id: req.params.id}).then(function (data) {
      res.send(data);
    })
  },
  searchData: function (req, res, next) {
    Tanggal.find({$and:[{tanggal:{$regex:req.query.q, $options:'i'}},{frequency:{$regex:req.query.p, $options:'i'}}]}).then(function (data) {
      res.send(data);
    })
  }
}
