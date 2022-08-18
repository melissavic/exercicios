/******
 * Objetivo: Criaçao de um sistema de médias
 * Data: 04/08/2022
 * Autor: Melissa Victória
 * Versão: 1.0
 */


//Funçao calcular média.
  const calcular = function media (nota1, nota2, nota3, nota4) {
    let media
    media = (parseFloat(nota1) + parseFloat(nota2) +parseFloat(nota3) + parseFloat(nota4)) /4
    return media
  }

  // Função da média com o exame
   const exame = function mediaE (notaExame, media) {
    let mediaExame = ''

    mediaExame = (media + notaExame) /2
    return mediaExame
   }


    // Função para calcular a situação do aluno
   const result = function result (media) {
      if(media>70) {
        return 'aprovado'
      } 
      else if (69<media>50) {
        return 'exame'
      }
      else if(media<60){
        return 'reprovado pelo exame'
      }
      else if (media>60){
        return 'aprovado pelo exame'
      }


      else{
        return 'reprovado'
      }
    }
  

   

module.exports = {
 calcular, result, exame
}