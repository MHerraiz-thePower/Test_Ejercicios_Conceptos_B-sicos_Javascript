// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers[0]) // Imprime: HULK

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers2 = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
avengers2[0] = 'IRONMAN' // Cambia el primer elemento a IRONMAN
console.log(avengers2) // Imprime: ["IRONMAN", "SPIDERMAN", "BLACK PANTHER"]

// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers3 = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers3.length) // Imprime: 3

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array
const rickAndMortyCharacters1 = ['Rick', 'Beth', 'Jerry']
rickAndMortyCharacters1.push('Morty', 'Summer') // Añade Morty y Summer
console.log(rickAndMortyCharacters1[rickAndMortyCharacters1.length - 1]) // Imprime: Summer

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters2 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters2.pop() // Elimina el último elemento (Lapiz Lopez)
console.log(rickAndMortyCharacters2[0]) // Imprime: Rick
console.log(rickAndMortyCharacters2[rickAndMortyCharacters2.length - 1]) // Imprime: Summer

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters3 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters3.splice(1, 1) // Elimina el segundo elemento (Beth)
console.log(rickAndMortyCharacters3) // Imprime: ["Rick", "Jerry", "Morty", "Summer", "Lapiz Lopez"]
