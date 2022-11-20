const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const login = require('./routes/loginRoute') //login
const logout = require('./routes/logoutRoute') //logout
const userRouter = require("./routes/userRouter"); // importing user routes
const profile = require("./routes/userProfileRoute")// Get user profile


require("./database/index.js"); //load databse
app.use(express.json()).use(cors());
app.use(morgan('tiny'));
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Grit Grammarly 🙌" });
});
app.use('/api/v1/login', login)
app.use('/api/v1/logout', logout)
app.use('/api/v1/user-profile/:id', profile)
app.delete("/user", userRouter);

module.exports = app;
