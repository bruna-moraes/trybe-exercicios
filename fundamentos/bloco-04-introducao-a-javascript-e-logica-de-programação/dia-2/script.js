// ARRAY E LOOP FOR
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//EXERCICIO 1
// for(let index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// }

// EXERCICIO 2
// let totalValue = 0

// for(let index = 0; index < numbers.length; index += 1) {
//   totalValue += numbers[index]
// }

// console.log(totalValue);

//EXERCICIO 3
// let totalValue = 0

// for(let index = 0; index < numbers.length; index += 1) {
//   totalValue += numbers[index]
// }

// totalValue = totalValue / numbers.length 

// console.log(totalValue);

//EXERCICIO 4
// let totalValue = 0

// for(let index = 0; index < numbers.length; index += 1) {
//   totalValue += numbers[index]
// }

// totalValue = totalValue / numbers.length 
// if(totalValue > 20) {
//   console.log("Valor maior que 20");
// } else {
//   console.log("Valor menor ou igual a 20");
// }

//EXERCICIO 5
// let biggerValue = numbers[0]

// for(let index = 1; index < numbers.length; index += 1) {
//   if(numbers[index] > biggerValue) {
//     biggerValue = numbers[index]
//   }
// }

// console.log(biggerValue);

//EXERCICIO 6
// let totalOdds = 0
// for(let index = 0; index < numbers.length; index += 1) {
//   if(numbers[index] % 2 === 1) {
//     totalOdds += 1
//   }
// }

// if(totalOdds === 0) {
//   console.log("Nennhum valor ímpar encontrado");
// } else {
//   console.log(totalOdds);
// }

// EXERCICIO 7
// let lowestValue = numbers[0]

// for(let index = 1; index < numbers.length; index += 1) {
//   if(numbers[index] < lowestValue) {
//     lowestValue = numbers[index]
//   }
// }

// console.log(lowestValue);

// EXERCICIO 8
let count = []

for(let index = 1; index <= 25; index += 1) {
  count.push(index)
}

// console.log(count);

//EXERCICIO 9
let divisionResult = []

for(let index = 0; index < count.length; index += 1) {
  divisionResult.push(count[index] / 2)
}

console.log(divisionResult);