const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");

const port = process.env.PORT || 8000;
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/carts", require("./routes/cartRoutes"));

app.listen(port, () => console.log(`http://localhost:${port}`));
