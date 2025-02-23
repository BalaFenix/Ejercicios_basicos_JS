function averageWord(list) {
  let totalLength = 0
  let wordCount = 0

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'string') {
      totalLength += list[i].length
      wordCount++
    }
  }

  return wordCount > 0 ? totalLength / wordCount : 0
}
//Probamos la función
const mixedElements = [
  6,
  1,
  'Marvel',
  1,
  'hamburguesa',
  '10',
  'Prometeo',
  8,
  'Hola mundo'
]
console.log(averageWord(mixedElements))
