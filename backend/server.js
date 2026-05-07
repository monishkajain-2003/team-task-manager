const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const authRoutes = require("./routes/authRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)

app.get("/", (req, res) => {
  res.send("API Running")
})

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected")

  app.listen(3001, () => {
    console.log("Server Running on Port 5000")
  })
})
.catch((err) => {
  console.log(err)
})