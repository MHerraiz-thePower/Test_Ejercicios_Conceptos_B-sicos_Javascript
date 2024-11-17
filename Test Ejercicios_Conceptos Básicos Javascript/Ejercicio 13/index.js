const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

function finderName(param, name) {
  const index = param.indexOf(name)

  if (index !== -1) {
    return { exists: true, position: index }
  } else {
    return { exists: false }
  }
}

const result1 = finderName(nameFinder, 'Tony')
console.log(result1) // { exists: true, position: 2 }

const result2 = finderName(nameFinder, 'Sam')
console.log(result2) // { exists: false }
