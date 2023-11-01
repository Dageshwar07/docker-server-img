const express = require("express");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const users = [];

// *************************************************************************************
//------------------------------------Varify Token Module-------------------------------
// *************************************************************************************
const verifyUserToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized request");
  }
  const token = req.headers["authorization"].split(" ")[1] || req.body.token;
  if (!token) {
    return res.status(401).send("Access denied. No token provided.");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(400).send("Invalid token.");
  }
};

// *************************************************************************************
//------------------------------------Test Module-----------------------------------
// *************************************************************************************
app.get("/", (req, res) => {
  res.send("hello docker");
});

app.get("/api/users", verifyUserToken, (req, res) => {
  res.json(users);
});

// *************************************************************************************
//------------------------------------Register Module-----------------------------------
// *************************************************************************************

app.post("/api/register", async (req, res) => {
  const user = req.body;
  if (!user.email || !user.password) {
    return res.status(400).send("Username and password are required.");
  }
  const hash = await bcrypt.hash(user.password, 10);
  user.password = hash;
  users.push(user);
  res.json(user);
});

// *************************************************************************************
//------------------------------------Login Module--------------------------------------Server is running on port
// *************************************************************************************
app.post("/api/login", async (req, res) => {
  const user = req.body;
  //check if user exists
  const foundUser = users.find((user) => user.email === req.body.email);
  if (!foundUser) {
    return res.status(400).send("Invalid email or password");
  }
  //check if password is correct
  const isPasswordValid = await bcrypt.compare(
    user.password,
    foundUser.password
  );
  if (!isPasswordValid) {
    return res.status(400).send("Invalid email or password");
  }

  //**************************************************************************************
  //------------------------------------Assign Token Module-------------------------------
  // *************************************************************************************

  const token = jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
});

//**************************************************************************************
//------------------------------------Server Module-------------------------------------
// *************************************************************************************
const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server is running on port ${port}` );
});

const token = jwt.sign({ user }, process.env.JWT_SECRET, {
  expiresIn: "1h",
});