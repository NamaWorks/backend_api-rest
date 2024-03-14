const { getMovies, getMovieById, postElement, updateElement, deleteElement } = require("../controllers/movies_controllers")

const moviesRouter = require("express").Router()

moviesRouter.get("/", getMovies)
moviesRouter.get("/:id", getMovieById)
moviesRouter.post("/", postElement)
moviesRouter.put("/:id", updateElement)
moviesRouter.delete("/:id", deleteElement)

module.exports = moviesRouter
