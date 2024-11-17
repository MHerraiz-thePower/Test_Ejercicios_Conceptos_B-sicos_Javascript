const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

function calculateTotalSales(productsArray) {
  let totalSales = 0

  for (const product of productsArray) {
    totalSales += product.sellCount
  }

  return totalSales
}

const total = calculateTotalSales(products)
console.log('Total de ventas:', total)

// Total de ventas: 341
