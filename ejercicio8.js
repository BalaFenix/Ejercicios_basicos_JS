function findLongestWord(stringList) {
  let longestWord = ''

  for (let i = 0; i < stringList.length; i++) {
    if (stringList[i].length > longestWord.length) {
      longestWord = stringList[i]
    }
  }

  return longestWord
}
//Para poder imprimir por consola necesitamos crear un array que recorrer y ver si funciona
const avengers = ['Hulk', 'Thor', 'Iron Man', 'Capitan America']

console.log(findLongestWord(avengers))
