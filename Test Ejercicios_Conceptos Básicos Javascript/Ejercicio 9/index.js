function sumAll(param) {
  let total = 0

  for (let num of param) {
    total += num
  }

  return total
}

const numbers = [1, 2, 3, 5, 45, 37, 58]
console.log(sumAll(numbers)) // Imprime: 151
