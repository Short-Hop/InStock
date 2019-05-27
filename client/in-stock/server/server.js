const fs = require("fs");
const Router = require("../server/routes");

let data = JSON.parse(fs.readFileSync("data.json", "utf8"));

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const uuid = require("uuidv4");

app.use(bodyParser());
app.use(cors());
app.use(express.json());
app.use("/inventory", Router);
app.use("/location", Router);
app.use("/location/warehouseId", Router);

function generateUniqueId() {
  return Math.random()
    .toString(36)
    .substr(2, 9);
}

//data
const warehouses = data;

// get routes
app.get("/", (req, res) => {
  res.json(warehouses);
});

app.get("/inventory", (req, res) => {
  res.json(warehouses);
});

app.get("/location", (req, res) => {
  res.json(warehouses);
});

app.get("/warehouses", (req, res) => {
  res.json(warehouses);
});

//post routes
// app.post("/warehouses", (req, res) => {
//   let newWarehouse = {
//     warehouse: "",
//     address: "",
//     location: "",
//     name: "",
//     position: "",
//     phone: "",
//     email: "",
//     description: ""
//   };
//   warehouses.push(newWarehouse);
//   res.json(newWarehouse);
// });

// listening
app.listen(8080, (req, res) => {
  console.log("Listening... on 8080");
});
