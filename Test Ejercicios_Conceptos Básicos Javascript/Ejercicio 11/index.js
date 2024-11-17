const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']

function averageWord(param) {
  let totalSum = 0
  let count = 0

  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === 'number') {
      totalSum += param[i]
    } else if (typeof param[i] === 'string') {
      totalSum += param[i].length
    }
    count++
  }

  return totalSum / count
}

console.log(averageWord(mixedElements)) // Resultado: 4.555555555555555
