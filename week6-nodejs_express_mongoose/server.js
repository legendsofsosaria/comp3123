const express = require("express")
const booksRoutes = require("./routes/books")
const userRoutes = require("./routes/user")
const mongoose = require('mongoose')

const dotenv = require("dotenv");
dotenv.config();

const app = express()

const SERVER_PORT = process.env.SERVER_PORT || 3001
// Get the MongoDB connection string from environment variables or use a default value
const CONNECTION_URL = process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase"

app.use(express.json())
app.use(express.urlencoded())

mongoose.connect(CONNECTION_URL)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))


app.use("/api/v1", booksRoutes)
app.use("/api/v1", userRoutes)

app.route("/")
    .get((req, res) => {
        res.send("<h1>MogoDB + Mongoose Example</h1>")
    })

app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})
