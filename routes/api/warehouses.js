const express = require("express");
const router = express.Router();
const fileName = __dirname + "/warehouseData.json";
let warehouseData = require(fileName);
const helper = require("../../helper/helper");

const DataController = {
  addWareHose: (id, newWarehouseData) => {
    warehouseData.push(newWarehouseData);
    return warehouseData;
  }
};

router.route("/").post((req, res) => {
  res.json(DataController.addWareHose(warehouseId, req.body));
});

// Get all warehouses
router.route("/").get((req, res) => {
  res.json(warehouseData);
  //    ONLY FOR TEST FOR CREATING WAREHOUSEID
  const newWarehouseId = helper.createNewId(warehouseData);
  console.log(newWarehouseId);
  //    ONLY FOR TEST FOR CREATING WAREHOUSEID
});

// Get one warehouse using the id
router.get("/:id", (req, res) => {
  const found = warehouseData.find(
    warehouse => warehouse.id === parseInt(req.params.id)
  );
  if (found) {
    //    ONLY FOR TEST FOR CREATING PRODUCTID
    const newProductId = helper.createNewId(found.products);
    console.log(newProductId);
    //    ONLY FOR TEST FOR CREATING PRODUCTID
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
    found.products = found.products.filter(
      product => req.params.productId != product.id
    );

    newData[0] = found;

    warehouseData = [newData];

    res.send("Product Deleted!");
  } else {
    res
      .status(400)
      .json({ errorMessage: `Warehouse with ID:${req.params.id} not found` });
  }
});

const DataController = {
  addWarehouse: (id, newWarehouse) => {
    warehouseData.push(newWarehouse);
    return warehouseData;
  }
};

router.route("/").post((req, res) => {
  let warehouseId = "1111";
  res.json(DataController.addWarehouse(warehouseId, req.body));
  console.log(req.body);
  // res.send("Warehouse correctly added.");
  res.redirect("/inventory");
});


module.exports = router;
