require("dotenv").config()
const express = require("express")

const { connectDB } = require("./src/config/db")
const moviesRouter = require("./src/api/routes/movies_routes")
console.log(`index working properly`)

const app = express()


connectDB()

app.use(express.json())


app.use("/api/v01/movies", moviesRouter)

app.use("*", (req, res, next)=> {
  return res.status(404).json("route not found")
}) 

app.listen(3000, ()=> {
  console.log(`server deployed at http://localhost:3000/`)
})



//!MOVIE TO ADD/UPDATE/DELETE

// {
// 	"title": "La sirenita",
//   "director": "Ariel",
//   "year": 1890,
//   "mainActor": "Gaston"
// }