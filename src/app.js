const express = require("express");
const cors = require("cors");
const app = express();
const properties = require("./properties.json");

app.use(cors());
app.use(express.json());

// FIXME: Create an endpoint that returns all the properties that are not private

module.exports = app;
