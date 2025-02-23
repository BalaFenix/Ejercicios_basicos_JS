function nameFinder(nameList, nameToFind) {
  return nameList.includes(nameToFind)
    ? `${nameToFind} está en la lista.`
    : `${nameToFind} no está en la lista.`
} //aprovechamos para utilizar las abreviaturas de if ? y else :
//Comprobamos que la función está bien
const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

console.log(nameFinder(names, 'Tony'))
console.log(nameFinder(names, 'Thor'))
