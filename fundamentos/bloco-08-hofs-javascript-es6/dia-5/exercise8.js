// escreva greet abaixo

const greet = (name = 'Friend', greet = 'Hi') => `${greet} ${name}`

console.log(greet())
console.log(greet('John'))
console.log(greet('John', 'Good morning'))
console.log(greet('Isabela', 'Oi'))