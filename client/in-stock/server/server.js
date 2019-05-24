const fs = require("fs");
const Router = require("../server/routes");

let data = JSON.parse(fs.readFileSync("data.json", "utf8"));

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser());
app.use(cors());
app.use(express.json());
app.use("/inventory", Router);
app.use("/location", Router);
app.use("/location/warehouseId", Router);

//data
const warehouses = data;

// get routes
app.get("/", (req, res) => {
  res.json(warehouses);
  console.log(warehouses);
});

app.get("/inventory", (req, res) => {
  res.json(warehouses);
});

app.get("/location", (req, res) => {
  res.json(warehouses);
});

app.get("/warehouses", (req, res) => {
  res.json(warehouses);
  console.log(warehouses[3].id);
});

app.get("/warehouses/:name", (req, res) => {
  res.json(infoController.getInfo(req.params.name));
});

//get warehouse id
const inventoryController = {
  getInventory: id => {
    console.log(id);
    const eachInventory = warehouses.find(
      eachInventory => eachInventory.id.lowerCase() === id.lowerCase()
    );
    console.log(eachInventory);
    return eachInventory;
  }
};

//get inventory information
const infoController = {
  getInfo: id => {
    console.log(id);
    const inventory = inventoryController.getInventory(id);
    console.log(inventory);
    const info = {
      name: inventory.name,
      street: inventory.address.street,
      postalCode: inventory.address.postalCode
    };
    return info;
  }
};
//post routes

// listening
app.listen(8080, (req, res) => {
  console.log("Listening... on 8080");
});
