var express = require('express');
var router = express.Router();
var { getDados, cadastrarDados }= require('../controllers/users');

/* GET users listing. */
router.get('/', getDados);

router.get('/cadastrar', cadastrarDados);

module.exports = router;
