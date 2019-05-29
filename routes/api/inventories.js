const express = require("express");
const router = express.Router();
const fileName = __dirname + "/warehouseData.json";
let warehouseData = require(fileName);
const helper = require("../../helper/helper");

// Get all Inventory
router.get("/", (req, res) => {
  let allProducts = [];
  warehouseData.forEach(warehouse => {
    warehouse.products.forEach(product => {
      allProducts.push(product);
    });
  });
  res.json(allProducts);
});

router.get("/:id", (req, res) => {
  let allProducts = [];
  warehouseData.forEach(warehouse => {
    warehouse.products.forEach(product => {
      allProducts.push(product);
    });
  });

  const found = allProducts.find(
    product => product.id === parseInt(req.params.id)
  );
  if (found) {
    res.json(
      allProducts.filter(product => product.id === parseInt(req.params.id))
    );
  } else {
    res
      .status(404)
      .json({ errorMessage: `Product with ID:${req.params.id} not found` });
  }
});

module.exports = router;
