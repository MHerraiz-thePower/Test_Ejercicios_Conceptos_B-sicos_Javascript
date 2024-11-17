const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

function calculateSalesAverage(productsArray) {
  let totalSales = 0

  for (const product of productsArray) {
    totalSales += product.sellCount
  }

  const averageSales = totalSales / productsArray.length
  return averageSales
}

const average = calculateSalesAverage(products)
console.log('Media de ventas:', average)

// Media de ventas: 85.25
