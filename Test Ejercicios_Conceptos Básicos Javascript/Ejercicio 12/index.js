const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

function removeDuplicates(param) {
  return [...new Set(param)] // Use un Set para eliminar duplicados
}

console.log(removeDuplicates(duplicates)) // Resultado: [  'sushi',   'pizza',  'burger',  'potatoe',  'pasta',   'ice-cream',  'chicken', 'onion rings',  'soda']
