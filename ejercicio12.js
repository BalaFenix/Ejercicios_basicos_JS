function removeDuplicates(list) {
  return [...new Set(list)]
}
//Probamos si ha funcionado la función para eliminar palabras repetidas
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

console.log(removeDuplicates(duplicates))
