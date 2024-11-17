// Completa la función que tomando dos números como argumento devuelva el más alto.
// function sum(numberOne , numberTwo) {
// insert code
//}
numberOne = 10
numberTwo = 20

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne // Devuelve numberOne si es mayor
  } else {
    return numberTwo // Devuelve numberTwo en caso contrario
  }
}
console.log(sum(numberOne, numberTwo)) // Imprime: 20
