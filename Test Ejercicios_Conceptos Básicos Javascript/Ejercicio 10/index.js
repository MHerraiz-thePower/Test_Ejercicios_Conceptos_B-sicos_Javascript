function average(param) {
  let total = 0

  for (let num of param) {
    total += num
  }
  return total / param.length
}

const numbers = [12, 21, 38, 5, 45, 37, 6]
console.log(average(numbers)) // Imprime: 23.428571428571427
