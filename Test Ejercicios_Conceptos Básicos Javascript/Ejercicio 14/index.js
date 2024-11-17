const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]

function repeatCounter(param) {
  const count = {}
  for (const word of param) {
    if (count[word]) {
      count[word]++
    } else {
      count[word] = 1
    }
  }

  return count
}

const result = repeatCounter(counterWords)
console.log(result)

//{ code: 4, repeat: 1, eat: 1, sleep: 2, enjoy: 2, upgrade: 1 }
