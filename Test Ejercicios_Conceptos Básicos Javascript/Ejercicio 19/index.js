const toys = [
  { id: 5, name: 'Buzz MyYear' },
  { id: 11, name: 'Action Woman' },
  { id: 23, name: 'Barbie Man' },
  { id: 40, name: 'El gato con Guantes' },
  { id: 40, name: 'El gato felix' }
]

function removeCatToys(toysArray) {
  for (let i = toysArray.length - 1; i >= 0; i--) {
    if (toysArray[i].name.includes('gato')) {
      toysArray.splice(i, 1)
    }
  }

  console.log(toysArray)
}

removeCatToys(toys)

// [  { id: 5, name: 'Buzz MyYear' },  { id: 11, name: 'Action Woman' },  { id: 23, name: 'Barbie Man' }]
