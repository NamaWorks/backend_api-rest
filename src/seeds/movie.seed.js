const mongoose = require("mongoose")
const Movie = require("../models/Movie")

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    mainActor: "Tim Robbins"
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    mainActor: "Marlon Brando"
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    mainActor: "Christian Bale"
  },
  {
    title: "The Godfather Part II",
    director: "Francis Ford Coppola",
    year: 1974,
    mainActor: "Al Pacino"
  },
  {
    title: "12 Angry Men",
    director: "Sidney Lumet",
    year: 1957,
    mainActor: "Henry Fonda"
  },
  {
    title: "Schindler's List",
    director: "Steven Spielberg",
    year: 1993,
    mainActor: "Liam Neeson"
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    year: 2003,
    mainActor: "Elijah Wood"
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    mainActor: "John Travolta"
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    director: "Peter Jackson",
    year: 2001,
    mainActor: "Elijah Wood"
  },
  {
    title: "The Good, the Bad and the Ugly",
    director: "Sergio Leone",
    year: 1966,
    mainActor: "Clint Eastwood"
  },
  {
    title: "Dune: Part Two",
    director: "Denis Villeneuve",
    year: 2024,
    mainActor: "Timothée Chalamet"
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    mainActor: "Tom Hanks"
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    director: "Peter Jackson",
    year: 2002,
    mainActor: "Elijah Wood"
  },
  {
    title: "Fight Club",
    director: "David Fincher",
    year: 1999,
    mainActor: "Brad Pitt"
  },
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    mainActor: "Leonardo DiCaprio"
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    director: "Irvin Kershner",
    year: 1980,
    mainActor: "Mark Hamill"
  },
  {
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    year: 1999,
    mainActor: "Keanu Reeves"
  },
  {
    title: "Goodfellas",
    director: "Martin Scorsese",
    year: 1990,
    mainActor: "Robert De Niro"
  },
  {
    title: "One Flew Over the Cuckoo's Nest",
    director: "Milos Forman",
    year: 1975,
    mainActor: "Jack Nicholson"
  },
  {
    title: "Se7en",
    director: "David Fincher",
    year: 1995,
    mainActor: "Morgan Freeman"
  }
]


const movieDocuments = movies.map(movie => Movie(movie))
module.exports = movieDocuments

const feedSeedDB= async () => {
  try {
    await mongoose
      .connect(process.env.DB_URL)
      .then(async () => {
        const allMovies = await Movie.find();

        if(allMovies.length){
          await Movie.collection.drop()
        }
      })
      .catch((err) => console.log(`error creating data: ${err}`))
      .then(async () => {
        await Movie.insertMany(movieDocuments)
      })
      .finally(()=> mongoose.disconnect()) // Esta línea la ejecutaremos para desconectarnos de la DB
    // console.log(`connection to DB successfull`)
  } catch (error) {
    console.log(`error connecting to DB`)
  }
}

module.exports = {feedSeedDB}