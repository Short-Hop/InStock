const express = require("express");
const router = express.Router();
const fileName = __dirname + "/warehouseData.json";
let warehouseData = require(fileName);
const helper = require("../../helper/helper");
const fs = require("fs");

// Get all warehouses
router.get("/", (req, res) => {
  res.json(warehouseData);
});

// Get one warehouse using the id
router.get("/:id", (req, res) => {
  const found = warehouseData.find(
    warehouse => warehouse.id === parseInt(req.params.id)
  );
  if (found) {
    res.json(
      warehouseData.filter(
        warehouse => warehouse.id === parseInt(req.params.id)
      )[0]
    );
  } else {
    res
      .status(400)
      .json({ errorMessage: `Warehouse with ID:${req.params.id} not found` });
  }
});

router.post("/product", (req, res) => {
  let product = req.body;
  const found = warehouseData.find(
    warehouse => warehouse.id === warehouseData.length - 1
  );
  console.log(warehouseData.length - 1);
  if (found) {
    const newProduct = {
      id: helper.createNewId(found.products),
      warehouseId: found.id,
      name: product.product,
      shortDescription: product.description,
      longDescription: product.description,
      refNumber: "2222222",
      location: {
        city: product.city,
        country: product.country
      },
      orderDate: product.ordered,
      orderBy: "",
      quantity: product.quantity,
      categories: [],
      status: product.inStock
    };
    console.log(newProduct);
    found.products.push(newProduct);
    helper.writeJSONFile(fileName, warehouseData);
  }
});

router.get("/:id/product/:productId", (req, res) => {
  let found = warehouseData.find(
    warehouse => warehouse.id === parseInt(req.params.id)
  );
  if (found) {
    found = found.products.filter(
      product => req.params.productId == product.id
    );

    if (found[0]) {
      res.send(found[0]);
    } else {
      res
        .status(400)
        .send(
          `Product with ID:${req.params.productId} not found in Warehouse ${
            req.params.id
          }`
        );
    }
  } else {
    res
      .status(400)
      .json({ errorMessage: `Warehouse with ID:${req.params.id} not found` });
  }
});

router.delete("/:id/product/:productId", (req, res) => {
  let newData = warehouseData;
  let found = warehouseData.find(
    warehouse => warehouse.id === parseInt(req.params.id)
  );
  let position;

  if (found) {
    position = newData.indexOf(found);
    console.log("index: " + position);

    remainingProducts = found.products.filter(
      product => req.params.productId != product.id
    );

    found.products = remainingProducts;

    newData[position] = found;

    warehouseData = newData;

    helper.writeJSONFile(fileName, warehouseData);

    res.send(warehouseData);
  } else {
    res
      .status(400)
      .json({ errorMessage: `Warehouse with ID:${req.params.id} not found` });
  }
});

router.post("/", (req, res) => {
  let warehouseId = helper.createNewId(warehouseData);
  const newWarehouse = {
    id: warehouseId,
    name: req.body.warehouse,
    number: warehouseId,
    address: req.body.address,
    contact: req.body.contact,
    description: req.body.description,
    categories: [
      "Industrial",
      "Automotive",
      "Heavy",
      "Mechanical",
      "Engineering",
      "Transportation",
      "Sales"
    ],
    products: []
  };
  warehouseData.push(newWarehouse);
  helper.writeJSONFile(fileName, warehouseData);
  res.send("Warehouse correctly added.");
  res.redirect("/warehouses");
  console.log(req.body.warehouse);
});

module.exports = router;
