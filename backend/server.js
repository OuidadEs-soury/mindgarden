const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/habits", require("./routes/habits"));

// Connect DB
mongoose.connect("mongodb://127.0.0.1:27017/mindgarden")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});