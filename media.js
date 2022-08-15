/******
 * Objetivo: Criaçao de um sistema de médias
 * Data: 04/08/2022
 * Autor: Melissa Victória
 * Versão: 1.0
 */

console.log('Sistema para Cálculo de média')

const {calcular, exame, result} = require('./modulos/sistmedia')
 

var readline = require('readline');
const { exit } = require('process');


var entradaDados = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

entradaDados.question('Digite o nome do aluno: \n ' , function (nome) {
    let nomeAluno = nome; 

    entradaDados.question('Digite o nome do professor: \n' , function(profNome) {
        let nomeProf = profNome;

        entradaDados.question('Qual é o gênero do aluno(a)[masculino/feminino] \n ', function(alunoGenero) {
            let generoAluno = alunoGenero;
            
            if(generoAluno.toUpperCase() == 'MASCULINO' || generoAluno.toUpperCase() == 'MASC') {
                generoAluno = 'o aluno'
            }
            else if (generoAluno.toUpperCase() == 'FEMININO' || generoAluno.toUpperCase() == 'FEM' ) {
                generoAluno = 'a aluna'
            }

            entradaDados.question('Informe o gênero do professor:\n', function(profGenero){
                let generoProf = profGenero;

                if (generoProf.toUpperCase() == 'MASCULINO' || generoProf.toUpperCase() == 'MASC') {
                    generoProf = 'o professor'
                }
                else if(generoProf.toUpperCase() == 'FEMININO' || generoProf.toUpperCase() == 'FEM') {
                    generoProf = 'a professora'
                }

                entradaDados.question('Digite o nome do curso: \n', function(curso) {
                let nomeCurso = curso;

                entradaDados.question('Digite o nome da disciplina: \n' , function(disciplina){
                    let nomeDisciplina = disciplina;

                    entradaDados.question('Insira o valor da nota 1: \n ', function(valor1){
                        let nota1 = valor1;

                        entradaDados.question('Insira o valor da nota 2: \n', function(valor2) {
                            let nota2 = valor2;

                            entradaDados.question('Insira o valor da nota 3: \n', function(valor3){
                                let nota3 = valor3;

                             entradaDados.question('Insira o valor da nota 4: \n' , function(valor4){
                                let nota4 = valor4;
                                    
                                let notaExame = ''
                                let media = calcular(nota1, nota2, nota3, nota4)
                                let mediaExame= exame(notaExame)
        
                                result(media)

                        calcular(nota1, nota2, nota3, nota4, media)
                        console.log(console.log('O aluno['+nomeAluno + '], teve media'+ media)); 

                        if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' ) {
                            console.log('A média só poderá ser calculada quando todas as notas forem digitadas.')
                            entradaDados.close()
                            exit()
                        }


                        if (nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100) {
                            console.log('Notas inválidas, para continuar, respeite o intervalo de notas') 
                            entradaDados.close()
                            exit()
                        }


                        


                        entradaDados.question('Qual foi a nota de exame d' +generoAluno + nomeAluno + '\n', function(exameNota) {
                            notaExame = pasrseFloat(exameNota)
                            if(notaExame > 0) {
                                console.log('########## Relatório da Média ##########')
                                console.log(generoAluno + '' + nomeAluno + 'foi' + result(media) + 'na disciplina' + nomeDisciplina)
                                console.log('Curso:' +nomeCurso)
                                console.log(generoProf + ':' + nomeProf)
                                console.log('A nota d' + generoAluno + '' + nomeAluno + 'foram:' + nota1 + '' + nota2 + '' + nota3 + '' + nota4)
                                console.log('A média final d' + generoAluno + nomeAluno + 'foi' + media)
                                console.log('A média final d' + generoAluno + '' + nomeAluno + 'com a nota do exame foi' + mediaExame)

                                exit()
                            }


                        entradaDados.question('O aluno ficou de exame?'  )
                            else {
                                console.log('######## Relatório da Média ########')
                                console.log(generoAluno + '' + nomeAluno + 'foi' + result(media) + 'na disciplina' + nomeDisciplina)
                                console.log('Curso:' + nomeCurso)
                                console.log(generoProf + ':' + nomeProf)
                                console.log('A nota d' + generoAluno + '' + nomeAluno + 'foram' + nota1 + '' + nota2 + '' + nota3 + '' + nota4)
                                console.log('A média final d' + generoAluno + nomeAluno + 'foi' + media)

                            }

                                     })   
                                  }) 
                                })
                            })
                        })
                    })
                })          
            })
        
        })
    })
})








