const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const SECRET = "secretkey";

// Register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      email,
      password: hashed
    });

    await user.save();

    res.json({ message: "User created" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json("User not found");

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json("Wrong password");

    const token = jwt.sign({ id: user._id }, SECRET);

    res.json({ token, userId: user._id });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;