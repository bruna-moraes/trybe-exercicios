function sumElement(...numbers) {
  return numbers
    .reduce((acc, number) => acc + number)
}

console.log(sumElement(2, 3, 5, 2, 3));