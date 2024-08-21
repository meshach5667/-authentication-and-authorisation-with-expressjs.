"use strict";
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4001; // Fixing the PORT assignment
app.use(morgan("tiny"));

const corsOptions = {
  origin: 'https://5500-meshach5667-authenticat-z1bqzyador3.ws-eu115.gitpod.io', // Replace with your frontend's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Enable if you need to send cookies or authorization headers
};
app.use(cors(corsOptions));

app.use(cookieParser(process.env.TOKEN_KEY));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// App Routes
app.use("/auth", require("./routes/authHandling"));
app.use("/admin", require("./routes/adminHandling"));

var server = app.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}`);
});
