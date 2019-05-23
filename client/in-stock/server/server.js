const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser());
app.use(cors());
app.use(express.json());

//data
const warehouses = [];

// get routes
app.get("/", (req, res) => {
  res.json(warehouses);
});

app.get("/inventory", (req, res) => {
  res.json(warehouse);
});

app.get("/location", (req, res) => {
  res.json(warehouses);
});

//post routes

// listening
app.listen(8080, (req, res) => {
  console.log("Listening... on 8080");
});
