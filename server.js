//loadup the express framework and body parser helper
const express = require("express");
const bodyParser = require("body-parser");

// Create an instance of the express to server our end points
const app = express();

// We will loadup the node built in file system helper library to serve JSON files
const fs = require("fs");

// Configure out express intance with some body parser settings include handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configre routes
const routes = require("./routes/routes")(app, fs);

// Load the server on port 3001
const server = app.listen(3001, () => {
  console.log("listening on port %s...", server.address().port);
});
