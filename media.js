/******
 * Objetivo: Criaçao de um sistema de médias
 * Data: 04/08/2022
 * Autor: Melissa Victória
 * Versão: 1.0
 */

console.log('Sistema para Cálculo de média')

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

entradaDados.question('Digite o nome do aluno: \n ' , function (nome) {
    let nomeAluno = nome; 

});

entradaDados.question('Digite o nome do professor: \n' , function(professor) {
    let nomeProfessor = professor;
});

entradaDados.question('Informe o gênero do aluno: \n ', function(genero1) {
    let generoAluno = genero1;
});

entradaDados.question('Informe o gênero do professor: \n ', function(genero2) {
    let generoProfessor = genero2; 
});

entradaDados.question('Digite o nome do curso: \n', function(curso) {
    let nomeCurso = curso;
});

entradaDados.question('Digite o nome da disciplina: \n' , function(disciplina){
    let nomeDisciplina = disciplina;
});

entradaDados.question('Insira o valor da nota 1: \n ', function(valor1){
    let nota1 = valor1;
});

entradaDados.question('Insira o valor da nota 2: \n', function(valor2) {
    let nota2 = valor2;
});

entradaDados.question('Insira o valor da nota 3: \n', function(valor3){
    let nota3 = valor3;
});

entradaDados.question('Insira o valor da nota 4: \n' , function(valor4){
    let nota4 = valor4;
});


  if (nomeAluno == '' ) {
    console.log('O nome do aluno deve ser informado')
}
