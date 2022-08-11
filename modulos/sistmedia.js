/******
 * Objetivo: Criaçao de um sistema de médias
 * Data: 04/08/2022
 * Autor: Melissa Victória
 * Versão: 1.0
 */

console.log('Sistema para Cálculo de Média ')

//Funçao calcular média.
function calcular (nota1, nota2, nota3, nota4, statusAluno, notaExame ) {

    let media;
      
  if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' ) {
    console.log('Para calcular a média todas as notas precisam ser informadas.')} 


   media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) /4;
    console.log(console.log('O aluno['+nomeAluno + '], teve media'+ media)); 


    if(nota1 <=100 || nota2 <=100|| nota3 <=100 || nota4 <=100) {

    } else {
        console.log('As notas devem respeitar o intervalo de 0 a 100.')
    }


    //função para validar as notas e a situação do aluno. 
    const exame = function (notaExame, statusAluno) {

        let notaExame;
        let statusAluno;

        if(media >= 70) {
            statusAluno = APROVADO;
           } else if (media >= 50 && media <= 69 )
           statusAluno = EXAME;
           else (media >=49)
               statusAluno = REPROVADO;
           }
       
           if(statusAluno == EXAME ) {
               console.log('Insira a nota de exame do aluno:')
           }
           else if (notaExame >= 60) {
               console.log ('O aluno foi APROVADO')
           } 

    }


   

module.exports = {
 calcular , exame  
}