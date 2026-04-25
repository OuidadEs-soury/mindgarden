const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 CONNECT TO DATABASE
mongoose.connect("mongodb://127.0.0.1:27017/mindgarden")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
app.use("/habits", require("./routes/habits"));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});