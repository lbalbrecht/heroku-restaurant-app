// Dependencies = file libraries needed for server functions
var express = require("express");
var path = require("path");

// Sets up Express
var app = express();
const PORT = process.env.PORT ||3000;

// Tells express to process JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
// Routes

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

// Tells server to listens to connection between host and port
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });