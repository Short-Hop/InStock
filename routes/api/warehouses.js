const express = require("express");
const router = express.Router();
const fileName = __dirname + "/warehouseData.json";
let warehouseData = require(fileName);
const helper = require("../../helper/helper");

// Get all warehouses
router.route("/").get((req, res) => {
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
      )
    );
  } else {
    res
      .status(400)
      .json({ errorMessage: `Warehouse with ID:${req.params.id} not found` });
  }
});

module.exports = router;
