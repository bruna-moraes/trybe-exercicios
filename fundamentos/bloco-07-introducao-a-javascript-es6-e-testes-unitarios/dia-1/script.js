// Exercicio 1
// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//     console.log(elseScope);
//   }
// }

// testingScope(true);

// Exercicio 2
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// oddsAndEvens.sort((a, b) => a - b)

// const numbers = oddsAndEvens.join(', ')

// console.log(`Os numeros ${numbers} se encontram ordenados de forma crescente!`);

// Exercicio 3
// Modo 1: Loop For

// const fatorial = (number) => {
//   let valueFatorial = 1

//   for(let index = 1; index <= number; index += 1) {
//     valueFatorial *= index
//   }

//   return valueFatorial  
// }

// Modo 2: Recursividade

// const fatorial = (number) => {
//   if(number === 1) {
//     return 1
//   }

//   return number * fatorial(number - 1)
// }

// Modo 3: Recursividade com return implícito e operador ternário

// const fatorial = (number) => number === 1 ? 1 : number * fatorial(number - 1)

// console.log(fatorial(4));

//Exercicio 4
const longestWord = (word) => {
  const wordsSeparated = word.split(' ')

  for(let index = 0; index < wordsSeparated.length; index += 1) {
    if()
    console.log(wordsSeparated[index].length);
  }
}
longestWord('O Euller é MARAVILHOSOOOO')