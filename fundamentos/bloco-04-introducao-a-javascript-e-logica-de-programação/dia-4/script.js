// EXERCICIO 1 
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

// const chaveQueEuQuero = 'personagem'

// console.log('Bem vinda,' + info.personagem);

//EXERCICIO 2
// info.recorrente = 'Sim';
// info2.recorrente = 'Sim';

// console.log(info, info2);

//EXERCICIO 3
// for(let index in info) {
//   console.log(index);
// }

//EXERCICIO 4
// for(let index in info) {
//   console.log(info[index]);
// }

//EXERCICIO 5
// for(let index in info) {
//   if(index === 'recorrente' &&
//     info[index] === 'Sim' &&
//     info2[index] === 'Sim') {
//       console.log('Ambos Recorrentes');
//     } else {
//       console.log(index + ": " + info[index] + ' e ' + info2[index]);
//     }
// }

//EXERCICIO 6
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo);