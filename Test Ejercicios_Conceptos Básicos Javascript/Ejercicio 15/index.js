const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinrurón de Orión',
  'AC/DC Camiseta'
]

function findCamiseta(productsArray) {
  for (const product of productsArray) {
    if (product.includes('Camiseta')) {
      console.log(product)
    }
  }
}

findCamiseta(products)

// Camiseta de Pokemon
// Camiseta de Basket
// AC/DC Camiseta
