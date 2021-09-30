let estudantes = require("./alunos");
let estudos = require("./curso");
//console.log(estudantes);

let aluno1 = new estudantes.Aluno("Jessica", 2, [7.5, 8, 9]);
let aluno2 = new estudantes.Aluno("Emerson", 4, [6, 7, 8]);
let aluno3 = new estudantes.Aluno("Vitor", 1, [3.5, 5, 7]);
let aluno4 = new estudantes.Aluno("Camila", 5, [5, 4, 6.7]);
let aluno5 = new estudantes.Aluno("Henrique", 0, [7, 3, 9]);

console.log(aluno1);
console.log(aluno1.calcularMedia());
console.log(aluno1.calcularFaltas());



// let curso001 = new estudos.Curso("Programação Imperativa", 7, 4);
// let curso002 = new estudos.Curso("Front End I", 6, 5);
// let curso003 = new estudos.Curso("Metodologias Ágeis", 8, 2);


// console.log(estudantes.calcularMedia(aluno1));
// console.log(estudantes.faltou(aluno1));
// console.log(estudantes.calcularMedia(aluno2));
// console.log(estudantes.faltou(aluno2));
// console.log(estudantes.calcularMedia(aluno3));
// console.log(estudantes.faltou(aluno3));
// console.log(estudantes.calcularMedia(aluno4));
// console.log(estudantes.faltou(aluno4));
// console.log(estudantes.calcularMedia(aluno5));
// console.log(estudantes.faltou(aluno5));

// console.log(estudantes.faltou(aluno5)); // O número de faltas aumenta mais 1

// let listaEstudantes2 = []; // Outro jeito de resolver
// listaEstudantes.push(aluno1);
// listaEstudantes.push(aluno2);
// listaEstudantes.push(aluno3);
// listaEstudantes.push(aluno4);
// listaEstudantes.push(aluno5);
// console.log(listaEstudantes2);

let listaEstudantes = [aluno1, aluno2, aluno3, aluno4, aluno5];
//console.log(listaEstudantes);

module.exports = listaEstudantes;

//console.log(curso1);