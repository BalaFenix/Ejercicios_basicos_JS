function repeatCounter(list) {
  const count = {}

  list.forEach((word) => {
    count[word] = (count[word] || 0) + 1
  })

  let result = ''
  for (let word in count) {
    result += `${word}:${count[word]}, `
  }

  return result.slice(0, -2)
}

// Probamos si la función es correcta
const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
]

console.log(repeatCounter(words))
