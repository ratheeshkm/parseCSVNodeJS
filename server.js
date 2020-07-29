//loadup the express framework and body parser helper
const express = require("express");
const bodyParser = require("body-parser");

// Create an instance of the express to server our end points
const app = express();

// We will loadup the node built in file system helper library to serve JSON files
const fs = require("fs");
// Add cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Configure out express intance with some body parser settings include handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configre routes
const routes = require("./routes/routes")(app, fs);

// Load the server on port 3001
/*
const server = app.listen(3001, () => {
  console.log("listening on port %s...", server.address().port);
});
*/

var port = process.env.PORT || 3001;
app.listen(port, "0.0.0.0", function () {
  console.log("Listening on Port 3001");
});
