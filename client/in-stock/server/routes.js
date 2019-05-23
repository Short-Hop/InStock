const express = require("express");
const router = express.Router();
const inventoryData = require("../server/server");
const locationData = require("../server/server");
const warehouseIdData = require("../server/server");

router.route("/inventory").get((req, res) => {
  res.json(inventoryData);
});

router.route("/location").get((req, res) => {
  res.json(locationData);
});

router.route("/location/:warehouseId", (req, res) => {
  res.json(warehouseIdData);
});

module.exports = router;
