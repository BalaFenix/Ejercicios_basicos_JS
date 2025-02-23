function sumNumbers(numberList) {
  let sum = 0
  for (let i = 0; i < numberList.length; i++) {
    sum += numberList[i]
  }
  return sum
}
//Ejemplo de uso de la función
const numbers = [1, 2, 3, 5, 6, 7, 8]

console.log(sumNumbers(numbers))
