//OBJETOS
const animal ={
    raca: "cachorro",
    nome: "Koda",
    peso: 36.6,
    cor: "caramelo",
    come: function(){
console.log("animal comendo")
    }
}
// JSON -> PRIMO POBRE - apenas string
let informacoesEmJson = '{ "nome": "Alvaro", "idade": 26 }'

const jsonConvertido = JSON.parse(informacoesEmJson)


// MÉTODOS DE STRING
const meuNome = "Guilherme Dantas"
//console.log(meuNome.indexOf("Dantas"))
//console.log(meuNome[6])

// LOOPS OU REPETICOES
//console.log(1)
//console.log(2)
//console;log(3)
//...
//LOOP QUE IRÁ IMPRIMIR DO 1 AO 10
// for (i = 0 ; i <= 10 ; i ++){
//     //irá repetir
//     console.log(i)
// }
// if ternario
// if( 1 == 2){
//     console.log('certo')
// } else{
//     console.log('errado')
// }
// 1 ==1 ? console.log('certo') : console.log('errado')
//arrow function
// function nomeDaFuncao(){
//     console.log('entrou na função')
// }
const nomeDaFuncao = (valor1, valor2) =>{
    const soma = valor1 + valor2
    console.log(soma)
}
nomeDaFuncao(1200,3250)