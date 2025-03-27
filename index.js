require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");

//initialize app
const app = express();
connectDB();

// middleware
app.use(express.json());
app.use(cors());

const PORT = 8000;

app.listen(PORT, () => console.log(`app listening on ${PORT}`));
