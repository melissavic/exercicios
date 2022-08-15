const calcularTabuada = function (numero1, numero2, numero3){
    let tabuada = numero1
    let tabuada2 = numero2
    let tabuada3 = numero3
    let cont = 0
    let resultado
    
    console.log('\nPRIMEIRA TABUADA\n')

    while(cont <= tabuada2){
        resultado = tabuada * cont
        console.log(tabuada + ' x ' + cont + ' = ' + resultado)
        cont = cont + 1
    }    

    console.log('\nSEGUNDA TABUADA\n')

    for(cont = 0; cont <= tabuada2; cont++){
        resultado = tabuada3 * cont
        console.log(tabuada3 + ' x ' + cont + ' = ' + resultado)
    }
}



module.exports = {
    calcularTabuada
}