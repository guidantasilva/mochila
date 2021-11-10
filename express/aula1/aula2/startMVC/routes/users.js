var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('alteração no retorno da rots');
});

router.get('/rota-criada', function(req, res, next) {

  //isso é meu Controller

const valor1 = 10;
const valor2= 20;

const resultado= valor1*valor2;
//aqui poderia chamar meu métos de models para manipular o banco de dados.

  res.send('retornou minha primeira rota ultilizando mvc ' + resultado);
});

module.exports = router;
