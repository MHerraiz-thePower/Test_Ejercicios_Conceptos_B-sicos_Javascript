const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

function replaceNonVeganWithFruits(foodArray, fruitArray) {
  const resultSchedule = []
  let fruitIndex = 0

  for (let i = 0; i < foodArray.length; i++) {
    if (foodArray[i].isVegan) {
      resultSchedule.push(foodArray[i])
    } else if (fruitIndex < fruitArray.length) {
      resultSchedule.push({ name: fruitArray[fruitIndex], isVegan: true })
      fruitIndex++
    }
  }

  return resultSchedule
}

const finalSchedule = replaceNonVeganWithFruits(foodSchedule, fruits)
console.log(finalSchedule)

// [  { name: 'Heura', isVegan: true },  { name: 'Strawberry', isVegan: true },  { name: 'Tofu', isVegan: true },  { name: 'Banana', isVegan: true },  { name: 'Rice', isVegan: true },  { name: 'Pasta', isVegan: true }]
