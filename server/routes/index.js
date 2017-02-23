var express = require('express');
var router = express.Router();
var tanggalController = require('../controllers/tanggalController')
var letterController = require('../controllers/letterController')
var userController = require('../controllers/userController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Routing User
router.post('/login', userController.login);

router.post('/register', userController.register);

//Routing letter table

router.get('/api/letter', letterController.readData);

router.post('/api/letter', letterController.createData);

router.get('/api/letter/search', letterController.searchData);

router.put('/api/letter', letterController.updateData);

router.delete('/api/letter', letterController.deleteData);

//Routing tanggal table

router.get('/api/tanggal', tanggalController.readData);

router.post('/api/tanggal', tanggalController.createData);

router.get('/api/tanggal/search', tanggalController.searchData);

router.put('/api/tanggal', tanggalController.updateData);

router.delete('/api/tanggal', tanggalController.deleteData);


module.exports = router;
