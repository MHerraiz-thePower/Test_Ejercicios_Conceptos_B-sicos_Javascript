function findLongestWord(param) {
  let longestWord = ''

  for (let word of param) {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  }

  return longestWord
}

const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
console.log(findLongestWord(avengers)) // Imprime: Captain A.
