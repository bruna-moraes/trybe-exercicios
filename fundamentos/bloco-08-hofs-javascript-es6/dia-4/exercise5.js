const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names
    .reduce((acc, name) => {
      return acc + name.split('')
        .reduce((acc, letter) => {
          if(letter === 'A' || letter === 'a') return acc + 1
          return acc
        }, 0)
    }, 0)
}

console.log(containsA());