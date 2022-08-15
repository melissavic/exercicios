/***************************
 * Objetivo: Criação de um sistema que construa uma tabuada
 * Data: 11/08/2022
 * Autora: Melissa Victória 
 * Versão: 1.0
 */

    const {tabuada, calcularTabuada } = require('./modulos/tabuada')

console.log('Sistema para calcular tabuadas')

var readline = require ('readline')

var entradaDados = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
}) 

entradaDados.question('Digite o primeiro número de 2 a 100:\n' , function(numero1){
    let tabuada  = numero1; 

    entradaDados.question('Digite o segundo número de 2 a 100 :\n ', function(numero3) {
        let tabuada3 = numero3;

        entradaDados.question('Até que número deve ser calculado?\n' , function(numero2) {
            let tabuada2 = numero2

            calcularTabuada(tabuada, tabuada2, tabuada3)
            entradaDados.close()
        })
  })    
})

    if(tabuada == '') {
        console.log('Para realizar o cálculo da tabuada, insira as informações necessárias:')
}
  