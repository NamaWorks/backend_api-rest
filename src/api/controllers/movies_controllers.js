const Movie = require("../models/Movie")

const getMovies = async (req, res, next) => {
  try {
    const allMovies = await Movie.find()
    return res.status(200).json(allMovies)
  } catch (error) {
    return res.status(400).json(`failed to get movies`)
};
};

const getMovieById = async (req, res, next) => {
  try {
    const { id } = req.params
    const movie = await Movie.findOne({_id: id})
    return res.status(200).json(movie)
  } catch (error) {
    return res.status(400).json(`failed to get movie by id`)
  }
}

const postElement = async (req, res, next)=> {
  try {
    const newMovie = new Movie(req.body)
    const movieSaved = await newMovie.save()
    return res.status(201).json(movieSaved)
  } catch (error) {
    res.status(400).json(`failed to post element`)
  }
}

const updateElement = async (req,res,next)=> {
  try {
    const { id } = req.params

    const newMovie = new Movie(req.body)

    newMovie._id = id

    const movieUpdated = await Movie.findByIdAndUpdate(id, newMovie, {new:true})
    return res.status(200).json(movieUpdated)
  } catch (error) {
    res.status(400).json(`failed to update element`)
  }
}

const deleteElement = async (req,res,next) => {
  try {
    const { id } = req.params
  const movieToDelete = await Movie.findById(id)
    await Movie.findByIdAndDelete(id)
    return res.status(200).json(`you removed: ${movieToDelete}`)
  } catch (error) {
    res.status(400).json(`failed to remove element`)
  }
}

module.exports = { getMovies, getMovieById, postElement, updateElement, deleteElement }