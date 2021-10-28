const express = require ('express');
const app = express();
// o metodo get é usado para apresentar informações
app.get("/listar-todos-os-clientes", (req, res)=> {

    console.log("bateu na rota de listar todos os clientes")

    const todosOsClientes = [
        {id:1,
         nome: "Guilherme",
         idade: 25   

        }, 
        {id:2,
            nome: "stella",
            idade:23

        }
    ]
    res.json(todosOsClientes)
})
//metodo post é geralmente usado para inserie informações
app.post('/clientes', (req, res)=>{
    console.log("bateu na minha rota de post")
}
)
//o metodo delete é geralmente usado para deletar
app.delete('/clientes', (req,res)=>{
    console.log('bateu na rota de delete')
}
)
//O METODO PUT GETALMENTE ALTERA UM REGISTRO DO BANCO DE DADOS.
app.put('/clientes', (req, res)=> {
    console.log('Bateu')})



app.listen(3333, ()=>{
    console.log('O servidor foi inciado com sucesso!')
})