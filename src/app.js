const express = require("express");
const cors = require("cors");

const app = express();

// Config App
app.use(cors());
app.use(express.json());

module.exports = app;
