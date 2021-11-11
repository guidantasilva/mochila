function trazerDados(req, res){
//controller
    res.json([{
        id:154,
        nome: 'Guilherme',
        email: 'guiasbfysf@naurnga.com',
        senha: '123'
    },
    {


        id:153,
        nome: 'Alvaro',
        email: 'guiasbfysf@naurnga.com',
        senha: '123'
    }])
    //controller
}

function inserirDados(req, res){
    //controller
    //processo de castro
    console.log(req.body)
        res.send('inserindo dados' + req.body.email)
        //controller
    }
//alteração de dados 
    function alterarDados(req, res){
        //controller
        console.log(req.body)
        console.log(req.params)
            res.send('você esta alterando dados')
            //controller
        }

        function deletarDados(req, res){
            //controller
            console.log(req.params)
            res.send("registro deletado")
        }
    module.exports ={
        inserirDados,
        trazerDados,
        alterarDados,
        deletarDados
    }