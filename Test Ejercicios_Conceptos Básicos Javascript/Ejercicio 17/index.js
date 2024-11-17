const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}

function printAlienData(alienObject) {
  for (const key in alienObject) {
    console.log(`${key}: ${alienObject[key]}`)
  }
}

printAlienData(alien)
printAlienData(alien)

// name: Wormuck
// race: Cucusumusu
// planet: Eden
// weight: 259kg
// name: Wormuck
// race: Cucusumusu
// planet: Eden
// weight: 259kg
