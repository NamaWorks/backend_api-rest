const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log(`conection with DB successful`)
  } catch (error) {
    console.log(`error connecting to DB`)
  }
}

module.exports = { connectDB }