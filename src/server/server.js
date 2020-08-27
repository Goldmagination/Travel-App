// Setup empty JS object to act as endpoint for all routes
let projectData = {};

const express = require("express");

const bodyParser = require("body-parser");

const app = express();
// Require Express to run server and routes

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");

app.use(cors());
app.use(express.static("dist"));
// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static("website"));

//POST route

const data = [];
app.post("/add", sendInfo);

function sendInfo(req, res) {
  projectData["date"] = req.body.date;
  projectData["temp"] = req.body.temp;
  projectData["content"] = req.body.content;
  res.send(projectData);
}

//GET route

app.get("/all", getInfo);

function getInfo(req, res) {
  res.send(projectData);
}

// Setup Server

const port = 8000;

const server = app.listen(port, () => {
  console.log(`server running on localhost: ${port}`);
});
