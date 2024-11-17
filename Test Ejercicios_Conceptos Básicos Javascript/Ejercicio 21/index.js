const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]

function categorizeUsers(usersArray) {
  console.log('Usuarios menores de edad:')
  for (const user of usersArray) {
    if (user.years < 18) {
      console.log(user.name)
    }
  }

  console.log('Usuarios mayores de edad:')
  for (const user of usersArray) {
    if (user.years >= 18) {
      console.log(user.name)
    }
  }
}

categorizeUsers(users)

// Usuarios menores de edad: Natasha - Khamala
//Usuarios mayores de edad: Tony - Peter -Bruce
