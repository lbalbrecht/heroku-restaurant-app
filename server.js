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

// array variables to hold data
const reservationInfo = [
  {
    name: "",
    phoneNumber: "",
    email: "",
    ID: "",
  },
];

const waitingListInfo = [
  {
    name: "",
    phoneNumber: "",
    email: "",
    ID: "",
  },
]
// displays reservation info
app.get("/api/reservationInfo", function(req, res) {
  return res.json(reservationInfo);
});
// displays waiting list info
app.get("/api/waitingListInfo", function(req, res) {
  return res.json(waitingListInfo);
});


// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  // Create New Reservation Info
  app.post("/api/reservationInfo", function(req, res) {
    const newReservation = req.body;
    console.log(newReservation);
    reservationInfo.push(newReservation);
    res.json(newReservation);
  });

  app.post("/api/waitingListInfo", function(req, res) {
    const newWaitingList = req.body;
    console.log(newWaitingList);
    waitingListInfo.push(newWaitingList);
    res.json(newWaitingList);
  });

// Tells server to listens to connection between host and port
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });