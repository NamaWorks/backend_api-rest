const mongoose = require("mongoose")

const Schema = mongoose.Schema

const movieSchema = new Schema(
  {
    title: {type:String, require:true},
    director: {type:String, require:true},
    year: {type: Number, require: true},
    mainActor: {type:String}
  },
  {
    timestamps: true,
  }
)

const Movie = mongoose.model("Movie", movieSchema, "movies")
module.exports = Movie