require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userRoutes = require("./routes/user")

const app = express();
const port = process.env.PORT || 9000;
//middleware
app.use(express.json())
app.use(cors())
app.use("/api", userRoutes)

//routes
app.get('/', (req, res) => {
  res.send("Welcome to SEER API CONSTANCIAS")
})

//mongodb connection

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("🍃 Connected to Mongodb Atlas"))
  .catch((error) => console.error(error))
app.listen(port, () => console.log(`server listening on port 🚀 `, port))