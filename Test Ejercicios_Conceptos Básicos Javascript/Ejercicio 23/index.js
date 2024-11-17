const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]

function categorizeMovies(moviesArray) {
  const smallMovies = []
  const mediumMovies = []
  const largeMovies = []

  for (const movie of moviesArray) {
    if (movie.durationInMinutes < 100) {
      smallMovies.push(movie)
    } else if (
      movie.durationInMinutes >= 100 &&
      movie.durationInMinutes < 200
    ) {
      mediumMovies.push(movie)
    } else {
      largeMovies.push(movie)
    }
  }

  console.log('Películas pequeñas:', smallMovies)
  console.log('Películas medianas:', mediumMovies)
  console.log('Películas grandes:', largeMovies)
}

categorizeMovies(movies)

// Películas pequeñas: []
// Películas medianas: [  { name: 'Titan A.E.', durationInMinutes: 130 },  { name: Inception', durationInMinutes: 165 },  { name: 'Terminator', durationInMinutes: 140 }]

//Películas grandes: [  { name: 'Nightmare before Christmas', durationInMinutes: 225 },  { name: 'The Lord of the Rings', durationInMinutes: 967 },  { name: 'Star Wars: A New Hope', durationInMinutes: 214 }]
